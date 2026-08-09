import Disease from '../entities/disease';

export interface IDiseaseRepository {
  findAll(page: number, pageSize: number): Promise<Disease[]>;
  findById(id: string): Promise<Disease | null>;
  create(data: Disease): Promise<void>;
  update(data: Disease): Promise<void>;
  delete(data: Disease): Promise<void>;
}
