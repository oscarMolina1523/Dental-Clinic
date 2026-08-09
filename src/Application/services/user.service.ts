import { inject, injectable } from "tsyringe";
import { IUserService } from "../interfaces/user.service.interface";
import { IUserRepository } from "../../Domain/repositories/userRepository.interface";
import { UserDto } from "../dtos/user.dto";
import User from "../../Domain/entities/user";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class UserService implements IUserService {
  private readonly _userRepository: IUserRepository;

  constructor(@inject("IUserRepository") repository: IUserRepository) {
    this._userRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<User[]> {
    return await this._userRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<User | null> {
    return await this._userRepository.findById(id);
  }
  
  async create(data: UserDto): Promise<User> {
    const newData: User = {
      ...data,
      id: generateId(), 
    }
    await this._userRepository.create(newData);
    return newData;
  }

  async update(id: string, data: UserDto): Promise<User | null> {
    const existing = await this._userRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: User = {
      ...data,
      id,
    }
    await this._userRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._userRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._userRepository.delete(existing);
  }
}
