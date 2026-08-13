/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInstallmentRepository } from "../../Domain/repositories/installmentRepository.interface";
import Installment  from "../../Domain/entities/installment";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InstallmentRepository implements IInstallmentRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Installment[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Installment | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Installment) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Installment): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Installment): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
