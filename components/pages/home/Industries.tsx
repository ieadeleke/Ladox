"use client";

import { GiOilDrum, GiFactory, GiRadioTower, GiGreekTemple } from "react-icons/gi";
import LogoMarquee from "@/components/LogoMarquee";

const Industries = () => {
  return (
    <section className="px-5 md:px-20 py-16 md:py-20 cover-bg text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        <div>
          <div className="mb-6">
            <h6 className="text-white opacity-70 uppercase mb-5">// Industries</h6>
            <h3 className="text-4xl font-campton leading-[1.4]">
              Discover the <br /><span className="font-black text-[#A8B7CD]">Industries we serve</span>
            </h3>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            <div>
              <div className="size-16 mb-5 bg-accent rounded-lg flex items-center justify-center">
                <GiOilDrum className="text-white text-2xl" />
              </div>
              <h5 className="text-xl mb-2 font-bold">Oil & Gas</h5>
              <p className="text-sm opacity-80 leading-loose">
                EPC delivery for upstream and downstream operations — HVAC, electrical,
                equipment supply, and site maintenance for leading operators.
              </p>
            </div>
            <div>
              <div className="size-16 mb-5 bg-accent rounded-lg flex items-center justify-center">
                <GiFactory className="text-white text-2xl" />
              </div>
              <h5 className="text-xl mb-2 font-bold">Manufacturing & FMCG</h5>
              <p className="text-sm opacity-80 leading-loose">
                Industrial refrigeration, power distribution, and facility management for
                high‑availability production environments.
              </p>
            </div>
            <div>
              <div className="size-16 mb-5 bg-accent rounded-lg flex items-center justify-center">
                <GiRadioTower className="text-white text-2xl" />
              </div>
              <h5 className="text-xl mb-2 font-bold">Telecoms & Power</h5>
              <p className="text-sm opacity-80 leading-loose">
                Cell‑site maintenance, battery installations, and generator supply, leasing,
                and maintenance for robust network uptime.
              </p>
            </div>
            <div>
              <div className="size-16 mb-5 bg-accent rounded-lg flex items-center justify-center">
                <GiGreekTemple className="text-white text-2xl" />
              </div>
              <h5 className="text-xl mb-2 font-bold">Public Sector & Infrastructure</h5>
              <p className="text-sm opacity-80 leading-loose">
                Turnkey projects executed to international standards — safe, efficient,
                and compliant with regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Rolling client logos within Industries */}
      <div className="mt-10">
        <p className="text-xs uppercase tracking-wide text-white/70 mb-3">Trusted by leading brands</p>
        <LogoMarquee tone="dark" compact flush fullBleed noBorder />
      </div>
    </section>
  );
};

export default Industries;
