import React, { useMemo } from "react"
import { authContext } from "../authContext"
import { useProvideAuth } from "../../state/hooks/useProvideAuth"

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth()
  const memoroizedAuth = useMemo(() => {
    return auth
  }, [auth])

  return (
    <authContext.Provider value={memoroizedAuth}>
      {children}
    </authContext.Provider>
  )
}
