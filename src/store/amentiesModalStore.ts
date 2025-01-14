import { create } from "zustand";

interface AmentiesModalState {
  selectedStep: string;
  setSelectedStep: (step: string) => void;
}

export const useAmentiesModalStore = create<AmentiesModalState>((set) => ({
  selectedStep: '',
  setSelectedStep: (step: string) =>
    set(() => ({
      selectedStep: step,
    })),
}));