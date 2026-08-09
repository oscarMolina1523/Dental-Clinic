/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../../Domain/repositories/userRepository.interface";
import User  from "../../Domain/entities/user";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class UserRepository implements IUserRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: User) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: User): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: User): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
