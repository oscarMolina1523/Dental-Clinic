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
    try {
      const result =
        await this._inventoryOrchestratorService.createLote(
          req.body
        );

      return res.status(201).json(result);

    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear el lote"
      });
    }
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

    try {
      const result =
        await this._inventoryOrchestratorService.increaseLoteStock(
          loteId,
          quantity,
          userId,
          observation
        );

      return res.json(result);

    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear el lote"
      });
    }

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

    try {
      const result =
        await this._inventoryOrchestratorService.decreaseLoteStock(
          loteId,
          quantity,
          userId,
          observation
        );

      return res.json(result);

    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear el lote"
      });
    }

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

    try {
      const result =
        await this._inventoryOrchestratorService.expireLote(
          loteId,
          userId,
          observation
        );

      return res.json(result);

    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear el lote"
      });
    }
  };

}