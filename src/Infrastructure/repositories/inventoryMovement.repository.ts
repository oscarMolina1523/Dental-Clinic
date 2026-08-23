/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInventoryMovementRepository } from "../../Domain/repositories/inventoryMovementRepository.interface";
import InventoryMovement from "../../Domain/entities/inventoryMovement";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InventoryMovementRepository implements IInventoryMovementRepository {

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
  async findAll(page: number = 1, pageSize: number = 100): Promise<InventoryMovement[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.InventoryMovement)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
      new InventoryMovement({
        id: row["ID"],
        productId: row["PRODUCTID"],
        type: row["TYPE"],
        quantity: row["QUANTITY"],
        userId: row["USERID"],
        observation: row["OBSERVATION"],
      })
    );
  }

  async findById(id: string): Promise<InventoryMovement | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.InventoryMovement)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new InventoryMovement({
      id: row["ID"],
      productId: row["PRODUCTID"],
      type: row["TYPE"],
      quantity: row["QUANTITY"],
      userId: row["USERID"],
      observation: row["OBSERVATION"],
    });
  }

  async create(entity: InventoryMovement): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.InventoryMovement, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: InventoryMovement): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.InventoryMovement, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: InventoryMovement): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.InventoryMovement, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
