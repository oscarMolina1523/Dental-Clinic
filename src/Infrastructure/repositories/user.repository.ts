/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../../Domain/repositories/userRepository.interface";
import User from "../../Domain/entities/user";
import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class UserRepository implements IUserRepository {

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
  async findAll(page: number = 1, pageSize: number = 100): Promise<User[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.User)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
      new User ({
        id: row["ID"],
        roleId: row["ROLEID"],
        fullName: row["FULLNAME"],
        image: row["IMAGE"],
        email: row["EMAIL"],
        password: row["PASSWORD"],
        phoneNumber: row["PHONENUMBER"],
        membershipNumber: row["MEMBERSHIPNUMBER"],
        active: row["ACTIVE"],
        createdAt: row["CREATEDAT"],
        updatedAt: row["UPDATEDAT"],
      })
    );
  }

  async findById(id: string): Promise<User | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.User)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new User({
      id: row["ID"],
      roleId: row["ROLEID"],
      fullName: row["FULLNAME"],
      image: row["IMAGE"],
      email: row["EMAIL"],
      password: row["PASSWORD"],
      phoneNumber: row["PHONENUMBER"],
      membershipNumber: row["MEMBERSHIPNUMBER"],
      active: row["ACTIVE"],
      createdAt: row["CREATEDAT"],
      updatedAt: row["UPDATEDAT"],
    });
  }

  async create(entity: User): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.User, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: User): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.User, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: User): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.User, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
