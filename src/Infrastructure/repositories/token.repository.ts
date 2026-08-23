import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { injectable } from "tsyringe";
import { UserResponse } from "../../Application/dtos/response/user.response";
import { ITokenRepository } from "../../Domain/repositories/tokenRepository.interface";
dotenv.config();

@injectable()
export default class TokenRepository implements ITokenRepository {
  generateAccesToken(user: UserResponse): string {
    const secret = process.env.SECRET;
    if (!secret)
      throw new Error("JWT SECRET is not defined in environment variables");

    return jwt.sign(user, secret, { expiresIn: "1d" });
  }

  decodeToken(token: string): UserResponse {
    const secret = process.env.SECRET;
    if (!secret) throw new Error("JWT SECRET is not defined");

    if (!token) throw new Error("No token provided");

    // Manejar token con o sin 'Bearer ' al inicio
    const cleanedToken = token.startsWith("Bearer ")
      ? token.slice(7).trim()
      : token.trim();

    const decoded = jwt.verify(cleanedToken, secret) as UserResponse;
    return decoded;
  }
}