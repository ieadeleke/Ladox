"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import { HiOutlineX, HiBadgeCheck } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
  FaCertificate,
  FaCogs,
  FaHandshake,
  FaShieldAlt,
  FaLeaf,
  FaBroadcastTower,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import type { IconType } from "react-icons";
import CompliancePhoto from "@/assets/projects/images/compliance.jpg";
import CompliancePhoto2 from "@/assets/projects/images/compliance3.jpeg";

// Certificate images
import iso90012015 from "@/assets/projects/certificates/iso-9001-2015.jpeg";
import iso90012018 from "@/assets/projects/certificates/iso-9001-2018.jpeg";
import iso450012018 from "@/assets/projects/certificates/iso-45001-2018.jpeg";
import iso140012015 from "@/assets/projects/certificates/ISO-14001-2015.png";
import dpr from "@/assets/projects/certificates/dpr.jpg";
import ncc from "@/assets/projects/certificates/ncc.jpeg";
import neca from "@/assets/projects/certificates/neca.jpg";
import apiQ2 from "@/assets/projects/certificates/API-Q2.jpg";
import coren from "@/assets/projects/certificates/coren.png";

const CompliancePage = () => {
  const chips = [
    "Quality Specification",
    "Supervision",
    "Product Supply Quality",
    "Responsibility",
    "Quality Objectives",
    "Safety Personnel",
  ];

  // Certificates gallery
  type Cert = { title: string; subtitle: string; Icon: IconType; image?: StaticImageData | null };
  const certificates: Cert[] = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management System Certification",
      Icon: FaCertificate,
      image: iso90012015,
    },
    {
      title: "ISO 45001:2018",
      subtitle: "Occupational Health & Safety Management System",
      Icon: MdHealthAndSafety,
      image: iso450012018,
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Environmental Management System Certification",
      Icon: FaLeaf,
      image: iso140012015,
    },
    {
      title: "API Specification Q1/Q2",
      subtitle: "American Petroleum Institute Quality Certification",
      Icon: FaCogs,
      image: apiQ2,
    },
    {
      title: "COREN Registration",
      subtitle: "Council for the Regulation of Engineering in Nigeria",
      Icon: HiBadgeCheck,
      image: coren,
    },
    {
      title: "NCEC/NECA Membership",
      subtitle:
        "Nigerian Content Equipment Certificate & Contractors Association",
      Icon: FaHandshake,
      image: neca,
    },
    {
      title: "DPR Permit",
      subtitle: "Department of Petroleum Resources Operational Permit",
      Icon: FaShieldAlt,
      image: dpr,
    },
    {
      title: "NCC Registration",
      subtitle: "Nigerian Communications Commission Vendor Registration",
      Icon: FaBroadcastTower,
      image: ncc,
    },
  ];

  const [certOpen, setCertOpen] = useState(false);
  const [certIndex, setCertIndex] = useState<number>(0);
  const openCert = useCallback((i: number) => {
    setCertIndex(i);
    setCertOpen(true);
  }, []);
  const closeCert = useCallback(() => setCertOpen(false), []);
  const prevCert = useCallback(
    () =>
      setCertIndex((i) => (i - 1 + certificates.length) % certificates.length),
    [certificates.length]
  );
  const nextCert = useCallback(
    () => setCertIndex((i) => (i + 1) % certificates.length),
    [certificates.length]
  );
  const ActiveIcon: IconType | null = certOpen
    ? certificates[certIndex].Icon
    : null;

  useEffect(() => {
    if (!certOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCert();
      if (e.key === "ArrowLeft") prevCert();
      if (e.key === "ArrowRight") nextCert();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [certOpen, closeCert, prevCert, nextCert]);

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
                <Image
                  src={CompliancePhoto}
                  alt="Compliance"
                  className="w-full h-100 object-cover rounded-xl"
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </div>
              <div className="bg-black h-100 w-full rounded-xl">
                <Image
                  src={CompliancePhoto2}
                  alt="Compliance"
                  className="w-full h-100 object-cover rounded-xl"
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quality area with chips and image */}
      <section className="">
        <div className="bg-[#EAF6FE] px-5 py-20 md:px-20 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Product Supply Quality{" "}
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                Ladox as a company carefully test her supplied product through
                the quality control section of the organization to ensure that
                they manufacture supply products that has no harm to the
                environment, either on plants, animals or its surrounding of
                operations, for example depletion of the ozone layer by HCFC
                refrigerants.
              </p>
            </div>
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Responsibility
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                The project Engineer has overall responsibility for the
                successful execution of the project, including conformity with
                CLIENT'S quality management system and meeting project
                objectives. Site inspectors (cars) shall ensure project
                activities are carried out according to documented procedures,
                guidelines and instructions.
              </p>
            </div>
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Quality Specification{" "}
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                Ladox as a technical company has taken it as a point of concern
                to do away with all products that does not comply with
                international and national standards such as ISO quality, IEEE,
                IEC, IEMC etc. she also makes sure she complies with the
                standard of quality supply to its host companies.
              </p>
            </div>
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Supervision{" "}
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                Ladox has made it a point of concern to ensure that her
                supervision i s based on recommendation, qualification, training
                and seasoned personnel who are always strict to, and at all
                times ready to carry the company along by making proper
                supervision of workers welfare, remunerations, proper
                supervision of our client facility and equipment.
              </p>
            </div>
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Quality Objectives{" "}
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                Provide products and services that are in accordance with all
                specified CLIENT requirements and commonly accepted standards
                and specifications within budget and on time. Meet the needs and
                requirements of stakeholders and return on investment. Ensure
                continuous performance improvement, through early identification
                of quality assurance matters and feedback to the system. Timely
                execution of projects to technical standards, operations
                maintainability and applicable statutory regulations at the
                lowest possible cost, and without loss to lives and assets.
              </p>
            </div>
            <div>
              <div className="cursor-pointer select-none flex items-center justify-between text-lg font-bold">
                Safety Personnel{" "}
              </div>
              <p className="mt-3 text-sm leading-loose md:leading-loose">
                As a company we believe that health is wealth and that good
                health promotes a healthy living which is why Ladox Eng. Coy Ltd
                has carefully trained some graduate personnel through the HSE
                matters of the organization, so as to promote good health,
                proper working environment, for technicians and clerical
                personnel’s, to co-ordinate the gap between the management and
                the contractor personnel. To ensure daily toolbox talks are
                highlighted and monthly HSE meeting are held, to highlight all
                the activities and performances of the company, and to seek area
                of new industrial development and improvement. Ladox through her
                safety officers has been able to promote community affairs,
                security alertness to all personnel involve in the contract
                operations, to make sure our host communities are in-cooperated
                into our contract workforce, to eliminate potential accidents /
                incidents, which could either result in injury of personnel or
                damage to the equipment, environment or client equipment or
                facility.
              </p>
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

      {/* Compliance Certificates */}
      <section className="px-5 md:px-20 py-16">
        <div className="text-center mb-8">
          <p className="text-xs md:text-sm uppercase text-accent mb-3">
            Compliance Certificates
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-1">
            Our Certifications
          </h2>
          <p className="text-sm opacity-70 mt-2">
            Browse validated documents and compliance credentials.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((c, i) => (
            <button
              key={c.title}
              type="button"
              onClick={() => openCert(i)}
              className="text-left rounded-xl overflow-hidden border border-[#EDEDED] bg-white shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              {/* Preview image area */}
              <div className="relative h-40 bg-[#F8F8F8]">
                {c.image ? (
                  <Image
                    src={c.image}
                    alt={`${c.title} certificate`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <img src="" alt="" className="w-full h-full object-contain p-4" />
                )}
              </div>
              <div className="px-4 py-3">
                <div className="mb-2 flex items-center gap-2 text-accent">
                  <div className="size-8 rounded-full bg-[#DFF7FF] flex items-center justify-center">
                    <c.Icon className="text-base" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wide">Certificate</span>
                </div>
                <p className="text-sm font-bold">{c.title}</p>
                <p className="text-xs opacity-70 mt-1">{c.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        {certOpen && (
          <div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={closeCert}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-[min(92vw,680px)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close"
                onClick={closeCert}
                className="absolute -top-10 right-0 text-white/90 hover:text-white"
              >
                <HiOutlineX className="text-3xl" />
              </button>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="size-16 rounded-full bg-[#DFF7FF] text-accent flex items-center justify-center">
                    {ActiveIcon ? <ActiveIcon className="text-3xl" /> : null}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {certificates[certIndex].title}
                </h3>
                <p className="text-sm opacity-80">
                  {certificates[certIndex].subtitle}
                </p>
                {/* Large preview */}
                <div className="mt-6 relative w-full aspect-[4/3] bg-[#F8F8F8] rounded-lg overflow-hidden">
                  {certificates[certIndex].image ? (
                    <Image
                      src={certificates[certIndex].image as StaticImageData}
                      alt={`${certificates[certIndex].title} certificate`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 92vw, 640px"
                    />
                  ) : (
                    <img src="" alt="" className="w-full h-full object-contain p-4" />
                  )}
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <button
                    onClick={prevCert}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#EDEDED] bg-white hover:bg-[#F8F8F8] text-sm"
                  >
                    <FaChevronLeft />
                    Prev
                  </button>
                  <button
                    onClick={nextCert}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#EDEDED] bg-white hover:bg-[#F8F8F8] text-sm"
                  >
                    Next
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
