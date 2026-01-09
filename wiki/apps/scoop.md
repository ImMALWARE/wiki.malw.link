# Scoop

<img src="/img/logo/scoop.png" style="float: right" width="100px">

**Scoop** — это [инструмент командной строки](https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81_%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8) для установки приложений на Windows. Он похож на [Winget](/apps/winget), но имеет свои особенности.

## Возможности

 - Хранит программы в папке пользователя (`%USERNAME%/scoop/apps`)
 - Не требует прав администратора для установки программ
 - Скрывает установщики в стиле графического интерфейса
 - Предотвращает засорение PATH при установке большого количества программ
 - Автоматически находит и устанавливает зависимости
 - Берет пакеты из GitHub-репозиториев (buckets)

## Установка Scoop

Для установки необходимо [выполнить команду в PowerShell от имени администратора](/windows/run)

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

## Базовые команды Scoop
### Установка программ

Синтаксис команды: `scoop install <название пакета>`

Например: `scoop install git`, `scoop install vlc`, `scoop install python`

### Поиск программ

Синтаксис команды: `scoop search <название пакета>` или `scoop-search <название пакета>`, если установлен scoop-search (программы ищутся в установленных bucket'ах) 

Также можно искать программы на официальном сайте [scoop.sh](https://scoop.sh/)

### Список установленных программ

Синтаксис команды: `scoop list`

### Обновление программ

Обновление всех установленных программ происходит в два этапа:

1. `scoop update` - обновление bucket'ов
2. `scoop update *` - обновление всех программ

Установка обновления для конкретной программы: `scoop update <название пакета>`

Приостановка обновления для кокретной программы: `scoop hold <название пакета>` и отмена этого действия: `scoop unhold <название пакета>`

Команда `scoop status` покажет доступные обновления и информацию о приостановленных обновлениях

### Удаление программ

Для удаления программы: `scoop uninstall <название пакета>`

Для удаления программы со всеми данными `scoop uninstall -p <название пакета>`

## Buckets

Установка программ происходит через репозитории (buckets)

Для того, чтобы узнать репозитории нужно написать `scoop bucket known`

Она покажет список известных официальных bucket’ов, например:

```
main
extras
versions
nirsoft
sysinternals
php
nerd-fonts
nonportable
java
games
```

Команда для добавления bucket'а: `scoop bucket add <имя> [URL]`

Пример: `scoop bucket add extras`

Пример для пользовательского репозитория: `scoop bucket add mybucket https://github.com/username/mybucket`

Проверка установленных bucket'ов: `scoop bucket list`

Удалить ненужный bucket: `scoop bucket rm <имя>`

Список пользовательских bucket'ов можно найти на сайте [scoop.sh](https://scoop.sh/)

Также можно создавать свои bucket'ы со своими программами.