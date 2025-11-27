import Image from 'next/image'
import React from 'react'

export default function Process() {
  return (
    <section className='w-[96%] mx-auto h-[450px] text-white rounded-4xl mt-10 border-2 border-fuchsia-500' style={{ backgroundImage: "url('lines.svg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <div className='max-container padding-container p-8 border-2 border-amber-400'>
            <div className='flex justify-between'>
                <div className='mt-10'>
                    <h3 className="text-md font-bold text-[#034833]">PROCESS OVERVIEW</h3>
                    <h1 className="w-[380px] text-[#034833] regular-32 font-bold">Possibilities INTEGO Solution to Consultancy</h1>
                </div>
                <p className='text-black text-sm flex items-end w-[30%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac</p>
            </div>
            <div className='flexBetween w-full'>
                <div className='flex gap-4 mt-12'>
                <div className='w-40 h-40 bg-[#83CD20] rounded-lg flex items-center justify-center relative'>
                    <div className='absolute top-2 left-2'>
                        <Image 
                        src="01.svg"
                        alt="step1"
                        width={34}
                        height={34}
                        className='object-contain'
                    />
                    </div>
                    <Image 
                        src="book.svg"
                        alt="world"
                        width={65}
                        height={65}
                        className='object-contain'
                    />
                </div>
                <div className='w-[40%] gap-2 flex flex-col justify-center'>
                    <h3 className='text-[#034833] font-bold'>Connect With Us</h3>
                    <p className='text-[#727272] text-sm'>There are many variati of passages of engineer</p>
                </div>
            </div>
            <div className='flex gap-4 mt-12'>
                <div className='w-40 h-40 bg-[#83CD20] rounded-lg flex items-center justify-center relative'>
                    <div className='absolute top-2 left-2'>
                        <Image 
                        src="02.svg"
                        alt="step2"
                        width={34}
                        height={34}
                        className='object-contain'
                    />
                    </div>
                    <Image 
                        src="location.svg"
                        alt="world"
                        width={65}
                        height={65}
                        className='object-contain'
                    />
                </div>
                <div className='w-[40%] gap-2 flex flex-col justify-center'>
                    <h3 className='text-[#034833] font-bold'>Share Your Challenges</h3>
                    <p className='text-[#727272] text-sm'>There are many variati of passages of engineer</p>
                </div>
            </div>
            <div className='flex gap-4 mt-12'>
                <div className='w-40 h-40 bg-[#83CD20] rounded-lg flex items-center justify-center relative'>
                    <div className='absolute top-2 left-2'>
                        <Image 
                        src="03.svg"
                        alt="step3"
                        width={34}
                        height={34}
                        className='object-contain'
                    />
                    </div>
                    <Image 
                        src="book.svg"
                        alt="world"
                        width={65}
                        height={65}
                        className='object-contain'
                    />
                </div>
                <div className='w-[40%] gap-2 flex flex-col justify-center'>
                    <h3 className='text-[#034833] font-bold'>Receive Expert Solutions</h3>
                    <p className='text-[#727272] text-sm'>There are many variati of passages of engineer</p>
                </div>
            </div>

            </div>
            
        </div>
    </section>
  )
}
