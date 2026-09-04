export interface InventoryLoteDto {
  productId: string;
  productName: string;
  supplierId: string;
  loteNumber: string;
  quantity: number;
  dueDate: Date | null;
  entryDate: Date;
}
