import { InventorySchemas } from "./schemas/inventory.schema";
import { InventoryPaths } from "./paths/inventory.path";
import { InventoryLoteSchemas } from "./schemas/inventoryLote.schema";
import { InventoryLotePaths } from "./paths/inventoryLote.path";
import { MeasurementUnitSchemas } from "./schemas/measurementUnit.schema";
import { MeasurementUnitPaths } from "./paths/measurementUnit.path";
import { CategorySchemas } from "./schemas/category.schema";
import { CategoryPaths } from "./paths/category.path";
import { ProductSchemas } from "./schemas/product.schema";
import { ProductPaths } from "./paths/product.path";
import { SupplierSchemas } from "./schemas/supplier.schema";
import { SupplierPaths } from "./paths/supplier.path";
import { PaymentSchemas } from "./schemas/payment.schema";
import { PaymentPaths } from "./paths/payment.path";
import { InvoiceSchemas } from "./schemas/invoice.schema";
import { InvoicePaths } from "./paths/invoice.path";
import { PatientAttachmentSchemas } from "./schemas/patientAttachment.schema";
import { PatientAttachmentPaths } from "./paths/patientAttachment.path";
import { MedicalPrescriptionDetailSchemas } from "./schemas/medicalPrescriptionDetail.schema";
import { MedicalPrescriptionDetailPaths } from "./paths/medicalPrescriptionDetail.path";
import { MedicalPrescriptionSchemas } from "./schemas/medicalPrescription.schema";
import { MedicalPrescriptionPaths } from "./paths/medicalPrescription.path";
import { ClinicalProgresSchemas } from "./schemas/clinicalProgres.schema";
import { ClinicalProgresPaths } from "./paths/clinicalProgres.path";
import { TreatmentPlanDetailSchemas } from "./schemas/treatmentPlanDetail.schema";
import { TreatmentPlanDetailPaths } from "./paths/treatmentPlanDetail.path";
import { TreatmentPlanSchemas } from "./schemas/treatmentPlan.schema";
import { TreatmentPlanPaths } from "./paths/treatmentPlan.path";
import { TreatmentCatalogSchemas } from "./schemas/treatmentCatalog.schema";
import { TreatmentCatalogPaths } from "./paths/treatmentCatalog.path";
import { DateSchemas } from "./schemas/date.schema";
import { DatePaths } from "./paths/date.path";
import { DentalChartDetailSchemas } from "./schemas/dentalChartDetail.schema";
import { DentalChartDetailPaths } from "./paths/dentalChartDetail.path";
import { DentalChartSchemas } from "./schemas/dentalChart.schema";
import { DentalChartPaths } from "./paths/dentalChart.path";
import { PatientDiseaseSchemas } from "./schemas/patientDisease.schema";
import { PatientDiseasePaths } from "./paths/patientDisease.path";
import { DiseaseSchemas } from "./schemas/disease.schema";
import { DiseasePaths } from "./paths/disease.path";
import { PatientSchemas } from "./schemas/patient.schema";
import { PatientPaths } from "./paths/patient.path";
import { UserSchemas } from "./schemas/user.schema";
import { UserPaths } from "./paths/user.path";
import { RoleSchemas } from "./schemas/role.schema";
import { RolePaths } from "./paths/role.path";
export const OpenApiSpecification = {
  openapi: "3.0.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "Auto-generated API documentation"
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local server"
    }
  ],
  paths: {
    ...InventoryPaths,
    ...InventoryLotePaths,
    ...MeasurementUnitPaths,
    ...CategoryPaths,
    ...ProductPaths,
    ...SupplierPaths,
    ...PaymentPaths,
    ...InvoicePaths,
    ...PatientAttachmentPaths,
    ...MedicalPrescriptionDetailPaths,
    ...MedicalPrescriptionPaths,
    ...ClinicalProgresPaths,
    ...TreatmentPlanDetailPaths,
    ...TreatmentPlanPaths,
    ...TreatmentCatalogPaths,
    ...DatePaths,
    ...DentalChartDetailPaths,
    ...DentalChartPaths,
    ...PatientDiseasePaths,
    ...DiseasePaths,
    ...PatientPaths,
    ...UserPaths,
    ...RolePaths,},
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    },
    schemas: {
      ...InventorySchemas,
      ...InventoryLoteSchemas,
      ...MeasurementUnitSchemas,
      ...CategorySchemas,
      ...ProductSchemas,
      ...SupplierSchemas,
      ...PaymentSchemas,
      ...InvoiceSchemas,
      ...PatientAttachmentSchemas,
      ...MedicalPrescriptionDetailSchemas,
      ...MedicalPrescriptionSchemas,
      ...ClinicalProgresSchemas,
      ...TreatmentPlanDetailSchemas,
      ...TreatmentPlanSchemas,
      ...TreatmentCatalogSchemas,
      ...DateSchemas,
      ...DentalChartDetailSchemas,
      ...DentalChartSchemas,
      ...PatientDiseaseSchemas,
      ...DiseaseSchemas,
      ...PatientSchemas,
      ...UserSchemas,
      ...RoleSchemas,}
  }
};