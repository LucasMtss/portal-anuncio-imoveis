'use client';

import React, { useState } from 'react'

type SectionsType = 'PROPERTY_TYPES' | 'POPULAR_FOR_SALE' | 'POPULAR_FOR_HIRE';

export default function SectionLinks() {
    const [selectedSection, setSelectedSection] = useState<SectionsType>('PROPERTY_TYPES');
    return (
        <div className='w-full bg-white py-12'>
            <div className='max-w-[1280px] mx-auto flex flex-col'>
                <div className='w-full border-b border-border-bg mb-8 h-[37px]'>
                    <span onClick={() => setSelectedSection('PROPERTY_TYPES')} className={`px-4 py-[14px] font-semibold text-sm cursor-pointer ${selectedSection === 'PROPERTY_TYPES' ? 'border-b-[3px] border-orange text-orange' : 'text-grey-light'}` }>Tipos de propriedades</span>
                    <span onClick={() => setSelectedSection('POPULAR_FOR_SALE')} className={`px-4 py-[14px] font-semibold text-sm cursor-pointer ${selectedSection === 'POPULAR_FOR_SALE' ? 'border-b-[3px] border-orange text-orange' : 'text-grey-light'}` }>Populares para venda</span>
                    <span onClick={() => setSelectedSection('POPULAR_FOR_HIRE')} className={`px-4 py-[14px] font-semibold text-sm cursor-pointer ${selectedSection === 'POPULAR_FOR_HIRE' ? 'border-b-[3px] border-orange text-orange' : 'text-grey-light'}` }>Populares para locação</span>
                </div>
                <div className='flex mx-auto gap-8 w-full'>
                    <div className='flex flex-col text-grey-mid-dark text-base gap-3 w-[288px]'>
                        <strong className='font-bold mb-3'>Alugar</strong>
                        <span>Apartamentos</span>
                        <span>Casas</span>
                        <span>Terrenos</span>
                        <span>Lojas</span>
                    </div>
                    <div className='flex flex-col text-grey-mid-dark text-base gap-3 w-[288px]'>
                        <strong className='font-bold mb-3'>Comprar</strong>
                        <span>Casas à venda</span>
                        <span>Imóv. em Comdomínios</span>
                        <span>Comprar terrenos</span>
                        <span>Lançamentos</span>
                    </div>
                    <div className='flex flex-col text-grey-mid-dark text-base gap-3 w-[288px]'>
                        <strong className='font-bold mb-3'>Comercial</strong>
                        <span>Fale Conosco</span>
                        <span>Perguntas Frequentes</span>
                        <span>Suporte</span>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
