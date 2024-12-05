import { create } from 'zustand';

type OpenState = {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
};

export const isOpenStore = create<OpenState>((set) => ({
  isOpen: false,
  setOpen: (state: boolean) =>
    set({
      isOpen: state,
    }),
}));
