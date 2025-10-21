# MalwTool

<img src="/img/logo/powershell.png" style="float: right" width="150">

**MalwTool** — инструмент для активации, скачивания, настройки [Windows](https://ru.wikipedia.org/wiki/Windows) и [Office](https://ru.wikipedia.org/wiki/Microsoft_Office).

## Возможности

### Активация

*   Windows 10/11 всех редакций, в том числе [LTSC](https://ru.wikipedia.org/wiki/LTSC) (LTSC будет конвертирована в LTSC IoT, она имеет более долгий срок поддержки) по HWID (активация будет сохраняться даже после переустановки системы)
*   Конвертирование Windows [LTSC Evaluation](/windows/ltsc-evaluation) в LTSC
*   [Windows Server](https://ru.wikipedia.org/wiki/Windows_Server) 2022, Windows Server Standard, Windows Server Datacenter, 2019, 2016, 2012, 2012 R2, 1803, 1709 через KMS
*   Office 2013, 2016, 2019, 2021, 2024, 365 через sppc.dll
*   [Visio](https://ru.wikipedia.org/wiki/Microsoft_Visio) 2016/2019/2021 -> 2021 (будут конвертированы в 2021) через KMS
*   [Project](https://ru.wikipedia.org/wiki/Microsoft_Project) 2016/2019/2021 -> 2021 (будут конвертированы в 2021) через KMS
*   [Prism Launcher](https://prismlauncher.org) (разблокировка оффлайн аккаунта)
*   TL (разблокировка возможности отключить добавление рекламных серверов)
*   [MobaXterm](https://mobaxterm.mobatek.net)

### Скачивание

*   Windows 10 последней версии (с официального сайта Microsoft, без средств обхода ограничений)
*   Windows 10 LTSC 2021 (рекомендуется)
*   Windows 11 последней версии (с официального сайта Microsoft, без средств обхода ограничений)
*   Windows 11 LTSC 2024
*   Windows 8.1
*   Windows Server 2025, 2022, 2019, 2016, 2012
*   [Rufus](/apps/rufus)
*   Office 2024, 2021, 2019, 2016, 2013 (онлайн-установщик либо ISO архив. В случае онлайн-установщика, MalwTool поможет обойти ограничения)
*   Visio 2024 (ISO)
*   Project 2024 (ISO)

### Другие функции

*   Узнать пароли от сохранённых Wi-Fi сетей
*   Установить [winget](/apps/winget)
*   Установить [Microsoft Store](https://ru.wikipedia.org/wiki/Microsoft_Store) (для версий Windows без Microsoft Store)
*   Резервное копирование и восстановление драйверов (рекомендуется при переустановке)
*   Полное удаление [Microsoft Edge](https://ru.m.wikipedia.org/wiki/Microsoft_Edge)
*   Удаление CompatTelRunner.exe и wsqmcons.exe (системные шпионские файлы, нагружают процессор во вред)
*   Установка [Spicetify](/apps/spicetify)
*   [Добавление строк в файл hosts для обхода ограничений](https://info.dns.malw.link/hosts)

### Решение проблем

*   Очистка лицензий Office16
*   Инструмент удаления Office (необходимо установленное приложение "[Техническая поддержка](/windows/get-help)" (Get Help) в Windows)
*   Отсутствие папки Office16
*   Сброс KMS-активации Windows
*   Проверка системных файлов на целостность (выполняет команды sfc /scannow, DISM /Online /Cleanup-Image /RestoreHealth, chkdsk C: /b /x)

## Запуск

Для запуска необходимо [выполнить команду](/windows/run):

```powershell
powershell -command "irm https://github.com/ImMALWARE/MalwTool/raw/refs/heads/main/MalwTool.ps1 | iex"
```

Второй, сокращенный вариант команды (редирект на тот же GitHub с моего сайта):

```powershell
powershell -command "irm https://malw.link/dl/malwtool | iex"
```

## MalwTool Legacy — для Windows 8/8.1
 <img src="/img/apps/malwtool/1.png" style="float: right; margin: 5px" width="300px">

**MalwTool Legacy** — [инструмент командной строки](https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81_%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8) для Windows 8/8.1, который может активировать Windows, Office, Visio и Project.

### Запуск

Для запуска необходимо [выполнить команду](/windows/run):

```powershell
powershell -command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; irm https://raw.githubusercontent.com/ImMALWARE/MalwTool/main/MalwToolLegacy.ps1 | iex"
```

### **Возможности по активации**

*   Windows 8/8.1
*   Office 2016
*   Office 2013
*   Visio 2016
*   Project 2016

## Инструкция по активации Windows/Office на Windows 7

### Windows 7

::: warning Внимание
Активировать этим способом возможно только Профессиональную (Professional) и Корпоративную (Enterprise) редакцию Windows 7! [Как узнать?](/windows/win7-edition)
:::

1.  Откройте PowerShell от имени администратора:
    <img src="/img/apps/malwtool/2.png" style="margin: 15px auto; display: block">

2.  Выполните команды:

    ```powershell
    Set-Location $env:SystemRoot\System32
    cscript //nologo slmgr.vbs /ckms > $null
    cscript //nologo slmgr.vbs /upk > $null
    cscript //nologo slmgr.vbs /cpky > $null
    cscript //nologo slmgr.vbs /ipk FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4 > $null # 7 Professional
    cscript //nologo slmgr.vbs /ipk 33PXH-7Y6KF-2VJC9-XBBR8-HVTHH > $null # 7 Enterprise
    cscript //nologo slmgr.vbs /skms kms.loli.best > $null
    cscript //nologo slmgr.vbs /ato
    ```

### Office 2010

1.  Скачайте архив: https://github.com/ImMALWARE/MalwTool/raw/main/files/Office_2010_Library.zip
2.  Распакуйте его в какую-нибудь папку
3.  Скопируйте путь к папке, куда были распакованы файлы из архива
    <img src="/img/apps/malwtool/3.png" style="margin: 15px auto; display: block">
4.  Откройте cmd от имени администратора
    <img src="/img/apps/malwtool/4.png" style="margin: 15px auto; display: block">
5.  Напишите `cd`, пробел, вставьте скопированный путь и нажмите Enter. В моём случае получается так:
    ```bat
    cd "C:\Users\vboxuser\Desktop\library"
    ```
    <img src="/img/apps/malwtool/5.png" style="margin: 15px auto; display: block">
6.  Выполните остальные команды:
    ```bat
    if exist "C:\Program Files\Microsoft Office\Office14\ospp.vbs" (set "folder=C:\Program Files\Microsoft Office\Office14")
    if exist "C:\Program Files (x86)\Microsoft Office\Office14\ospp.vbs" (set "folder=C:\Program Files (x86)\Microsoft Office\Office14")
    for /f %x in ('dir /b *') do cscript //nologo "%folder%\ospp.vbs" /inslic:%x
    cscript //nologo "%folder%\ospp.vbs" /inpkey:VYBBJ-TRJPB-QFQRF-QFT4D-H3GVB >nul
    cscript //nologo "%folder%\ospp.vbs" /sethst:kms8.msguides.com >nul
    cscript //nologo "%folder%\ospp.vbs" /setprt:1688 >nul
    cscript //nologo "%folder%\ospp.vbs" /act
    ```

### Office 2013

1.  Скачайте архив: https://github.com/ImMALWARE/MalwTool/raw/main/files/Office_2013_Library.zip
2.  Распакуйте его в какую-нибудь папку
3.  Скопируйте путь к папке, куда были распакованы файлы из архива
4.  Откройте cmd от имени администратора
5.  Напишите `cd`, пробел, вставьте скопированный путь и нажмите Enter. В моём случае получается так:
    ```bat
    cd "C:\Users\vboxuser\Desktop\library"
    ```
6.  Выполните остальные команды:
    ```bat
    if exist "C:\Program Files\Microsoft Office\Office15\ospp.vbs" (set "folder=C:\Program Files\Microsoft Office\Office15")
    if exist "C:\Program Files (x86)\Microsoft Office\Office15\ospp.vbs" (set "folder=C:\Program Files (x86)\Microsoft Office\Office15")
    for /f %x in ('dir /b *') do cscript //nologo "%folder%\ospp.vbs" /inslic:%x
    cscript //nologo "%folder%\ospp.vbs" /inpkey:YC7DK-G2NP3-2QQC3-J6H88-GVGXT >nul
    cscript //nologo "%folder%\ospp.vbs" /sethst:kms8.msguides.com >nul
    cscript //nologo "%folder%\ospp.vbs" /setprt:1688 >nul
    cscript //nologo "%folder%\ospp.vbs" /act
    ```

### Office 2016

1.  Откройте cmd от имени администратора
2.  Выполните команды:
    ```bat
    if exist "C:\Program Files\Microsoft Office\Office16\ospp.vbs" (set "folder=C:\Program Files\Microsoft Office\Office16")
    if exist "C:\Program Files (x86)\Microsoft Office\Office16\ospp.vbs" (set "folder=C:\Program Files (x86)\Microsoft Office\Office16")
    cd %folder%
    for /f %x in ('dir /b ..\root\Licenses16\proplusvl_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%x" >nul
    cscript //nologo "%folder%\ospp.vbs" /inpkey:XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99 >nul
    cscript //nologo "%folder%\ospp.vbs" /sethst:kms8.msguides.com >nul
    cscript //nologo "%folder%\ospp.vbs" /setprt:1688 >nul
    cscript //nologo "%folder%\ospp.vbs" /act
    ```