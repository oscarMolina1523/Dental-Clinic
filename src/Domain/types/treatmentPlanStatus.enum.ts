//estos estados funcionan de la siguiente manera,  primero el DRAFT que es el borrador
//es cuando el doctor o asistente estan armando la propuesta en la compu
//luego pasa a PROPOSED  que es cuando se le manda al cliente en propuesat
//si el cliente acepta pasa a ACCEPTED
//cuando el tratamiento se empieza entonces se pone IN_PROGRESS porque normalmente lo tratamientos llevan dias
//y cuando al fin se termina de aplicar el tratamiento entonces se pasa a COMPLETED
//el CANCELLED sirve para cuando el paciente decide no continuar o cosas como que 
//se cambio de ciudad o el doctor decidio no continuar por temas de salud
export enum TreatmentPlanStatus {
  DRAFT = "DRAFT", //borrador
  PROPOSED = "PROPOSED", //propuesat
  ACCEPTED = "ACCEPTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}


export enum TreatmentPlanDetailStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}