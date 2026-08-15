/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IMedicalPrescriptionDetailRepository } from "../../Domain/repositories/medicalPrescriptionDetailRepository.interface";
        import MedicalPrescriptionDetail from "../../Domain/entities/medicalPrescriptionDetail";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class MedicalPrescriptionDetailRepository implements IMedicalPrescriptionDetailRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<MedicalPrescriptionDetail[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.MedicalPrescriptionDetail)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      medicalPrescriptionId: row["MEDICALPRESCRIPTIONID"],
medicine: row["MEDICINE"],
dose: row["DOSE"],
frequency: row["FREQUENCY"],
duration: row["DURATION"],
    } as MedicalPrescriptionDetail)
);
}

async findById(id: string): Promise<MedicalPrescriptionDetail | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.MedicalPrescriptionDetail)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      medicalPrescriptionId: row["MEDICALPRESCRIPTIONID"],
medicine: row["MEDICINE"],
dose: row["DOSE"],
frequency: row["FREQUENCY"],
duration: row["DURATION"],
  } as MedicalPrescriptionDetail;
}

async create(entity: MedicalPrescriptionDetail): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.MedicalPrescriptionDetail, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: MedicalPrescriptionDetail): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.MedicalPrescriptionDetail, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: MedicalPrescriptionDetail): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.MedicalPrescriptionDetail, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
