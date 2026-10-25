export interface TreatmentCatalogDto {
  code: string;
  name: string;
  specialities: string;
  description: string;
  basePrice: number;
  estimatedDurationMinutes: number;
  active: boolean;
}
