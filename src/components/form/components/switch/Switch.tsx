import React from "react"
import {
  Box,
  FormLabel,
  FormHelperText,
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from "@chakra-ui/react"
import { css } from "@emotion/react"
import { useField } from "formik"
import { InputProps } from "@src/components"

export type SwitchProps = ChakraSwitchProps &
  Omit<InputProps, "withFloatingLabel">

export const Switch: React.FC<SwitchProps> = ({
  name,
  label,
  helperText,
  ...rest
}) => {
  const [field, { error, touched }] = useField(name)

  return (
    <Box
      css={css`
        .chakra-form__label {
          margin-bottom: 0;
        }
        .chakra-switch {
          display: flex;
          align-items: center;
          margin-right: 0.75rem;
        }
        .chakra-form__error-message {
          margin-top: 0;
        }
      `}
    >
      <FormLabel htmlFor={name}> {label}</FormLabel>
      <ChakraSwitch
        {...field}
        id={name}
        isInvalid={!!error && touched}
        isChecked={field.value}
        {...rest}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Box>
  )
}

export default Switch
