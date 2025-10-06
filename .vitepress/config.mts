import { defineConfig } from 'vitepress'
import { mainConfig, socialLinks } from './config/main'
import { localesConfig } from './config/locales/main'
import { myThemeConfig } from './config/theme'

export default defineConfig({
    ...mainConfig,
    srcDir: 'wiki',
    locales: localesConfig,
    themeConfig: {
        ...myThemeConfig,
        socialLinks: socialLinks
    }
})