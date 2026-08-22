import { inject, injectable } from "tsyringe";
import { IPaymentPlanService } from "../interfaces/paymentPlan.service.interface";
import { IPaymentPlanRepository } from "../../Domain/repositories/paymentPlanRepository.interface";
import { PaymentPlanDto } from "../dtos/paymentPlan.dto";
import PaymentPlan from "../../Domain/entities/paymentPlan";
import { generateId } from "../../shared/utils/generateId";
import { PaymentPlanStatus } from "../../Domain/types/paymentPlanStatus.enum";

@injectable()
export class PaymentPlanService implements IPaymentPlanService {
  private readonly _paymentPlanRepository: IPaymentPlanRepository;

  constructor(@inject("IPaymentPlanRepository") repository: IPaymentPlanRepository) {
    this._paymentPlanRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<PaymentPlan[]> {
    return await this._paymentPlanRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<PaymentPlan | null> {
    return await this._paymentPlanRepository.findById(id);
  }

  async create(data: PaymentPlanDto): Promise<PaymentPlan> {
    const newData: PaymentPlan = new PaymentPlan({
      ...data,
      status: PaymentPlanStatus.PENDING,
      id: generateId(),
    })
    await this._paymentPlanRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PaymentPlanDto): Promise<PaymentPlan | null> {
    const existing = await this._paymentPlanRepository.findById(id);
    if (!existing) {
      return null;
    }

    /*
    * NO reconstruimos directamente la entidad.
    *
    * Usamos los métodos de dominio para que
    * PaymentPlan controle sus propias reglas de negocio.
    * pero solo funcionaran si aun no esta en progreso la transaccion 
    * ya que una ves empezada no vamos a cambiar nada
    * para evitar lavado de dinero
    */

    if (
      data.numberOfInstallments !==
      existing.currentNumberOfInstallments
    ) {
      existing.changeNumberOfInstallments(
        data.numberOfInstallments
      );
    }

    if (
      data.frequencyDays !==
      existing.currentFrequencyDays
    ) {
      existing.changeFrequency(
        data.frequencyDays
      );
    }

    if (
      data.interestRate !==
      existing.currentInterestRate
    ) {
      existing.changeInterestRate(
        data.interestRate
      );
    }

    if (
      data.gracePeriodDays !==
      existing.currentGracePeriodDays
    ) {
      existing.changeGracePeriod(
        data.gracePeriodDays
      );
    }

    if (
      data.lateFreePercentage !==
      existing.currentLateFreePercentage
    ) {
      existing.changeLateFreePercentage(
        data.lateFreePercentage
      );
    }

    await this._paymentPlanRepository.update(existing);
    return existing;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._paymentPlanRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._paymentPlanRepository.delete(existing);
  }

  async activate(
    id: string
  ): Promise<PaymentPlan | null> {

    const paymentPlan =
      await this._paymentPlanRepository.findById(id);

    if (!paymentPlan) {
      return null;
    }

    paymentPlan.activate();

    await this._paymentPlanRepository.update(
      paymentPlan
    );

    return paymentPlan;
  }

  async complete(
    id: string
  ): Promise<PaymentPlan | null> {

    const paymentPlan =
      await this._paymentPlanRepository.findById(id);

    if (!paymentPlan) {
      return null;
    }

    paymentPlan.complete();

    await this._paymentPlanRepository.update(
      paymentPlan
    );

    return paymentPlan;
  }

  async cancel(
    id: string
  ): Promise<PaymentPlan | null> {

    const paymentPlan =
      await this._paymentPlanRepository.findById(id);

    if (!paymentPlan) {
      return null;
    }

    paymentPlan.cancel();

    await this._paymentPlanRepository.update(
      paymentPlan
    );

    return paymentPlan;
  }

  async getInstallmentAmount(
    id: string
  ): Promise<number | null> {

    const paymentPlan =
      await this._paymentPlanRepository.findById(id);

    if (!paymentPlan) {
      return null;
    }

    return paymentPlan.installmentAmount;
  }

}
