import React from "react"
import styles from "./hs-user-links.module.scss"
import IUserLinksProps from "./hs-user-links-interface"
import "material-icons/iconfont/material-icons.css"
import textConfig from "@/shared/config/text-config"

function UserLinks(props: IUserLinksProps) {
  const data = textConfig.sharedComponents.userLinks

  return (
    <>
      <div className={styles.userLinksWrapper} style={props.styles}>
        <div onClick={props.accessibilityClickEvent}>
          <span className={props.displayIcons ? "material-icons-outlined" : styles.hidden}>accessible</span>
          <p>{data.accessbility}</p>
        </div>
        <div onClick={props.languageClickEvent}>
          <span className={props.displayIcons ? "material-icons-outlined" : styles.hidden}>language</span>
          <p>{data.language}</p>
        </div>
        <div onClick={props.accountClickEvent}>
          <span className={props.displayIcons ? "material-icons-outlined" : styles.hidden}>account_circle</span>
          <p>{data.account}</p>
        </div>
      </div>
    </>
  )
}

export default UserLinks
