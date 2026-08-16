/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInvoiceRepository } from "../../Domain/repositories/invoiceRepository.interface";
import Invoice from "../../Domain/entities/invoice";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InvoiceRepository implements IInvoiceRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  private readonly _operationBuilder: ISqlCommandOperationBuilder;
  private readonly _connection: ISingletonSqlConnection;
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  constructor(
    @inject("IOperationBuilder") operationBuilder: ISqlCommandOperationBuilder,
    @inject("ISingletonSqlConnection") connection: ISingletonSqlConnection
  ) {
    this._operationBuilder = operationBuilder;
    this._connection = connection;
  }
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Invoice[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.Invoice)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
      new Invoice({
        id: row["ID"],
        patientId: row["PATIENTID"],
        treatmentPlanId: row["TREATMENTPLANID"],
        invoiceNumber: row["INVOICENUMBER"],
        totalAmount: row["TOTALAMOUNT"],
        paidAmount: row["PAIDAMOUNT"],
        pendingAmount: row["PENDINGAMOUNT"],
        status: row["STATUS"],
      })
    );
  }

  async findById(id: string): Promise<Invoice | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.Invoice)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new Invoice({
      id: row["ID"],
      patientId: row["PATIENTID"],
      treatmentPlanId: row["TREATMENTPLANID"],
      invoiceNumber: row["INVOICENUMBER"],
      totalAmount: row["TOTALAMOUNT"],
      paidAmount: row["PAIDAMOUNT"],
      pendingAmount: row["PENDINGAMOUNT"],
      status: row["STATUS"],
    });
  }

  async create(entity: Invoice): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Invoice, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: Invoice): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Invoice, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: Invoice): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Invoice, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
