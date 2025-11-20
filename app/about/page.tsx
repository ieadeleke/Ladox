import Image from "next/image";
import { RiHomeLine } from "react-icons/ri";
import Link from "next/link";

import AboutImg1 from "@/assets/about_1.svg";
import AboutImg2 from "@/assets/about_2.svg";

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 md:px-20 pt-16 md:pt-20 pb-10 md:pb-16">
        <div className="max-w-5xl relative z-10">
          <div className="flex items-start text-accent text-xs font-campton-book mb-4 gap-1">
            <RiHomeLine className="font-black" />
            <span className="uppercase font-campton">About</span>
          </div>
          <h1 className="text-3xl md:text-5xl leading-[1.2] font-bold mb-4">
            About LADOX Engineering Company Limited
          </h1>
          <p className="text-base md:text-lg text-foreground/70 max-w-3xl">
            Genuine <span className="font-bold">Partner In Every Aspect</span> of Development
          </p>
        </div>

        {/* Decorative images */}
        <div className="absolute -right-24 md:right-0 top-8 opacity-20 md:opacity-30 w-[360px] md:w-[520px] -z-0">
          <Image src={AboutImg2} alt="About decorative" className="w-full h-auto" />
        </div>
      </section>

      {/* Company intro */}
      <section className="px-5 md:px-20 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-7">
            <div className="space-y-6 text-base leading-relaxed">
              <p>
                LADOX ENGINEERING COMPANY LIMITED was incorporated in 1991 to provide specialized
                services to manufacturing, oil companies and Government establishments in a wide
                range of technical areas including Mechanical, Electrical, Refrigeration and
                Air-conditioning Engineering and Contracting.
              </p>
              <p>
                Our resource persons are multi-skilled and multi-disciplinary with a flexible
                management structure to handle jobs in diverse areas of our operations. We have
                technical affiliates overseas for the needed back up support as and when required.
              </p>
              <p>
                This joint venture arrangement ensures that our jobs are completed to international
                standards applicable worldwide consonant with latest and available technology. We
                maintain a good policy of good quality assurance and satisfactory timely completion
                of projects. Safety at work place is our watchword. We operate a decentralized
                organizational structure in order to harness individual skills and expertise with the
                aim of executing any project professionally, on time, within budget and in
                conformity with specifications.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-white border border-[#EDEDED] rounded-2xl overflow-hidden shadow-sm">
              <div className="p-3">
                <Image
                  src={AboutImg1}
                  alt="Ladox engineering"
                  className="w-full h-auto rounded-xl"
                  quality={100}
                />
              </div>
              <div className="px-5 pb-5">
                <p className="text-accent text-xs uppercase tracking-wide mb-2">Who We Are</p>
                <p className="text-sm text-foreground/70">
                  Engineering, Procurement and Contracting excellence driven by quality,
                  integrity and on-time delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-primary text-white px-5 md:px-20 py-14 md:py-16">
        <div className="mb-8">
          <p className="text-xs md:text-sm opacity-80 uppercase">WHAT WE OFFER</p>
          <h2 className="text-2xl md:text-4xl leading-tight md:leading-[1.2] mt-2 max-w-3xl">
            Take A Brief <span className="font-bold">Look At Some Of The Services</span> We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-white/85 text-sm leading-relaxed">
              To provide the best quality and affordable sales and service in air conditioning,
              refrigeration and power generation to corporate bodies and government establishments
              using professional personnel.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-white/85 text-sm leading-relaxed">
              To be a leading service provider introducing innovative solutions to the world.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-3">Our Core Values</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="text-white/85 text-sm">• Customer service orientation</li>
              <li className="text-white/85 text-sm">• Integrity</li>
              <li className="text-white/85 text-sm">• Commitment to Work</li>
              <li className="text-white/85 text-sm">• Team Work</li>
              <li className="text-white/85 text-sm">• Efficiency / Effectiveness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-20 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-8 rounded-2xl border border-[#EDEDED] bg-white">
          <div>
            <p className="text-accent text-xs uppercase tracking-wide">Get in touch</p>
          </div>
          <Link href="/contact-us" className="bg-accent text-white px-6 py-3 rounded-xl text-sm">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
