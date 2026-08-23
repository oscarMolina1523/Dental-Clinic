import { AppointmentStatus } from "../types/appointmentStatus.enum";
import BaseModel from "./base.model";

export default class Appointment extends BaseModel {
  patientId: string;
  dentistId: string;
  startAppointmentTime: Date;
  endAppointmentTime: Date;
  reason: string;
  status: AppointmentStatus;
  cancelationNotes: string;
  reminderSent: boolean | number | string
  createdAt: Date;

  constructor({
    id,
    patientId,
    dentistId,
    startAppointmentTime,
    endAppointmentTime,
    reason,
    status,
    cancelationNotes,
    reminderSent,
    createdAt,
  }: {
    id: string;
    patientId: string;
    dentistId: string;
    startAppointmentTime: Date | string;
    endAppointmentTime: Date | string;
    reason: string;
    status: AppointmentStatus;
    cancelationNotes: string;
    reminderSent: boolean | number | string
    createdAt: Date | string;
  }) {
    super(id);

    if (!patientId) {
      throw new Error(
        "El paciente es obligatorio"
      );
    }

    if (!dentistId) {
      throw new Error(
        "El odontólogo es obligatorio"
      );
    }
    // ============================================================
    // NORMALIZE DATES
    // ============================================================

    const normalizedStartAppointmentTime =
      startAppointmentTime instanceof Date
        ? startAppointmentTime
        : new Date(startAppointmentTime);

    const normalizedEndAppointmentTime =
      endAppointmentTime instanceof Date
        ? endAppointmentTime
        : new Date(endAppointmentTime);

    const normalizedCreatedAt =
      createdAt instanceof Date
        ? createdAt
        : new Date(createdAt);

    if (!startAppointmentTime) {
      throw new Error(
        "La fecha y hora de inicio son obligatorias"
      );
    }

    const normalizedReminderSent =
      reminderSent === true ||
      reminderSent === 1 ||
      reminderSent === "1";

    // ============================================================
    // START DATE
    // ============================================================

    if (
      isNaN(
        normalizedStartAppointmentTime.getTime()
      )
    ) {
      throw new Error(
        "La fecha y hora de inicio no son válidas"
      );
    }

    if (!endAppointmentTime) {
      throw new Error(
        "La fecha y hora de finalización son obligatorias"
      );
    }

    // ============================================================
    // END DATE
    // ============================================================

    if (
      isNaN(
        normalizedEndAppointmentTime.getTime()
      )
    ) {
      throw new Error(
        "La fecha y hora de finalización no son válidas"
      );
    }

    // ============================================================
    // APPOINTMENT RANGE
    // ============================================================

    if (
      normalizedEndAppointmentTime <=
      normalizedStartAppointmentTime
    ) {
      throw new Error(
        "La hora de finalización debe ser posterior a la hora de inicio"
      );
    }

    if (!reason || reason.trim().length === 0) {
      throw new Error(
        "El motivo de la cita es obligatorio"
      );
    }

    if (!status) {
      throw new Error(
        "El estado de la cita es obligatorio"
      );
    }

    if (
      !Object.values(AppointmentStatus).includes(status)
    ) {
      throw new Error(
        "El estado de la cita no es válido"
      );
    }

    if (
      cancelationNotes !== undefined &&
      cancelationNotes !== null &&
      typeof cancelationNotes !== "string"
    ) {
      throw new Error(
        "Las notas de cancelación deben ser un texto válido"
      );
    }
    // ============================================================
    // CREATED AT
    // ============================================================

    if (
      isNaN(
        normalizedCreatedAt.getTime()
      )
    ) {
      throw new Error(
        "La fecha de creación no es válida"
      );
    }

    this.patientId = patientId;
    this.dentistId = dentistId;
    this.startAppointmentTime = normalizedStartAppointmentTime;
    this.endAppointmentTime = normalizedEndAppointmentTime;
    this.reason = reason;
    this.status = status;
    this.cancelationNotes = cancelationNotes?.trim() ?? "";
    this.reminderSent = normalizedReminderSent;
    this.createdAt = normalizedCreatedAt;
  }

  // ============================================================
  // INFORMATION
  // ============================================================

  get durationInMinutes(): number {

    const difference =
      this.endAppointmentTime.getTime() -
      this.startAppointmentTime.getTime();

    return Math.ceil(
      difference / (1000 * 60)
    );
  }

  get isCancelled(): boolean {

    return this.status === AppointmentStatus.CANCELLED;
  }

  get isCompleted(): boolean {

    return this.status === AppointmentStatus.COMPLETED;
  }

  get isPending(): boolean {

    return (
      this.status === AppointmentStatus.SCHEDULED ||
      this.status === AppointmentStatus.CONFIRMED
    );
  }

  // ============================================================
  // BUSINESS STATE
  // ============================================================

  confirm(): void {

    if (
      this.status !== AppointmentStatus.SCHEDULED
    ) {
      throw new Error(
        "Solo se puede confirmar una cita programada"
      );
    }

    this.status =
      AppointmentStatus.CONFIRMED;
  }

  start(): void {

    if (
      this.status !== AppointmentStatus.CONFIRMED
    ) {
      throw new Error(
        "Solo se puede iniciar una cita confirmada"
      );
    }

    this.status =
      AppointmentStatus.IN_PROGRESS;
  }

  complete(): void {

    if (
      this.status !== AppointmentStatus.IN_PROGRESS
    ) {
      throw new Error(
        "Solo se puede completar una cita en progreso"
      );
    }

    this.status =
      AppointmentStatus.COMPLETED;
  }

  cancel(notes: string): void {

    if (
      this.status === AppointmentStatus.COMPLETED
    ) {
      throw new Error(
        "Una cita completada no puede ser cancelada"
      );
    }

    if (!notes || notes.trim().length === 0) {
      throw new Error(
        "Debe indicar el motivo de cancelación"
      );
    }

    this.status =
      AppointmentStatus.CANCELLED;

    this.cancelationNotes =
      notes.trim();
  }

  markAsNoShow(): void {

    if (
      this.status !== AppointmentStatus.CONFIRMED
    ) {
      throw new Error(
        "Solo una cita confirmada puede marcarse como no asistida"
      );
    }

    this.status =
      AppointmentStatus.NO_SHOW;
  }

  markReminderAsSent(): void {

    this.reminderSent = true;
  }

  // ============================================================
  // UPDATE
  // ============================================================

  update({
    patientId,
    dentistId,
    startAppointmentTime,
    endAppointmentTime,
    reason,
  }: {
    patientId: string;
    dentistId: string;
    startAppointmentTime: Date;
    endAppointmentTime: Date;
    reason: string;
  }): void {

    // ============================================================
    // PATIENT
    // ============================================================

    if (!patientId) {
      throw new Error(
        "El paciente es obligatorio"
      );
    }

    // ============================================================
    // DENTIST
    // ============================================================

    if (!dentistId) {
      throw new Error(
        "El odontólogo es obligatorio"
      );
    }

    // ============================================================
    // START DATE
    // ============================================================

    if (
      !(startAppointmentTime instanceof Date) ||
      isNaN(startAppointmentTime.getTime())
    ) {
      throw new Error(
        "La fecha y hora de inicio no son válidas"
      );
    }

    // ============================================================
    // END DATE
    // ============================================================

    if (
      !(endAppointmentTime instanceof Date) ||
      isNaN(endAppointmentTime.getTime())
    ) {
      throw new Error(
        "La fecha y hora de finalización no son válidas"
      );
    }

    // ============================================================
    // APPOINTMENT RANGE
    // ============================================================

    if (
      endAppointmentTime <= startAppointmentTime
    ) {
      throw new Error(
        "La hora de finalización debe ser posterior a la hora de inicio"
      );
    }

    // ============================================================
    // REASON
    // ============================================================

    if (!reason || reason.trim().length === 0) {
      throw new Error(
        "El motivo de la cita es obligatorio"
      );
    }

    // ============================================================
    // UPDATE
    // ============================================================

    this.patientId = patientId;

    this.dentistId = dentistId;

    this.startAppointmentTime =
      startAppointmentTime;

    this.endAppointmentTime =
      endAppointmentTime;

    this.reason =
      reason.trim();
  }

}
