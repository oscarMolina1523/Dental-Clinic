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
import { ITreatmentPlanOrchestratorService } from "../interfaces/treatmentPlanOrchestrator.interface";


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
}