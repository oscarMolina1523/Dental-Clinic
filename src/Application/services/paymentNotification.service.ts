import { inject, injectable } from "tsyringe";
import { IPaymentNotificationService } from "../interfaces/paymentNotification.service.interface";
import { IPaymentNotificationRepository } from "../../Domain/repositories/paymentNotificationRepository.interface";
import { PaymentNotificationDto } from "../dtos/paymentNotification.dto";
import PaymentNotification from "../../Domain/entities/paymentNotification";
import { generateId } from "../../shared/utils/generateId";
import { PaymentNotificationStatus } from "../../Domain/types/paymentNotificationStatus.enum";

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
    const newData: PaymentNotification = new PaymentNotification({
      ...data,
      id: generateId(), 
      status:PaymentNotificationStatus.PENDING
    })
    await this._paymentNotificationRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PaymentNotificationDto): Promise<PaymentNotification | null> {
    const existing = await this._paymentNotificationRepository.findById(id);
    if (!existing) {
      return null;
    }

    existing.update({
      scheduledDate: data.scheduledDate,
      sendAt: data.sendAt,
      notificationType:
        data.notificationType,
      channel:
        data.channel
    });

    await this._paymentNotificationRepository.update(existing);
    return existing;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._paymentNotificationRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._paymentNotificationRepository.delete(existing);
  }

  async updateStatus(
    id: string,
    status: PaymentNotificationStatus
  ): Promise<PaymentNotification | null> {

    const existing =
      await this._paymentNotificationRepository.findById(id);

    if (!existing) {
      return null;
    }

    // ============================================================
    // DOMAIN
    // ============================================================

    existing.updateStatus(status);

    // ============================================================
    // PERSISTENCE
    // ============================================================

    await this._paymentNotificationRepository.update(
      existing
    );

    return existing;
  }

  // ============================================================
  // RESCHEDULE
  // ============================================================

  async reschedule(
    id: string,
    sendAt: Date | string
  ): Promise<PaymentNotification | null> {

    const existing =
      await this._paymentNotificationRepository.findById(id);

    if (!existing) {
      return null;
    }
    // ============================================================
    // DOMAIN
    // ============================================================

    existing.reschedule(sendAt);

    // ============================================================
    // PERSISTENCE
    // ============================================================

    await this._paymentNotificationRepository.update(
      existing
    );

    return existing;
  }

  // ============================================================
  // MARK AS SENT
  // ============================================================

  async markAsSent(
    id: string
  ): Promise<PaymentNotification | null> {

    const existing =
      await this._paymentNotificationRepository.findById(id);

    if (!existing) {
      return null;
    }

    // ============================================================
    // DOMAIN
    // ============================================================

    existing.markAsSent();

    // ============================================================
    // PERSISTENCE
    // ============================================================

    await this._paymentNotificationRepository.update(
      existing
    );

    return existing;
  }

  // ============================================================
  // MARK AS FAILED
  // ============================================================

  async markAsFailed(
    id: string
  ): Promise<PaymentNotification | null> {

    const existing =
      await this._paymentNotificationRepository.findById(id);

    if (!existing) {
      return null;
    }

    // ============================================================
    // DOMAIN
    // ============================================================

    existing.markAsFailed();

    // ============================================================
    // PERSISTENCE
    // ============================================================

    await this._paymentNotificationRepository.update(
      existing
    );

    return existing;
  }

  // ============================================================
  // CANCEL
  // ============================================================

  async cancel(
    id: string
  ): Promise<PaymentNotification | null> {

    const existing =
      await this._paymentNotificationRepository.findById(id);

    if (!existing) {
      return null;
    }

    // ============================================================
    // DOMAIN
    // ============================================================

    existing.cancel();

    // ============================================================
    // PERSISTENCE
    // ============================================================

    await this._paymentNotificationRepository.update(
      existing
    );

    return existing;
  }

}
