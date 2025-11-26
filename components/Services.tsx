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
        {/* rectangles */}
        <div className="mt-12 flex flex-rows-3 gap-8 p-4">
          <div className="w-[410px] h-[400px] bg-white flex flex-col items-center justify-center rounded-2xl">
            <div className="bg-[#83CD20] text-white p-4 my-4 flex items-center justify-center rounded-full">
                <Image 
                src="book.svg"
                alt="Human"
                width={50}
                height={50}
                className="object-contain"
            />
            </div>
            <div className="text-center">
                <h4 className="text-[#034833] text-[18px] leading-7 font-semibold">Human Resource Management</h4>
                <p className="mx-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut, cumque quam recusandae unde nesciunt officia veritatis, tempora ab placeat sapiente quo praesentium officiis qui animi possimus atque eos totam.</p>
            </div>
          </div>
          <div className="w-[410px] h-[400px] bg-white border border-green-500 flex flex-col items-center justify-center rounded-2xl">
            <div className="bg-[#83CD20] text-white p-4 my-4 flex items-center justify-center rounded-full">
                <Image 
                src="visa.svg"
                alt="Human"
                width={50}
                height={50}
                className="object-contain"
            />
            </div>
            <div className="text-center">
                <h4 className="text-[#034833] text-[18px] leading-7 font-semibold">Bookkeeping</h4>
                <p className="mx-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut, cumque quam recusandae unde nesciunt officia veritatis, tempora ab placeat sapiente quo praesentium officiis qui animi possimus atque eos totam.</p>
            </div>
          </div>
          <div className="w-[410px] h-[400px] bg-white flex flex-col items-center justify-center rounded-2xl">
            <div className="bg-[#83CD20] text-white p-4 my-4 flex items-center justify-center rounded-full">
                <Image 
                src="book.svg"
                alt="Human"
                width={45}
                height={45}
                className="z-10 object-contain"
            />
            </div>
            <div className="text-center">
                <h4 className="text-[#034833] text-[18px] leading-7 font-semibold">Accounting</h4>
                <p className="mx-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut, cumque quam recusandae unde nesciunt officia veritatis, tempora ab placeat sapiente quo praesentium officiis qui animi possimus atque eos totam.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
