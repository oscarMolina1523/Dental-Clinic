import BaseModel from "./base.model";

export default class Role extends BaseModel {
  name: string;
  description: string;
  createdAt: Date;

  constructor({
    id,
    name,
    description,
    createdAt,
  }: {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
  }) {
    super(id);
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
  }
}
