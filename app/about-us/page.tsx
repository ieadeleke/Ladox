import SwiperComponent from "@/components/Swiper";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";
import { MdTrackChanges, MdVisibility, MdFactCheck } from "react-icons/md";

const AboutUsPage = () => {
  return (
    <>
      <header>
        <>
          <div className="px-5 md:px-20 pt-16 md:pt-20">
            <div className="flex items-start text-accent text-xs font-campton-book mb-3 gap-1">
              <RiHomeLine className="font-black" />{" "}
              <h5 className="uppercase font- text-accent font-campton">
                INNOVATIVE ENGINEERING, RELIABLE DELIVERY
              </h5>
            </div>
            <h2 className="text-3xl md:text-5xl leading-[1.3] mb-5 w-full md:w-[50%]">
              Topnotch <span className="font-bold">Engineering</span> Excellence Since 1991
            </h2>
          </div>
          <SwiperComponent />
        </>
      </header>
      <section className="px-5 md:px-20 cover-bg py-16 md:py-20 text-white mb-20 mt-14">
        <div className="flex items-start text-accent text-xs font-campton-book mb-3 gap-1">
          <RiHomeLine className="font-black" />{" "}
          <h5 className="uppercase font- text-accent font-campton font-bold">
            OUR PHILOSOPHY
          </h5>
        </div>
        <h1 className="text-3xl md:text-4xl leading-[1.3] mb-3 w-full md:w-[40%]">
          Our Purpose, <span className="font-bold">Vision</span> & Core Values
        </h1>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <div className="size-16 mb-5 rounded-xl bg-white/20 text-white flex items-center justify-center backdrop-blur-sm">
              <MdTrackChanges className="text-3xl" />
            </div>
            <h3 className="text-white mb-2 text-xl font-bold">Our Mission</h3>
            <p className="text-sm text-[#DADADA] leading-loose md:leading-loose">
              To provide the best quality and affordable sales and service in
              air conditioning, refrigeration and power generation to corporate
              bodies and government establishments using professional personnel.
            </p>
          </div>
          <div>
            <div className="size-16 mb-5 rounded-xl bg-white/20 text-white flex items-center justify-center backdrop-blur-sm">
              <MdVisibility className="text-3xl" />
            </div>
            <h3 className="text-white mb-2 text-xl font-bold">Our Vision</h3>
            <p className="text-sm text-[#DADADA] leading-loose md:leading-loose">
              To be a leading service provider, introducing innovative solutions to the world
              while setting new benchmarks for quality, reliability, and sustainable impact
              across the industries we serve.
            </p>
          </div>
          <div>
            <div className="size-16 mb-5 rounded-xl bg-white/20 text-white flex items-center justify-center backdrop-blur-sm">
              <MdFactCheck className="text-3xl" />
            </div>
            <h3 className="text-white mb-2 text-xl font-bold">
              Our Core Values
            </h3>
            <p className="text-sm text-[#DADADA] leading-loose md:leading-loose">
              We are guided by a strong customer-service orientation, unwavering integrity,
              a deep commitment to our work, collaborative teamwork, and a relentless focus on
              efficiency and effectiveness across everything we do.
            </p>
          </div>
        </div>
      </section>
      <section className="main-text-sect px-5 md:px-20">
        <div className="w-[60%] mx-auto">
          <p className="mainText text-base leading-loose md:leading-relaxed mb-5">
            LADOX ENGINEERING COMPANY LIMITED was incorporated in 1991 to
            provide specialized services to manufacturing, oil companies and
            Government establishments in a wide range of technical areas
            including Mechanical, Electrical, Refrigeration and Air-conditioning
            Engineering and Contracting.
          </p>
          <p className="text-base leading-loose md:leading-relaxed mb-5">
            Our resource persons are multi-skilled and multi-disciplinary with a
            flexible management structure to handle jobs in diverse areas of our
            operations. We have technical affiliates overseas for the needed
            back up support as and when required.
          </p>
          <p className="text-base leading-loose md:leading-relaxed">
            This joint venture arrangement ensures that our jobs are completed
            to international standards applicable worldwide consonant with
            latest and available technology. We maintain a good policy of good
            quality assurance and satisfactory timely completion of projects.
            Safety at work place is our watchword. We operate a decentralized
            organizational structure in order to harness individual skills and
            expertise with the aim of executing any project professionally, on
            time, within budget and in conformity with specifications.
          </p>
        </div>
        {/* <div className="mt-20">
          <h3 className="text-3xl md:text-4xl leading-[1.3] mb-3 w-full md:w-[60%]">
            Genuine
            <span className="font-bold"> Partner In Every Aspect</span> Of
            Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="size-16 rounded-lg mb-5 bg-[#DFF7FF]"></div>
              <h5 className="text-base mb-2 font-bold">Project Management</h5>
              <p className="text-sm leading-loose md:leading-loose">
                We handle everything from permits to final walkthrough
                communication every step of the way
              </p>
            </div>
            <div>
              <div className="size-16 rounded-lg mb-5 bg-[#DFF7FF]"></div>
              <h5 className="text-base mb-2 font-bold">Project Management</h5>
              <p className="text-sm leading-loose md:leading-loose">
                We handle everything from permits to final walkthrough
                communication every step of the way
              </p>
            </div>
            <div>
              <div className="size-16 rounded-lg mb-5 bg-[#DFF7FF]"></div>
              <h5 className="text-base mb-2 font-bold">Project Management</h5>
              <p className="text-sm leading-loose md:leading-loose">
                We handle everything from permits to final walkthrough
                communication every step of the way
              </p>
            </div>
            <div>
              <div className="size-16 rounded-lg mb-5 bg-[#DFF7FF]"></div>
              <h5 className="text-base mb-2 font-bold">Project Management</h5>
              <p className="text-sm leading-loose md:leading-loose">
                We handle everything from permits to final walkthrough
                communication every step of the way
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default AboutUsPage;
