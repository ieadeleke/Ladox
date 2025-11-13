import SwiperComponent from "@/components/Swiper";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";

const AboutUsPage = () => {
  return (
    <>
      <header>
        <>
          <div className="px-5 md:px-20 pt-16 md:pt-20">
            <div className="flex items-start text-accent text-xs font-campton-book mb-3 gap-1">
              <RiHomeLine className="font-black" />{" "}
              <h5 className="uppercase font- text-accent font-campton">
                BUILDING STRONG FOUNDATIONS FOR YOUR DREAM HOME
              </h5>
            </div>
            <h1 className="text-3xl md:text-5xl leading-[1.3] mb-5 w-full md:w-[60%]">
              Expert<span className="font-bold"> Construction</span> <br />{" "}
              <span className="font-bold">Services For Residential</span> &{" "}
              <br /> Custom Home Projects
            </h1>
          </div>
          <SwiperComponent />
        </>
      </header>
      <section className="px-5 md:px-20 cover-bg py-16 md:py-20 text-white mb-20 mt-14">
        <div className="flex items-start text-accent text-xs font-campton-book mb-3 gap-1">
          <RiHomeLine className="font-black" />{" "}
          <h5 className="uppercase font- text-accent font-campton font-bold">
            WHAT WE OFFER
          </h5>
        </div>
        <h1 className="text-3xl md:text-4xl leading-[1.3] mb-3 w-full md:w-[40%]">
          Take A Brief{" "}
          <span className="font-bold">Look At Some Of The Services</span> We
          Offer
        </h1>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div>
            <div className="h-52 mb-7 w-full bg-gray-500"></div>
            <h3 className="text-white mb-2 text-xl font-bold">
              Foundation & Structural Work
            </h3>
            <p className="text-sm text-[#DADADA] leading-loose md:leading-loose">
              Expert excavation, concrete pouring, and structural framing to
              ensure long lasting
            </p>
            <Link href="/" className="flex items-center gap-2 text-accent">
              Read More
            </Link>
          </div>
          <div>
            <div className="h-52 mb-7 w-full bg-gray-500"></div>
            <h3 className="text-white mb-2 text-xl font-bold">
              Foundation & Structural Work
            </h3>
            <p className="text-sm text-[#DADADA] leading-loose md:leading-loose">
              Expert excavation, concrete pouring, and structural framing to
              ensure long lasting
            </p>
            <Link href="/" className="flex items-center gap-2 text-accent">
              Read More
            </Link>
          </div>
          <div>
            <div className="h-52 mb-7 w-full bg-gray-500"></div>
            <h3 className="text-white mb-2 text-xl font-bold">
              Foundation & Structural Work
            </h3>
            <p className="text-sm text-[#DADADA] leading-loose md:leading-loose">
              Expert excavation, concrete pouring, and structural framing to
              ensure long lasting
            </p>
            <Link href="/" className="flex items-center gap-2 text-accent">
              Read More
            </Link>
          </div>
          <div>
            <div className="h-52 mb-7 w-full bg-gray-500"></div>
            <h3 className="text-white mb-2 text-xl font-bold">
              Foundation & Structural Work
            </h3>
            <p className="text-sm text-[#DADADA] leading-loose md:leading-loose">
              Expert excavation, concrete pouring, and structural framing to
              ensure long lasting
            </p>
            <Link href="/" className="flex items-center gap-2 text-accent">
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="main-text-sect px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-base leading-loose md:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic
            odit odio autem quaerat, reprehenderit maiores. Laboriosam
            doloremque enim, assumenda quos quae impedit quis quas fuga
            similique perferendis, recusandae quibusdam.
          </p>
          <p className="text-base leading-loose md:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic
            odit odio autem quaerat, reprehenderit maiores. Laboriosam
            doloremque enim, assumenda quos quae impedit quis quas fuga
            similique perferendis, recusandae quibusdam.
          </p>
          <p className="text-base leading-loose md:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic
            odit odio autem quaerat, reprehenderit maiores. Laboriosam
            doloremque enim, assumenda quos quae impedit quis quas fuga
            similique perferendis, recusandae quibusdam.
          </p>
          <p className="text-base leading-loose md:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic
            odit odio autem quaerat, reprehenderit maiores. Laboriosam
            doloremque enim, assumenda quos quae impedit quis quas fuga
            similique perferendis, recusandae quibusdam.
          </p>
        </div>
        <div className="mt-20">
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
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
