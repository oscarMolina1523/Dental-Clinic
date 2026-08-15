/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IPatientAttachmentRepository } from "../../Domain/repositories/patientAttachmentRepository.interface";
        import PatientAttachment from "../../Domain/entities/patientAttachment";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PatientAttachmentRepository implements IPatientAttachmentRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<PatientAttachment[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.PatientAttachment)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      patientId: row["PATIENTID"],
fileType: row["FILETYPE"],
fileUrl: row["FILEURL"],
fileName: row["FILENAME"],
description: row["DESCRIPTION"],
uploadedBy: row["UPLOADEDBY"],
createdAt: row["CREATEDAT"],
    } as PatientAttachment)
);
}

async findById(id: string): Promise<PatientAttachment | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.PatientAttachment)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      patientId: row["PATIENTID"],
fileType: row["FILETYPE"],
fileUrl: row["FILEURL"],
fileName: row["FILENAME"],
description: row["DESCRIPTION"],
uploadedBy: row["UPLOADEDBY"],
createdAt: row["CREATEDAT"],
  } as PatientAttachment;
}

async create(entity: PatientAttachment): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.PatientAttachment, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: PatientAttachment): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.PatientAttachment, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: PatientAttachment): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.PatientAttachment, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
