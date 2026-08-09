import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPatientAttachmentService } from './../../Application/interfaces/patientAttachment.service.interface';

@injectable()
export class PatientAttachmentController {

  private readonly _patientAttachmentService: IPatientAttachmentService;

  constructor(@inject("IPatientAttachmentService") service: IPatientAttachmentService) {
    this._patientAttachmentService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._patientAttachmentService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._patientAttachmentService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._patientAttachmentService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._patientAttachmentService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._patientAttachmentService.delete(id);
    res.status(204).send();
  }
}
