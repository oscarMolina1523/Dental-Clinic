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