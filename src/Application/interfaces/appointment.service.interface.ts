import Appointment from "../../Domain/entities/appointment";
import { AppointmentDto } from './../dtos/appointment.dto';

export interface IAppointmentService {
  findAll(page: number, pageSize: number): Promise<Appointment[]>;
  findById(id: string): Promise<Appointment | null>;
  create(data: AppointmentDto): Promise<Appointment>;
  update(id: string, data: AppointmentDto): Promise<Appointment | null>;
  delete(id: string): Promise<void>;

  confirm(
    id: string
  ): Promise<Appointment | null>;

  start(
    id: string
  ): Promise<Appointment | null>;

  complete(
    id: string
  ): Promise<Appointment | null>;

  cancel(
    id: string,
    notes: string
  ): Promise<Appointment | null>;

  markAsNoShow(
    id: string
  ): Promise<Appointment | null>;

  markReminderAsSent(
    id: string
  ): Promise<Appointment | null>;

  getDurationInMinutes(
    id: string
  ): Promise<number | null>;

  isCancelled(
    id: string
  ): Promise<boolean | null>;

  isCompleted(
    id: string
  ): Promise<boolean | null>;

  isPending(
    id: string
  ): Promise<boolean | null>;
}
