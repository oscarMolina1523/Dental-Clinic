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
      ...DiseaseSchemas,
      ...PatientSchemas,
      ...UserSchemas,
      ...RoleSchemas,}
  }
};