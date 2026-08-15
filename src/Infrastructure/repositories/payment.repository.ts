/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IPaymentRepository } from "../../Domain/repositories/paymentRepository.interface";
        import Payment from "../../Domain/entities/payment";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PaymentRepository implements IPaymentRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<Payment[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Payment)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      invoice_id: row["INVOICE_ID"],
amount: row["AMOUNT"],
payment_method: row["PAYMENT_METHOD"],
transaction_reference: row["TRANSACTION_REFERENCE"],
served_by: row["SERVED_BY"],
payment_date: row["PAYMENT_DATE"],
installment_id: row["INSTALLMENT_ID"],
    } as Payment)
);
}

async findById(id: string): Promise<Payment | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Payment)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      invoice_id: row["INVOICE_ID"],
amount: row["AMOUNT"],
payment_method: row["PAYMENT_METHOD"],
transaction_reference: row["TRANSACTION_REFERENCE"],
served_by: row["SERVED_BY"],
payment_date: row["PAYMENT_DATE"],
installment_id: row["INSTALLMENT_ID"],
  } as Payment;
}

async create(entity: Payment): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Payment, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Payment): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Payment, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Payment): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Payment, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
