import PaymentPlan from '../entities/paymentPlan';

export interface IPaymentPlanRepository {
  findAll(page: number, pageSize: number): Promise<PaymentPlan[]>;
  findById(id: string): Promise<PaymentPlan | null>;
  create(data: PaymentPlan): Promise<void>;
  update(data: PaymentPlan): Promise<void>;
  delete(data: PaymentPlan): Promise<void>;
}
