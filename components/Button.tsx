import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

// Define the icon map
const iconMap = {
  'arrow-right': ArrowRight,
  'phone': Phone,
  // Add more icons as needed
} as const;

type IconName = keyof typeof iconMap;


type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: IconName;
    variant: string;
    full?: boolean;
    disabled?: boolean;
}


export default function Button({ type, title, icon, variant, full, disabled = false }: ButtonProps) {
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
            ${!disabled ? 'hover:scale-105 active:scale-95' : 'opacity-70 cursor-not-allowed'}
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            ${variant === 'btn_outline_green' ? 'border-[#83CD20] text-[#83CD20] bg-white hover:bg-[#83CD20] hover:text-white focus:ring-[#83CD20]/50 transition-colors duration-300' : 
              variant === 'btn_green' ? 'border-[#034833] bg-[#034833] text-white hover:bg-[#023025] hover:border-[#023025] focus:ring-[#034833]/50 shadow-md' : 
              variant} 
            ${full ? 'w-full' : 'w-auto'}
        `} 
        type={type}
        disabled={disabled}
    >
        {icon && (
            <div className="w-5 h-5 flex items-center justify-center">
                {React.createElement(iconMap[icon], { size: 20 })}
            </div>
        )}
        <span className='whitespace-nowrap'>{title}</span>        
    </button>
  )
}
