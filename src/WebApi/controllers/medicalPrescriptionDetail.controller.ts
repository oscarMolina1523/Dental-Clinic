import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IMedicalPrescriptionDetailService } from './../../Application/interfaces/medicalPrescriptionDetail.service.interface';

@injectable()
export class MedicalPrescriptionDetailController {

  private readonly _medicalPrescriptionDetailService: IMedicalPrescriptionDetailService;

  constructor(@inject("IMedicalPrescriptionDetailService") service: IMedicalPrescriptionDetailService) {
    this._medicalPrescriptionDetailService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._medicalPrescriptionDetailService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._medicalPrescriptionDetailService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._medicalPrescriptionDetailService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._medicalPrescriptionDetailService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._medicalPrescriptionDetailService.delete(id);
    res.status(204).send();
  }
}
