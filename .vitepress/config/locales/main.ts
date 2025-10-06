import { rootLocaleConfig } from "./locale/ru/main"

export const localesConfig = {
    root: {
        label: 'Русский',
        lang: 'ru',
        title: 'Malw.link Wiki',
        description: '(>⩊<)',
        themeConfig: {
            ...rootLocaleConfig
        }
    },
    en: {
        label: 'English',
        lang: 'en',
        link: '/i/en/',
        title: 'Malw.link Wiki',
        description: '(>⩊<)'
    }
}