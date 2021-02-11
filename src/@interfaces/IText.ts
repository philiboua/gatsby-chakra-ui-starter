import { TextProps } from "@chakra-ui/react"
import { HTMLMotionProps } from "framer-motion"

type FramerMotionProps =
  | HTMLMotionProps<"h1">
  | HTMLMotionProps<"h2">
  | HTMLMotionProps<"h3">
  | HTMLMotionProps<"p">
type ChakraTextProps = TextProps

type CustomTextProps = {
  /**
   * defines the styles to be displayed
   * values : headline.large | headline.medium | headline.small | introduction | body.medium | body.small | subtitle.medium | subtitle.small | caption | legal
   */
  type: string
}

export type IText = CustomTextProps & ChakraTextProps & FramerMotionProps
