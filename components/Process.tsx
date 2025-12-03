import Image from 'next/image'
import React from 'react'

export default function Process() {
  return (
    <section className='w-[96%] mx-auto text-white rounded-4xl mt-10' style={{ backgroundImage: "url('lines.svg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <div className='max-container padding-container p-8'>
            <div className='flex justify-between'>
                <div className='mt-10'>
                    <h3 className="text-md font-bold text-[#034833]">PROCESS OVERVIEW</h3>
                    <h1 className="w-[380px] text-[#034833] regular-32 font-bold">Possibilities INTEGO Solution to Consultancy</h1>
                </div>
            </div>
            {/* Old cards */}
            <div className='flex flex-col md:flex-row w-full'>
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
                    <h3 className='text-[#034833] font-bold'>Initial Consultation</h3>
                    <p className='text-[#727272] text-sm'>Schedule a free consultation to discuss your business needs and goals with our experts.</p>
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
                    <h3 className='text-[#034833] font-bold'>Needs Assessment</h3>
                    <p className='text-[#727272] text-sm'>We analyze your financial situation and identify areas for improvement and growth.</p>
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
                    <h3 className='text-[#034833] font-bold'>Customized Strategy</h3>
                    <p className='text-[#727272] text-sm'>Receive a tailored business strategy designed specifically for your unique requirements.</p>
                </div>
            </div>

            </div>
            
        </div>
    </section>
  )
}

// Adding two more steps to complete the process
const AdditionalSteps = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 mt-8'>
      <div className='flex gap-4'>
        <div className='w-40 h-40 bg-[#83CD20] rounded-lg flex items-center justify-center relative'>
          <div className='absolute top-2 left-2'>
            <Image 
              src="04.svg"
              alt="step4"
              width={34}
              height={34}
              className='object-contain'
            />
          </div>
          <Image 
            src="book.svg"
            alt="implementation"
            width={65}
            height={65}
            className='object-contain'
          />
        </div>
        <div className='w-[40%] gap-2 flex flex-col justify-center'>
          <h3 className='text-[#034833] font-bold'>Implementation</h3>
          <p className='text-[#727272] text-sm'>Our team implements the strategies while keeping you informed at every step.</p>
        </div>
      </div>
      
      <div className='flex gap-4'>
        <div className='w-40 h-40 bg-[#83CD20] rounded-lg flex items-center justify-center relative'>
          <div className='absolute top-2 left-2'>
            <Image 
              src="05.svg"
              alt="step5"
              width={34}
              height={34}
              className='object-contain'
            />
          </div>
          <Image 
            src="location.svg"
            alt="ongoing support"
            width={65}
            height={65}
            className='object-contain'
          />
        </div>
        <div className='w-[40%] gap-2 flex flex-col justify-center'>
          <h3 className='text-[#034833] font-bold'>Ongoing Support</h3>
          <p className='text-[#727272] text-sm'>We provide continuous support and adjustments to ensure your business thrives.</p>
        </div>
      </div>
    </div>
  )
}
