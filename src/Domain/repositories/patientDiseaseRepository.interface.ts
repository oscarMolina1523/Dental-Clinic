import PatientDisease from '../entities/patientDisease';

export interface IPatientDiseaseRepository {
  findAll(page: number, pageSize: number): Promise<PatientDisease[]>;
  findById(id: string): Promise<PatientDisease | null>;
  create(data: PatientDisease): Promise<void>;
  update(data: PatientDisease): Promise<void>;
  delete(data: PatientDisease): Promise<void>;
}
