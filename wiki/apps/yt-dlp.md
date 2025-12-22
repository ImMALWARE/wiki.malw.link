# yt-dlp

<img src="/img/logo/yt-dlp.png" style="float: right" width="200">

**yt-dlp** — это многофункциональный [инструмент командной строки](https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81_%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8) для загрузки аудио и видео с поддержкой [тысяч сайтов](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md) (YouTube, Twitch, TikTok, SoundCloud и т.д.). Является [форком](https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D0%BA) [youtube-dl](https://github.com/ytdl-org/youtube-dl), созданным после того, как основной проект перестал активно развиваться.

## Установка

### Windows

#### winget

Самый простой способ — установка через пакетный менеджер [winget](/apps/winget). В Windows 10 и Windows 11 он установлен по умолчанию. Для этого нужно [открыть командную строку и выполнить команду](/windows/run):

```bat
winget install yt-dlp --source winget
```

> Если будет ошибка о том, что "winget не является командой", следуйте [инструкции по установке winget](/apps/winget).

#### scoop

Если у вас установлен [Scoop](/apps/scoop), то yt-dlp можно установить с его помощью. Для этого нужно выполнить команду:

```bat
scoop install yt-dlp
```

#### pip

Если у вас установлен [Python](https://ru.wikipedia.org/wiki/Python), то yt-dlp можно установить с помощью [пакетного менеджера pip](https://ru.wikipedia.org/wiki/Pip_(%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80_%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%D0%BE%D0%B2)). Для этого нужно выполнить команду:

```bat
pip install -U yt-dlp
```

> Флаг `-U` (или `--upgrade`) обновит yt-dlp, если он уже установлен.

### macOS

В macOS можно установить его следующим образом с помощью [Homebrew](/apps/homebrew):

```shell
brew install yt-dlp
```

### Linux

yt-dlp есть в [apt](https://ru.wikipedia.org/wiki/Advanced_Packaging_Tool), [pacman](https://wiki.archlinux.org/title/Pacman_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9)), [AUR](https://wiki.archlinux.org/title/Arch_User_Repository_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9)) (`yt-dlp-git`), [snap](https://ru.wikipedia.org/wiki/Snappy_(%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%D0%B0%D0%BC%D0%B8)), [apk](https://wiki.alpinelinux.org/wiki/Alpine_Package_Keeper).

### Android

yt-dlp доступен в виде приложения [YTDLnis](/apps/ytdlnis).

## Использование

Самый простой способ использования — через выполнение команды прямо в проводнике:

1.  Откройте папку в проводнике, в которую скачается видео.
2.  Нажмите на адресную строку проводника.
3.  Введите команду для скачивания: `yt-dlp`, пробел, ссылка на видео. Например:
    ```shell
    yt-dlp https://www.youtube.com/watch?v=bLZHcnuqscU
    ```
    <img src="/img/apps/yt-dlp/1.png" style="margin: 15px auto; display: block">
> Ссылок на видео может быть сколько угодно, они пишутся через пробел. Например:
> ```shell
> yt-dlp https://www.youtube.com/watch?v=wUXKADf4lxE https://www.tiktok.com/@anonim_us_228/video/7441478571656318209 https://soundcloud.com/jrgz/never-gonna-catch-the-thug-theme-goblin-mashup
> ```
4.  Нажмите Enter.

Начнётся скачивание видео в наилучшем качестве. Таким же образом можно ввести ссылку на плейлист (он скачает все видео из плейлиста) или на канал (скачает все видео с канала).

Если вы собираетесь постоянно использовать yt-dlp из терминала и хотите, чтобы видео всегда загружались в указанную вами папку, пропишите путь в конфигурационном файле:

1.  Перейдите в папку [%appdata%](/windows/appdata).
2.  Создайте папку с именем `yt-dlp`.
    <img src="/img/apps/yt-dlp/2.png" style="margin: 15px auto; display: block">
3.  Создайте в ней новый текстовый документ с названием `config.txt` (кстати, рекомендуется включить [отображение расширений файлов](/windows/file-ext)).
4.  В текстовый документ нужно написать аргумент `-P`, пробел и полный путь к нужной папке. Пример:
    ```shell
    -P "C:\Users\User\Desktop\videos"
    ```
5.  Сохраните текстовый документ. Готово! Теперь все видео (в том числе скачанные через выполнение команды в адресной строке проводника) будут скачиваться в указанную папку.

## Самые нужные аргументы

| Команда                                                                                                                              | Описание                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `yt-dlp -x --audio-format mp3 https://www.youtube.com/watch?v=bLZHcnuqscU`                                                             | Скачать только аудио (`-x`) в формате mp3.                                                                                                                                                                                                                                      |
| `yt-dlp -f "bestaudio[height<=720]+bestvideo[height<=720]" --merge-output-format mp4 https://www.youtube.com/watch?v=bLZHcnuqscU`      | Скачивает видео в качестве (`-f`) 720p в формате (`--merge-output-format`) mp4.                                                                                                                                                                                                  |
| `yt-dlp -x --audio-format mp3 --embed-thumbnail --embed-metadata https://www.youtube.com/watch?v=bLZHcnuqscU`                           | Скачать только аудио (`-x`) в формате mp3, при этом вытащить обложку (`--embed-thumbnail`) и [метаданные](https://ru.wikipedia.org/wiki/ID3_(%D0%BC%D0%B5%D1%82%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5)) (`--embed-metadata`) видео и записать их в файл mp3. |
| `yt-dlp --proxy socks5://login:password@127.0.0.1:1080 https://www.youtube.com/watch?v=bLZHcnuqscU`                                    | Скачать видео, используя [прокси](https://ru.wikipedia.org/wiki/Прокси-сервер) [socks5](https://ru.wikipedia.org/wiki/SOCKS) (также можно использовать http, https, socks4) с логином и паролем.                                                                                       |
| `yt-dlp --cookies-from chrome https://vk.com/video685728764_456239017`                                                                 | Скачать видео с сайта, на котором обязательно нужен вход в аккаунт (например, файлообменник, Boosty) путём установки файлов Cookie, которые будут взяты из браузера Chrome. Вы должны войти в аккаунт в этом браузере. Вместо chrome может быть brave, chromium, edge, firefox, opera, safari, vivaldi, whale. |
| `yt-dlp -o "%(uploader)s - %(title)s.%(ext)s" https://www.youtube.com/watch?v=neSoWGHSQJI`                                             | Скачать видео с названием (`-o`) в формате "Название канала - Название видео.формат".<br> `%(uploader)s` - название канала<br> `%(title)s` - название видео<br> `%(ext)s` - расширение файла (mp4, webm, m4a)                                                                  |
| `yt-dlp --download-sections "*00:01:00-00:02:00" neSoWGHSQJI`                                                                         | Скачать видео с YouTube, у которого ID = neSoWGHSQJI и обрезать его с 1:00 по 2:00.<br>ID видео находится в ссылке от `?v=` до `&` (`&` может не быть):<br> `https://www.youtube.com/watch?v=`**`neSoWGHSQJI`**`&pp=ygUMbWlzaWRlIHNvbmcgoAcB`                               |