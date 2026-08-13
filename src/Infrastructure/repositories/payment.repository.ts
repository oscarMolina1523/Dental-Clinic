/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPaymentRepository } from "../../Domain/repositories/paymentRepository.interface";
import Payment  from "../../Domain/entities/payment";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PaymentRepository implements IPaymentRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Payment[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Payment | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Payment) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Payment): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Payment): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
