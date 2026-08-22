import { inject, injectable } from "tsyringe";
import { IInventoryService } from "../interfaces/inventory.service.interface";
import { IInventoryLoteService } from "../interfaces/inventoryLote.service.interface";
import { IInventoryMovementService } from "../interfaces/inventoryMovement.service.interface";

import Inventory from "../../Domain/entities/inventory";
import InventoryLote from "../../Domain/entities/inventoryLote";
import InventoryMovement from "../../Domain/entities/inventoryMovement";

import { InventoryMovementStatus } from "../../Domain/types/inventoryMovementsStatus.enum";
import { IInventoryOrchestratorService } from "../interfaces/inventoryOrchestrator.interface";

@injectable()
export class InventoryOrchestratorService
  implements IInventoryOrchestratorService {

  private readonly _inventoryService: IInventoryService;
  private readonly _inventoryLoteService: IInventoryLoteService;
  private readonly _inventoryMovementService: IInventoryMovementService;


  constructor(
    @inject("IInventoryService")
    inventoryService: IInventoryService,

    @inject("IInventoryLoteService")
    inventoryLoteService: IInventoryLoteService,

    @inject("IInventoryMovementService")
    inventoryMovementService: IInventoryMovementService
  ) {

    this._inventoryService = inventoryService;
    this._inventoryLoteService = inventoryLoteService;
    this._inventoryMovementService = inventoryMovementService;
  }


  // ============================================================
  // CREATE LOT
  // ============================================================

  async createLote(data: {
    productId: string;
    supplierId: string;
    loteNumber: string;
    quantity: number;
    dueDate: Date | null;
    entryDate: Date;
    userId: string;
    observation?: string;
  }): Promise<{
    inventory: Inventory;
    lote: InventoryLote;
    movement: InventoryMovement;
  }> {

    const inventory =
      await this._inventoryService.findById(
        data.productId
      );

    if (!inventory) {
      throw new Error(
        "No existe inventario para el producto"
      );
    }


    // ==========================================================
    // 1. CREAR LOTE
    // ==========================================================

    const lote =
      await this._inventoryLoteService.create({
        productId: data.productId,
        supplierId: data.supplierId,
        loteNumber: data.loteNumber,
        quantity: data.quantity,
        dueDate: data.dueDate ,
        entryDate: data.entryDate
      });


    // ==========================================================
    // 2. ACTUALIZAR INVENTARIO GENERAL
    // ==========================================================

    const updatedInventory =
      await this._inventoryService.increaseStock(
        inventory.id,
        data.quantity
      );

    if (!updatedInventory) {
      throw new Error(
        "No se pudo actualizar el inventario general"
      );
    }


    // ==========================================================
    // 3. REGISTRAR MOVIMIENTO
    // ==========================================================

    const movement =
      await this._inventoryMovementService.create({

        productId: data.productId,

        type: InventoryMovementStatus.ENTRY,

        quantity: data.quantity,

        userId: data.userId,

        observation:
          data.observation ??
          `Entrada de inventario por creación del lote ${data.loteNumber}`
      });


    return {
      inventory: updatedInventory,
      lote,
      movement
    };
  }


  // ============================================================
  // INCREASE LOT STOCK
  // ============================================================

  async increaseLoteStock(
    loteId: string,
    quantity: number,
    userId: string,
    observation?: string
  ): Promise<{
    inventory: Inventory;
    lote: InventoryLote;
    movement: InventoryMovement;
  }> {

    const lote =
      await this._inventoryLoteService.findById(
        loteId
      );

    if (!lote) {
      throw new Error(
        "El lote no existe"
      );
    }


    const inventory =
      await this._inventoryService.findById(
        lote.productId
      );

    if (!inventory) {
      throw new Error(
        "No existe inventario para el producto del lote"
      );
    }


    // ==========================================================
    // 1. AUMENTAR LOTE
    // ==========================================================

    const updatedLote =
      await this._inventoryLoteService.increaseStock(
        loteId,
        quantity
      );

    if (!updatedLote) {
      throw new Error(
        "No se pudo actualizar el lote"
      );
    }


    // ==========================================================
    // 2. AUMENTAR INVENTARIO GENERAL
    // ==========================================================

    const updatedInventory =
      await this._inventoryService.increaseStock(
        inventory.id,
        quantity
      );

    if (!updatedInventory) {
      throw new Error(
        "No se pudo actualizar el inventario general"
      );
    }


    // ==========================================================
    // 3. AUDITORÍA
    // ==========================================================

    const movement =
      await this._inventoryMovementService.create({

        productId: lote.productId,

        type: InventoryMovementStatus.ENTRY,

        quantity,

        userId,

        observation:
          observation ??
          `Entrada de ${quantity} unidades al lote ${lote.loteNumber}`
      });


    return {
      inventory: updatedInventory,
      lote: updatedLote,
      movement
    };
  }


  // ============================================================
  // DECREASE LOT STOCK
  // ============================================================

  async decreaseLoteStock(
    loteId: string,
    quantity: number,
    userId: string,
    observation?: string
  ): Promise<{
    inventory: Inventory;
    lote: InventoryLote;
    movement: InventoryMovement;
  }> {

    const lote =
      await this._inventoryLoteService.findById(
        loteId
      );

    if (!lote) {
      throw new Error(
        "El lote no existe"
      );
    }


    const inventory =
      await this._inventoryService.findById(
        lote.productId
      );

    if (!inventory) {
      throw new Error(
        "No existe inventario para el producto del lote"
      );
    }


    // ==========================================================
    // 1. DISMINUIR LOTE
    // ==========================================================

    const updatedLote =
      await this._inventoryLoteService.decreaseStock(
        loteId,
        quantity
      );

    if (!updatedLote) {
      throw new Error(
        "No se pudo actualizar el lote"
      );
    }


    // ==========================================================
    // 2. DISMINUIR INVENTARIO GENERAL
    // ==========================================================

    const updatedInventory =
      await this._inventoryService.decreaseStock(
        inventory.id,
        quantity
      );

    if (!updatedInventory) {
      throw new Error(
        "No se pudo actualizar el inventario general"
      );
    }


    // ==========================================================
    // 3. AUDITORÍA
    // ==========================================================

    const movement =
      await this._inventoryMovementService.create({

        productId: lote.productId,

        type: InventoryMovementStatus.EXIT,

        quantity,

        userId,

        observation:
          observation ??
          `Salida de ${quantity} unidades del lote ${lote.loteNumber}`
      });


    return {
      inventory: updatedInventory,
      lote: updatedLote,
      movement
    };
  }


  // ============================================================
  // EXPIRE LOT
  // ============================================================

  async expireLote(
    loteId: string,
    userId: string,
    observation?: string
  ): Promise<{
    inventory: Inventory;
    lote: InventoryLote;
    movement: InventoryMovement;
  }> {

    const lote =
      await this._inventoryLoteService.findById(
        loteId
      );

    if (!lote) {
      throw new Error(
        "El lote no existe"
      );
    }


    if (!lote.isExpired) {
      throw new Error(
        "El lote todavía no está vencido"
      );
    }


    if (lote.isEmpty) {
      throw new Error(
        "El lote ya no tiene existencia"
      );
    }


    const quantity =
      lote.currentQuantity;


    const inventory =
      await this._inventoryService.findById(
        lote.productId
      );

    if (!inventory) {
      throw new Error(
        "No existe inventario para el producto del lote"
      );
    }


    // ==========================================================
    // 1. SACAR EXISTENCIA DEL LOTE
    // ==========================================================

    const updatedLote =
      await this._inventoryLoteService.decreaseStock(
        loteId,
        quantity
      );

    if (!updatedLote) {
      throw new Error(
        "No se pudo actualizar el lote"
      );
    }


    // ==========================================================
    // 2. SACAR EXISTENCIA DEL INVENTARIO GENERAL
    // ==========================================================

    const updatedInventory =
      await this._inventoryService.decreaseStock(
        inventory.id,
        quantity
      );

    if (!updatedInventory) {
      throw new Error(
        "No se pudo actualizar el inventario general"
      );
    }


    // ==========================================================
    // 3. AUDITORÍA
    // ==========================================================

    const movement =
      await this._inventoryMovementService.create({

        productId: lote.productId,

        type: InventoryMovementStatus.EXPIRED,

        quantity,

        userId,

        observation:
          observation ??
          `Lote ${lote.loteNumber} retirado por vencimiento`
      });


    return {
      inventory: updatedInventory,
      lote: updatedLote,
      movement
    };
  } 
}