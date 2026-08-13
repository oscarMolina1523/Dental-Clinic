/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPaymentNotificationRepository } from "../../Domain/repositories/paymentNotificationRepository.interface";
import PaymentNotification  from "../../Domain/entities/paymentNotification";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PaymentNotificationRepository implements IPaymentNotificationRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<PaymentNotification[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<PaymentNotification | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: PaymentNotification) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: PaymentNotification): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: PaymentNotification): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
