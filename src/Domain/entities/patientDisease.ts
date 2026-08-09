import BaseModel from "./base.model";

export default class PatientDisease extends BaseModel {
  patientId: string;
  diseaseId: string;
  observations: string;

  constructor({
    id,
    patientId,
    diseaseId,
    observations,
  }: {
    id: string;
    patientId: string;
    diseaseId: string;
    observations: string;
  }) {
    super(id);
    this.patientId = patientId;
    this.diseaseId = diseaseId;
    this.observations = observations;
  }
}
