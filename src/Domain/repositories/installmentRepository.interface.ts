import Installment from '../entities/installment';

export interface IInstallmentRepository {
  findAll(page: number, pageSize: number): Promise<Installment[]>;
  findById(id: string): Promise<Installment | null>;
  findByPaymentPlanId(id: string): Promise<Installment[]>;
  create(data: Installment): Promise<void>;
  update(data: Installment): Promise<void>;
  delete(data: Installment): Promise<void>;
}
