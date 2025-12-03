import React from 'react'

export default function Banner() {
  return (
    <section className='w-[96%] mx-auto bg-[#034833] h-64 text-white rounded-4xl mt-10 flex items-center'>
      <div className='max-container padding-container w-full'>
        <div className='max-w-3xl'>
          <h1 className='text-4xl sm:text-5xl font-bold leading-tight mb-2'>
            About <span className='text-[#83CD20]'>Us</span>
          </h1>
          <p className='text-gray-200'>
            Home &gt; About Us
          </p>
        </div>
      </div>
    </section>
  )
}
