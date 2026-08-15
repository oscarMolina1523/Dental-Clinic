import { SqlCommand } from "../interface/sqlCommand.interface";
import { injectable } from "tsyringe";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
import { createClient } from "@libsql/client";
import "dotenv/config";

@injectable()
export class SingletonSqlConnection implements ISingletonSqlConnection {
  private static instance: SingletonSqlConnection;
  private db!: ReturnType<typeof createClient>;

  public constructor() {}

  public static getInstance(): SingletonSqlConnection {
    if (!SingletonSqlConnection.instance) {
      SingletonSqlConnection.instance = new SingletonSqlConnection();
    }
    return SingletonSqlConnection.instance;
  }

  async openConnection(): Promise<void> {
    if (!this.db) {
      this.db = createClient({
        url: process.env.TURSO_DB_URL || "no found",
        authToken: process.env.TURSO_DB_AUTH_TOKEN || "no found",
      });
      console.log("Conexión SQLite abierta");
    }
  }

  async closeConnection(): Promise<void> {
    if (this.db) {
      // No hay un método close en Turso client, puedes dejarlo en null si quieres "desconectar"
      this.db = null as any;
      console.log("Conexión Turso cerrada");
    }
  }

  async executeNonQuery(command: SqlCommand): Promise<void> {
    await this.openConnection();
    const params = this.mapParameters(command.parameters);
    await this.db.execute(command.query, params);
  }

  async executeQuery(command: SqlCommand): Promise<any[]> {
    await this.openConnection();
    const params = this.mapParameters(command.parameters);
    const result = await this.db.execute(command.query, params);
    return result.rows;
  }

  async executeScalar(command: SqlCommand): Promise<any | null> {
    await this.openConnection();
    const params = this.mapParameters(command.parameters);
    const result = await this.db.execute(command.query, params);
    return result.rows.length > 0 ? result.rows[0] : null;
  }

  private mapParameters(parameters: { name: string; value: any }[]) {
    const mapped: Record<string, string | number | boolean | null> = {};
    for (const p of parameters) {
      let val = p.value;
      if (val === undefined || val === null) val = null;
      else if (val instanceof Date) val = val.toISOString();
      else if (typeof val === "boolean")
        val = val ? 1 : 0; // Turso no admite true/false directamente
      else if (typeof val === "object")
        val = JSON.stringify(val); // opcional, para objetos
      else val = val.toString(); // aseguramos string para ids
      mapped[p.name] = val;
    }
    return mapped;
  }
}