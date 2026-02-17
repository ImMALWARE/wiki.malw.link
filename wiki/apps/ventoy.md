# Ventoy

<img src="/img/logo/ventoy.png" style="float: right" width="100px">

**Ventoy** — инструмент с [открытым исходным кодом](https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5) для создания универсальных загрузочных USB-накопителей. Вы можете скопировать несколько [ISO-файлов](https://ru.wikipedia.org/wiki/ISO-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7) в папку, а затем выбирать нужный при загрузке с накопителя. Вы также можете загружаться с [VHD](https://ru.wikipedia.org/wiki/VHD) (дисков виртуальных машин) с помощью Ventoy.
<img src="/img/apps/ventoy/screen-disk.png" style="display: block; margin: 15px auto;">
<img src="/img/apps/ventoy/screen-grub.png" style="display: block; margin: 15px auto;">

## Установка Ventoy на флешку
Скачайте установщик Ventoy.
- Windows: https://github.com/ventoy/Ventoy/releases/download/v1.1.10/ventoy-1.1.10-windows.zip
- Linux: https://github.com/ventoy/Ventoy/releases/download/v1.1.10/ventoy-1.1.10-linux.tar.gz

В архиве есть 3 приложения: **Ventoy2Disk**, **VentoyPlugson**, **VentoyVlnk**. Для создания флешки с Ventoy запустите Ventoy2Disk. Выберите флешку из списка и нажмите Установить.
<img src="/img/apps/ventoy/ventoy2disk.png" style="display: block; margin: 15px auto;">
После установки флешка разделится на два раздела: `Ventoy` и `VTOYEFI`.

Раздел `VTOYEFI` не нужно трогать вообще (скорее всего, он и отображаться не будет).

Раздел `Ventoy` предназначен для хранения ISO/VHD-файлов. После загрузки с Ventoy, вы увидите экран выбора файла для загрузки.

## Кастомизация и настройки

Создайте папку `ventoy` на флешке. Она должна называться именно `ventoy` с маленькой буквы.

::: warning Внимание
В папку ventoy нужно помещать только файлы, относящиеся к настройке Ventoy.
:::

### Установка темы
Вы можете выбрать любую тему для [GRUB](https://ru.wikipedia.org/wiki/GRUB). Каталог есть, например, здесь: https://www.gnome-look.org/browse?cat=109&ord=rating и здесь: https://github.com/Jacksaur/Gorgeous-GRUB

1. Скачайте нужную тему. Поместите папку с темой в папку `ventoy`

    ::: warning Внимание
    Папка с темой — та, что содержит `theme.txt`.
    :::

2. Скопируйте путь к `theme.txt` в теме. Для этого нажмите Shift + правой кнопкой на `theme.txt` и выберите "Копировать как путь".

3. Запустите `VentoyPlugson`. Выберите нужную флешку и нажмите Start. Откроется браузер с настройками.

4. Перейдите в раздел **Theme Plugin**. В поле **file** нажмите **Add**, в **File Path** вставьте путь без кавычек.
<img src="/img/apps/ventoy/ventoyplugson.png" style="display: block; margin: 15px auto;">
<img src="/img/apps/ventoy/theme-1.png" style="display: block; margin: 15px auto;">
<img src="/img/apps/ventoy/theme-2.png" style="display: block; margin: 15px auto;">
<img src="/img/apps/ventoy/theme-3.png" style="display: block; margin: 15px auto;">

## Прочие настройки
- В разделе **Theme Plugin** -> **gfxmode** можно установить разрешение экрана.
- В разделе **Menu Alias Plugin** можно установить кастомные названия для ISO и VHD-файлов:
    <img src="/img/apps/ventoy/menu-alias-1.png" style="display: block; margin: 15px auto;">
    <img src="/img/apps/ventoy/menu-alias-2.png" style="display: block; margin: 15px auto;">
    Аналогично процессу установки темы, скопируйте путь к файлу, нажмите **Add**, вставьте путь в **File Path** без кавычек, в **Alias** введите нужное вам название.
- В разделе **Global Control Plugin** -> **VTOY_WIN11_BYPASS_CHECK** можно включить обход требований для установки Windows 11.

## Загрузка с виртуальных жёстких дисков
Если вы пользуетесь [виртуальными машинами](https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0), то с помощью Ventoy вы можете загружаться с их виртуальных жёстких дисков (VHD). Не стоит копировать VHD на флешку, потому что скорость записи/чтения у флешек очень маленькая. Вместо этого лучше использовать `VentoyVlnk`, чтобы создать ярлык к VHD файлу.

1. Создайте папку `ventoy` на флешке. Она должна называться именно `ventoy` с маленькой буквы.

    ::: warning Внимание
    В папку ventoy нужно помещать только файлы, относящиеся к настройке Ventoy.
    :::

2. Скачайте плагин `ventoy_vhdboot`: https://github.com/ventoy/vhdiso/releases/download/v3.0/ventoy_vhdboot.zip

    В папке `Win10Based` будет `ventoy_vhdboot.img`, поместите его в папку `ventoy`.

3. Найдите VHD от вашей виртуальной машины. В VirtualBox можно нажать правой кнопкой по ВМ -> показать в проводнике.
<img src="/img/apps/ventoy/vbox-open-in-explorer.png" style="display: block; margin: 15px auto;">

4. Запустите `VentoyVlnk`, нажмите **Create** и выберите нужный вам VHD-файл.