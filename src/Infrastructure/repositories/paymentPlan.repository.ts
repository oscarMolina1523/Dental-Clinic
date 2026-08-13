/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPaymentPlanRepository } from "../../Domain/repositories/paymentPlanRepository.interface";
import PaymentPlan  from "../../Domain/entities/paymentPlan";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PaymentPlanRepository implements IPaymentPlanRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<PaymentPlan[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<PaymentPlan | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: PaymentPlan) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: PaymentPlan): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: PaymentPlan): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
