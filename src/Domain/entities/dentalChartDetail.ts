import { DentalChartDetailsStatus } from "../types/dentalChartDetailsStatus.enum";
import BaseModel from "./base.model";

export default class DentalChartDetail extends BaseModel {
  dentalChartId: string;
  toothNumber: number;
  face: string;
  toothStatus: DentalChartDetailsStatus;
  notes: string;

  constructor({
    id,
    dentalChartId,
    toothNumber,
    face,
    toothStatus,
    notes,
  }: {
    id: string;
    dentalChartId: string;
    toothNumber: number;
    face: string;
    toothStatus: DentalChartDetailsStatus;
    notes: string;
  }) {
    super(id);
    // ============================================================
    // DENTAL CHART
    // ============================================================

    if (
      !dentalChartId ||
      dentalChartId.trim().length === 0
    ) {
      throw new Error(
        "La ficha dental es obligatoria"
      );
    }

    // ============================================================
    // TOOTH NUMBER
    // ============================================================

    if (
      !Number.isInteger(toothNumber)
    ) {
      throw new Error(
        "El número de pieza dental debe ser un número entero"
      );
    }

    if (
      toothNumber < 11 ||
      toothNumber > 48
    ) {
      throw new Error(
        "El número de pieza dental no es válido"
      );
    }

    // ============================================================
    // FACE
    // ============================================================

    if (
      !face ||
      face.trim().length === 0
    ) {
      throw new Error(
        "La superficie dental es obligatoria"
      );
    }

    // ============================================================
    // TOOTH STATUS
    // ============================================================

    if (
      !toothStatus
    ) {
      throw new Error(
        "El estado de la pieza dental es obligatorio"
      );
    }

    if (
      !Object.values(DentalChartDetailsStatus).includes(toothStatus)
    ) {
      throw new Error(
        "El estado de la pieza dental no es válido"
      );
    }


    // ============================================================
    // NOTES
    // ============================================================

    if (
      notes !== undefined &&
      notes !== null &&
      typeof notes !== "string"
    ) {
      throw new Error(
        "Las notas deben ser un texto válido"
      );
    }

    this.dentalChartId = dentalChartId;
    this.toothNumber = toothNumber;
    this.face = face;
    this.toothStatus = toothStatus;
    this.notes = notes?.trim() ?? "";
  }

  // ============================================================
  // INFORMATION
  // ============================================================

  get isHealthy(): boolean {

    return (
      this.toothStatus ===
      DentalChartDetailsStatus.HEALTHY
    );
  }

  get isMissing(): boolean {

    return (
      this.toothStatus ===
      DentalChartDetailsStatus.MISSING
    );
  }

  get hasCaries(): boolean {

    return (
      this.toothStatus ===
      DentalChartDetailsStatus.CARIES
    );
  }

  get hasTreatment(): boolean {

    return [
      DentalChartDetailsStatus.FILLED,
      DentalChartDetailsStatus.ROOT_CANAL_TREATED,
      DentalChartDetailsStatus.CROWN,
      DentalChartDetailsStatus.BRIDGE,
      DentalChartDetailsStatus.PROSTHETIC,
      DentalChartDetailsStatus.IMPLANT
    ].includes(this.toothStatus);
  }

  // ============================================================
  // BUSINESS RULES
  // ============================================================

  update({
    toothNumber,
    face,
    toothStatus,
    notes,
  }: {
    toothNumber: number;
    face: string;
    toothStatus: DentalChartDetailsStatus;
    notes: string;
  }): void {

    if (
      !Number.isInteger(toothNumber)
    ) {
      throw new Error(
        "El número de pieza dental debe ser un número entero"
      );
    }

    if (
      toothNumber < 11 ||
      toothNumber > 48
    ) {
      throw new Error(
        "El número de pieza dental no es válido"
      );
    }

    if (
      !face ||
      face.trim().length === 0
    ) {
      throw new Error(
        "La superficie dental es obligatoria"
      );
    }

    if (
      !toothStatus
    ) {
      throw new Error(
        "El estado de la pieza dental es obligatorio"
      );
    }

    if (
      !Object.values(DentalChartDetailsStatus).includes(toothStatus)
    ) {
      throw new Error(
        "El estado de la pieza dental no es válido"
      );
    }

    if (
      notes !== undefined &&
      notes !== null &&
      typeof notes !== "string"
    ) {
      throw new Error(
        "Las notas deben ser un texto válido"
      );
    }

    this.toothNumber =
      toothNumber;

    this.face =
      face.trim();

    this.toothStatus =
      toothStatus;

    this.notes =
      notes?.trim() ?? "";
  }

  // ============================================================
  // STATUS
  // ============================================================

  updateStatus(
    toothStatus: DentalChartDetailsStatus
  ): void {

    if (
      !toothStatus
    ) {
      throw new Error(
        "El estado de la pieza dental es obligatorio"
      );
    }

    if (
      !Object.values(DentalChartDetailsStatus).includes(toothStatus)
    ) {
      throw new Error(
        "El estado de la pieza dental no es válido"
      );
    }

    this.toothStatus =
      toothStatus;
  }

  // ============================================================
  // NOTES
  // ============================================================

  updateNotes(
    notes: string
  ): void {

    if (
      notes !== undefined &&
      notes !== null &&
      typeof notes !== "string"
    ) {
      throw new Error(
        "Las notas deben ser un texto válido"
      );
    }

    this.notes =
      notes?.trim() ?? "";
  }
}
