import BaseModel from "./base.model";

export default class DentalChart extends BaseModel {
  patientId: string;
  evaluationDate: string;
  dentistId: string;
  observations: string;

  constructor({
    id,
    patientId,
    evaluationDate,
    dentistId,
    observations,
  }: {
    id: string;
    patientId: string;
    evaluationDate: string;
    dentistId: string;
    observations: string;
  }) {
    super(id);
    this.patientId = patientId;
    this.evaluationDate = evaluationDate;
    this.dentistId = dentistId;
    this.observations = observations;
  }
}
