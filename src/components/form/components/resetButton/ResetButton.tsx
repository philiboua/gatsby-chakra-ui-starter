import React from "react"
import { Button, ButtonProps } from "@chakra-ui/react"
import { useFormikContext } from "formik"

export const ResetButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const { isSubmitting, dirty, resetForm } = useFormikContext()

  return (
    <Button
      colorScheme="teal"
      variant="outline"
      onClick={() => resetForm()}
      isDisabled={isSubmitting || !dirty}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ResetButton
