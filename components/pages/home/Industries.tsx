"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const images = [
  { src: "/next.svg", alt: "Next.js" },
  { src: "/vercel.svg", alt: "Vercel" },
  { src: "/globe.svg", alt: "Globe" },
  { src: "/window.svg", alt: "Window" },
  { src: "/file.svg", alt: "File" },
  // Duplicate to create a longer carousel experience
  { src: "/next.svg", alt: "Next.js" },
  { src: "/vercel.svg", alt: "Vercel" },
  { src: "/globe.svg", alt: "Globe" },
  { src: "/window.svg", alt: "Window" },
  { src: "/file.svg", alt: "File" },
];

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
              <div className="size-16 mb-5 bg-accent rounded-lg"></div>
              <h5 className="text-xl mb-2 font-bold">Metals</h5>
              <p className="text-sm opacity-80 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                officia accusantium. Harum voluptas, tempore in doloremque neque
                aspernatur ratione eaque itaque.
              </p>
            </div>
            <div>
              <div className="size-16 mb-5 bg-accent rounded-lg"></div>
              <h5 className="text-xl mb-2 font-bold">Metals</h5>
              <p className="text-sm opacity-80 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                officia accusantium. Harum voluptas, tempore in doloremque neque
                aspernatur ratione eaque itaque.
              </p>
            </div>
            <div>
              <div className="size-16 mb-5 bg-accent rounded-lg"></div>
              <h5 className="text-xl mb-2 font-bold">Metals</h5>
              <p className="text-sm opacity-80 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                officia accusantium. Harum voluptas, tempore in doloremque neque
                aspernatur ratione eaque itaque.
              </p>
            </div>
            <div>
              <div className="size-16 mb-5 bg-accent rounded-lg"></div>
              <h5 className="text-xl mb-2 font-bold">Metals</h5>
              <p className="text-sm opacity-80 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                officia accusantium. Harum voluptas, tempore in doloremque neque
                aspernatur ratione eaque itaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
