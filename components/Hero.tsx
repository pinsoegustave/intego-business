import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500'>
        <Image 
            src="frame.svg"
            alt='hero-image'
            width={100}
            height={100}
            className='w-full h-full bg-[#034833]'
        />
         {/*Middle text  */}
        <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-2xl md:text-[80px] font-bold mb-4'>Journey With Confidence <span className='text-green-400'>Strike</span> Your Target</h1>
            <p className='text-sm md:text-[16px] max-w-2xl mx-auto mb-6 items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima perferendis magni voluptates fugit beatae, quia voluptatem, </p>
            
            <div className='flex justify-center items-center p-12'>
                <Button 
                    type='button'
                    title='Reach out'
                    icon=''
                    variant='btn_dark_green'    
                />
            </div>
        </div>
        
    </section>
  )
}
