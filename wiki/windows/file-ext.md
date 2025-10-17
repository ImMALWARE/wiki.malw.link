# Отображение расширений файлов в Windows

<img src="/img/logo/file-ext.png" style="float: right;" width="150px">

Чем думали в Microsoft, когда решили по умолчанию не отображать расширения файлов? Пользователь может случайно запустить вредоносный файл, замаскированный под изображение, docx документ или zip-архив, ведь он может иметь название **archive.zip.exe**.

## Включение отображения расширений файла

### Самый простой способ — [выполнить команду](/windows/run)

```bat
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v HideFileExt /t REG_DWORD /d 0 /f
```

После выполнения, обновите (**кнопкой F5 или правой кнопкой -> Обновить**) рабочий стол или нужную папку, расширения должны отобразиться.

### В проводнике Windows 10

1.  Откройте Проводник
2.  Выберите вкладку "Вид" и поставьте галочку на настройке "Расширения имён файлов"
    <img src="/img/windows/file-ext/1.png" width="800px" style="margin: 15px auto; display: block;" />

### В проводнике Windows 11

1.  Откройте Проводник
2.  Просмотреть
3.  Показать
4.  Расширения имен файлов
    <img src="/img/windows/file-ext/2.png" width="800px" style="margin: 15px auto; display: block;" />