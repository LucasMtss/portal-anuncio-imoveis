'use-client';

import React, { ReactNode, useState } from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";


type CarouselProps = {
    children: ReactNode[];
  };
  

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(children?.length / itemsPerPage);

    const handleNext = () => {
        if(currentPage === totalPages - 1) return;
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrev = () => {
        if(currentPage === 0) return;
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    return (
        <div className="overflow-hidden w-full relative">
            <div className="flex justify-end gap-3 mb-8">
                <div
                    onClick={handlePrev}
                    aria-label="prev"
                    role='button'
                    className={`w-[40px] h-[40px] rounded-full flex items-center justify-center border border-border-bg text-black ${currentPage === 0 ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
                    >
                        <MdOutlineKeyboardArrowLeft size={24} />
                </div>
                <div
                    onClick={handleNext}
                    aria-label="next"
                    role='button'
                    className={`w-[40px] h-[40px] rounded-full flex items-center justify-center border border-border-bg text-black ${currentPage === totalPages - 1 ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
                    >
                        <MdOutlineKeyboardArrowRight size={24} />
                </div>
        </div>
        <div
            className="flex transition-transform duration-500 ease"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
             {React.Children.map(children, (child, index) => (
                <div
                    key={index}
                    className="mx-3"
                    style={{ flex: `0 0 ${100 / itemsPerPage}%`, maxWidth: `${100 / itemsPerPage}%` }}
                >
                    {child}
                </div>
            ))}
        </div>
        <div>

        </div>
        </div>
    );
};

export default Carousel;
