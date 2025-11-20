"use client";

import Image from "next/image";
import { RiHomeLine } from "react-icons/ri";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiOutlineX } from "react-icons/hi";
import { useCallback, useEffect, useState } from "react";

// Project tables (images)
import ProjAgip from "@/assets/projects/agip.jpg";
import ProjAllianz from "@/assets/projects/allianz.jpg";
import ProjAllianz2 from "@/assets/projects/allianz2.jpg";
import ProjDowel from "@/assets/projects/dowel.jpg";
import ProjEroton from "@/assets/projects/eroton.jpg";
import ProjGlo from "@/assets/projects/glo.jpg";
import ProjHalliburton from "@/assets/projects/halliburton.jpg";
import ProjNestle from "@/assets/projects/nestle.jpg";
import ProjNigalex from "@/assets/projects/nigalex.jpg";
import ProjOgun from "@/assets/projects/ogun.jpg";
import ProjOyo from "@/assets/projects/oyo.jpg";
import ProjReynolds from "@/assets/projects/reynolds.jpg";
import ProjShell from "@/assets/projects/shell.jpg";
import ProjSnepco from "@/assets/projects/snepco.jpg";
import ProjTotal from "@/assets/projects/total.jpg";
import ProjUac from "@/assets/projects/uac.jpg";

const ProjectsPage = () => {
  const projectImages = [
    { src: ProjAgip, alt: "AGIP" },
    { src: ProjAllianz, alt: "Allianz" },
    { src: ProjAllianz2, alt: "Allianz (2)" },
    { src: ProjDowel, alt: "Dowel" },
    { src: ProjEroton, alt: "EROTON" },
    { src: ProjGlo, alt: "GLO" },
    { src: ProjHalliburton, alt: "Halliburton" },
    { src: ProjNestle, alt: "Nestle" },
    { src: ProjNigalex, alt: "Nigalex" },
    { src: ProjOgun, alt: "Ogun State" },
    { src: ProjOyo, alt: "Oyo State" },
    { src: ProjReynolds, alt: "Reynolds" },
    { src: ProjShell, alt: "Shell" },
    { src: ProjSnepco, alt: "SNEPCo" },
    { src: ProjTotal, alt: "Total" },
    { src: ProjUac, alt: "UAC" },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<number>(0);

  const close = useCallback(() => setOpen(false), []);
  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + projectImages.length) % projectImages.length), [projectImages.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % projectImages.length), [projectImages.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);
  return (
    <section>
      <header className="px-5 md:px-20 pt-20 relative">
        <div className="max-w-[820px]">
          <div className="flex items-start text-accent text-xs font-campton-book mb-3 gap-1">
            <RiHomeLine className="font-black" />
            <h5 className="uppercase font-campton">OUR PROJECTS</h5>
          </div>
          <h1 className="text-3xl md:text-5xl leading-[1.3] mb-3 w-[80%]">
            Projects we have <span className="font-bold">Completed</span> Over
            the Years
          </h1>
          <p className="text-sm leading-loose md:leading-loose w-full md:w-[70%] max-w-[640px]">
            From design to handover, we deliver safe, efficient, and resilient assets. Explore
            highlights of the work we've completed with our clients.
          </p>
        </div>
        <div className="hidden md:block absolute right-20 top-16">
          <div className="relative">
            <div className="size-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <FaPlay className="text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* angled background band */}
      <div className="relative mt-10 pt-20">
        <div className="absolute inset-0 -z-10 h-[220px] cover-bg"></div>
      </div>
      <section className="projects-list px-5 md:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectImages.map((img, i) => (
            <button
              key={img.alt}
              type="button"
              onClick={() => openAt(i)}
              className="text-left rounded-xl overflow-hidden border border-[#EDEDED] bg-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 group"
            >
              <div className="relative">
                <Image src={img.src} alt={img.alt} className="w-full h-auto" quality={100} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
              </div>
            </button>
          ))}
        </div>

        {open && (
          <div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={close}
            aria-modal="true"
            role="dialog"
          >
            <div className="relative w-[min(92vw,1200px)] h-[80vh]" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                aria-label="Close"
                onClick={close}
                className="absolute -top-10 right-0 md:-top-12 md:right-0 text-white/90 hover:text-white"
              >
                <HiOutlineX className="text-3xl" />
              </button>

              {/* Prev / Next */}
              <button
                aria-label="Previous"
                onClick={prev}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full bg-white/90 hover:bg-white text-foreground items-center justify-center shadow"
              >
                <FaChevronLeft />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-12 rounded-full bg-white/90 hover:bg-white text-foreground items-center justify-center shadow"
              >
                <FaChevronRight />
              </button>

              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={projectImages[index].src}
                  alt={projectImages[index].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 92vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default ProjectsPage;
