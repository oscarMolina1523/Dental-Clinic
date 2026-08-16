import BaseModel from "./base.model";

export default class Patient extends BaseModel {
  patientCode: string;
  image: string;
  name: string;
  lastName: string;
  idCard: string;
  birthdate: Date;
  gender: string;
  phoneNumber: string;
  email: string;
  address: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  maritalStatus: string;
  private active: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    patientCode,
    image,
    name,
    lastName,
    idCard,
    birthdate,
    gender,
    phoneNumber,
    email,
    address,
    emergencyContactName,
    emergencyContactPhone,
    maritalStatus,
    active,
    createdAt,
    updatedAt,
  }: {
    id: string;
    patientCode: string;
    image: string;
    name: string;
    lastName: string;
    idCard: string;
    birthdate: Date;
    gender: string;
    phoneNumber: string;
    email: string;
    address: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    maritalStatus: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }) {
    super(id);

    if (!name?.trim()) {
      throw new Error("El nombre del paciente es obligatorio");
    }

    if (!lastName?.trim()) {
      throw new Error("El apellido del paciente es obligatorio");
    }

    if (!birthdate) {
      throw new Error("La fecha de nacimiento es obligatoria");
    }

    if (birthdate > new Date()) {
      throw new Error(
        "La fecha de nacimiento no puede ser futura"
      );
    }

    this.patientCode = patientCode;
    this.image = image;
    this.name = name;
    this.lastName = lastName;
    this.idCard = idCard;
    this.birthdate = birthdate;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
    this.emergencyContactName = emergencyContactName;
    this.emergencyContactPhone = emergencyContactPhone;
    this.maritalStatus = maritalStatus;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  activate(): void {
    this.active = true;
    this.updatedAt = new Date();
  }

  deactivate(): void {
    this.active = false;
    this.updatedAt = new Date();
  }

  ensureActive(): void {
    if (!this.active) {
      throw new Error("El paciente está inactivo");
    }
  }

  updatePersonalInformation(
    name: string,
    lastName: string,
    birthdate: Date,
    gender: string
  ): void {

    if (!name?.trim()) {
      throw new Error("El nombre es obligatorio");
    }

    if (!lastName?.trim()) {
      throw new Error("El apellido es obligatorio");
    }

    if (birthdate > new Date()) {
      throw new Error(
        "La fecha de nacimiento no puede ser futura"
      );
    }

    this.name = name;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.gender = gender;

    this.updatedAt = new Date();
  }

  changePhoneNumber(phoneNumber: string): void {

    if (!phoneNumber?.trim()) {
      throw new Error(
        "El número de teléfono es obligatorio"
      );
    }

    this.phoneNumber = phoneNumber;
    this.updatedAt = new Date();
  }

  changeEmail(email: string): void {

    if (!email?.includes("@")) {
      throw new Error(
        "El correo electrónico no es válido"
      );
    }

    this.email = email;
    this.updatedAt = new Date();
  }

  changeAddress(address: string): void {

    this.address = address;
    this.updatedAt = new Date();
  }

  updateEmergencyContact(
    name: string,
    phone: string
  ): void {

    if (!name?.trim()) {
      throw new Error(
        "El nombre del contacto de emergencia es obligatorio"
      );
    }

    if (!phone?.trim()) {
      throw new Error(
        "El teléfono del contacto de emergencia es obligatorio"
      );
    }

    this.emergencyContactName = name;
    this.emergencyContactPhone = phone;

    this.updatedAt = new Date();
  }

  get age(): number {

    const today = new Date();

    let age =
      today.getFullYear() -
      this.birthdate.getFullYear();

    const month =
      today.getMonth() -
      this.birthdate.getMonth();

    if (
      month < 0 ||
      (
        month === 0 &&
        today.getDate() < this.birthdate.getDate()
      )
    ) {
      age--;
    }

    return age;
  }

  get isMinor(): boolean {
    return this.age < 18;
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  changeImage(image: string): void {

    this.image = image;
    this.updatedAt = new Date();
  }
}
