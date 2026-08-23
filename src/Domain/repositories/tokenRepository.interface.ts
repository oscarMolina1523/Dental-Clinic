import { UserResponse } from "../../Application/dtos/response/user.response";

export interface ITokenRepository {
  generateAccesToken(user: UserResponse): string;
  decodeToken(token: string): UserResponse;
}