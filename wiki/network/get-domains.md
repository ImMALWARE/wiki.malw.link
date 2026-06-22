# Отслеживание списка доменов, к которым обращаются приложения

## Windows, Linux, macOS
На этих системах проще всего использовать [Wireshark](/apps/wireshark). Он отслеживает весь трафик на устройстве. Он отображает [SNI](https://ru.wikipedia.org/wiki/Server_Name_Indication) из пакетов [ClientHello](https://ru.wikipedia.org/wiki/TLS) и обращения к [DNS-серверу](https://ru.wikipedia.org/wiki/DNS).

1. Установите [Wireshark (ссылки в этой статье)](/apps/wireshark).
2. Выберите сетевой интерфейс для захвата трафика. В моём случае это `enp3s0`.
    <img src="/img/network/get-domains/wireshark-1.png" class="centered">
3. В поле "Примените фильтр отображения" введите 
    ```
    dns.flags.response == 0 || tls.handshake.extensions_server_name
    ```
    Это отфильтрует только DNS-запрос (не включая ответы), запросы Client Hello с SNI и запросы [QUIC](https://ru.wikipedia.org/wiki/QUIC) Initial.
4. Запустите нужное приложение. В Wireshark вы можете увидеть список доменов.
    <img src="/img/network/get-domains/wireshark-2.png" class="centered">

## Android
На Android есть аналогичное приложение — [PCAPdroid](/apps/pcapdroid). В приложении есть дополнительный функционал с [root-правами](/android/root): расшифровка содержимого зашифрованного трафика. Но домены можно отследить и без root.

1. Установите [PCAPdroid (ссылки в этой статье)](/apps/pcapdroid).
2. В меню "Целевые приложения" выберите те приложения, трафик которых нужно отследить.
3. Нажмите кнопку "Готов".
4. Запустите нужное приложение. В PCAPdroid вы можете увидеть список доменов.
    <img src="/img/network/get-domains/pcapdroid.png" class="centered">

## iOS
С iOS 15 есть системная функция для просмотра доменов, к которым обращаются приложения.

1. Перейдите в Настройки -> Конфиденциальность и безопасность -> Отчет о конфиденциальности приложений. Нажмите "Вести отчет о конфиденциальности приложений"
2. Запустите нужное приложение.
3. В "Отчете о конфиденциальности приложений" появится раздел "Сетевая активность приложений". Выберите в нем нужное приложение, там будет список доменов.
    <img src="/img/network/get-domains/ios-1.jpeg" class="centered" width="300px">

    <img src="/img/network/get-domains/ios-2.jpeg" class="centered" width="300px">
