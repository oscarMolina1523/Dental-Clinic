import { inject, injectable } from "tsyringe";

import { IClinicalProgresService } from "../interfaces/clinicalProgres.service.interface";
import {
  IMedicalPrescriptionOrchestratorService,
} from "../interfaces/medicalPrescriptionOrchestrator";

import {
  IDentalChartOrchestratorService,
} from "../interfaces/dentalChartOrchestrator.interface";

import {
  IPatientAttachmentService,
} from "../interfaces/patientAttachment.service.interface";

import {
  IClinicalProgressOrchestratorService,
  ClinicalProgressOrchestratorResult,
} from "../interfaces/clinicalProgressOrchestrator.interface";

import {
  CreateClinicalProgressOrchestratorDto,
} from "../dtos/clinicalProgressOrchestrator.dto";

@injectable()
export class ClinicalProgressOrchestratorService
  implements IClinicalProgressOrchestratorService {

  private readonly _clinicalProgressService: IClinicalProgresService;

  private readonly _medicalPrescriptionOrchestrator:
    IMedicalPrescriptionOrchestratorService;

  private readonly _dentalChartOrchestrator:
    IDentalChartOrchestratorService;

  private readonly _patientAttachmentService:
    IPatientAttachmentService;

  constructor(
    @inject("IClinicalProgresService")
    clinicalProgressService: IClinicalProgresService,

    @inject("IMedicalPrescriptionOrchestratorService")
    medicalPrescriptionOrchestrator:
      IMedicalPrescriptionOrchestratorService,

    @inject("IDentalChartOrchestratorService")
    dentalChartOrchestrator:
      IDentalChartOrchestratorService,

    @inject("IPatientAttachmentService")
    patientAttachmentService:
      IPatientAttachmentService
  ) {
    this._clinicalProgressService =
      clinicalProgressService;

    this._medicalPrescriptionOrchestrator =
      medicalPrescriptionOrchestrator;

    this._dentalChartOrchestrator =
      dentalChartOrchestrator;

    this._patientAttachmentService =
      patientAttachmentService;
  }

  async create(
    data: CreateClinicalProgressOrchestratorDto
  ): Promise<ClinicalProgressOrchestratorResult> {

    /*
     * ============================================================
     * 1. CREAR CLINICAL PROGRESS
     * ============================================================
     */

    const clinicalProgress =
      await this._clinicalProgressService.create(
        data.clinicalProgress
      );

    /*
     * ============================================================
     * 2. CREAR RECETA
     * ============================================================
     */

    let medicalPrescription;

    if (data.medicalPrescription) {

      medicalPrescription =
        await this._medicalPrescriptionOrchestrator.create(
          {
            ...data.medicalPrescription.data,
            clinicalProgressId:
              clinicalProgress.id,
          },
          data.medicalPrescription.details
        );
    }

    /*
     * ============================================================
     * 3. CREAR ODONTOGRAMA
     * ============================================================
     */

    let dentalChart;

    if (data.dentalChart) {

      dentalChart =
        await this._dentalChartOrchestrator.create(
          {
            ...data.dentalChart.dentalChart,
            clinicalProgressId:
              clinicalProgress.id,
          },
          data.dentalChart.details
        );
    }

    /*
     * ============================================================
     * 4. CREAR ADJUNTO
     * ============================================================
     */

    let patientAttachment;

    if (data.patientAttachment) {

      patientAttachment =
        await this._patientAttachmentService.create(
          {
            ...data.patientAttachment,
            clinicalProgressId:
              clinicalProgress.id,
          }
        );
    }

    /*
     * ============================================================
     * 5. RESPUESTA
     * ============================================================
     */

    return {
      clinicalProgress,
      medicalPrescription,
      dentalChart,
      patientAttachment,
    };
  }
}