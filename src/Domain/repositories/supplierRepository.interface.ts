import Supplier from '../entities/supplier';

export interface ISupplierRepository {
  findAll(page: number, pageSize: number): Promise<Supplier[]>;
  findById(id: string): Promise<Supplier | null>;
  create(data: Supplier): Promise<void>;
  update(data: Supplier): Promise<void>;
  delete(data: Supplier): Promise<void>;
}
