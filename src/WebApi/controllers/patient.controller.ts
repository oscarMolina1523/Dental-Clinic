import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPatientService } from './../../Application/interfaces/patient.service.interface';

@injectable()
export class PatientController {

  private readonly _patientService: IPatientService;

  constructor(@inject("IPatientService") service: IPatientService) {
    this._patientService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._patientService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._patientService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._patientService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._patientService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._patientService.delete(id);
    res.status(204).send();
  }
}
