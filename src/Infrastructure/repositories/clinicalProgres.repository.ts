/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IClinicalProgresRepository } from "../../Domain/repositories/clinicalProgresRepository.interface";
        import ClinicalProgres from "../../Domain/entities/clinicalProgres";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ClinicalProgresRepository implements IClinicalProgresRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<ClinicalProgres[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.ClinicalProgres)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      patientId: row["PATIENTID"],
dateId: row["DATEID"],
dentistId: row["DENTISTID"],
diagnosis: row["DIAGNOSIS"],
treatmentId: row["TREATMENTID"],
observations: row["OBSERVATIONS"],
registrationDate: row["REGISTRATIONDATE"],
    } as ClinicalProgres)
);
}

async findById(id: string): Promise<ClinicalProgres | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.ClinicalProgres)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      patientId: row["PATIENTID"],
dateId: row["DATEID"],
dentistId: row["DENTISTID"],
diagnosis: row["DIAGNOSIS"],
treatmentId: row["TREATMENTID"],
observations: row["OBSERVATIONS"],
registrationDate: row["REGISTRATIONDATE"],
  } as ClinicalProgres;
}

async create(entity: ClinicalProgres): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.ClinicalProgres, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: ClinicalProgres): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.ClinicalProgres, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: ClinicalProgres): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.ClinicalProgres, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
