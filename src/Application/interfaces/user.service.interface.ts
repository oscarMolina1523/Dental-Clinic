import User from "../../Domain/entities/user";
import { UserDto } from './../dtos/user.dto';

export interface IUserService {
  findAll(page: number, pageSize: number): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  create(data: UserDto): Promise<User>;
  update(id: string, data: UserDto): Promise<User | null>;
  delete(id: string): Promise<void>;
}
