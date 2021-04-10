import React from "react"
import { screen, render, testA11y } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { Switch } from "@src/components"
import { FormWp } from "./mock/FormWp"

describe("Switch  : <Switch/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(
      <FormWp submitHandler={handleSubmit}>
        <Switch label="Dark Mode" name="darkMode" size="lg" />
      </FormWp>
    )
  })

  describe("initial state", () => {
    it("renders a Switch input", () => {
      const handleSubmit = jest.fn()
      render(
        <FormWp submitHandler={handleSubmit}>
          <Switch label="Dark Mode" name="darkMode" size="lg" />
        </FormWp>
      )

      expect(screen.getByLabelText("Dark Mode")).toBeInTheDocument()
    })
  })

  describe("user interactions", () => {
    it("should toggle the value of the switch input when user clicks on the Switch", () => {
      const submitFn = jest.fn()
      render(
        <FormWp submitHandler={submitFn}>
          <Switch label="Dark Mode" name="darkMode" size="lg" />
        </FormWp>
      )
      const switchInput = screen.getByLabelText("Dark Mode") as HTMLInputElement

      userEvent.click(switchInput)

      // initial value of the Switch input is false
      expect(switchInput.value).toBe("true")
    })

    it("should toggle the value of the switch input when user press space", () => {
      const submitFn = jest.fn()
      render(
        <FormWp submitHandler={submitFn}>
          <Switch label="Dark Mode" name="darkMode" size="lg" />
        </FormWp>
      )
      const switchInput = screen.getByLabelText("Dark Mode") as HTMLInputElement

      userEvent.type(switchInput, "{space}")

      // initial value of the Switch input is false
      expect(switchInput.value).toBe("true")
    })
  })
})
