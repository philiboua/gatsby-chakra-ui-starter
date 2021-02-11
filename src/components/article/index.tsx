import React from "react"

import { Text, TextProps } from "@src/components"
import { VStack, Box, BoxProps } from "@chakra-ui/react"

type CardTextContent = {
  content: string
}

export type CardData = CardTextContent & TextProps

export interface IArticle extends BoxProps {
  /**
   * Array of Objects. Each object must have the keys `type` and `content`
   */
  data?: CardData[]
  /**
   * Center the content inside the component
   */
  centerContent?: boolean
  /**
   * Defines the space between element. The `VStack` from Chakra UI is used to display the content.
   */
  spacing?: number
}

export const Article: React.FC<IArticle> = ({
  data,
  centerContent,
  spacing,
  children,
  ...props
}) => {
  return (
    <Box as="article" {...props}>
      <VStack
        flexGrow={1}
        spacing={spacing || 1}
        alignItems={centerContent ? "center" : "flex-start"}
      >
        {data
          ? data.map((text: CardData) => {
              return <Text type={text.type}>{text.content}</Text>
            })
          : children}
      </VStack>
    </Box>
  )
}

export default Article
