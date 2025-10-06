import type { UserConfig } from 'vitepress'

export const mainConfig: UserConfig = {
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: true,
    sitemap: {
        hostname: 'https://wiki.malw.link'
    }
}

export const socialLinks = [
  { icon: 'github', link: 'https://github.com/ImMALWARE/wiki.malw.link' },
  { icon: 'discord', link: 'https://malw.link/discord' },
  { icon: 'telegram', link: 'https://t.me/immalware' }
]