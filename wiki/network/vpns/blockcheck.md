# blockcheck

---

<img src="/img/logo/zapret.png" style="float: right" width="130px">

**blockcheck** — скрипт-анализатор способов обхода [DPI](https://ru.wikipedia.org/wiki/Deep_packet_inspection). Используется для автоматизированного подбора стратегий для [zapret](/network/vpns/zapret) в текущей сети по заданным параметрам. Входит в состав оригинального [репозитория разработчика zapret](https://github.com/bol-van/zapret) и [пакета для совместимости с Windows](https://github.com/bol-van/zapret-win-bundle).

## Перед запуском

Очень желательно перед запуском ознакомиться с [оригинальными инструкциями от разработчика](https://github.com/bol-van/zapret?tab=readme-ov-file#быстрый-старт) и установить [безопасный DNS-сервер](/network/secure-dns)! По умолчанию, провайдер имеет возможность перехватывать DNS-запросы и перенаправлять их на свои сервера. Именно из-за этого отображается страница, где написано "Доступ к информационному ресурсу ограничен". Поэтому сначала нужно не дать провайдеру перехватывать DNS-запросы, а уже потом настраивать zapret. [Инструкция по установке безопасного DNS-сервера](/network/secure-dns). Так же убедитесь перед запуском подбора, что у Вас отключены все средства обхода внутренних блокировок (VPN, zapret и пр.), иначе проверка будет бессмысленной.

## Windows

1.  Скачайте [архив](https://github.com/bol-van/zapret-win-bundle/archive/refs/heads/master.zip) со всем необходимым для работы zapret на Windows.
2.  Распакуйте в любую папку, например в `C:\zapret`.
3.  Запустите `blockcheck.cmd` в папке `zapret-win-bundle-master\blockcheck`.  
Далее идёт диалог для определения основных параметров подбора. Чтобы знать, как отвечать на эти вопросы, нужно чётко для себя сформулировать цель искомой стратегии. Если цель достаточно абстрактна, то с её уточнением может помочь ~~ChatGPT~~ [Gemini](https://aistudio.google.com). В своём промпте предложите ему ознакомиться с содержимым [этой ссылки](https://github.com/bol-van/zapret/blob/master/docs/readme.md#проверка-провайдера) и назовите сайт(ы) к которому(ым) хотите получить доступ.
    ::: danger Будьте осторожны
    Не запускайте режим force с проверкой tls1.2, это может занять множество часов
    :::
    <img src="/img/network/vpns/blockcheck/1.png" style="margin: 15px auto; display: block">
4.  Сохраните полученный * SUMMARY с найденными стратегиями куда Вам удобно. Так же полная история проверки хранится в `blockcheck.log` рядом с одноимённым `.cmd` (до момента перезапуска подбора)
    <img src="/img/network/vpns/blockcheck/2.png" style="margin: 15px auto; display: block">
5.  Создайте в папке `zapret-win-bundle-master\zapret-winws` список `.txt` из ip-адресов/подсетей, на которые хотите распространить обход. Также определитесь с портами. Если не знаете где искать список нужных ip и задействованных портов — спросите у [Gemini](https://aistudio.google.com)
    <img src="/img/network/vpns/blockcheck/3.png" style="margin: 15px auto; display: block">
6.  Возьмите за основу файл для запуска из любой сборки zapret (ПКМ - изменить в Блокноте) или шаблон ниже и замените стратегию на свою. Сохраните файл в той же папке где и список ip.
    <img src="/img/network/vpns/blockcheck/4.png" style="margin: 15px auto; display: block">
    ::: details Шаблон
    ```bat
    @echo off
    :: Переходим в папку, где лежит этот .bat файл, чтобы все пути были правильными
    cd /d "%~dp0"

    :: ############ КОНФИГУРАЦИЯ ############
    set STRATEGY=
    :: Порты
    set PORTS=
    :: Имя файла с IP-адресами
    set IP_LIST=.txt
    :: #######################################

    start "Bypass" /min winws.exe --ipset=%IP_LIST% --wf-l3=ipv4 --wf-tcp=%PORTS% %STRATEGY% --wf-udp=%PORTS% %STRATEGY%

    exit
    ```
    :::
7.  Запустите получившийся файл и проверяйте работоспособность стратегии

### Как использовать на Windows 7 x64 или Windows 11 ARM?

Чтобы zapret работал на Windows 7, необходимо отключить проверку подписи драйверов. Для этого однократно запустите `win7/install_win7.cmd`. Батник заменит файлы windivert на совместимую с Windows 7 версию.  
или  
[Выполните команды в командной строке от имени администратора](/windows/run) и перезагрузите систему:

```bat
bcdedit.exe -set loadoptions DISABLE_INTEGRITY_CHECKS
bcdedit.exe -set TESTSIGNING ON
```

После перезагрузки, сборки zapret должны работать корректно.
::: info Замечание
Для 32-битных систем Windows готового zapret, к сожалению, не существует.
:::
На Windows 11 arm64 выполните `arm64/install_arm64.cmd` от имени администратора и перезагрузите компьютер.

## Другие системы

Наиболее вероятно, что Вы будете запускать подбор с домашнего интернета. Успешно подобранная в таком случае стратегия скорее всего будет работать для любых систем в этой сети. То, как установить сам zapret, ищите в [инструкциях для соответствующих систем](/network/vpns/zapret#linux), а здесь будут вынесены только подсказки куда вставлять полученные параметры запуска.

### Linux

Для Linux также существует [официальный гайд](https://github.com/bol-van/zapret/blob/master/docs/quick_start.md#настройка) по использованию blockcheck
>Не работает какой-то сайт с устаревшими серверами? Попробуйте добавить его домен в `/opt/zapret/autohosts.txt`  
 Не работает неограниченный сайт? Добавьте его домен в `/opt/zapret/ignore.txt`  
 Конфиг можно изменить в `/opt/zapret/config.txt` (перезапустите zapret после изменения)  
 Для проверки текущего конфига вы можете использовать `/opt/zapret/check.sh`

### Android (с root)

::: info Если root отсутствует
Судя по тому, что формат стратегий для ByeByeDPI отличается, то параметры, найденные с помощью blockcheck, **не** подойдут для этого приложения
:::

>Список доменов сайтов с устаревшими серверами находится в `/data/adb/zapret/autohosts.txt`. Добавьте туда домен в случае, если нужный вам сайт не работает.  
 Если неограниченный сайт почему-то перестал открываться, добавьте его домен в `/data/adb/zapret/ignore.txt`.  
 Конфиг (стратегия) находится в `/data/adb/zapret/config.txt`.

#### KsuWebUI

[Модуль от IMMALWARE](https://github.com/ImMALWARE/zapret-magisk) имеет веб-интерфейс KsuWebUI.
>На вкладке **Домены** можно добавлять/удалять домены, редактируя autohosts и ignore.  
 На вкладке **Конфиг** можно отредактировать конфиг.  
 На вкладке **Проверка** скрипт проверит соединение ко всем доменам из `autohosts.txt` с текущей стратегией.

### Переменные в config.txt

*   `{hosts}` — подставит путь к autohosts.txt
*   `{ignore}` — подставит путь к ignore.txt
*   `{youtube}` — подставить путь к youtube.txt
*   `{quicgoogle}` — подставит путь к system\\quic\_initial\_www\_google\_com.bin
*   `{tlsgoogle}` — подставит путь к system\\tls\_clienthello\_www\_google\_com.bin

## Windows Defender видит вирусы?

В архивах выше нет вирусов! Совсем нет!

[winws.exe на VirusTotal](https://www.virustotal.com/gui/file/bebdf50de893b365454846c3247e2e978cbab6071253a88487845ceee38ee870) не детектится совсем. Детектится только [WinDivert64.sys](https://www.virustotal.com/gui/file/8da085332782708d8767bcace5327a6ec7283c17cfb85e40b03cd2323a90ddc2).

**WinDivert** — драйвер с [открытым исходным кодом](https://github.com/basil00/WinDivert) для перехвата, изменения и перенаправления сетевых пакетов в Windows. Он позволяет программам получать доступ к сетевому трафику на низком уровне, перехватывать его до того, как он попадёт в приложение или сеть, изменять содержимое и отправлять обратно. Именно с помощью него zapret работает, WinDivert детектится ложно.

### Отключение Windows Defender

1.  Откройте трей -> нажмите по значку Windows Defender.
    <img src="/img/network/vpns/zapret/1.jpeg" style="margin: 15px auto; display: block" width="150">
2.  Защита от вирусов и угроз (слева) -> Управление настройками.
    <img src="/img/network/vpns/zapret/2.png" style="margin: 15px auto; display: block">
3.  Отключите "Защиту в режиме реального времени". Она отключается не навсегда, а на некоторое время. Windows Defender не детектит ничего в zapret в распакованном виде.
    <img src="/img/network/vpns/zapret/3.png" style="margin: 15px auto; display: block">