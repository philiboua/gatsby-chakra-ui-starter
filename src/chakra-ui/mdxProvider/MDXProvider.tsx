import React from "react"
import { Text, Divider, Heading, Image, Box } from "@chakra-ui/react"
import { Code } from "@components"
import { MDXProviderComponentsProp } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"

export const ChakraMDXProvider = (): MDXProviderComponentsProp => {
  return {
    p: props => <Text marginBottom={2} {...props} />,
    h1: props => <Heading marginY={4} as="h1" size="2xl" {...props} />,
    h2: props => <Heading marginY={4} as="h2" size="xl" {...props} />,
    h3: props => <Heading marginY={4} as="h3" size="l" {...props} />,
    h4: props => <Heading marginY={4} as="h4" size="md" {...props} />,
    h5: props => <Heading marginY={4} as="h5" size="sm" {...props} />,
    h6: props => <Heading marginY={4} as="h6" size="xs" {...props} />,
    thematicBreak: Divider,
    em: props => <Text as="em" {...props} />,
    strong: props => <Text as="strong" {...props} />,
    delete: props => <Text as="del" {...props} />,
    inlineCode: Code,
    pre: preProps => {
      const props = preToCodeBlock(preProps)
      // if there's a codeString and some props, we passed the test
      if (props) {
        return <Code {...props} />
      }
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    },
    ul: props => <Box as="ul" marginY={2} paddingLeft={8} {...props} />,
    ol: props => <Box as="ol" marginY={2} paddingLeft={8} {...props} />,
    li: props => <Box as="li" {...props} />,
    img: Image,
  }
}

export default ChakraMDXProvider
