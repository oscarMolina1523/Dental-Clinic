import MeasurementUnit from "../../Domain/entities/measurementUnit";
import { MeasurementUnitDto } from './../dtos/measurementUnit.dto';

export interface IMeasurementUnitService {
  findAll(page: number, pageSize: number): Promise<MeasurementUnit[]>;
  findById(id: string): Promise<MeasurementUnit | null>;
  create(data: MeasurementUnitDto): Promise<MeasurementUnit>;
  update(id: string, data: MeasurementUnitDto): Promise<MeasurementUnit | null>;
  delete(id: string): Promise<void>;
}
