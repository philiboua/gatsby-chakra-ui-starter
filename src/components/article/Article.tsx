import React from "react"

import { Text, TextTypeOptions } from "@src/components"
import { VStack, Box, BoxProps } from "@chakra-ui/react"

type ArticleType = {
  type: TextTypeOptions
  content: string
}

export interface ArticleProps extends BoxProps {
  /**
   * Array of Article Type
   */
  data?: ArticleType[]
  /**
   * Center the content inside the component
   */
  centerContent?: boolean
  /**
   * Defines the space between element. The `VStack` from Chakra UI is used to display the content.
   */
  spacing?: number
}

export const Article: React.FC<ArticleProps> = ({
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
          ? data.map((text: ArticleType) => {
              return (
                <Text key={text.content} type={text.type}>
                  {text.content}
                </Text>
              )
            })
          : children}
      </VStack>
    </Box>
  )
}
