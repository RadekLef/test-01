type LogoProp = {
    logo: string;
  };
  
  export default function LandingPageLogo({ logo }: LogoProp) {
    return (
      <img 
        src={logo} 
        alt="Logo" 
        className="w-[56px] h-[56px]" 
      />
    );
  }