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
         * 1. ACTUALIZAR APPOINTMENT
         * ============================================================
         */

        const appointment =
            await this._appointmentService.update(
                id,
                data.appointment
            );

        if (!appointment) {
            return null;
        }

        /*
         * ============================================================
         * 3. ACTUALIZAR PLAN
         *
         * Si el appointment tiene treatmentPlanId, buscamos ese mismo
         * plan y actualizamos sus datos y detalles.
         * ============================================================
         */

        let treatmentPlan: TreatmentPlan | null = null;

        let treatmentPlanDetails:
            TreatmentPlanDetail[] = [];

        if (
            appointment.treatmentPlanId &&
            data.treatmentPlan
        ) {

            /*
             * ACTUALIZAR EL MISMO PLAN
             */

            treatmentPlan =
                await this._treatmentPlanService.update(
                    appointment.treatmentPlanId,
                    data.treatmentPlan.data
                );

            /*
             * ACTUALIZAR SUS DETALLES
             */

            if (treatmentPlan) {

                treatmentPlanDetails =
                    await this.syncTreatmentPlanDetails(
                        treatmentPlan.id,
                        data.treatmentPlan.details
                    );
            }
        }

        /*
         * ============================================================
         * 4. DEVOLVER TODO
         * ============================================================
         */

        return {
            appointment,
            treatment: null, //por el momento no estoy interesado en devolver la data del treatment catalog , solo actualizar y ya
            treatmentPlan,
            treatmentPlanDetails,
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