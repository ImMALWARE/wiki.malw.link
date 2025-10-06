import type { DefaultTheme } from 'vitepress'
import { searchLocalesConfig } from './locales/search'

export const myThemeConfig: DefaultTheme.Config = {
    logo: '/favicon.ico',

    editLink: {
        pattern: 'https://github.com/ImMALWARE/wiki.malw.link/edit/main/wiki/:path',
        text: 'Редактировать страницу на GitHub'
    },
    search: {
        provider: 'local',
        options: {
            locales: {
                ...searchLocalesConfig,
            }
        }
    },

    footer: {
        message: ' <a href="/license">MIT License</a>',
        copyright: `2025 MALWARE`
      },
}