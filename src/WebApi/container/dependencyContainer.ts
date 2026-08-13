import { container } from "tsyringe";
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
import { IDateRepository } from "./../../Domain/repositories/dateRepository.interface";
import { DateRepository } from "./../../Infrastructure/repositories/date.repository";
import { IDateService } from "./../../Application/interfaces/date.service.interface";
import { DateService } from "./../../Application/services/date.service";
import { DateController } from "./../controllers/date.controller";
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
//builder, database connection and entity service

// AUTO-GENERATED MODULE REGISTRATIONS
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
// Date
container.register<IDateRepository>("IDateRepository", { useClass: DateRepository });
container.register<IDateService>("IDateService", { useClass: DateService });
container.register<DateController>("DateController", { useClass: DateController });
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