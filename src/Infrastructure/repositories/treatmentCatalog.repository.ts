/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ITreatmentCatalogRepository } from "../../Domain/repositories/treatmentCatalogRepository.interface";
import TreatmentCatalog from "../../Domain/entities/treatmentCatalog";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class TreatmentCatalogRepository implements ITreatmentCatalogRepository {

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
  async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentCatalog[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.TreatmentCatalog)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
      new TreatmentCatalog({
        id: row["ID"],
        code: row["CODE"],
        name: row["NAME"],
        description: row["DESCRIPTION"],
        basePrice: row["BASEPRICE"],
        estimatedDurationMinutes: row["ESTIMATEDDURATIONMINUTES"],
        active: row["ACTIVE"],
      })
    );
  }

  async findById(id: string): Promise<TreatmentCatalog | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.TreatmentCatalog)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new TreatmentCatalog({
      id: row["ID"],
      code: row["CODE"],
      name: row["NAME"],
      description: row["DESCRIPTION"],
      basePrice: row["BASEPRICE"],
      estimatedDurationMinutes: row["ESTIMATEDDURATIONMINUTES"],
      active: row["ACTIVE"],
    });
  }

  async create(entity: TreatmentCatalog): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.TreatmentCatalog, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: TreatmentCatalog): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.TreatmentCatalog, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: TreatmentCatalog): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.TreatmentCatalog, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
