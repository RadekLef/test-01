import LandingHeading from './components/LandingHeading'
import logo from "./assets/Finie_logo.svg"
import logo_2 from "./assets/Finie_logo_2.svg"
import logo_3 from "./assets/Finie_logo_3.svg"
import logo_4 from "./assets/Finie_logo_4.svg"
export default function App() {

  return (
    <>
      <LandingHeading logo={logo}></LandingHeading>
      <LandingHeading logo={logo_2}></LandingHeading>
      <LandingHeading logo={logo_3}></LandingHeading>
      <LandingHeading logo={logo_4}></LandingHeading>
    </>
  )
}

