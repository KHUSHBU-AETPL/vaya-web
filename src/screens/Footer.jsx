import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-primary-beige text-primary-black pt-16 pb-10">
      <div className="container mx-auto px-6 space-y-20">

        {/* Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vaya App */}
          <div>
            <h4 className="text-2xl font-bold text-primary-orange mb-6 relative inline-block">
              <span className="border-b-4 border-primary-orange pb-1">Vaya App</span>
            </h4>
            <ul className="space-y-3">
              {[
                "Play football",
                "Code of conduct",
                "Become an organiser",
                "Corporate football",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block transition-all duration-200 text-sm text-gray-800 hover:text-primary-orange hover:pl-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Vaya */}
          <div>
            <h4 className="text-2xl font-bold text-primary-orange mb-6 relative inline-block">
              <span className="border-b-4 border-primary-orange pb-1">About Vaya</span>
            </h4>
            <ul className="space-y-3">
              {[
                "Our story",
                "Contact",
                "Privacy Policy",
                "Terms of use / Service",
                "Partner with us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block transition-all duration-200 text-sm text-gray-800 hover:text-primary-orange hover:pl-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-65">

          {/* Download App */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-primary-orange mb-4">
              Download the <span className="text-black">Vaya</span> app on
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-xl"
              >
                <FaApple className="text-2xl" />
                <span className="text-sm font-medium">App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-xl"
              >
                <FaGooglePlay className="text-2xl" />
                <span className="text-sm font-medium">Google Play</span>
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-right">
            <h4 className="text-2xl font-bold text-primary-orange mb-4 mr-12">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-end ml-12 gap-4">
              {[SiTiktok, FaInstagram, FaFacebook, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-primary-orange text-white hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-xl"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} <span className="text-primary-orange font-semibold">Vaya</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
