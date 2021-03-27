/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from "react"
import { render, RenderOptions } from "@testing-library/react"
import { ChakraProvider } from "@chakra-ui/react"
import { toHaveNoViolations, axe } from "jest-axe"
import { RunOptions } from "axe-core"
import theme from "../chakra-ui/theme"

expect.extend(toHaveNoViolations)

type UI = Parameters<typeof render>[0]

function ChildrenPassthrough({ children }: { children: React.ReactElement }) {
  return children
}

const AllTheProviders: React.FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  })
}

export interface TestOptions extends Omit<RenderOptions, "wrapper"> {
  /**
   * optional additional wrapper, e.g. Context
   *
   * @example
   * ```ts
   * // single wrapper
   * render(<MyConponent />, {
   *  wrapper: MyContext
   * });
   *
   * // multiple wrapper
   * render(<MyConponent />, {
   *  wrapper: ({ children }) => (
   *    <ContextA>
   *      <ContextB>
   *        {children}
   *      <ContextB />
   *    <ContextA />
   *  )
   * });
   *
   * ```
   */
  wrapper?: typeof ChildrenPassthrough
}

type TestA11YOptions = TestOptions & { axeOptions?: RunOptions }
/**
 * Validates against common a11y mistakes.
 *
 * Wrapper for jest-axe
 * credit to Chakra UI for this helper method
 *
 * @example
 * ```jsx
 * it('passes a11y test', async () => {
 *  await testA11Y(<MyComponent />, options);
 * });
 *
 * // sometimes we need to perform interactions first to render conditional UI
 * it('passes a11y test when open', async () => {
 *  const { container } = render(<MyComponent />, options);
 *
 *  fireEvent.click(screen.getByRole('button'));
 *
 *  await testA11Y(container, options);
 * });
 * ```
 *
 * @see https://github.com/nickcolley/jest-axe#testing-react-with-react-testing-library
 */

export const testA11y = async (
  ui: UI | Element,
  { axeOptions }: TestA11YOptions = {}
) => {
  const container = React.isValidElement(ui) ? customRender(ui).container : ui

  const results = await axe(container, axeOptions)

  expect(results).toHaveNoViolations()
}

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
