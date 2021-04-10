import React from "react"
import { press, screen, render, testA11y, waitFor } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { SliderForm } from "./mock/SliderForm"

/**
 * We are testing the Slider component
 * Below you can find details of the component  :
 *
 *    <Slider name="foo" label="choose the value" max={40} />
 *
 */

describe("Slider  : <Slider/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(<SliderForm submitHandler={handleSubmit} />)
  })

  describe("initial state", () => {
    it("renders a Slider input", () => {
      const handleSubmit = jest.fn()
      render(<SliderForm submitHandler={handleSubmit} />)

      expect(screen.getByRole("slider")).toBeInTheDocument()
    })
  })

  describe("user interactions", () => {
    it("should update the value of the slider when the user slides the button", () => {
      const submitFn = jest.fn()
      render(<SliderForm submitHandler={submitFn} />)
      const thumb = screen.getByRole("slider")

      press.ArrowRight(thumb)
      expect(thumb).toHaveAttribute("aria-valuenow", "21")

      press.ArrowLeft(thumb)
      expect(thumb).toHaveAttribute("aria-valuenow", "20")
    })

    it("should submit the form with value from the slider", async () => {
      const submitFn = jest.fn()
      render(<SliderForm submitHandler={submitFn} />)
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
