import User from '../entities/user';

export interface IUserRepository {
  findAll(page: number, pageSize: number): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  create(data: User): Promise<void>;
  update(data: User): Promise<void>;
  delete(data: User): Promise<void>;
}
