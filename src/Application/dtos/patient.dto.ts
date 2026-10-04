export interface PatientDto {
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
  isSelfPayer: boolean;
  payerName: string;
  payerIdCard: string;
  payerPhoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}
