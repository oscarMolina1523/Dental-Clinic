
import User from "../../Domain/entities/user";
import { generateId } from "../../shared/utils/generateId";
import { UserRequest } from "../dtos/request/user.request";
import { UserResponse } from "../dtos/response/user.response";

export class UserMapper {
  static toEntity(dto: UserRequest, currentUser: string): User {
    const now = new Date();

    return new User({
      id: generateId(),
      image:"https://sites.utexas.edu/weiwli/wp-content/uploads/sites/5648/2026/04/To-be-updated.jpg",
      phoneNumber:"",
      fullName: dto.username ?? dto.email.split("@")[0],
      email: dto.email,
      password: dto.password,
      roleId: dto.roleId ?? "VIEWER",
      active: dto.active,
      createdAt: now,
      updatedAt: now,
    });
  }

  static toPublic(user: User): UserResponse {
    return {
      id: user.id,
      username: user.fullName,
      email: user.email,
      roleId: user.roleId,
      active: user.getActive(),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}