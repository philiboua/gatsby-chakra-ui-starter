import React from "react"
import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
} from "@chakra-ui/react"
import { useField } from "formik"

interface FormControlBaseProps extends FormControlProps {
  name: string
}

export const FormControl: React.FC<FormControlBaseProps> = ({
  children,
  name,
  ...rest
}) => {
  const [, { error, touched }] = useField(name)

  return (
    <ChakraFormControl isInvalid={!!error && touched} {...rest}>
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </ChakraFormControl>
  )
}

export default FormControl
