import React from "react"
import {
  Box,
  useRadio,
  InputProps,
  CheckboxProps,
  BoxProps,
} from "@chakra-ui/react"

export const RadioCard: React.FC<
  CheckboxProps & InputProps & { radioCardProps?: BoxProps }
> = props => {
  const { children } = props
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  )
}

export default RadioCard
