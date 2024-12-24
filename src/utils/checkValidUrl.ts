export function isValidURL(url: string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return "URL no valida";
  }
}