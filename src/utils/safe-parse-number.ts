export default function safeParseNumber(value: any) {
  // Check if the value is undefined, null, or a non-numeric string
  if (value === undefined || value === null || isNaN(Number(value))) {
    return 0;
  }

  // Try to parse the number
  const parsedValue = parseFloat(value);

  // Return 0 if the parsed value is NaN, otherwise return the parsed value
  return isNaN(parsedValue) ? 0 : parsedValue;
}
