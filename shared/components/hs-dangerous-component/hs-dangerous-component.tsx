import React from "react"
import xss from "xss"

interface IProps {
    data ?: string;
}

export default function HSDangerousComponent(props: IProps) {
  return (
    <>       
      <div dangerouslySetInnerHTML={{ __html: xss(`${props.data}`) }} ></div>
    </>
  )   
}