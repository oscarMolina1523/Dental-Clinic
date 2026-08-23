/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IAppointmentRepository } from "../../Domain/repositories/appointmentRepository.interface";
import Appointment from "../../Domain/entities/appointment";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class AppointmentRepository implements IAppointmentRepository {

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
  async findAll(page: number = 1, pageSize: number = 100): Promise<Appointment[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.Appointment)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
      new Appointment({
        id: row["ID"],
        patientId: row["PATIENTID"],
        dentistId: row["DENTISTID"],
        startAppointmentTime: row["STARTAPPOINTMENTTIME"],
        endAppointmentTime: row["ENDAPPOINTMENTTIME"],
        reason: row["REASON"],
        status: row["STATUS"],
        cancelationNotes: row["CANCELATIONNOTES"],
        reminderSent: row["REMINDERSENT"],
        createdAt: row["CREATEDAT"],
      })
    );
  }

  async findById(id: string): Promise<Appointment | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.Appointment)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new Appointment({
      id: row["ID"],
      patientId: row["PATIENTID"],
      dentistId: row["DENTISTID"],
      startAppointmentTime: row["STARTAPPOINTMENTTIME"],
      endAppointmentTime: row["ENDAPPOINTMENTTIME"],
      reason: row["REASON"],
      status: row["STATUS"],
      cancelationNotes: row["CANCELATIONNOTES"],
      reminderSent: row["REMINDERSENT"],
      createdAt: row["CREATEDAT"],
    });
  }

  async create(entity: Appointment): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Appointment, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: Appointment): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Appointment, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: Appointment): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Appointment, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
