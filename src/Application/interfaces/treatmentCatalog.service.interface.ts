import TreatmentCatalog from "../../Domain/entities/treatmentCatalog";
import { TreatmentCatalogDto } from './../dtos/treatmentCatalog.dto';

export interface ITreatmentCatalogService {
  findAll(page: number, pageSize: number): Promise<TreatmentCatalog[]>;
  findById(id: string): Promise<TreatmentCatalog | null>;
  create(data: TreatmentCatalogDto): Promise<TreatmentCatalog>;
  update(id: string, data: TreatmentCatalogDto): Promise<TreatmentCatalog | null>;
  delete(id: string): Promise<void>;

  changePrice(
    id: string,
    price: number
  ): Promise<TreatmentCatalog | null>;

  changeDuration(
    id: string,
    minutes: number
  ): Promise<TreatmentCatalog | null>;

  activate(
    id: string
  ): Promise<TreatmentCatalog | null>;

  deactivate(
    id: string
  ): Promise<TreatmentCatalog | null>;
}
