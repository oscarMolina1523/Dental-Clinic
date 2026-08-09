import BaseModel from "./base.model";

export default class MedicalPrescriptionDetail extends BaseModel {
  medicalPrescriptionId: string;
  medicine: string;
  dose: string;
  frequency: string;
  duration: string;

  constructor({
    id,
    medicalPrescriptionId,
    medicine,
    dose,
    frequency,
    duration,
  }: {
    id: string;
    medicalPrescriptionId: string;
    medicine: string;
    dose: string;
    frequency: string;
    duration: string;
  }) {
    super(id);
    this.medicalPrescriptionId = medicalPrescriptionId;
    this.medicine = medicine;
    this.dose = dose;
    this.frequency = frequency;
    this.duration = duration;
  }
}
