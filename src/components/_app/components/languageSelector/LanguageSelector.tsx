import React from "react"
import { Button } from "@chakra-ui/react"
import { useIntl } from "react-intl"
import { useIntl as appUseIntl } from "@src/hooks"

export const LanguageSelector: React.FC = () => {
  const intl = useIntl()
  const { intl: appIntl } = appUseIntl()

  const handleLocaleUpdate = () => {
    if (appIntl.changeLocale) {
      if (intl.locale === "en") {
        appIntl.changeLocale("fr")
      } else {
        appIntl.changeLocale("en")
      }
    }
  }

  return (
    <Button onClick={handleLocaleUpdate} variant="outline">
      {intl.locale === "en" ? "francais" : "english"}
    </Button>
  )
}
