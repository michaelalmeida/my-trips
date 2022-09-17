export type ITranslation = Record<'en' | 'pt_BR', { [key: string]: string }>;

export const translation: ITranslation = {
    en: {
        back: '⬅ Back',
        switchLanguage: 'Trocar para Português',
    },
    pt_BR: {
        back: '⬅ Voltar',
        switchLanguage: 'Switch to English',
    },
};
