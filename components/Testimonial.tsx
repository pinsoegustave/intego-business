import Image from 'next/image'
import React from 'react'


export default function Testimonial() {
  return (
    <section className='w-full py-12 sm:py-16 lg:py-24 bg-[#F9FAFB]'>
        <div className='padding-container max-container'>
            <div className='text-center mx-auto mb-12 sm:mb-16 max-w-4xl'>
                <h3 className="text-md font-bold text-[#034833] mb-3">CLIENT TESTIMONIALS</h3>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#034833] mb-6">Success Stories That Speak Volumes</h1>
                <p className="text-gray-600 text-lg">Don't just take our word for it. Here's what our clients have to say about their experience with us.</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Testimonial 1 */}
                <div className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
                    <div className='flex items-center mb-6'>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className='text-gray-700 text-lg leading-relaxed mb-6'>"Partnering with Intego was the best decision we made for our business. Their financial strategies helped us reduce operational costs by 35% while increasing our profit margins. The team's attention to detail and proactive approach is truly commendable."</p>
                    <div className='flex items-center'>
                        <div className='bg-[#83CD20] text-white p-2 rounded-full mr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <p className='font-semibold text-gray-900'>Sarah Johnson</p>
                            <p className='text-gray-600'>CFO, NexGen Technologies</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
                    <div className='flex items-center mb-6'>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className='text-gray-700 text-lg leading-relaxed mb-6'>"The tax optimization strategies implemented by Intego's team saved us over $250,000 in the first year. Their expertise in international tax laws was instrumental in our global expansion. Highly recommended for any business serious about growth."</p>
                    <div className='flex items-center'>
                        <div className='bg-[#83CD20] text-white p-2 rounded-full mr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 16h.01" />
                            </svg>
                        </div>
                        <div>
                            <p className='font-semibold text-gray-900'>David Kim</p>
                            <p className='text-gray-600'>CEO, Summit Global Ventures</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-16 text-center'>
                <h3 className='text-xl font-semibold text-gray-900 mb-6'>Join Our Growing List of Satisfied Clients</h3>
                <a 
                    href='/contact' 
                    className='inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#034833] hover:bg-[#023527] transition-colors duration-300 md:py-4 md:text-lg md:px-10'
                >
                    Get Started Today
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
  )
}
