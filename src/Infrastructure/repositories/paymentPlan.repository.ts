/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IPaymentPlanRepository } from "../../Domain/repositories/paymentPlanRepository.interface";
        import PaymentPlan from "../../Domain/entities/paymentPlan";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PaymentPlanRepository implements IPaymentPlanRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<PaymentPlan[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.PaymentPlan)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      invoiceId: row["INVOICEID"],
totalAmount: row["TOTALAMOUNT"],
numberOfInstallments: row["NUMBEROFINSTALLMENTS"],
frequencyDays: row["FREQUENCYDAYS"],
interestRate: row["INTERESTRATE"],
lateFreePercentage: row["LATEFREEPERCENTAGE"],
gracePeriodDays: row["GRACEPERIODDAYS"],
status: row["STATUS"],
    } as PaymentPlan)
);
}

async findById(id: string): Promise<PaymentPlan | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.PaymentPlan)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      invoiceId: row["INVOICEID"],
totalAmount: row["TOTALAMOUNT"],
numberOfInstallments: row["NUMBEROFINSTALLMENTS"],
frequencyDays: row["FREQUENCYDAYS"],
interestRate: row["INTERESTRATE"],
lateFreePercentage: row["LATEFREEPERCENTAGE"],
gracePeriodDays: row["GRACEPERIODDAYS"],
status: row["STATUS"],
  } as PaymentPlan;
}

async create(entity: PaymentPlan): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.PaymentPlan, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: PaymentPlan): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.PaymentPlan, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: PaymentPlan): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.PaymentPlan, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
