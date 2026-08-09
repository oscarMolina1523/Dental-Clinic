import ClinicalProgres from "../../Domain/entities/clinicalProgres";
import { ClinicalProgresDto } from './../dtos/clinicalProgres.dto';

export interface IClinicalProgresService {
  findAll(page: number, pageSize: number): Promise<ClinicalProgres[]>;
  findById(id: string): Promise<ClinicalProgres | null>;
  create(data: ClinicalProgresDto): Promise<ClinicalProgres>;
  update(id: string, data: ClinicalProgresDto): Promise<ClinicalProgres | null>;
  delete(id: string): Promise<void>;
}
