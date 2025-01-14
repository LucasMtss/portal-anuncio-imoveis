import Button from '@/components/common/Button'
import React from 'react'

export default function AdvertiseStep() {
  return (
    <div className='flex flex-1 flex-col px-[40px] py-[48px]'>
        <h3 className='text-black font-bold text-[34px] mb-6'>Anuncie seu Imóvel</h3>
        <p className='text-grey-light text-base mb-14'>Anuncie gratuitamente na maior rede de imobiliárias do Brasil.</p>
        <Button text='Ver Imóveis para Comprar' />
        <strong className='text-base font-bold text-black mt-6'>Descubra Quanto Cobrar</strong>
    </div>
  )
}
