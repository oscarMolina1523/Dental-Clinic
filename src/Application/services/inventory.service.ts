import { inject, injectable } from "tsyringe";
import { IInventoryService } from "../interfaces/inventory.service.interface";
import { IInventoryRepository } from "../../Domain/repositories/inventoryRepository.interface";
import { InventoryDto } from "../dtos/inventory.dto";
import Inventory from "../../Domain/entities/inventory";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class InventoryService implements IInventoryService {
  private readonly _inventoryRepository: IInventoryRepository;

  constructor(@inject("IInventoryRepository") repository: IInventoryRepository) {
    this._inventoryRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<Inventory[]> {
    return await this._inventoryRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Inventory | null> {
    return await this._inventoryRepository.findById(id);
  }

  async findByProduct(id: string): Promise<Inventory | null> {
    return await this._inventoryRepository.findByProduct(id);
  }

  async create(data: InventoryDto): Promise<Inventory> {
    const existing =
      await this._inventoryRepository.findByProduct(
        data.productId
      );

    if (existing) {
      throw new Error(
        "El producto ya tiene un inventario registrado"
      );
    }

    const newData: Inventory = new Inventory({
      ...data,
      id: generateId(),
    })

    await this._inventoryRepository.create(newData);
    return newData;
  }

  //este update lo usare para modificar el stock minimo
  async update(id: string, data: InventoryDto): Promise<Inventory | null> {
    const existing = await this._inventoryRepository.findById(id);
    if (!existing) {
      return null;
    }

    // const newData: Inventory = new Inventory({
    //   ...data,
    //   id,
    // })

    //le decimos que el actual modelo de existencia va
    //tener el minimum stock que se esta mandando en la 
    //peticion
    existing.minimumStock = data.minimumStock;

    await this._inventoryRepository.update(existing);
    return existing;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._inventoryRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._inventoryRepository.delete(existing);
  }

  async increaseStock(
    id: string,
    quantity: number
  ): Promise<Inventory | null> {

    const inventory =
      await this._inventoryRepository.findById(id);

    if (!inventory) {
      return null;
    }

    // DOMAIN (en memoria hacer la suma)
    inventory.increase(quantity);

    // PERSISTENCIA (peticion a base de datos)
    await this._inventoryRepository.update(inventory);

    return inventory;
  }

  async decreaseStock(
    id: string,
    quantity: number
  ): Promise<Inventory | null> {

    const inventory =
      await this._inventoryRepository.findById(id);

    if (!inventory) {
      return null;
    }

    // DOMAIN (en memoria hacer la resta)
    inventory.decrease(quantity);

    // PERSISTENCIA (hacer la peticion a la base de datos)
    await this._inventoryRepository.update(inventory);

    return inventory;
  }
}


