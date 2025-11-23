import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href={"/"} className='w-[116px] h-10'>
            <b className='uppercase text-[#034833] regular-32 bold-32'>intego</b>
        </Link>

        <ul className='hidden h-full gap-12 lg:flex'>
            { NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-16 text-[#034833] flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold uppercase'>
                    {link.label}
                </Link>
            )) }
        </ul>

        <div className='lg:flexCenter flex text-black gap-4'>
            <Image 
                src="chat.svg"
                alt='chat'
                width={32}
                height={32}
                className='inline-block cursor-pointer'
            />
            <div className='text-black'>
                <p>Need help?</p>
                <b className='text-[#034833]'>(250) 234-5678</b>
            </div>
        </div>

        <Image 
            src="menu.svg"
            alt='menu'
            width={32}
            height={32}
            className='inline-block cursor-pointer lg:hidden'
        />
        <div>
            
        </div>
    </nav>
  )
}
