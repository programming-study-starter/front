import { create } from "zustand";

interface LanguageType {
  language: 'ko' | 'en',
  setLanguage: (language: 'ko' | 'en') => void,
}

const useLanguageStore = create<LanguageType>()(
  (set) => ({
    language: 'ko',
    setLanguage: (language: 'ko' | 'en') => {
      set((state) => ({
        language: language
      }));
    },
  })
);