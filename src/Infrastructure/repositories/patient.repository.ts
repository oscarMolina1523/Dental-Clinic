/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPatientRepository } from "../../Domain/repositories/patientRepository.interface";
import Patient from "../../Domain/entities/patient";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PatientRepository implements IPatientRepository {

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
  async findAll(page: number = 1, pageSize: number = 100): Promise<Patient[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.Patient)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
      new Patient({
        id: row["ID"],
        patientCode: row["PATIENTCODE"],
        image: row["IMAGE"],
        name: row["NAME"],
        lastName: row["LASTNAME"],
        idCard: row["IDCARD"],
        birthdate: row["BIRTHDATE"],
        gender: row["GENDER"],
        phoneNumber: row["PHONENUMBER"],
        email: row["EMAIL"],
        address: row["ADDRESS"],
        emergencyContactName: row["EMERGENCYCONTACTNAME"],
        emergencyContactPhone: row["EMERGENCYCONTACTPHONE"],
        maritalStatus: row["MARITALSTATUS"],
        active: row["ACTIVE"],
        createdAt: row["CREATEDAT"],
        updatedAt: row["UPDATEDAT"],
      })
    );
  }

  async findById(id: string): Promise<Patient | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.Patient)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new Patient({
      id: row["ID"],
      patientCode: row["PATIENTCODE"],
      image: row["IMAGE"],
      name: row["NAME"],
      lastName: row["LASTNAME"],
      idCard: row["IDCARD"],
      birthdate: row["BIRTHDATE"],
      gender: row["GENDER"],
      phoneNumber: row["PHONENUMBER"],
      email: row["EMAIL"],
      address: row["ADDRESS"],
      emergencyContactName: row["EMERGENCYCONTACTNAME"],
      emergencyContactPhone: row["EMERGENCYCONTACTPHONE"],
      maritalStatus: row["MARITALSTATUS"],
      active: row["ACTIVE"],
      createdAt: row["CREATEDAT"],
      updatedAt: row["UPDATEDAT"],
    });
  }

  async create(entity: Patient): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Patient, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: Patient): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Patient, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: Patient): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Patient, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
