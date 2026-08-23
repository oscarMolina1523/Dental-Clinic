import User from "../../Domain/entities/user";
import { UserRequest } from "../dtos/request/user.request";
import { UserResponse } from "../dtos/response/user.response";
import { ServiceResult } from "../utils/serviceResult.type";
import { UserDto } from './../dtos/user.dto';

export interface IUserService {
  findAll(page: number, pageSize: number): Promise<User[]>;
  findById(id: string): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  registerUser(user: UserRequest): Promise<ServiceResult<UserResponse>>;

  create(data: UserDto): Promise<User>;
  update(id: string, data: UserDto): Promise<User | null>;
  delete(id: string): Promise<void>;

  changeEmail(
    id: string,
    email: string
  ): Promise<User | null>;

  changePhoneNumber(
    id: string,
    phoneNumber: string
  ): Promise<User | null>;

  changePassword(
    id: string,
    currentPassword: string,
    newPassword: string
  ): Promise<User | null>;

  changeRole(
    id: string,
    roleId: string
  ): Promise<User | null>;

  activate(
    id: string
  ): Promise<User | null>;

  deactivate(
    id: string
  ): Promise<User | null>;
}
