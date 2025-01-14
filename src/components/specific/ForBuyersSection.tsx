'use client';

import React, { useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import CardBlogContentPreview, { IBlogData, ICardBlogContentPreviewProps } from '../common/CardBlogContentPreview';
import { FakeClient } from '@/client/fakeClient';


export default function ForBuyersSection() {
  const [blogData, setBlogData] = React.useState<IBlogData[]>([]);
  const client = new FakeClient();

  async function fetchBlogData() {
    try {
      const response = await client.getBlogPosts();
      setBlogData(response);
    } catch (error) {
      console.error('Error fetching blog data', error);
    }
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className='w-full py-[80px] mt-[104px] h-fit'>
      <div 
        className='max-w-[1248px] mx-auto flex flex-col'
      >
        <div className='flex items-center justify-between'>
            <h2 className='text-black text-[34px] font-bold'>Para compradores, vendedores ou curiosos  :)</h2>
            <div className='flex items-center gap-1 w-fit'>
                <strong className='text-black text-base font-bold'>Ver mais no Blog</strong>
                <FaArrowRightLong />
            </div>
        </div>
        <div className='w-full flex gap-12 mt-12'>
            {
                blogData.map((blog, index) => (
                    <CardBlogContentPreview key={index} blogData={blog} />
                ))
            }
        </div>
      </div>
    </div>
  );
}
