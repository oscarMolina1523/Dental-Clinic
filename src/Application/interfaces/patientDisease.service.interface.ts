import PatientDisease from "../../Domain/entities/patientDisease";
import { PatientDiseaseDto } from './../dtos/patientDisease.dto';

export interface IPatientDiseaseService {
  findAll(page: number, pageSize: number): Promise<PatientDisease[]>;
  findById(id: string): Promise<PatientDisease | null>;
  create(data: PatientDiseaseDto): Promise<PatientDisease>;
  update(id: string, data: PatientDiseaseDto): Promise<PatientDisease | null>;
  delete(id: string): Promise<void>;
}
