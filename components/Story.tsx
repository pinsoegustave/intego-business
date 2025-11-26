import Image from "next/image";
import React from "react";

export default function Story() {
  return (
    <section className="w-full max-w-full my-24 bg-amber-200">
      <div className="border-2 border-red-500 padding-container max-container grid md:grid-cols-2">
        <div className="flex gap-4">
          <div>
            <Image
              src="rect1.svg"
              alt="Image 1"
              width={267}
              height={357}
              className="object-cover rounded-lg mb-6 border border-[#83CD20]"
            />
            <Image
              src="circle.svg"
              alt="Image 2"
              width={206}
              height={205}
              className="top-1/2 ml-8 object-cover rounded-lg"
            />
          </div>
          <div className="">
            <div className="flex flex-row bg-[#83CD20] text-white w-[282px] h-[127px] gap-4 mb-4 justify-center items-center rounded-xl">
              <h2 className="regular-64 text-center">10+</h2>
              <p className="text-center">Years Of <br /> Experiences</p>
            </div>
            <Image
              src="rect2.svg"
              alt="Image 3"
              width={282}
              height={267}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
