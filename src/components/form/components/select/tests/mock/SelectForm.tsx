import React from "react"
import { FormControl, Select, SubmitButton } from "@src/components"
import { chakra, Box } from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from "yup"

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

interface IntialValues {
  city: string
}

const initialValues: IntialValues = {
  city: "false",
}

const validationSchema = Yup.object({
  city: Yup.string().required(),
})

export const SelectForm: React.FC<{
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
          <FormControl name="city">
            <Select data-testid="select" name="city" label="Choose your city">
              <option data-testid="val1" value="toronto">
                Toronto
              </option>
              <option data-testid="val2" value="montreal">
                Montreal
              </option>
              <option data-testid="val3" value="ottawa">
                Ottawa
              </option>
            </Select>
          </FormControl>
          <SubmitButton>Submit</SubmitButton>
        </chakra.form>
      )}
    </Formik>
  )
}
