import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IUserService } from './../../Application/interfaces/user.service.interface';

@injectable()
export class UserController {

  private readonly _userService: IUserService;

  constructor(@inject("IUserService") service: IUserService) {
    this._userService = service;
  }

  getAll = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._userService.findAll(page, pageSize);
    res.json(result);
  }

  create = async (req: Request, res: Response) => {
    const result = await this._userService.create(req.body);
    res.status(201).json(result);
  }

  getById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._userService.findById(id);
    res.json(result);
  }

  update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._userService.update(id, req.body);

    if (!result) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    res.json(result);
  }

  delete = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await this._userService.delete(id);
    res.status(204).send();
  }
  changeEmail = async (req: Request, res: Response) => {

    const id = req.params.id as string;

    const { email } = req.body;

    const result = await this._userService.changeEmail(
      id,
      email
    );

    if (!result) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    res.json(result);
  };

  changePhoneNumber = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const { phoneNumber } = req.body;

    const result = await this._userService.changePhoneNumber(
      id,
      phoneNumber
    );

    if (!result) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    res.json(result);
  };

  changePassword = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const { currentPassword, newPassword } = req.body;

    const result = await this._userService.changePassword(
      id,
      currentPassword, 
      newPassword
    );

    if (!result) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    res.json({
      message: "Contraseña actualizada correctamente"
    });
  };

  changeRole = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const { roleId } = req.body;

    const result = await this._userService.changeRole(
      id,
      roleId
    );

    if (!result) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    res.json(result);
  };

  activate = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const result = await this._userService.activate(id);

    if (!result) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    res.json(result);
  };

  deactivate = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const result = await this._userService.deactivate(id);

    if (!result) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    res.json(result);
  };
}
