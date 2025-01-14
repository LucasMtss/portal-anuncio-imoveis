'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Carousel from '../common/Carousel';
import { FakeClient } from '@/client/fakeClient';
import { IProperty } from '@/interfaces/property';
import PropertyImageBg from '@/../public/property-card-bg.png';

import { MdIosShare, MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function CarouselSection() {
    const [properties, setProperties] = useState<IProperty[]>([]);
    const client = new FakeClient();

    async function fetchProperties() {
        try {
            const response = await client.getProperties();
            setProperties(response);
            console.log(response)
        } catch (error) {
            console.error('Error fetching properties', error);
        }
    }

    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <div className='w-full py-[80px]'>
            <div className='max-w-[1248px] mx-auto flex flex-col px-4'>
                <div className='flex items-center text-2xl font-bold text-black mb-3'>Novos anúncios em <span className='text-orange ml-2'>Belo Horizonte</span> <MdOutlineKeyboardArrowDown className='text-orange' size={24} /></div>
                <div className='flex items-center gap-2 text-link-color cursor-pointer'>
                    <p className='text-base'>Ver todos os imóveis</p>
                    <MdIosShare />
                </div>
        
                <Carousel>
                    {
                        properties.map((property, index) => (
                            <div className='flex flex-col w-[320px] rounded-2xl border border-border-bg cursor-pointer' key={index}>
                                <Image src={PropertyImageBg.src} alt={property.Title} className='rounded-t-2xl w-full' width={320} height={192}/>
                                <div className='flex flex-1 flex-col p-4'>
                                    <strong className='font-bold text-base text-black mb-1 truncate'>{property.Title}</strong>
                                    <span className='text-sm text-grey-light mb-3'>{property.City}</span>
                                    <span className='text-sm text-black-light mb-3'>{property.Rooms} Quartos</span>
                                    <div className='flex gap-2 overflow-x-scroll no-scrollbar mb-3'>
                                        {
                                            property.Tags.map((tag, indexTag) => (
                                                <span key={indexTag} className='rounded-full bg-tag-bg px-[6px] py-[2px] text-black text-xs'>{tag}</span>
                                            ))
                                        }
                                    </div>
                                    <h4 className='text-orange text-xl font-bold'>{property.Price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
