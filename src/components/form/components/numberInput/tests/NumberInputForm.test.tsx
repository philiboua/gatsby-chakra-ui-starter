import React from "react"
import { screen, render, testA11y, waitFor } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { NumberForm } from "./mock/NumberForm"

/**
 * We are testing the NumberInput component
 * Below you can find details of the component  :
 *
 *  <NumberInput name="age" label="Enter your age" />
 *
 */

describe("Number Input field : <NumberInput/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(<NumberForm submitHandler={handleSubmit} />)
  })

  describe("initial state", () => {
    it("renders a number field", () => {
      const handleSubmit = jest.fn()
      render(<NumberForm submitHandler={handleSubmit} />)

      expect(screen.getByLabelText("Enter your age")).toBeInTheDocument()
      expect(screen.getByLabelText("Enter your age").nodeValue).toEqual(null)
    })

    it("renders no error message", () => {
      const handleSubmit = jest.fn()
      render(<NumberForm submitHandler={handleSubmit} />)

      expect(screen.queryByText("age is a required field")).toBe(null)
    })
  })

  describe("user interactions", () => {
    describe("user submits the form with valid data", () => {
      it("renders no error message", async () => {
        const submitFn = jest.fn()
        render(<NumberForm submitHandler={submitFn} />)

        const input = screen.getByLabelText("Enter your age")
        userEvent.type(input, "18")

        const submitBtn = screen.getByRole("button", { name: /submit/i })
        userEvent.click(submitBtn)

        await waitFor(() => {
          expect(submitFn).toHaveBeenCalledTimes(1)
          expect(submitFn).toHaveBeenCalledWith({ age: "18" })
        })
      })
    })

    describe("user submits the form with invalid data", () => {
      it("renders an error message", async () => {
        const submitFn = jest.fn()
        render(<NumberForm submitHandler={submitFn} />)

        const submitBtn = screen.getByRole("button", { name: /submit/i })
        userEvent.click(submitBtn)

        await waitFor(() => {
          expect(submitFn).toHaveBeenCalledTimes(0)
          expect(screen.queryByText("age is a required field")).not.toBe(null)
        })
      })
    })

    describe("user fills the input field with valid data and go to another element by tabing", () => {
      it("renders no error message", async () => {
        const submitFn = jest.fn()
        render(<NumberForm submitHandler={submitFn} />)

        const input = screen.getByLabelText("Enter your age")
        userEvent.type(input, "18")
        userEvent.tab()

        await waitFor(() => {
          expect(screen.queryByText("age is a required field")).toBe(null)
        })
      })
    })

    describe("user fills the input field with invalid data and go to another element by tabing", () => {
      it("renders an error message", async () => {
        const submitFn = jest.fn()
        render(<NumberForm submitHandler={submitFn} />)

        const input = screen.getByLabelText("Enter your age")
        userEvent.type(input, "")
        userEvent.tab()

        await waitFor(() => {
          expect(screen.queryByText("age is a required field")).not.toBe(null)
        })
      })
    })
  })
})
