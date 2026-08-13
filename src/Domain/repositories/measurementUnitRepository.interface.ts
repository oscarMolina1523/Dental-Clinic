import MeasurementUnit from '../entities/measurementUnit';

export interface IMeasurementUnitRepository {
  findAll(page: number, pageSize: number): Promise<MeasurementUnit[]>;
  findById(id: string): Promise<MeasurementUnit | null>;
  create(data: MeasurementUnit): Promise<void>;
  update(data: MeasurementUnit): Promise<void>;
  delete(data: MeasurementUnit): Promise<void>;
}
