import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPatientService } from './../../Application/interfaces/patient.service.interface';

@injectable()
export class PatientController {

  private readonly _patientService: IPatientService;

  constructor(@inject("IPatientService") service: IPatientService) {
    this._patientService = service;
  }

  getAll = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._patientService.findAll(page, pageSize);
    res.json(result);
  }

  create = async (req: Request, res: Response) => {
    const result = await this._patientService.create(req.body);
    res.status(201).json(result);
  }

  getById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._patientService.findById(id);
    res.json(result);
  }

  update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._patientService.update(id, req.body);
    res.json(result);
  }

  delete = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await this._patientService.delete(id);
    res.status(204).send();
  }

  changePhoneNumber = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const { phoneNumber } = req.body;

    const result =
      await this._patientService.changePhoneNumber(
        id,
        phoneNumber
      );

    if (!result) {
      return res.status(404).json({
        message: "Paciente no encontrado"
      });
    }

    res.json(result);
  };

  changeEmail = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const { email } = req.body;

    const result =
      await this._patientService.changeEmail(
        id,
        email
      );

    if (!result) {
      return res.status(404).json({
        message: "Paciente no encontrado"
      });
    }

    res.json(result);
  };

  changeAddress = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const { address } = req.body;

    const result =
      await this._patientService.changeAddress(
        id,
        address
      );

    if (!result) {
      return res.status(404).json({
        message: "Paciente no encontrado"
      });
    }

    res.json(result);
  };

  updateEmergencyContact = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const {
      name,
      phone
    } = req.body;

    const result =
      await this._patientService.updateEmergencyContact(
        id,
        name,
        phone
      );

    if (!result) {
      return res.status(404).json({
        message: "Paciente no encontrado"
      });
    }

    res.json(result);
  };

  changeImage = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const { image } = req.body;

    const result =
      await this._patientService.changeImage(
        id,
        image
      );

    if (!result) {
      return res.status(404).json({
        message: "Paciente no encontrado"
      });
    }

    res.json(result);
  };

  activate = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const result =
      await this._patientService.activate(id);

    if (!result) {
      return res.status(404).json({
        message: "Paciente no encontrado"
      });
    }

    res.json({
      message: "Paciente activado correctamente",
      data: result
    });
  };

  deactivate = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const result =
      await this._patientService.deactivate(id);

    if (!result) {
      return res.status(404).json({
        message: "Paciente no encontrado"
      });
    }

    res.json({
      message: "Paciente desactivado correctamente",
      data: result
    });
  };
}
