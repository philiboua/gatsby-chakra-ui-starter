import React from "react"
import { screen, render, testA11y, waitFor } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { PinInputForm } from "./mock/PinInputForm"

/**
 * We are testing the Pint Input component
 * Below you can find details of the component  :
 *
 *  <PinInput
 *      label="Enter verification code"
 *      name="pinCode"
 *      pinAmount={5}
 *  />
 *
 */

describe("PinInput field : <PinInput/>", () => {
  /**
   * a11y test fails
   * the pin input field has an incorrect autoComplete value = "not-allowed"
   * the attribute has been fixed in Chakra 1.0.8
   * @link  https://github.com/chakra-ui/chakra-ui/commit/46e24c5820ef2726a4fb16a190efda39fb0b075a#diff-f6b3c3b196e473a8e5ada39bf0d86577bf5ffae8b09f466ad2a437246c33799d
   *
   * Upgrade of the Chakra UI package will be done by May 2021.
   */

  describe("initial state", () => {
    it("renders a pinInput with 5 pinInputFields", () => {
      const handleSubmit = jest.fn()
      render(<PinInputForm submitHandler={handleSubmit} />)

      const inputs = screen.getAllByPlaceholderText("○")
      expect(inputs.length).toBe(5)
    })

    it("renders no error message", () => {
      const handleSubmit = jest.fn()
      render(<PinInputForm submitHandler={handleSubmit} />)
      expect(screen.queryByText("code is a required field")).toBe(null)
    })
  })

  describe("user interactions", () => {
    describe("user submits the form with valid data", () => {
      it("renders no error message", async () => {
        const submitFn = jest.fn()
        render(<PinInputForm submitHandler={submitFn} />)
        const inputs = screen.getAllByPlaceholderText("○")
        inputs.forEach(input => {
          userEvent.type(input, "1")
        })

        const submitBtn = screen.getByRole("button", { name: /submit/i })
        userEvent.click(submitBtn)

        await waitFor(() => {
          expect(submitFn).toHaveBeenCalledTimes(1)
          expect(submitFn).toHaveBeenCalledWith({ code: "11111" })
        })
      })
    })

    describe("user submits the form with invalid data", () => {
      it("renders an error message", async () => {
        const submitFn = jest.fn()
        render(<PinInputForm submitHandler={submitFn} />)

        const submitBtn = screen.getByRole("button", { name: /submit/i })
        userEvent.click(submitBtn)

        await waitFor(() => {
          expect(submitFn).toHaveBeenCalledTimes(0)
          expect(
            screen.getByText("code is a required field")
          ).toBeInTheDocument()
        })
      })
    })
  })
})
