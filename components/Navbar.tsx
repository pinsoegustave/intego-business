"use client"
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {

    const [ isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

  return (
    <nav className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white relative z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="shrink-0">
            <Link href="/" className="flex items-center">
                <b className="text-2xl font-bold text-[#034833] uppercase">intego</b>
            </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-8">
                {NAV_LINKS.map((link) => (
                    <li key={link.key}>
                        <Link 
                            href={link.href}
                            className="text-gray-700 hover:text-[#034833] font-medium transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Right - Contact & Mobile Menu */}
        <div className="flex items-center space-x-4">
            
            {/* Desktop Contact Info - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-3">
                <Image 
                    src="/chat.svg"
                    alt="Chat"
                    width={24}
                    height={24}
                    className="text-gray-600"
                />
                <div className="text-right">
                    <p className="text-sm text-gray-600">Need help?</p>
                    <p className="text-sm font-semibold text-[#034833]">(250)788-353-262</p>
                </div>
            </div>

            {/* Mobile Menu Button - Hidden on desktop */}
            <button className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100" 
                onClick={toggleMobileMenu}
                aria-label='Toggle menu'
                aria-expanded={isMobileMenuOpen}
            >
                <Image 
                    src={isMobileMenuOpen ? "/svgrepo.svg" : "/menu.svg"}
                    alt={isMobileMenuOpen ? "Close" : "Open"}
                    width={24}
                    height={24}
                    className=""
                />
            </button>
        </div>
    </div>

    {/* Mobile Menu - Dropdown */}
    <div className={`lg:hidden transition-all duration-300 ease-in-out transform ${ isMobileMenuOpen ? 'max-h-96 opacity-100 translate-y-0': 'max-h-0 opacity-0 -translate-y-2'}`}>
        {/* Add your mobile dropdown menu here */}
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t">
            {NAV_LINKS.map((link) => (
                <Link 
                    key={link.key}
                    href={link.href}
                    className="block px-3 py-2 text-gray-700 hover:text-[#034833] hover:bg-gray-50 rounded-md"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    </div>
</nav>
  )
}
