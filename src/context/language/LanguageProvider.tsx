import {
    useEffect,
    useMemo,
    useState,
    type PropsWithChildren,
} from 'react';

import {
    LanguageContext,
    type Language,
} from './LanguageContext';

const STORAGE_KEY = 'portfolio-language';

function getInitialLanguage(): Language {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (savedLanguage === 'en' || savedLanguage === 'id') {
        return savedLanguage;
    }

    return 'en';
}

export function LanguageProvider({
    children,
}: PropsWithChildren) {
    const [language, setLanguage] = useState<Language>(
        getInitialLanguage,
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);

        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((currentLanguage) =>
            currentLanguage === 'en' ? 'id' : 'en',
        );
    };

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            toggleLanguage,
        }),
        [language],
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}