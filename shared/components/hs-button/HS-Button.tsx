import * as React from "react"
import Button, { ButtonProps } from "@mui/material/Button"
import { styled } from "@mui/material/styles"

interface IButtonProps extends ButtonProps {
    // Add any custom prop components here
}

const StyledButton = styled(Button) ({
  borderRadius: "46px",
  height: "79px",
  letterSpacing: 0,
  fontSize: "32px",
  fontWeight: 600
})

export default function HSButton({ children, ...props }: IButtonProps) {
  return (
    <>
      <StyledButton {...props}>
        {children}
      </StyledButton>
    </>
  )
}
