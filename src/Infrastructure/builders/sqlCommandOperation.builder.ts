import BaseModel from "../../Domain/entities/base.model";
import { EntityType } from "../utils/entityTypes";
import { IHaveSqlReadOperation, IHaveSqlWriteOperation, ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { IEntitiesService } from "../interface/entitiesService.interface";
import { inject, injectable } from "tsyringe";
import { SqlCommandWriteBuilder } from "./sqlCommandWrite.builder";
import { SqlCommandReadBuilder } from "./sqlCommandRead.builder";
@injectable()
export class SqlCommandOperationBuilder implements ISqlCommandOperationBuilder {
  private readonly _entitiesService: IEntitiesService;

  constructor(@inject("IEntityService") entitiesService: IEntitiesService) {
    this._entitiesService = entitiesService;
  }

  From<TEntity extends BaseModel>(
    entityType: EntityType,
    entity: TEntity
  ): IHaveSqlWriteOperation {
    return new SqlCommandWriteBuilder<TEntity>(
      this._entitiesService,
      entityType,
      entity
    );
  }

  Initialize<TEntity extends BaseModel>(
    entityType: EntityType
  ): IHaveSqlReadOperation {
    return new SqlCommandReadBuilder<TEntity>(
      this._entitiesService,
      entityType
    );
  }
}