export interface PatientAttachmentDto {
  patientId: string;
  fileType: string;
  fileUrl: string;
  fileName: string;
  description: string;
  uploadedBy: string;
  createdAt: string;
}
