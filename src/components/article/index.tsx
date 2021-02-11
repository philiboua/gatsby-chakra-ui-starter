import React from "react"
import { IArticle, CardData } from "@src/@interfaces"
import { Text } from "@src/components"
import { VStack, Box } from "@chakra-ui/react"

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
