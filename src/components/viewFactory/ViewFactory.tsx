import React from "react"

interface ViewFactoryProps {
  type: string
  views: { [key: string]: React.ReactElement }
}

export const ViewFactory: React.FC<ViewFactoryProps> = ({ type, views }) => {
  const UI = views[type]
  if (UI !== undefined) {
    return UI
  }

  return null
}
