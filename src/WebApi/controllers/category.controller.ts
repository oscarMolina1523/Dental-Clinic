import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ICategoryService } from './../../Application/interfaces/category.service.interface';

@injectable()
export class CategoryController {

  private readonly _categoryService: ICategoryService;

  constructor(@inject("ICategoryService") service: ICategoryService) {
    this._categoryService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._categoryService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._categoryService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._categoryService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._categoryService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._categoryService.delete(id);
    res.status(204).send();
  }
}
