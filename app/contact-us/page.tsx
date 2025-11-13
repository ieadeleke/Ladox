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
        <h2 className="text-3xl md:text-5xl text-accent font-bold mb-4">Contact Us</h2>
        <p className="text-base">
          Any question or remarks? Just write us a message!
        </p>
      </div>
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
              <Link
                href="tel:+2348132277316"
                className="flex items-center gap-3"
              >
                <BiSolidPhoneCall />
                <p className="text-sm">+234 813 227 316</p>
              </Link>
            </li>
            <li>
              <Link
                href="mailTo:ladox@gmail.com"
                className="flex items-center gap-3"
              >
                <VscMailRead />
                <p className="text-sm">ladox@gmail.com</p>
              </Link>
            </li>
            <li>
              <Link
                href="tel:+2348132277316"
                className="flex items-center gap-3"
              >
                <FaLocationArrow />
                <p className="text-sm">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </p>
              </Link>
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
