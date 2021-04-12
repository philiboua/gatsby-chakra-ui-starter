import React from "react"
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as NumberInputChakra,
  NumberInputField,
  NumberInputProps as ChakraNumberInputProps,
  NumberInputStepper,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react"
import { useField, useFormikContext } from "formik"
import { InputProps } from "@src/components"

type NumberInputProps = ChakraNumberInputProps &
  Omit<InputProps, "withFloatingLabel"> & { showStepper?: boolean }

export const NumberInput: React.FC<NumberInputProps> = ({
  name,
  showStepper = true,
  label,
  helperText,
  children,
  ...rest
}) => {
  const [field, { error, touched }] = useField(name)
  const { setFieldValue } = useFormikContext()

  return (
    <>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <NumberInputChakra
        {...field}
        id={name}
        onChange={value => setFieldValue(name, value)}
        isInvalid={!!error && touched}
        {...rest}
      >
        <NumberInputField name={name} />
        {showStepper && (
          <NumberInputStepper>
            <NumberIncrementStepper className="numberIncrement" />
            <NumberDecrementStepper className="numberDecrement" />
          </NumberInputStepper>
        )}
        {children}
      </NumberInputChakra>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  )
}

export default NumberInput
