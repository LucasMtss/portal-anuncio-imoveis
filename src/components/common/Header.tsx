import Image from 'next/image';
import React from 'react';
import Logo from '@/../public/logo.png';

export default function Header() {
  return (
    <div
      className="w-full h-[78px] flex py-[18px] bg-white pl-[97px] pr-[336px] items-center justify-between shadow-lg z-50"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <Image src={Logo} alt="Logo" />
      <div className="flex gap-[40px] text-grey-light text-xs">
        <span className="cursor-pointer hover:text-orange">Imobiliárias</span>
        <span className="cursor-pointer hover:text-orange">Quero me associar</span>
        <span className="cursor-pointer hover:text-orange">Sobre</span>
        <span className="cursor-pointer hover:text-orange">Blog</span>
      </div>

      <div className="flex items-center gap-[32px]">
        <button className="w-[141px] text-purple text-xs px-4 py-1 border border-purple rounded-full hover:bg-purple hover:text-white transition-custom">
          Anunciar imóvel
        </button>
        <button className="text-xs text-grey-light hover:text-orange">
          Entrar
        </button>
      </div>
    </div>
  );
}
