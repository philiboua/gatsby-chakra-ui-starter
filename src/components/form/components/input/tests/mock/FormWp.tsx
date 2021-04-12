import React from "react"
import { FormControl, SubmitButton } from "@src/components"
import { chakra } from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from "yup"

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

interface IntialValues {
  firstName: string
}

const initialValues: IntialValues = {
  firstName: "",
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("This field is required"),
})

export const FormWp: React.FC<{
  submitHandler: (v: unknown) => void
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
      {({ handleSubmit }) => (
        <chakra.form
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          onSubmit={handleSubmit}
        >
          <FormControl name="firstName">{children}</FormControl>
          <SubmitButton>Submit</SubmitButton>
        </chakra.form>
      )}
    </Formik>
  )
}
