import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IRoleService } from './../../Application/interfaces/role.service.interface';

@injectable()
export class RoleController {

  private readonly _roleService: IRoleService;

  constructor(@inject("IRoleService") service: IRoleService) {
    this._roleService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._roleService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._roleService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._roleService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._roleService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._roleService.delete(id);
    res.status(204).send();
  }
}
