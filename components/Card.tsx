import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="w-full space-y-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <span className="text-green-600 font-bold">
                <Image src="call.svg" alt="call" width={25} height={25} />
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Requesting A Call:</p>
              <p className="text-lg font-semibold text-[#034833]">
                (250) 788-352-322 
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
                rwamwengerukebaj@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <span className="text-orange-600 font-bold">
                <Image src="locate.svg" alt="location" width={25} height={25} />
              </span>
            </div>
            <div>
              <p className="text-sm text-start text-gray-600">Location</p>
              <p className="text-lg text-start font-semibold text-[#034833] mb-2">
                Nyagatare, Eastern Province
              </p>
              <p className="font-bold text-[#034833]">Rwanda</p>
            </div>
          </div>
        </div>
  );
}
