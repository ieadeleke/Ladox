import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import logoShell from "@/assets/companies/imgi_20_shell-logo.png";
import logoAgip from "@/assets/companies/imgi_21_agip-logo.png";
import logoHalliburton from "@/assets/companies/imgi_22_halliburton-logo.png";
import logoSchlumberger from "@/assets/companies/imgi_23_schlumberger-logo.png";
// import logoEleme from "@/assets/companies/imgi_24_eleme-petrochemical-logo.png";
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
import Renaissance from "@/assets/companies/renaissance.jpeg";

const logos: { src: StaticImageData; alt: string }[] = [
  { src: logoShell, alt: "Shell" },
  { src: logoAgip, alt: "Agip" },
  { src: logoHalliburton, alt: "Halliburton" },
  { src: logoSchlumberger, alt: "Schlumberger" },
  // { src: logoEleme, alt: "Eleme Petrochemical" },
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
  { src: Renaissance, alt: "Renaissance" },
];

type RowProps = { tone?: "light" | "dark"; compact?: boolean; shrinkAt?: number[] };

function Row({ tone = "light", compact = false, shrinkAt = [] }: RowProps) {
  const itemWidth = compact ? "w-28 md:w-32" : "w-32 md:w-40"; // unify width per logo
  const itemCls = clsx(
    "shrink-0 transition px-0 flex items-center justify-center",
    itemWidth,
    tone === "dark" ? "opacity-90 hover:opacity-100" : "opacity-70 hover:opacity-100"
  );
  const shrinkSet = new Set((shrinkAt || []).map((i) => i - 1)); // accept 1-based indexes
  return (
    <div className={clsx("flex items-center", compact ? "gap-4 md:gap-6" : "gap-6 md:gap-8") }>
      {logos.map((logo, idx) => {
        const isShrunk = shrinkSet.has(idx);
        const imgCls = clsx(
          "w-full h-auto object-contain transition",
          compact
            ? isShrunk
              ? "max-h-6 md:max-h-7"
              : "max-h-8 md:max-h-9"
            : isShrunk
            ? "max-h-6 md:max-h-7"
            : "max-h-8 md:max-h-10",
          "grayscale hover:grayscale-0"
        );
        return (
          <div key={logo.alt} className={itemCls}>
            <Image src={logo.src} alt={logo.alt} className={imgCls} height={40} width={160} quality={100} />
          </div>
        );
      })}
    </div>
  );
}

type LogoMarqueeProps = {
  tone?: "light" | "dark";
  className?: string;
  compact?: boolean;
  noBorder?: boolean;
  flush?: boolean; // remove internal paddings and chrome
  fullBleed?: boolean; // stretch to viewport width within padded parents
  shrinkAt?: number[]; // 1-based indices to render slightly smaller
};

const LogoMarquee = ({
  tone = "light",
  className,
  compact = false,
  noBorder = false,
  flush = false,
  fullBleed = false,
  shrinkAt = [],
}: LogoMarqueeProps) => {
  const wrapperCls = clsx(
    fullBleed && "-mx-5 md:-mx-20",
    tone === "light"
      ? clsx(flush ? "px-0 py-0" : "px-5 md:px-20 py-10", !noBorder && "border-t border-[#EDEDED]")
      : flush ? "px-0 py-0" : "px-5 md:px-20 pt-6 pb-2"
  );
  const containerCls = clsx(
    "relative overflow-hidden",
    tone === "dark" && (flush ? "bg-transparent" : "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"),
    flush ? "px-0 py-0" : tone === "dark" ? "px-4 md:px-6 py-4" : ""
  );
  return (
    <section className={clsx(wrapperCls, className)}>
      <div className={containerCls}>
        <div className="logos-track">
          <Row tone={tone} compact={compact} shrinkAt={shrinkAt} />
          <Row tone={tone} compact={compact} shrinkAt={shrinkAt} />
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
