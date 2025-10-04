# Отслеживание списка доменов, к которым обращаются приложения

## Windows, Linux, macOS
На этих системах проще всего использовать [Wireshark](/apps/wireshark). Он отслеживает весь трафик на устройстве. Он отображает [SNI](https://ru.wikipedia.org/wiki/Server_Name_Indication) из пакетов [ClientHello](https://ru.wikipedia.org/wiki/TLS) и обращения к [DNS-серверу](https://ru.wikipedia.org/wiki/DNS).

1. Установите [Wireshark (ссылки в этой статье)](/apps/wireshark).
2. Выберите сетевой интерфейс для захвата трафика. В моём случае это `enp3s0`.
    <img src="/img/network/get-domains/1.png" style="display: block; margin: 15px auto;">
3. В поле "Примените фильтр отображения" введите 
    ```
    dns.flags.response == 0 || tls.handshake.extensions_server_name
    ```
    Это отфильтрует только DNS-запросы, не включая ответы и запросы, запросы Client Hello с SNI и [QUIC](https://ru.wikipedia.org/wiki/QUIC) Initial запросы.
4. Запустите нужное приложение. В Wireshark вы можете увидеть список доменов.
    <img src="/img/network/get-domains/2.png" style="display: block; margin: 15px auto;">

## Android
На Android есть аналогичное приложение — [PCAPdroid](/apps/pcapdroid). В приложении есть дополнительный функционал с [root правами](/android/root): расшифровка содержимого зашифрованного трафика. Но домены можно отследить и без root.

1. Установите [PCAPdroid (ссылки в этой статье)](/apps/pcapdroid).
2. В меню "Целевые приложения" выберите те приложения, трафик которых нужно отследить.
3. Нажмите кнопку "Готов".
4. Запустите нужное приложение. В PCAPdroid вы можете увидеть список доменов.
    <img src="/img/network/get-domains/3.jpg" style="display: block; margin: 15px auto;">