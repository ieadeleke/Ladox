import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import LogoImg from "@/assets/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24">

      {/* Main footer */}
      <div className="bg-[#001921] text-white mt-10">
        <div className="px-5 md:px-20 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="col-span-1 lg:col-span-2">
              <Image
                src={LogoImg}
                alt="Ladox"
                className="w-[145px] h-auto mb-4"
                quality={100}
                width={1000}
                height={1000}
              />
              <p className="text-sm opacity-90 max-w-[460px] leading-relaxed">
                Ladox Engineering Company Limited delivers quality mechanical,
                electrical and facility services with a focus on safety,
                reliability and client satisfaction.
              </p>
              <ul className="flex gap-3 mt-5">
                <li>
                  <Link
                    href="#"
                    className="size-9 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="size-9 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <RiLinkedinFill />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="size-9 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/compliance">Compliance</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>
                  <Link href="#">HSE Policy</Link>
                </li>
                <li>
                  <Link href="#">Quality Statement</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Get in touch</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>+234 813 227 316</li>
                <li>ladox@gmail.com</li>
                <li>132 Dartmouth Street, Boston MA 02156, USA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-sm opacity-90 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p>© {year} Ladox Engineering Company Limited. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="#">Privacy Policy</Link>
              <span className="opacity-50">•</span>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

