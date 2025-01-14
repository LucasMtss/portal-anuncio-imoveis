'use client';

import React from 'react';
import Button from '../common/Button';
import PortugalBg from '@/../public/portugal.png';

export default function PortugalSection() {
  return (
    <div className='w-full py-[80px]'>
      <div 
        style={{
          backgroundImage: `linear-gradient(265.89deg, rgba(0, 0, 0, 0) 6.17%, #000000 150%), url(${PortugalBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='max-w-[1248px] h-[160px] mx-auto flex justify-between px-16 py-10 rounded-2xl portugal-section-gradient items-center'
      >
        <h2 className='w-[450px] text-white text-[34px] font-bold'>
          Encontre a oportunidade Perfeita em Portugal
        </h2>
        <Button text='Ver Imóveis em Portugal' color='orange' />
      </div>
    </div>
  );
}
