/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPatientAttachmentRepository } from "../../Domain/repositories/patientAttachmentRepository.interface";
import PatientAttachment  from "../../Domain/entities/patientAttachment";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PatientAttachmentRepository implements IPatientAttachmentRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<PatientAttachment[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<PatientAttachment | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: PatientAttachment) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: PatientAttachment): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: PatientAttachment): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
