"use client"
import styles from "./styles.module.scss"
import React , {useState} from "react"
import HSButton from "@/shared/components/hs-button/hs-btn"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import HSDangerousComponent from "@/shared/components/hs-dangerous-component/hs-dangerous-component"
import "material-icons/iconfont/material-icons.scss"
import LottiePlayer from "@/shared/components/hs-lottie-player/hs-lottie-player"
import screensaverLottie from "@/public/lottie-files/Screensaver BG.json"

import UserLinks from "@/shared/components/hs-user-links/hs-user-links"

import {
  customRegexValidation,
  isValidAlphabeticString,
  isValidAlphanumericString,
  isValidCreditCard,
  isValidNumericRange,
  isValidStringLength,
  isValidDate,
} from "@/shared/utils/valitation"
// import ItemCard from "@/shared/components/hs-item-card/hs-item-card"
import TileCard from "@/shared/components/hs-tile-component/hs-tile-component"
import HSItemList from "@/shared/components/hs-item-list/hs-item-list"

export default function AllComponents() {
  const [list] = useState([{ name: "Organic Tomato", qty: 1, price: "$2" }, { name: "Mix Vegetable Pickle Organic Pickle Homemade.", qty: 1, price: "$2" }])
  const [inputValue, setInputValue] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [inputStringValue, setInputStringValue] = useState("")
  const [isStringValid, setIsValidStringLength] = useState(true)
  const [inputAlphabeticStringValue, setAlphabeticInputValue] = useState("")
  const [isAlphabeticStringValid, setIsValidAlphabetic] = useState(true)
  const [InputAlphanumericValue, setInputAlphanumericValue] = useState("")
  const [isValidAlphanumericValue, setIsValidAlphanumericValue] =
    useState(true)
  const [regexInputValue, setRegexInputValue] = useState("")
  const [isValidRegex, setIsValidRegex] = useState(true)
  const [creditCardNumber, setCreditCardNumber] = useState("")
  const [isValidCreditCardNumber, setIsValidCreditCardNumber] = useState(true)
  const [dateInputValue, setDateValue] = useState("")
  const [dateValid, setIsDateValid] = useState(true)

  const handleChange = (e: any) => {
    const value = Number(e.target.value)

    // Define your numeric range (e.g., 1 to 100)
    const minRange = 1
    const maxRange = 100

    // Check if the input falls within the numeric range
    const isValidInput = isValidNumericRange(value, minRange, maxRange)

    setIsValid(isValidInput)
    setInputValue(e.target.value)
  }
  const handleStringChange = (e: any) => {
    const input = e.target.value

    // Define your string length range (e.g., 3 to 15)
    const minLength = 3
    const maxLength = 15

    // Check if the input length falls within the specified range
    const isValidString = isValidStringLength(input, minLength, maxLength)

    setIsValidStringLength(isValidString)
    setInputStringValue(e.target.value)
  }
  const handleAlphabeticChange = (e: any) => {
    const stringValue = e.target.value

    // Check if the input contains only alphabetic characters
    const isValidAlphabetic = isValidAlphabeticString(stringValue)
    setIsValidAlphabetic(isValidAlphabetic)
    setAlphabeticInputValue(stringValue)
  }

  const handleAlphnumericChange = (e: any) => {
    const alphanumericValue = e.target.value

    // Check if the input contains only alphabetic characters
    const isValidAlphanumericValue =
      isValidAlphanumericString(alphanumericValue)

    setIsValidAlphanumericValue(isValidAlphanumericValue)
    setInputAlphanumericValue(alphanumericValue)
  }

  const handleCustomValidationChange = (e: any) => {
    const regexValue = e.target.value

    // Define your custom regular expression
    const customRegex = /^[a-zA-Z0-9*%]+$/

    // Check if the input matches the custom regular expression
    const isValidRegexInput = customRegexValidation(regexValue, customRegex)

    setIsValidRegex(isValidRegexInput)
    setRegexInputValue(regexValue)
  }

  const handleCreditCardValidationChange = (e: any) => {
    const creditCardvalue = e.target.value

    // Check if the entered credit card number is valid
    const isValidCreditCardNumber = isValidCreditCard(creditCardvalue)

    setIsValidCreditCardNumber(isValidCreditCardNumber)
    setCreditCardNumber(creditCardvalue)
  }

  const handleDateChange = (e:any) => {
    const datevalue = e.target.value
    setDateValue( datevalue)

    // Validate the date format
    const isDateValid = isValidDate( datevalue)
    setIsDateValid(isDateValid)

  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.atoms}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Button</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <HSButton
              variant="contained"
              color="primary"
              onClick={() => console.log("test button")}
            >
              Click!
            </HSButton>

            <HSButton variant="outlined" startIcon={<span className="material-icons-round">help</span>}>
              Click!
            </HSButton>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Lottie</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lottie component example
            <LottiePlayer
              // pass the required lottie file to animationData
              animationData={screensaverLottie}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Dangerous Component</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <HSDangerousComponent data="<script>alert('This is Dangerous HTML');</script>" />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>SCSS Variable Usage</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.test}>
              <p className={styles.primary18WNormalBlack2}>
                This is a sample test to test the scss variables and mixins.
              </p>
              <p className={styles.secondary28W600White3}>
                This is a sample test to test the scss variables and mixins.
              </p>
              <p className={styles.primary32W600Orange1}>
                This is a sample test to test the scss variables and mixins.
              </p>
              <p className={styles.mixinExample}>
                This is a sample test to test the scss variables and mixins.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>All Material Icons css class examples</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.icons}>
              Filled Icon:<span className="material-icons">account_circle</span>
              Round Icon:<span className="material-icons-round">account_circle</span>
              Outlined Icon:<span className="material-icons-outlined">account_circle</span>
              Sharp Icon:<span className="material-icons-sharp">account_circle</span>
              Two-tone Icon:<span className="material-icons-two-tone">account_circle</span>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>All icons in with *-round css class.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.icons}>
              <span className="material-icons">search</span>
              <span className="material-icons-round">accessibility_new</span>
              <span className="material-icons-round">language</span>
              <span className="material-icons-round">account_circle</span>
              <span className="material-icons-round">help</span>
              <span className="material-icons-round">volume_up</span>
              <span className="material-icons-round">volume_off</span>
              <span className="material-icons-round">volume_down</span>
              <span className="material-icons-round">close</span>
              <span className="material-icons-round">arrow_right_alt</span>
              <span className="material-icons-round">backspace</span>
              <span className="material-icons-round">credit_card</span>
              <span className="material-icons-round">payments</span>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>UserLinks Component</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h3>UserLinks Component with icons</h3>
            <UserLinks
              displayIcons={true}
              accessibilityClickEvent={() => console.log("1st link clicked")}
              languageClickEvent={() => console.log("2nd link clicked")}
              accountClickEvent={() => console.log("3rd link clicked")}
            />

            <h3>UserLinks Component without Icons</h3>
            <UserLinks
              accessibilityClickEvent={() => console.log("1st link clicked")}
              languageClickEvent={() => console.log("2nd link clicked")}
              accountClickEvent={() => console.log("3rd link clicked")}
            />

            <h3>UserLinks Component with Icons and overridden css</h3>
            <UserLinks
              displayIcons={true}
              accessibilityClickEvent={() => console.log("1st link clicked")}
              languageClickEvent={() => console.log("2nd link clicked")}
              accountClickEvent={() => console.log("3rd link clicked")}
              styles={{
                fontSize: "3em",
                color: "pink",
              }}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Item Card Example</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.itemsList}>
              Check /examples/all-components/page.tsx for example
              {/* This is an example to showcase network image. */}
              {/* <ItemCard imgPath="" altText='Casual Shoes' height={100} width={100} name='Casual Shoes' price='$200' /> */}
              {/* This is an example to showcase downloaded asset image. */}
              {/* <ItemCard imgPath="/images/pineapple.jpg" altText='A Pineapple' height={100} width={100} name='A Pineapple' price='$20' /> */}
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Tile cards</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.cards}>
              {/* This is an example to display the tile card. */}
              <TileCard
                title='Yes'
                body='Use own bags'
                onClick={() => console.log("Yes was cicked")}
              />

              {/* This is an example to display the tile card and override the css manually.*/}
              <TileCard
                title='No'
                body='Take from bagging area'
                onClick={() => console.log("No was cicked")}
                style={
                  {
                    "fontSize": "18px",
                    "color": "pink"
                  }
                }
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>List Component</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {list.map((item, index) => {
              return (
                <HSItemList key={index} itemName={item.name} quantity={item.qty} price={item.price}/>)
            })}
          </AccordionDetails >
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Validation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography>1. Numeric Range Validation</Typography>
              <br></br>
              <label htmlFor="numericInput">Numeric Input:</label>
              <input
                type="number"
                id="numericInput"
                value={inputValue}
                onChange={handleChange}
              />
              {!isValid && (
                <p style={{ color: "red" }}>
                  Please enter a number between 1 and 100.
                </p>
              )}
            </div>
            <div>
              <br></br>
              <Typography>2. String Length Validation</Typography>
              <br></br>
              <label htmlFor="stringInput">String Input:</label>
              <input
                type="text"
                id="stringInput"
                value={inputStringValue}
                onChange={handleStringChange}
              />

              {!isStringValid && (
                <p style={{ color: "red" }}>
                  Please enter a string with a length between 3 and 15
                  characters.
                </p>
              )}
            </div>
            <div>
              <br></br>
              <Typography>3. Alphabetic Validation</Typography>
              <br></br>
              <label htmlFor="alphabeticInput">Alphabetic Input:</label>
              <input
                type="text"
                id="alphabeticInput"
                value={inputAlphabeticStringValue}
                onChange={handleAlphabeticChange}
              />
              {!isAlphabeticStringValid && (
                <p style={{ color: "red" }}>
                  Please enter a string with only alphabetic characters.
                </p>
              )}
            </div>
            <div>
              <br></br>
              <Typography>4. Alphnumeric Validation</Typography>
              <br></br>
              <label htmlFor="alphabeticInput">Input:</label>
              <input
                type="text"
                id="alphanumericInput"
                value={InputAlphanumericValue}
                onChange={handleAlphnumericChange}
              />
              {!isValidAlphanumericValue && (
                <p style={{ color: "red" }}>
                  Please enter a string with only alphanumeric characters.
                </p>
              )}
            </div>
            <div>
              <br></br>
              <Typography>5. Custom Regex Validation</Typography>
              <br></br>
              <label htmlFor="customValidationInput">
                Custom Validation Input:
              </label>
              <input
                type="text"
                id="customValidationInput"
                value={regexInputValue}
                onChange={handleCustomValidationChange}
              />

              {!isValidRegex && (
                <p style={{ color: "red" }}>
                  Please enter a string with only alphanumeric
                  characters(custom).
                </p>
              )}
            </div>
            <div>
              <br></br>
              <Typography>6. Credit Card Validation</Typography>
              <br></br>
              <label htmlFor="creditCardInput">Credit Card Number:</label>
              <input
                type="text"
                id="creditCardInput"
                value={creditCardNumber}
                onChange={handleCreditCardValidationChange}
              />

              {!isValidCreditCardNumber && (
                <p style={{ color: "red" }}>
                  Please enter a valid credit card number.
                </p>
              )}
            </div>

            <div>
              <br></br>
              <Typography>7. Date Validation</Typography>
              <br></br>
              <label htmlFor="dateInput">Date:</label>
              <input
                type="text"  // Use text type to allow custom date formats, adjust based on your needs
                id="dateInput"
                placeholder="mm/dd/yyyy"
                value={dateInputValue}
                onChange={handleDateChange}
              />
              {!dateValid && (
                <p style={{ color: "red" }}>Please enter a valid date in the format MM/DD/YYYY.</p>
              )}
            </div>
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  )
}
