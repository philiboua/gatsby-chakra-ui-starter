import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { useAuth, ProvideAuthProps } from "@src/components/_app/_store"
import { FormControl, Input, SubmitButton, Text, Link } from "@src/components"
import { useIntl } from "react-intl"
import { chakra, Flex, useToast, Box, HStack } from "@chakra-ui/react"
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

export const SignInForm: React.FC = () => {
  const { signin } = useAuth() as ProvideAuthProps
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
        position: "top",
        duration: 5000,
        isClosable: true,
      })
    }
  }, [toastMessage, setToastMessage, toast])

  const handleSignIn = async (values: IntialValues) => {
    const { email, password } = values
    try {
      await signin(email, password)
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
          Customer Login
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => handleSignIn(values)}
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
                  size="lg"
                  type="password"
                  placeholder={intl.formatMessage({
                    id: `FORM.SIGNIN.PASSWORD`,
                  })}
                  withFloatingLabel
                  floatingLabelVariant="outline"
                  name="password"
                  label="password"
                />
              </FormControl>
              <Link
                mt={3}
                href="/app/forgotpassword"
                textDecoration="underline"
                fontSize="small"
              >
                Forgot your password?
              </Link>
              <Flex justify="flex-end">
                <SubmitButton mt={9} width="100%">
                  Submit
                </SubmitButton>
              </Flex>
            </chakra.form>
          )}
        </Formik>
        <HStack mt={12} justify="center">
          <Text type="body.small">Don't have an account?</Text>
          <Link href="/app/signup" textDecoration="underline">
            Signup
          </Link>
        </HStack>
      </Box>
    </>
  )
}
