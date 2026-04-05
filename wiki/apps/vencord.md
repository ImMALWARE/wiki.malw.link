# Vencord и Vesktop

<img src="/img/logo/vencord.png" class="right" width="100px">

 **Vencord** — модификация для приложения и веб-версии [Discord](https://discord.com/) с также [открытым исходным кодом](https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5) доступным в [GitHub репозитории](https://github.com/Vendicated/Vencord), позволяющая устанавливать плагины и темы. Плагины могут дать возможность использовать некоторые платные функции Nitro бесплатно.

 **Vesktop** — альтернативное приложение Discord с встроенным Vencord с также [открытым исходным кодом](https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5) доступным в [GitHub репозитории](https://github.com/Vencord/Vesktop). Особенно популярно среди пользователей Linux, так как имеет значительные преимущества перед официальным Discord:

- Демонстрация экрана со звуком, с поддержкой Wayland
- Не требует обновлений каждый раз при запуске :D
- Более легковесное

## Установка Vencord

Перейдите на [страницу загрузки Vencord](https://vencord.dev/download/) и следуйте инструкциям на сайте.

Перед установкой Vencord нужно закрыть Discord из трея:
<img src="/img/apps/vencord/quit-discord.png" class="centered">

После установки Vencord или Vesktop соответствующий раздел должен появиться в настройках:
<img src="/img/apps/vencord/vencord-in-settings.png" class="centered">

В разделе **Plugins** можно найти и установить плагины. Чтобы плагин заработал, нужно перезапустить приложение (кнопка **Restart Client** в разделе Vencord).

## Рекомендуемые плагины

### FakeNitro

Демонстрация экрана в Nitro-качестве, Nitro-эмодзи, стикеры.

### FakeProfileThemes

Цвета профиля (будут видеть все пользователи плагина). Работает через невидимые символы в описании. Зайдите в настройки плагина, выберите нужные цвета, нажмите "Copy 3y3". Вставьте невидимые символы в конец поля «О себе». Все пользователи плагина будут видеть ваши цвета профиля.

### Decor

Рамки аватара. Настраивается в "Профилях". Видны всем пользователям плагина.
<img src="/img/apps/vencord/decor-change-button.png" class="centered">

### USRBG

Обложки профиля, видны всем пользователям плагина.
Чтобы установить свою обложку, нужно:

1. Присоединиться к серверу разработчиков [discord.gg/TeRQEPb](https://discord.com/invite/TeRQEPb)
2. В канале `#click-here-to-request` использовать команду `/bg`, чтобы отправить файл обложки
3. Дождаться, когда в канале `#userbg-log` появится уведомление о том, что ваша обложка одобрена

### BetterFolders

Альтернативное отображение папок серверов
<img src="/img/apps/vencord/better-folders.png" class="centered">

### CopyUserURLs

Добавляет опцию в контекстном меню пользователя для копирования ссылки на его профиль

### CallTimer

Секундомер времени нахождения в голосовом канале
<img src="/img/apps/vencord/call-timer.png" class="centered">

### FriendsSince

Показывает дату добавления в друзья пользователя
<img src="/img/apps/vencord/friends-since.png" class="centered">

### GameActivityToggle

Переключатель статуса активности в вашем профиле
<img src="/img/apps/vencord/game-activity-toggle.png" class="centered">

### LastFMRichPresence

Отображение статуса прослушивания из Last.fm (в настройках надо указать ник и токен)
<img src="/img/apps/vencord/lastfm-rich-presence.png" class="centered">

### MemberCount

Отображает количество участников серверов
<img src="/img/apps/vencord/member-count.png" class="centered">

### RelationshipNotifier

Отправляет уведомление, когда вас удалили из друзей/выгнали с сервера

### ServerInfo

Подробная информация о серверах
<img src="/img/apps/vencord/server-info-where.png" class="centered">
<img src="/img/apps/vencord/server-info-example.png" class="centered">

### SpotifyControls

Плеер Spotify
<img src="/img/apps/vencord/spotify-controls.png" class="centered">

### StreamerModeOnStream

Включает режим стримера при демонстрации экрана

## Темы

Найти темы можно здесь: [betterdiscord.app/themes](https://betterdiscord.app/themes)
Если в описании темы есть ссылка такого вида (как здесь для Vencord):
<img src="/img/apps/vencord/themes-1.png" class="centered">
То вставьте её в Настройки -> Themes -> Online Themes:
<img src="/img/apps/vencord/themes-2.png" class="centered">
Если же такой ссылки нет, скачайте CSS-файл и поместите его в папку для тем
<img src="/img/apps/vencord/themes-3.png" class="centered">
(Open Themes Folder).

## Vesktop

Перейдите на [страницу загрузки Vesktop](https://vesktop.dev/install/) и следуйте инструкциям на сайте.

### Flatpak (Linux)

Vesktop [доступен на Flathub](https://flathub.org/en/apps/dev.vencord.Vesktop).

Для установки через терминал выполните команду:

```bash
flatpak install flathub dev.vencord.Vesktop
```

---

Чтобы исправить работу Drag & Drop (перетаскивание файлов в чат), выполните команду:

```bash
flatpak override --filesystem=home:ro dev.vencord.Vesktop
```

---

Если требуется RPC (активность в статусе), версия Flatpak не рекомендуется.

Чтобы включить поддержку игр, использующих Game SDK, выполните команды ниже:

```bash
mkdir -p ~/.config/user-tmpfiles.d
echo 'L %t/discord-ipc-0 - - - - .flatpak/dev.vencord.Vesktop/xdg-run/discord-ipc-0' > ~/.config/user-tmpfiles.d/discord-rpc.conf
systemctl --user enable --now systemd-tmpfiles-setup.service

# Для системной установки Flatpak-приложения
sudo flatpak override --filesystem=xdg-run/.flatpak/dev.vencord.Vesktop:create --filesystem=xdg-run/discord-ipc-0

# Для пользовательской установки Flatpak-приложения
flatpak --user override --filesystem=xdg-run/.flatpak/dev.vencord.Vesktop:create --filesystem=xdg-run/discord-ipc-0
```