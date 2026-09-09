import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IMedicalPrescriptionOrchestratorService } from "../../Application/interfaces/medicalPrescriptionOrchestrator";

@injectable()
export class MedicalPrescriptionOrchestratorController {

  private readonly _medicalPrescriptionOrchestratorService:
    IMedicalPrescriptionOrchestratorService;


  constructor(
    @inject("IMedicalPrescriptionOrchestratorService")
    service: IMedicalPrescriptionOrchestratorService
  ) {

    this._medicalPrescriptionOrchestratorService =
      service;
  }


  // ============================================================
  // GET COMPLETE MEDICAL PRESCRIPTION
  // ============================================================

  getById = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    try {

      const result =
        await this._medicalPrescriptionOrchestratorService.getById(
          id
        );


      if (!result) {

        return res.status(404).json({
          message:
            "No se encontró la receta médica"
        });
      }


      return res.json(result);

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo obtener la receta médica"
      });
    }
  };


  // ============================================================
  // CREATE COMPLETE MEDICAL PRESCRIPTION
  // ============================================================

  create = async (
    req: Request,
    res: Response
  ) => {

    try {

      const {
        data,
        details
      } = req.body;


      const result =
        await this._medicalPrescriptionOrchestratorService.create(
          data,
          details
        );


      return res.status(201).json(result);

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear la receta médica"
      });
    }
  };


  // ============================================================
  // UPDATE COMPLETE MEDICAL PRESCRIPTION
  // ============================================================

  update = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    try {

      const {
        data,
        details
      } = req.body;


      const result =
        await this._medicalPrescriptionOrchestratorService.update(
          id,
          data,
          details
        );


      if (!result) {

        return res.status(404).json({
          message:
            "No se encontró la receta médica"
        });
      }


      return res.json(result);

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo actualizar la receta médica"
      });
    }
  };


  // ============================================================
  // DELETE COMPLETE MEDICAL PRESCRIPTION
  // ============================================================

  delete = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    try {

      await this._medicalPrescriptionOrchestratorService.delete(
        id
      );


      return res.status(204).send();

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo eliminar la receta médica"
      });
    }
  };

}