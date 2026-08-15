import { injectable } from "tsyringe";
import bcrypt from "bcryptjs";
import { IPasswordService } from "../../Domain/repositories/passwordService.interface";

@injectable()
export class PasswordService implements IPasswordService {

  private readonly saltRounds = 10;

  async hash(password: string): Promise<string> {
    if (!password) {
      throw new Error("La contraseña es obligatoria");
    }

    return await bcrypt.hash(
      password,
      this.saltRounds
    );
  }

  async compare(
    password: string,
    passwordHash: string
  ): Promise<boolean> {

    if (!password || !passwordHash) {
      return false;
    }

    return await bcrypt.compare(
      password,
      passwordHash
    );
  }
}