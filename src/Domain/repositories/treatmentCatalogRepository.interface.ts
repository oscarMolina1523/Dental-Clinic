import TreatmentCatalog from '../entities/treatmentCatalog';

export interface ITreatmentCatalogRepository {
  findAll(page: number, pageSize: number): Promise<TreatmentCatalog[]>;
  findById(id: string): Promise<TreatmentCatalog | null>;
  create(data: TreatmentCatalog): Promise<void>;
  update(data: TreatmentCatalog): Promise<void>;
  delete(data: TreatmentCatalog): Promise<void>;
}
