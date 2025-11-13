"use client";
import Image from "next/image";

import LogoImg from "@/assets/logo.svg";
import Link from "next/link";
import { MdCall } from "react-icons/md";

import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const normalize = (s: string) => (s && s !== "/" && s.endsWith("/") ? s.slice(0, -1) : s || "/");
  const current = normalize(pathname || "/");
  const itemCls = (href: string) =>
    `pb-2 border-b-2 border-solid ${normalize(href) === current ? "border-accent" : "border-transparent hover:border-accent/50"}`;
  return (
    <>
      <div className="bg-accent py-2 px-5 md:px-20 hidden md:flex items-center justify-between">
        <div></div>
        {/* <div className="flex items-center gap-3">
          <div className="size-10 bg-[#FFFFFF2E] rounded-full items-center justify-center flex">
            <MdCall className="text-white" />
          </div>
          <Link href="tel:09067255023" className="text-white text-sm">
            Call Us: 09067255023
          </Link>
        </div> */}
        <div className="flex items-center">
          <Link
            href="/contact-us"
            className="bg-[#FBBD06] h-12 flex items-center justify-center font-campton px-6 w-max rounded-full text-sm"
          >
            Get a Quote
          </Link>
          <Link
            href=""
            className="bg-[#FBBD06] size-12 flex items-center justify-center font-bold rounded-full text-sm"
          >
            <FaArrowRight className="text-lg animated-arrow" />
          </Link>
        </div>
      </div>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-20 py-4 md:py-5 border-b border-[#EDEDED] border-solid bg-background/90 backdrop-blur-md">
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
        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm justify-between">
          <li className={itemCls("/")}> 
            <Link href="/">Home</Link>
          </li>
          <li className={itemCls("/about-us")}>
            <Link href="/about-us">About Us</Link>
          </li>
          <li className={itemCls("/services")}>
            <Link href="/services">Our Service</Link>
          </li>
          <li className={itemCls("/projects")}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={itemCls("/compliance")}>
            <Link href="/compliance">Compliance</Link>
          </li>
          <li className={itemCls("/contact-us")}>
            <Link
              href="/contact-us"
              className="bg-accent py-4 px-6 rounded-[14px]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Mobile toggle */}
        <button
          className="md:hidden size-10 rounded-md flex items-center justify-center border border-[#EDEDED]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
        </button>
      </nav>
      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden sticky top-[64px] z-40 bg-background/95 backdrop-blur-md border-b border-[#EDEDED] px-5 py-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li className={itemCls("/")}>
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li className={itemCls("/about-us")}>
              <Link href="/about-us" onClick={() => setOpen(false)}>About Us</Link>
            </li>
            <li className={itemCls("/services")}>
              <Link href="/services" onClick={() => setOpen(false)}>Our Service</Link>
            </li>
            <li className={itemCls("/projects")}>
              <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            </li>
            <li className={itemCls("/compliance")}>
              <Link href="/compliance" onClick={() => setOpen(false)}>Compliance</Link>
            </li>
            <li className={`pt-2 ${itemCls("/contact-us")}`}>
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="bg-accent py-3 px-5 rounded-lg text-white inline-block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
