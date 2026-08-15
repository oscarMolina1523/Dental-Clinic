import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IAppointmentService } from './../../Application/interfaces/appointment.service.interface';

@injectable()
export class AppointmentController {

  private readonly _appointmentService: IAppointmentService;

  constructor(@inject("IAppointmentService") service: IAppointmentService) {
    this._appointmentService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._appointmentService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._appointmentService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._appointmentService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._appointmentService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._appointmentService.delete(id);
    res.status(204).send();
  }
}
