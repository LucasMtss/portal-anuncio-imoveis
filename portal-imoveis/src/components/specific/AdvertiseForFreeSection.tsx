'use client';

import Image from 'next/image';
import React from 'react'
import Button from '../common/Button';

import AdvertiseForFreeBg from '@/../public/advertiseForFree.png';
import { FaArrowRightLong } from "react-icons/fa6";

export default function AdvertiseForFreeSection() {
   

  return (
    <div className='w-full py-[80px]'>
        <div className='max-w-[1248px] mx-auto flex flex-col px-4'>
            <div className='w-[1248px] rounded-2xl flex h-[420] border border-border-bg'>
                <Image src={AdvertiseForFreeBg} alt='Property' width={822} height={420} className='rounded-s-2xl w-[822px]' />
                <div className='flex px-12 py-10 flex-col w-[416px]'>
                    <strong className='font-bold text-orange text-base mb-4'>Quer Vender ou Alugar?</strong>
                    <h3 className='font-bold text-[34px] text-black mb-[84px]'>Anuncie grátis para mais de 100 mil pessoas todos os dias.</h3>
                    <Button text='Anunciar Imóvel' />
                    <div className='flex items-center gap-2 mt-6 cursor-pointer'>
                        <strong className='text-black'>Saiba quanto vale seu imóvel </strong>
                        <FaArrowRightLong data-testid='arrow right long'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
