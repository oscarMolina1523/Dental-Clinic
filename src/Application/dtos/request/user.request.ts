export interface UserRequest {
  username?: string;
  email: string;
  password: string;
  roleId?: string;
  active: boolean;
}