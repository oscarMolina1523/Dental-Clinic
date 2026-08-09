import { container } from "tsyringe";
import { IRoleRepository } from "./../../Domain/repositories/roleRepository.interface";
import { RoleRepository } from "./../../Infrastructure/repositories/role.repository";
import { IRoleService } from "./../../Application/interfaces/role.service.interface";
import { RoleService } from "./../../Application/services/role.service";
import { RoleController } from "./../controllers/role.controller";
//builder, database connection and entity service

// AUTO-GENERATED MODULE REGISTRATIONS
// Role
container.register<IRoleRepository>("IRoleRepository", { useClass: RoleRepository });
container.register<IRoleService>("IRoleService", { useClass: RoleService });
container.register<RoleController>("RoleController", { useClass: RoleController });