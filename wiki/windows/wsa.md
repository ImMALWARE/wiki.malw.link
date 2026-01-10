# Windows Subsystem for Android

<img src="/img/logo/wsa.png" style="float: right" width="100px">

**Windows Subsystem for Android** (WSA) — это эмулятор Android для Windows от Microsoft. Он позволяет запускать Android-приложения на Windows 11 и Windows 10.

К сожалению, в настоящее время поддержка WSA прекращена, но последние версии продолжают стабильно работать (Android 13 остаётся актуальным). Имеет смысл устанавливать [версию WSA от сообщества](https://github.com/MustardChef/WSABuilds), в которую встроены [root-права](/android/root) и сервисы Google Play.

## Перед установкой
1. Проверьте соответствие системным требованиям для запуска WSA:
    - Сборка Windows 11 как минимум 22000.526 или сборка Windows 10 как минимум 22H2 10.0.19045.2311 (чтобы узнать, нажмите Win + R -> winver). Работает на Windows 10 LTSC 2021.
    - Минимум 8 ГБ ОЗУ

2. Включите компоненты "Платформа виртуальной машины" и "Платформа низкоуровневой оболочки Windows". Для этого [выполните команду](/windows/run):
    ```bat
    OptionalFeatures.exe
    ```
    И поставьте галочки у компонентов "Платформа виртуальной машины" и "Платформа низкоуровневой оболочки Windows". Нажмите ОК, дождитесь применения, перезагрузите систему, если требуется.

## Установка
1. Скачайте архив со сборкой WSA. В сборку встроены Google Play сервисы, KernelSU, удалён Amazon AppStore.
    - Windows 10: https://github.com/MustardChef/WSABuilds/releases/download/Windows_10_2407.40000.4.0_LTS_7_HOTFIX_1/WSA_2407.40000.4.0_x64_Release-Nightly-with-KernelSU-v2.1.2-MindTheGapps-13.0-RemovedAmazon_Windows_10.7z
    - Windows 11: https://github.com/MustardChef/WSABuilds/releases/download/Windows_11_2407.40000.4.0_LTS_7_HOTFIX_1/WSA_2407.40000.4.0_x64_Release-Nightly-with-KernelSU-v2.1.2-MindTheGapps-13.0-RemovedAmazon.7z

2. Распакуйте его, например, в `C:\WSA`

3. [Выполните команду](/windows/run) в PowerShell:
    ```powershell
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass -Force;
    ```
4. Нажмите правой кнопкой на `Install.ps1` -> Выполнить с помощью PowerShell. Ожидайте завершения установки.
    <img src="/img/windows/wsa/1.png">

Когда появится такое окно, и в командной строке будет написано All Done, значит установка завершена!
<img src="/img/windows/wsa/2.png">
Нажмите Продолжить, ожидайте первого запуска "подсистемы".

## Установка APK
### Подготовка
1. Для установок APK нужно установить [Android Debug Bridge](https://ru.wikipedia.org/wiki/Android_Debug_Bridge). Проще всего сделать это через [winget](/apps/winget).

[Выполните команду](/windows/run):
```bat
winget install --id=Google.PlatformTools -e
```
> Если будет ошибка о том, что "winget не является командой", следуйте [инструкции по установке winget](/apps/winget).

Установить ADB нужно будет только один раз.

2. Откройте "Параметры подсистемы Windows для Android" (найдите в Пуске), перейдите во вкладку Разработчик, включите Режим разработчика.
<img src="/img/windows/wsa/3.png">

3. [Выполните команду](/windows/run):
    ```bat
    adb connect 127.0.0.1:58526
    ```
    Где `127.0.0.1:58526` - адрес, который указан в параметрах, он может отличаться!

### Установка через командную строку

Скопируйте путь к APK-файлу. Нажмите Shift + правой кнопкой по нему и выберите "Копировать как путь".

В [командной строке](/windows/run) напишите `adb install ` и после пробела вставьте скопированный путь.

Установленное приложение появится в Пуске.

### WSA Pacman
**WSA Pacman** — это удобный установщик APK для WSA, который интегрируется в проводник Windows.
Скачайте его по ссылке [https://github.com/alesimula/wsa_pacman/releases/download/v1.5.0/WSA-pacman-v1.5.0-installer.exe](https://github.com/alesimula/wsa_pacman/releases/download/v1.5.0/WSA-pacman-v1.5.0-installer.exe)

После установки можно будет легко устанавливать приложения обычным запуском APK-файлов из проводника Windows.