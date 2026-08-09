import Patient from "../../Domain/entities/patient";
import { PatientDto } from './../dtos/patient.dto';

export interface IPatientService {
  findAll(page: number, pageSize: number): Promise<Patient[]>;
  findById(id: string): Promise<Patient | null>;
  create(data: PatientDto): Promise<Patient>;
  update(id: string, data: PatientDto): Promise<Patient | null>;
  delete(id: string): Promise<void>;
}
