/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInstallmentRepository } from "../../Domain/repositories/installmentRepository.interface";
import Installment from "../../Domain/entities/installment";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InstallmentRepository implements IInstallmentRepository {

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
  async findAll(page: number = 1, pageSize: number = 100): Promise<Installment[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.Installment)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
      new Installment({
        id: row["ID"],
        paymentPlanId: row["PAYMENTPLANID"],
        installmentNumber: row["INSTALLMENTNUMBER"],
        dueDate: row["DUEDATE"],
        amount: row["AMOUNT"],
        lateFeeAmount: row["LATEFEEAMOUNT"],
        paidAmount: row["PAIDAMOUNT"],
        status: row["STATUS"],
      })
    );
  }

  async findById(id: string): Promise<Installment | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.Installment)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new Installment ({
      id: row["ID"],
      paymentPlanId: row["PAYMENTPLANID"],
      installmentNumber: row["INSTALLMENTNUMBER"],
      dueDate: row["DUEDATE"],
      amount: row["AMOUNT"],
      lateFeeAmount: row["LATEFEEAMOUNT"],
      paidAmount: row["PAIDAMOUNT"],
      status: row["STATUS"],
    });
  }

  async create(entity: Installment): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Installment, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: Installment): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Installment, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: Installment): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Installment, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
