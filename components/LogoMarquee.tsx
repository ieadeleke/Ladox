import Image, { StaticImageData } from "next/image";

import logoShell from "@/assets/companies/imgi_20_shell-logo.png";
import logoAgip from "@/assets/companies/imgi_21_agip-logo.png";
import logoHalliburton from "@/assets/companies/imgi_22_halliburton-logo.png";
import logoSchlumberger from "@/assets/companies/imgi_23_schlumberger-logo.png";
import logoEleme from "@/assets/companies/imgi_24_eleme-petrochemical-logo.png";
import logoGlobacom from "@/assets/companies/imgi_25_globacom-logo.png";
import logoTotal from "@/assets/companies/imgi_26_total-energies-logo.png";
import logoNigalex from "@/assets/companies/imgi_27_nigalex-logo.png";
import logoReynolds from "@/assets/companies/imgi_28_reynolds-construction-logo.png";
import logoUac from "@/assets/companies/imgi_29_uac-foods-logo.png";
import logoNestle from "@/assets/companies/imgi_30_nestle-logo.png";
import logoAllianz from "@/assets/companies/imgi_33_allianz-nigeria-logo.png";
import logoSterlingOil from "@/assets/companies/imgi_34_sterling-oil.png";
import logoIom from "@/assets/companies/imgi_36_iom.png";
import logoCFAO from "@/assets/companies/cfao-laborex.png";

const logos: { src: StaticImageData; alt: string }[] = [
  { src: logoShell, alt: "Shell" },
  { src: logoAgip, alt: "Agip" },
  { src: logoHalliburton, alt: "Halliburton" },
  { src: logoSchlumberger, alt: "Schlumberger" },
  { src: logoEleme, alt: "Eleme Petrochemical" },
  { src: logoGlobacom, alt: "Globacom" },
  { src: logoTotal, alt: "TotalEnergies" },
  { src: logoNigalex, alt: "Nigalex" },
  { src: logoReynolds, alt: "Reynolds Construction" },
  { src: logoUac, alt: "UAC Foods" },
  { src: logoNestle, alt: "Nestlé" },
  { src: logoAllianz, alt: "Allianz" },
  { src: logoSterlingOil, alt: "Sterling Oil" },
  { src: logoIom, alt: "IOM" },
  { src: logoCFAO, alt: "CFAO Laborex" },
];

function Row() {
  return (
    <div className="flex items-center gap-10 md:gap-16">
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="shrink-0 opacity-70 hover:opacity-100 transition px-4 md:px-6"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0"
            height={40}
            width={160}
            quality={100}
          />
        </div>
      ))}
    </div>
  );
}

const LogoMarquee = () => {
  return (
    <section className="px-5 md:px-20 py-10 border-t border-[#EDEDED]">
      <div className="relative overflow-hidden">
        <div className="logos-track">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
