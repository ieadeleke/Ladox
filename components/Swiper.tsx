"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import _1 from "@/assets/_1.jpg";
import _2 from "@/assets/_2.svg";
import _3 from "@/assets/_3.svg";
import _4 from "@/assets/_4.svg";
import _5 from "@/assets/_5.svg";

const images = [
  { src: _1, alt: "Next.js" },
  { src: _2, alt: "Vercel" },
  { src: _3, alt: "Globe" },
  { src: _4, alt: "Window" },
  { src: _5, alt: "File" },
  // Duplicate to create a longer carousel experience
  { src: _1, alt: "Next.js" },
  { src: _2, alt: "Vercel" },
  { src: _3, alt: "Globe" },
  { src: _4, alt: "Window" },
  { src: _5, alt: "File" },
];

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={4.5}
      spaceBetween={12}
      loop
      loopAdditionalSlides={images.length}
      speed={12000}
      autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
      allowTouchMove={false}
      navigation
      className=""
    >
      {images.map((img, idx) => (
        <SwiperSlide key={`${img.src}-${idx}`} className="">
            <Image
              src={img.src}
              alt={img.alt}
              width={1000}
              height={1000}
              className="object-cover object-center w-full h-80"
              priority={idx < 5}
            />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
