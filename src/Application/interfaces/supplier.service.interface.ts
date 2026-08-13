import Supplier from "../../Domain/entities/supplier";
import { SupplierDto } from './../dtos/supplier.dto';

export interface ISupplierService {
  findAll(page: number, pageSize: number): Promise<Supplier[]>;
  findById(id: string): Promise<Supplier | null>;
  create(data: SupplierDto): Promise<Supplier>;
  update(id: string, data: SupplierDto): Promise<Supplier | null>;
  delete(id: string): Promise<void>;
}
