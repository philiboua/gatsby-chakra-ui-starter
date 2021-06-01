import React from "react"
import { Box, useTheme } from "@chakra-ui/react"
import { PasswordResetForm } from "@src/components/_app/components/forms"

interface PageProps {
  path: string
}

export const PasswordReset: React.FC<PageProps> = () => {
  const { colors } = useTheme()

  return (
    <Box
      height="100vh"
      width="100wv"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={colors.gamma.neutralLight}
    >
      <PasswordResetForm />
    </Box>
  )
}
