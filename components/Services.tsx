import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section className="border-2 border-amber-400 w-full max-w-full bg-[#F1F5EB]">
      <div className="max-container padding-container py-24 border-2 border-red-500">
        <div className="">
          <h2 className="text-sm font-bold text-[#034833]">OUR SERVICES</h2>
          <h1 className="text-[50px] font-bold leading-[60px]">
            Adventure Unleashed <br />{" "}
            <span className="text-[#034833]"> Discover Your Next </span>
          </h1>
        </div>
        <div className='mt-12 flex flex-rows-3 gap-8 p-4"'>
          <Image
            src="rectangle.svg"
            alt="Image 1"
            width={410}
            height={400}
            className="object-cover rounded-lg"
          />
          <Image
            src="rectangle.svg"
            alt="Image 2"
            width={410}
            height={400}
            className="object-cover rounded-lg"
          />
          <Image
            src="rectangle.svg"
            alt="Image 2"
            width={410}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
