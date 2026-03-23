export const getDayNames = (days: string | number): string => {
  const dayMap: Record<string, string> = {
    "1": "Lun",
    "2": "Mar",
    "3": "Mié",
    "4": "Jue",
    "5": "Vie",
    "6": "Sáb",
    "7": "Dom",
  }

  // Convertimos a string por si viene como número y separamos cada dígito
  return days
    .toString()
    .split("")
    .map((d) => dayMap[d])
    .filter(Boolean) // Por si viene un caracter que no está en el mapa
    .join(", ")
}
