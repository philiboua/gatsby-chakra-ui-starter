import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { Box, Radio, RadioGroup as ChakraRadioGroup } from "@chakra-ui/react"
import {
  Container,
  Row,
  Column,
  Text,
  FormControl,
  SubmitButton,
  Input,
  NumberInput,
  PinInput,
  Textarea,
  Switch,
  Select,
  RadioGroup,
  Slider,
  RadioCard,
  RadioCardGroup,
} from "@src/components"

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = (values: unknown) => {
  sleep(300)
    .then(() => {
      return window.alert(JSON.stringify(values, null, 2))
    })
    .catch((error: unknown) => {
      console.log(error)
    })
}

interface IntialValues {
  firstName: string
  age: number
  bar: string
}

const initialValues: IntialValues = {
  firstName: "",
  age: 0,
  bar: "",
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("This is not a number"),
  age: Yup.number().min(18).required(),
  bar: Yup.string().length(5).required(),
})

const radioCardStyles = {
  borderWidth: "1px",
  borderRadius: "md",
  boxShadow: "md",
  _checked: {
    bg: "teal.600",
    color: "white",
    borderColor: "teal.600",
  },
  _focus: {
    boxShadow: "outline",
  },
  px: 5,
  py: 3,
}

const About = (): React.ReactElement => {
  return (
    <Container>
      <Row>
        <Column col={["sm4"]}>
          <Text type="headline.large">About us</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, values, errors }) => (
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
                    placeholder="Enter your first name"
                    withFloatingLabel
                    name="firstName"
                    label="First Name"
                    helperText="You can get started"
                  />
                </FormControl>
                <FormControl name="toronto">
                  <Input
                    size="lg"
                    placeholder="Enter your first name"
                    name="toronto"
                    label="First Name"
                    helperText="You can get started"
                  />
                </FormControl>
                <FormControl name="bar">
                  <PinInput label="pin code" name="bar" pinAmount={5} />
                </FormControl>
                <FormControl name="age">
                  <NumberInput name="age" label="Your age" />
                </FormControl>

                <FormControl name="employed">
                  <Switch label="employed" name="employed" size="lg" />
                </FormControl>
                <FormControl name="notes">
                  <Textarea label="Notes" name="notes" />
                </FormControl>
                <FormControl name="favoriteColor">
                  <RadioGroup
                    name="favoriteColor"
                    label="hello there"
                    helperText="Get started now"
                  >
                    <Radio value="#ff0000">Red</Radio>
                    <Radio value="#00ff00">Green</Radio>
                    <Radio value="#0000ff">Blue</Radio>
                  </RadioGroup>
                  <RadioCardGroup defaultValue="react" name="framework" />
                </FormControl>
                <FormControl name="city">
                  <Select name="city" label="Choose your city">
                    <option value="toronto">Toronto</option>
                    <option value="montreal">Montreal</option>
                    <option value="ottawa">Ottawa</option>
                  </Select>
                </FormControl>
                <FormControl name="abobo">
                  <Slider name="abobo" label="this is a form" max={40} />
                </FormControl>
                <SubmitButton>Submit</SubmitButton>
                <Box as="pre" marginY={10}>
                  {JSON.stringify(values, null, 2)}
                  <br />
                  {JSON.stringify(errors, null, 2)}
                </Box>
              </Box>
            )}
          </Formik>
        </Column>
      </Row>
    </Container>
  )
}

export default About
