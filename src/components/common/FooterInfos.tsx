import React from 'react'
import Image from 'next/image'
import AppStoreBg from '@/../public/app-store.png'
import PlayStoreBg from '@/../public/play-store.png'

export default function FooterInfos() {
  return (
    <div className='w-full bg-grey-extra-light py-12'>
        <div className='max-w-[1280px] flex gap-8 mx-auto'>
            <div className='flex flex-col text-grey-mid-dark text-base gap-3 w-[288px]'>
                <strong className='text-blue-mid font-bold mb-3'>A Netimóveis</strong>
                <span>Quem somos</span>
                <span>Como funciona</span>
                <span>Seja um parceiro</span>
                <span>Quero me associar</span>
                <span>Acessoria de imprensa</span>
                <span>Soluções corporativas</span>
                <span>Covide-19</span>
            </div>
            <div className='flex flex-col text-grey-mid-dark text-base gap-3 w-[288px]'>
                <strong className='text-blue-mid font-bold mb-3'>Recursos</strong>
                <span>Comprar</span>
                <span>Alugar</span>
                <span>Lançamentos</span>
                <span>Anunciar Imóvel</span>
                <span>Simular Financiamento</span>
                <span>Imobiliárias</span>
                <span>Blog</span>
            </div>
            <div className='flex flex-col text-grey-mid-dark text-base gap-3 w-[288px]'>
                <strong className='text-blue-mid font-bold mb-3'>Contato</strong>
                <span>Fale Conosco</span>
                <span>Perguntas Frequentes</span>
                <span>Suporte</span>
            </div>
            <div className='flex flex-col text-grey-mid-dark text-base gap-3 w-[288px]'>
                <strong className='text-blue-mid font-bold mb-3'>Nossos Aplicativos</strong>
                <span>Loc Fácil Netimóveis</span>
                <span>Pro Imob Netimóveis</span>
                <div className='flex gap-2'>
                    <Image src={AppStoreBg} alt='App Store' className='cursor-pointer'/>
                    <Image src={PlayStoreBg} alt='Play Store' className='cursor-pointer'/>
                </div>
            </div>
           
        </div>
    </div>
  )
}
