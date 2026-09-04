/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInventoryRepository } from "../../Domain/repositories/inventoryRepository.interface";
import Inventory from "../../Domain/entities/inventory";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InventoryRepository implements IInventoryRepository {

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
  async findAll(page: number = 1, pageSize: number = 100): Promise<Inventory[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.Inventory)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
        new Inventory({
          id: row["ID"],
          productId: row["PRODUCTID"],
          productName: row["PRODUCTNAME"],
          currentStock: row["CURRENTSTOCK"],
          minimumStock: row["MINIMUMSTOCK"],
        })
    );
  }

  async findById(id: string): Promise<Inventory | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.Inventory)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new Inventory({
      id: row["ID"],
      productId: row["PRODUCTID"],
      productName: row["PRODUCTNAME"],
      currentStock: row["CURRENTSTOCK"],
      minimumStock: row["MINIMUMSTOCK"],
    });
  }

  async findByProduct(id: string): Promise<Inventory | null> {
    const builder = this._operationBuilder
      .Initialize(EntityType.Inventory)
      .WithOperation(SqlReadOperation.SelectByField);

    if (!builder.WithField) throw new Error("WithField no implementado");
    const readCommand = builder.WithField("productId", id).BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new Inventory({
      id: row["ID"],
      productId: row["PRODUCTID"],
      productName: row["PRODUCTNAME"],
      currentStock: row["CURRENTSTOCK"],
      minimumStock: row["MINIMUMSTOCK"],
    });
  }

  async create(entity: Inventory): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Inventory, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: Inventory): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Inventory, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: Inventory): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Inventory, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
