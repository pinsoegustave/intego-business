import Image from 'next/image'
import React from 'react'


export default function Testimonial() {
  return (
    <section className='w-full py-2 sm:py-12 lg:py-20'>
        <div className='padding-container max-container'>
            <Image 
            src="quote.svg"
            alt='quote'
            width={320}
            height={320}
            className='mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20'
            />
            <div className='text-center mx-auto mb-12 sm:mb-16'>
                <h3 className="text-md font-bold text-[#034833]">CLIENT TESTIMONIALS</h3>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#034833] max-w-3xl mx-auto">Empowering Your Path to Prosperity</h1>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
                <div className='bg-white rounded-2xl shadow-2xl md:-mr-24 p-6 sm:p-8 flex-1 z-1 w-full'>
                    <p className='text-lg sm:text-xl text-[#034833] leading-relaxed mb-6 sm:mb-8'>Leverage agile frameworks to provide a robust syns is for strategy foster Leverage agile frameworks to provide a robust synopsis for go for strategy foster </p>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
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
                    <div className='flex-1 w-full'>
                        <Image 
                      src="recquo.svg"
                      alt='recquote'
                      width={630}
                      height={611}
                      className='w-full h-auto object-contain'  
                    />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
