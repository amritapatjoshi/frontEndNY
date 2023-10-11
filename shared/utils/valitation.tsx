import validator from "validator"

/* Function to validate the Alphabetic String */
export function isValidAlphabeticString(value: string): boolean {
  const isValidAlpha = validator.isAlpha(value)
  return isValidAlpha
}

/* Function to validate the Length of the String */
export function isValidStringLength(
  value: string,
  minLength: number,
  maxLength: number
): boolean {
  // Check if the entered text has a valid length
  const isValidLength = validator.isLength(value, { min: minLength, max: maxLength })
  return isValidLength
}

/* Function to validate the Alphanumeric String */
export function isValidAlphanumericString(input: string) :boolean {
  // Check if the input contains only alphanumeric characters
  const isValidAlphanumeric = validator.isAlphanumeric(input)
  return isValidAlphanumeric
}

/* Function to validate the Numeric Range */
export function isValidNumericRange(
  newNumber: string,
  min: number,
  max: number
): boolean {
  const isNumeric = validator.isNumeric(newNumber)
  // Check if the entered number is within the desired range
  const isInRange = isNumeric && Number(newNumber) >= min && Number(newNumber) <= max
  return isInRange
}

/* Function to validate the Custom Regex String Provided in the Parameter */
export function customRegexValidation(value: string, regex: RegExp): boolean {
  // Check if the entered text matches the custom regex pattern
  const isValidCustomRegex = validator.matches(value, regex)
  return isValidCustomRegex
}

/* Function to validate the Date & Time */
export function isValidDate (dateString:any, format:any) {
  const isValidFormat = validator.isDate(dateString, { format, strictMode: true })
  return isValidFormat

}

/* Function to validate the Credit card Number */
export function isCreditCardValid (creditCardNumber: string): boolean {
  return validator.isCreditCard(creditCardNumber)
}