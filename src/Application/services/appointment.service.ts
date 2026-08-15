import { inject, injectable } from "tsyringe";
import { IAppointmentService } from "../interfaces/appointment.service.interface";
import { IAppointmentRepository } from "../../Domain/repositories/appointmentRepository.interface";
import { AppointmentDto } from "../dtos/appointment.dto";
import Appointment from "../../Domain/entities/appointment";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class AppointmentService implements IAppointmentService {
  private readonly _appointmentRepository: IAppointmentRepository;

  constructor(@inject("IAppointmentRepository") repository: IAppointmentRepository) {
    this._appointmentRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Appointment[]> {
    return await this._appointmentRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Appointment | null> {
    return await this._appointmentRepository.findById(id);
  }
  
  async create(data: AppointmentDto): Promise<Appointment> {
    const newData: Appointment = {
      ...data,
      id: generateId(), 
    }
    await this._appointmentRepository.create(newData);
    return newData;
  }

  async update(id: string, data: AppointmentDto): Promise<Appointment | null> {
    const existing = await this._appointmentRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Appointment = {
      ...data,
      id,
    }
    await this._appointmentRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._appointmentRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._appointmentRepository.delete(existing);
  }
}
