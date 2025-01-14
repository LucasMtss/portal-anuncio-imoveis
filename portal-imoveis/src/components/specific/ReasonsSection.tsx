'use client';

import React from 'react';
import ReasonsBg from '@/../public/reasons-bg.png';
import Image from 'next/image';

import { FaCircle } from "react-icons/fa";

export default function ReasonsSection() {
    return (
        <div className='w-full py-[80px] h-[513px]'>
            <div className='max-w-[1920px] mx-auto flex'>
                <Image src={ReasonsBg.src} alt='Reasons' className='w-[924px] h-[513px]' width={924} height={513}/>
                <div className='py-14 px-24 pb-0 flex flex-col w-[996px] bg-[linear-gradient(243.67deg,#EDF1F4_26.22%,#FFFFFF_73.56%)]'>
                    <h4 className='font-bold text-grey-mid-light mb-[40px] ml-[40px] text-2xl'>Aqui vai uma frase de efeito</h4>

                    <div className='flex items-center gap-6 text-grey-mid-light mb-4'>
                        <FaCircle size={24} />
                        <strong className='text-grey text-base font-bold'>Motivo para negociar com a Netimóveis</strong>
                    </div>
                    <p className='mb-12 text-grey text-sm ml-12 max-w-[450px]'>
                        Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                    </p>
                    <div className='flex items-center gap-6 text-grey-mid-light mb-4'>
                        <FaCircle size={24} />
                        <strong className='text-grey text-base font-bold'>Motivo para negociar com a Netimóveis</strong>
                    </div>
                    <p className='mb-12 text-grey text-sm ml-12 max-w-[450px]'>
                        Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                    </p>
                    <div className='flex items-center gap-6 text-grey-mid-light mb-4'>
                        <FaCircle size={24} />
                        <strong className='text-grey text-base font-bold'>Motivo para negociar com a Netimóveis</strong>
                    </div>
                    <p className='text-grey text-sm ml-12 max-w-[450px]'>
                        Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                    </p>
                </div>
            </div>
        </div>
    );
}
