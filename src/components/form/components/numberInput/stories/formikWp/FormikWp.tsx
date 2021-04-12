import React from "react"
import { Formik } from "formik"
import { chakra } from "@chakra-ui/react"
import * as Yup from "yup"
import { FormControl } from "@src/components"

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

interface IntialValues {
  age: string
}

const initialValues: IntialValues = {
  age: "",
}

const validationSchema = Yup.object({
  age: Yup.number().required(),
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
      {({ handleSubmit }) => (
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
          <FormControl name="age">{children}</FormControl>
        </chakra.form>
      )}
    </Formik>
  )
}
