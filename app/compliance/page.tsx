"use client";

import Image from "next/image";
import About1 from "@/assets/about_1.svg";
import About2 from "@/assets/about_2.svg";
import ServicesImg from "@/assets/services.svg";
import ComplianceImg from "@/assets/compliance.svg";
import { IoIosCheckmark } from "react-icons/io";

const CompliancePage = () => {
  const chips = [
    "Quality Specification",
    "Supervision",
    "Product Supply Quality",
    "Responsibility",
    "Quality Objectives",
    "Safety Personnel",
  ];

  return (
    <section>
      {/* Hero */}
      <header className="px-5 md:px-20 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block text-[10px] md:text-xs px-5 py-3 rounded-lg font-bold bg-[#F1FBFF] text-accent mb-4">
              Compliance Policy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              At Ladox Engineering
              <br />
              <span className="">Company Limited</span>
            </h1>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-3 max-w-[560px]">
              <li>
                Health, Safety and Environment: we keep laid‑down rules and
                regulations demanded by our clients.
              </li>
              <li>
                We train our personnel from time to time in areas of safety and
                improved development.
              </li>
              <li>
                We ensure adherence to HSE Golden Rules by complying with
                stipulated standards and procedures for all jobsites.
              </li>
              <li>
                We intervene in unsafe acts and unsafe conditions, and report
                and rectify them promptly.
              </li>
              <li>
                We monitor the health condition of our workers and ensure they
                take time off when necessary.
              </li>
            </ul>
          </div>
          <div className="relative w-full">
            <div className="grid grid-cols-2 gap-2">
              <div className="pt-14">
                <div className="bg-black h-100 [25rem] w-full"></div>
              </div>
              <div className="bg-black h-100 w-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Quality area with chips and image */}
      <section className="">
        <div className="bg-[#EAF6FE] px-5 py-20 md:px-20 mt-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6 w-max mx-auto">
              {chips.map((c, index) => (
                <span
                  key={c}
                  className={`text-xs md:text-[13px] font-bold px-8 py-4 rounded-full ${index === 0 ?'bg-accent text-white' : 'bg-white text-black'}`}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Quality assurance in all we do
                </h3>
                <p className="text-sm md:text-base leading-loose md:leading-loose max-w-[560px]">
                  Ladox as a technical company has taken it as a point of duty
                  to do away with all products that do not comply with
                  international and national standards such as ISO quality,
                  IEEE, IEC, EEMC etc. We also ensure we comply with the
                  standard of quality supply to our host companies.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm w-full">
                <Image
                  src={ComplianceImg}
                  alt="Quality workstation"
                  quality={100}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies/accordion */}
      <section className="px-5 md:px-20 mt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Organization{" "}
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                LADOX ENG. COMP. LTD shall provide a list of staff to be used on
                each project, stating their qualifications, experience and
                competencies. Their duties shall be specified, including
                engagement on work programmes of the company (LADOX).
              </p>
            </div>
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Records
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                Project files and associated records are to be retained for a
                period of three years after the retention period has expired
                before consideration for disposition. All contract‑specific
                compilation files at least once a month.
              </p>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Project Input{" "}
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                The primary inputs to this project are the installation manual /
                job procedures provided by customer for proper execution of the
                project. Customer communication and project meetings shall be
                held at the beginning of each job activity and as needs arise.
              </p>
            </div>
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Resources{" "}
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                All necessary resources for the execution of this project shall
                be the responsibility of LADOX ENG. COMP. LTD as specified by
                the contract.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom grid of compliance topics */}
      <section className="px-5 md:px-20 py-20 mt-16 mb-24 bg-[#F8F8F8]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Design and Implementation",
              body: "The various designs for this project shall be in accordance with CLIENT, Design and Engineering practices/standards.",
            },
            {
              title: "Installation and Commissioning",
              body: "Installation, testing, and commissioning shall comply with project plan, site working instructions and standard procedures.",
            },
            {
              title: "Purchases",
              body: "Equipment and materials required shall be purchased by LADOX ENG. COMP. LTD from approved sources and handled under defined conditions.",
            },
            {
              title: "Customer Property",
              body: "Customer materials handed to LADOX ENG. COMP. LTD for proper handling/recording shall be safeguarded and returned as required.",
            },
            {
              title: "Product Handling",
              body: "Adequate procedures shall apply to the delivery of services under this project.",
            },
            {
              title: "Non‑Conformities",
              body: "All works that have no record or do not conform to requirement shall be reviewed to meet CLIENT standards.",
            },
            {
              title: "Monitoring and Measurement",
              body: "The progress of the project shall be recorded daily and weekly by responsible personnel, with records retained as part of final documentation.",
            },
            {
              title: "Internal Audit",
              body: "Audits will confirm effective implementation of the quality plan and achievement of objectives; non‑conformities shall be addressed and closed out.",
            },
          ].map((item) => (
            <div key={item.title} className="">
              <div className="size-12 rounded-full mb-4 flex items-center justify-center bg-[#DFF7FF] text-accent">
                <div className="size-6 flex items-center bg-accent rounded-full justify-center">
                  <IoIosCheckmark className="text-2xl text-white" />
                </div>
              </div>
              <h5 className="text-base font-bold mb-2">{item.title}</h5>
              <p className="text-sm leading-relaxed opacity-80">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CompliancePage;
