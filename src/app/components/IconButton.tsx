'use client'
import React, { useState, useRef, ReactNode, ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ children, text, color, ...props }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const ref = useRef<HTMLSpanElement>(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)} 
      className={`flex p-2 items-center rounded-lg text-white ${color || "bg-black"}`} 
      {...props}
    >
      {children}
      <div 
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className='overflow-x-hidden transition-all duration-300 ease-out'
      >
        <span ref={ref} className='px-1.5'>{text}</span>
      </div>
    </button>
  )
}

export default IconButton
