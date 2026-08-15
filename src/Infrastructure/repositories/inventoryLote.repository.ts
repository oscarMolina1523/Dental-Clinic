/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IInventoryLoteRepository } from "../../Domain/repositories/inventoryLoteRepository.interface";
        import InventoryLote from "../../Domain/entities/inventoryLote";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InventoryLoteRepository implements IInventoryLoteRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<InventoryLote[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.InventoryLote)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      productId: row["PRODUCTID"],
supplierId: row["SUPPLIERID"],
loteNumber: row["LOTENUMBER"],
quantity: row["QUANTITY"],
dueDate: row["DUEDATE"],
entryDate: row["ENTRYDATE"],
    } as InventoryLote)
);
}

async findById(id: string): Promise<InventoryLote | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.InventoryLote)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      productId: row["PRODUCTID"],
supplierId: row["SUPPLIERID"],
loteNumber: row["LOTENUMBER"],
quantity: row["QUANTITY"],
dueDate: row["DUEDATE"],
entryDate: row["ENTRYDATE"],
  } as InventoryLote;
}

async create(entity: InventoryLote): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.InventoryLote, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: InventoryLote): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.InventoryLote, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: InventoryLote): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.InventoryLote, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
