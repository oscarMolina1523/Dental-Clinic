import { inject, injectable } from "tsyringe";
import { IPatientService } from "../interfaces/patient.service.interface";
import { IPatientRepository } from "../../Domain/repositories/patientRepository.interface";
import { PatientDto } from "../dtos/patient.dto";
import Patient from "../../Domain/entities/patient";
import { generateId } from "../../shared/utils/generateId";
import { generateEntityCode } from "../../Infrastructure/utils/codeGenerator";

@injectable()
export class PatientService implements IPatientService {
  private readonly _patientRepository: IPatientRepository;

  constructor(@inject("IPatientRepository") repository: IPatientRepository) {
    this._patientRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<Patient[]> {
    return await this._patientRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Patient | null> {
    return await this._patientRepository.findById(id);
  }

  async create(data: PatientDto): Promise<Patient> {
    const now = new Date();

    const patientCode = generateEntityCode({
      textForInitials: [data.name, data.lastName], // Ej: "Juan", "Pérez" -> JP
      date: data.birthdate,                        // Ej: 1995-05-20 -> 19950520
      uniqueId: data.idCard                        // Ej: Cédula
    });

    const newData: Patient = new Patient({
      ...data,
      createdAt: now,
      patientCode,
      id: generateId(),
    })
    await this._patientRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PatientDto): Promise<Patient | null> {
    const existing = await this._patientRepository.findById(id);
    if (!existing) {
      return null;
    }

    existing.updatePersonalInformation(
      data.name,
      data.lastName,
      data.birthdate,
      data.gender
    );

    await this._patientRepository.update(existing);
    return existing;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._patientRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._patientRepository.delete(existing);
  }

  async changePhoneNumber(
    id: string,
    phoneNumber: string
  ): Promise<Patient | null> {

    const existing =
      await this._patientRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changePhoneNumber(phoneNumber);

    await this._patientRepository.update(existing);

    return existing;
  }

  async changeEmail(
    id: string,
    email: string
  ): Promise<Patient | null> {

    const existing =
      await this._patientRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changeEmail(email);

    await this._patientRepository.update(existing);

    return existing;
  }

  async changeAddress(
    id: string,
    address: string
  ): Promise<Patient | null> {

    const existing =
      await this._patientRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changeAddress(address);

    await this._patientRepository.update(existing);

    return existing;
  }

  async updateEmergencyContact(
    id: string,
    name: string,
    phone: string
  ): Promise<Patient | null> {

    const existing =
      await this._patientRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.updateEmergencyContact(
      name,
      phone
    );

    await this._patientRepository.update(existing);

    return existing;
  }

  async changeImage(
    id: string,
    image: string
  ): Promise<Patient | null> {

    const existing =
      await this._patientRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changeImage(image);

    await this._patientRepository.update(existing);

    return existing;
  }

  async activate(
    id: string
  ): Promise<Patient | null> {

    const existing =
      await this._patientRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.activate();

    await this._patientRepository.update(existing);

    return existing;
  }

  async deactivate(
    id: string
  ): Promise<Patient | null> {

    const existing =
      await this._patientRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.deactivate();

    await this._patientRepository.update(existing);

    return existing;
  }
}
