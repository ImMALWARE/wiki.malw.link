# Hiddify

<img src="/img/logo/hiddify.png" style="float: right" width="200px">

**Hiddify** — это современный VPN/прокси-клиент на базе [sing-box](https://github.com/SagerNet/sing-box). Он поддерживает протоколы [VMess, VLESS](https://ru.wikipedia.org/wiki/VLESS), [Trojan](https://wiki.archlinux.org/title/Trojan), [Shadowsocks](https://ru.wikipedia.org/wiki/Shadowsocks), [Hysteria2](https://deepwiki.com/apernet/hysteria), а также различные транспорты: [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol), [gRPC](https://en.wikipedia.org/wiki/GRPC), [WebSocket](https://en.wikipedia.org/wiki/WebSocket).

Клиент предоставляет понятный графический интерфейс, умеет работать с несколькими профилями и [ссылками-подписками](/network/vpns/sublinks), а также предлагает гибкие сетевые режимы (включая выборочный прокси). Доступен для Windows, macOS, Linux, Android и iOS.

## Скачать приложение

* Windows: https://github.com/hiddify/hiddify-next/releases/download/v2.5.7/Hiddify-Windows-Setup-x64.exe
* macOS (10.15+): https://github.com/hiddify/hiddify-next/releases/download/v2.5.7/Hiddify-MacOS.dmg
* Linux Debian/Ubuntu: https://github.com/hiddify/hiddify-next/releases/download/v2.5.7/Hiddify-Debian-x64.deb
* Linux x64: https://github.com/hiddify/hiddify-next/releases/download/v2.5.7/Hiddify-Linux-x64.AppImage
* Android: https://github.com/hiddify/hiddify-next/releases/download/v2.5.7/Hiddify-Android-universal.apk
* iOS: https://apps.apple.com/us/app/hiddify-proxy-vpn/id6596777532

## Использование на Windows, Linux, macOS
Рекомендуется использовать именно режим **VPN**, а не [прокси](/network/vpns/proxy). В режиме VPN весь трафик системы идет через туннель, тогда как в режиме прокси (по умолчанию) — только трафик приложений, использующих системные настройки (обычно это только браузеры).

1. Полностью остановите Hiddify (через меню в системном трее).
2. Запустите приложение от имени администратора.
3. Откройте в боковом меню "Параметры конфигурации".
4. Пролистайте до раздела "Входящие параметры" и найдите пункт "Режим работы".
5. Выберите режим "VPN (Экспериментальный)" или "Tun".
<img src="/img/network/vpns/hiddify/vpn-mode.jpg" style="margin: 15px auto; display: block">