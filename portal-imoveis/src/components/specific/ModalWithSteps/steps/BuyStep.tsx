import Button from '@/components/common/Button'
import React from 'react'

export default function BuyStep() {
  return (
    <div className='flex flex-1 flex-col px-[40px] py-[48px]'>
        <h3 className='text-black font-bold text-[34px] mb-6'>Compre com Segurança</h3>
        <p className='text-grey-light text-base mb-8'>Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde omnis iste natus error sit.</p>
        <Button text='Ver Imóveis para Comprar' />
        <a className='text-grey-light hover:text-purple underline transition-custom mt-6 mb-4' href="/" >Simule seu Financiamento</a>
        <a className='text-grey-light hover:text-purple underline transition-custom' href="/" >Saiba como funciona a Compra na Netimóveis</a>
    </div>
  )
}
