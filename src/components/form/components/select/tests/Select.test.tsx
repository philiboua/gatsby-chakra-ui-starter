import React from "react"
import { screen, render, testA11y, waitFor } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { SelectForm } from "./mock/SelectForm"

/**
 * We are testing the Select Input component
 * Below you can find details of the component  :
 *
 *    <FormControl name="city">
 *      <Select name="city" label="Choose your city">
 *          <option value="toronto">Toronto</option>
 *          <option value="montreal">Montreal</option>
 *          <option value="ottawa">Ottawa</option>
 *      </Select>
 *    </FormControl>
 */

describe("Select : <Select/>", () => {
  it("passes a11y test", async () => {
    const handleSubmit = jest.fn()
    await testA11y(<SelectForm submitHandler={handleSubmit} />)
  })

  describe("initial state", () => {
    it("renders a Select input", () => {
      const handleSubmit = jest.fn()
      render(<SelectForm submitHandler={handleSubmit} />)

      expect(screen.getByLabelText("Choose your city")).toBeInTheDocument()
    })
  })

  describe("user interactions", () => {
    it("should display the value selected by the user", () => {
      const submitFn = jest.fn()
      render(<SelectForm submitHandler={submitFn} />)

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
      render(<SelectForm submitHandler={submitFn} />)

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
