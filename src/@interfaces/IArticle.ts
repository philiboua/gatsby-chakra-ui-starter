import { IText } from "@src/@interfaces"
import { BoxProps } from "@chakra-ui/react"

type CardTextContent = {
  content: string
}

export type CardData = CardTextContent & IText

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
