import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-stretch flex-col md:flex-row justify-between gap-8">
        {/* Left Column - Contact Information */}
        <div className="flex-1 space-y-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <span className="text-green-600 font-bold">
                <Image src="call.svg" alt="call" width={25} height={25} />
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Requesting A Call:</p>
              <p className="text-lg font-semibold text-[#034833]">
                (629) 555-0129
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="">
              <span className="text-blue-600 font-bold">
                <Image src="mail.svg" alt="call" width={25} height={25} />
              </span>
            </div>
            <div className="">
              <p className="text-sm text-start text-gray-600">E-mail</p>
              <p className="text-lg font-semibold text-[#034833]">
                info@example.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <span className="text-orange-600 font-bold">
                <Image src="locate.svg" alt="call" width={25} height={25} />
              </span>
            </div>
            <div>
              <p className="text-sm text-start text-gray-600">Location</p>
              <p className="text-lg text-start font-semibold text-[#034833]">
                KG 655 st
              </p>
              <p className="font-bold text-[#034833]">Kigali, Rwanda</p>
            </div>
          </div>
        </div>
        {/* Vertical line */}
        <div className="w-px bg-gray-300 mx-4"></div>
        {/* Right Column - Working Hours */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                  <Image src="clock.svg" alt="call" width={25} height={25} />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Sunday - Monday
                </p>
                <p className="text-lg text-end font-semibold text-[#034833]">
                  9 am - 8 pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0">
                  <Image src="clock.svg" alt="call" width={25} height={25} />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Tuesday - Friday
                </p>
                <p className="text-lg text-end font-semibold text-[#034833]">
                  12 pm - 9 pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0">
                  <Image src="clock.svg" alt="call" width={25} height={25} />
              </div>
              <div className="">
                <p className="text-sm text-start text-gray-600">Saturday</p>
                <p className="text-lg text-end font-semibold text-[#034833]">
                  7 pm - 9pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
