import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='border-2 border-red-200 flexBetween max-container padding-container relative z-30 py-5'>
        <Link href={"/"}>
            <h1 className='uppercase'>intego</h1>
        </Link>
    </nav>
  )
}
