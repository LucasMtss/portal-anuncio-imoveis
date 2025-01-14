import React from 'react'
import Image from 'next/image'
import Logo from '@/../public/logo-footer.png'
import InstagramLogo from '@/../public/instagram-logo.png'
import FacebookLogo from '@/../public/facebook-logo.png'
import LinkedInLogo from '@/../public/linkedIn-logo.png'
import YouTubeLogo from '@/../public/youtube-logo.png'

export default function Footer() {
  return (
    <footer className='w-full h-[62px] bg-orange py-3'>
        <div className='max-w-[1280px] flex justify-between items-center mx-auto'>
            <Image src={Logo} alt='Logo' />
            <div className='flex flex-col text-white text-xs gap-2 items-center'>
                <p>© Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.</p>
                <div className='flex gap-6'>
                    <span>Polítcia de privacidade</span>
                    <span>Termos de uso</span>
                    <span>LGPD</span>
                    <span>Versão: 25/10/2021</span>
                </div>
            </div>
            <div className='flex gap-8 items-center'>
                <Image src={InstagramLogo} alt='Instagram' />
                <Image src={FacebookLogo} alt='Facebook' />
                <Image src={LinkedInLogo} alt='LinkedIn' />
                <Image src={YouTubeLogo} alt='YouTube' />
            </div>
        </div>
    </footer>
  )
}
