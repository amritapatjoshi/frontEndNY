import React from "react"
import xss from "xss"
import IProps from "./hs-dangerous-component-interface"

export default function HSDangerousComponent(props: IProps) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: xss(`${props.data}`) }} ></div>
    </>
  )
}
