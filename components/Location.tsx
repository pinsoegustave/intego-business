"use client";

import { PROVINCES } from "@/constants";
import React from "react";
import Card from "./Card";
import Image from "next/image";
import dynamic from 'next/dynamic';

const Map = dynamic<{}>(
  () => import('./Map').then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => <div>Loading map...</div> 
  }
);

export default function Location() {
  return (
    <section className="max-container padding-container my-10 py-10">
      <div className="text-center items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <h3 className="text-md font-bold text-[#83CD20]">
            CONTACT INFORMATION
          </h3>
          <h1 className="text-[#034833] text-center text-4xl regular-40 font-bold">
            Get Strategic <br /> Guidance
          </h1>
        </div>
        {/* provinces */}
        <div className="flex flex-wrap justify-center gap-4">
          {PROVINCES.map((prove) => (
            <div
              key={prove}
              className="border border-[#83CD20] rounded-md px-6 py-3"
            >
              <span className="flex font-bold gap-4">{prove}</span>
            </div>
          ))}
        </div>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 p-6 mt-16 bg-white rounded-lg shadow-2xl">
          {/* Left - Contact Details */}
          <div className="w-full lg:w-1/3">
            <Card />
          </div>

          {/* Middle - Availability Time */}
          <div className="w-full lg:w-1/3 border-l border-r border-gray-200 px-6">
            <h3 className="text-lg font-semibold text-[#034833] mb-4">Working Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <Image src="/clock.svg" alt="clock" width={20} height={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sunday - Monday</p>
                  <p className="font-semibold text-[#034833]">9 am - 8 pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <Image src="/clock.svg" alt="clock" width={20} height={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tuesday - Friday</p>
                  <p className="font-semibold text-[#034833]">12 pm - 9 pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <Image src="/clock.svg" alt="clock" width={20} height={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Saturday</p>
                  <p className="font-semibold text-[#034833]">7 pm - 9 pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Map */}
          <div className="w-full lg:w-1/3 h-80 bg-gray-100 rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
