
import React, { ReactNode }  from 'react';
import { lato } from '@/app/fonts';


interface CustomTextProps {
  children: ReactNode;
}
export const Button: React.FC<CustomTextProps> = ({children}) => {
  return (
    <div >
        <button className={`bg-black w-40 h-14 rounded-lg text-center text-white font-bold text-sm flex justify-center items-center ${lato.className}`}>
            {children}
        </button>
    </div>
  )
}


