export interface UserRequest {
  username?: string;
  fullname?: string;
  email: string;
  password: string;
  roleId?: string;
  active: boolean;
}