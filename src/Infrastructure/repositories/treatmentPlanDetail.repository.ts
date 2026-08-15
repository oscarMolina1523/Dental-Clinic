/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { ITreatmentPlanDetailRepository } from "../../Domain/repositories/treatmentPlanDetailRepository.interface";
        import TreatmentPlanDetail from "../../Domain/entities/treatmentPlanDetail";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class TreatmentPlanDetailRepository implements ITreatmentPlanDetailRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentPlanDetail[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.TreatmentPlanDetail)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      planId: row["PLANID"],
treatmentId: row["TREATMENTID"],
toothNumber: row["TOOTHNUMBER"],
quantity: row["QUANTITY"],
unitPrice: row["UNITPRICE"],
subtotal: row["SUBTOTAL"],
status: row["STATUS"],
    } as TreatmentPlanDetail)
);
}

async findById(id: string): Promise<TreatmentPlanDetail | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.TreatmentPlanDetail)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      planId: row["PLANID"],
treatmentId: row["TREATMENTID"],
toothNumber: row["TOOTHNUMBER"],
quantity: row["QUANTITY"],
unitPrice: row["UNITPRICE"],
subtotal: row["SUBTOTAL"],
status: row["STATUS"],
  } as TreatmentPlanDetail;
}

async create(entity: TreatmentPlanDetail): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.TreatmentPlanDetail, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: TreatmentPlanDetail): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.TreatmentPlanDetail, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: TreatmentPlanDetail): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.TreatmentPlanDetail, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
