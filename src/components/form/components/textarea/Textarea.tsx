import React from "react"
import {
  Textarea as ChakraTextArea,
  TextareaProps as ChakraTextareaProps,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react"
import { useField } from "formik"
import { InputProps } from "@src/components"

export type TextareaProps = ChakraTextareaProps &
  Omit<InputProps, "withFloatingLabel">

export const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  helperText,
  ...rest
}) => {
  const [field] = useField(name)

  return (
    <>
      <FormLabel htmlFor={name}> {label}</FormLabel>
      <ChakraTextArea {...field} id={name} {...rest} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  )
}

export default Textarea
