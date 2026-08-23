import { container } from "tsyringe";
import { IAppointmentRepository } from "./../../Domain/repositories/appointmentRepository.interface";
import { AppointmentRepository } from "./../../Infrastructure/repositories/appointment.repository";
import { IAppointmentService } from "./../../Application/interfaces/appointment.service.interface";
import { AppointmentService } from "./../../Application/services/appointment.service";
import { AppointmentController } from "./../controllers/appointment.controller";
import { IPaymentNotificationRepository } from "./../../Domain/repositories/paymentNotificationRepository.interface";
import { PaymentNotificationRepository } from "./../../Infrastructure/repositories/paymentNotification.repository";
import { IPaymentNotificationService } from "./../../Application/interfaces/paymentNotification.service.interface";
import { PaymentNotificationService } from "./../../Application/services/paymentNotification.service";
import { PaymentNotificationController } from "./../controllers/paymentNotification.controller";
import { IInstallmentRepository } from "./../../Domain/repositories/installmentRepository.interface";
import { InstallmentRepository } from "./../../Infrastructure/repositories/installment.repository";
import { IInstallmentService } from "./../../Application/interfaces/installment.service.interface";
import { InstallmentService } from "./../../Application/services/installment.service";
import { InstallmentController } from "./../controllers/installment.controller";
import { IPaymentPlanRepository } from "./../../Domain/repositories/paymentPlanRepository.interface";
import { PaymentPlanRepository } from "./../../Infrastructure/repositories/paymentPlan.repository";
import { IPaymentPlanService } from "./../../Application/interfaces/paymentPlan.service.interface";
import { PaymentPlanService } from "./../../Application/services/paymentPlan.service";
import { PaymentPlanController } from "./../controllers/paymentPlan.controller";
import { IInventoryMovementRepository } from "./../../Domain/repositories/inventoryMovementRepository.interface";
import { InventoryMovementRepository } from "./../../Infrastructure/repositories/inventoryMovement.repository";
import { IInventoryMovementService } from "./../../Application/interfaces/inventoryMovement.service.interface";
import { InventoryMovementService } from "./../../Application/services/inventoryMovement.service";
import { InventoryMovementController } from "./../controllers/inventoryMovement.controller";
import { IInventoryRepository } from "./../../Domain/repositories/inventoryRepository.interface";
import { InventoryRepository } from "./../../Infrastructure/repositories/inventory.repository";
import { IInventoryService } from "./../../Application/interfaces/inventory.service.interface";
import { InventoryService } from "./../../Application/services/inventory.service";
import { InventoryController } from "./../controllers/inventory.controller";
import { IInventoryLoteRepository } from "./../../Domain/repositories/inventoryLoteRepository.interface";
import { InventoryLoteRepository } from "./../../Infrastructure/repositories/inventoryLote.repository";
import { IInventoryLoteService } from "./../../Application/interfaces/inventoryLote.service.interface";
import { InventoryLoteService } from "./../../Application/services/inventoryLote.service";
import { InventoryLoteController } from "./../controllers/inventoryLote.controller";
import { IMeasurementUnitRepository } from "./../../Domain/repositories/measurementUnitRepository.interface";
import { MeasurementUnitRepository } from "./../../Infrastructure/repositories/measurementUnit.repository";
import { IMeasurementUnitService } from "./../../Application/interfaces/measurementUnit.service.interface";
import { MeasurementUnitService } from "./../../Application/services/measurementUnit.service";
import { MeasurementUnitController } from "./../controllers/measurementUnit.controller";
import { ICategoryRepository } from "./../../Domain/repositories/categoryRepository.interface";
import { CategoryRepository } from "./../../Infrastructure/repositories/category.repository";
import { ICategoryService } from "./../../Application/interfaces/category.service.interface";
import { CategoryService } from "./../../Application/services/category.service";
import { CategoryController } from "./../controllers/category.controller";
import { IProductRepository } from "./../../Domain/repositories/productRepository.interface";
import { ProductRepository } from "./../../Infrastructure/repositories/product.repository";
import { IProductService } from "./../../Application/interfaces/product.service.interface";
import { ProductService } from "./../../Application/services/product.service";
import { ProductController } from "./../controllers/product.controller";
import { ISupplierRepository } from "./../../Domain/repositories/supplierRepository.interface";
import { SupplierRepository } from "./../../Infrastructure/repositories/supplier.repository";
import { ISupplierService } from "./../../Application/interfaces/supplier.service.interface";
import { SupplierService } from "./../../Application/services/supplier.service";
import { SupplierController } from "./../controllers/supplier.controller";
import { IPaymentRepository } from "./../../Domain/repositories/paymentRepository.interface";
import { PaymentRepository } from "./../../Infrastructure/repositories/payment.repository";
import { IPaymentService } from "./../../Application/interfaces/payment.service.interface";
import { PaymentService } from "./../../Application/services/payment.service";
import { PaymentController } from "./../controllers/payment.controller";
import { IInvoiceRepository } from "./../../Domain/repositories/invoiceRepository.interface";
import { InvoiceRepository } from "./../../Infrastructure/repositories/invoice.repository";
import { IInvoiceService } from "./../../Application/interfaces/invoice.service.interface";
import { InvoiceService } from "./../../Application/services/invoice.service";
import { InvoiceController } from "./../controllers/invoice.controller";
import { IPatientAttachmentRepository } from "./../../Domain/repositories/patientAttachmentRepository.interface";
import { PatientAttachmentRepository } from "./../../Infrastructure/repositories/patientAttachment.repository";
import { IPatientAttachmentService } from "./../../Application/interfaces/patientAttachment.service.interface";
import { PatientAttachmentService } from "./../../Application/services/patientAttachment.service";
import { PatientAttachmentController } from "./../controllers/patientAttachment.controller";
import { IMedicalPrescriptionDetailRepository } from "./../../Domain/repositories/medicalPrescriptionDetailRepository.interface";
import { MedicalPrescriptionDetailRepository } from "./../../Infrastructure/repositories/medicalPrescriptionDetail.repository";
import { IMedicalPrescriptionDetailService } from "./../../Application/interfaces/medicalPrescriptionDetail.service.interface";
import { MedicalPrescriptionDetailService } from "./../../Application/services/medicalPrescriptionDetail.service";
import { MedicalPrescriptionDetailController } from "./../controllers/medicalPrescriptionDetail.controller";
import { IMedicalPrescriptionRepository } from "./../../Domain/repositories/medicalPrescriptionRepository.interface";
import { MedicalPrescriptionRepository } from "./../../Infrastructure/repositories/medicalPrescription.repository";
import { IMedicalPrescriptionService } from "./../../Application/interfaces/medicalPrescription.service.interface";
import { MedicalPrescriptionService } from "./../../Application/services/medicalPrescription.service";
import { MedicalPrescriptionController } from "./../controllers/medicalPrescription.controller";
import { IClinicalProgresRepository } from "./../../Domain/repositories/clinicalProgresRepository.interface";
import { ClinicalProgresRepository } from "./../../Infrastructure/repositories/clinicalProgres.repository";
import { IClinicalProgresService } from "./../../Application/interfaces/clinicalProgres.service.interface";
import { ClinicalProgresService } from "./../../Application/services/clinicalProgres.service";
import { ClinicalProgresController } from "./../controllers/clinicalProgres.controller";
import { ITreatmentPlanDetailRepository } from "./../../Domain/repositories/treatmentPlanDetailRepository.interface";
import { TreatmentPlanDetailRepository } from "./../../Infrastructure/repositories/treatmentPlanDetail.repository";
import { ITreatmentPlanDetailService } from "./../../Application/interfaces/treatmentPlanDetail.service.interface";
import { TreatmentPlanDetailService } from "./../../Application/services/treatmentPlanDetail.service";
import { TreatmentPlanDetailController } from "./../controllers/treatmentPlanDetail.controller";
import { ITreatmentPlanRepository } from "./../../Domain/repositories/treatmentPlanRepository.interface";
import { TreatmentPlanRepository } from "./../../Infrastructure/repositories/treatmentPlan.repository";
import { ITreatmentPlanService } from "./../../Application/interfaces/treatmentPlan.service.interface";
import { TreatmentPlanService } from "./../../Application/services/treatmentPlan.service";
import { TreatmentPlanController } from "./../controllers/treatmentPlan.controller";
import { ITreatmentCatalogRepository } from "./../../Domain/repositories/treatmentCatalogRepository.interface";
import { TreatmentCatalogRepository } from "./../../Infrastructure/repositories/treatmentCatalog.repository";
import { ITreatmentCatalogService } from "./../../Application/interfaces/treatmentCatalog.service.interface";
import { TreatmentCatalogService } from "./../../Application/services/treatmentCatalog.service";
import { TreatmentCatalogController } from "./../controllers/treatmentCatalog.controller";
import { IDentalChartDetailRepository } from "./../../Domain/repositories/dentalChartDetailRepository.interface";
import { DentalChartDetailRepository } from "./../../Infrastructure/repositories/dentalChartDetail.repository";
import { IDentalChartDetailService } from "./../../Application/interfaces/dentalChartDetail.service.interface";
import { DentalChartDetailService } from "./../../Application/services/dentalChartDetail.service";
import { DentalChartDetailController } from "./../controllers/dentalChartDetail.controller";
import { IDentalChartRepository } from "./../../Domain/repositories/dentalChartRepository.interface";
import { DentalChartRepository } from "./../../Infrastructure/repositories/dentalChart.repository";
import { IDentalChartService } from "./../../Application/interfaces/dentalChart.service.interface";
import { DentalChartService } from "./../../Application/services/dentalChart.service";
import { DentalChartController } from "./../controllers/dentalChart.controller";
import { IPatientDiseaseRepository } from "./../../Domain/repositories/patientDiseaseRepository.interface";
import { PatientDiseaseRepository } from "./../../Infrastructure/repositories/patientDisease.repository";
import { IPatientDiseaseService } from "./../../Application/interfaces/patientDisease.service.interface";
import { PatientDiseaseService } from "./../../Application/services/patientDisease.service";
import { PatientDiseaseController } from "./../controllers/patientDisease.controller";
import { IDiseaseRepository } from "./../../Domain/repositories/diseaseRepository.interface";
import { DiseaseRepository } from "./../../Infrastructure/repositories/disease.repository";
import { IDiseaseService } from "./../../Application/interfaces/disease.service.interface";
import { DiseaseService } from "./../../Application/services/disease.service";
import { DiseaseController } from "./../controllers/disease.controller";
import { IPatientRepository } from "./../../Domain/repositories/patientRepository.interface";
import { PatientRepository } from "./../../Infrastructure/repositories/patient.repository";
import { IPatientService } from "./../../Application/interfaces/patient.service.interface";
import { PatientService } from "./../../Application/services/patient.service";
import { PatientController } from "./../controllers/patient.controller";
import { IUserRepository } from "./../../Domain/repositories/userRepository.interface";
import { UserRepository } from "./../../Infrastructure/repositories/user.repository";
import { IUserService } from "./../../Application/interfaces/user.service.interface";
import { UserService } from "./../../Application/services/user.service";
import { UserController } from "./../controllers/user.controller";
import { IRoleRepository } from "./../../Domain/repositories/roleRepository.interface";
import { RoleRepository } from "./../../Infrastructure/repositories/role.repository";
import { IRoleService } from "./../../Application/interfaces/role.service.interface";
import { RoleService } from "./../../Application/services/role.service";
import { RoleController } from "./../controllers/role.controller";
import { ISingletonSqlConnection } from '../../Infrastructure/interface/dbConnection.interface';
import { SingletonSqlConnection } from '../../Infrastructure/database/dbConnection';
import { ISqlCommandOperationBuilder } from "../../Infrastructure/interface/sqlCommandOperation.interface";
import { SqlCommandOperationBuilder } from "../../Infrastructure/builders/sqlCommandOperation.builder";
import { EntitiesService } from "../../Infrastructure/services/entities.service";
import { IEntitiesService } from "../../Infrastructure/interface/entitiesService.interface";
import { IPasswordService } from "../../Domain/repositories/passwordService.interface";
import { PasswordService } from "../../Infrastructure/services/password.service";
import { IInvoicePaymentService } from "../../Application/interfaces/invoicePayment.service.interface";
import { InvoicePaymentService } from "../../Application/workflows/invoicePayment.service";
import { IPaymentPlanOrchestratorService } from "../../Application/interfaces/paymentPlanOrchestrator.interface";
import { PaymentPlanOrchestratorService } from "../../Application/workflows/paymentPlanOrchestrator.service";
import { IInventoryOrchestratorService } from "../../Application/interfaces/inventoryOrchestrator.interface";
import { InventoryOrchestratorService } from "../../Application/workflows/inventoryOrchestrator.service";
//builder, database connection and entity service
container.registerSingleton<ISingletonSqlConnection>('ISingletonSqlConnection', SingletonSqlConnection);
container.register<ISqlCommandOperationBuilder>('IOperationBuilder', { useClass: SqlCommandOperationBuilder });
container.registerSingleton<IEntitiesService>('IEntityService', EntitiesService);

//Servicios de cifrado de contraseña
container.register<IPasswordService>('IPasswordService', {useClass: PasswordService});

//servicio de orquestacion de facturacion
container.register<IInvoicePaymentService>('IInvoicePaymentService', {useClass: InvoicePaymentService});
container.register<IPaymentPlanOrchestratorService>('IPaymentPlanOrchestratorService', {useClass: PaymentPlanOrchestratorService});
container.register<IInventoryOrchestratorService>('IInventoryOrchestratorService', {useClass: InventoryOrchestratorService});


// AUTO-GENERATED MODULE REGISTRATIONS
// Appointment
container.register<IAppointmentRepository>("IAppointmentRepository", { useClass: AppointmentRepository });
container.register<IAppointmentService>("IAppointmentService", { useClass: AppointmentService });
container.register<AppointmentController>("AppointmentController", { useClass: AppointmentController });
// PaymentNotification
container.register<IPaymentNotificationRepository>("IPaymentNotificationRepository", { useClass: PaymentNotificationRepository });
container.register<IPaymentNotificationService>("IPaymentNotificationService", { useClass: PaymentNotificationService });
container.register<PaymentNotificationController>("PaymentNotificationController", { useClass: PaymentNotificationController });
// Installment
container.register<IInstallmentRepository>("IInstallmentRepository", { useClass: InstallmentRepository });
container.register<IInstallmentService>("IInstallmentService", { useClass: InstallmentService });
container.register<InstallmentController>("InstallmentController", { useClass: InstallmentController });
// PaymentPlan
container.register<IPaymentPlanRepository>("IPaymentPlanRepository", { useClass: PaymentPlanRepository });
container.register<IPaymentPlanService>("IPaymentPlanService", { useClass: PaymentPlanService });
container.register<PaymentPlanController>("PaymentPlanController", { useClass: PaymentPlanController });
// InventoryMovement
container.register<IInventoryMovementRepository>("IInventoryMovementRepository", { useClass: InventoryMovementRepository });
container.register<IInventoryMovementService>("IInventoryMovementService", { useClass: InventoryMovementService });
container.register<InventoryMovementController>("InventoryMovementController", { useClass: InventoryMovementController });
// Inventory
container.register<IInventoryRepository>("IInventoryRepository", { useClass: InventoryRepository });
container.register<IInventoryService>("IInventoryService", { useClass: InventoryService });
container.register<InventoryController>("InventoryController", { useClass: InventoryController });
// InventoryLote
container.register<IInventoryLoteRepository>("IInventoryLoteRepository", { useClass: InventoryLoteRepository });
container.register<IInventoryLoteService>("IInventoryLoteService", { useClass: InventoryLoteService });
container.register<InventoryLoteController>("InventoryLoteController", { useClass: InventoryLoteController });
// MeasurementUnit
container.register<IMeasurementUnitRepository>("IMeasurementUnitRepository", { useClass: MeasurementUnitRepository });
container.register<IMeasurementUnitService>("IMeasurementUnitService", { useClass: MeasurementUnitService });
container.register<MeasurementUnitController>("MeasurementUnitController", { useClass: MeasurementUnitController });
// Category
container.register<ICategoryRepository>("ICategoryRepository", { useClass: CategoryRepository });
container.register<ICategoryService>("ICategoryService", { useClass: CategoryService });
container.register<CategoryController>("CategoryController", { useClass: CategoryController });
// Product
container.register<IProductRepository>("IProductRepository", { useClass: ProductRepository });
container.register<IProductService>("IProductService", { useClass: ProductService });
container.register<ProductController>("ProductController", { useClass: ProductController });
// Supplier
container.register<ISupplierRepository>("ISupplierRepository", { useClass: SupplierRepository });
container.register<ISupplierService>("ISupplierService", { useClass: SupplierService });
container.register<SupplierController>("SupplierController", { useClass: SupplierController });
// Payment
container.register<IPaymentRepository>("IPaymentRepository", { useClass: PaymentRepository });
container.register<IPaymentService>("IPaymentService", { useClass: PaymentService });
container.register<PaymentController>("PaymentController", { useClass: PaymentController });
// Invoice
container.register<IInvoiceRepository>("IInvoiceRepository", { useClass: InvoiceRepository });
container.register<IInvoiceService>("IInvoiceService", { useClass: InvoiceService });
container.register<InvoiceController>("InvoiceController", { useClass: InvoiceController });
// PatientAttachment
container.register<IPatientAttachmentRepository>("IPatientAttachmentRepository", { useClass: PatientAttachmentRepository });
container.register<IPatientAttachmentService>("IPatientAttachmentService", { useClass: PatientAttachmentService });
container.register<PatientAttachmentController>("PatientAttachmentController", { useClass: PatientAttachmentController });
// MedicalPrescriptionDetail
container.register<IMedicalPrescriptionDetailRepository>("IMedicalPrescriptionDetailRepository", { useClass: MedicalPrescriptionDetailRepository });
container.register<IMedicalPrescriptionDetailService>("IMedicalPrescriptionDetailService", { useClass: MedicalPrescriptionDetailService });
container.register<MedicalPrescriptionDetailController>("MedicalPrescriptionDetailController", { useClass: MedicalPrescriptionDetailController });
// MedicalPrescription
container.register<IMedicalPrescriptionRepository>("IMedicalPrescriptionRepository", { useClass: MedicalPrescriptionRepository });
container.register<IMedicalPrescriptionService>("IMedicalPrescriptionService", { useClass: MedicalPrescriptionService });
container.register<MedicalPrescriptionController>("MedicalPrescriptionController", { useClass: MedicalPrescriptionController });
// ClinicalProgres
container.register<IClinicalProgresRepository>("IClinicalProgresRepository", { useClass: ClinicalProgresRepository });
container.register<IClinicalProgresService>("IClinicalProgresService", { useClass: ClinicalProgresService });
container.register<ClinicalProgresController>("ClinicalProgresController", { useClass: ClinicalProgresController });
// TreatmentPlanDetail
container.register<ITreatmentPlanDetailRepository>("ITreatmentPlanDetailRepository", { useClass: TreatmentPlanDetailRepository });
container.register<ITreatmentPlanDetailService>("ITreatmentPlanDetailService", { useClass: TreatmentPlanDetailService });
container.register<TreatmentPlanDetailController>("TreatmentPlanDetailController", { useClass: TreatmentPlanDetailController });
// TreatmentPlan
container.register<ITreatmentPlanRepository>("ITreatmentPlanRepository", { useClass: TreatmentPlanRepository });
container.register<ITreatmentPlanService>("ITreatmentPlanService", { useClass: TreatmentPlanService });
container.register<TreatmentPlanController>("TreatmentPlanController", { useClass: TreatmentPlanController });
// TreatmentCatalog
container.register<ITreatmentCatalogRepository>("ITreatmentCatalogRepository", { useClass: TreatmentCatalogRepository });
container.register<ITreatmentCatalogService>("ITreatmentCatalogService", { useClass: TreatmentCatalogService });
container.register<TreatmentCatalogController>("TreatmentCatalogController", { useClass: TreatmentCatalogController });
// DentalChartDetail
container.register<IDentalChartDetailRepository>("IDentalChartDetailRepository", { useClass: DentalChartDetailRepository });
container.register<IDentalChartDetailService>("IDentalChartDetailService", { useClass: DentalChartDetailService });
container.register<DentalChartDetailController>("DentalChartDetailController", { useClass: DentalChartDetailController });
// DentalChart
container.register<IDentalChartRepository>("IDentalChartRepository", { useClass: DentalChartRepository });
container.register<IDentalChartService>("IDentalChartService", { useClass: DentalChartService });
container.register<DentalChartController>("DentalChartController", { useClass: DentalChartController });
// PatientDisease
container.register<IPatientDiseaseRepository>("IPatientDiseaseRepository", { useClass: PatientDiseaseRepository });
container.register<IPatientDiseaseService>("IPatientDiseaseService", { useClass: PatientDiseaseService });
container.register<PatientDiseaseController>("PatientDiseaseController", { useClass: PatientDiseaseController });
// Disease
container.register<IDiseaseRepository>("IDiseaseRepository", { useClass: DiseaseRepository });
container.register<IDiseaseService>("IDiseaseService", { useClass: DiseaseService });
container.register<DiseaseController>("DiseaseController", { useClass: DiseaseController });
// Patient
container.register<IPatientRepository>("IPatientRepository", { useClass: PatientRepository });
container.register<IPatientService>("IPatientService", { useClass: PatientService });
container.register<PatientController>("PatientController", { useClass: PatientController });
// User
container.register<IUserRepository>("IUserRepository", { useClass: UserRepository });
container.register<IUserService>("IUserService", { useClass: UserService });
container.register<UserController>("UserController", { useClass: UserController });
// Role
container.register<IRoleRepository>("IRoleRepository", { useClass: RoleRepository });
container.register<IRoleService>("IRoleService", { useClass: RoleService });
container.register<RoleController>("RoleController", { useClass: RoleController });