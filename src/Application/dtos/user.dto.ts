export interface UserDto {
  roleId: string;
  fullName: string;
  userName: string;
  image: string;
  email: string;
  password: string;
  phoneNumber: string;
  membershipNumber: string;
  active: boolean;
  specialties: string;
  createdAt: Date;
  updatedAt: Date;
}
