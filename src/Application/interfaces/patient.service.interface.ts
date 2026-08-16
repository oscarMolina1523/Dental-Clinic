import Patient from "../../Domain/entities/patient";
import { PatientDto } from './../dtos/patient.dto';

export interface IPatientService {
  findAll(page: number, pageSize: number): Promise<Patient[]>;
  findById(id: string): Promise<Patient | null>;
  create(data: PatientDto): Promise<Patient>;
  update(id: string, data: PatientDto): Promise<Patient | null>;
  delete(id: string): Promise<void>;

  changePhoneNumber(
    id: string,
    phoneNumber: string
  ): Promise<Patient | null>;

  changeEmail(
    id: string,
    email: string
  ): Promise<Patient | null>;

  changeAddress(
    id: string,
    address: string
  ): Promise<Patient | null>;

  updateEmergencyContact(
    id: string,
    name: string,
    phone: string
  ): Promise<Patient | null>;

  changeImage(
    id: string,
    image: string
  ): Promise<Patient | null>;

  activate(
    id: string
  ): Promise<Patient | null>;

  deactivate(
    id: string
  ): Promise<Patient | null>;
}
