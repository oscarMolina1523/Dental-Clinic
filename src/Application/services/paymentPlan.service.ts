import { inject, injectable } from "tsyringe";
import { IPaymentPlanService } from "../interfaces/paymentPlan.service.interface";
import { IPaymentPlanRepository } from "../../Domain/repositories/paymentPlanRepository.interface";
import { PaymentPlanDto } from "../dtos/paymentPlan.dto";
import PaymentPlan from "../../Domain/entities/paymentPlan";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PaymentPlanService implements IPaymentPlanService {
  private readonly _paymentPlanRepository: IPaymentPlanRepository;

  constructor(@inject("IPaymentPlanRepository") repository: IPaymentPlanRepository) {
    this._paymentPlanRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<PaymentPlan[]> {
    return await this._paymentPlanRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<PaymentPlan | null> {
    return await this._paymentPlanRepository.findById(id);
  }
  
  async create(data: PaymentPlanDto): Promise<PaymentPlan> {
    const newData: PaymentPlan = {
      ...data,
      id: generateId(), 
    }
    await this._paymentPlanRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PaymentPlanDto): Promise<PaymentPlan | null> {
    const existing = await this._paymentPlanRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: PaymentPlan = {
      ...data,
      id,
    }
    await this._paymentPlanRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._paymentPlanRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._paymentPlanRepository.delete(existing);
  }
}
