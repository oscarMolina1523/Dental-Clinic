import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ITreatmentCatalogService } from './../../Application/interfaces/treatmentCatalog.service.interface';

@injectable()
export class TreatmentCatalogController {

  private readonly _treatmentCatalogService: ITreatmentCatalogService;

  constructor(@inject("ITreatmentCatalogService") service: ITreatmentCatalogService) {
    this._treatmentCatalogService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._treatmentCatalogService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    try{
      const result = await this._treatmentCatalogService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {

      return res.status(500).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear el servicio."
      });
    }
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._treatmentCatalogService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._treatmentCatalogService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._treatmentCatalogService.delete(id);
    res.status(204).send();
  }

  // PRICE
  changePrice = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const price = Number(req.body.price);

    const result =
      await this._treatmentCatalogService.changePrice(
        id,
        price
      );

    res.json(result);
  };

  // DURATION
  changeDuration = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const minutes = Number(req.body.minutes);

    const result =
      await this._treatmentCatalogService.changeDuration(
        id,
        minutes
      );

    res.json(result);
  };

  // ACTIVE / INACTIVE
  activate = async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const result =
      await this._treatmentCatalogService.activate(id);

    res.json(result);
  };

  deactivate = async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const result =
      await this._treatmentCatalogService.deactivate(id);

    res.json(result);
  };
}
