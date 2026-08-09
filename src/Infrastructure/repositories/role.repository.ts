/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IRoleRepository } from "../../Domain/repositories/roleRepository.interface";
import Role  from "../../Domain/entities/role";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class RoleRepository implements IRoleRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Role[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Role | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Role) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Role): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Role): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
