import { inject, injectable } from "tsyringe";

import { ITreatmentPlanService } 
  from "../interfaces/treatmentPlan.service.interface";

import { ITreatmentPlanDetailService } 
  from "../interfaces/treatmentPlanDetail.service.interface";

import { TreatmentPlanDto } 
  from "../dtos/treatmentPlan.dto";

import { TreatmentPlanDetailDto } 
  from "../dtos/treatmentPlanDetail.dto";

import TreatmentPlan 
  from "../../Domain/entities/treatmentPlan";

import TreatmentPlanDetail 
  from "../../Domain/entities/treatmentPlanDetail";
import { ITreatmentPlanOrchestratorService, TreatmentPlanWithDetails } from "../interfaces/treatmentPlanOrchestrator.interface";


export interface CreateTreatmentPlanResult {
  treatmentPlan: TreatmentPlan;
  details: TreatmentPlanDetail[];
}


@injectable()
export class TreatmentPlanOrchestratorService
  implements ITreatmentPlanOrchestratorService {

  constructor(

    @inject("ITreatmentPlanService")
    private readonly _treatmentPlanService:
      ITreatmentPlanService,

    @inject("ITreatmentPlanDetailService")
    private readonly _treatmentPlanDetailService:
      ITreatmentPlanDetailService

  ) {}


  async getAll(
        page: number = 1,
        pageSize: number = 100
    ): Promise<TreatmentPlanWithDetails[]> {

        // --------------------------------------------------------
        // GET TREATMENT PLANS
        // --------------------------------------------------------

        const treatmentPlans =
            await this._treatmentPlanService.findAll(
                page,
                pageSize
            );


        // --------------------------------------------------------
        // GET DETAILS FOR EACH PLAN
        // --------------------------------------------------------

        const result: TreatmentPlanWithDetails[] = [];


        for (const treatmentPlan of treatmentPlans) {

            const details =
                await this._treatmentPlanDetailService
                    .findByPlanId(
                        treatmentPlan.id
                    ) ?? [];


            result.push({

                treatmentPlan,

                details

            });
        }


        return result;
    }


  async create(
    treatmentPlanData: TreatmentPlanDto,
    details: TreatmentPlanDetailDto[]
  ): Promise<CreateTreatmentPlanResult> {

    // =====================================================
    // 1. CREAR EL TREATMENT PLAN
    // =====================================================

    const treatmentPlan =
      await this._treatmentPlanService.create(
        treatmentPlanData
      );


    // =====================================================
    // 2. CREAR CADA TREATMENT PLAN DETAIL
    // =====================================================

    const createdDetails: TreatmentPlanDetail[] = [];


    for (const detail of details) {

      const detailData: TreatmentPlanDetailDto = {

        ...detail,

        // El planId viene del TreatmentPlan recién creado
        planId: treatmentPlan.id

      };


      const createdDetail =
        await this._treatmentPlanDetailService.create(
          detailData
        );


      createdDetails.push(createdDetail);
    }


    // =====================================================
    // 3. RETORNAR TODO
    // =====================================================

    return {

      treatmentPlan,

      details: createdDetails

    };
  }

  // ============================================================
  // DELETE COMPLETE TREATMENT PLAN
  // ============================================================

  async delete(
    planId: string
  ): Promise<boolean> {

    // ------------------------------------------------------------
    // 1. BUSCAR TODOS LOS DETAILS DEL PLAN
    // ------------------------------------------------------------

    const details =
      await this._treatmentPlanDetailService
        .findByPlanId(planId) ?? [];


    // ------------------------------------------------------------
    // 2. ELIMINAR TODOS LOS DETAILS
    // ------------------------------------------------------------

    for (const detail of details) {

      await this._treatmentPlanDetailService
        .delete(detail.id);

    }


    // ------------------------------------------------------------
    // 3. ELIMINAR EL TREATMENT PLAN
    // ------------------------------------------------------------

    await this._treatmentPlanService
      .delete(planId);


    // ------------------------------------------------------------
    // 4. TODO CORRECTO
    // ------------------------------------------------------------

    return true;
  }
}