# Spicetify

<img src="/img/logo/spicetify.png" style="float: right" width="80px">

**Spicetify** — это [инструмент командной строки](https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81_%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8) для кастомизации настройки внешнего вида и поведения [Spotify](https://ru.wikipedia.org/wiki/Spotify) на Windows, Linux, macOS.

## Установка

### Windows​

#### Через PowerShell

[Выполните команду](/windows/run) в PowerShell. **Не от имени администратора!**

```powershell
iwr -useb https://raw.githubusercontent.com/spicetify/cli/main/install.ps1 | iex
```

Когда установщик предложит также установить Marketplace, нажмите `Y` и Enter.

#### Через [winget](/apps/winget)

```powershell
winget install Spicetify.Spicetify
```

### macOS и Linux​

#### Через терминал​

Выполните команду:

```shell
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh
```

Когда установщик предложит также установить Marketplace, нажмите `Y` и Enter.

### Через [Homebrew](/apps/homebrew) 

```shell
brew install spicetify-cli
```

### Через AUR​

```shell
yay -S spicetify-cli
```

## Для пользователей Linux после установки

### Если Spotify из AUR

Чтобы разрешить Spicetify изменять файлы Spotify, выполните команды:

```shell
sudo chmod a+wr /opt/spotify
sudo chmod a+wr /opt/spotify/Apps -R
spicetify backup apply
```

### Если Spotify из пакета spotify-launcher в Arch Linux

Нужно отредактировать файл `~/.config/spicetify/config-xpui.ini`, поставить параметру `spotify_path` значение `$HOME/.local/share/spotify-launcher/install/usr/share/spotify/`

### Если Spotify из Snap

Spotify из Snap нельзя редактировать. Удалите его и скачайте из apt, выдайте разрешения:

```shell
snap remove spotify
curl -sS https://download.spotify.com/debian/pubkey_C85668DF69375001.gpg | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update && sudo apt-get install spotify-client
sudo chmod a+wr /usr/share/spotify
sudo chmod a+wr /usr/share/spotify/Apps -R
```

::: warning Внимание
Путь к Spotify у вас может отличаться.
:::

### Если Spotify из Flatpak

Вам нужно найти путь к Spotify. В Manjaro и Fedora, путь такой:

```shell
/var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/
```

В других дистрибутивах может быть такой:

```shell
~/.local/share/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/
```

У вас он может быть другой. Когда вы найдёте путь, нужно отредактировать файл `~/.config/spicetify/config-xpui.ini`, поставить параметру `spotify_path` значение, которое соответствует пути к Spotify.

Выдайте разрешения к этому пути и к подпапке Apps (замените путь в команде):

```shell
sudo chmod a+wr /var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify
sudo chmod a+wr -R /var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/Apps
```

После этого нужно установить путь к файлу `prefs`.

Он может быть в этих местах:

*   `~/.config/spotify/prefs`
*   `~/.var/app/com.spotify.Client/config/spotify/prefs`

Найдите его, скопируйте абсолютный путь и установите через команду:

```shell
spicetify config prefs_path ~/.var/app/com.spotify.Client/config/spotify/prefs
```

## Для пользователей macOS после установки

Нужно отредактировать файл `~/.config/spicetify/config-xpui.ini`, поставить параметру `spotify_path` значение `/Applications/Spotify.app/Contents/Resources`.

## Marketplace

Если всё установлено правильно, в Spotify должен появиться значок Marketplace в верхнем левом углу. Заходите и устанавливайте нужные вам расширения и темы. Если же он не появился — возможно, Marketplace нужно установить дополнительно.

Команда Windows, нужно выполнять в PowerShell **не от имени администратора**.

```powershell
iwr -useb https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.ps1 | iex
```

Команда Linux и macOS:

```shell
curl -fsSL https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.sh | sh
```