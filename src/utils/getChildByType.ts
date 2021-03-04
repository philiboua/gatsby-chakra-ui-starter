import React from "react"
import { SlicesType } from "@src/components"

type ChildElement = {
  props: {
    __TYPE: SlicesType
    children: React.ReactNode
  }
}

export const getChildByType = (
  children: ChildElement[] | ChildElement,
  type: string
): React.ReactNode => {
  const component = React.Children.toArray(children).find(child =>
    React.isValidElement<{ __TYPE: SlicesType }>(child)
      ? child.props.__TYPE === type
      : ""
  )

  return component
}
