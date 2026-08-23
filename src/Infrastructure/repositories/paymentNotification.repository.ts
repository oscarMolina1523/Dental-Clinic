/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPaymentNotificationRepository } from "../../Domain/repositories/paymentNotificationRepository.interface";
import PaymentNotification from "../../Domain/entities/paymentNotification";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PaymentNotificationRepository implements IPaymentNotificationRepository {

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
  async findAll(page: number = 1, pageSize: number = 100): Promise<PaymentNotification[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.PaymentNotification)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
      new PaymentNotification({
        id: row["ID"],
        installmentId: row["INSTALLMENTID"],
        patientId: row["PATIENTID"],
        scheduledDate: row["SCHEDULEDDATE"],
        sendAt: row["SENDAT"],
        notificationType: row["NOTIFICATIONTYPE"],
        channel: row["CHANNEL"],
        status: row["STATUS"],
      })
    );
  }

  async findById(id: string): Promise<PaymentNotification | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.PaymentNotification)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new PaymentNotification ({
      id: row["ID"],
      installmentId: row["INSTALLMENTID"],
      patientId: row["PATIENTID"],
      scheduledDate: row["SCHEDULEDDATE"],
      sendAt: row["SENDAT"],
      notificationType: row["NOTIFICATIONTYPE"],
      channel: row["CHANNEL"],
      status: row["STATUS"],
    });
  }

  async create(entity: PaymentNotification): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.PaymentNotification, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: PaymentNotification): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.PaymentNotification, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: PaymentNotification): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.PaymentNotification, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
