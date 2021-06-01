import React, { useEffect, useState } from "react"
import { useAuth, ProvideAuthProps } from "@src/components/_app/_store"
import { FormControl, Input, SubmitButton, Text } from "@src/components"
import { useIntl } from "react-intl"
import { chakra, Flex, useToast, UseToastOptions, Box } from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from "yup"

interface IntialValues {
  email: string
}

interface ToastMessage {
  title: string
  body: string
  status: string
}

const initialValues: IntialValues = {
  email: "",
}

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
})

export const PasswordForgetForm: React.FC = () => {
  const { sendPasswordResetEmail } = useAuth() as ProvideAuthProps
  const intl = useIntl()

  const toast = useToast()

  const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null)

  useEffect(() => {
    if (toastMessage) {
      const { title, body, status } = toastMessage

      toast({
        title,
        description: body,
        status: status as UseToastOptions["status"],
        duration: 5000,
        isClosable: true,
      })
    }
  }, [toastMessage, setToastMessage, toast])

  const handlePasswordForget = async (values: IntialValues) => {
    const { email } = values
    try {
      await sendPasswordResetEmail(email)
      setToastMessage({
        title: "An email has been sent to email provided",
        body: "Please check your email to reset your password",
        status: "success",
      })
    } catch (error) {
      setToastMessage({
        title: "An error occured",
        body: error.message,
        status: "error",
      })
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
          Forgot your password?
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => handlePasswordForget(values)}
        >
          {({ handleSubmit }) => (
            <chakra.form onSubmit={handleSubmit}>
              <FormControl name="email">
                <Input
                  size="lg"
                  placeholder={intl.formatMessage({ id: `EMAIL` })}
                  withFloatingLabel
                  floatingLabelVariant="outline"
                  name="email"
                  label="email"
                />
              </FormControl>
              <Flex justify="flex-end">
                <SubmitButton mt={9} width="100%">
                  Send me instructions
                </SubmitButton>
              </Flex>
            </chakra.form>
          )}
        </Formik>
      </Box>
    </>
  )
}
