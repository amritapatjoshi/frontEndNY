"use client"
import React from "react"
import styles from "./hs-tile-component.module.scss"

interface ITileCardProps {
  title: string,
  body: string,
  onClick?: () => void,
  style?: object,
}

function TileCard(props: ITileCardProps) {

  return (
    <>
      <div className={styles.tileCard} onClick={props.onClick} style={props.style}>
        <div className={styles.cardTitle}>
          {props.title}
        </div>
        <div className={styles.cardBody}>
          {props.body}
        </div>
      </div>
    </>
  )
}

export default TileCard