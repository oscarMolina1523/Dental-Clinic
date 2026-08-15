import Appointment from '../entities/appointment';

export interface IAppointmentRepository {
  findAll(page: number, pageSize: number): Promise<Appointment[]>;
  findById(id: string): Promise<Appointment | null>;
  create(data: Appointment): Promise<void>;
  update(data: Appointment): Promise<void>;
  delete(data: Appointment): Promise<void>;
}
