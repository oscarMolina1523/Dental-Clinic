export enum PaymentPlanStatus {
  PENDING = "PENDING", //el plan ya fue creado pero aun no empiezana cobrar
  ACTIVE = "ACTIVE", //ya comenzaron las cuotas
  IN_ARREARS = "IN_ARREARS", //se encuentra en mora
  COMPLETED = "COMPLETED", //ya se pagaron todas
  CANCELLED = "CANCELLED" //se cancelo el plan
}