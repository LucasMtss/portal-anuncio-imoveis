'use client';

import { useAmentiesModalStore } from '@/store/amentiesModalStore';
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export type StepType = {
  key: string;
  label: string;
  icon: ReactNode;
  component: ReactNode;
};

type ModalWithStepsProps = {
  steps: StepType[];
};

export default function ModalWithSteps({ steps }: ModalWithStepsProps) {
  const [activeStep, setActiveStep] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const setSelectedStep = useAmentiesModalStore(state => state.setSelectedStep);
  const selectedStep = useAmentiesModalStore(state => state.selectedStep);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setActiveStep(steps[0]?.key || '');
    }
  }, [isMounted, steps]);

  if (!isMounted) {
    return null;
  }

  const activeComponent = steps.find((step) => step.key === activeStep)?.component;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -170*3, behavior: 'smooth' });
      const currentActiveStepIndex = steps.findIndex((step) => step.key === activeStep);
      handleSelectedStep(steps[currentActiveStepIndex - 3]?.key || steps[0].key);
      setShowLeftScroll(false);
      setShowRightScroll(true);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 170*3, behavior: 'smooth' });
      const currentActiveStepIndex = steps.findIndex((step) => step.key === activeStep);
      handleSelectedStep(steps[currentActiveStepIndex + 3]?.key || steps[steps.length - 1].key);
      setShowLeftScroll(true);
      setShowRightScroll(false);
    }
  };

  function handleSelectedStep(step: string) {
    setSelectedStep(step);
    setActiveStep(step);
  };

  return (
    <div className="w-[513px] h-[471px] rounded-2xl bg-white flex flex-col">
      <div className="relative w-full h-[92px] border-b border-border-bg pt-3">
        {(steps.length > 3 && showLeftScroll) && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            <IoIosArrowBack size={24} onClick={scrollLeft} data-testid="arrow-forward"/>
          </div>
        )}

        <div
          ref={scrollContainerRef}
          className="flex items-center justify-start gap-4 h-fit overflow-x-auto scroll-smooth no-scrollbar"
          style={{ width: '100%', maxWidth: '513px' }}
        >
          {steps.map((step) => (
            <div
              key={step.key}
              onClick={() => handleSelectedStep(step.key)}
              className={
                'flex flex-col justify-between items-center gap-[6px] w-[160px] h-[79px] flex-shrink-0 cursor-pointer ' +
                (activeStep === step.key ? 'border-b-[3px] border-orange text-black' : 'text-grey-light')
              }
            >
              <div>{step.icon}</div>
              <span className="font-bold text-center pb-3 text-sm max-w-[65px] h-[52px] align-baseline">{step.label}</span>
            </div>
          ))}
        </div>

        {(steps.length > 3 && showRightScroll) && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            <IoIosArrowForward size={24} onClick={scrollRight} data-testid='arrow-back'/>
          </div>
        )}
      </div>

      <div className="flex-1">{activeComponent}</div>
    </div>
  );
}
