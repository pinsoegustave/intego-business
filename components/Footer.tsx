import { FOOTER_LINKS, TERMS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#034833] text-white mt-16 sm:mt-20 lg:mt-24">
      {/* Decorative Element */}
      <div className="flex justify-center -mt-8 sm:-mt-12 lg:-mt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="flip.svg"
            alt="background pattern"
            fill
            className="object-cover object-center opacity-20"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-container padding-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 py-8 sm:py-12">
          {/* Compact brand section for mobile */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/3 xl:w-1/4">
              <Link href="/" className="mb-4">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  INTEGO
                </h1>
              </Link>
              <p className="text-sm text-gray-300">
                We Help You Strike Your Target
              </p>
          </div>

          {/* Links Section */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {FOOTER_LINKS.map((column) => (
                <FooterColumn key={column.title} title={column.title}>
                  <ul className="flex flex-col gap-3 sm:gap-4 text-gray-300">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link 
                          href="/contact"
                          className="text-sm sm:text-base hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-6 sm:my-8" />

        {/* Bottom Section - Terms */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4 sm:py-6">
          <div className="text-sm sm:text-base text-gray-300 text-center sm:text-left order-2 sm:order-1">
            <p>
              &copy; {new Date().getFullYear()} Intego Business and Finance Consultancy. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 order-1 sm:order-2">
            {TERMS.map((term) => (
              <Link 
                key={term}
                href="/contact"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <h3 className="font-bold text-lg sm:text-xl text-white whitespace-nowrap">
        {title}
      </h3>
      {children}
    </div>
  );
};