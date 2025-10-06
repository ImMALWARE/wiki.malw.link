import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Malw.link Wiki",
  description: "(>⩊<)",
  lang: 'ru',
  theme: './theme',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://wiki.malw.link'
  },
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
    }
  },
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-KMJENJYYPP' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KMJENJYYPP');`
    ],
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  themeConfig: {
    logo: '/img/main_cat.png',
    siteTitle: 'Malw.link Wiki',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    lastUpdated: {
      text: 'Последнее обновление'
    },
    darkModeSwitchLabel: 'Тема',
    outlineTitle: 'На этой странице',
    notFound: {
      title: 'Страница не найдена',
      quote: 'Вы перешли по неверной или устаревшей ссылке',
      linkText: 'Вернуться на главную'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Показать детали',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов',
                footer: {
                  selectText: 'Выбрать',
                  selectKeyAriaLabel: 'Выбрать',
                  navigateText: 'Навигация',
                  navigateUpKeyAriaLabel: 'Стрелка вверх',
                  navigateDownKeyAriaLabel: 'Стрелка вниз',
                  closeText: 'Закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
    }
  },
    editLink: {
          pattern: 'https://github.com/ImMALWARE/wiki.malw.link/edit/main/wiki/:path',
          text: 'Редактировать страницу на GitHub'
        },
    sidebar: [
      {
        text: 'Программы на ПК',
        items: [
          { text: 'AutoTotal', link: '/apps/autototal' },
          { text: 'MalwTool', link: '/apps/malwtool' },
          { text: 'Rufus', link: '/apps/rufus' },
          { text: 'Spicetify', link: '/apps/spicetify' },
          { text: 'Vencord и Vesktop', link: '/apps/vencord' },
          { text: 'Ventoy', link: '/apps/ventoy' },
          { text: 'winget', link: '/apps/winget' },
          { text: 'Wireshark', link: '/apps/wireshark' },
          { text: 'yt-dlp', link: '/apps/yt-dlp' }
        ]
      },
      {
        text: 'Программы на Android',
        items: [
          { text: 'PCAPdroid', link: '/apps/pcapdroid' },
          { text: 'ReVanced', link: '/apps/revanced' },
          { text: 'SmartTube', link: '/apps/smarttube' }
        ]
      },
      {
        text: 'Сервисы',
        items: [
          { text: 'IPFS', link: '/services/ipfs' }
        ]
      },
      {
        text: 'Про сеть',
        items: [
          { text: 'Безопасный DNS-сервер', link: '/network/secure-dns' },
          { text: 'Отслеживание списка доменов, к которым обращаются приложения', link: '/network/get-domains' },
          { text: 'Ускорение устаревших серверов (недоступно в России)', link: '/network/vpns' }
        ]
      },
      {
        text: 'Windows',
        items: [
          { text: 'Выполнение команды в Windows', link: '/windows/run' },
          { text: 'Отображение расширений файлов в Windows', link: '/windows/file-ext' },
          { text: 'Очистка диска в Windows', link: '/windows/cleanmgr' },
          { text: 'Приложение Get Help в Windows', link: '/windows/get-help' },
          { text: 'Переустановка Windows без флешки', link: '/windows/install-without-usb' },
          { text: 'HWID', link: '/windows/hwid' },
          { text: 'Windows Subsystem for Android', link: '/windows/wsa' }
        ]
      },
      {
        text: 'Android',
        items: [
          { text: 'Удаление системных приложений без root', link: '/android/uninstall-apps' }
        ]
      },
      {
        'text': 'Другое',
        'items': [
          { text: 'Активация всех расширений в Google Chrome', link: '/other/chrome-ext' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ImMALWARE/wiki.malw.link' },
      { icon: 'discord', link: 'https://malw.link/discord' },
      { icon: 'telegram', link: 'https://t.me/immalware' }
    ]
  }
})
