/* eslint react/no-array-index-key: "off" */
import React from "react"
import {
  HStack,
  PinInput as ChakraPinInput,
  PinInputField,
  PinInputProps as ChakraPinInputProps,
  StackProps,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react"
import { InputProps } from "@src/components"
import { useField } from "formik"

type PinInputProps = Omit<InputProps, "withFloatingLabel"> &
  Omit<ChakraPinInputProps, "children"> & {
    pinAmount: number
    stackProps?: StackProps
  }

export const PinInput: React.FC<PinInputProps> = ({
  name,
  label,
  helperText,
  pinAmount,
  stackProps,
  ...rest
}) => {
  const [field, , { setValue }] = useField(name)
  const pinArray = [...new Array(pinAmount)]

  const renderedPinInputFields = pinArray.map((pin, i) => {
    return <PinInputField type="alphanumeric" key={`pin-${i}`} />
  })

  return (
    <>
      <FormLabel htmlFor={name}> {label}</FormLabel>
      <HStack {...stackProps}>
        <ChakraPinInput
          {...field}
          onChange={(v: string) => setValue(v)}
          {...rest}
        >
          {renderedPinInputFields}
        </ChakraPinInput>
      </HStack>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  )
}

export default PinInput
