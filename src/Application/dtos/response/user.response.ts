export interface UserResponse {
  id:string;
  username: string;
  email: string;
  roleId: string; 
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}