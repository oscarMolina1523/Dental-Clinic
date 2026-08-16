import BaseModel from "./base.model";

export default class TreatmentCatalog extends BaseModel {
  code: string;
  name: string;
  description: string;
  private basePrice: number;
  private estimatedDurationMinutes: number;
  private active: boolean;

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
    estimatedDurationMinutes: number;
    active: boolean;
  }) {
    super(id);

    if (!code) {
      throw new Error("El código del tratamiento es obligatorio");
    }

    if (!name) {
      throw new Error("El nombre del tratamiento es obligatorio");
    }

    if (basePrice < 0) {
      throw new Error(
        "El precio base no puede ser negativo"
      );
    }

    if (estimatedDurationMinutes <= 0) {
      throw new Error(
        "La duración estimada debe ser mayor que cero"
      );
    }
    this.code = code;
    this.name = name;
    this.description = description;
    this.basePrice = basePrice;
    this.estimatedDurationMinutes = estimatedDurationMinutes;
    this.active = active;
  }

  get currentBasePrice(): number {
    return this.basePrice;
  }

  get currentDuration(): number {
    return this.estimatedDurationMinutes;
  }

  get isActive(): boolean {
    return this.active;
  }

  changePrice(price: number): void {
    if (price < 0) {
      throw new Error(
        "El precio base no puede ser negativo"
      );
    }

    this.basePrice = price;
  }

  activate(): void {
    this.active = true;
  }

  deactivate(): void {
    this.active = false;
  }

  changeDuration(minutes: number): void {
    if (minutes <= 0) {
      throw new Error(
        "La duración debe ser mayor que cero"
      );
    }

    this.estimatedDurationMinutes = minutes;
  }
}
