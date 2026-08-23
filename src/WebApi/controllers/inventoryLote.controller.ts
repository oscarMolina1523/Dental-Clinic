import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IInventoryLoteService } from './../../Application/interfaces/inventoryLote.service.interface';

@injectable()
export class InventoryLoteController {

  private readonly _inventoryLoteService: IInventoryLoteService;

  constructor(@inject("IInventoryLoteService") service: IInventoryLoteService) {
    this._inventoryLoteService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._inventoryLoteService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._inventoryLoteService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._inventoryLoteService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._inventoryLoteService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._inventoryLoteService.delete(id);
    res.status(204).send();
  }

  // ============================================================
  // STOCK
  // ============================================================

  increaseStock = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const quantity =
      Number(req.body.quantity);

    const result =
      await this._inventoryLoteService
        .increaseStock(id, quantity);

    res.json(result);
  };


  decreaseStock = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const quantity =
      Number(req.body.quantity);

    const result =
      await this._inventoryLoteService
        .decreaseStock(id, quantity);

    res.json(result);
  };


  // ============================================================
  // INFORMATION
  // ============================================================

  getQuantity = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._inventoryLoteService
        .getQuantity(id);

    res.json(result);
  };


  isExpired = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._inventoryLoteService
        .isExpired(id);

    res.json(result);
  };


  isValid = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._inventoryLoteService
        .isValid(id);

    res.json(result);
  };


  isEmpty = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._inventoryLoteService
        .isEmpty(id);

    res.json(result);
  };


  hasStock = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._inventoryLoteService
        .hasStock(id);

    res.json(result);
  };


  getDaysUntilExpiration = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._inventoryLoteService
        .getDaysUntilExpiration(id);

    res.json(result);
  };
  
}
