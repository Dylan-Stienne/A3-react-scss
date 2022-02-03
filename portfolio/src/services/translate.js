import React, { createContext, useContext, useState } from 'react';
import fr from '../i18n/fr.json';


const dictionaryList = { fr };

const defaultLanguage = 'fr';

export const languagesList = {
    'fr': 'Français'
};

export const TranslatorContext = createContext({
    currentLanguage: defaultLanguage,
    dictionary: dictionaryList[defaultLanguage]

});

// Manage the Translator système
export function TranslatorProvider({ children }) {
    const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

    const provider = {
        currentLanguage,
        dictionary: dictionaryList[currentLanguage],
        changeCurrentLanguage: selected => {
            const newLanguage = languagesList[selected] ? selected : defaultLanguage
            setCurrentLanguage(newLanguage);
            window.localStorage.setItem('rcml-lang', newLanguage);
        }
    };

    return (
        <TranslatorContext.Provider value={provider}>
            {children}
        </TranslatorContext.Provider>
    );
};

// Component to display test translated
export default function Translator({ tid }) {
    const translatorContext = useContext(TranslatorContext);
    try {
        let dic = translatorContext.dictionary;
        let parts = tid.split('.')
        parts.forEach(part => {
            dic = dic[part]
        });
        return dic || tid
    } catch {
        return tid
    }
};

