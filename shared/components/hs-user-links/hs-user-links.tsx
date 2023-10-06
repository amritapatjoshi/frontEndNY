import React from "react"
import styles from "./hs-user-links.module.scss"
import "material-icons/iconfont/material-icons.css"
import textConfig from "@/shared/config/text-config"

interface IUserLinksProps {
    displayIcons?: boolean,
    accessibilityClickEvent?: () => void,
    languageClickEvent?: () => void,
    accountClickEvent?: () => void,
    styles?:object
}

function UserLinks(props: IUserLinksProps) {
  return (
    <div className={styles.userLinksWrapper} style={props.styles}>
      <div onClick={props.accessibilityClickEvent}>
        <span className={props.displayIcons ? "material-icons-outlined": styles.hidden}>accessible</span>
        <p>{textConfig.userLinks.accessbility}</p>
      </div>
      <div onClick={props.languageClickEvent}>
        <span className={props.displayIcons ? "material-icons-outlined": styles.hidden}>language</span>
        <p>{textConfig.userLinks.language}</p>
      </div>
      <div onClick={props.accountClickEvent}>
        <span className={props.displayIcons ? "material-icons-outlined": styles.hidden}>account_circle</span>
        <p>{textConfig.userLinks.account}</p>
      </div>
    </div>
  )
}

export default UserLinks
