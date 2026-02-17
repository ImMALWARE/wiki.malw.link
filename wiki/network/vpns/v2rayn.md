# v2rayN

<img src="/img/logo/v2rayn.png" style="float: right" width="200px">

**v2rayN** — это клиент для подключения к [VPN-серверам](/network/vpns/vpn) на протоколах [VMess, VLESS](https://ru.wikipedia.org/wiki/VLESS), [Shadowsocks](https://ru.wikipedia.org/wiki/Shadowsocks), [Trojan](https://wiki.archlinux.org/title/Trojan), [WireGuard](https://ru.wikipedia.org/wiki/WireGuard), [Hysteria2](https://deepwiki.com/apernet/hysteria). Приложение предоставляет удобный графический интерфейс для настройки и управления туннелями, поддерживает импорт конфигураций (в том числе [ссылки-подписки](/network/vpns/sublinks)). Приложение доступно для Windows, macOS, Linux.

## Скачать приложение

*   Windows: https://github.com/2dust/v2rayN/releases/download/7.16.6/v2rayN-windows-64.zip
*   macOS x64: https://github.com/2dust/v2rayN/releases/download/7.16.6/v2rayN-macos-64.zip
*   macOS ARM64: https://github.com/2dust/v2rayN/releases/download/7.16.6/v2rayN-macos-arm64.zip
*   Linux Debian/Ubuntu: https://github.com/2dust/v2rayN/releases/download/7.16.6/v2rayN-linux-64.zip
*   Linux ARM64: https://github.com/2dust/v2rayN/releases/download/7.16.6/v2rayN-linux-arm64.zip

## Рекомендуемая настройка v2rayN при запуске

1. Справа вверху три точки
2. Установите русский язык.
3. Перезапустите приложение закрытием в системном трее -> Exit. Запустите его снова.
4. На верхней панели "Настройки" -> Региональные пресеты -> Россия. Ожидайте обновления.
<img src="/img/network/vpns/v2rayn/region-1.jpg" style="margin: 15px auto; display: block">

5. Внизу, в настройках правил маршрутизации, должны появиться правила для России.
<img src="/img/network/vpns/v2rayn/region-2.jpg" style="margin: 15px auto; display: block">

6. Скопируйте вашу конфигурацию или ссылку-подписку.
7. На верхней панели "Серверы" -> "Импорт массива URL из буфера обмена" (Или Ctrl + V)
<img src="/img/network/vpns/v2rayn/import-sub.jpg" style="margin: 15px auto; display: block">

8. Если у вас несколько конфигураций, вы можете протестировать пинги до каждого сервера, нажав кнопку на верхней панели или (Ctrl + E)
<img src="/img/network/vpns/v2rayn/sub-test.jpg" style="margin: 15px auto; display: block">

9. Выберите сервер двойным нажатием. Включите "Режим VPN" внизу.
<img src="/img/network/vpns/v2rayn/vpn-mode.jpg" style="margin: 15px auto; display: block">