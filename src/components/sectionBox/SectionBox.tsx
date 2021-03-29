import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import { Container } from "@src/components"
import { bgWithHightSaturation } from "@src/contexts"

type ContentType = "header" | "footer" | "section" | "main"

interface ContentWrapperProps extends BoxProps {
  /**
   * wrap the component with a container
   */
  withContainer?: boolean
  /**
   * define background color
   */
  bgColor?: string
  /**
   * Provide indication about the color saturation of the background
   * In case the background is highly saturated, the text color will be white
   */
  highSaturatedBg?: boolean
  /**
   * add accessibility information based on the type of section
   */
  contentType: ContentType
}

export const SectionBox: React.FC<ContentWrapperProps> = ({
  withContainer,
  bgColor,
  highSaturatedBg,
  contentType,
  children,
  ...props
}) => {
  const getRole = {
    header: "banner",
    footer: "contentinfo",
    main: "main",
    section: "",
  }

  const getContentType = () => {
    if (
      contentType === "header" ||
      contentType === "footer" ||
      contentType === "main"
    ) {
      return contentType
    }
    return "section"
  }

  if (highSaturatedBg) {
    return (
      <bgWithHightSaturation.Provider value>
        <Box bgColor={bgColor} role={getRole[getContentType()]} {...props}>
          {withContainer ? (
            <Container px={{ sm: "20px", md: "20px", lg: 0 }}>
              {children}
            </Container>
          ) : (
            <>{children}</>
          )}
        </Box>
      </bgWithHightSaturation.Provider>
    )
  }

  return (
    <Box
      as={getContentType()}
      role={getRole[getContentType()]}
      bgColor={bgColor}
      {...props}
    >
      {withContainer ? (
        <Container px={{ sm: "20px", md: "20px", lg: 0 }}>{children}</Container>
      ) : (
        <>{children}</>
      )}
    </Box>
  )
}

export default SectionBox
