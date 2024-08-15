export default function decodeBase64ToObject<T>(base64String: string): T | null {
  try {
    const jsonString = atob(base64String);
    return JSON.parse(jsonString) as T;
  } catch (error) {
    return null;
  }
}
