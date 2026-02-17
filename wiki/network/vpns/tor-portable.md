# Tor Portable

**Tor Portable** — приложение для ПК, которое запускает [локальный прокси-сервер](/network/vpns/local-proxy) к сети [Tor](https://ru.wikipedia.org/wiki/Tor).

Репозиторий на GitHub: https://github.com/Verity-Freedom/Tor-Portable.

## Установка

Скачайте архив здесь: [https://ipfs.io/ipns/k51qzi5uqu5dldod6robuflgitvj276br0xye3adipm3kc0bh17hfiv1e0hnp4](https://ipfs.io/ipns/k51qzi5uqu5dldod6robuflgitvj276br0xye3adipm3kc0bh17hfiv1e0hnp4) (на Windows 8 и выше лучше скачать архив AntiDetect).

Распакуйте его в папку, по пути к которой нет специальных символов (например, `C:\Tor`).

Запустите `service-manager.cmd` для запуска основной службы Tor. Служба будет автоматически запускаться при включении ПК. Служба запустит [локальный прокси-сервер](/network/vpns/local-proxy) SOCKS5 на `localhost:9050`.

## Использование в браузере

Установите расширение Zero Omega.

*   **Chrome:** [https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped](https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped)
*   **Firefox:** [https://github.com/zero-peak/ZeroOmega/releases/download/3.4.1/zeroomega-3.4.1.xpi](https://github.com/zero-peak/ZeroOmega/releases/download/3.4.1/zeroomega-3.4.1.xpi)

Сразу после установки должна открыться страница настроек Zero Omega. Нажмите "Skip guide".

Для импорта настроек от Tor Portable, перейдите на вкладку **"Import/Export"**, найдите текстовое поле **"Options file URL"** и вставьте ссылку на конфигурацию, затем нажмите **Restore**.
<img src="/img/network/vpns/tor-portable/omega-1.png" style="margin: 15px auto; display: block">

```text
https://ipfs.io/ipns/k51qzi5uqu5dldod6robuflgitvj276br0xye3adipm3kc0bh17hfiv1e0hnp4/ZeroOmegaOptions-RU.bak
```

Далее зайдите на вкладку **"Interface"**, отключите **Quick Switch** и примените настройки кнопкой **Apply Changes** слева внизу.
<img src="/img/network/vpns/tor-portable/omega-2.png" style="margin: 15px auto; display: block">
<img src="/img/network/vpns/tor-portable/omega-3.png" style="margin: 15px auto; display: block">

Нажмите по значку Zero Omega в списке расширений и перейдите в режим **AUTO**.
<img src="/img/network/vpns/tor-portable/omega-4.png" style="margin: 15px auto; display: block">

> Если такое меню не появилось при нажатии на Zero Omega, значит, вы не отключили "Quick Switch" или не применили настройку кнопкой "Apply Changes".

После этого заблокированные сайты должны работать. Если какой-то сайт всё ещё не работает, добавьте его в список AUTO.

## Добавление сайта в список AUTO в Zero Omega

Откройте настройки Zero Omega. Нажмите по значку Zero Omega в списке расширений, выберите **Options**:
<img src="/img/network/vpns/tor-portable/omega-5.png" style="margin: 15px auto; display: block">

Перейдите на вкладку "AUTO", прокрутите список в самый низ.
<img src="/img/network/vpns/tor-portable/omega-6.png" style="margin: 15px auto; display: block">

Нажмите **"Add Condition"**. В текстовом поле введите доменное имя сайта по аналогии с уже добавленными сайтами. Для применения нажмите **"Apply Changes"** слева внизу.
<img src="/img/network/vpns/tor-portable/omega-7.png" style="margin: 15px auto; display: block">

После этого нужный сайт должен работать корректно.

## Использование в Discord

::: warning Внимание
Перед выполнением этих действий полностью завершите приложение Discord. Убедитесь, что в трее нет его значка. Если есть, нажмите по нему правой кнопкой -> Quit Discord.
:::

Чтобы установить параметры прокси-сервера в Discord, в папке с Tor Portable перейдите в папку `discord-drover` и запустите `drover.exe`.

Нужные параметры уже заполнены, просто нажмите **Install**. После этого можно запускать приложение Discord, параметры прокси уже должны быть применены.