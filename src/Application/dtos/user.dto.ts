export interface UserDto {
  roleId: string;
  fullName: string;
  image: string;
  email: string;
  password: string;
  phoneNumber: string;
  membershipNumber: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
