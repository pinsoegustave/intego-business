import { FOOTER_LINKS, TERMS } from '@/constants';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'



export default function Footer() {
  return (
    <footer className='w-full max-w-full bg-[#034833] mt-24'>
        <div className="mt-4 rotate-[150] transform-3d">
            <Image 
                src="flip.svg"
                alt='rect'
                width={285}
                height={270}
                className='object-contain'
            />
        </div>
        <div className='max-container padding-container flex w-full flex-col text-white'>
            <div className='flex -mt-[12%]'>
                <div className='flex flex-col items-start justify-center -mt-[12%] gap-[4%] md:flex-col'>
                <Link href={"/"} className='-100'>
                    <h1 className='text-md font-bold'>INTEGO</h1>
                </Link>
                <p>We Help You Strike Your Target</p>
            </div>
            <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 ml-[25%] -mt-[4%]'>
                { FOOTER_LINKS.map((columns) => (
                    <FooterColumn title={columns.title} key={columns.title}>
                        <ul className='regular-14 flex flex-col gap-4 text-gray-30 '>
                            {columns.links.map((link) => (
                                <p key={link}>{link}</p>
                            ))}
                        </ul>
                    </FooterColumn>
                ))}
            </div>
            </div>
        </div>
        <div className='text-white my-4 border bg-[#FFFFFF]' />
            <div className='flex items-end justify-end mr-42 gap-8 text-white '>
                { TERMS.map((term) => (
                    <ul className='padding-container mt-4 mb-10' key={term}>{term}</ul>
                )) }
            </div>
    </footer>
  )
}


type FooterColumnProps = {
    title: string,
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className='flex flex-col gap-5'>
            <h3 className='font-bold text-md whitespace-nowrap'>{title}</h3>
            {children}
        </div>
    )
}