import BaseModel from "./base.model";

export default class Disease extends BaseModel {
  name: string;
  description: string;

  constructor({
    id,
    name,
    description,
  }: {
    id: string;
    name: string;
    description: string;
  }) {
    super(id);
    this.name = name;
    this.description = description;
  }
}
