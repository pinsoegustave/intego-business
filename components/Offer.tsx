import { SERVICES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Offer() {
  return (
    <section className="w-[96%] mx-auto text-white rounded-4xl bg-[#F1F5EB] my-10 py-10">
      <div className="padding-container max-container mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-10 mt-10">
          <div className="flex flex-col justify-end">
            <h3 className="text-md font-bold text-[#034833]">
              SERVICES WE OFFER
            </h3>
            <h1 className="w-[380px] text-[#034833] regular-40 font-bold">
              Strike Your <br /> Target With Us
            </h1>
          </div>
          {/* Boxes */}
          {SERVICES.map((serve) => (
            <div key={serve.key} className="bg-[#FFFFFF] rounded-xl p-6 flex flex-col h-full">
              <div className="w-20 h-20 border border-gray-300 flex items-center justify-center rounded-full mb-6">
                <Image
                  src={serve.icon}
                  alt={serve.title}
                  width={45}
                  height={35}
                  className="object-contain"
                />
              </div>
              <div className="grow">
                <h2 className="text-[#034833] text-md font-bold">
                  {serve.title}
                </h2>
                <p className="text-[#727272] my-5">
                  {serve.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Single Reach Out Button */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/contact"
            className="bg-[#034833] text-white px-8 py-3 rounded-full font-bold hover:bg-[#023527] transition-colors duration-300 inline-flex items-center"
          >
            Get In Touch With Us
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
