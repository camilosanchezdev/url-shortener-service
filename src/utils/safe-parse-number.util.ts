export default function safeParseNumberUtil(value: any, defaultValue = 0) {
  if (value === undefined || value === null || isNaN(Number(value))) {
    return defaultValue;
  }

  const parsedValue = parseFloat(value);

  return isNaN(parsedValue) ? defaultValue : parsedValue;
}
