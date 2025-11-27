import Image from 'next/image'
import React from 'react'


export default function Testimonial() {
  return (
    <section className='w-full'>
        <div className='padding-container max-container p-5 my-4'>
            <Image 
            src="quote.svg"
            alt='quote'
            width={320}
            height={320}
            className='relative mx-auto mt-32 ml-42'
            />
            <div className='text-center relative mx-auto -mt-[20%]'>
                <h3 className="text-md font-bold text-[#034833]">CLIENT TESTIMONIALS</h3>
                <h1 className="mx-auto w-[380px] text-[#034833] text-center regular-32 font-bold">Empowering Your Path to Prosperity</h1>
            </div>
            <div className='flex mt-10 items-center'>
                <div className='w-[50%] h-[40%] rounded-2xl shadow-2xl mx-auto -mr-8 z-10 bg-[#FFFF]'>
                    <p className='regular-24 text-[#034833] w-[620px] mx-auto p-6'>Leverage agile frameworks to provide a robust syns is for strategy foster Leverage agile frameworks to provide a robust synopsis for go for strategy foster </p>
                    <div className='w-[80%] mx-auto flex p-6 flexBetween'>
                        <div className='flex flex-row gap-4 items-center'>
                            <Image 
                                src="circle.svg"
                                alt='person'
                                width={80}
                                height={80}
                                className='object-contain rounded-full'
                            />
                            <div>
                                <p className='text-[#034833] font-bold'>Eleanor Pena</p>
                                <span>President of NextAlign</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white shadow-lg hover:cursor-pointer">
                                &larr;
                            </button>
                            <button className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 text-white shadow-lg hover:cursor-pointer">
                                &rarr;
                            </button>
                            </div>
                        </div>
                        </div>
                    <div>
                    <Image 
                      src="recquo.svg"
                      alt='recquote'
                      width={630}
                      height={611}
                      className=''  
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
