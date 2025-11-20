"use client";

import ImgMechanical from "@/assets/projects/images/mechanical.jpeg";
import ImgOilGas from "@/assets/projects/images/oil.jpeg";
import ImgFacility from "@/assets/projects/images/facilityMain.jpeg";
import ImgElectrical from "@/assets/projects/images/electrical.jpeg";
import { IoCheckmarkCircle } from "react-icons/io5";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type TabKey = "mechanical" | "oilgas" | "facility" | "electrical";

const TABS: { key: TabKey; label: string }[] = [
  { key: "mechanical", label: "Mechanical" },
  { key: "oilgas", label: "Oil and Gas Service" },
  { key: "facility", label: "Facility Management Service" },
  { key: "electrical", label: "Electrical / Telecommunications" },
];

const CONTENT: Record<
  TabKey,
  { title: string; blurb: string; items: string[]; image: StaticImageData }
> = {
  mechanical: {
    title: "Mechanical",
    blurb:
      "Design, installation and maintenance of industrial refrigeration and AC, with sales, leasing and planned maintenance for all scales.",
    items: [
      "Industrial Refrigeration and Air‑Conditioning",
      "Sales, Leasing and Maintenance of Room/Split/Central ACs",
      "Cold room supply, installation and maintenance",
    ],
    image: ImgMechanical,
  },
  oilgas: {
    title: "Oil and Gas Service",
    blurb:
      "Dependable supply and distribution of petroleum products and oil tools to multiple locations with strict client and regulatory compliance.",
    items: [
      "Supply of petroleum products",
      "Distribution to multiple locations",
      "Supply of oil tools",
    ],
    image: ImgOilGas,
  },
  facility: {
    title: "Facility Management Service",
    blurb:
      "End‑to‑end upkeep—carpentry, renovations, plumbing, electrical, painting and janitorial—focused on uptime, safety and cost control.",
    items: [
      "Carpentry and Renovations",
      "Plumbing and Electrical Services",
      "Painting and Janitorial Services",
    ],
    image: ImgFacility,
  },
  electrical: {
    title: "Electrical / Telecommunications",
    blurb:
      "Reliable power and network: generators (sales, leasing, maintenance), OEM electricals, plus cell‑site and battery services.",
    items: [
      "Distribution of generators — sales, leasing and maintenance",
      "Supply of electrical materials and OEM spares",
      "Electrical equipment installation, cell‑site maintenance and batteries",
    ],
    image: ImgElectrical,
  },
};

const HomeServices = () => {
  const [active, setActive] = useState<TabKey>("mechanical");
  const data = CONTENT[active];

  return (
    <section className="px-5 md:px-20 py-16 md:py-20">
      <div>
        <h6 className="text-accent uppercase mb-2">// Services</h6>
        <h4 className="text-3xl md:text-4xl w-full md:w-[60%] leading-[1.4] font-campton">
          Engineering Nigeria’s Industries with International Standards and HSE Excellence
        </h4>
        <div className="mt-7">
          {/* Tabs */}
          <div className="border border-solid rounded-full w-full md:w-max px-2 py-2 border-[#E9E9E9] flex flex-wrap gap-2">
            {TABS.map((t) => {
              const isActive = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  aria-selected={isActive}
                  className={`py-3 px-5 md:px-9 rounded-full text-sm md:text-base cursor-pointer transition ${
                    isActive
                      ? "bg-[#E9F1FE] text-accent font-campton-bold"
                      : "text-black hover:bg-[#F5F7FB] font-campton"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-8">
            <Image
              src={data.image}
              alt={data.title}
              className="w-full md:w-[35%] h-[25rem] object-cover rounded-2xl"
              quality={100}
              width={1000}
              height={1000}
            />
            <div>
              <h3 className="text-2xl md:text-2xl mb-2">{data.title}</h3>
              <p className="text-base w-full md:w-[80%] mb-6 leading-loose">
                {data.blurb}
              </p>
              <ul className="space-y-4">
                {data.items.map((it) => (
                  <li key={it} className="flex gap-2 items-start">
                    <span className="mt-1"><IoCheckmarkCircle /></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
