import BaseModel from "./base.model";

export default class DentalChart extends BaseModel {
  patientId: string;
  evaluationDate: Date;
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
    evaluationDate: Date;
    dentistId: string;
    observations: string;
  }) {
    super(id);
     // ============================================================
    // PATIENT
    // ============================================================

    if (!patientId || patientId.trim().length === 0) {
      throw new Error(
        "El paciente es obligatorio"
      );
    }

    // ============================================================
    // DENTIST
    // ============================================================

    if (!dentistId || dentistId.trim().length === 0) {
      throw new Error(
        "El odontólogo es obligatorio"
      );
    }

    // ============================================================
    // EVALUATION DATE
    // ============================================================

    if (!evaluationDate) {
      throw new Error(
        "La fecha de evaluación es obligatoria"
      );
    }

    const normalizedEvaluationDate =
      evaluationDate instanceof Date
        ? evaluationDate
        : new Date(evaluationDate);

    if (
      isNaN(
        normalizedEvaluationDate.getTime()
      )
    ) {
      throw new Error(
        "La fecha de evaluación no es válida"
      );
    }

    // ============================================================
    // OBSERVATIONS
    // ============================================================

    if (
      !observations ||
      observations.trim().length === 0
    ) {
      throw new Error(
        "Las observaciones son obligatorias"
      );
    }

    // ============================================================
    // ASSIGNMENT
    // ============================================================

    this.patientId = patientId;
    this.evaluationDate = evaluationDate;
    this.dentistId = dentistId;
    this.observations = observations;
  }

   // ============================================================
  // INFORMATION
  // ============================================================

  /**
   * Indica si la evaluación pertenece al día actual.
   */
  get isToday(): boolean {

    const today = new Date();

    return (
      this.evaluationDate.getFullYear() === today.getFullYear() &&
      this.evaluationDate.getMonth() === today.getMonth() &&
      this.evaluationDate.getDate() === today.getDate()
    );
  }


  /**
   * Indica si la evaluación fue realizada
   * en el futuro.
   */
  get isFuture(): boolean {

    return this.evaluationDate > new Date();
  }


  /**
   * Indica si la evaluación ya ocurrió.
   */
  get isCompleted(): boolean {

    return this.evaluationDate <= new Date();
  }


  // ============================================================
  // BUSINESS RULES
  // ============================================================

  /**
   * Actualiza la información general
   * de la evaluación odontológica.
   */
  update({
    evaluationDate,
    observations,
  }: {
    evaluationDate: Date | string;
    observations: string;
  }): void {

    // ============================================================
    // EVALUATION DATE
    // ============================================================

    if (!evaluationDate) {
      throw new Error(
        "La fecha de evaluación es obligatoria"
      );
    }

    const normalizedEvaluationDate =
      evaluationDate instanceof Date
        ? evaluationDate
        : new Date(evaluationDate);

    if (
      isNaN(
        normalizedEvaluationDate.getTime()
      )
    ) {
      throw new Error(
        "La fecha de evaluación no es válida"
      );
    }

    // ============================================================
    // OBSERVATIONS
    // ============================================================

    if (
      !observations ||
      observations.trim().length === 0
    ) {
      throw new Error(
        "Las observaciones son obligatorias"
      );
    }

    // ============================================================
    // UPDATE
    // ============================================================

    this.evaluationDate =
      normalizedEvaluationDate;

    this.observations =
      observations.trim();
  }


  /**
   * Actualiza únicamente las observaciones.
   */
  updateObservations(
    observations: string
  ): void {

    if (
      !observations ||
      observations.trim().length === 0
    ) {
      throw new Error(
        "Las observaciones son obligatorias"
      );
    }

    this.observations =
      observations.trim();
  }
}
