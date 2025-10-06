import { generateSidebar } from 'vitepress-sidebar';
import { withPrefixToLinks } from '../../utils/sidebar-prefix'

export const rootLocaleConfig = {
    nav: [
        { text: 'Главная', link: '/' },
        { text: 'Статьи', link: '/docs/' },
        {
            text: 'О себе',
            items: [
                { text: 'GitHub', link: 'https://github.com/ImMALWARE/wiki.malw.link' },
                { text: 'Telegram', link: 'https://t.me/immalware' },
                { text: 'Sweetdogs', link: 'https://t.me/imsweetdogs' },
                { text: 'Лицензия', link: '/license' }
            ]
        }
    ],
    sidebar: withPrefixToLinks(
        generateSidebar({ 
            documentRootPath: 'wiki/docs',
            includeRootIndexFile: true,
            includeFolderIndexFile: true,
            useTitleFromFrontmatter: true,
            useTitleFromFileHeading: true,
            useFolderTitleFromIndexFile: true,
            useFolderLinkFromIndexFile: true
        }),
        '/docs'
    ),
}