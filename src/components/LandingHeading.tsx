import logo from "../assets/Finie_logo.svg"

export default function LandingHeading() {
  return (
    <div className="font-dm-sans flex flex-col items-center justify-center min-h-screen text-center gap-6">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-[56px] h-[56px]" />
        <h3 className="text-[#0038FF] leading-[19.6px] text-[15px] tracking-[0.3rem] uppercase font-black">Projekty</h3>
        <h2 className="text-[50px] font-black">Tvoříme projekty s osobností</h2>
    </div>
  )
}
