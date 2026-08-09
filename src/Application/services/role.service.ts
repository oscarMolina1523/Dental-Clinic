import { inject, injectable } from "tsyringe";
import { IRoleService } from "../interfaces/role.service.interface";
import { IRoleRepository } from "../../Domain/repositories/roleRepository.interface";
import { RoleDto } from "../dtos/role.dto";
import Role from "../../Domain/entities/role";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class RoleService implements IRoleService {
  private readonly _roleRepository: IRoleRepository;

  constructor(@inject("IRoleRepository") repository: IRoleRepository) {
    this._roleRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Role[]> {
    return await this._roleRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Role | null> {
    return await this._roleRepository.findById(id);
  }
  
  async create(data: RoleDto): Promise<Role> {
    const newData: Role = {
      ...data,
      id: generateId(), 
    }
    await this._roleRepository.create(newData);
    return newData;
  }

  async update(id: string, data: RoleDto): Promise<Role | null> {
    const existing = await this._roleRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Role = {
      ...data,
      id,
    }
    await this._roleRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._roleRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._roleRepository.delete(existing);
  }
}
