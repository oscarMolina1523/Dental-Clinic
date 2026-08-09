import { container } from "tsyringe";
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