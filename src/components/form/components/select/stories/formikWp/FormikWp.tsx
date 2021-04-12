import React from "react"
import { Formik } from "formik"
import { chakra, Box } from "@chakra-ui/react"
import * as Yup from "yup"
import { FormControl, SubmitButton } from "@src/components"

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

interface IntialValues {
  city: string
}

const initialValues: IntialValues = {
  city: "",
}

const validationSchema = Yup.object({
  city: Yup.string().required(),
})

export const FormikWp: React.FC<{
  submitHandler: (v: unknown) => void
  children: React.ReactElement
}> = ({ submitHandler, children }) => {
  const handleOnSubmit = async (values: unknown) => {
    await sleep(500)
    submitHandler(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ handleSubmit, errors, values }) => (
        <chakra.form
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
          onSubmit={handleSubmit}
        >
          <FormControl name="code">{children}</FormControl>
          <SubmitButton mt={4}>Submit</SubmitButton>
          <Box as="pre" marginY={10}>
            {JSON.stringify(values, null, 2)}
            <br />
            {JSON.stringify(errors, null, 2)}
          </Box>
        </chakra.form>
      )}
    </Formik>
  )
}
