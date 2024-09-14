import { useState } from "react";
import LandingPageHeading from "./components/LandingPageHeading";
import LandingPageLogo from "./components/LandingPageLogo";
import logo from "./assets/Finie_logo.svg"

export default function App() {
  const [selectedLogo, setSelectedLogo] = useState(logo);

  return (
    <>
    <div className="flex h-screen">
      <div className="flex items-center justify-center ml-10">
        <LandingPageLogo setSelectedLogo={setSelectedLogo} />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <LandingPageHeading logo={selectedLogo} />
      </div>
    </div>
    </>
  )
}

