import logo from "../assets/Finie_logo.svg";
import logo_2 from "../assets/Finie_logo_2.svg";
import logo_3 from "../assets/Finie_logo_3.svg";
import logo_4 from "../assets/Finie_logo_4.svg";

type LogoProp = {
    setSelectedLogo: (logo: string) => void;
  };
  
  export default function LandingPageLogo({ setSelectedLogo }: LogoProp) {

    const logos = [logo, logo_2, logo_3, logo_4];

    return (
      <div 
        className="flex flex-col items-start gap-10"
        >
        {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          className="w-[56px] h-[56px] cursor-pointer"
          onClick={() => setSelectedLogo(logo)}
        />
      ))}
      </div>
    );
  }