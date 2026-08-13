export interface InventoryLoteDto {
  productId: string;
  supplierId: string;
  loteNumber: string;
  quantity: number;
  dueDate: Date;
  entryDate: Date;
}
