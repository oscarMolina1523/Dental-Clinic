import PaymentPlan from "../../Domain/entities/paymentPlan";
import { PaymentPlanDto } from './../dtos/paymentPlan.dto';

export interface IPaymentPlanService {
  findAll(page: number, pageSize: number): Promise<PaymentPlan[]>;
  findById(id: string): Promise<PaymentPlan | null>;
  create(data: PaymentPlanDto): Promise<PaymentPlan>;
  update(id: string, data: PaymentPlanDto): Promise<PaymentPlan | null>;
  delete(id: string): Promise<void>;

  activate(
    id: string
  ): Promise<PaymentPlan | null>;

  complete(
    id: string
  ): Promise<PaymentPlan | null>;

  cancel(
    id: string
  ): Promise<PaymentPlan | null>;

  getInstallmentAmount(
    id: string
  ): Promise<number | null>;
}
