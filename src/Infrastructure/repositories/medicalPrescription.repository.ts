/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IMedicalPrescriptionRepository } from "../../Domain/repositories/medicalPrescriptionRepository.interface";
        import MedicalPrescription from "../../Domain/entities/medicalPrescription";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class MedicalPrescriptionRepository implements IMedicalPrescriptionRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<MedicalPrescription[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.MedicalPrescription)
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
date: row["DATE"],
generalInstructions: row["GENERALINSTRUCTIONS"],
    } as MedicalPrescription)
);
}

async findById(id: string): Promise<MedicalPrescription | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.MedicalPrescription)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      patientId: row["PATIENTID"],
dentistId: row["DENTISTID"],
date: row["DATE"],
generalInstructions: row["GENERALINSTRUCTIONS"],
  } as MedicalPrescription;
}

async create(entity: MedicalPrescription): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.MedicalPrescription, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: MedicalPrescription): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.MedicalPrescription, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: MedicalPrescription): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.MedicalPrescription, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
