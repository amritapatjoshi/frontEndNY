/* Function to validate the Alphabetic String */
export function isValidateAlphabeticString(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}

/* Function to validate the Length of the String */
export function isValidateStringLength(
  value: string,
  minLength: number,
  maxLength: number
): boolean {
  const length: number = value.trim().length;
  return length >= minLength && length <= maxLength;
}

/* Function to validate the Alphanumeric String */
export function isValidateAlphanumericString(input: string) {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(input);
}

/* Function to validate the Credit card Number */
export function isValidateCreditCard(creditCardNumber: string): boolean {
  const cleanedNumber = creditCardNumber.replace(/\D/g, "");

  if (/[^0-9-\s]+/.test(cleanedNumber)) return false;

  let sum = 0;
  let doubleUp = false;

  for (let i = cleanedNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedNumber.charAt(i), 10);

    if (doubleUp) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    doubleUp = !doubleUp;
  }

  return sum % 10 === 0;
}

/* Function to validate the Numeric Range */
export function isValidateNumericRange(
  value: number,
  min: number,
  max: number
): boolean {
  return value >= min && value <= max;
}

/* Function to validate the Date & Time */
export function isValidateDateTime(dateTimeString: string): boolean {
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;

  if (!dateTimeRegex.test(dateTimeString)) {
    return false;
  }

  const parsedDateTime = new Date(dateTimeString);

  return !isNaN(parsedDateTime.getTime()) && parsedDateTime > new Date();
}

/* Function to validate the Custom Regex String Provided in the Parameter */
export function customRegexValidation(value: string, regex: RegExp): boolean {
  return regex.test(value);
}
