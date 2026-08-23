/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IDentalChartRepository } from "../../Domain/repositories/dentalChartRepository.interface";
import DentalChart from "../../Domain/entities/dentalChart";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class DentalChartRepository implements IDentalChartRepository {

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
  async findAll(page: number = 1, pageSize: number = 100): Promise<DentalChart[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.DentalChart)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
      new DentalChart({
        id: row["ID"],
        patientId: row["PATIENTID"],
        evaluationDate: row["EVALUATIONDATE"],
        dentistId: row["DENTISTID"],
        observations: row["OBSERVATIONS"],
      })
    );
  }

  async findById(id: string): Promise<DentalChart | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.DentalChart)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new DentalChart({
      id: row["ID"],
      patientId: row["PATIENTID"],
      evaluationDate: row["EVALUATIONDATE"],
      dentistId: row["DENTISTID"],
      observations: row["OBSERVATIONS"],
    });
  }

  async create(entity: DentalChart): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.DentalChart, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: DentalChart): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.DentalChart, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: DentalChart): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.DentalChart, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
