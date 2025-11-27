import Image from "next/image";
import React from "react";

export default function Story() {
  return (
    <section className="w-full max-w-full my-24">
      <div className="padding-container max-container grid md:grid-cols-2 gap-10">
        <div className="flex flex-col md:flex-row gap-4">
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
        <div className="flex flex-col gap-2">
            <h3 className="text-md font-bold text-[#034833]">OUR STORY</h3>
            <h1 className="regular-32 font-bold">Where Consultancy Meets <br /> <span className="text-[#034833]">Finance & Business</span></h1>
            <p className="mt-2 w-full max-w-[630px]">Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nullaEt purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nullaEt purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nullaEt purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla</p>
        </div>
      </div>
    </section>
  );
}
