import React from "react"
import { FormControl, PinInput, SubmitButton } from "@src/components"
import { chakra } from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from "yup"

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

interface IntialValues {
  code: string
}

const initialValues: IntialValues = {
  code: "",
}

const validationSchema = Yup.object({
  code: Yup.string().length(5).required(),
})

export const PinInputForm: React.FC<{
  submitHandler: (v: unknown) => void
}> = ({ submitHandler }) => {
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
          <FormControl name="code">
            <PinInput
              label="Enter verification code"
              name="code"
              pinAmount={5}
            />
          </FormControl>
          <SubmitButton>Submit</SubmitButton>
        </chakra.form>
      )}
    </Formik>
  )
}
