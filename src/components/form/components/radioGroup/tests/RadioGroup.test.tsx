import React from "react"
import { screen, render, testA11y, waitFor } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { Radio } from "@chakra-ui/react"
import { RadioGroup } from "@src/components"
import { FormWp } from "./mock/FormWp"

describe("RadioGroup  : <RadioGroup/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(
      <FormWp submitHandler={handleSubmit}>
        <RadioGroup
          name="favoriteColor"
          label="Choose your color"
          helperText="Get started now"
        >
          <Radio value="#ff0000">Red</Radio>
          <Radio value="#00ff00">Green</Radio>
          <Radio value="#0000ff">Blue</Radio>
        </RadioGroup>
      </FormWp>
    )
  })

  describe("initial state", () => {
    it("renders a RadioGroup", () => {
      const handleSubmit = jest.fn()
      render(
        <FormWp submitHandler={handleSubmit}>
          <RadioGroup
            name="favoriteColor"
            label="Choose your color"
            helperText="Get started now"
          >
            <Radio value="#ff0000">Red</Radio>
            <Radio value="#00ff00">Green</Radio>
            <Radio value="#0000ff">Blue</Radio>
          </RadioGroup>
        </FormWp>
      )

      expect(screen.getByRole("radiogroup")).toBeInTheDocument()
    })
  })

  describe("user interactions", () => {
    it("should update with the value selected by the user", () => {
      const submitFn = jest.fn()
      render(
        <FormWp submitHandler={submitFn}>
          <RadioGroup
            name="favoriteColor"
            label="Choose your color"
            helperText="Get started now"
          >
            <Radio value="#ff0000">Red</Radio>
            <Radio value="#00ff00">Green</Radio>
            <Radio value="#0000ff">Blue</Radio>
          </RadioGroup>
        </FormWp>
      )
      const radioA = screen.getByLabelText("Red")
      const radioB = screen.getByLabelText("Green")
      const radioC = screen.getByLabelText("Blue")

      userEvent.click(radioA)

      expect(radioA).toBeChecked()
      expect(radioB).not.toBeChecked()
      expect(radioC).not.toBeChecked()
    })

    it("should submit the form with value from the radioGroup", async () => {
      const submitFn = jest.fn()
      render(
        <FormWp submitHandler={submitFn}>
          <RadioGroup
            name="favoriteColor"
            label="Choose your color"
            helperText="Get started now"
          >
            <Radio value="#ff0000">Red</Radio>
            <Radio value="#00ff00">Green</Radio>
            <Radio value="#0000ff">Blue</Radio>
          </RadioGroup>
        </FormWp>
      )

      const radioA = screen.getByLabelText("Red")
      userEvent.click(radioA)

      userEvent.click(screen.getByText(/submit/i))

      await waitFor(() => {
        expect(submitFn).toHaveBeenCalledTimes(1)
        expect(submitFn).toHaveBeenCalledWith({ favoriteColor: "#ff0000" })
      })
    })
  })
})
