import React, { useContext } from "react"
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
  useTheme,
} from "@chakra-ui/react"
import { motion, HTMLMotionProps } from "framer-motion"
import { bgWithHightSaturation } from "@src/contexts"

export type TextTypeOptions =
  | "headline.large"
  | "headline.medium"
  | "headline.small"
  | "introduction"
  | "body.medium"
  | "body.small"
  | "subtitle.medium"
  | "subtitle.small"
  | "caption"
  | "legal"

type FramerMotionProps =
  | HTMLMotionProps<"h1">
  | HTMLMotionProps<"h2">
  | HTMLMotionProps<"h3">
  | HTMLMotionProps<"p">

type CustomTextProps = {
  /**
   * defines the styles to be displayed
   */
  type: TextTypeOptions
}

export type TextProps = CustomTextProps & ChakraTextProps & FramerMotionProps

const ChakraTextWithMotion = motion.custom(ChakraText)

export const Text: React.FC<TextProps> = ({
  children,
  type,
  color,
  ...props
}) => {
  const { colors } = useTheme()
  const bgColorWithHighSaturation = useContext(bgWithHightSaturation)

  const getDefaultColor = bgColorWithHighSaturation
    ? "#fff"
    : colors.gamma.neutralDark
  const getTextColor = color === undefined ? getDefaultColor : color

  switch (type) {
    case "headline.large":
      return (
        <ChakraTextWithMotion
          lineHeight="small"
          color={getTextColor}
          mt={0}
          as="h1"
          fontSize={{
            sm: "headline.large.mobile",
            xl: "headline.large.desktop",
          }}
          fontWeight="700"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "headline.medium":
      return (
        <ChakraTextWithMotion
          lineHeight="heading"
          color={getTextColor}
          as="h2"
          fontSize="headline.medium"
          fontWeight="700"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "headline.small":
      return (
        <ChakraTextWithMotion
          lineHeight="heading"
          color={getTextColor}
          as="h3"
          fontSize="headline.small"
          fontWeight="700"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "subtitle.medium":
      return (
        <ChakraTextWithMotion
          lineHeight="subtitle"
          color={getTextColor}
          as="h3"
          fontSize="subtitle.medium"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "subtitle.small":
      return (
        <ChakraTextWithMotion
          lineHeight="subtitle"
          color={getTextColor}
          as="h4"
          fontSize="subtitle.small"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "introduction":
      return (
        <ChakraTextWithMotion
          lineHeight="introduction"
          color={getTextColor}
          fontSize="introduction"
          fontWeight="400"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "body.medium":
      return (
        <ChakraTextWithMotion
          lineHeight="body"
          color={getTextColor}
          fontSize="body.medium"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "body.small":
      return (
        <ChakraTextWithMotion
          lineHeight="body"
          color={getTextColor}
          fontSize="body.small"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "caption":
      return (
        <ChakraTextWithMotion
          lineHeight="caption"
          fontSize="caption"
          color={getTextColor}
          textTransform="uppercase"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "legal":
      return (
        <ChakraTextWithMotion lineHeight="legal" fontSize="legal" {...props}>
          {children}
        </ChakraTextWithMotion>
      )
    default:
      return <ChakraTextWithMotion {...props}>{children}</ChakraTextWithMotion>
  }
}

export default Text
