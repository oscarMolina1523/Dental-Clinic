import "reflect-metadata";
//AUTO-IMPORT-DOTENV
import express from "express";
//AUTO-IMPORT-CONTAINER
import "./WebApi/container/dependencyContainer";
//AUTO-IMPORT-ROUTES
import dateRoutes from "./WebApi/routes/date.routes";
import dentalChartDetailRoutes from "./WebApi/routes/dentalChartDetail.routes";
import dentalChartRoutes from "./WebApi/routes/dentalChart.routes";
import patientDiseaseRoutes from "./WebApi/routes/patientDisease.routes";
import diseaseRoutes from "./WebApi/routes/disease.routes";
import patientRoutes from "./WebApi/routes/patient.routes";
import userRoutes from "./WebApi/routes/user.routes";
import roleRoutes from "./WebApi/routes/role.routes";
//AUTO-IMPORT-OPENAPI
import { apiReference } from "@scalar/express-api-reference";
import { OpenApiSpecification } from "./WebApi/docs/openapi";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//AUTO-REGISTER-OPENAPI
app.get("/api-docs", async (req, res, next) => {
    try {
      const scalar = await import("@scalar/express-api-reference");

      const middleware = scalar.apiReference({
        content: OpenApiSpecification,
      }) as express.RequestHandler;

      return middleware(req, res, next);
    } catch (error) {
      next(error);
    }
  });
//AUTO-REGISTER-ROUTES
app.use("/date", dateRoutes);
app.use("/dentalChartDetail", dentalChartDetailRoutes);
app.use("/dentalChart", dentalChartRoutes);
app.use("/patientDisease", patientDiseaseRoutes);
app.use("/disease", diseaseRoutes);
app.use("/patient", patientRoutes);
app.use("/user", userRoutes);
app.use("/role", roleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});