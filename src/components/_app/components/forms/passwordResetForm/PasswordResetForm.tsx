import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import { useAuth, ProvideAuthProps } from "@src/components/_app/_store"
import { FormControl, Input, SubmitButton, Text } from "@src/components"
import { chakra, Flex, useToast, UseToastOptions, Box } from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from "yup"

interface IntialValues {
  password: string
}

interface ToastMessage {
  title: string
  body: string
  status: string
  duration?: number
}

const initialValues: IntialValues = {
  password: "",
}

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*@^])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
})

export const PasswordResetForm: React.FC = () => {
  const { confirmPasswordReset } = useAuth() as ProvideAuthProps
  const location = useLocation()
  const toast = useToast()
  const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null)

  useEffect(() => {
    if (toastMessage) {
      const { title, body, status, duration } = toastMessage
      toast({
        title,
        description: body,
        status: status as UseToastOptions["status"],
        duration: duration !== undefined ? duration : 5000,
        isClosable: true,
      })
    }
  }, [toastMessage, setToastMessage, toast])

  const handlePasswordReset = async (values: IntialValues) => {
    const { password } = values
    const code = new URLSearchParams(location.search).get("oobCode")
    if (code) {
      try {
        await confirmPasswordReset(code, password)
        navigate("/app")
      } catch (error) {
        setToastMessage({
          title: "An error occured",
          body: error.message,
          status: "error",
        })
      }
    }
  }

  return (
    <>
      <Box
        borderWidth="1px"
        bg="white"
        rounded="md"
        borderColor="gray.100"
        width={{ sm: "100%", md: "100%", lg: "440px" }}
        p={6}
        m="10px auto"
      >
        <Text type="headline.medium" as="h1" textAlign="center" mb="9">
          Reset your password
        </Text>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => handlePasswordReset(values)}
        >
          {({ handleSubmit }) => (
            <chakra.form onSubmit={handleSubmit}>
              <FormControl name="password">
                <Input
                  size="lg"
                  placeholder="Enter a new password"
                  withFloatingLabel
                  type="password"
                  floatingLabelVariant="outline"
                  name="password"
                  label="Type your new password"
                />
              </FormControl>
              <Flex justify="flex-end">
                <SubmitButton mt={9} width="100%">
                  Reset password
                </SubmitButton>
              </Flex>
            </chakra.form>
          )}
        </Formik>
      </Box>
    </>
  )
}
