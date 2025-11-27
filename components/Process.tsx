import React from 'react'

export default function Process() {
  return (
    <section className='w-[96%] mx-auto h-[632px] text-white rounded-4xl mt-10 border-2 border-fuchsia-500' style={{ backgroundImage: "url('lines.svg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <div className='max-container padding-container p-8 border-2 border-amber-400'>
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-md font-bold text-[#034833]">PROCESS OVERVIEW</h3>
                    <h1 className="w-[380px] text-[#034833] regular-32 font-bold">Possibilities INTEGO Solution to Consultancy</h1>
                </div>
                <p className='text-black text-sm flex items-end w-[30%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac</p>
            </div>
        </div>
    </section>
  )
}
