import React from "react"

interface ViewFactoryProps {
  type: string
  views: { [key: string]: React.ReactElement }
}

export const ViewFactory: React.FC<ViewFactoryProps> = ({
  children,
  type,
  views,
}) => {
  const UI: React.ReactElement = views[type]

  if (UI !== undefined) {
    const newComponent = React.cloneElement(UI, {
      slices: React.Children.toArray(children),
    })
    return newComponent
  }

  return null
}
