import BaseModel from "../../Domain/entities/base.model";
import { IEntitiesService } from "../interface/entitiesService.interface";
import { SqlCommand } from "../interface/sqlCommand.interface";
import { IExecuteWriteBuilder, IHaveSqlWriteOperation } from "../interface/sqlCommandOperation.interface";
import { EntityType } from "../utils/entityTypes";
import { SqlColumnSettings } from "./sqlEntitySettings";
import { SqlWriteOperation } from "./sqlOperations.enum";

export class SqlCommandWriteBuilder<TEntity extends BaseModel>
  implements IHaveSqlWriteOperation, IExecuteWriteBuilder
{
  private operation!: SqlWriteOperation;
  private readonly entity: TEntity;
  private readonly entityType: EntityType;
  private readonly entitiesService: IEntitiesService;

  constructor(
    entitiesService: IEntitiesService,
    entityType: EntityType,
    entity: TEntity
  ) {
    this.entity = entity;
    this.entitiesService = entitiesService;
    this.entityType = entityType;
  }

  WithOperation(operation: SqlWriteOperation): IExecuteWriteBuilder {
    this.operation = operation;
    return this;
  }

  BuildWritter(): SqlCommand {
    switch (this.operation) {
      case SqlWriteOperation.Create:
        return this.getInsertCommand();
      case SqlWriteOperation.Update:
        return this.getUpdateCommand();
      case SqlWriteOperation.Delete:
        return this.getDeleteCommand();
      default:
        throw new Error("Invalid write operation.");
    }
  }

  private getInsertCommand(): SqlCommand {
    const entitySettings = this.entitiesService.GetSettings(this.entityType);
    const sqlQuery = this.getInsertQuery(
      entitySettings.tableName,
      entitySettings.columns
    );
    const parameters = this.getSqlParameters(entitySettings.columns);
    return { query: sqlQuery, parameters };
  }

  private getInsertQuery(
    entityName: string,
    columns: SqlColumnSettings[]
  ): string {
    const columnNames = columns.map((c) => c.name);
    const parameterNames = columns.map((c) => c.parameterName);
    return `INSERT INTO ${entityName} (${columnNames.join(
      ", "
    )}) VALUES (${parameterNames.join(", ")});`;
  }

  private getUpdateCommand(): SqlCommand {
    const entitySettings = this.entitiesService.GetSettings(this.entityType);
    const sqlQuery = this.getUpdateQuery(
      entitySettings.tableName,
      entitySettings.columns
    );
    const parameters = this.getSqlParameters(entitySettings.columns);
    return { query: sqlQuery, parameters };
  }

  private getUpdateQuery(
    entityName: string,
    columns: SqlColumnSettings[]
  ): string {
    const primaryKey = columns.find((c) => c.isPrimaryKey);
    if (!primaryKey) throw new Error("No primary key found for update.");

    const setClauses = columns
      .filter((c) => !c.isPrimaryKey)
      .map((c) => `${c.name} = ${c.parameterName}`);

    return `UPDATE ${entityName} SET ${setClauses.join(", ")} WHERE ${
      primaryKey.name
    } = ${primaryKey.parameterName};`;
  }

  private getDeleteCommand(): SqlCommand {
    const entitySettings = this.entitiesService.GetSettings(this.entityType);
    const primaryKey = entitySettings.columns.find((c) => c.isPrimaryKey);
    if (!primaryKey) throw new Error("No primary key found for delete.");
    const sqlQuery = this.getDeleteQuery(
      entitySettings.tableName,
      entitySettings.columns
    );
    //const parameters = this.getSqlParameters(entitySettings.columns);
    const parameters = [
      {
        name: primaryKey.parameterName,
        value: (this.entity as any)[primaryKey.domainName],
      },
    ];
    return { query: sqlQuery, parameters };
  }

  private getDeleteQuery(
    entityName: string,
    columns: SqlColumnSettings[]
  ): string {
    const primaryKey = columns.find((c) => c.isPrimaryKey);
    if (!primaryKey) throw new Error("No primary key found for delete.");
    return `DELETE FROM ${entityName} WHERE ${primaryKey.name} = ${primaryKey.parameterName};`;
  }

  //funcion para obtener los parametros y el valor a insertar con los parametros
  //ej: @name es el parameter "oscar" seria el value
  private getSqlParameters(
    columns: SqlColumnSettings[]
  ): { name: string; value: any }[] {
    return columns.map((c) => ({
      name: c.parameterName,
      value: (this.entity as any)[c.domainName] ?? null,
    }));
  }
}