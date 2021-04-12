import React from "react"
import {
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as ChakraRadioGroupProps,
  Stack,
  StackProps,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react"
import { useField, useFormikContext } from "formik"
import { InputProps } from "@src/components"

export type RadioGroupProps = {
  stackProps?: StackProps
} & Omit<InputProps, "withFloatingLabel"> &
  ChakraRadioGroupProps

export const RadioGroup: React.FC<RadioGroupProps> = ({
  stackProps,
  children,
  name,
  label,
  helperText,
  ...rest
}) => {
  //   const { name, label, radioGroupProps, stackProps, children, ...rest } = props
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()
  const handleChange = (value: string) => {
    setFieldValue(name, value)
  }

  return (
    <>
      <FormLabel htmlFor={name}> {label}</FormLabel>
      <ChakraRadioGroup {...field} onChange={handleChange} {...rest}>
        <Stack direction="row" {...stackProps}>
          {children}
        </Stack>
      </ChakraRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  )
}

export default RadioGroup
