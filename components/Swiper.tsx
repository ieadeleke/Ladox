"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Project carousel images (alphabetical by filename)
import elect from "@/assets/projects/carousel/elect.jpeg";
import elect1 from "@/assets/projects/carousel/elect1.jpeg";
import elect2 from "@/assets/projects/carousel/elect2.jpeg";
import elect4 from "@/assets/projects/carousel/elect4.jpeg";
import elect5 from "@/assets/projects/carousel/elect5.jpeg";
import elect6 from "@/assets/projects/carousel/elect6.jpeg";
import elect7 from "@/assets/projects/carousel/elect7.jpeg";
import elect8 from "@/assets/projects/carousel/elect8.jpeg";
import facility1 from "@/assets/projects/carousel/facility1.jpeg";
import facility2 from "@/assets/projects/carousel/facility2.jpeg";
import facility3 from "@/assets/projects/carousel/facility3.jpeg";
import facility4 from "@/assets/projects/carousel/facility4.jpeg";
import facility5 from "@/assets/projects/carousel/facility5.jpeg";
import facility7 from "@/assets/projects/carousel/facility7.jpeg";
import mech1 from "@/assets/projects/carousel/mech1.jpeg";
import mech2 from "@/assets/projects/carousel/mech2.jpeg";
import mech3 from "@/assets/projects/carousel/mech3.jpeg";
import mech4 from "@/assets/projects/carousel/mech4.jpeg";

const images = [
  { src: elect, alt: "Electrical project" },
  { src: elect1, alt: "Electrical project" },
  { src: elect2, alt: "Electrical project" },
  { src: elect4, alt: "Electrical project" },
  { src: elect5, alt: "Electrical project" },
  { src: elect6, alt: "Electrical project" },
  { src: elect7, alt: "Electrical project" },
  { src: elect8, alt: "Electrical project" },
  { src: facility1, alt: "Facility management project" },
  { src: facility2, alt: "Facility management project" },
  { src: facility3, alt: "Facility management project" },
  { src: facility4, alt: "Facility management project" },
  { src: facility5, alt: "Facility management project" },
  { src: facility7, alt: "Facility management project" },
  { src: mech1, alt: "Mechanical project" },
  { src: mech2, alt: "Mechanical project" },
  { src: mech3, alt: "Mechanical project" },
  { src: mech4, alt: "Mechanical project" },
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
