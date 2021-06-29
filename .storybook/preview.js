import React from "react"
import { action } from "@storybook/addon-actions"
import { ChakraProvider } from "@chakra-ui/react"
import GlobalCSS from "../src/components/GlobalCSS"
import theme from "../src/chakra-ui/theme"
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport"
import { setIntlConfig, withIntl } from "storybook-addon-intl"
import { IntlContextProvider } from "gatsby-plugin-react-intl"

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  options: {
    storySort: {
      order: [
        "Foundation",
        ["Typography", "Colors styles", "layout"],
        "Components",
        [
          "Text",
          "Link",
          "List of Links",
          "button",
          "Article",
          "Feature",
          "Header",
          "Billboard",
        ],
        "Marketing",
      ],
    },
  },
}

// Decorator for Gatsby intl
const locales = [`en`, `fr`]

export const messages = locales.reduce((acc, locale) => {
  return {
    ...acc,
    [locale]: require(`../locales/${locale}.json`),
  }
}, {})

const getMessages = locale => messages[locale]

setIntlConfig({
  locales,
  defaultLocale: "en",
  getMessages,
})

const intlConfig = {
  language: "en",
  languages: locales,
  messages: "",
  originalPath: "/",
  redirect: true,
  routed: true,
}

export const decorators = [
  Story => (
    <ChakraProvider theme={theme}>
      <GlobalCSS />
      <Story />
    </ChakraProvider>
  ),
  Story => (
    <IntlContextProvider value={intlConfig}>
      <Story />
    </IntlContextProvider>
  ),
  withIntl,
]
