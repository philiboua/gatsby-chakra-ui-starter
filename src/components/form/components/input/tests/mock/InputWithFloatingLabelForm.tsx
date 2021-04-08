import React from "react"
import { FormControl, Input, SubmitButton } from "@src/components"
import { Box } from "@chakra-ui/react"
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

export const InputWithFloatingLabelForm: React.FC<{
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
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
          onSubmit={handleSubmit as any}
        >
          <FormControl name="firstName">
            <Input
              size="lg"
              placeholder="Enter your first name"
              withFloatingLabel
              floatingLabelVariant="flushed"
              name="firstName"
              label="First Name"
              helperText="You can get started"
            />
          </FormControl>
          <SubmitButton>Submit</SubmitButton>
        </Box>
      )}
    </Formik>
  )
}
