'use client';

import React, { useEffect, useState } from 'react';
import ModalWithSteps from './ModalWithSteps';
import SunStep from './ModalWithSteps/steps/SunStep';
import PetStep from './ModalWithSteps/steps/PetStep';
import BalconyStep from './ModalWithSteps/steps/BalconyStep';
import BusStep from './ModalWithSteps/steps/BusStep';
import YardStep from './ModalWithSteps/steps/YardStep';
import GoodInternetStep from './ModalWithSteps/steps/GoodInternetStep';
import { FaSun, FaBus, FaCircle } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

import BalconyBg from '@/../public/balcony-bg.png';
import BusBg from '@/../public/bus-bg.png';
import GoodInternetBg from '@/../public/good-internet-bg.png';
import PetBg from '@/../public/pet-bg.png';
import SunBg from '@/../public/sun-bg.png';
import YardBg from '@/../public/yard-bg.png';
import { useAmentiesModalStore } from '@/store/amentiesModalStore';

const steps = [
  { key: 'sun', bg: SunBg, label: 'Pega Sol', icon: <FaSun size={18} />, component: <SunStep /> },
  { key: 'pet', bg: PetBg, label: 'Aceita Pet', icon: <MdOutlinePets size={18} />, component: <PetStep /> },
  { key: 'balcony', bg: BalconyBg, label: 'Tem Varanda', icon: <FaCircle size={18} />, component: <BalconyStep /> },
  { key: 'bus', bg: BusBg, label: 'Ônibus Perto', icon: <FaBus size={18} />, component: <BusStep /> },
  { key: 'yard', bg: YardBg, label: 'Tem Quintal', icon: <FaCircle size={18} />, component: <YardStep /> },
  { key: 'internet', bg: GoodInternetBg, label: 'Com Boa Internet', icon: <FaCircle size={18} />, component: <GoodInternetStep /> },
];

export default function AmentiesSection() {
  const selectedStep = useAmentiesModalStore((state) => state.selectedStep);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full py-[80px]" />;
  }

  const step = steps.find((step) => step.key === selectedStep);
  const bgImage = step?.bg?.src || SunBg.src;

  return (
    <div
    data-testid='amenties-section'
      className="w-full py-[80px] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1248px] mx-auto flex px-4 justify-between">
        <ModalWithSteps data-testid='modal-with-steps' steps={steps} />
      </div>
    </div>
  );
}
