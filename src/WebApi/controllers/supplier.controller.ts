import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ISupplierService } from './../../Application/interfaces/supplier.service.interface';

@injectable()
export class SupplierController {

  private readonly _supplierService: ISupplierService;

  constructor(@inject("ISupplierService") service: ISupplierService) {
    this._supplierService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._supplierService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._supplierService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._supplierService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._supplierService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._supplierService.delete(id);
    res.status(204).send();
  }
}
