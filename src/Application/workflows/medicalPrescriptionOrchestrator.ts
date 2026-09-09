import { inject, injectable } from "tsyringe";
import { IMedicalPrescriptionService } from "../interfaces/medicalPrescription.service.interface";
import { IMedicalPrescriptionDetailService } from "../interfaces/medicalPrescriptionDetail.service.interface";
import { MedicalPrescriptionDto } from "../dtos/medicalPrescription.dto";
import { MedicalPrescriptionDetailDto } from "../dtos/medicalPrescriptionDetail.dto";
import MedicalPrescriptionDetail from "../../Domain/entities/medicalPrescriptionDetail";
import { IMedicalPrescriptionOrchestratorService, MedicalPrescriptionWithDetails } from "../interfaces/medicalPrescriptionOrchestrator";


@injectable()
export class MedicalPrescriptionOrchestratorService
  implements IMedicalPrescriptionOrchestratorService {

  private readonly _medicalPrescriptionService: IMedicalPrescriptionService;

  private readonly _medicalPrescriptionDetailService: IMedicalPrescriptionDetailService;


  constructor(
    @inject("IMedicalPrescriptionService")
    medicalPrescriptionService: IMedicalPrescriptionService,

    @inject("IMedicalPrescriptionDetailService")
    medicalPrescriptionDetailService: IMedicalPrescriptionDetailService
  ) {

    this._medicalPrescriptionService =
      medicalPrescriptionService;

    this._medicalPrescriptionDetailService =
      medicalPrescriptionDetailService;
  }


  // ============================================================
  // GET COMPLETE MEDICAL PRESCRIPTION
  // ============================================================

  async getById(
    id: string
  ): Promise<MedicalPrescriptionWithDetails | null> {

    const medicalPrescription =
      await this._medicalPrescriptionService.findById(id);

    if (!medicalPrescription) {
      return null;
    }


    const details =
      await this._medicalPrescriptionDetailService.findAll(
        1,
        1000
      );


    const medicalPrescriptionDetails =
      details.filter(
        detail =>
          detail.medicalPrescriptionId ===
          medicalPrescription.id
      );


    return {
      medicalPrescription,
      details: medicalPrescriptionDetails
    };
  }


  // ============================================================
  // CREATE COMPLETE MEDICAL PRESCRIPTION
  // ============================================================

  async create(
    data: MedicalPrescriptionDto,
    details: MedicalPrescriptionDetailDto[]
  ): Promise<MedicalPrescriptionWithDetails> {


    // ------------------------------------------------------------
    // CREATE MEDICAL PRESCRIPTION
    // ------------------------------------------------------------

    const medicalPrescription =
      await this._medicalPrescriptionService.create(data);


    // ------------------------------------------------------------
    // CREATE DETAILS
    // ------------------------------------------------------------

    const createdDetails: MedicalPrescriptionDetail[] = [];


    for (const detail of details) {

      const createdDetail =
        await this._medicalPrescriptionDetailService.create({

          ...detail,

          medicalPrescriptionId:
            medicalPrescription.id
        });


      createdDetails.push(
        createdDetail
      );
    }


    return {
      medicalPrescription,
      details: createdDetails
    };
  }


  // ============================================================
  // UPDATE COMPLETE MEDICAL PRESCRIPTION
  // ============================================================

  async update(
    id: string,
    data: MedicalPrescriptionDto,
    details: MedicalPrescriptionDetailDto[]
  ): Promise<MedicalPrescriptionWithDetails | null> {


    // ------------------------------------------------------------
    // UPDATE MEDICAL PRESCRIPTION
    // ------------------------------------------------------------

    const medicalPrescription =
      await this._medicalPrescriptionService.update(
        id,
        data
      );


    if (!medicalPrescription) {
      return null;
    }


    // ------------------------------------------------------------
    // GET EXISTING DETAILS
    // ------------------------------------------------------------

    const existingDetails =
      await this._medicalPrescriptionDetailService.findAll(
        1,
        1000
      );


    const currentDetails =
      existingDetails.filter(
        detail =>
          detail.medicalPrescriptionId === id
      );


    // ------------------------------------------------------------
    // UPDATE / CREATE DETAILS
    // ------------------------------------------------------------

    const updatedDetails: MedicalPrescriptionDetail[] = [];


    for (const detail of details) {


      /*
       * Buscar el detalle existente.
       *
       * Ajusta esta condición dependiendo de los
       * campos que tenga MedicalPrescriptionDetail.
       */

      const existingDetail =
        currentDetails.find(
          existing =>
            existing.medicine ===
            detail.medicine
        );


      // ----------------------------------------------------------
      // UPDATE DETAIL
      // ----------------------------------------------------------

      if (existingDetail) {

        const updated =
          await this._medicalPrescriptionDetailService.update(

            existingDetail.id,

            {
              ...detail,

              medicalPrescriptionId: id
            }
          );


        if (updated) {

          updatedDetails.push(
            updated
          );
        }


      }

      // ----------------------------------------------------------
      // CREATE DETAIL IN CASE THAT IT DOESNT EXISTS
      // ----------------------------------------------------------

      else {

        const created =
          await this._medicalPrescriptionDetailService.create({

            ...detail,

            medicalPrescriptionId: id
          });


        updatedDetails.push(
          created
        );
      }
    }


    return {
      medicalPrescription,
      details: updatedDetails
    };
  }


  // ============================================================
  // DELETE COMPLETE MEDICAL PRESCRIPTION
  // ============================================================

  async delete(
    id: string
  ): Promise<void> {


    // ------------------------------------------------------------
    // GET MEDICAL PRESCRIPTION
    // ------------------------------------------------------------

    const medicalPrescription =
      await this._medicalPrescriptionService.findById(id);


    if (!medicalPrescription) {
      return;
    }


    // ------------------------------------------------------------
    // GET DETAILS
    // ------------------------------------------------------------

    const details =
      await this._medicalPrescriptionDetailService.findAll(
        1,
        1000
      );


    const medicalPrescriptionDetails =
      details.filter(
        detail =>
          detail.medicalPrescriptionId === id
      );


    // ------------------------------------------------------------
    // DELETE DETAILS
    // ------------------------------------------------------------

    for (const detail of medicalPrescriptionDetails) {

      await this._medicalPrescriptionDetailService.delete(
        detail.id
      );
    }


    // ------------------------------------------------------------
    // DELETE MEDICAL PRESCRIPTION
    // ------------------------------------------------------------

    await this._medicalPrescriptionService.delete(
      id
    );
  }
}