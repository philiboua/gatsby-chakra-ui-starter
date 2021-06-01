import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { useAuth, ProvideAuthProps } from "@src/components/_app/_store"
import { FormControl, Input, SubmitButton, Text } from "@src/components"
import { useIntl } from "react-intl"
import { chakra, Flex, useToast, Box } from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from "yup"

interface IntialValues {
  email: string
  password: string
}

interface ToastMessage {
  title: string
  body: string
}

const initialValues: IntialValues = {
  email: "",
  password: "",
}

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required("This field is required"),
})

export const SignUpForm: React.FC = () => {
  const { signup } = useAuth() as ProvideAuthProps
  const intl = useIntl()

  const toast = useToast()

  const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null)

  useEffect(() => {
    if (toastMessage) {
      const { title, body } = toastMessage

      toast({
        title,
        description: body,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }, [toastMessage, setToastMessage, toast])

  const handleSignUp = async (values: IntialValues) => {
    const { email, password } = values
    try {
      await signup(email, password)
      navigate("/app/profile")
    } catch (error) {
      setToastMessage({
        title: "An error occured",
        body: error.message,
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
          Get started!
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => handleSignUp(values)}
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
              <FormControl name="password" mt={4}>
                <Input
                  type="password"
                  size="lg"
                  placeholder={intl.formatMessage({
                    id: `FORM.SIGNIN.PASSWORD`,
                  })}
                  withFloatingLabel
                  floatingLabelVariant="outline"
                  name="password"
                  label="password"
                />
              </FormControl>
              <Flex justify="flex-end">
                <SubmitButton mt={9} width="100%">
                  Create your account
                </SubmitButton>
              </Flex>
            </chakra.form>
          )}
        </Formik>
      </Box>
    </>
  )
}
