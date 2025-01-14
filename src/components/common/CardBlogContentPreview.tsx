import Image, { StaticImageData } from 'next/image';
import React from 'react'

import { FaRegClock } from "react-icons/fa";

export interface IBlogData {
    image: StaticImageData;
    title: string;
    tag: string;
    readingTime: number;
}

export interface ICardBlogContentPreviewProps {
    blogData: IBlogData;
}

export default function CardBlogContentPreview({ blogData }: ICardBlogContentPreviewProps) {
  return (
    <div className='flex flex-col w-[384px] rounded-2xl bg-white'>
        <Image src={blogData.image} alt='Blog Image' width={384} height={252} className='w-[384px] h-[252px] rounded-2xl mb-6'/>
        <div className='w-full flex items-center gap-4 mb-4'>
            <div className='flex items-center gap-1 text-grey-dark'>
                <FaRegClock size={16} />
                <span className='text-base'>{`${blogData.readingTime} Min de Leitura`}</span>
            </div>
            <span className='text-orange text-base'>{blogData.tag}</span>
        </div>
        <h4 className='text-black text-2xl w-full font-bold'>{blogData.title}</h4>
    </div>
  )
}
