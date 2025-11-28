import { PROVINCES } from "@/constants";
import React from "react";
import Card from "./Card";

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
        {/* Card */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 mt-16 bg-white rounded-lg shadow-2xl">
          {/* Left side - Legend content */}
          <Card />

          {/* Right side - Map */}
          <div className="flex-1 w-full md:w-1/2 h-80 md:h-64 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-lg font-semibold mb-2">Location Map</div>
              <div className="text-sm">Map visualization area</div>
              {/* Replace this div with your actual map component */}
              {/* <MapComponent /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
