import LandingPageLogo from './LandingPageLogo';

type LogoProp = {
  logo: string;
};

export default function LandingPageHeading({ logo }: LogoProp) {
  return (
    <div className="font-dm-sans flex flex-col items-center justify-center min-h-screen text-center gap-6">
      <LandingPageLogo logo={logo} />
      <h3 className="text-[#0038FF] leading-[19.6px] text-[15px] tracking-[0.3rem] uppercase font-black">
        Projekty
      </h3>
      <h2 className="text-[50px] font-black">
        Tvoříme projekty s osobností
      </h2>
    </div>
  );
}