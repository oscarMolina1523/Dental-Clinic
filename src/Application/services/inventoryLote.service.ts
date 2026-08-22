import { inject, injectable } from "tsyringe";
import { IInventoryLoteService } from "../interfaces/inventoryLote.service.interface";
import { IInventoryLoteRepository } from "../../Domain/repositories/inventoryLoteRepository.interface";
import { InventoryLoteDto } from "../dtos/inventoryLote.dto";
import InventoryLote from "../../Domain/entities/inventoryLote";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class InventoryLoteService implements IInventoryLoteService {
  private readonly _inventoryLoteRepository: IInventoryLoteRepository;

  constructor(@inject("IInventoryLoteRepository") repository: IInventoryLoteRepository) {
    this._inventoryLoteRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<InventoryLote[]> {
    return await this._inventoryLoteRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<InventoryLote | null> {
    return await this._inventoryLoteRepository.findById(id);
  }
  
  async create(data: InventoryLoteDto): Promise<InventoryLote> {
    const newData: InventoryLote = new InventoryLote ({
      ...data,
      id: generateId(), 
      // JSON -> Date
      entryDate: new Date(data.entryDate),

      // JSON -> Date | null
      dueDate:
        data.dueDate
          ? new Date(data.dueDate)
          : null
    })

    await this._inventoryLoteRepository.create(newData);
    return newData;
  }

  async update(id: string, data: InventoryLoteDto): Promise<InventoryLote | null> {
    // const existing = await this._inventoryLoteRepository.findById(id);
    // if (!existing) {
    //   return null;
    // }

    // const newData: InventoryLote = new InventoryLote({
    //   ...data,
    //   id,
    // })

    // await this._inventoryLoteRepository.update(newData);
    // return newData;

    //por ahora no permitiremos modificaciones aca ya que hay otros servicios
    //dedicados
    const existing =
      await this._inventoryLoteRepository.findById(id);

    if (!existing) {
      return null;
    }

    throw new Error(
      "Los lotes de inventario no pueden modificarse directamente. Utilice las operaciones de negocio correspondientes."
    );
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._inventoryLoteRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._inventoryLoteRepository.delete(existing);
  }

  // ============================================================
  // STOCK
  // ============================================================

  async increaseStock(
    id: string,
    quantity: number
  ): Promise<InventoryLote | null> {

    const lote =
      await this._inventoryLoteRepository
        .findById(id);

    if (!lote) {
      return null;
    }

    lote.increase(quantity);

    await this._inventoryLoteRepository
      .update(lote);

    return lote;
  }


  async decreaseStock(
    id: string,
    quantity: number
  ): Promise<InventoryLote | null> {

    const lote =
      await this._inventoryLoteRepository
        .findById(id);

    if (!lote) {
      return null;
    }

    lote.decrease(quantity);

    await this._inventoryLoteRepository
      .update(lote);

    return lote;
  }


  // ============================================================
  // INFORMATION
  // ============================================================

  async getQuantity(
    id: string
  ): Promise<number | null> {

    const lote =
      await this._inventoryLoteRepository
        .findById(id);

    if (!lote) {
      return null;
    }

    return lote.currentQuantity;
  }


  //para saber si el lote ya expiro
  async isExpired(
    id: string
  ): Promise<boolean | null> {

    const lote =
      await this._inventoryLoteRepository
        .findById(id);

    if (!lote) {
      return null;
    }

    return lote.isExpired;
  }


  async isValid(
    id: string
  ): Promise<boolean | null> {

    const lote =
      await this._inventoryLoteRepository
        .findById(id);

    if (!lote) {
      return null;
    }

    return lote.isValid;
  }


  async isEmpty(
    id: string
  ): Promise<boolean | null> {

    const lote =
      await this._inventoryLoteRepository
        .findById(id);

    if (!lote) {
      return null;
    }

    return lote.isEmpty;
  }


  async hasStock(
    id: string
  ): Promise<boolean | null> {

    const lote =
      await this._inventoryLoteRepository
        .findById(id);

    if (!lote) {
      return null;
    }

    return lote.hasStock;
  }


  async getDaysUntilExpiration(
    id: string
  ): Promise<number | null> {

    const lote =
      await this._inventoryLoteRepository
        .findById(id);

    if (!lote) {
      return null;
    }

    return lote.daysUntilExpiration;
  }
}
