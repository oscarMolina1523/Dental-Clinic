import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IAppointmentService } from './../../Application/interfaces/appointment.service.interface';

@injectable()
export class AppointmentController {

  private readonly _appointmentService: IAppointmentService;

  constructor(@inject("IAppointmentService") service: IAppointmentService) {
    this._appointmentService = service;
  }

  getAll = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._appointmentService.findAll(page, pageSize);
    res.json(result);
  }

  create = async (req: Request, res: Response) => {
    const result = await this._appointmentService.create(req.body);
    res.status(201).json(result);
  }

  getById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._appointmentService.findById(id);
    res.json(result);
  }

  update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._appointmentService.update(id, req.body);
    res.json(result);
  }

  delete = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await this._appointmentService.delete(id);
    res.status(204).send();
  }

  // ============================================================
  // APPOINTMENT STATE
  // ============================================================

  confirm = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._appointmentService.confirm(id);

    res.json(result);
  };

  start = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._appointmentService.start(id);

    res.json(result);
  };

  complete = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._appointmentService.complete(id);

    res.json(result);
  };

  cancel = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const { notes } = req.body;

    const result =
      await this._appointmentService.cancel(
        id,
        notes
      );

    res.json(result);
  };

  markAsNoShow = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._appointmentService.markAsNoShow(
        id
      );

    res.json(result);
  };

  // ============================================================
  // REMINDER
  // ============================================================

  markReminderAsSent = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._appointmentService.markReminderAsSent(
        id
      );

    res.json(result);
  };

  // ============================================================
  // INFORMATION
  // ============================================================

  getDurationInMinutes = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._appointmentService.getDurationInMinutes(
        id
      );

    res.json({
      appointmentId: id,
      durationInMinutes: result
    });
  };

  isCancelled = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._appointmentService.isCancelled(id);

    res.json({
      appointmentId: id,
      isCancelled: result
    });
  };

  isCompleted = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._appointmentService.isCompleted(id);

    res.json({
      appointmentId: id,
      isCompleted: result
    });
  };

  isPending = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._appointmentService.isPending(id);

    res.json({
      appointmentId: id,
      isPending: result
    });
  };
}
