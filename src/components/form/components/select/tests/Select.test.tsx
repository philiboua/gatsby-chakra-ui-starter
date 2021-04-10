import React from "react"
import { screen, render, testA11y, waitFor } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { Select } from "@src/components"
import { FormWp } from "./mock/FormWp"

describe("Select : <Select/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(
      <FormWp submitHandler={handleSubmit}>
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
      </FormWp>
    )
  })

  describe("initial state", () => {
    it("renders a Select input", () => {
      const handleSubmit = jest.fn()
      render(
        <FormWp submitHandler={handleSubmit}>
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
        </FormWp>
      )

      expect(screen.getByLabelText("Choose your city")).toBeInTheDocument()
    })
  })

  describe("user interactions", () => {
    it("should display the value selected by the user", () => {
      const submitFn = jest.fn()
      render(
        <FormWp submitHandler={submitFn}>
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
        </FormWp>
      )

      userEvent.selectOptions(screen.getByTestId("select"), "ottawa")

      expect((screen.getByTestId("val1") as HTMLOptionElement).selected).toBe(
        false
      )
      expect((screen.getByTestId("val2") as HTMLOptionElement).selected).toBe(
        false
      )
      expect((screen.getByTestId("val3") as HTMLOptionElement).selected).toBe(
        true
      )
    })

    it("should submit the form with the value selected", async () => {
      const submitFn = jest.fn()
      render(
        <FormWp submitHandler={submitFn}>
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
        </FormWp>
      )

      userEvent.selectOptions(screen.getByTestId("select"), "montreal")

      const submitBtn = screen.getByText(/submit/i)
      userEvent.click(submitBtn)

      await waitFor(() => {
        expect(submitFn).toHaveBeenCalledTimes(1)
        expect(submitFn).toHaveBeenCalledWith({ city: "montreal" })
      })
    })
  })
})
