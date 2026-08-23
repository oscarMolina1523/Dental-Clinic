import { inject, injectable } from "tsyringe";
import { IAppointmentService } from "../interfaces/appointment.service.interface";
import { IAppointmentRepository } from "../../Domain/repositories/appointmentRepository.interface";
import { AppointmentDto } from "../dtos/appointment.dto";
import Appointment from "../../Domain/entities/appointment";
import { generateId } from "../../shared/utils/generateId";
import { AppointmentStatus } from "../../Domain/types/appointmentStatus.enum";

@injectable()
export class AppointmentService implements IAppointmentService {
  private readonly _appointmentRepository: IAppointmentRepository;

  constructor(@inject("IAppointmentRepository") repository: IAppointmentRepository) {
    this._appointmentRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<Appointment[]> {
    return await this._appointmentRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Appointment | null> {
    return await this._appointmentRepository.findById(id);
  }

  async create(data: AppointmentDto): Promise<Appointment> {
    const newData: Appointment = new Appointment({
      ...data,
      id: generateId(),
      startAppointmentTime:
        new Date(data.startAppointmentTime),
      endAppointmentTime:
        new Date(data.endAppointmentTime),
      createdAt:
        data.createdAt
          ? new Date(data.createdAt)
          : new Date(),
          status: AppointmentStatus.SCHEDULED
    })
    await this._appointmentRepository.create(newData);
    return newData;
  }

  async update(id: string, data: AppointmentDto): Promise<Appointment | null> {
    const existing = await this._appointmentRepository.findById(id);
    if (!existing) {
      return null;
    }

    existing.update({
    patientId: data.patientId,
    dentistId: data.dentistId,

    startAppointmentTime:
      new Date(data.startAppointmentTime),

    endAppointmentTime:
      new Date(data.endAppointmentTime),

    reason: data.reason,
  });
    await this._appointmentRepository.update(existing);
    return existing;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._appointmentRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._appointmentRepository.delete(existing);
  }

  // ============================================================
  // APPOINTMENT STATE
  // ============================================================


  async confirm(
    id: string
  ): Promise<Appointment | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    // DOMAIN
    appointment.confirm();

    // PERSISTENCE
    await this._appointmentRepository.update(
      appointment
    );

    return appointment;
  }

  async start(
    id: string
  ): Promise<Appointment | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    // DOMAIN
    appointment.start();

    // PERSISTENCE
    await this._appointmentRepository.update(
      appointment
    );

    return appointment;
  }

  async complete(
    id: string
  ): Promise<Appointment | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    // DOMAIN
    appointment.complete();

    // PERSISTENCE
    await this._appointmentRepository.update(
      appointment
    );

    return appointment;
  }

  async cancel(
    id: string,
    notes: string
  ): Promise<Appointment | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    // DOMAIN
    appointment.cancel(notes);

    // PERSISTENCE
    await this._appointmentRepository.update(
      appointment
    );

    return appointment;
  }

  async markAsNoShow(
    id: string
  ): Promise<Appointment | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    // DOMAIN
    appointment.markAsNoShow();

    // PERSISTENCE
    await this._appointmentRepository.update(
      appointment
    );

    return appointment;
  }

  // ============================================================
  // REMINDER
  // ============================================================

  async markReminderAsSent(
    id: string
  ): Promise<Appointment | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    // DOMAIN
    appointment.markReminderAsSent();

    // PERSISTENCE
    await this._appointmentRepository.update(
      appointment
    );

    return appointment;
  }

  // ============================================================
  // INFORMATION
  // ============================================================

  async getDurationInMinutes(
    id: string
  ): Promise<number | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    return appointment.durationInMinutes;
  }

  async isCancelled(
    id: string
  ): Promise<boolean | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    return appointment.isCancelled;
  }

  async isCompleted(
    id: string
  ): Promise<boolean | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    return appointment.isCompleted;
  }

  async isPending(
    id: string
  ): Promise<boolean | null> {

    const appointment =
      await this._appointmentRepository.findById(id);

    if (!appointment) {
      return null;
    }

    return appointment.isPending;
  }
}
