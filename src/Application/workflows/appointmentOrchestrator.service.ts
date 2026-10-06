import { inject, injectable } from "tsyringe";

import {
    IAppointmentService,
} from "../interfaces/appointment.service.interface";

import {
    ITreatmentPlanService,
} from "../interfaces/treatmentPlan.service.interface";

import {
    ITreatmentPlanDetailService,
} from "../interfaces/treatmentPlanDetail.service.interface";

import Appointment from "../../Domain/entities/appointment";
import TreatmentPlan from "../../Domain/entities/treatmentPlan";
import TreatmentPlanDetail from "../../Domain/entities/treatmentPlanDetail";
import { AppointmentWithDetails, CreateAppointmentOrchestratorDto, IAppointmentOrchestratorService } from "../interfaces/appointmentOrchestrator.service.interface";
import { ITreatmentCatalogService } from "../interfaces/treatmentCatalog.service.interface";
import TreatmentCatalog from "../../Domain/entities/treatmentCatalog";

@injectable()
export class AppointmentOrchestratorService
    implements IAppointmentOrchestratorService {

    private readonly _appointmentService: IAppointmentService;

    private readonly _treatmentService: ITreatmentCatalogService;

    private readonly _treatmentPlanService: ITreatmentPlanService;

    private readonly _treatmentPlanDetailService:
        ITreatmentPlanDetailService;

    constructor(

        @inject("IAppointmentService")
        appointmentService: IAppointmentService,

        @inject("ITreatmentCatalogService")
        treatmentService: ITreatmentCatalogService,

        @inject("ITreatmentPlanService")
        treatmentPlanService: ITreatmentPlanService,

        @inject("ITreatmentPlanDetailService")
        treatmentPlanDetailService:
            ITreatmentPlanDetailService

    ) {

        this._appointmentService =
            appointmentService;

        this._treatmentService =
            treatmentService;

        this._treatmentPlanService =
            treatmentPlanService;

        this._treatmentPlanDetailService =
            treatmentPlanDetailService;
    }

    async create(
        data: CreateAppointmentOrchestratorDto
    ): Promise<AppointmentWithDetails> {

        const {
            treatmentId,
            treatmentPlanId,
        } = data.appointment;

        // ============================================================
        // 1. NO PERMITIR TRATAMIENTO INDIVIDUAL Y PLAN AL MISMO TIEMPO
        // ============================================================

        if (treatmentPlanId && treatmentId) {
            throw new Error(
                "La cita no puede tener un tratamiento individual y un plan de tratamiento al mismo tiempo"
            );
        }

        // ============================================================
        // 2. TRATAMIENTO INDIVIDUAL
        //    El tratamiento YA EXISTE en el catálogo.
        // ============================================================

        let treatment: TreatmentCatalog | null = null;

        if (treatmentId) {

            treatment =
                await this._treatmentService.findById(
                    treatmentId
                );

            if (!treatment) {
                throw new Error(
                    "El tratamiento seleccionado no existe"
                );
            }
        }

        // ============================================================
        // 3. CREAR TREATMENT PLAN ANTES DEL APPOINTMENT
        // ============================================================

        let treatmentPlan: TreatmentPlan | null = null;

        let treatmentPlanDetails:
            TreatmentPlanDetail[] = [];

        if (data.treatmentPlan) {

            treatmentPlan =
                await this._treatmentPlanService.create({
                    ...data.treatmentPlan.data,
                });

            // Crear los detalles usando el ID del plan recién creado
            for (
                const detail
                of data.treatmentPlan.details
            ) {

                const createdDetail =
                    await this._treatmentPlanDetailService.create({

                        ...detail,

                        planId: treatmentPlan.id,
                    });

                treatmentPlanDetails.push(
                    createdDetail
                );
            }
        }

        // ============================================================
        // 4. PREPARAR APPOINTMENT CON LA REFERENCIA CORRECTA
        // ============================================================

        const appointmentData = {
            ...data.appointment,

            // Si se creó un plan, el appointment apunta a ese plan
            treatmentPlanId:
                treatmentPlan?.id ?? undefined,

            // Si existe tratamiento individual, conserva su ID
            treatmentId:
                treatment ? treatment.id : undefined,
        };

        // ============================================================
        // 5. CREAR APPOINTMENT AL FINAL
        // ============================================================

        const appointment =
            await this._appointmentService.create(
                appointmentData
            );

        // ============================================================
        // 6. RETORNAR TODO
        // ============================================================

        return {
            appointment,
            treatment,
            treatmentPlan,
            treatmentPlanDetails,
        };
    }

    async getById(
        id: string
    ): Promise<AppointmentWithDetails | null> {

        // ============================================================
        // 1. BUSCAR APPOINTMENT
        // ============================================================

        const appointment =
            await this._appointmentService.findById(id);

        if (!appointment) {
            return null;
        }

        // ============================================================
        // 2. VALIDAR QUE NO TENGA TRATAMIENTO Y PLAN AL MISMO TIEMPO
        // ============================================================

        if (
            appointment.treatmentId &&
            appointment.treatmentPlanId
        ) {
            throw new Error(
                "La cita no puede tener un tratamiento individual y un plan de tratamiento al mismo tiempo"
            );
        }

        // ============================================================
        // 3. TRATAMIENTO DEL CATÁLOGO
        // ============================================================

        let treatment: TreatmentCatalog | null = null;

        if (appointment.treatmentId) {

            treatment =
                await this._treatmentService.findById(
                    appointment.treatmentId
                );
        }

        // ============================================================
        // 4. TREATMENT PLAN
        // ============================================================

        let treatmentPlan: TreatmentPlan | null = null;

        let treatmentPlanDetails:
            TreatmentPlanDetail[] = [];

        if (appointment.treatmentPlanId) {

            treatmentPlan =
                await this._treatmentPlanService.findById(
                    appointment.treatmentPlanId
                );

            // ========================================================
            // 5. DETALLES DEL PLAN
            // ========================================================

            if (treatmentPlan) {

                treatmentPlanDetails =
                    await this._treatmentPlanDetailService
                        .findByPlanId(
                            treatmentPlan.id
                        ) ?? [];
            }
        }

        // ============================================================
        // 6. RETORNAR APPOINTMENT + TRATAMIENTO O PLAN
        // ============================================================

        return {
            appointment,
            treatment,
            treatmentPlan,
            treatmentPlanDetails,
        };
    }

    async getAll(): Promise<AppointmentWithDetails[]> {

        const appointments =
            await this._appointmentService.findAll(
                1,
                100
            );

        return Promise.all(

            appointments.map(
                async (
                    appointment: Appointment
                ) => {

                    // ====================================================
                    // VALIDAR QUE NO TENGA TRATAMIENTO Y PLAN A LA VEZ
                    // ====================================================

                    if (
                        appointment.treatmentId &&
                        appointment.treatmentPlanId
                    ) {
                        throw new Error(
                            `La cita ${appointment.id} no puede tener un tratamiento individual y un plan de tratamiento al mismo tiempo`
                        );
                    }

                    // ====================================================
                    // INICIALIZAR RESPUESTA
                    // ====================================================

                    let treatment:
                        TreatmentCatalog | null = null;

                    let treatmentPlan:
                        TreatmentPlan | null = null;

                    let treatmentPlanDetails:
                        TreatmentPlanDetail[] = [];

                    // ====================================================
                    // TRATAMIENTO DEL CATÁLOGO
                    // ====================================================

                    if (appointment.treatmentId) {

                        treatment =
                            await this._treatmentService.findById(
                                appointment.treatmentId
                            );
                    }

                    // ====================================================
                    // TREATMENT PLAN
                    // ====================================================

                    if (appointment.treatmentPlanId) {

                        treatmentPlan =
                            await this._treatmentPlanService.findById(
                                appointment.treatmentPlanId
                            );

                        // =================================================
                        // DETALLES DEL PLAN
                        // =================================================

                        if (treatmentPlan) {

                            treatmentPlanDetails =
                                await this._treatmentPlanDetailService
                                    .findByPlanId(
                                        treatmentPlan.id
                                    ) ?? [];
                        }
                    }

                    // ====================================================
                    // RETORNAR TODO
                    // ====================================================

                    return {
                        appointment,
                        treatment,
                        treatmentPlan,
                        treatmentPlanDetails,
                    };
                }
            )
        );
    }

    async update(
        id: string,
        data: CreateAppointmentOrchestratorDto
    ): Promise<AppointmentWithDetails | null> {

        /*
         * ============================================================
         * 1. BUSCAR LA CITA ACTUAL
         * ============================================================
         */

        const existingAppointment =
            await this._appointmentService.findById(id);

        if (!existingAppointment) {
           throw new Error(
                "La cita no existe"
            );
        }


        /*
         * ============================================================
         * 2. VALIDAR QUE NO VENGAN TREATMENT + PLAN
         * ============================================================
         */

        if (
            data.appointment.treatmentId &&
            data.appointment.treatmentPlanId
        ) {
            throw new Error(
                "La cita no puede tener un tratamiento individual y un plan de tratamiento al mismo tiempo"
            );
        }


        /*
         * ============================================================
         * 3. LA CITA YA TENÍA UN TREATMENT PLAN
         *
         * No creamos otro plan.
         *
         * Solamente:
         * - actualizamos el mismo plan
         * - agregamos details nuevos
         * - actualizamos details existentes
         * - eliminamos details que ya no vienen
         * ============================================================
         */

        if (existingAppointment.treatmentPlanId) {

            /*
             * Si viene treatmentPlan, sincronizamos sus detalles.
             */

            if (data.treatmentPlan) {

                const treatmentPlan =
                    await this._treatmentPlanService.update(
                        existingAppointment.treatmentPlanId,
                        data.treatmentPlan.data
                    );

                if (!treatmentPlan) {
                    throw new Error(
                        "No se encontró el plan de tratamiento de la cita"
                    );
                }


                /*
                 * Sincronizar details del mismo plan
                 */

                const treatmentPlanDetails =
                    await this.syncTreatmentPlanDetails(
                        existingAppointment.treatmentPlanId,
                        data.treatmentPlan.details
                    );


                /*
                 * Actualizar appointment manteniendo
                 * el mismo treatmentPlanId
                 */

                const appointment =
                    await this._appointmentService.update(
                        id,
                        {
                            ...data.appointment,

                            treatmentId: undefined,

                            treatmentPlanId:
                                existingAppointment.treatmentPlanId,
                        }
                    );

                if (!appointment) {
                    return null;
                }


                return {
                    appointment,
                    treatment: null,
                    treatmentPlan,
                    treatmentPlanDetails,
                };
            }


            /*
             * Si no viene treatmentPlan, simplemente
             * actualizamos el appointment.
             */

            const appointment =
                await this._appointmentService.update(
                    id,
                    {
                        ...data.appointment,
                        treatmentPlanId:
                            existingAppointment.treatmentPlanId,
                        treatmentId: undefined,
                    }
                );

            if (!appointment) {
                return null;
            }


            return {
                appointment,
                treatment: null,
                treatmentPlan: null,
                treatmentPlanDetails: [],
            };
        }


        /*
         * ============================================================
         * 4. LA CITA ANTES TENÍA UN TREATMENT ID
         *
         * Si ahora viene treatmentPlan significa que el usuario
         * agregó uno o más servicios y debemos convertir:
         *
         * treatmentId
         *
         * en
         *
         * treatmentPlanId
         * ============================================================
         */

        if (
            existingAppointment.treatmentId &&
            data.treatmentPlan
        ) {

            /*
             * CREAR EL NUEVO PLAN
             */

            const treatmentPlan =
                await this._treatmentPlanService.create({
                    ...data.treatmentPlan.data,
                });


            /*
             * CREAR LOS DETAILS DEL PLAN
             */

            const treatmentPlanDetails:
                TreatmentPlanDetail[] = [];

            for (
                const detail
                of data.treatmentPlan.details
            ) {

                const createdDetail =
                    await this._treatmentPlanDetailService.create({
                        ...detail,
                        planId: treatmentPlan.id,
                    });

                treatmentPlanDetails.push(
                    createdDetail
                );
            }


            /*
             * ACTUALIZAR APPOINTMENT
             *
             * IMPORTANTE:
             *
             * Se elimina treatmentId
             * y se asigna treatmentPlanId.
             */

            const appointment =
                await this._appointmentService.update(
                    id,
                    {
                        ...data.appointment,

                        treatmentId: undefined,

                        treatmentPlanId:
                            treatmentPlan.id,
                    }
                );

            if (!appointment) {
                return null;
            }


            return {
                appointment,
                treatment: null,
                treatmentPlan,
                treatmentPlanDetails,
            };
        }


        /*
         * ============================================================
         * 5. SIGUE SIENDO UN SOLO TREATMENT
         *
         * Ejemplo:
         *
         * Antes:
         * treatmentId = A
         *
         * Ahora:
         * treatmentId = B
         *
         * Solo cambiamos el ID.
         *
         * NO creamos TreatmentPlan.
         * NO modificamos TreatmentCatalog.
         * ============================================================
         */

        const appointment =
            await this._appointmentService.update(
                id,
                {
                    ...data.appointment,

                    treatmentPlanId: undefined,
                }
            );

        if (!appointment) {
            return null;
        }


        return {
            appointment,
            treatment: null,
            treatmentPlan: null,
            treatmentPlanDetails: [],
        };
    }

    private async syncTreatmentPlanDetails(
        planId: string,
        incomingDetails: any[]
    ): Promise<TreatmentPlanDetail[]> {

        /*
         * ============================================================
         * DETAILS ACTUALES
         * ============================================================
         */

        const existingDetails =
            await this._treatmentPlanDetailService
                .findByPlanId(planId) ?? [];


        /*
         * ============================================================
         * ACTUALIZAR / CREAR
         * ============================================================
         */

        const result:
            TreatmentPlanDetail[] = [];


        for (
            const detail
            of incomingDetails
        ) {

            /*
             * DETAIL EXISTENTE
             */

            if (detail.id) {

                const updated =
                    await this._treatmentPlanDetailService
                        .update(
                            detail.id,
                            {
                                ...detail,
                                planId,
                            }
                        );

                if (updated) {

                    result.push(updated);
                }

            }

            /*
             * NUEVO DETAIL
             */

            else {

                const created =
                    await this._treatmentPlanDetailService
                        .create({
                            ...detail,
                            planId,
                        });

                result.push(created);
            }
        }


        /*
         * ============================================================
         * ELIMINAR DETAILS QUE YA NO VIENEN
         * ============================================================
         */

        const incomingIds =
            incomingDetails
                .filter(detail => detail.id)
                .map(detail => detail.id);


        for (
            const existing
            of existingDetails
        ) {

            if (
                !incomingIds.includes(
                    existing.id
                )
            ) {

                await this._treatmentPlanDetailService
                    .delete(existing.id);
            }
        }


        return result;
    }

    async delete(
        id: string
    ): Promise<boolean> {

        const appointment =
            await this._appointmentService.findById(id);

        if (!appointment) {
            return false;
        }


        /*
         * ============================================================
         * ELIMINAR PLAN
         * ============================================================
         */

        if (appointment.treatmentPlanId) {

            const details =
                await this._treatmentPlanDetailService
                    .findByPlanId(
                        appointment.treatmentPlanId
                    ) ?? [];


            for (const detail of details) {

                await this._treatmentPlanDetailService
                    .delete(detail.id);
            }


            await this._treatmentPlanService
                .delete(
                    appointment.treatmentPlanId
                );
        }

        /*
         * ============================================================
         * ELIMINAR APPOINTMENT
         * ============================================================
         */

        await this._appointmentService.delete(id);

        return true;
    }
}