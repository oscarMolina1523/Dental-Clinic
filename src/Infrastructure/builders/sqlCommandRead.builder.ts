import BaseModel from "../../Domain/entities/base.model";
import { IEntitiesService } from "../interface/entitiesService.interface";
import { SqlCommand } from "../interface/sqlCommand.interface";
import { IExecuteReadBuilder, IHavePrimaryKeyValue, IHaveSqlReadOperation } from "../interface/sqlCommandOperation.interface";
import { EntityType } from "../utils/entityTypes";
import { SqlColumnSettings } from "./sqlEntitySettings";
import { SqlReadOperation } from "./sqlOperations.enum";

export class SqlCommandReadBuilder<TEntity extends BaseModel>
  implements IHaveSqlReadOperation, IExecuteReadBuilder, IHavePrimaryKeyValue
{
  private operation!: SqlReadOperation;
  private readonly entitiesService: IEntitiesService;
  private entityType: EntityType;
  private idValue?: string; // se guarda el Id si la operación es GetById
  private fieldName?: string; // se guarda el nombre del campo para operaciones futuras
  private fieldValue?: any; // se guarda el valor del campo para operaciones futuras
  private limit?: number;
  private offset?: number;

  constructor(entitiesService: IEntitiesService, entityType: EntityType) {
    this.entitiesService = entitiesService;
    this.entityType = entityType;
  }

  WithOperation(operation: SqlReadOperation): IHavePrimaryKeyValue {
    this.operation = operation;
    return this;
  }

  WithId(id: string): IExecuteReadBuilder {
    this.idValue = id;
    return this;
  }

  WithField(fieldName: string, value: any): IExecuteReadBuilder {
    this.fieldName = fieldName;
    this.fieldValue = value;
    return this;
  }

  WithPagination(limit: number, offset: number): IExecuteReadBuilder {
    this.limit = limit;
    this.offset = offset;
    return this;
  }

  BuildReader(): SqlCommand {
    switch (this.operation) {
      case SqlReadOperation.Select:
        return this.getSelectAllCommand();
      case SqlReadOperation.SelectById:
        return this.getSelectByIdCommand();
      case SqlReadOperation.SelectByField:
        return this.getSelectByFieldCommand();
      default:
        throw new Error("Invalid read operation.");
    }
  }

  private getSelectAllCommand(): SqlCommand {
    const entitySettings = this.entitiesService.GetSettings(this.entityType);
    const sqlQuery = this.getSelectAllQuery(
      entitySettings.tableName,
      entitySettings.columns
    );
    return { query: sqlQuery, parameters: [] };
  }

  private getSelectAllQuery(
    entityName: string,
    columns: SqlColumnSettings[]
  ): string {
    const columnNames = columns.map((c) => c.name).join(", ");
    const limit = this.limit ?? 100;
    const offset = this.offset ?? 0;
    return `SELECT ${columnNames} FROM ${entityName} LIMIT ${limit} OFFSET ${offset};`; //limit es para solo traer 100 registros
  }

  private getSelectByIdCommand(): SqlCommand {
    const entitySettings = this.entitiesService.GetSettings(this.entityType);
    const sqlQuery = this.getSelectByIdQuery(
      entitySettings.tableName,
      entitySettings.columns
    );
    const parameters = this.getPrimaryKeyParameter(entitySettings.columns);
    return { query: sqlQuery, parameters };
  }

  private getSelectByIdQuery(
    entityName: string,
    columns: SqlColumnSettings[]
  ): string {
    const primaryKey = columns.find((c) => c.isPrimaryKey);
    if (!primaryKey) throw new Error("No primary key found for SELECT BY ID.");

    const columnNames = columns.map((c) => c.name).join(", ");
    return `SELECT ${columnNames} FROM ${entityName} WHERE ${primaryKey.name} = ${primaryKey.parameterName};`;
  }

  private getPrimaryKeyParameter(
    columns: SqlColumnSettings[]
  ): { name: string; value: any }[] {
    const primaryKey = columns.find((c) => c.isPrimaryKey);
    if (!primaryKey) throw new Error("No primary key column found.");
    if (!this.idValue) throw new Error("No id value provided.");

    return [
      {
        name: primaryKey.parameterName,
        value: this.idValue,
      },
    ];
  }

  private getFieldParameter(
    columns: SqlColumnSettings[],
    fieldName: string,
    fieldValue: any
  ): { name: string; value: any }[] {
    const column = columns.find(
      (c) => c.domainName.toLowerCase() === fieldName.toLowerCase()
    );
    if (!column) throw new Error(`Column "${fieldName}" not found.`);

    return [
      {
        name: column.parameterName,
        value: fieldValue,
      },
    ];
  }

  private getSelectByFieldCommand(): SqlCommand {
    const entitySettings = this.entitiesService.GetSettings(this.entityType);

    if (!this.fieldName || this.fieldValue === undefined) {
      throw new Error(
        "Field name and value must be provided for SelectByField."
      );
    }

    const sqlQuery = this.getSelectByFieldQuery(
      entitySettings.tableName,
      entitySettings.columns,
      this.fieldName
    );

    const parameters = this.getFieldParameter(
      entitySettings.columns,
      this.fieldName,
      this.fieldValue
    );

    return { query: sqlQuery, parameters };
  }

  private getSelectByFieldQuery(
    entityName: string,
    columns: SqlColumnSettings[],
    fieldName: string
  ): string {
    const column = columns.find(
      (c) => c.domainName.toLowerCase() === fieldName.toLowerCase()
    );
    if (!column) throw new Error(`Column "${fieldName}" not found.`);

    const columnNames = columns.map((c) => c.name).join(", ");
    return `SELECT ${columnNames} FROM ${entityName} WHERE ${column.name} = ${column.parameterName};`;
  }
}