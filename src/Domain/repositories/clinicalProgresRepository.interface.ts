import ClinicalProgres from '../entities/clinicalProgres';

export interface IClinicalProgresRepository {
  findAll(page: number, pageSize: number): Promise<ClinicalProgres[]>;
  findById(id: string): Promise<ClinicalProgres | null>;
  create(data: ClinicalProgres): Promise<void>;
  update(data: ClinicalProgres): Promise<void>;
  delete(data: ClinicalProgres): Promise<void>;
}
