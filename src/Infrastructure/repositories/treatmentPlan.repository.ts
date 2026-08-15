/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { ITreatmentPlanRepository } from "../../Domain/repositories/treatmentPlanRepository.interface";
        import TreatmentPlan from "../../Domain/entities/treatmentPlan";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class TreatmentPlanRepository implements ITreatmentPlanRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentPlan[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.TreatmentPlan)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      patientId: row["PATIENTID"],
dentistId: row["DENTISTID"],
code: row["CODE"],
status: row["STATUS"],
totalAmount: row["TOTALAMOUNT"],
discount: row["DISCOUNT"],
createdAt: row["CREATEDAT"],
    } as TreatmentPlan)
);
}

async findById(id: string): Promise<TreatmentPlan | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.TreatmentPlan)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      patientId: row["PATIENTID"],
dentistId: row["DENTISTID"],
code: row["CODE"],
status: row["STATUS"],
totalAmount: row["TOTALAMOUNT"],
discount: row["DISCOUNT"],
createdAt: row["CREATEDAT"],
  } as TreatmentPlan;
}

async create(entity: TreatmentPlan): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.TreatmentPlan, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: TreatmentPlan): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.TreatmentPlan, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: TreatmentPlan): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.TreatmentPlan, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
