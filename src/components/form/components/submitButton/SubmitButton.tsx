import React from "react"
import { Button, ButtonProps } from "@chakra-ui/react"
import { useFormikContext } from "formik"

export type SubmitButtonProps = ButtonProps

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  ...rest
}) => {
  const { isSubmitting } = useFormikContext()

  return (
    <Button type="submit" isLoading={isSubmitting} {...rest}>
      {children}
    </Button>
  )
}

export default SubmitButton
