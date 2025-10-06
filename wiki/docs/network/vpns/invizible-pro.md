# InviZible Pro

<img src="/img/logo/invizible-pro.png" style="float: right" width="150px">

**InviZible Pro** — клиент [Tor](https://ru.wikipedia.org/wiki/Tor), [I2P](https://ru.wikipedia.org/wiki/I2P) и [DNSCrypt](https://ru.wikipedia.org/wiki/DNSCrypt) для Android с открытым исходным кодом. Приложение известно тем, что одним из первых внесло изменения в протокол WebTunnel, схоже с [Tor Portable](/network/vpns/tor-portable). Оно поставляет мосты WebTunnel в готовом виде, не требуя их поиска от своего пользователя, поэтому очень легко в настройке.

[GitHub репозиторий](https://github.com/Gedsh/InviZible).

## Использование

1.  Скачайте [последнюю версию InviZible Pro](https://github.com/Gedsh/InviZible/releases/latest) с GitHub и установите её. В Play Маркете находится устаревшая версия.
2.  Зайдите в быстрые настройки и активируйте пункт «Подделать SNI».
    <img src="/img/network/vpns/invizible-pro/1.png" style="margin: 15px auto; display: block" width="auto">
3.  Внутри быстрых настроек зайдите в мосты, выберите пункт «Использовать список мостов по умолчанию» и укажите в нём webtunnel. Активируйте все мосты, что предложит приложение.
    <img src="/img/network/vpns/invizible-pro/2.png" style="margin: 15px auto; display: block" width="auto">
4.  Вернитесь обратно и запустите Tor.
5.  Если качество подключения вас не устроило, то вернитесь в мосты и удалите нерабочий. Вам будут выданы значения пинга до мостов. Зелёный пинг — хорошо, красный пинг или отсутствие пинга — плохо, такие мосты стоит удалить. Также нерабочий мост даёт ошибки в логах в разделе TOR. Если вам нужны самые лучшие из возможных мостов, то на июль 2025 стабильно и быстро работали эти пять:
    ```text
    Bridge webtunnel [2001:db8:75db:c6f2:1dae:121:7a04:9e9d]:443 4B673DF159CFC12AC91FC2E6AC3047FF2183FCEA url=http://freifunk.ckgc.de/xBKEzZunnc3A5pcf6jaeVyPL ver=0.0.1

    Bridge webtunnel [2001:db8:8d16:cb5b:d7f5:504b:8768:bdd3]:443 570FEB15763CC623146E8433ACA751948A6756D4 url=https://pl.808.re/SDglNGoixITem7ZHxQKXSscK ver=0.0.2

    Bridge webtunnel [2001:db8:cc50:fa:264f:d1b8:79a:6a81]:443 38C7ADB125A7AEA7A668C5AE300F6DCEA6BFB340 url=https://surf.mysticboarding.cz/S2vNtMmDc72E3uSmAroQaUyj ver=0.0.1

    Bridge webtunnel [2001:db8:77cb:5ce6:9995:7466:7ffa:b3f8]:443 770EA6412C8D3997ABFFF7173A3E53F1D3660167 url=https://shallotfarm.org/jcHgyp7m90iQr9QaVSprq1wP ver=0.0.1

    Bridge webtunnel [2001:db8:44:614b:42f5:f87c:7072:151]:443 F0C55D7B465C94F71A9A8F0479073BC02565DA36 url=https://quantentoast.de/CDgakmo0QO5Rvo2jRCtu4n9D ver=0.0.1
    ```
    Их можно добавить через «Использовать свой список мостов — webtunnel — добавить мосты». Добавлять их необходимо по одному.