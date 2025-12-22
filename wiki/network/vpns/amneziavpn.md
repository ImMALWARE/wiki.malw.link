# AmneziaVPN

<img src="/img/logo/amneziavpn.png" style="float: right" width="200px">

**AmneziaVPN** — приложение для подключения к любым [VPN-серверам](/network/vpns/vpn-service) на протоколах [OpenVPN](https://ru.wikipedia.org/wiki/OpenVPN), [Shadowsocks](https://ru.wikipedia.org/wiki/Shadowsocks), OpenVPN over [Cloak](https://github.com/cbeuw/Cloak), [WireGuard](https://ru.wikipedia.org/wiki/WireGuard), [IKEv2](https://ru.wikipedia.org/wiki/IKE), [AmneziaWG](/network/vpns/amneziawg), XRay (VLESS, VMESS, Trojan). Приложение доступно для Windows, macOS, Linux, Android, iOS.

## Скачать приложение

*   Windows: https://github.com/amnezia-vpn/amnezia-client/releases/download/4.8.9.2/AmneziaVPN_4.8.9.2_windows_x64.exe
*   macOS версии от 10.15 до 12: https://github.com/amnezia-vpn/amnezia-client/releases/download/4.8.9.2/AmneziaVPN_4.8.9.2_macos_old.zip
*   macOS 12 и выше: https://github.com/amnezia-vpn/amnezia-client/releases/download/4.8.9.2/AmneziaVPN_4.8.9.2_macos.zip
*   Linux: https://github.com/amnezia-vpn/amnezia-client/releases/download/4.8.9.2/AmneziaVPN_4.8.9.2_linux_x64.tar.zip
*   Android 7: https://github.com/amnezia-vpn/amnezia-client/releases/download/4.8.9.2/AmneziaVPN_4.8.9.2_android_7_armeabi-v7a.apk
*   Android 8 и выше: https://github.com/amnezia-vpn/amnezia-client/releases/download/4.8.9.2/AmneziaVPN_4.8.9.2_android8+_armeabi-v7a.apk
*   Android 8 и выше (архитектура arm64): https://github.com/amnezia-vpn/amnezia-client/releases/download/4.8.9.2/AmneziaVPN_4.8.9.2_android8+_arm64-v8a.apk
*   iOS: https://apps.apple.com/ru/app/defaultvpn/id6744725017 (разработчики дали iOS-версии другое название)

## Установка VPN на свой сервер

Приложение также позволяет создать VPN на вашем [удалённом сервере](https://ru.wikipedia.org/wiki/VPS) автоматически, если имеется доступ по [SSH](https://ru.wikipedia.org/wiki/SSH). Для этого при добавлении соединения выберите пункт "Self-hosted VPN", введите данные для подключения от SSH и следуйте инструкциям от приложения.

## Раздельное туннелирование

Раздельное туннелирование — это механизм, который позволяет направлять только часть интернет-трафика через VPN, а остальной — напрямую, минуя VPN (одно приложение пропускать через VPN, другое напрямую; одни сайты пропускать через VPN, другие нет).

Если вы используете WireGuard или AmneziaWG (например, для WARP): строка `AllowedIPs` в конфиге должна иметь значение `0.0.0.0/0, ::/0`.

Перейдите во вкладку Настройки (вторая) -> Соединение -> Раздельное туннелирование сайтов -> **Раздельное туннелирование сайтов** или **Раздельное туннелирование приложений**. Добавьте туда сайты/приложения/пути к exe-файлам.