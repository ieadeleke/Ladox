import Image from "next/image";
import ImgWorkers from "@/assets/_1.jpg";
import ImgPlant from "@/assets/services.svg";

const HomeAbout = () => {
  return (
    <section className="bg-primary px-5 md:px-20 py-16 md:py-20 text-white">
      <p className="text-xs md:text-sm mb-3 opacity-80 uppercase">// About</p>
      <h3 className="text-3xl md:text-5xl leading-[1.3]">
        We are a global leader in Engineering, Procurement, and
        Construction(EPC) services,
        <span className="block md:inline font-campton-bold text-[#A8B7CD]">
          {" "}committed to delivering innovative and sustainable solutions
          across multiple industries.
        </span>
      </h3>

      <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-stretch md:min-h-[520px]">
        {/* Left: Image card with stat */}
        <div className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-md text-foreground h-full flex flex-col">
          <div className="w-full flex-1 min-h-0">
            <Image
              src={ImgWorkers}
              alt="Completion Rate"
              className="w-full h-full object-cover"
              width={800}
              height={600}
              quality={100}
            />
          </div>
          <div className="p-5">
            <p className="text-accent text-xs uppercase tracking-wide mb-3">
              Completion Rate
            </p>
            <h4 className="text-5xl md:text-6xl font-bold mb-2 text-foreground">
              95%
            </h4>
            <p className="text-sm opacity-70 leading-relaxed">
              On-time Project Delivery across various global markets.
            </p>
          </div>
        </div>

        {/* Middle: two stacked stat cards */}
        <div className="md:col-span-3 flex flex-col gap-5 md:gap-6 h-full">
          <div className="bg-white rounded-xl p-5 shadow-md text-foreground flex-1">
            <p className="text-xs mb-3 text-foreground/70">Client Satisfaction</p>
            <h4 className="text-4xl md:text-5xl font-bold mb-1">95%</h4>
            <p className="text-[11px] leading-relaxed opacity-60 max-w-[220px]">
              Driven by our commitment to quality and execution.
            </p>
          </div>
          <div className="bg-accent rounded-xl p-5 shadow-md text-white flex-1">
            <p className="text-xs mb-3 opacity-90">Cost Efficiency</p>
            <h4 className="text-4xl md:text-5xl font-bold mb-1">20%</h4>
            <p className="text-[11px] leading-relaxed opacity-90 max-w-[220px]">
              Cost savings for clients through optimized engineering services.
            </p>
          </div>
        </div>

        {/* Right: large facility image */}
        <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md h-full">
          <Image
            src={ImgPlant}
            alt="Industrial facility"
            className="w-full h-full object-cover"
            width={1200}
            height={800}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
