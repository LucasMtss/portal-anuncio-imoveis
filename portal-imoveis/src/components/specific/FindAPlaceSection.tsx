import React from 'react'
import ModalWithSteps from './ModalWithSteps'
import BuyStep from './ModalWithSteps/steps/BuyStep';
import HireStep from './ModalWithSteps/steps/HireStep';
import AdvertiseStep from './ModalWithSteps/steps/AdvertiseStep';
import { FaKey, FaDollarSign } from "react-icons/fa";
import { FaHouseCircleCheck } from "react-icons/fa6";

const steps = [
    { key: 'hire', label: 'Alugar Imóvel', icon: <FaKey size={18}/>, component: <HireStep /> },
    { key: 'buy', label: 'Comprar Imóvel', icon: <FaDollarSign size={18}/>, component: <BuyStep /> },
    { key: 'advertise', label: 'Anunciar Imóvel', icon: <FaHouseCircleCheck size={18}/>, component: <AdvertiseStep /> },
  ];
  

export default function FindAPlaceSection() {
  return (
    <div className='w-full py-[80px] bg-[linear-gradient(243.67deg,#EDF1F4_26.22%,#FFFFFF_73.56%)]'>
        <div className='max-w-[1248px] mx-auto flex px-4 justify-between'>
            <div className='flex flex-col gap-12 w-[550px]'>
                <h2 className='text-[60px] text-black font-bold'>Encontre um lugar que é a sua cara</h2>
                <p className='text-grey-light text-[20px] '>A Netimóveis te oferece uma experiência ágil e segura na hora de comprar ou alugar seu imóvel. Seja de maneira digital ou física, fazemos a diferença neste momento tão importante que é decidir um lar.</p>
            </div>
            <ModalWithSteps data-testId='modal-with-steps' steps={steps}/>
        </div>
    </div>
  )
}
