import { motion } from "framer-motion";

type LogoProp = {
  logo: string;
};

export default function LandingPageHeading({ logo }: LogoProp) {
  return (
    <div className="font-dm-sans flex flex-col items-center justify-center min-h-screen text-center gap-6">
      <motion.img src={ logo } key= { logo } alt="Logo" 
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      />
      <h3 className="text-[#0038FF] leading-[19.6px] text-[15px] tracking-[0.3rem] uppercase font-black">
        Projekty
      </h3>
      <h2 className="text-[50px] font-black">
        Tvoříme projekty s osobností
      </h2>
    </div>
  );
}