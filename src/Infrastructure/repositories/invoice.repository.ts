/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInvoiceRepository } from "../../Domain/repositories/invoiceRepository.interface";
import Invoice  from "../../Domain/entities/invoice";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InvoiceRepository implements IInvoiceRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Invoice[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Invoice | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Invoice) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Invoice): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Invoice): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
