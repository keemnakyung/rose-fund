import { create } from "zustand";

interface MailSend {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

export const useMailSend = create<MailSend>((set) => ({
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
}));