import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section className="w-[98%] mx-auto max-w-full bg-[#F1F5EB] rounded-2xl mt-24">
      <div className="w-[80%] mx-auto max-container padding-container py-24 flex-1">
        <div className="">
          <h2 className="text-sm font-bold text-[#034833]">OUR SERVICES</h2>
          <h1 className="text-[50px] font-bold leading-[60px]">
            Expert Business Solutions <br />
            <span className="text-[#034833]">For Sustainable Growth</span>
          </h1>
        </div>
        {/* rectangles */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Card 1 */}
            <div className="bg-white flex flex-col items-center justify-center rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="bg-[#83CD20] text-white p-4 mb-4 sm:mb-6 flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="book.svg"
                  alt="Human Resource Management"
                  width={50}
                  height={50}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="text-center flex flex-col items-center">
                <h4 className="text-[#034833] text-lg sm:text-xl lg:text-[22px] font-semibold mb-3 sm:mb-4 leading-tight">
                  Human Resource Management
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2 sm:px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  aut, cumque quam recusandae unde nesciunt officia veritatis.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-green-500 flex flex-col items-center justify-center rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="bg-[#83CD20] text-white p-4 mb-4 sm:mb-6 flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="visa.svg"
                  alt="Bookkeeping"
                  width={50}
                  height={50}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="text-center flex flex-col items-center">
                <h4 className="text-[#034833] text-lg sm:text-xl lg:text-[22px] font-semibold mb-3 sm:mb-4 leading-tight">
                  Bookkeeping
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2 sm:px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  aut, cumque quam recusandae unde nesciunt officia veritatis.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white flex flex-col items-center justify-center rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="bg-[#83CD20] text-white p-4 mb-4 sm:mb-6 flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="book.svg"
                  alt="Accounting"
                  width={45}
                  height={45}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="text-center flex flex-col items-center">
                <h4 className="text-[#034833] text-lg sm:text-xl lg:text-[22px] font-semibold mb-3 sm:mb-4 leading-tight">
                  Accounting
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2 sm:px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  aut, cumque quam recusandae unde nesciunt officia veritatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
