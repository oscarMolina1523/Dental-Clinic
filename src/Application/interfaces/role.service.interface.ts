import Role from "../../Domain/entities/role";
import { RoleDto } from './../dtos/role.dto';

export interface IRoleService {
  findAll(page: number, pageSize: number): Promise<Role[]>;
  findById(id: string): Promise<Role | null>;
  create(data: RoleDto): Promise<Role>;
  update(id: string, data: RoleDto): Promise<Role | null>;
  delete(id: string): Promise<void>;
}
