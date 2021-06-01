import React from "react"
import { Box, useTheme, Flex } from "@chakra-ui/react"
import { SignUpForm } from "@src/components/_app/components/forms"
import { Container } from "@src/components"

interface PageProps {
  path: string
}

export const SignUp: React.FC<PageProps> = () => {
  const { colors } = useTheme()

  return (
    <Box bg={colors.gamma.neutralLight} px={{ sm: "20px", md: "20px" }}>
      <Container>
        <Flex
          alignItems="center"
          height="100vh"
          width="100wv"
          justifyContent="center"
        >
          <SignUpForm />
        </Flex>
      </Container>
    </Box>
  )
}
