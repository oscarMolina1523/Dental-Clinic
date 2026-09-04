import { EntityType } from "../utils/entityTypes";
import {
    SqlEntitySettings,
    SqlColumnSettings,
} from "../builders/sqlEntitySettings";
import { IEntitiesService } from "../interface/entitiesService.interface";
import { injectable } from "tsyringe";

@injectable()
export class EntitiesService implements IEntitiesService {
    private entities = new Map<EntityType, SqlEntitySettings>();

    constructor() {
        this.buildEntities();
    }

    GetSettings(type: EntityType): SqlEntitySettings {
        const settings = this.entities.get(type);
        if (!settings) {
            throw new Error(`Entidad no encontrada: ${type}`);
        }
        return settings;
    }

    private buildEntities(): void {
        this.entities.set(EntityType.Role, this.getRoleSettings());
        this.entities.set(EntityType.User, this.getUserSettings());
        this.entities.set(EntityType.Patient, this.getPatientSettings());
        this.entities.set(EntityType.Disease, this.getDiseaseSettings());
        this.entities.set(EntityType.PatientDisease, this.getPatientDiseaseSettings());
        this.entities.set(EntityType.DentalChart, this.getDentalChartSettings());
        this.entities.set(EntityType.DentalChartDetail, this.getDentalChartDetailSettings());
        this.entities.set(EntityType.TreatmentCatalog, this.getTreatmentCatalogSettings());
        this.entities.set(EntityType.TreatmentPlan, this.getTreatmentPlanSettings());
        this.entities.set(EntityType.TreatmentPlanDetail, this.getTreatmentPlanDetailSettings());
        this.entities.set(EntityType.ClinicalProgres, this.getClinicalProgresSettings());
        this.entities.set(EntityType.MedicalPrescription, this.getMedicalPrescriptionSettings());
        this.entities.set(EntityType.MedicalPrescriptionDetail, this.getMedicalPrescriptionDetailSettings());
        this.entities.set(EntityType.PatientAttachment, this.getPatientAttachmentSettings());
        this.entities.set(EntityType.Invoice, this.getInvoiceSettings());
        this.entities.set(EntityType.Payment, this.getPaymentSettings());
        this.entities.set(EntityType.Supplier, this.getSupplierSettings());
        this.entities.set(EntityType.Product, this.getProductSettings());
        this.entities.set(EntityType.Category, this.getCategorySettings());
        this.entities.set(EntityType.MeasurementUnit, this.getMeasurementUnitSettings());
        this.entities.set(EntityType.InventoryLote, this.getInventoryLoteSettings());
        this.entities.set(EntityType.Inventory, this.getInventorySettings());
        this.entities.set(EntityType.InventoryMovement, this.getInventoryMovementSettings());
        this.entities.set(EntityType.PaymentPlan, this.getPaymentPlanSettings());
        this.entities.set(EntityType.Installment, this.getInstallmentSettings());
        this.entities.set(EntityType.PaymentNotification, this.getPaymentNotificationSettings());
        this.entities.set(EntityType.Appointment, this.getAppointmentSettings());
    }




    private getRoleSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
        ];
        return new SqlEntitySettings("ROLES", columns);
    }

    private getUserSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("ROLEID", "roleId", false),
            new SqlColumnSettings("FULLNAME", "fullName", false),
            new SqlColumnSettings("IMAGE", "image", false),
            new SqlColumnSettings("EMAIL", "email", false),
            new SqlColumnSettings("PASSWORD", "password", false),
            new SqlColumnSettings("PHONENUMBER", "phoneNumber", false),
            new SqlColumnSettings("MEMBERSHIPNUMBER", "membershipNumber", false),
            new SqlColumnSettings("ACTIVE", "active", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
        ];
        return new SqlEntitySettings("USERS", columns);
    }

    private getPatientSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PATIENTCODE", "patientCode", false),
            new SqlColumnSettings("IMAGE", "image", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("LASTNAME", "lastName", false),
            new SqlColumnSettings("IDCARD", "idCard", false),
            new SqlColumnSettings("BIRTHDATE", "birthdate", false),
            new SqlColumnSettings("GENDER", "gender", false),
            new SqlColumnSettings("PHONENUMBER", "phoneNumber", false),
            new SqlColumnSettings("EMAIL", "email", false),
            new SqlColumnSettings("ADDRESS", "address", false),
            new SqlColumnSettings("EMERGENCYCONTACTNAME", "emergencyContactName", false),
            new SqlColumnSettings("EMERGENCYCONTACTPHONE", "emergencyContactPhone", false),
            new SqlColumnSettings("MARITALSTATUS", "maritalStatus", false),
            new SqlColumnSettings("ACTIVE", "active", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
        ];
        return new SqlEntitySettings("PATIENTS", columns);
    }

    private getDiseaseSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
        ];
        return new SqlEntitySettings("DISEASES", columns);
    }

    private getPatientDiseaseSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PATIENTID", "patientId", false),
            new SqlColumnSettings("DISEASEID", "diseaseId", false),
            new SqlColumnSettings("OBSERVATIONS", "observations", false),
        ];
        return new SqlEntitySettings("PATIENTDISEASES", columns);
    }

    private getDentalChartSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PATIENTID", "patientId", false),
            new SqlColumnSettings("EVALUATIONDATE", "evaluationDate", false),
            new SqlColumnSettings("DENTISTID", "dentistId", false),
            new SqlColumnSettings("OBSERVATIONS", "observations", false),
        ];
        return new SqlEntitySettings("DENTALCHARTS", columns);
    }

    private getDentalChartDetailSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("DENTALCHARTID", "dentalChartId", false),
            new SqlColumnSettings("TOOTHNUMBER", "toothNumber", false),
            new SqlColumnSettings("FACE", "face", false),
            new SqlColumnSettings("TOOTHSTATUS", "toothStatus", false),
            new SqlColumnSettings("NOTES", "notes", false),
        ];
        return new SqlEntitySettings("DENTALCHARTDETAILS", columns);
    }

    private getTreatmentCatalogSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("CODE", "code", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("BASEPRICE", "basePrice", false),
            new SqlColumnSettings("ESTIMATEDDURATIONMINUTES", "estimatedDurationMinutes", false),
            new SqlColumnSettings("ACTIVE", "active", false),
        ];
        return new SqlEntitySettings("TREATMENTCATALOGS", columns);
    }

    private getTreatmentPlanSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PATIENTID", "patientId", false),
            new SqlColumnSettings("DENTISTID", "dentistId", false),
            new SqlColumnSettings("CODE", "code", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("TOTALAMOUNT", "totalAmount", false),
            new SqlColumnSettings("DISCOUNT", "discount", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
        ];
        return new SqlEntitySettings("TREATMENTPLANS", columns);
    }

    private getTreatmentPlanDetailSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PLANID", "planId", false),
            new SqlColumnSettings("TREATMENTID", "treatmentId", false),
            new SqlColumnSettings("TOOTHNUMBER", "toothNumber", false),
            new SqlColumnSettings("QUANTITY", "quantity", false),
            new SqlColumnSettings("UNITPRICE", "unitPrice", false),
            new SqlColumnSettings("SUBTOTAL", "subtotal", false),
            new SqlColumnSettings("STATUS", "status", false),
        ];
        return new SqlEntitySettings("TREATMENTPLANDETAILS", columns);
    }

    private getClinicalProgresSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PATIENTID", "patientId", false),
            new SqlColumnSettings("DATEID", "dateId", false),
            new SqlColumnSettings("DENTISTID", "dentistId", false),
            new SqlColumnSettings("DIAGNOSIS", "diagnosis", false),
            new SqlColumnSettings("TREATMENTID", "treatmentId", false),
            new SqlColumnSettings("OBSERVATIONS", "observations", false),
            new SqlColumnSettings("REGISTRATIONDATE", "registrationDate", false),
        ];
        return new SqlEntitySettings("CLINICALPROGRESS", columns);
    }

    private getMedicalPrescriptionSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PATIENTID", "patientId", false),
            new SqlColumnSettings("DENTISTID", "dentistId", false),
            new SqlColumnSettings("DATE", "date", false),
            new SqlColumnSettings("GENERALINSTRUCTIONS", "generalInstructions", false),
        ];
        return new SqlEntitySettings("MEDICALPRESCRIPTIONS", columns);
    }

    private getMedicalPrescriptionDetailSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("MEDICALPRESCRIPTIONID", "medicalPrescriptionId", false),
            new SqlColumnSettings("MEDICINE", "medicine", false),
            new SqlColumnSettings("DOSE", "dose", false),
            new SqlColumnSettings("FREQUENCY", "frequency", false),
            new SqlColumnSettings("DURATION", "duration", false),
        ];
        return new SqlEntitySettings("MEDICALPRESCRIPTIONDETAILS", columns);
    }

    private getPatientAttachmentSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PATIENTID", "patientId", false),
            new SqlColumnSettings("FILETYPE", "fileType", false),
            new SqlColumnSettings("FILEURL", "fileUrl", false),
            new SqlColumnSettings("FILENAME", "fileName", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("UPLOADEDBY", "uploadedBy", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
        ];
        return new SqlEntitySettings("PATIENTATTACHMENTS", columns);
    }

    private getInvoiceSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PATIENTID", "patientId", false),
            new SqlColumnSettings("TREATMENTPLANID", "treatmentPlanId", false),
            new SqlColumnSettings("INVOICENUMBER", "invoiceNumber", false),
            new SqlColumnSettings("TOTALAMOUNT", "totalAmount", false),
            new SqlColumnSettings("PAIDAMOUNT", "paidAmount", false),
            new SqlColumnSettings("PENDINGAMOUNT", "pendingAmount", false),
            new SqlColumnSettings("STATUS", "status", false),
        ];
        return new SqlEntitySettings("INVOICES", columns);
    }

    private getPaymentSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("INVOICE_ID", "invoice_id", false),
            new SqlColumnSettings("AMOUNT", "amount", false),
            new SqlColumnSettings("PAYMENT_METHOD", "payment_method", false),
            new SqlColumnSettings("TRANSACTION_REFERENCE", "transaction_reference", false),
            new SqlColumnSettings("SERVED_BY", "served_by", false),
            new SqlColumnSettings("PAYMENT_DATE", "payment_date", false),
            new SqlColumnSettings("INSTALLMENT_ID", "installment_id", false),
        ];
        return new SqlEntitySettings("PAYMENTS", columns);
    }

    private getSupplierSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("CONTACT", "contact", false),
            new SqlColumnSettings("PHONE", "phone", false),
            new SqlColumnSettings("EMAIL", "email", false),
        ];
        return new SqlEntitySettings("SUPPLIERS", columns);
    }

    private getProductSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("BARCODE", "barcode", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("CATEGORY_ID", "category_id", false),
            new SqlColumnSettings("MEASUREMENT_UNIT_ID", "measurement_unit_id", false),
        ];
        return new SqlEntitySettings("PRODUCTS", columns);
    }

    private getCategorySettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
        ];
        return new SqlEntitySettings("CATEGORIES", columns);
    }

    private getMeasurementUnitSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("ABREVIATION", "abreviation", false),
        ];
        return new SqlEntitySettings("MEASUREMENTUNITS", columns);
    }

    private getInventoryLoteSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PRODUCTID", "productId", false),
            new SqlColumnSettings("SUPPLIERID", "supplierId", false),
            new SqlColumnSettings("LOTENUMBER", "loteNumber", false),
            new SqlColumnSettings("QUANTITY", "quantity", false),
            new SqlColumnSettings("DUEDATE", "dueDate", false),
            new SqlColumnSettings("ENTRYDATE", "entryDate", false),
        ];
        return new SqlEntitySettings("INVENTORYLOTES", columns);
    }

    private getInventorySettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PRODUCTID", "productId", false),
            new SqlColumnSettings("PRODUCTNAME", "productName", false),
            new SqlColumnSettings("CURRENTSTOCK", "currentStock", false),
            new SqlColumnSettings("MINIMUMSTOCK", "minimumStock", false),
        ];
        return new SqlEntitySettings("INVENTORIES", columns);
    }

    private getInventoryMovementSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PRODUCTID", "productId", false),
            new SqlColumnSettings("TYPE", "type", false),
            new SqlColumnSettings("QUANTITY", "quantity", false),
            new SqlColumnSettings("USERID", "userId", false),
            new SqlColumnSettings("OBSERVATION", "observation", false),
        ];
        return new SqlEntitySettings("INVENTORYMOVEMENTS", columns);
    }

    private getPaymentPlanSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("INVOICEID", "invoiceId", false),
            new SqlColumnSettings("TOTALAMOUNT", "totalAmount", false),
            new SqlColumnSettings("NUMBEROFINSTALLMENTS", "numberOfInstallments", false),
            new SqlColumnSettings("FREQUENCYDAYS", "frequencyDays", false),
            new SqlColumnSettings("INTERESTRATE", "interestRate", false),
            new SqlColumnSettings("LATEFREEPERCENTAGE", "lateFreePercentage", false),
            new SqlColumnSettings("GRACEPERIODDAYS", "gracePeriodDays", false),
            new SqlColumnSettings("STATUS", "status", false),
        ];
        return new SqlEntitySettings("PAYMENTPLANS", columns);
    }

    private getInstallmentSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PAYMENTPLANID", "paymentPlanId", false),
            new SqlColumnSettings("INSTALLMENTNUMBER", "installmentNumber", false),
            new SqlColumnSettings("DUEDATE", "dueDate", false),
            new SqlColumnSettings("AMOUNT", "amount", false),
            new SqlColumnSettings("LATEFEEAMOUNT", "lateFeeAmount", false),
            new SqlColumnSettings("PAIDAMOUNT", "paidAmount", false),
            new SqlColumnSettings("STATUS", "status", false),
        ];
        return new SqlEntitySettings("INSTALLMENTS", columns);
    }

    private getPaymentNotificationSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("INSTALLMENTID", "installmentId", false),
            new SqlColumnSettings("PATIENTID", "patientId", false),
            new SqlColumnSettings("SCHEDULEDDATE", "scheduledDate", false),
            new SqlColumnSettings("SENDAT", "sendAt", false),
            new SqlColumnSettings("NOTIFICATIONTYPE", "notificationType", false),
            new SqlColumnSettings("CHANNEL", "channel", false),
            new SqlColumnSettings("STATUS", "status", false),
        ];
        return new SqlEntitySettings("PAYMENTNOTIFICATIONS", columns);
    }

    private getAppointmentSettings(): SqlEntitySettings {
        const columns: SqlColumnSettings[] = [
            new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PATIENTID", "patientId", false),
            new SqlColumnSettings("DENTISTID", "dentistId", false),
            new SqlColumnSettings("STARTAPPOINTMENTTIME", "startAppointmentTime", false),
            new SqlColumnSettings("ENDAPPOINTMENTTIME", "endAppointmentTime", false),
            new SqlColumnSettings("REASON", "reason", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("CANCELATIONNOTES", "cancelationNotes", false),
            new SqlColumnSettings("REMINDERSENT", "reminderSent", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
        ];
        return new SqlEntitySettings("APPOINTMENTS", columns);
    }

}