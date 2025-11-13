import HomeAbout from "@/components/pages/home/About";
import HeroSection from "@/components/pages/home/Homepage";
import Industries from "@/components/pages/home/Industries";
import HomeServices from "@/components/pages/home/Services";
import Image from "next/image";

import SwiperComponent from "@/components/Swiper";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HomeAbout />
      <HomeServices />
      <Industries />
      <>
        <div className="px-5 md:px-20 pt-16 md:pt-20">
          <div className="flex items-start text-accent text-xs font-campton-book mb-3 gap-1">
            <h5 className="uppercase font- text-accent font-campton">
              // Projects
            </h5>
          </div>
          <h1 className="text-3xl md:text-5xl leading-[1.3] mb-5 w-full md:w-[60%]">
            From Blueprint to Breakthrough: Our Proven EPC Solutions
          </h1>
        </div>
        <SwiperComponent />
      </>
    </div>
  );
}
