import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import IProps from "./hs-modal-interface"

export default function HSModalComponent(props: IProps) {
  const style = {
    position: "fixed" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: props.width || "50%",
    height: props.height || "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius:"25px"
  }

  return (
    <>
      <Modal open={props.open ? true:false }
        onClose={props.handleClose}
      >
        <Box sx={style}>
          {props.children}
        </Box>
      </Modal>
    </>
  )
}
