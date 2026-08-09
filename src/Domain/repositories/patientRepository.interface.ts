import Patient from '../entities/patient';

export interface IPatientRepository {
  findAll(page: number, pageSize: number): Promise<Patient[]>;
  findById(id: string): Promise<Patient | null>;
  create(data: Patient): Promise<void>;
  update(data: Patient): Promise<void>;
  delete(data: Patient): Promise<void>;
}
