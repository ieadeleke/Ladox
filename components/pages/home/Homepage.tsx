"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { RiHomeLine } from "react-icons/ri";

import HeroImg from "@/assets/projects/images/compliance2.jpg";
import Image from "next/image";
import CompliancePhoto from "@/assets/projects/images/ladoxHero2.jpeg";
import ImgMechanical from "@/assets/projects/images/ladoHero3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";


const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 pt-16 md:pt-14 pb-8 md:pb-10 home-hero">
      <div className="pt-6 md:pt-14 pb-10 md:pb-28">
        <div className="flex items-start text-accent text-xs font-campton-book mb-5 gap-1">
          <RiHomeLine className="font-black" />{" "}
          <h5 className="uppercase font- text-accent font-campton">
            INNOVATIVE ENGINEERING, RELIABLE DELIVERY
          </h5>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-[1.3] mb-3">
          Welcome to Ladox Engineering Limited
        </h1>
        <p className="text-sm leading-loose mb-6">
          We deliver Engineering, Procurement and Contracting services across
          Mechanical, Electrical, Refrigeration and Air‑Conditioning, Facility
          Management, and Telecoms. International standards, strong HSE culture
          and on‑time, within‑budget execution.
        </p>
        <div className="flex items-center gap-0">
          <Link
            href="/services"
            className="bg-accent h-11 md:h-12 flex items-center justify-center font-campton px-5 md:px-6 w-max rounded-full text-sm"
          >
            Our Services
          </Link>
          <Link
            href="/services"
            className="bg-accent size-11 md:size-12 flex items-center justify-center font-bold rounded-full text-sm"
      >
            <FaArrowRight className="text-lg animated-arrow" />
          </Link>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          speed={500}
          loop
          allowTouchMove={false}
          className="rounded-2xl overflow-hidden"
        >
          {[HeroImg, CompliancePhoto, ImgMechanical].map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img}
                alt="Ladox Engineering"
                className="w-full h-120 object-center object-cover"
                quality={100}
                width={1000}
                height={1000}
                priority={i === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
