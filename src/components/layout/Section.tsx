import React from "react"
import { Box } from "@chakra-ui/react"
import { Container } from "@src/components"

export interface SectionProps {
  withContainer?: boolean
}

export const Section: React.FC<SectionProps> = ({
  withContainer,
  children,
}) => {
  if (withContainer) {
    return (
      <Box as="section">
        <Container>{children}</Container>
      </Box>
    )
  }

  return <Box as="section">{children}</Box>
}
