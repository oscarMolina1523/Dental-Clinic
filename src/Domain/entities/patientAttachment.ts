import BaseModel from "./base.model";

export default class PatientAttachment extends BaseModel {
  patientId: string;
  fileType: string;
  fileUrl: string;
  fileName: string;
  description: string;
  uploadedBy: string;
  createdAt: string;

  constructor({
    id,
    patientId,
    fileType,
    fileUrl,
    fileName,
    description,
    uploadedBy,
    createdAt,
  }: {
    id: string;
    patientId: string;
    fileType: string;
    fileUrl: string;
    fileName: string;
    description: string;
    uploadedBy: string;
    createdAt: string;
  }) {
    super(id);
    this.patientId = patientId;
    this.fileType = fileType;
    this.fileUrl = fileUrl;
    this.fileName = fileName;
    this.description = description;
    this.uploadedBy = uploadedBy;
    this.createdAt = createdAt;
  }
}
