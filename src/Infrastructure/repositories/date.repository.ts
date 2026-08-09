/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IDateRepository } from "../../Domain/repositories/dateRepository.interface";
import Date  from "../../Domain/entities/date";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class DateRepository implements IDateRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Date[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Date | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Date) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Date): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Date): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
