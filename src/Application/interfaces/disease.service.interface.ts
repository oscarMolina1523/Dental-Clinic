import Disease from "../../Domain/entities/disease";
import { DiseaseDto } from './../dtos/disease.dto';

export interface IDiseaseService {
  findAll(page: number, pageSize: number): Promise<Disease[]>;
  findById(id: string): Promise<Disease | null>;
  create(data: DiseaseDto): Promise<Disease>;
  update(id: string, data: DiseaseDto): Promise<Disease | null>;
  delete(id: string): Promise<void>;
}
