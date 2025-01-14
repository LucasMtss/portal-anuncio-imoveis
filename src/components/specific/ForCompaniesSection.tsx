'use client';

import React from 'react';
import Button from '../common/Button';
import ForCompaniesBg from '@/../public/for-companies-bg.png';
import Image from 'next/image';

export default function ForCompaniesSection() {
  return (
    <div className='w-full py-[80px]'>
      <div 
        className='max-w-[1248px] h-[328px] mx-auto flex rounded-2xl'
      >
        <div className='bg-blue-dark flex flex-col py-10 pl-16 rounded-s-2xl'>
          <span className='border border-orange rounded-full px-4 py-1 text-sm text-white mb-4 w-fit'>Para Empresas</span>
          <h3 className='text-white text-[34px] font-bold mb-6'>Faça parte da Metimóveis</h3>
          <p className='text-grey-light text-xl'>É uma empresa ou rede de imobiliárias? Associe-se e alcance um próximo patamar de eficiência e tecnologia.</p>
          <div className='mt-10 gap-10 flex items-center'>
            <Button text='Mais Sobre se Associar' color='orange'/>
            <a href="/" className='underline text-white text-sm'>Conheça nossos Produtos</a>
          </div>
        </div>
        <Image src={ForCompaniesBg} alt='Para empresas' width={604} height={328} className='w-[604px] h-[328px] ml-[-1px] rounded-e-2xl'/>
        
      </div>
    </div>
  );
}
