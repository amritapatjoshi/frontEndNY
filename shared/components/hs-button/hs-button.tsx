import * as React from "react"
import Button, { ButtonProps } from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import styles from "./hs-button.module.scss"

interface IButtonProps extends ButtonProps {
    // Add custom prop components
}

const CustomButton = styled(Button) ({
  borderRadius: "46px",
  height: "79px",
  letterSpacing: 0,
  fontSize: "32px",
  fontWeight: 600,
  padding: "0 40px",
  textAlign: "left",
  lineHeight: "1.5",
})

export default function HSButton({ children, ...props }: IButtonProps) {
  return (
    <>
      <CustomButton size="large" className={styles.customTheme} {...props}>
        {children}
      </CustomButton>
    </>
  )
}
