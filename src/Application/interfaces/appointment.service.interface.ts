import Appointment from "../../Domain/entities/appointment";
import { AppointmentDto } from './../dtos/appointment.dto';

export interface IAppointmentService {
  findAll(page: number, pageSize: number): Promise<Appointment[]>;
  findById(id: string): Promise<Appointment | null>;
  create(data: AppointmentDto): Promise<Appointment>;
  update(id: string, data: AppointmentDto): Promise<Appointment | null>;
  delete(id: string): Promise<void>;
}
