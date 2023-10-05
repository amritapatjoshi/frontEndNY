import React from 'react'
import styles from './multiButton.module.scss';
import "material-icons/iconfont/material-icons.css"

interface MultiLinksProps {
    displayIcons?: boolean,
    clickEventOne?: () => void,
    clickEventTwo?: () => void,
    clickEventThree?: () => void,
    styles?:object
}

function MultiLinks(props: MultiLinksProps) {
    return (
        <div className={styles.theComp} style={props.styles}>
            <div onClick={props.clickEventOne}>
                <span className={props.displayIcons ? `material-icons-outlined`: styles.hidden}>accessible</span>
                <p>Accessbility</p>
            </div>
            <div onClick={props.clickEventTwo}>
                <span className={props.displayIcons ? `material-icons-outlined`: styles.hidden}>language</span>
                <p>Change Language</p>
            </div>
            <div onClick={props.clickEventThree}>
                <span className={props.displayIcons ? `material-icons-outlined`: styles.hidden}>account_circle</span>
                <p>Member Login</p>
            </div>
        </div>
    )
}

export default MultiLinks