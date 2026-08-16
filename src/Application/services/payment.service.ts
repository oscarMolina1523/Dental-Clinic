import { inject, injectable } from "tsyringe";
import { IPaymentService } from "../interfaces/payment.service.interface";
import { IPaymentRepository } from "../../Domain/repositories/paymentRepository.interface";
import { PaymentDto } from "../dtos/payment.dto";
import Payment from "../../Domain/entities/payment";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PaymentService implements IPaymentService {
  private readonly _paymentRepository: IPaymentRepository;

  constructor(@inject("IPaymentRepository") repository: IPaymentRepository) {
    this._paymentRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Payment[]> {
    return await this._paymentRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Payment | null> {
    return await this._paymentRepository.findById(id);
  }
  
  async create(data: PaymentDto): Promise<Payment> {
    const newData: Payment = new Payment({
      ...data,
      id: generateId(), 
    });
    await this._paymentRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PaymentDto): Promise<Payment | null> {
    const existing = await this._paymentRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Payment = new Payment({
      ...data,
      id,
    });
    
    await this._paymentRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._paymentRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._paymentRepository.delete(existing);
  }
}
