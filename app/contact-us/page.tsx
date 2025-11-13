import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { BiSolidPhoneCall } from "react-icons/bi";
import { VscMailRead } from "react-icons/vsc";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div>
      <div className="text-center pt-24 md:pt-32 px-5">
        <h2 className="text-3xl md:text-5xl text-accent font-bold mb-4">
          Contact Us
        </h2>
        <p className="text-base">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Regional contacts */}
      <section className="px-5 md:px-20 my-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
          Regional Contacts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lagos */}
          <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">Lagos</h4>
            <div className="space-y-5">
              <div>
                <p className="font-semibold">Mr. Gbolahan Lemboye</p>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>
                    <Link href="tel:+2348058322224" className="text-accent">
                      +234 805 832 2224
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+2348096087905" className="text-accent">
                      +234 809 608 7905
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Mr. Oludare Adeyinka</p>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>
                    <Link href="tel:+2347037905103" className="text-accent">
                      +234 703 790 5103
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+2348028774600" className="text-accent">
                      +234 802 877 4600
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-start gap-2">
                <FaLocationArrow className="mt-1" />
                <p className="text-sm opacity-90">
                  13 Amore Street, Off Toyin Street, Ikeja, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Port Harcourt */}
          <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">Port Harcourt</h4>
            <div className="space-y-5">
              <div>
                <p className="font-semibold">J.O Adeyinka</p>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>
                    <Link href="tel:+2349067255023" className="text-accent">
                      +234 906 725 5023
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+2348023128313" className="text-accent">
                      +234 802 312 8313
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Adebayo Komolafe</p>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>
                    <Link href="tel:+2348023194395" className="text-accent">
                      +234 802 319 4395
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-start gap-2">
                <FaLocationArrow className="mt-1" />
                <p className="text-sm opacity-90">
                  8 George Nkoro Close, Rumuigbo, Port Harcourt, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Delta */}
          <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">Delta</h4>
            <div className="space-y-5">
              <div>
                <p className="font-semibold">Adebayo Komolafe</p>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>
                    <Link href="tel:++2348096087905" className="text-accent">
                      +234 809 608 7905
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+2348028774600" className="text-accent">
                      +234 802 877 4600
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+2348023194395" className="text-accent">
                      +234 802 319 4395
                    </Link>
                  </li>
                  {/* <p className="font-semibold">Adebayo Komolafe</p>
                  <li>
                    <Link href="tel:+2348096087905" className="text-accent">
                      +234 809 608 7905
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="flex items-start gap-2">
                <FaLocationArrow className="mt-1" />
                <p className="text-sm opacity-90">
                  2 Adjomo Avenue, Delta Palace, Off Airport Road, Ugborikoko,
                  Warri, Delta, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-14 bg-white shadow max-w-[1000px] mx-auto p-5 md:p-6 rounded-lg">
        <div className="contact-frame text-white py-10 px-5 rounded-lg relative">
          <div className="mb-16">
            <h2 className="text-3xl mb-2">Contact Information</h2>
            <p className="text-sm text-[#C9C9C9]">
              Say something to start a live chat!
            </p>
          </div>
          <ul className="space-y-10 mb-20">
            <li>
              <Link href="tel:09067255023" className="flex items-center gap-3">
                <BiSolidPhoneCall />
                <p className="text-sm">09067255023, 08023128318</p>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:ladox_eng2002@yahoo.com"
                className="flex items-center gap-3"
              >
                <VscMailRead />
                <p className="text-sm">ladox_eng2002@yahoo.com</p>
              </Link>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p className="text-sm">
                  8 Nkoro Close, Off Psychiatric Road Rumuigbo, Port Harcourt.
                </p>
              </div>
            </li>
          </ul>
          <div className="absolute bottom-10 left-5">
            <ul className="flex gap-3">
              <li className="">
                <Link
                  href=""
                  className="text-white size-8 flex items-center justify-center bg-white rounded-full"
                >
                  <FaInstagram className="text-accent" />
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="text-white size-8 flex items-center justify-center bg-white rounded-full"
                >
                  <RiLinkedinFill className="text-accent" />
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="text-white size-8 flex items-center justify-center bg-white rounded-full"
                >
                  <FaFacebookF className="text-accent" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <form action="" className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
              <div className="form-group">
                <label htmlFor="" className="text-sm">
                  First Name
                </label>
                <Input className="" />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-sm">
                  Last Name
                </label>
                <Input className="" />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-sm">
                  Email
                </label>
                <Input className="" />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-sm">
                  Phone number
                </label>
                <Input className="" />
              </div>
            </div>
            <div className="form-group mb-10">
              <label className="text-sm block mb-4">Select Subject</label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="general"
                    className="accent-accent"
                  />
                  <span className="text-sm">General Inquiry</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="support"
                    className="accent-accent"
                  />
                  <span className="text-sm">Support</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="quote"
                    className="accent-accent"
                  />
                  <span className="text-sm">Request a Quote</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="quote"
                    className="accent-accent"
                  />
                  <span className="text-sm">Career</span>
                </label>
              </div>
            </div>
            <div className="form-group mb-10">
              <label htmlFor="" className="text-sm">
                Message
              </label>
              <Textarea />
            </div>
            <button className="text-sm bg-accent py-5 px-14 ml-auto text-white rounded-[5px] block">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
