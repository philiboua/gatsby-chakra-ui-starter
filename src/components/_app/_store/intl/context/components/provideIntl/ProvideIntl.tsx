import React, { useState } from "react"
import { IntlContext } from "@src/contexts"
import { IntlProvider } from "react-intl"
import messages_fr from "../../../translations/fr.json"
import messages_en from "../../../translations/en.json"

type Messages = {
  [key: string]: any
}

const messages: Messages = {
  fr: messages_fr,
  en: messages_en,
}

export const flattenMessages = (
  nestedMessages: Messages,
  prefix = ""
): Messages => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((translation, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === "string") {
      Object.assign(translation, { [prefixedKey]: value })
    } else {
      Object.assign(translation, flattenMessages(value, prefixedKey))
    }

    return translation
  }, {})
}

export const ProvideIntl: React.FC = ({ children }) => {
  const [locale, setLocale] = useState(
    /^fr/i.test(navigator.language) ? "fr" : "en"
  )

  const changeLocale = (lang: string) => {
    setLocale(lang)
  }

  return (
    <IntlContext.Provider value={{ locale, changeLocale }}>
      <IntlProvider
        locale={locale}
        key={locale}
        messages={flattenMessages(messages[locale])}
      >
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  )
}
