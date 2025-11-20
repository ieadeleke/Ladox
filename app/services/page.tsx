import Image from "next/image";
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

const companies = [
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

const ServicesPage = () => {
  return (
    <section>
      <header>
        <>
          <div className="px-5 md:px-20 pt-16 md:pt-20 mb-12 md:mb-20">
            <h1 className="text-3xl md:text-5xl leading-[1.3] mb-3 w-full md:w-[80%]">
              Our Comprehensive{" "}
              <span className="font-bold"> Solutions</span>{" "}
            </h1>
            <p className="text-base leading-loose md:leading-loose w-full md:w-[50%]">
              We operate a decentralized organizational structure in order to
              harness individual skills and expertise with the aim of executing
              any project professionally, on time, within budget and in
              conformity with specifications.
            </p>
          </div>
        </>
      </header>
      <section className="cover-bg px-5 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-14">
            <div>
              <h4 className="text-white text-xl mb-3">Mechanical</h4>
              <ul className="space-y-3 list-disc">
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Industrial Refrigeration and Air conditioning.
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Sales, Leasing and Maintenance of Room/Split/Central
                  Air-Conditioners and Cold room.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl mb-3">Oil and Gas Services</h4>
              <ul className="space-y-3 list-disc">
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Supply of Petroleum products
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Distribution of petroleum products to various locations
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Supply of Oil tools</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl mb-3">
                Facility Management Services
              </h4>
              <ul className="space-y-3 list-disc">
                <li className="text-white opacity-70 leading-loose md:leading-loose">Carpentry</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Renovations</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Plumbing</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Electrical Services</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Painting</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Janitorial Services</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl mb-3">
                Electrical / Telecommunications
              </h4>
              <ul className="space-y-3 list-disc">
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Distribution of Generators – Sales, Leasing and Maintenance.
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Supply of Electrical Materials and OEM spares.
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Installation of Electrical Equipment
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Telecoms Cell Site Maintenance
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Installation of Batteries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Companies grid */}
      <section className="px-5 md:px-20 py-12 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {companies.map((c, idx) => {
            const sizeCls =
              idx === 4
                ? "h-16 md:h-40" // 5th logo a bit larger
                : idx === 7
                ? "h-10 md:h-8" // 8th logo a bit smaller
                : idx === 5
                ? "h-10 md:h-20" // 5th logo a bit bigger
                : idx === 13
                ? "h-10 md:h-12" // 5th logo a bit bigger
                : "h-12 md:h-16"; // default
            return (
              <div
                key={c.alt}
                className="w-full h-28 md:h-32 flex items-center justify-center bg-white border border-[#EDEDED] rounded-xl opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  className={`${sizeCls} w-auto object-contain`}
                  height={80}
                  width={240}
                  quality={100}
                />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default ServicesPage;
