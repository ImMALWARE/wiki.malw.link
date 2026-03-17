# ReVanced

<img src="/img/logo/revanced.png" class="right" width="200px">

**ReVanced** — это проект сообщества, нацеленный на создание модифицированных версий популярных Android-приложений. Наиболее известен своими модами для YouTube, но также поддерживает другие приложения, такие как YouTube Music, Reddit, Twitter (X), Spotify, IG, Duolingo, Google Фото, Photomath, SoundCloud, TikTok, Tumblr и другие.

ReVanced позиционируется как идейный преемник закрытого проекта **[YouTube Vanced](https://ru.wikipedia.org/wiki/YouTube_Vanced)**, продолжая традицию добавления недоступных в официальных версиях функций, таких как блокировка рекламы, фоновое воспроизведение и улучшенные параметры конфиденциальности.

## ReVanced Extended

Позднее в рамках сообщества появился форк проекта под названием **ReVanced Extended** (RVX), поддерживаемый независимым разработчиком под псевдонимом *inotia00*. Эта версия включает в себя дополнительные, экспериментальные и более гибкие патчи, не входящие в основной проект.

Самыми популярными модификациями стали сборки для **YouTube** и **YouTube Music**. Благодаря большому количеству функций, именно для этих приложений рекомендуется использовать версию **ReVanced Extended**, так как она предоставляет значительно более широкий функционал по сравнению с оригинальной сборкой ReVanced.

Проще всего получать информацию о сборках RVX и ReVanced в Telegram-канале [RV𝕏 Lite](https://t.me/rvx_lite).

## Актуальные сборки RVX для YouTube и YouTube Music

Magisk-модули для устройств с [root](/android/root):

*   **YouTube RVX** (v19.44.39): [https://github.com/selfmusing/RVX-Lite-Modules/releases/download/2025-02-25/black\_afn\_blue.zip](https://github.com/selfmusing/RVX-Lite-Modules/releases/download/2025-02-25/black_afn_blue.zip)
*   **YouTube RVX** (Для старых версий Android 6+, v17.34.36): [https://t.me/rvx\_lite\_repo/4313](https://t.me/rvx_lite_repo/4313)
*   **YouTube Music RVX** (v8.14.54): [https://github.com/selfmusing/RVX-Lite-Modules/releases/download/2025-06-05/ARM64.AFN.BLUE.RVX.YTM.v8.14.54.zip](https://github.com/selfmusing/RVX-Lite-Modules/releases/download/2025-06-05/ARM64.AFN.BLUE.RVX.YTM.v8.14.54.zip)
*   **YouTube Music RVX** (Для старых версий Android 5+, v6.20.51): [https://t.me/rvx\_lite\_repo/4255](https://t.me/rvx_lite_repo/4255)

APK для устройств без root:

::: warning Внимание
Для использования сборок без root необходимо дополнительно установить приложение [ReVanced GMS Core](https://github.com/ReVanced/GmsCore/releases/latest)! Оно нужно для авторизации в аккаунт Google в приложениях. Войти в аккаунт нужно будет в нём отдельно, даже если аккаунт Google уже добавлен на устройство.
:::

*   **YouTube RVX** (v19.44.39): [Скачать с archive.org](https://archive.org/download/revanced_extended_armv7_afn_blue_black_19.44.39_202508/ARM7_AFN-BLUE_black_v19.44.39.zip) (перезалито с ужасного файлообменника devuploads)
*   **YouTube RVX** (Для старых Android 6+, v17.34.36): [https://t.me/rvx\_lite\_repo/4308](https://t.me/rvx_lite_repo/4308)
*   **YouTube Music RVX** (v8.02.53): [https://t.me/rvx\_lite\_repo/4284](https://t.me/rvx_lite_repo/4284)
*   **YouTube Music RVX** (Для старых Android 5+, v6.20.51): [https://t.me/rvx\_lite\_repo/4253](https://t.me/rvx_lite_repo/4253)

## Основные возможности YouTube RVX

*   Блокировка всей рекламы, включая встроенную, баннерную и спонсорскую.
*   Воспроизведение в фоне и при выключенном экране.
*   Интеграция со [SponsorBlock](https://youtube.fandom.com/wiki/SponsorBlock) для пропуска интро, заставок и рекламных сегментов видео.
*   Отключение ненужных кнопок и вкладок на выбор.
*   Настройки качества по умолчанию.
*   Детальные настройки поведения приложения прямо в интерфейсе.

## ReVanced Manager

**ReVanced Manager** — это приложение с графическим интерфейсом, разработанное для упрощения процесса установки и обновления модифицированных APK. Оно поддерживает работу с патчами, APK-файлами.

### Принцип работы

1.  Пользователь загружает официальный APK-файл нужного приложения с сайта APKMirror или другого источника.
2.  В ReVanced Manager выбирается этот APK и нужные патчи.
3.  Программа применяет выбранные патчи и собирает модифицированный APK.
4.  После завершения сборки пользователь устанавливает готовое модифицированное приложение.

Менеджер облегчает весь процесс модификации и обновления приложений, делая его доступным даже для пользователей без технического опыта.

Скачать ReVanced Manager можно здесь: [https://revanced.app/download](https://revanced.app/download)

## ReVanced Xposed

**ReVanced Xposed** — это модуль для фреймворка [Xposed/LSPosed](/android/xposed), который позволяет применять патчи **ReVanced** к приложениям «на лету», без необходимости перепаковывать APK.

Для работы требуется **root** и установленный **Xposed** или **LSPosed**.

Поддерживаемые приложения: YouTube, YouTube Music, Spotify, Google Photos и другие приложения, для которых доступны патчи.

Скачайте и установить модуль: [https://github.com/chsbuffer/ReVancedXposed/releases](https://github.com/chsbuffer/ReVancedXposed/releases), активируйте его в приложении **Xposed** или **LSPosed**.