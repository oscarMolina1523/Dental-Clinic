import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IInventoryOrchestratorService } from "../../Application/interfaces/inventoryOrchestrator.interface";

@injectable()
export class InventoryOrchestratorController {

  private readonly _inventoryOrchestratorService:
    IInventoryOrchestratorService;

  constructor(
    @inject("IInventoryOrchestratorService")
    service: IInventoryOrchestratorService
  ) {
    this._inventoryOrchestratorService = service;
  }


  // ============================================================
  // CREATE LOT
  // ============================================================

  createLote = async (
    req: Request,
    res: Response
  ) => {

    const result =
      await this._inventoryOrchestratorService.createLote(
        req.body
      );

    res.status(201).json(result);
  };


  // ============================================================
  // INCREASE LOT STOCK
  // ============================================================

  increaseLoteStock = async (
    req: Request,
    res: Response
  ) => {

    const loteId = req.params.id as string;

    const {
      quantity,
      userId,
      observation
    } = req.body;

    const result =
      await this._inventoryOrchestratorService.increaseLoteStock(
        loteId,
        quantity,
        userId,
        observation
      );

    res.json(result);
  };


  // ============================================================
  // DECREASE LOT STOCK
  // ============================================================

  decreaseLoteStock = async (
    req: Request,
    res: Response
  ) => {

    const loteId = req.params.id as string;

    const {
      quantity,
      userId,
      observation
    } = req.body;

    const result =
      await this._inventoryOrchestratorService.decreaseLoteStock(
        loteId,
        quantity,
        userId,
        observation
      );

    res.json(result);
  };


  // ============================================================
  // EXPIRE LOT
  // ============================================================

  expireLote = async (
    req: Request,
    res: Response
  ) => {

    const loteId = req.params.id as string;

    const {
      userId,
      observation
    } = req.body;

    const result =
      await this._inventoryOrchestratorService.expireLote(
        loteId,
        userId,
        observation
      );

    res.json(result);
  };

}