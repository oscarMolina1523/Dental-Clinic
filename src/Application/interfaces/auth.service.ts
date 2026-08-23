import { UserRequest } from "../dtos/request/user.request";
import { UserResponse } from "../dtos/response/user.response";
import { AuthResult } from "../utils/authResult.type";
import { ServiceResult } from "../utils/serviceResult.type";

export interface IAuthService {
  login(email:string, password:string): Promise<AuthResult<UserResponse>>;

  register(user: UserRequest): Promise<ServiceResult<UserResponse>>;

  logout(): string;
}