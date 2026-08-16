export interface CodeGeneratorOptions {
  prefix?: string;            // Ej: "TRT", "PAT", "INV"
  textForInitials?: string[]; // Ej: ["Juan", "Pérez"] -> "JP"
  date?: Date | string;       // Genera fecha YYYYMMDD
  uniqueId?: string;          // Cédula, UUID, ID numérico, etc.
}

export function generateEntityCode({
  prefix,
  textForInitials,
  date,
  uniqueId,
}: CodeGeneratorOptions): string {
  const parts: string[] = [];

  //Prefijo opcional (ej: TRT)
  if (prefix) {
    parts.push(prefix.toUpperCase().trim());
  }

  //Iniciales de textos pasados (ej: Nombres, Nombre del Tratamiento)
  if (textForInitials && textForInitials.length > 0) {
    const initials = textForInitials
      .map((word) => word?.trim().charAt(0).toUpperCase() || "")
      .join("");
    if (initials) parts.push(initials);
  }

  // Fecha en formato YYYYMMDD
  if (date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    parts.push(`${year}${month}${day}`);
  }

  // Identificador único limpio (quita caracteres especiales)
  if (uniqueId) {
    const cleanId = uniqueId.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    parts.push(cleanId);
  }

  return parts.join("-");
}