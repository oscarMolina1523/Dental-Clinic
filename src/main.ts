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
app.use("/appointment", appointmentRoutes);
app.use("/paymentNotification", paymentNotificationRoutes);
app.use("/installment", installmentRoutes);
app.use("/paymentPlan", paymentPlanRoutes);
app.use("/paymentPlanOrchestrator", paymentPlanOrchestratorRoutes);
app.use("/inventoryMovement", inventoryMovementRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/inventoryLote", inventoryLoteRoutes);
app.use("/inventoryOrchestrator", inventoryOrchestratorRoutes);
app.use("/measurementUnit", measurementUnitRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/supplier", supplierRoutes);
app.use("/payment", paymentRoutes);
app.use("/invoice", invoiceRoutes);
app.use("/invoice-payments", invoicePaymentRoutes);
app.use("/patientAttachment", patientAttachmentRoutes);
app.use("/medicalPrescriptionDetail", medicalPrescriptionDetailRoutes);
app.use("/medicalPrescription", medicalPrescriptionRoutes);
app.use("/clinicalProgres", clinicalProgresRoutes);
app.use("/treatmentPlanDetail", treatmentPlanDetailRoutes);
app.use("/treatmentPlan", treatmentPlanRoutes);
app.use("/treatmentCatalog", treatmentCatalogRoutes);
app.use("/dentalChartDetail", dentalChartDetailRoutes);
app.use("/dentalChart", dentalChartRoutes);
app.use("/patientDisease", patientDiseaseRoutes);
app.use("/disease", diseaseRoutes);
app.use("/patient", patientRoutes);
app.use("/user", userRoutes);
app.use("/role", roleRoutes);

async function startServer() {
  // await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();