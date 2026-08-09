import BaseModel from "./base.model";

export default class TreatmentCatalog extends BaseModel {
  code: string;
  name: string;
  description: string;
  basePrice: number;
  estimatedDurationMinutes: string;
  active: boolean;

  constructor({
    id,
    code,
    name,
    description,
    basePrice,
    estimatedDurationMinutes,
    active,
  }: {
    id: string;
    code: string;
    name: string;
    description: string;
    basePrice: number;
    estimatedDurationMinutes: string;
    active: boolean;
  }) {
    super(id);
    this.code = code;
    this.name = name;
    this.description = description;
    this.basePrice = basePrice;
    this.estimatedDurationMinutes = estimatedDurationMinutes;
    this.active = active;
  }
}
