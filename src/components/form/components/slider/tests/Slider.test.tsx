import React from "react"
import { press, screen, render, testA11y, waitFor } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { Slider } from "@src/components"
import { FormWp } from "./mock/FormWp"

describe("Slider  : <Slider/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(
      <FormWp submitHandler={handleSubmit}>
        <Slider name="foo" label="choose the value" max={40} />
      </FormWp>
    )
  })

  describe("initial state", () => {
    it("renders a Slider input", () => {
      const handleSubmit = jest.fn()
      render(
        <FormWp submitHandler={handleSubmit}>
          <Slider name="foo" label="choose the value" max={40} />
        </FormWp>
      )

      expect(screen.getByRole("slider")).toBeInTheDocument()
    })
  })

  describe("user interactions", () => {
    it("should update the value of the slider when the user slides the button", () => {
      const submitFn = jest.fn()
      render(
        <FormWp submitHandler={submitFn}>
          <Slider name="foo" label="choose the value" max={40} />
        </FormWp>
      )
      const thumb = screen.getByRole("slider")

      press.ArrowRight(thumb)
      expect(thumb).toHaveAttribute("aria-valuenow", "21")

      press.ArrowLeft(thumb)
      expect(thumb).toHaveAttribute("aria-valuenow", "20")
    })

    it("should submit the form with value from the slider", async () => {
      const submitFn = jest.fn()
      render(
        <FormWp submitHandler={submitFn}>
          <Slider name="foo" label="choose the value" max={40} />
        </FormWp>
      )
      const thumb = screen.getByRole("slider")

      press.ArrowRight(thumb)

      userEvent.click(screen.getByText(/submit/i))

      await waitFor(() => {
        expect(submitFn).toHaveBeenCalledTimes(1)
        expect(submitFn).toHaveBeenCalledWith({ foo: 21 })
      })
    })
  })
})
