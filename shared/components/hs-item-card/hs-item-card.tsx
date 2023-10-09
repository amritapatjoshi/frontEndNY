import React, { useState } from "react"
import styles from "./hs-item-card.module.scss"
import Image from "next/image"

interface IItemCardProps {
  imgPath: string,
  altText: string,
  width?: number,
  height?: number,
  name: string,
  price: string,
  style?: object
}

function ItemCard(props: IItemCardProps) {

  const [isSelected, setIsSelected] = useState(false)

  const selectCard = () => {
    setIsSelected(!isSelected)
  }

  return (
    <>
      <div className={isSelected ? `${styles.itemCard} ${styles.selected}` : styles.itemCard} onClick={selectCard} style={props.style}>
        {/* Need to register the domain for fetching images in the next.config.js file.*/}
        <Image
          src={props.imgPath}
          width={props.width ? props.width : 100}
          height={props.height ? props.height : 100}
          alt={props.altText}
        />
        <div className={styles.itemName}>
          {props.name}
        </div>
        <div className={styles.itemPrice}>
          {props.price}
        </div>
      </div>
    </>
  )
}

export default ItemCard