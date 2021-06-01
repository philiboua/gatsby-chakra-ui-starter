import React from "react"
import { Box, Flex, useTheme } from "@chakra-ui/react"
import { Container } from "@src/components"
import { SignInForm } from "@src/components/_app/components/forms"

interface PageProps {
  path: string
}

export const SignIn: React.FC<PageProps> = () => {
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
          <SignInForm />
        </Flex>
      </Container>
    </Box>
  )
}
