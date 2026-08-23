import "reflect-metadata";
//AUTO-IMPORT-DOTENV
import "dotenv/config";
import express from "express";
// import { initializeDatabase } from "./Infrastructure/database/initializeDatabase";
//AUTO-IMPORT-CONTAINER
import "./WebApi/container/dependencyContainer";
//AUTO-IMPORT-ROUTES
import appointmentRoutes from "./WebApi/routes/appointment.routes";
import paymentNotificationRoutes from "./WebApi/routes/paymentNotification.routes";
import installmentRoutes from "./WebApi/routes/installment.routes";
import paymentPlanRoutes from "./WebApi/routes/paymentPlan.routes";
import inventoryMovementRoutes from "./WebApi/routes/inventoryMovement.routes";
import inventoryRoutes from "./WebApi/routes/inventory.routes";
import inventoryLoteRoutes from "./WebApi/routes/inventoryLote.routes";
import measurementUnitRoutes from "./WebApi/routes/measurementUnit.routes";
import categoryRoutes from "./WebApi/routes/category.routes";
import productRoutes from "./WebApi/routes/product.routes";
import supplierRoutes from "./WebApi/routes/supplier.routes";
import paymentRoutes from "./WebApi/routes/payment.routes";
import invoiceRoutes from "./WebApi/routes/invoice.routes";
import patientAttachmentRoutes from "./WebApi/routes/patientAttachment.routes";
import medicalPrescriptionDetailRoutes from "./WebApi/routes/medicalPrescriptionDetail.routes";
import medicalPrescriptionRoutes from "./WebApi/routes/medicalPrescription.routes";
import clinicalProgresRoutes from "./WebApi/routes/clinicalProgres.routes";
import treatmentPlanDetailRoutes from "./WebApi/routes/treatmentPlanDetail.routes";
import treatmentPlanRoutes from "./WebApi/routes/treatmentPlan.routes";
import treatmentCatalogRoutes from "./WebApi/routes/treatmentCatalog.routes";
import dentalChartDetailRoutes from "./WebApi/routes/dentalChartDetail.routes";
import dentalChartRoutes from "./WebApi/routes/dentalChart.routes";
import patientDiseaseRoutes from "./WebApi/routes/patientDisease.routes";
import diseaseRoutes from "./WebApi/routes/disease.routes";
import patientRoutes from "./WebApi/routes/patient.routes";
import userRoutes from "./WebApi/routes/user.routes";
import roleRoutes from "./WebApi/routes/role.routes";
//AUTO-IMPORT-OPENAPI
import { OpenApiSpecification } from "./WebApi/docs/openapi";
import invoicePaymentRoutes from "./WebApi/routes/invoicePayment.routes";
import paymentPlanOrchestratorRoutes from "./WebApi/routes/paymentPlanOrchestrator.routes";
import inventoryOrchestratorRoutes from "./WebApi/routes/inventoryOrchestrator.routes";
import dentalChartOrchestratorRoutes from "./WebApi/routes/dentalChartOrchestrator.routes";
import treatmentPlanOrchestratorRoutes from "./WebApi/routes/treatmentPlanOrchestrator.routes";
import authRoutes from "./WebApi/routes/auth.routes";
import { validateToken } from "./WebApi/middlewares/auth.middleware";

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
app.use("/auth", authRoutes);
app.use("/appointment",  validateToken,appointmentRoutes);
app.use("/paymentNotification", validateToken, paymentNotificationRoutes);
app.use("/installment",  validateToken, installmentRoutes);
app.use("/paymentPlan", validateToken, paymentPlanRoutes);
app.use("/paymentPlanOrchestrator", validateToken, paymentPlanOrchestratorRoutes);
app.use("/inventoryMovement", validateToken, inventoryMovementRoutes);
app.use("/inventory", validateToken, inventoryRoutes);
app.use("/inventoryLote", validateToken, inventoryLoteRoutes);
app.use("/inventoryOrchestrator", validateToken, inventoryOrchestratorRoutes);
app.use("/measurementUnit", validateToken, measurementUnitRoutes);
app.use("/category", validateToken, categoryRoutes);
app.use("/product", validateToken, productRoutes);
app.use("/supplier", validateToken, supplierRoutes);
app.use("/payment", validateToken, paymentRoutes);
app.use("/invoice", validateToken, invoiceRoutes);
app.use("/invoice-payments", validateToken, invoicePaymentRoutes);
app.use("/patientAttachment", validateToken, patientAttachmentRoutes);
app.use("/medicalPrescriptionDetail", validateToken, medicalPrescriptionDetailRoutes);
app.use("/medicalPrescription", validateToken, medicalPrescriptionRoutes);
app.use("/clinicalProgres", validateToken, clinicalProgresRoutes);
app.use("/treatmentPlanDetail", validateToken, treatmentPlanDetailRoutes);
app.use("/treatmentPlan", validateToken, treatmentPlanRoutes);
app.use("/treatmentPlanOrchestrator", validateToken, treatmentPlanOrchestratorRoutes);
app.use("/treatmentCatalog", validateToken, treatmentCatalogRoutes);
app.use("/dentalChartDetail", validateToken, dentalChartDetailRoutes);
app.use("/dentalChart", validateToken, dentalChartRoutes);
app.use("/dentalChartOrchestrator", validateToken, dentalChartOrchestratorRoutes);
app.use("/patientDisease", validateToken, patientDiseaseRoutes);
app.use("/disease", validateToken, diseaseRoutes);
app.use("/patient", validateToken, patientRoutes);
app.use("/user", validateToken, userRoutes);
app.use("/role", validateToken, roleRoutes);

async function startServer() {
  // await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();