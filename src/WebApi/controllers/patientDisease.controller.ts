import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPatientDiseaseService } from './../../Application/interfaces/patientDisease.service.interface';

@injectable()
export class PatientDiseaseController {

  private readonly _patientDiseaseService: IPatientDiseaseService;

  constructor(@inject("IPatientDiseaseService") service: IPatientDiseaseService) {
    this._patientDiseaseService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._patientDiseaseService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._patientDiseaseService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._patientDiseaseService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._patientDiseaseService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._patientDiseaseService.delete(id);
    res.status(204).send();
  }
}
