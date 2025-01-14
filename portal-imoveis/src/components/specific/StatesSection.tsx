'use client';

import React from 'react';

import Image from 'next/image';

import Carousel from '../common/Carousel';
import MGBg from '@/../public/states/MG.png';
import BaBg from '@/../public/states/BA.png';
import CEBg from '@/../public/states/CE.png';
import DFBg from '@/../public/states/DF.png';
import ESBg from '@/../public/states/ES.png';
import PBBg from '@/../public/states/PB.png';
import RJBg from '@/../public/states/RJ.png';
import RSBg from '@/../public/states/RS.png';
import SCBg from '@/../public/states/SC.png';
import SPBg from '@/../public/states/SP.png';

const states = [
    {
      state: 'Minas Gerais',
      image: MGBg.src,
    },
    {
      state: 'São Paulo',
      image: SPBg.src,
    },
    {
      state: 'Rio Grande do Sul',
      image: RSBg.src,
    },
    {
      state: 'Rio de Janeiro',
      image: RJBg.src,
    },
    {
      state: 'Bahia',
      image: BaBg.src,
    },
    {
      state: 'Ceará',
      image: CEBg.src,
    },
    {
      state: 'Bahia',
      image: BaBg.src,
    },
    {
      state: 'Distrito Federal',
      image: DFBg.src,
    },
    {
      state: 'Espírito Santo',
      image: ESBg.src,
    },
    {
      state: 'Paraíba',
      image: PBBg.src,
    },
    {
      state: 'Santa Catarina',
      image: SCBg.src,
    },
   
  ];

export default function StatesSection() {
  return (
    <div className='w-full py-[80px]'>
      <div 
        className='max-w-[1248px] mx-auto flex flex-col'
      >
        <h2 className=' text-black text-[34px] font-bold'>
          Prontos para te Receber em mais de 10 estados
        </h2>
        <Carousel>
            {
                states.map((state, index) => (
                    <div className='flex flex-col w-[320px]' key={index}>
                        <Image src={state.image} alt={state.state} className='rounded-2xl w-full' width={320} height={192}/>
                        <h3 className='mt-[-40px] font-bold text-2xl pl-3 text-white'>{state.state}</h3>
                        <ul className='mt-[40px] list-disc marker:text-orange pl-7'>
                            <li className='text-grey-light text-sm mb-2'>Casas à venda em {state.state}</li>
                            <li className='text-grey-light text-sm mb-2'>Apto. à venda em {state.state}</li>
                            <li className='text-grey-light text-sm mb-2'>Casas para locação  em {state.state}</li>
                            <li className='text-grey-light text-sm'>Apto. para locação em {state.state}</li>
                        </ul>
                        
                    </div>
                ))
            }
        </Carousel>
      </div>
    </div>
  );
}
