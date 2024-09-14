import LandingPageHeading from './components/LandingPageHeading'
import logo from "./assets/Finie_logo.svg"
import logo_2 from "./assets/Finie_logo_2.svg"
import logo_3 from "./assets/Finie_logo_3.svg"
import logo_4 from "./assets/Finie_logo_4.svg"

export default function App() {
  return (
    <>
      <LandingPageHeading logo={logo} />
      <LandingPageHeading logo={logo_2} />
      <LandingPageHeading logo={logo_3} />
      <LandingPageHeading logo={logo_4} />
    </>
  )
}

