import React from "react"
import { screen, render, testA11y, waitFor } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { TextareaForm } from "./mock/TextareaForm"

/**
 * We are testing the Textarea component
 * Below you can find details of the component  :
 *
 *   <Textarea label="Notes" name="notes" />
 *
 */

describe("Textarea field : <Textarea/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(<TextareaForm submitHandler={handleSubmit} />)
  })

  describe("initial state", () => {
    it("renders a Textarea", () => {
      const handleSubmit = jest.fn()
      render(<TextareaForm submitHandler={handleSubmit} />)

      expect(screen.getByLabelText("Notes")).toBeInTheDocument()
    })

    it("renders no error message", () => {
      const handleSubmit = jest.fn()
      render(<TextareaForm submitHandler={handleSubmit} />)
      expect(screen.queryByText("notes is a required field")).toBe(null)
    })
  })

  describe("user interactions", () => {
    describe("user submits the form with valid data", () => {
      it("renders no error message", async () => {
        const submitFn = jest.fn()
        render(<TextareaForm submitHandler={submitFn} />)

        const textarea = screen.getByLabelText("Notes")
        userEvent.type(textarea, "this is few notes written tomorrow")

        const submitBtn = screen.getByRole("button", { name: /submit/i })
        userEvent.click(submitBtn)

        await waitFor(() => {
          expect(submitFn).toHaveBeenCalledTimes(1)
          expect(submitFn).toHaveBeenCalledWith({
            notes: "this is few notes written tomorrow",
          })
        })
      })
    })

    describe("user submits the form with invalid data", () => {
      it("renders an error message", async () => {
        const submitFn = jest.fn()
        render(<TextareaForm submitHandler={submitFn} />)

        const submitBtn = screen.getByRole("button", { name: /submit/i })
        userEvent.click(submitBtn)

        await waitFor(() => {
          expect(submitFn).toHaveBeenCalledTimes(0)
          expect(
            screen.getByText("notes is a required field")
          ).toBeInTheDocument()
        })
      })
    })
  })
})
