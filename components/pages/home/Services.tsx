import ServiceImg from "@/assets/services.svg";
import { IoCheckmarkCircle } from "react-icons/io5";

import Image from "next/image";

const HomeServices = () => {
  return (
    <section className="px-5 md:px-20 py-16 md:py-20">
      <div>
        <h6 className="text-accent uppercase mb-2">// Services</h6>
        <h4 className="text-3xl md:text-4xl w-full md:w-[60%] leading-[1.4] font-campton">
          We provide end-to-end EPC services that ensure the success of your
          projects
        </h4>
        <div className="mt-7">
          <div className="border border-solid rounded-full w-full md:w-max px-2 py-2 border-[#E9E9E9] flex flex-wrap gap-2">
            <button className="bg-[#E9F1FE] py-3 px-9 text-accent rounded-full font-campton-bold">
              Engineering
            </button>
            <button className="py-3 px-9 text-black rounded-full font-campton">
              Construction
            </button>
            <button className="py-3 px-9 text-black rounded-full font-campton">
              Procurement
            </button>
            <button className="py-3 px-9 text-black rounded-full font-campton">
              Custom Fabrication
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-8">
            <Image
              src={ServiceImg}
              alt="Service"
              className="w-full md:w-[35%] h-full max-w-[550px]"
              quality={100}
              width={1000}
              height={1000}
            />
            <div>
              <h3 className="text-2xl md:text-3xl mb-2">Tech for sustainability</h3>
              <p className="text-base w-full md:w-[80%] mb-6 leading-loose">
                Delivering end-to-end services across energy, mining, metals,
                advanced technologies, manufacturing, and life sciences.
                Committedto a greener tomorrow through sustainable practices and
                responsible engineering.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <IoCheckmarkCircle />
                  Sustainability at the core
                </li>
                <li className="flex gap-2">
                  <IoCheckmarkCircle />
                  Sustainability at the core
                </li>
                <li className="flex gap-2">
                  <IoCheckmarkCircle />
                  Sustainability at the core
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
