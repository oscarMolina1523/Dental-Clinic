import BaseModel from "./base.model";

export default class Supplier extends BaseModel {
  name: string;
  contact: string;
  phone: string;
  email: string;

  constructor({
    id,
    name,
    contact,
    phone,
    email,
  }: {
    id: string;
    name: string;
    contact: string;
    phone: string;
    email: string;
  }) {
    super(id);
    this.name = name;
    this.contact = contact;
    this.phone = phone;
    this.email = email;
  }
}
