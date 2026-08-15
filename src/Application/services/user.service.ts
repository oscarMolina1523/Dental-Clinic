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

  async findById(id: string): Promise<User | null> {
    return await this._userRepository.findById(id);
  }

  async create(data: UserDto): Promise<User> {
    const newData: User = new User({
      ...data,
      id: generateId(),
    })
    await this._userRepository.create(newData);
    return newData;
  }

  //el update solo actualiza el perfil
  async update(id: string, data: UserDto): Promise<User | null> {
    const existing = await this._userRepository.findById(id);
    if (!existing) {
      return null;
    }

    existing.updateProfile(
      data.fullName,
      data.phoneNumber,
      data.image,
      data.membershipNumber
    );

    await this._userRepository.update(existing);
    return existing;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._userRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._userRepository.delete(existing);
  }

  async changeEmail(
    id: string,
    email: string
  ): Promise<User | null> {

    const existing = await this._userRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changeEmail(email);

    await this._userRepository.update(existing);

    return existing;
  }

  async changePhoneNumber(
    id: string,
    phoneNumber: string
  ): Promise<User | null> {

    const existing = await this._userRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changePhoneNumber(phoneNumber);

    await this._userRepository.update(existing);

    return existing;
  }

  async changePassword(
    id: string,
    passwordHash: string
  ): Promise<User | null> {

    const existing = await this._userRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changePassword(passwordHash);

    await this._userRepository.update(existing);

    return existing;
  }

  async changeRole(
    id: string,
    roleId: string
  ): Promise<User | null> {

    const existing = await this._userRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changeRole(roleId);

    await this._userRepository.update(existing);

    return existing;
  }

  async activate(
    id: string
  ): Promise<User | null> {

    const existing = await this._userRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.activate();

    await this._userRepository.update(existing);

    return existing;
  }

  async deactivate(
    id: string
  ): Promise<User | null> {

    const existing = await this._userRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.deactivate();

    await this._userRepository.update(existing);

    return existing;
  }
}
