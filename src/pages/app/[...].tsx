import React from "react"
import { Router } from "@reach/router"
import { ProvideAuth, ProvideIntl } from "@src/components/_app/_store"
import {
  SignIn,
  SignUp,
  Profile,
  PasswordForget,
  PasswordReset,
} from "@src/components/_app"

interface PageProps {
  path: string
}

const Details: React.FC<PageProps> = () => <p>details</p>

const App: React.FC = () => {
  return (
    <ProvideIntl>
      <ProvideAuth>
        <Router basepath="/app">
          <Details path="/details" />
          <SignUp path="/signup" />
          <Profile path="/profile" />
          <PasswordForget path="/forgotpassword" />
          <PasswordReset path="resetpassword" />
          <SignIn path="/" />
        </Router>
      </ProvideAuth>
    </ProvideIntl>
  )
}
export default App
