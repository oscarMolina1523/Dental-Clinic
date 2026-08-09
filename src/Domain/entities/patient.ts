import BaseModel from "./base.model";

export default class Patient extends BaseModel {
  patientCode: string;
  image: string;
  name: string;
  lastName: string;
  idCard: string;
  birthdate: string;
  gender: string;
  phoneNumber: string;
  email: string;
  address: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  maritalStatus: string;
  active: string;
  createdAt: string;
  updatedAt: string;

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
    birthdate: string;
    gender: string;
    phoneNumber: string;
    email: string;
    address: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    maritalStatus: string;
    active: string;
    createdAt: string;
    updatedAt: string;
  }) {
    super(id);
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
}
