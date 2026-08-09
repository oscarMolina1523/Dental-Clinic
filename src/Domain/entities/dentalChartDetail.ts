import BaseModel from "./base.model";

export default class DentalChartDetail extends BaseModel {
  dentalChartId: string;
  toothNumber: number;
  face: varchar;
  toothStatus: string;
  notes: string;

  constructor({
    id,
    dentalChartId,
    toothNumber,
    face,
    toothStatus,
    notes,
  }: {
    id: string;
    dentalChartId: string;
    toothNumber: number;
    face: varchar;
    toothStatus: string;
    notes: string;
  }) {
    super(id);
    this.dentalChartId = dentalChartId;
    this.toothNumber = toothNumber;
    this.face = face;
    this.toothStatus = toothStatus;
    this.notes = notes;
  }
}
