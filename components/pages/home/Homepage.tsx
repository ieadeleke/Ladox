import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { RiHomeLine } from "react-icons/ri";

import HeroImg from "@/assets/hero.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-20 pt-16 md:pt-20 pb-8 md:pb-10 home-hero">
      <div className="pt-6 md:pt-14 pb-10 md:pb-28">
        <div className="flex items-start text-accent text-xs font-campton-book mb-5 gap-1">
          <RiHomeLine className="font-black" />{" "}
          <h5 className="uppercase font- text-accent font-campton">
            BUILDING STRONG FOUNDATIONS FOR YOUR DREAM HOME
          </h5>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-[1.3] mb-3">
          <span className="font-campton-thin">Welcome to LADOX</span>{" "}
          Engineering Company Limited
        </h1>
        <p className="text-sm leading-loose mb-6">
          Ladox was incorporated to provide specialized services to
          manufacturing, oil companies and Government establishments in a wide
          range of technical areas including Mechanical, Electrical,
          Refrigeration, Air-Conditioning Engineering and Contracting.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href=""
            className="bg-accent h-11 md:h-12 flex items-center justify-center font-campton px-5 md:px-6 w-max rounded-full text-sm"
          >
            Our Services
          </Link>
          <Link
            href=""
            className="bg-accent size-11 md:size-12 flex items-center justify-center font-bold rounded-full text-sm"
      >
            <FaArrowRight className="text-lg animated-arrow" />
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={HeroImg}
          alt="Ladox Engineering"
          className=""
          quality={100}
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default HeroSection;
