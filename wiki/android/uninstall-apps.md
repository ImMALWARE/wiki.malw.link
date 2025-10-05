# Удаление системных приложений без рут прав

#Сanta - программа для удаления системных приложений без рут прав, но c использованием ADB и модуля Shisuku.

#1. Скачиваем по ссылкам ниже программы:
https://github.com/RikkaApps/Shizuku/releases
https://github.com/samolego/Canta/releases/tag/3.0.2

#2. Нам нужен ADB, чтобы удалять наши приложения, по ссылке ниже скачиваем программу SDK Platform Tools.

Windows: https://dl.google.com/android/repository/platform-tools-latest-windows.zip

Linux: https://dl.google.com/android/repository/platform-tools-latest-linux.zip

Mac: https://dl.google.com/android/repository/platform-tools-latest-darwin.zip

После того как скачали, заходим в папку с adb, тыкаем на пустую область папки, зажимаем SHIFT и нажимаем правой кнопкой мышей, после чего откроется окно "Открыть окно PowerShell здесь". На Mac и Linux откройте Terminal. 
<img src="/img/android/uninstall-apps/1.png" style="margin: 15px auto; display: block">

После того, как открылоcь окно PowerShell, вводим команду .\adb, чтобы проверить работает или нет, если работает, то вам высветится версия программы.

<img src="/img/android/uninstall-apps/2.png" style="margin: 15px auto; display: block">

#3. Чтобы использовать adb необходимо сделать включить отладку по USB на вашем устройстве, обычно выполнив следующие действия:

1. Откройте настройки системы и перейдите в раздел «О системе».

2. Быстро нажмите «Номер сборки» несколько раз, и вы увидите сообщение, похожее на «Вы разработчик».

3. На этом этапе вы сможете найти «Параметры разработчика» в настройках "Для разработчиков", включить «Отладку по USB».

4. Подключите устройство к компьютеру и введите adb devices в терминале.

5. В это время на устройстве появится диалоговое окно «Разрешить отладку», отметьте «Всегда разрешать» и подтвердите.

6. Вводим adb devices снова в терминале. Если проблем нет, вы увидите что-то вроде следующего:

<img src="/img/android/uninstall-apps/3.png" style="margin: 15px auto; display: block">

#4. Подключаем Shizuku, для этого скопируйте команду adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh и вставьте в терминал. Если проблем нет, вы увидите, что Shizuku успешно запущен в приложении Shizuku.

<img src="/img/android/uninstall-apps/4.png" style="margin: 15px auto; display: block">

<img src="/img/android/uninstall-apps/5.png" style="margin: 15px auto; display: block">

#5. Заходим в приложение Shizuku и активируем приложение Canta

<img src="/img/android/uninstall-apps/6.png" style="margin: 15px auto; display: block">
<img src="/img/android/uninstall-apps/7.png" style="margin: 15px auto; display: block">

Всё готово для удаления системных программ! Поздравляю! :)

Теперь переходим в приложение Canta и выбираем любое приложение, которое хотим удалить нажимая на квадратик справа и на значок мусорки, всё мы удалили приложение! Обратите внимание, под приложениями пишутся плашки, что можно удалять, а что нельзя, иначе можете превратить свой телефон в кирпич или вообще не запустить его. Переводчик вам в помощь! :)

!!!Также, после перезагрузки телефона может потребоваться заново настроить все сначала, если захотите снова удалить приложение.!!!

<img src="/img/android/uninstall-apps/8.png" style="margin: 15px auto; display: block">
<img src="/img/android/uninstall-apps/9.png" style="margin: 15px auto; display: block">
<img src="/img/android/uninstall-apps/10.png" style="margin: 15px auto; display: block">
