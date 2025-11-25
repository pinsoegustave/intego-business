import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="max-container padding-container relative flexBetween">
      <div className="grid grid-cols-2 p-4">
        <Image
          src="rectangle.svg"
          alt="Image 1"
          width={312}
          height={365}
          className="object-cover rounded-lg"
        />
        <Image
          src="rectangle.svg"
          alt="Image 2"
          width={244}
          height={230}
          className="top-1/2 ml-8 object-cover rounded-lg"
        />
        <div>
            <Image
                src="group.svg"
                alt="Image 3"
                width={307}
                height={267}
                className="object-cover rounded-lg"
            />
            <div className="flex flex-col bg-[#83CD20] text-white w-52 h-52 -mt-54 ml-2 justify-center items-center rounded-xl">
                <h2 className="regular-64 text-center">10+</h2>
                <p className="text-center">years of experiences</p>
            </div>
        </div>
        
        <Image
          src="rectangle.svg"
          alt="Image 4"
          width={312}
          height={312}
          className="-ml-20 z-10 -mt-14 object-cover rounded-lg"
        />
      </div>
      {/* Right */}
      <div className="w-1/2">
        <h2 className="text-sm font-bold text-[#034833]">ABOUT US</h2>
        <h1 className="text-[50px] font-bold leading-[60px]">Unlock Opportunity <br /> <span className="text-[#034833]"> Through Financial Clarity </span></h1>
        <p className="w-124 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non quo iusto odit pariatur.</p>
        <div className="flex my-4 gap-4">
            <div className="">
                <h4 className="text-[#034833] text-[18px] leading-7 font-semibold">Business Guides</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolor veritatis deleniti numquam</p>
            </div>
            <div>
                <h4 className="text-[#034833] text-[18px] leading-7 font-semibold">Financial Consultancy</h4>
                <p>consequatur sequi illo facilis maxime natus fuga iste iusto, quaerat necessitatibus</p>
            </div>
        </div>
             {/* Button */}
        <div className="mt-8">
            <Button 
                title="Contact Us"
                variant="btn_white"
                type="button"
                icon=""
            />
        </div>
       
      </div>
    </section>
  );
}
