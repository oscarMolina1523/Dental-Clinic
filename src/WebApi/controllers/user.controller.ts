import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IUserService } from './../../Application/interfaces/user.service.interface';

@injectable()
export class UserController {

  private readonly _userService: IUserService;

  constructor(@inject("IUserService") service: IUserService) {
    this._userService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._userService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._userService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._userService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._userService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._userService.delete(id);
    res.status(204).send();
  }
}
