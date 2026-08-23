import BaseModel from "./base.model";

export default class User extends BaseModel {
  roleId: string;
  fullName: string;
  image: string;
  email: string;
  password: string;
  phoneNumber: string;
  membershipNumber?: string;
  private active: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    roleId,
    fullName,
    image,
    email,
    password,
    phoneNumber,
    membershipNumber,
    active,
    createdAt,
    updatedAt,
  }: {
    id: string;
    roleId: string;
    fullName: string;
    image: string;
    email: string;
    password: string;
    phoneNumber: string;
    membershipNumber?: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }) {
    super(id);
    this.roleId = roleId;
    this.fullName = fullName;
    this.image = image;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.membershipNumber = membershipNumber;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getActive(): boolean {
    return this.active;
  }

  //activar un usuario
  activate(): void {
    this.active = true;
    this.updatedAt = new Date();
  }

  //desactivar un usuario
  deactivate(): void {
    this.active = false;
    this.updatedAt = new Date();
  }

  //comprobar si un usuario esta activo
  ensureActive(): void {
    if (!this.active) {
      throw new Error("El usuario está inactivo");
    }
  }

  //cambiar contraseña
  changePassword(passwordHash: string): void {
    this.password = passwordHash;
    this.updatedAt = new Date();
  }

  //cambiar email
  changeEmail(email: string): void {
    if (!email || !email.includes("@")) {
      throw new Error("El correo electrónico no es válido");
    }

    this.email = email;
    this.updatedAt = new Date();
  }

  //cambiar numero de telefono
  changePhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
    this.updatedAt = new Date();
  }

  //cambiar role del usuario
  changeRole(roleId: string): void {
    if (!roleId) {
      throw new Error("El usuario debe tener un rol");
    }

    this.roleId = roleId;
    this.updatedAt = new Date();
  }

  //para actualizar los datos del perfil
  updateProfile(
    fullName: string,
    phoneNumber: string,
    image?: string,
    membershipNumber?: string
  ): void {
    if (!fullName) {
      throw new Error("El nombre es obligatorio");
    }

    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.image = image ?? this.image;
    this.membershipNumber = membershipNumber;

    this.updatedAt = new Date();
  }
}
