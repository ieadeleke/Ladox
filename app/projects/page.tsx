import Image from "next/image";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";
import { FaArrowRight, FaPlay } from "react-icons/fa6";

import ImgHero from "@/assets/hero.svg";
import ImgAbout1 from "@/assets/about_1.svg";
import ImgAbout2 from "@/assets/about_2.svg";
import ImgServices from "@/assets/services.svg";
import ImgWorkers from "@/assets/_1.jpg";

const ProjectsPage = () => {
  return (
    <section>
      <header className="px-5 md:px-20 pt-20 relative">
        <div className="max-w-[820px]">
          <div className="flex items-start text-accent text-xs font-campton-book mb-3 gap-1">
            <RiHomeLine className="font-black" />
            <h5 className="uppercase font-campton">OUR PROJECTS</h5>
          </div>
          <h1 className="text-5xl leading-[1.3] mb-3">
            Projects we have <span className="font-bold">Completed</span> Over
            the Years
          </h1>
          <p className="text-sm leading-loose md:leading-loose w-[70%] max-w-[640px]">
            We operate a decentralized organizational structure in order to
            harness individual skills and expertise with the aim of executing
            every project professionally, on time, within budget and in
            conformity with specifications.
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
        <div className="px-5 md:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <Image
                src={ImgAbout1}
                alt="Project"
                width={1000}
                height={1000}
                className="w-full h-120 object-cover rounded-lg"
              />
              <div className="absolute inset-0 h-full w-full bg-black rounded-lg opacity-30"></div>
              <div className="absolute bottom-5 left-5">
                <h3 className="text-base font-bold mb-1 text-white">
                  Project Name
                </h3>
                <p className="text-sm opacity-70 leading-loose md:leading-relaxed w-[80%] text-white">
                  Architectural concepts for final finishes are tailor-made in
                  creating homes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={ImgAbout2}
                alt="Project"
                width={1000}
                height={1000}
                className="w-full h-120 object-cover rounded-lg"
              />
              <div className="absolute inset-0 h-full w-full bg-black rounded-lg opacity-30"></div>
              <div className="absolute bottom-5 left-5">
                <h3 className="text-base font-bold mb-1 text-white">
                  Project Name
                </h3>
                <p className="text-sm opacity-70 leading-loose md:leading-relaxed w-[80%] text-white">
                  Architectural concepts for final finishes are tailor-made in
                  creating homes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={ImgWorkers}
                alt="Project"
                width={1000}
                height={1000}
                className="w-full h-120 object-cover rounded-lg"
              />
              <div className="absolute inset-0 h-full w-full bg-black rounded-lg opacity-30"></div>
              <div className="absolute bottom-5 left-5">
                <h3 className="text-base font-bold mb-1 text-white">
                  Project Name
                </h3>
                <p className="text-sm opacity-70 leading-loose md:leading-relaxed w-[80%] text-white">
                  Architectural concepts for final finishes are tailor-made in
                  creating homes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={ImgServices}
                alt="Project"
                width={1000}
                height={1000}
                className="w-full h-120 object-cover rounded-lg"
              />
              <div className="absolute inset-0 h-full w-full bg-black rounded-lg opacity-30"></div>
              <div className="absolute bottom-5 left-5">
                <h3 className="text-base font-bold mb-1 text-white">
                  Project Name
                </h3>
                <p className="text-sm opacity-70 leading-loose md:leading-relaxed w-[80%] text-white">
                  Architectural concepts for final finishes are tailor-made in
                  creating homes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={ImgHero}
                alt="Project"
                width={1000}
                height={1000}
                className="w-full h-120 object-cover rounded-lg"
              />
              <div className="absolute inset-0 h-full w-full bg-black rounded-lg opacity-30"></div>
              <div className="absolute bottom-5 left-5">
                <h3 className="text-base font-bold mb-1 text-white">
                  Project Name
                </h3>
                <p className="text-sm opacity-70 leading-loose md:leading-relaxed w-[80%] text-white">
                  Architectural concepts for final finishes are tailor-made in
                  creating homes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={ImgWorkers}
                alt="Project"
                width={1000}
                height={1000}
                className="w-full h-120 object-cover rounded-lg"
              />
              <div className="absolute inset-0 h-full w-full bg-black rounded-lg opacity-30"></div>
              <div className="absolute bottom-5 left-5">
                <h3 className="text-base font-bold mb-1 text-white">
                  Project Name
                </h3>
                <p className="text-sm opacity-70 leading-loose md:leading-relaxed w-[80%] text-white">
                  Architectural concepts for final finishes are tailor-made in
                  creating homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
