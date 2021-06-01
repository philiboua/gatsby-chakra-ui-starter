import { useContext } from "react"
import { IntlContext } from "@src/contexts"

export const useIntl = () => {
  const intl = useContext(IntlContext)

  return {
    intl,
  }
}
