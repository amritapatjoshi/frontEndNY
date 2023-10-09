import { parse, isValid } from "date-fns"

/* Function to validate the Alphabetic String */
export function isValidAlphabeticString(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value)
}

/* Function to validate the Length of the String */
export function isValidStringLength(
  value: string,
  minLength: number,
  maxLength: number
): boolean {
  /*Function takes a value (string), minLength, and maxLength as parameters and 
  returns true if the length of the string falls within the specified range.*/
  const length: number = value.trim().length
  return length >= minLength && length <= maxLength
}

/* Function to validate the Alphanumeric String */
export function isValidAlphanumericString(input: string) :boolean {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/

  // Check if the input contains only alphanumeric characters
  return alphanumericRegex.test(input)
}

/* Function to validate the Credit card Number */
export function isValidCreditCard(creditCardNumber: string): boolean {

  // Remove spaces and non-numeric characters
  const cleanedNumber = creditCardNumber.replace(/\D/g, "")
  
  // Check if the cleaned number is a valid credit card number
  if (/[^0-9-\s]+/.test(cleanedNumber)) return false

  // Perform Luhn algorithm (checksum) validation
  let sum = 0
  let doubleUp = false

  cleanedNumber
    .split("")
    .reverse()
    .forEach((char) => {
      let digit = parseInt(char, 10)

      if (doubleUp) {
        digit *= 2
        if (digit > 9) {
          digit -= 9
        }
      }

      sum += digit
      doubleUp = !doubleUp
    })

  return sum % 10 === 0
}

/* Function to validate the Numeric Range */
export function isValidNumericRange(
  value: number,
  min: number,
  max: number
): boolean {
  return value >= min && value <= max
}

/* Function to validate the Date & Time */
export function isValidDateTime(input: string): boolean {
  // Customize the format according to your needs
  const format = "yyyy-MM-dd HH:mm"

  // Attempt to parse the input date time
  const parsedDate = parse(input, format, new Date())

  // Check if the parsed date is valid
  return isValid(parsedDate)
}

/* Function to validate the Custom Regex String Provided in the Parameter */
export function customRegexValidation(value: string, regex: RegExp): boolean {
  return regex.test(value)
}