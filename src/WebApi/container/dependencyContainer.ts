import { container } from "tsyringe";
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