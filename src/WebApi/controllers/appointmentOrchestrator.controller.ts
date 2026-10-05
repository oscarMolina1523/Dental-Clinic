import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";

import {
  IAppointmentOrchestratorService
} from "../../Application/interfaces/appointmentOrchestrator.service.interface";

@injectable()
export class AppointmentOrchestratorController {

  private readonly _appointmentOrchestratorService:
    IAppointmentOrchestratorService;


  constructor(
    @inject("IAppointmentOrchestratorService")
    service: IAppointmentOrchestratorService
  ) {

    this._appointmentOrchestratorService =
      service;
  }


  // ============================================================
  // GET ALL APPOINTMENTS
  // ============================================================

  getAll = async (
    req: Request,
    res: Response
  ) => {

    try {

      const result =
        await this._appointmentOrchestratorService.getAll();


      return res.json(result);

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudieron obtener las citas médicas"
      });
    }
  };


  // ============================================================
  // GET COMPLETE APPOINTMENT
  // ============================================================

  getById = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    try {

      const result =
        await this._appointmentOrchestratorService.getById(
          id
        );


      if (!result) {

        return res.status(404).json({
          message:
            "No se encontró la cita médica"
        });
      }


      return res.json(result);

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo obtener la cita médica"
      });
    }
  };


  // ============================================================
  // CREATE COMPLETE APPOINTMENT
  // ============================================================

  create = async (
    req: Request,
    res: Response
  ) => {

    try {

      const result =
        await this._appointmentOrchestratorService.create(
          req.body
        );


      return res.status(201).json(result);

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear la cita médica"
      });
    }
  };


  // ============================================================
  // UPDATE COMPLETE APPOINTMENT
  // ============================================================

  update = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    try {

      const result =
        await this._appointmentOrchestratorService.update(
          id,
          req.body
        );


      if (!result) {

        return res.status(404).json({
          message:
            "No se encontró la cita médica"
        });
      }


      return res.json(result);

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo actualizar la cita médica"
      });
    }
  };


  // ============================================================
  // DELETE COMPLETE APPOINTMENT
  // ============================================================

  delete = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    try {

      const result =
        await this._appointmentOrchestratorService.delete(
          id
        );


      if (!result) {

        return res.status(404).json({
          message:
            "No se encontró la cita médica"
        });
      }


      return res.status(204).send();

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo eliminar la cita médica"
      });
    }
  };

}