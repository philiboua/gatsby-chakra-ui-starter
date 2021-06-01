import React from "react"

interface IntlProviderProps {
  locale: string
  changeLocale?: (locale: string) => void
}

const contextDefaultValue = {
  locale: /^fr/i.test(navigator.language) ? "fr" : "en",
}

export const IntlContext = React.createContext<IntlProviderProps>(
  contextDefaultValue
)
