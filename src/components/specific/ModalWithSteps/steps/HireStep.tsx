import Button from '@/components/common/Button'
import React from 'react'

export default function HireStep() {
  return (
    <div className='flex flex-1 flex-col px-[40px] py-[48px]'>
        <h3 className='text-black font-bold text-[34px] mb-6'>Alugue sem complicação</h3>
        <p className='text-grey-light text-base mb-8'>Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde omnis iste natus error sit.</p>
        <Button text='Ver Imóveis para Alugar' />
        <a className='text-grey-light hover:text-purple underline transition-custom mt-6 mb-4' href="/">Veja como Alugar sem Fiador</a>
        <a className='text-grey-light hover:text-purple underline transition-custom' href="/">Saiba como funciona o Aluguel na Netimóveis</a>
    </div>
  )
}
