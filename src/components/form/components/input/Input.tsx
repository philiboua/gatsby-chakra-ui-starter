/** @jsx jsx */
import React, { ChangeEvent, useCallback, useState } from "react"
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormLabel,
  FormHelperText,
  Box,
} from "@chakra-ui/react"
import { useField } from "formik"
import { useToggle } from "@src/hooks"
import { css, jsx, SerializedStyles } from "@emotion/react"
import { motion, HTMLMotionProps } from "framer-motion"

type FloatingLabelVariant = "outline" | "flushed" | "filled" | "unstyled"

export interface InputProps extends ChakraInputProps {
  name: string
  label: string
  helperText?: string
  withFloatingLabel?: boolean
  floatingLabelVariant?: FloatingLabelVariant
  motionProps?: HTMLMotionProps<"input">
}

type Styles = {
  [key in FloatingLabelVariant]: SerializedStyles | null
}

const FormLabelWithMotion = motion(FormLabel)

export const Input: React.FC<InputProps> = ({
  name,
  label,
  helperText,
  withFloatingLabel = false,
  floatingLabelVariant = "outline",
  motionProps,
  ...rest
}) => {
  const [field] = useField(name)
  const { onBlur, onChange, value } = field

  const [isFocus, toggleIsFocus] = useToggle(false)
  const [inputState, setInputState] = useState("deactivated")

  const styles: Styles = {
    outline: isFocus
      ? css`
          z-index: 1;
          border: 1px solid rgb(49, 130, 206);
          box-shadow: rgb(49 130 206) 0px 0px 0px 1px;
        `
      : css`
          z-index: 1;
          border: 1px solid #e2e8f0;
        `,
    flushed: isFocus
      ? css`
          z-index: 1;
          border-bottom: 1px solid rgb(49, 130, 206);
        `
      : css`
          z-index: 1;
          border-bottom: 1px solid #e2e8f0;
        `,
    filled: isFocus
      ? css`
          z-index: 1;
          border: 1px solid rgb(49, 130, 206);
          box-shadow: rgb(49 130 206) 0px 0px 0px 1px;
        `
      : css`
          z-index: 1;
          background: rgba(237, 242, 247, 0.94);
          border: 1px solid transparent;
        `,
    unstyled: null,
  }

  const variants = {
    InputOn: {
      opacity: 1,
      y: "3px",
    },
    InputOff: {
      opacity: 0,
      y: "6px",
    },
  }

  const handleOnBlur = useCallback(
    event => {
      toggleIsFocus()
      onBlur(event)
    },
    [toggleIsFocus, onBlur]
  )

  const handleOnChange = (event: ChangeEvent) => {
    if ((event.target as HTMLInputElement).value.length === 1) {
      setInputState("activated")
    }

    if ((event.target as HTMLInputElement).value.length > 1) {
      setInputState("activated")
    }

    if ((event.target as HTMLInputElement).value.length === 0) {
      setInputState("deactivated")
    }

    onChange(event)
  }

  if (withFloatingLabel) {
    return (
      <React.Fragment>
        <Box
          transition="all 0.2s ease 0s"
          display="relative"
          className="inputWp"
          borderRadius={floatingLabelVariant === "flushed" ? "0px" : "md"}
          height="3.375rem"
          css={styles[floatingLabelVariant]}
        >
          <FormLabelWithMotion
            position="absolute"
            px="16px"
            display={inputState === "activated" ? "block" : "none"}
            fontSize={inputState === "activated" ? "0.8125rem" : ""}
            animate={inputState === "activated" ? "InputOn" : "InputOff"}
            variants={variants}
            transition={{ delay: 0.1 }}
            htmlFor={name}
          >
            {label}
          </FormLabelWithMotion>
          <ChakraInput
            pt={inputState === "activated" ? "1rem" : "0.625rem"}
            pb={inputState === "activated" ? "0.25rem" : "0.625rem"}
            px="16px"
            variant="unstyled"
            height="100%"
            width="100%"
            fontSize="1rem"
            aria-label={inputState === "activated" ? "" : label}
            onFocus={() => toggleIsFocus()}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            value={value}
            id={name}
            {...rest}
          />
        </Box>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <FormLabel htmlFor={name}> {label}</FormLabel>
      <ChakraInput {...field} id={name} {...rest} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </React.Fragment>
  )
}

export default Input
