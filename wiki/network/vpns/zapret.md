# zapret

---

<img src="/img/logo/zapret.png" style="float: right" width="130px">

**zapret** — автономный инструмент противодействия ограничениям [DPI](https://ru.wikipedia.org/wiki/Deep_packet_inspection). Не требует каких-либо сторонних серверов, работает локально на вашем устройстве, а значит, без потерь в скорости интернета и пинге. Более подробно можно узнать в [репозитории с исходным кодом и документацией от разработчика](https://github.com/bol-van/zapret).

## Перед использованием

Очень желательно перед использованием установить [безопасный DNS-сервер](/network/secure-dns)! По умолчанию, провайдер имеет возможность перехватывать DNS-запросы и перенаправлять их на свои серверы. Именно из-за этого отображается страница, где написано "Доступ к информационному ресурсу ограничен". Поэтому сначала нужно не дать провайдеру перехватывать DNS-запросы, а уже потом настраивать zapret. [Инструкция по установке безопасного DNS-сервера](/network/secure-dns).

## Windows

1.  Скачайте [архив со сборкой zapret](https://github.com/ImMALWARE/zapret-windows/releases/latest/download/zapret.zip).
2.  Распакуйте в любую папку, например, в `C:\zapret`.

*   **start\_now.cmd** — запустить в окне, блокировки будут обходиться, пока открыта командная строка.
*   **start\_stop\_service.cmd** — создать или удалить службу. При создании службы, zapret будет запущен без окна и будет автоматически запускаться при запуске Windows.
*   **autohosts.txt** — список доменов заблокированных сайтов. Обязательно должна быть пустая строка в конце файла.
*   **ipset.txt** — список доменов заблокированных IP-адресов и CIDR.
*   **check.cmd** — проверить доступ к сайтам из autohosts.txt.
*   **ignore.txt** — список доменов незаблокированных сайтов. Если не работает незаблокированный сайт, добавьте его домен сюда.
*   **config.txt** — конфиг winws. Вместо путей к файлам используйте `{переменные}`.

### Как использовать на Windows 7?

Чтобы zapret работал на Windows 7, необходимо отключить проверку подписи драйверов. Для этого [выполните команды в командной строке от имени администратора](/windows/run) и перезагрузите систему:

```bat
bcdedit.exe -set loadoptions DISABLE_INTEGRITY_CHECKS
bcdedit.exe -set TESTSIGNING ON
```

После перезагрузки, сборки zapret должны работать корректно.

### Альтернатива: сборка от Flowseal

1.  Перейдите на [страницу последнего релиза](https://github.com/Flowseal/zapret-discord-youtube/releases/latest), скачайте архив (неважно, zip или rar).
2.  Распакуйте в любую папку, например, в `C:\zapret`.
3.  Откройте папку `lists`, файл `list-general.txt` в Блокноте.
4.  Замените его содержимое на [мой список заблокированных сайтов](https://raw.githubusercontent.com/ImMALWARE/zapret-windows-build/refs/heads/master/autohosts.txt).
5.  Запустите нужный cmd-файл:
    *   **general.bat** — запустить в окне, блокировки будут обходиться, пока открыто это окно.
    *   **general (ALT с цифрами).bat** — запустить в окне с другой стратегией. В случае, если при открытии одного файла YouTube или Discord не работает - попробуйте открыть другой.
    *   **service\_install.cmd** — создать службу. Вас спросят, какой из файлов использовать как службу. zapret будет запущен без окна и с автозапуском.
    *   **service\_remove.bat** — удалить службу, остановить zapret.

## Linux

1.  Скачайте и распакуйте архив https://github.com/ImMALWARE/zapret-linux-easy/archive/refs/heads/main.zip (либо используйте `git` для клонирования)

    ```shell
    git clone https://github.com/ImMALWARE/zapret-linux-easy && cd zapret-linux-easy
    ```

2.  Убедитесь, что у вас установлены пакеты `curl`, `iptables` и `ipset` (для FWTYPE=iptables) или `curl` и `nftables` (для FWTYPE=nftables)! Если нет — установите. Если вы не знаете как, спросите у [ChatGPT](https://chatgpt.com)!
3.  Откройте терминал в папке, куда архив был распакован.
4.
    ```shell
    ./install.sh
    ```

### Управление

#### systemd

Остановка: `sudo systemctl stop zapret`

Запуск после остановки: `sudo systemctl start zapret`

Отключение автозапуска (по умолчанию включен): `sudo systemctl disable zapret`

Включение автозапуска: `sudo systemctl enable zapret`

#### OpenRC

Остановка: `sudo rc-service zapret stop`

Запуск после остановки: `sudo rc-service zapret start`

Включение автозапуска: `sudo rc-update add zapret`

Отключение автозапуска: `sudo rc-update del zapret`

#### Runit

Остановка: `sudo sv down zapret`

Запуск после остановки: `sudo sv up zapret`

Включение автозапуска: `sudo ln -s /etc/sv/zapret /var/service/`

Отключение автозапуска: `sudo rm /var/service/zapret`

### Списки доменов

Не работает какой-то заблокированный сайт? Попробуйте добавить его домен в `/opt/zapret/autohosts.txt`

Заблокированные IP-адреса и CIDR можно добавить в `/opt/zapret/ipset.txt`

Не работает незаблокированный сайт? Добавьте его домен в `/opt/zapret/ignore.txt`

Конфиг можно изменить в `/opt/zapret/config.txt` (перезапустите zapret после изменения)

Для проверки текущего конфига вы можете использовать `/opt/zapret/check.sh`

## Android (только с root!)

1.  Скачайте Magisk модуль тут: [https://github.com/ImMALWARE/zapret-magisk/releases/latest/download/zapret\_module.zip](https://github.com/ImMALWARE/zapret-magisk/releases/latest/download/zapret_module.zip)
2.  Установите модуль и перезагрузитесь как обычно. zapret будет запущен автоматически.

### Все способы управления

#### Кнопка Action

Кнопка Action в Magisk останавливает/запускает zapret.

#### Файлы

Список доменов заблокированных сайтов находится в `/data/adb/zapret/autohosts.txt`. Добавьте туда домен в случае, если нужный вам сайт не работает.

Заблокированные IP-адреса и CIDR можно добавить в `/opt/zapret/ipset.txt`.

Если незаблокированный сайт почему-то перестал открываться, добавьте его домен в `/data/adb/zapret/ignore.txt`.

Конфиг (стратегия) находится в `/data/adb/zapret/config.txt`.

#### KsuWebUI

Модуль имеет веб-интерфейс KsuWebUI. Скачайте одноименное приложение тут: [https://github.com/5ec1cff/KsuWebUIStandalone/releases/download/v1.0/KsuWebUI-1.0-34-release.apk](https://github.com/5ec1cff/KsuWebUIStandalone/releases/download/v1.0/KsuWebUI-1.0-34-release.apk)

При запуске разрешите ему root, выберите zapret.

На вкладке **Главная** можно останавливать/запускать zapret, включать/отключать автозапуск при загрузке Android.

На вкладке **Домены** можно добавлять/удалять домены, редактируя autohosts и ignore.

На вкладке **Конфиг** можно отредактировать конфиг.

На вкадке **IP-адреса** можно редактировать файл `ipset.txt`.

На вкладке **Проверка** скрипт проверит соединение ко всем доменам из `autohosts.txt` с текущей стратегией.

#### Команды

В Termux можно выполнять команды:
- запуск:
```shell
su -c zapret start
```
- остановка:
```shell
su -c zapret stop
```
- включить автозапуск
```shell
su -c zapret autostart-on
```
- отключить автозапуск
```shell
su -c zapret autostart-off
```

## Переменные в config.txt

*   `{hosts}` — подставит путь к `autohosts.txt`
*   `{ipset}` — подставит путь к `ipset.txt`
*   `{ignore}` — подставит путь к `ignore.txt`
*   `{youtube}` — подставит путь к `youtube.txt`
*   `{quicgoogle}` — подставит путь к `system\\quic\_initial\_www\_google\_com.bin`
*   `{tlsgoogle}` — подставит путь к `system\\tls\_clienthello\_www\_google\_com.bin`

## blockcheck — сложный, но лучший вариант
В этой статье для использования предлагаются готовые стратегии zapret. Это простое решение, которое может помочь большинству, но не абсолютно всем. Рекомендуется подбирать стратегии самостоятельно с помощью скрипта [blockcheck](/network/vpns/blockcheck). Подробная инструкция по использованию blockcheck находится [в этой статье](/network/vpns/blockcheck).

## Windows Defender видит вирусы?

В сборках выше нет вирусов! Совсем нет! Проверьте winws.exe и WinDivert64.sys на VirusTotal самостоятельно.

**WinDivert** — драйвер с [открытым исходным кодом](https://github.com/basil00/WinDivert) для перехвата, изменения и перенаправления сетевых пакетов в Windows. Он позволяет программам получать доступ к сетевому трафику на низком уровне, перехватывать его до того, как он попадёт в приложение или сеть, изменять содержимое и отправлять обратно. Именно с помощью него zapret работает, WinDivert определяется как угроза ошибочно.

### Отключение Windows Defender

1.  Откройте трей -> нажмите по значку Windows Defender.
    <img src="/img/network/vpns/zapret/1.jpeg" style="margin: 15px auto; display: block" width="150">
2.  Защита от вирусов и угроз (слева) -> Управление настройками.
    <img src="/img/network/vpns/zapret/2.png" style="margin: 15px auto; display: block">
3.  Отключите "Защиту в режиме реального времени". Она отключается не навсегда, а на некоторое время. Windows Defender не детектит ничего в zapret в распакованном виде.
    <img src="/img/network/vpns/zapret/3.png" style="margin: 15px auto; display: block">