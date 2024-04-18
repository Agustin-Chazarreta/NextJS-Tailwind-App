
import React, { ReactNode } from 'react';
import { lato } from '@/app/fonts';


interface CustomTextProps {
  children: ReactNode;
  className: string;
}
export const Button: React.FC<CustomTextProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <button className={`bg-black w-40 h-14 rounded-lg text-center text-white font-bold text-sm flex justify-center items-center ${lato.className} max-lg:w-full`}>
        {children}
      </button>
    </div>
  )
}


