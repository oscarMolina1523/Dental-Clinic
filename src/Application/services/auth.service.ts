import { inject, injectable } from "tsyringe";
import { UserResponse } from "../dtos/response/user.response";
import { AuthResult } from "../utils/authResult.type";
import { ServiceResult } from "../utils/serviceResult.type";
import bcrypt from "bcryptjs";
import { UserRequest } from "../dtos/request/user.request";
import { IAuthService } from "../interfaces/auth.service";
import { IUserService } from "../interfaces/user.service.interface";
import { UserMapper } from "../mappers/user.mapper";
import { ITokenRepository } from "../../Domain/repositories/tokenRepository.interface";


@injectable()
export default class AuthService implements IAuthService {
  private readonly _userService: IUserService;
  private readonly _tokenRepository: ITokenRepository;

  constructor(
    @inject("IUserService") userService: IUserService,
    @inject("ITokenRepository") tokenRepository: ITokenRepository,
  ) {
    this._userService = userService;
    this._tokenRepository = tokenRepository;
  }

  async login(
    email: string,
    password: string
  ): Promise<AuthResult<UserResponse>> {
    const user = await this._userService.findByEmail(email);
    if (!user) {
      return { message: "Usuario no encontrado" };
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return { message: "Credenciales no validas" };
    }

    const data = UserMapper.toPublic(user);

    const token = this._tokenRepository.generateAccesToken(data);

    return { message: "Login exitoso", data: data, token };
  }

  async register(user: UserRequest): Promise<ServiceResult<UserResponse>> {
    const existing = await this._userService.findByEmail(user.email);
    if (existing) {
      return { success: false, message: "El correo ya está registrado" };
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const created = await this._userService.registerUser({
      ...user,
      password: hashedPassword,
    });

    if (!created.success || !created.data) {
      return { success: false, message: "Error al registrar usuario" };
    }

    return {
      success: true,
      message: "Usuario registrado exitosamente",
      data: created.data,
    };
  }

  logout(): string {
    const result = "Se ha cerrado sesión correctamente";
    return result;
  }
}