import User from "../../Domain/entities/user";
import { UserDto } from './../dtos/user.dto';

export interface IUserService {
  findAll(page: number, pageSize: number): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  create(data: UserDto): Promise<User>;
  update(id: string, data: UserDto): Promise<User | null>;
  delete(id: string): Promise<void>;

  changePhoneNumber(
    id: string,
    phoneNumber: string
  ): Promise<User | null>;

  changePassword(
    id: string,
    passwordHash: string
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
