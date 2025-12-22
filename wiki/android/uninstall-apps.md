# Удаление системных приложений Android без root

Для удаления системных приложений без [root](/android/root) c использованием [ADB](https://ru.wikipedia.org/wiki/Android_Debug_Bridge) и [Shizuku](https://github.com/RikkaApps/Shizuku) будем использовать приложение **Сanta**.

1. Установите Shizuku и Canta:
    - https://github.com/RikkaApps/Shizuku/releases/download/v13.6.0/shizuku-v13.6.0.r1086.2650830c-release.apk
    - https://github.com/samolego/Canta/releases/download/3.0.2/app-release.apk

2. Для использования ADB нужно установить Android SDK Platform Tools на компьютер.
    На Windows проще всего использовать пакетный менеджер [winget](/apps/winget). В Windows 10 и Windows 11 он установлен по умолчанию. Для этого нужно [открыть командную строку и выполнить команду](/windows/run):

    ```bat
    winget install --id=Google.PlatformTools  -e
    ```

    > Если будет ошибка о том, что "winget не является командой", следуйте [инструкции по установке winget](/apps/winget).

    На Linux установите Android SDK через ваш пакетный менеджер. На macOS используйте [Homebrew](/apps/homebrew):

    ```shell
    brew install --cask android-platform-tools
    ```

3. Активируйте отладку по USB на Android. На разных прошивках этот процесс может отличаться, но чаще всего сработает такой алгоритм: откройте Настройки -> "Об устройстве" -> нажмите "Номер сборки" несколько раз. Вы должны увидеть сообщение "Вы стали разработчиком". Затем в настройках появится раздел "Для разработчиков". Включите в нём "Отладку по USB".
    Подключите устройство к компьютеру и [выполните команду в командной строке](/windows/run): `adb devices`. В этот момент на Android появится запрос на разрешение отладки. Отметьте "Всегда разрешать..." и подтвердите.

4. [Выполните команду в командной строке](/windows/run):
    ```
    adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh
    ```
    Если всё прошло успешно, вы увидите, что Shizuku успешно запущен в приложении.
    <img src="/img/android/uninstall-apps/1.png" style="margin: 15px auto; display: block">

    <img src="/img/android/uninstall-apps/2.jpg" style="margin: 15px auto; display: block; width: 300px">

5. В Shizuku в меню "Доступно для ... приложений" активируйте Canta.

    <img src="/img/android/uninstall-apps/3.jpg" style="margin: 15px auto; display: block; width: 300px">
    <img src="/img/android/uninstall-apps/4.jpg" style="margin: 15px auto; display: block; width: 300px">

6. Перейдите в приложение Canta. Выберите любое приложение, которое вы хотите удалить, и подтвердите удаление.

    <img src="/img/android/uninstall-apps/5.jpg" style="margin: 15px auto; display: block; width: 300px">
    <img src="/img/android/uninstall-apps/6.jpg" style="margin: 15px auto; display: block; width: 300px">

Теги под пунктами с приложениями могут подсказать, насколько безопасно удалять приложение.
<img src="/img/android/uninstall-apps/7.jpg" style="margin: 15px auto; display: block; width: 300px">