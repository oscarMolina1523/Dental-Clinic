import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IInventoryService } from './../../Application/interfaces/inventory.service.interface';

@injectable()
export class InventoryController {

  private readonly _inventoryService: IInventoryService;

  constructor(@inject("IInventoryService") service: IInventoryService) {
    this._inventoryService = service;
  }

  getAll = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._inventoryService.findAll(page, pageSize);
    res.json(result);
  }

  create = async (req: Request, res: Response) => {
    const result = await this._inventoryService.create(req.body);
    res.status(201).json(result);
  }

  getById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._inventoryService.findById(id);
    res.json(result);
  }

  update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._inventoryService.update(id, req.body);

    if (!result) {
      return res.status(404).json({
        message: "Inventario no encontrado"
      });
    }

    res.json(result);
  }

  delete = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await this._inventoryService.delete(id);
    res.status(204).send();
  }

  increaseStock = async (req: Request, res: Response) => {

    const id = req.params.id as string;
    const { quantity } = req.body;

    const result =
      await this._inventoryService.increaseStock(
        id,
        quantity
      );

    res.json(result);
  };

  decreaseStock = async (req: Request, res: Response) => {

    const id = req.params.id as string;
    const { quantity } = req.body;

    const result =
      await this._inventoryService.decreaseStock(
        id,
        quantity
      );

    res.json(result);
  };
}
