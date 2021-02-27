import React from "react"

type ChildElement = {
  props: {
    __TYPE: string
    children: React.ReactNode
  }
}

export const getChildByType = (
  children: ChildElement[],
  type: string
): React.ReactNode => {
  const component = React.Children.map(children, (child: ChildElement) => {
    const isMatchingType = child.props.__TYPE === type ? child : ""
    return isMatchingType
  })

  return component
}
