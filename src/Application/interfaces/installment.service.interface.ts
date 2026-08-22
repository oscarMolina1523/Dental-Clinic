import Installment from "../../Domain/entities/installment";
import { InstallmentDto } from './../dtos/installment.dto';

export interface IInstallmentService {
  findAll(page: number, pageSize: number): Promise<Installment[]>;
  findById(id: string): Promise<Installment | null>;
  create(data: InstallmentDto): Promise<Installment>;
  update(id: string, data: InstallmentDto): Promise<Installment | null>;
  delete(id: string): Promise<void>;

  addPayment(
    id: string,
    amount: number
  ): Promise<Installment | null>;

  addLateFee(
    id: string,
    amount: number
  ): Promise<Installment | null>;

  markAsOverdue(
    id: string
  ): Promise<Installment | null>;

  cancel(
    id: string
  ): Promise<Installment | null>;

  getTotalAmount(
    id: string
  ): Promise<number | null>;

  getPendingAmount(
    id: string
  ): Promise<number | null>;

  isPaid(
    id: string
  ): Promise<boolean | null>;
}
