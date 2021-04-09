import React from "react"
import { screen, render, testA11y } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { SwitchForm } from "./mock/SwitchForm"

/**
 * We are testing the Switch component
 * Below you can find details of the component  :
 *
 *   <Switch label="Dark Mode" name="darkMode" size="lg" />
 *
 */

describe("Switch  : <Switch/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(<SwitchForm submitHandler={handleSubmit} />)
  })

  describe("initial state", () => {
    it("renders a Switch input", () => {
      const handleSubmit = jest.fn()
      render(<SwitchForm submitHandler={handleSubmit} />)

      expect(screen.getByLabelText("Dark Mode")).toBeInTheDocument()
    })
  })

  describe("user interactions", () => {
    it("should toggle the value of the switch input when user clicks on the Switch", () => {
      const submitFn = jest.fn()
      render(<SwitchForm submitHandler={submitFn} />)
      const switchInput = screen.getByLabelText("Dark Mode") as HTMLInputElement

      userEvent.click(switchInput)

      // initial value of the Switch input is false
      expect(switchInput.value).toBe("true")
    })

    it("should toggle the value of the switch input when user press space", () => {
      const submitFn = jest.fn()
      render(<SwitchForm submitHandler={submitFn} />)
      const switchInput = screen.getByLabelText("Dark Mode") as HTMLInputElement

      userEvent.type(switchInput, "{space}")

      // initial value of the Switch input is false
      expect(switchInput.value).toBe("true")
    })
  })
})
