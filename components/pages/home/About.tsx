import Image from "next/image";
import ACUnit from "@/assets/_5.svg";
import ImgPlant from "@/assets/_4.svg";

const HomeAbout = () => {
  return (
    <section className="bg-primary px-5 md:px-20 py-16 md:py-20 text-white">
      <p className="text-xs md:text-sm mb-3 opacity-80 uppercase mb-5">Who We Are</p>
      <h3 className="text-3xl md:text-4xl leading-[1.3]">
        Engineering excellence with Nigerian roots since 1991. We bring disciplined project controls, proven
        <span className="block md:inline font-campton-bold text-[#A8B7CD]">
          {" "}
          HSE practices and a relentless focus on quality — delivering safely,
          on time and on budget.
        </span>
      </h3>

      <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-stretch">
        {/* Left: Image card with stat */}
        <div className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-md text-foreground flex flex-col">
          <div className="w-full min-h-0 p-2">
            <Image
              src={ACUnit}
              alt="air conditioning unit"
              className="w-full h-full max-h-[300px] rounded-lg object-cover object-top"
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
          <div className="px-5 pt-3">
            <p className="text-accent text-xs uppercase tracking-wide mb-3">
              Completion Rate
            </p>
            <h4 className="text-5xl md:text-6xl font-bold mb-2 text-foreground">
              95%
            </h4>
            <p className="text-sm opacity-70 leading-relaxed">
              On‑time delivery across Nigeria’s energy and industrial sectors, backed by rigorous planning and QA/QC.
            </p>
          </div>
        </div>

        {/* Middle: two stacked stat cards */}
        <div className="md:col-span-3 flex flex-col gap-5 md:gap-6 h-full">
          <div className="bg-white rounded-xl p-5 shadow-md text-foreground flex-1 flex flex-col justify-between">
            <p className="text-base text-foreground/70">Client Satisfaction</p>
            <h4 className="text-4xl md:text-5xl font-bold">95%</h4>
            <p className="text-sm leading-relaxed opacity-60">
              QA/QC discipline, strong HSE culture, clear communication.
            </p>
          </div>
          <div className="bg-accent rounded-xl p-5 shadow-md text-white flex-1 flex flex-col justify-between">
            <p className="text-base opacity-90">Cost Efficiency</p>
            <h4 className="text-4xl md:text-5xl font-bold mb-1">20%</h4>
            <p className="text-sm leading-relaxed opacity-90 max-w-[220px]">
              Savings via optimized engineering, preventive upkeep and OEM sourcing.
            </p>
          </div>
        </div>

        {/* Right: large facility image */}
        <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md h-full">
          <Image
            src={ImgPlant}
            alt="Industrial facility"
            className="w-full max-h-[600px] object-cover"
            width={1200}
            height={1000}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
