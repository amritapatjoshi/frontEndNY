"use client"
import * as React from "react"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import styles from "./hs-item-list.module.scss"
import IProps from "./hs-item-list-interface"

export default function HSItemList(props: IProps) {
  const { itemName, quantity, price } = props
  return (
    <Box>
      <List>
        <div className={styles.listContainer}>
          <div className={styles.name}>{itemName}</div>
          <div className={styles.listData}>{quantity}</div>
          <div className={styles.listData}>{price}</div>
        </div>
        <div className={styles.listBorder}/>
      </List>
    </Box>
  )
}
