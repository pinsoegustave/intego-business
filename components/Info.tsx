import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

export default function Info() {
  return (
    <section className="w-[96%] mx-auto text-white rounded-4xl my-10 py-10 ">
      <div className="padding-container max-container mb-5 md:flex mx-auto justify-center gap-10">
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
        <div className="">
          <div className="flex flex-col justify-end">
            <h3 className="text-md font-bold text-[#034833]">
              CONTACT INFORMATION
            </h3>
            <h1 className="w-[380px] text-[#034833] regular-40 font-bold">
              Strike Your Target <br /> With Us
            </h1>
          </div>
          {/* Starts here */}
          <div className="bg-[#F1F5EB] my-10 p-8 rounded-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
