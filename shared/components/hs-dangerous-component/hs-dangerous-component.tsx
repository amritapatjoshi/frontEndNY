import React from "react"
import DOMPurify from "isomorphic-dompurify"

interface IProps {
    data ?: string;
}

export default function HSDangerousComponent(props: IProps) {
  return (
    <>       
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(`${props.data}`) }} ></div>
    </>
  )   
}