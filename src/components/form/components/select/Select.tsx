import React from "react"
import {
  Select as ChakraSelect,
  SelectProps as ChakraSeclectProps,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react"
import { useField } from "formik"
import { InputProps } from "@src/components"

export type SelectProps = ChakraSeclectProps &
  Omit<InputProps, "withFloatingLabel"> & {
    children: React.ReactElement<HTMLSelectElement["selectedOptions"]>[]
  }

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  helperText,
  children,
  ...rest
}) => {
  const [field] = useField(name)

  return (
    <>
      <FormLabel htmlFor={name}> {label}</FormLabel>
      <ChakraSelect {...field} id={name} {...rest}>
        {children}
      </ChakraSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  )
}

export default Select
