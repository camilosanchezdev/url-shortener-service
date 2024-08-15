export default function encodeObjectToBase64<T>(object: T): string {
  try {
    const jsonString = JSON.stringify(object);
    return btoa(jsonString);
  } catch (error) {
    return '';
  }
}
