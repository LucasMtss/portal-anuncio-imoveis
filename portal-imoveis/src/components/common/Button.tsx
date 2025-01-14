import React from 'react'

interface IButtonProps {
    text: string;
    color?: string;
    action?: () => void;
}

export default function Button({ text, action, color='purple' }: IButtonProps) {
  return (
    <button onClick={action} className={`w-fit px-4 py-3 h-[48px] rounded-[10px] bg-white border border-${color} text-${color} text-base hover:bg-${color} hover:text-white transition-custom`}>{text}</button>
  )
}
