import { inject, injectable } from "tsyringe";
import { IPaymentNotificationService } from "../interfaces/paymentNotification.service.interface";
import { IPaymentNotificationRepository } from "../../Domain/repositories/paymentNotificationRepository.interface";
import { PaymentNotificationDto } from "../dtos/paymentNotification.dto";
import PaymentNotification from "../../Domain/entities/paymentNotification";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PaymentNotificationService implements IPaymentNotificationService {
  private readonly _paymentNotificationRepository: IPaymentNotificationRepository;

  constructor(@inject("IPaymentNotificationRepository") repository: IPaymentNotificationRepository) {
    this._paymentNotificationRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<PaymentNotification[]> {
    return await this._paymentNotificationRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<PaymentNotification | null> {
    return await this._paymentNotificationRepository.findById(id);
  }
  
  async create(data: PaymentNotificationDto): Promise<PaymentNotification> {
    const newData: PaymentNotification = {
      ...data,
      id: generateId(), 
    }
    await this._paymentNotificationRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PaymentNotificationDto): Promise<PaymentNotification | null> {
    const existing = await this._paymentNotificationRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: PaymentNotification = {
      ...data,
      id,
    }
    await this._paymentNotificationRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._paymentNotificationRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._paymentNotificationRepository.delete(existing);
  }
}
