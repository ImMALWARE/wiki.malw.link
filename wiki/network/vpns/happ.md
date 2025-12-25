# Happ

<img src="/img/logo/happ.png" style="float: right; margin-left: 15px;" width="200px">

**Happ** — это кроссплатформенный клиент для подключения к [VPN-серверам](/network/vpns/vpn). Поддерживает протоколы [VMess, VLESS](https://ru.wikipedia.org/wiki/VLESS), [Shadowsocks](https://ru.wikipedia.org/wiki/Shadowsocks), [Trojan](https://wiki.archlinux.org/title/Trojan) и [WireGuard](https://ru.wikipedia.org/wiki/WireGuard).

Клиент предлагает удобный графический интерфейс, поддерживает импорт конфигураций (в том числе через [ссылки-подписки](/network/vpns/sublinks)) и доступен на всех популярных платформах, включая **Android TV** и **Apple TV**.

## Скачать приложение

* Windows: https://github.com/Happ-proxy/happ-desktop/releases/latest/download/setup-Happ.x64.exe
* macOS (App Store): https://apps.apple.com/us/app/happ-proxy-utility/id6504287215
* macOS (DMG): https://github.com/Happ-proxy/happ-desktop/releases/latest/download/Happ.macOS.universal.dmg
* Linux (Debian/Ubuntu): https://github.com/Happ-proxy/happ-desktop/releases/latest/download/Happ.linux.x64.deb
* iOS: https://apps.apple.com/ru/app/happ-proxy-utility-plus/id6746188973
* Android (Google Play): https://play.google.com/store/apps/details?id=com.happproxy
* Android (APK): https://github.com/Happ-proxy/happ-android/releases/latest/download/Happ.apk
* Apple TV: https://apps.apple.com/us/app/happ-proxy-utility-for-tv/id6748297274

## Рекомендуемая настройка Happ при запуске

1. **Добавление сервера:** При первом запуске приложение предложит добавить подписку. Если вы пропустили этот шаг, нажмите кнопку «+» в левом верхнем углу.
2. **Режим работы:** Выберите подходящий режим:
    * **Proxy** — локальный прокси (работает только в браузерах или настроенных приложениях).
    * **TUN** — режим VPN (весь трафик устройства заворачивается в туннель). **Рекомендуется.**