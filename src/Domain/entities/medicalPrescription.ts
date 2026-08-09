import BaseModel from "./base.model";

export default class MedicalPrescription extends BaseModel {
  patientId: string;
  dentistId: string;
  date: Date;
  generalInstructions: string;

  constructor({
    id,
    patientId,
    dentistId,
    date,
    generalInstructions,
  }: {
    id: string;
    patientId: string;
    dentistId: string;
    date: Date;
    generalInstructions: string;
  }) {
    super(id);
    this.patientId = patientId;
    this.dentistId = dentistId;
    this.date = date;
    this.generalInstructions = generalInstructions;
  }
}
