import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { RiHomeLine } from "react-icons/ri";

import HeroImg from "@/assets/hero.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-2 gap-5 px-20 py-20">
      <div className="pt-14 pb-40">
        <div className="flex items-start text-accent text-xs font-campton-book mb-3 gap-1">
          <RiHomeLine className="font-black" />{" "}
          <h5 className="uppercase font- text-accent font-campton">
            BUILDING STRONG FOUNDATIONS FOR YOUR DREAM HOME
          </h5>
        </div>
        <h1 className="text-5xl font-bold leading-[1.3] mb-3">
          <span className="font-campton-thin">Welcome to LADOX</span>{" "}
          Engineering Company Limited
        </h1>
        <p className="text-sm leading-loose mb-6">
          Ladox was incorporated to provide specialized services to
          manufacturing, oil companies and Government establishments in a wide
          range of technical areas including Mechanical, Electrical,
          Refrigeration, Air-Conditioning Engineering and Contracting.
        </p>
        <div className="flex items-center">
          <Link
            href=""
            className="bg-accent h-12 flex items-center justify-center font-campton px-6 w-max rounded-full text-sm"
          >
            Our Services
          </Link>
          <Link
            href=""
            className="bg-accent size-12 flex items-center justify-center font-bold rounded-full text-sm"
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
