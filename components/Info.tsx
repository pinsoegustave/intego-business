import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Info() {
  return (
    <section className="w-[96%] mx-auto text-white rounded-4xl border-2 border-fuchsia-600 my-10 py-10 ">
      <div className="padding-container max-container mb-5 md:flex mx-auto justify-center gap-10 border border-amber-500">
        {/* Person*/}
        <div>
          <Image
            src="Image.svg"
            alt="person"
            width={600}
            height={600}
            className="object-fit"
          />
        </div>
        {/* Form */}
        <div className="border-2 border-red-700">
          <div className="flex flex-col justify-end">
            <h3 className="text-md font-bold text-[#034833]">
              CONTACT INFORMATION
            </h3>
            <h1 className="w-[380px] text-[#034833] regular-40 font-bold">
              Strike Your Target <br /> With Us
            </h1>
          </div>
          {/* Starts here */}
          <div className="border border-amber-400 bg-[#F1F5EB] my-10 p-8 rounded-xl">
            <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <label htmlFor="Email" className="flex-1">
                <span className="text-sm font-bold text-[#034833] block mb-2">
                  Your Email
                </span>
                <input
                  type="email"
                  id="Email"
                  placeholder="Your Email"
                  className="bg-[#FFFFFF] w-full rounded-full border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#034833] sm:text-sm text-black"
                />
              </label>
              <label htmlFor="phone" className="flex-1">
                <span className="text-sm font-bold text-[#034833] block mb-2">
                  Your Phone
                </span>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone"
                  className="bg-[#FFFFFF] w-full rounded-full border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#034833] sm:text-sm text-black"
                />
              </label>
            </div>
            <div className="flex flex-col gap-8">
              <label htmlFor="address" className="flex-1">
                <span className="text-sm font-bold text-[#034833] block mb-2">
                  Your Address
                </span>
                <input
                  type="text"
                  id="address"
                  placeholder="Your Address"
                  className="bg-[#FFFFFF] w-full rounded-full border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#034833] sm:text-sm text-black"
                />
              </label>
              <label htmlFor="message" className="flex-1">
                <span className="text-sm font-bold text-[#034833] block mb-2">
                  Message
                </span>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Type your message here..."
                  className="bg-[#FFFFFF] w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#034833] resize-none text-black"
                />
              </label>
            </div>
            <div className="flex justify-center w-full">
              <Button 
                title="Send Message"
                type="submit"
                variant="btn_white"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
