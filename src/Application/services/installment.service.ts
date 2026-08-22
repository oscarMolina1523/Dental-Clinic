import { inject, injectable } from "tsyringe";
import { IInstallmentService } from "../interfaces/installment.service.interface";
import { IInstallmentRepository } from "../../Domain/repositories/installmentRepository.interface";
import { InstallmentDto } from "../dtos/installment.dto";
import Installment from "../../Domain/entities/installment";
import { generateId } from "../../shared/utils/generateId";
import { InstallmentStatus } from "../../Domain/types/installmentStatus.enum";
import { generateEntityCode } from "../../Infrastructure/utils/codeGenerator";

@injectable()
export class InstallmentService implements IInstallmentService {
  private readonly _installmentRepository: IInstallmentRepository;

  constructor(@inject("IInstallmentRepository") repository: IInstallmentRepository) {
    this._installmentRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<Installment[]> {
    return await this._installmentRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Installment | null> {
    return await this._installmentRepository.findById(id);
  }

  async create(data: InstallmentDto): Promise<Installment> {

    const newData: Installment = new Installment({
      ...data,
      id: generateId(),
      status: InstallmentStatus.PENDING
    })
    await this._installmentRepository.create(newData);
    return newData;
  }

  async update(id: string, data: InstallmentDto): Promise<Installment | null> {
    // const existing = await this._installmentRepository.findById(id);
    // if (!existing) {
    //   return null;
    // }

    // const newData: Installment = new Installment({
    //   ...data,
    //   id,
    // })
    // await this._installmentRepository.update(newData);
    // return newData;

    //por ahora no permitiremos modificaciones aca ya que hay otros servicios
    //dedicados
    const existing =
      await this._installmentRepository.findById(id);

    if (!existing) {
      return null;
    }

    throw new Error(
      "Las cuotas no pueden modificarse directamente. Utilice las operaciones de negocio correspondientes."
    );
  }

  async delete(id: string): Promise<void> {
    const existing = await this._installmentRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._installmentRepository.delete(existing);
  }

  async addPayment(
    id: string,
    amount: number
  ): Promise<Installment | null> {

    const installment =
      await this._installmentRepository.findById(id);

    if (!installment) {
      return null;
    }

    installment.addPayment(amount);

    await this._installmentRepository.update(
      installment
    );

    return installment;
  }

  //agregar monto por mora
  async addLateFee(
    id: string,
    amount: number
  ): Promise<Installment | null> {

    const installment =
      await this._installmentRepository.findById(id);

    if (!installment) {
      return null;
    }

    installment.addLateFee(amount);

    await this._installmentRepository.update(
      installment
    );

    return installment;
  }

  //marcarlo como mora
  async markAsOverdue(
    id: string
  ): Promise<Installment | null> {

    const installment =
      await this._installmentRepository.findById(id);

    if (!installment) {
      return null;
    }

    installment.markAsOverdue();

    await this._installmentRepository.update(
      installment
    );

    return installment;
  }

  async cancel(
    id: string
  ): Promise<Installment | null> {

    const installment =
      await this._installmentRepository.findById(id);

    if (!installment) {
      return null;
    }

    installment.cancel();

    await this._installmentRepository.update(
      installment
    );

    return installment;
  }

  async getTotalAmount(
    id: string
  ): Promise<number | null> {

    const installment =
      await this._installmentRepository.findById(id);

    if (!installment) {
      return null;
    }

    return installment.totalAmount;
  }

  async getPendingAmount(
    id: string
  ): Promise<number | null> {

    const installment =
      await this._installmentRepository.findById(id);

    if (!installment) {
      return null;
    }

    return installment.pendingAmount;
  }

  async isPaid(
    id: string
  ): Promise<boolean | null> {

    const installment =
      await this._installmentRepository.findById(id);

    if (!installment) {
      return null;
    }

    return installment.isPaid;
  }
}
