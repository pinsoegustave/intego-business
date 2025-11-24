import Image from 'next/image';
import React from 'react'


type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}


export default function Button({ type, title, icon, variant, full}: ButtonProps) {
  return (
    <button 
        className={`
            flexCenter 
            gap-3
            py-4 
            px-8 
            rounded-full 
            border 
            font-semibold
            text-base
            transition-all 
            duration-300 
            ease-in-out
            transform
            hover:scale-105
            active:scale-95
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            ${variant} 
            ${full ? 'w-full' : 'w-auto'}
        `} 
        type={type}
    >
        {icon && (
            <Image 
                src={icon} 
                alt="" 
                width={20} 
                height={20}
                className="object-contain"
            />
        )}
        <span className='whitespace-nowrap'>{title}</span>        
    </button>
  )
}
