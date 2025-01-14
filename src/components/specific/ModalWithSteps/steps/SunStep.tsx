import Button from '@/components/common/Button'
import React from 'react'

export default function SunStep() {
  return (
    <div className='flex flex-1 flex-col px-[40px] py-[48px]'>
        <h3 className='text-black font-bold text-[34px] mb-6'>Sol que ilumina as suas manhãs</h3>
        <p className='text-grey-light text-base mb-14'>{'Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia  ;)'}</p>
        <Button text='Buscar' />
    </div>
  )
}
