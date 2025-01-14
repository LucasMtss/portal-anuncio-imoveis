import Button from '@/components/common/Button'
import React from 'react'

export default function BusStep() {
  return (
    <div className='flex flex-1 flex-col px-[40px] py-[48px]'>
        <h3 className='text-black font-bold text-[34px] mb-6'>Imóveis com ponto de ônibus próximo</h3>
        <p className='text-grey-light text-base mb-14'>Busque imóveis que fiquem perto de pontos de ônibus.</p>
        <Button text='Buscar Imóveis' />
    </div>
  )
}
