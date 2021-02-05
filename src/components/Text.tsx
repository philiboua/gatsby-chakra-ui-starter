import React from "react"
import { Text as ChakraText } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { IText } from "@src/@interfaces"

const ChakraTextWithMotion = motion.custom(ChakraText)

const Text: React.FC<IText> = ({ children, type, ...props }) => {
  switch (type) {
    case "headline.large":
      return (
        <ChakraTextWithMotion
          lineHeight="small"
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
