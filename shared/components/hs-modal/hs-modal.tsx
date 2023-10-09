import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"

interface IProps {
    width ?: string;
    height ?: string;
    children ?: React.ReactNode;
    handleClose ?: () => void;
    open : boolean;
}

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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.children}
        </Box>
      </Modal>
    </>
  )
}
