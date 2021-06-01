import React from "react"
import { useIsHovered } from "@src/components"
import { Text } from "@chakra-ui/react"

export const TextWithHover: React.FC = () => {
  const context = useIsHovered()
  if (context !== null) {
    const isHovered = context

    return <Text> Hover state {isHovered.toString()}</Text>
  }

  return null
}
