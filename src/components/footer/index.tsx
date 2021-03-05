import React from "react"
import { getChildByType } from "@src/utils"

type FooterSlices = "body" | "header" | "footer"

export type FooterChildrenProps = {
  children:
    | {
        props: {
          __TYPE: FooterSlices
          children: React.ReactElement
        }
      }[]
    | {
        props: {
          __TYPE: FooterSlices
          children: React.ReactElement
        }
      }
}

type FooterPropsBase = FooterChildrenProps

export const Footer: React.FC<FooterPropsBase> = ({ children }) => {
  const sliceBody = getChildByType(children, "body")
  const sliceFooter = getChildByType(children, "footer")
  const sliceHeader = getChildByType(children, "header")

  return (
    <>
      {sliceHeader && sliceHeader}
      {sliceBody && sliceBody}
      {sliceFooter && sliceFooter}
    </>
  )
}
