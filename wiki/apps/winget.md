# winget

<img src="/img/logo/winget.png" style="float: right" width="200px">

**winget** — это [инструмент командной строки](https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81_%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8), позволяющий легко и быстро устанавливать приложения на Windows 10, Windows 11 и Windows Server 2025. Он поддерживается на Windows 10 версии 1709 и выше. По умолчанию установлен и доступен на всех редакциях Windows, кроме LTSC.

## Установка приложений через winget

Синтаксис команды: `winget install название_пакета`

Например: `winget install discord`, `winget install chrome`, `winget install notepad++`, `winget install spotify`, `winget install firefox`, `winget install SystemInformer`, `winget install OBSStudio`

Список доступных приложений с удобным копированием команды winget есть на сайтах [https://winstall.app](https://winstall.app) и [https://winget.run](https://winget.run).

## Установка winget для Windows LTSC

Если в вашей версии Windows не установлен winget, установить его можно с помощью этих команд. Выполнять их нужно в [PowerShell от имени администратора](/windows/run).

```powershell
$progressPreference = 'silentlyContinue'
Install-PackageProvider -Name NuGet -Force
Install-Module -Name Microsoft.WinGet.Client -Force -Repository PSGallery
Repair-WinGetPackageManager
Write-Host "winget установлен!"
```