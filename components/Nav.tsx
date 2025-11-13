import Image from "next/image";

import LogoImg from "@/assets/logo.svg";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-20 py-5 border-b border-[#EDEDED] border-solid">
        <div>
          <Image
            src={LogoImg}
            alt="logo"
            className="w-[145px] h-auto"
            quality={100}
            width={1000}
            height={1000}
          />
        </div>
        <ul className="flex items-center gap-8 text-sm justify-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/services">Our Service</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/compliance">Compliance</Link>
          </li>
          <li>
            <Link href="/contact-us" className="bg-accent py-4 px-6 rounded-[14px]">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
