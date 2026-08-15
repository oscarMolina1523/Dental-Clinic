import { createClient } from "@libsql/client";

const dbUrl = process.env.TURSO_DB_URL || "not-found";
const token = process.env.TURSO_DB_AUTH_TOKEN || "not-found";

export async function initializeDatabase(): Promise<void> {
  const db = createClient({ url: dbUrl, authToken: token });

  try {
    

  await db.execute(`
    CREATE TABLE IF NOT EXISTS ROLES (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        DESCRIPTION TEXT,
        CREATEDAT TEXT
    );
`);

console.log("✔ Role ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS USERS (
        ID TEXT PRIMARY KEY,
        ROLEID TEXT,
        FULLNAME TEXT,
        IMAGE TEXT,
        EMAIL TEXT,
        PASSWORD TEXT,
        PHONENUMBER TEXT,
        MEMBERSHIPNUMBER TEXT,
        ACTIVE INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT
    );
`);

console.log("✔ User ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PATIENTS (
        ID TEXT PRIMARY KEY,
        PATIENTCODE TEXT,
        IMAGE TEXT,
        NAME TEXT,
        LASTNAME TEXT,
        IDCARD TEXT,
        BIRTHDATE TEXT,
        GENDER TEXT,
        PHONENUMBER TEXT,
        EMAIL TEXT,
        ADDRESS TEXT,
        EMERGENCYCONTACTNAME TEXT,
        EMERGENCYCONTACTPHONE TEXT,
        MARITALSTATUS TEXT,
        ACTIVE TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT
    );
`);

console.log("✔ Patient ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS DISEASES (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        DESCRIPTION TEXT
    );
`);

console.log("✔ Disease ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PATIENTDISEASES (
        ID TEXT PRIMARY KEY,
        PATIENTID TEXT,
        DISEASEID TEXT,
        OBSERVATIONS TEXT
    );
`);

console.log("✔ PatientDisease ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS DENTALCHARTS (
        ID TEXT PRIMARY KEY,
        PATIENTID TEXT,
        EVALUATIONDATE TEXT,
        DENTISTID TEXT,
        OBSERVATIONS TEXT
    );
`);

console.log("✔ DentalChart ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS DENTALCHARTDETAILS (
        ID TEXT PRIMARY KEY,
        DENTALCHARTID TEXT,
        TOOTHNUMBER INTEGER,
        FACE TEXT,
        TOOTHSTATUS TEXT,
        NOTES TEXT
    );
`);

console.log("✔ DentalChartDetail ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS TREATMENTCATALOGS (
        ID TEXT PRIMARY KEY,
        CODE TEXT,
        NAME TEXT,
        DESCRIPTION TEXT,
        BASEPRICE INTEGER,
        ESTIMATEDDURATIONMINUTES TEXT,
        ACTIVE INTEGER
    );
`);

console.log("✔ TreatmentCatalog ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS TREATMENTPLANS (
        ID TEXT PRIMARY KEY,
        PATIENTID TEXT,
        DENTISTID TEXT,
        CODE TEXT,
        STATUS TEXT,
        TOTALAMOUNT INTEGER,
        DISCOUNT INTEGER,
        CREATEDAT TEXT
    );
`);

console.log("✔ TreatmentPlan ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS TREATMENTPLANDETAILS (
        ID TEXT PRIMARY KEY,
        PLANID TEXT,
        TREATMENTID TEXT,
        TOOTHNUMBER INTEGER,
        QUANTITY INTEGER,
        UNITPRICE INTEGER,
        SUBTOTAL INTEGER,
        STATUS TEXT
    );
`);

console.log("✔ TreatmentPlanDetail ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CLINICALPROGRESS (
        ID TEXT PRIMARY KEY,
        PATIENTID TEXT,
        DATEID TEXT,
        DENTISTID TEXT,
        DIAGNOSIS TEXT,
        TREATMENTID TEXT,
        OBSERVATIONS TEXT,
        REGISTRATIONDATE TEXT
    );
`);

console.log("✔ ClinicalProgres ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS MEDICALPRESCRIPTIONS (
        ID TEXT PRIMARY KEY,
        PATIENTID TEXT,
        DENTISTID TEXT,
        DATE TEXT,
        GENERALINSTRUCTIONS TEXT
    );
`);

console.log("✔ MedicalPrescription ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS MEDICALPRESCRIPTIONDETAILS (
        ID TEXT PRIMARY KEY,
        MEDICALPRESCRIPTIONID TEXT,
        MEDICINE TEXT,
        DOSE TEXT,
        FREQUENCY TEXT,
        DURATION TEXT
    );
`);

console.log("✔ MedicalPrescriptionDetail ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PATIENTATTACHMENTS (
        ID TEXT PRIMARY KEY,
        PATIENTID TEXT,
        FILETYPE TEXT,
        FILEURL TEXT,
        FILENAME TEXT,
        DESCRIPTION TEXT,
        UPLOADEDBY TEXT,
        CREATEDAT TEXT
    );
`);

console.log("✔ PatientAttachment ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS INVOICES (
        ID TEXT PRIMARY KEY,
        PATIENTID TEXT,
        TREATMENTPLANID TEXT,
        INVOICENUMBER TEXT,
        TOTALAMOUNT INTEGER,
        PAIDAMOUNT INTEGER,
        PENDINGAMOUNT INTEGER,
        STATUS TEXT
    );
`);

console.log("✔ Invoice ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PAYMENTS (
        ID TEXT PRIMARY KEY,
        INVOICE_ID TEXT,
        AMOUNT INTEGER,
        PAYMENT_METHOD TEXT,
        TRANSACTION_REFERENCE TEXT,
        SERVED_BY TEXT,
        PAYMENT_DATE TEXT,
        INSTALLMENT_ID TEXT
    );
`);

console.log("✔ Payment ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS SUPPLIERS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        CONTACT TEXT,
        PHONE TEXT,
        EMAIL TEXT
    );
`);

console.log("✔ Supplier ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PRODUCTS (
        ID TEXT PRIMARY KEY,
        BARCODE TEXT,
        NAME TEXT,
        DESCRIPTION TEXT,
        CATEGORY_ID TEXT,
        MEASUREMENT_UNIT_ID TEXT
    );
`);

console.log("✔ Product ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CATEGORIES (
        ID TEXT PRIMARY KEY,
        NAME TEXT
    );
`);

console.log("✔ Category ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS MEASUREMENTUNITS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        ABREVIATION TEXT
    );
`);

console.log("✔ MeasurementUnit ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS INVENTORYLOTES (
        ID TEXT PRIMARY KEY,
        PRODUCTID TEXT,
        SUPPLIERID TEXT,
        LOTENUMBER TEXT,
        QUANTITY INTEGER,
        DUEDATE TEXT,
        ENTRYDATE TEXT
    );
`);

console.log("✔ InventoryLote ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS INVENTORIES (
        ID TEXT PRIMARY KEY,
        PRODUCTID TEXT,
        CURRENTSTOCK INTEGER,
        MINIMUMSTOCK INTEGER
    );
`);

console.log("✔ Inventory ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS INVENTORYMOVEMENTS (
        ID TEXT PRIMARY KEY,
        PRODUCTID TEXT,
        TYPE TEXT,
        QUANTITY INTEGER,
        USERID TEXT,
        OBSERVATION TEXT
    );
`);

console.log("✔ InventoryMovement ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PAYMENTPLANS (
        ID TEXT PRIMARY KEY,
        INVOICEID TEXT,
        TOTALAMOUNT INTEGER,
        NUMBEROFINSTALLMENTS INTEGER,
        FREQUENCYDAYS INTEGER,
        INTERESTRATE INTEGER,
        LATEFREEPERCENTAGE INTEGER,
        GRACEPERIODDAYS INTEGER,
        STATUS TEXT
    );
`);

console.log("✔ PaymentPlan ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS INSTALLMENTS (
        ID TEXT PRIMARY KEY,
        PAYMENTPLANID TEXT,
        INSTALLMENTNUMBER INTEGER,
        DUEDATE TEXT,
        AMOUNT INTEGER,
        LATEFEEAMOUNT INTEGER,
        PAIDAMOUNT INTEGER,
        STATUS TEXT
    );
`);

console.log("✔ Installment ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PAYMENTNOTIFICATIONS (
        ID TEXT PRIMARY KEY,
        INSTALLMENTID TEXT,
        PATIENTID TEXT,
        SCHEDULEDDATE TEXT,
        SENDAT TEXT,
        NOTIFICATIONTYPE TEXT,
        CHANNEL TEXT,
        STATUS TEXT
    );
`);

console.log("✔ PaymentNotification ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS APPOINTMENTS (
        ID TEXT PRIMARY KEY,
        PATIENTID TEXT,
        DENTISTID TEXT,
        STARTAPPOINTMENTTIME TEXT,
        ENDAPPOINTMENTTIME TEXT,
        REASON TEXT,
        STATUS TEXT,
        CANCELATIONNOTES TEXT,
        REMINDERSENT INTEGER,
        CREATEDAT TEXT
    );
`);

console.log("✔ Appointment ready");


  } catch (error) {
    console.error("Database init error:", error);
  } finally {
    await db.close();
  }
}