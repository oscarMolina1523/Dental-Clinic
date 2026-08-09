import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IMedicalPrescriptionService } from './../../Application/interfaces/medicalPrescription.service.interface';

@injectable()
export class MedicalPrescriptionController {

  private readonly _medicalPrescriptionService: IMedicalPrescriptionService;

  constructor(@inject("IMedicalPrescriptionService") service: IMedicalPrescriptionService) {
    this._medicalPrescriptionService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._medicalPrescriptionService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._medicalPrescriptionService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._medicalPrescriptionService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._medicalPrescriptionService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._medicalPrescriptionService.delete(id);
    res.status(204).send();
  }
}
