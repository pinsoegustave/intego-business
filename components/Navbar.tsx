import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   <nav className="relative z-30 py-5 px-6 lg:px-20 2xl:px-0">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left - Logo */}
        <Link href={"/"}>
            <b className="uppercase text-[#034833] text-2xl font-bold">intego</b>
        </Link>

        {/* Center - Navigation Links */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-12">
                {NAV_LINKS.map((link) => (
                    <Link 
                        href={link.href} 
                        key={link.key} 
                        className="text-base text-[#034833] cursor-pointer pb-1.5 transition-all hover:font-bold uppercase"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
        </div>

        {/* Right - Contact Info & Menu */}
        <div className="flex items-center gap-4">
            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center justify-self-end gap-4 text-black">
                <Image 
                    src="chat.svg"
                    alt="chat"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                />
                <div>
                    <p>Need help?</p>
                    <b className="text-[#034833]">(250) 234-5678</b>
                </div>
            </div>

            {/* Mobile Menu */}
            <Image 
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer lg:hidden"
            />
        </div>
    </div>
</nav>
  )
}
