import React from "react"
import { screen, render, testA11y, waitFor } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { Input } from "@src/components"
import { FormWp } from "./mock/FormWp"

describe("Input field : <Input/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(
      <FormWp submitHandler={handleSubmit}>
        <Input
          size="lg"
          placeholder="Enter your first name"
          name="firstName"
          label="First Name"
          helperText="You can get started"
        />
      </FormWp>
    )
  })

  describe("initial state", () => {
    it("renders an input field", () => {
      const handleSubmit = jest.fn()
      render(
        <FormWp submitHandler={handleSubmit}>
          <Input
            size="lg"
            placeholder="Enter your first name"
            name="firstName"
            label="First Name"
            helperText="You can get started"
          />
        </FormWp>
      )

      expect(screen.getByText("You can get started")).toBeInTheDocument()
      expect(screen.getByLabelText("First Name")).toBeInTheDocument()
      expect(screen.getByLabelText("First Name").nodeValue).toEqual(null)
    })

    it("renders no error message", () => {
      const handleSubmit = jest.fn()
      render(
        <FormWp submitHandler={handleSubmit}>
          <Input
            size="lg"
            placeholder="Enter your first name"
            name="firstName"
            label="First Name"
            helperText="You can get started"
          />
        </FormWp>
      )

      expect(screen.queryByText("This field is required")).toBe(null)
    })
  })

  describe("user interactions", () => {
    describe("user submits the form with valid data", () => {
      it("renders no error message", async () => {
        const submitFn = jest.fn()
        render(
          <FormWp submitHandler={submitFn}>
            <Input
              size="lg"
              placeholder="Enter your first name"
              name="firstName"
              label="First Name"
              helperText="You can get started"
            />
          </FormWp>
        )

        const input = screen.getByLabelText("First Name")
        userEvent.type(input, "Philippe")

        const submitBtn = screen.getByRole("button", { name: /submit/i })
        userEvent.click(submitBtn)

        await waitFor(() => {
          expect(submitFn).toHaveBeenCalledTimes(1)
          expect(submitFn).toHaveBeenCalledWith({ firstName: "Philippe" })
        })
      })
    })

    describe("user submits the form with invalid data", () => {
      it("renders an error message", async () => {
        const submitFn = jest.fn()
        render(
          <FormWp submitHandler={submitFn}>
            <Input
              size="lg"
              placeholder="Enter your first name"
              name="firstName"
              label="First Name"
              helperText="You can get started"
            />
          </FormWp>
        )

        const input = screen.getByLabelText("First Name")
        userEvent.type(input, "")

        const submitBtn = screen.getByRole("button", { name: /submit/i })
        userEvent.click(submitBtn)

        await waitFor(() => {
          expect(submitFn).toHaveBeenCalledTimes(0)
          expect(screen.queryByText("This field is required")).not.toBe(null)
        })
      })
    })

    describe("user fills the input field with valid data and go to another element by tabing", () => {
      it("renders an error message", async () => {
        const submitFn = jest.fn()
        render(
          <FormWp submitHandler={submitFn}>
            <Input
              size="lg"
              placeholder="Enter your first name"
              name="firstName"
              label="First Name"
              helperText="You can get started"
            />
          </FormWp>
        )

        const input = screen.getByLabelText("First Name")
        userEvent.type(input, "Philippe")
        userEvent.tab()

        await waitFor(() => {
          expect(screen.queryByText("This field is required")).toBe(null)
        })
      })
    })

    describe("user fills the input field with invalid data and go to another element by tabing", () => {
      it("renders an error message", async () => {
        const submitFn = jest.fn()
        render(
          <FormWp submitHandler={submitFn}>
            <Input
              size="lg"
              placeholder="Enter your first name"
              name="firstName"
              label="First Name"
              helperText="You can get started"
            />
          </FormWp>
        )

        const input = screen.getByLabelText("First Name")
        userEvent.type(input, "")
        userEvent.tab()

        await waitFor(() => {
          expect(screen.queryByText("This field is required")).not.toBe(null)
        })
      })
    })
  })
})
