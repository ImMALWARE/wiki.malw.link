# Homebrew

<img src="/img/logo/homebrew.png" style="float: right" width="100px">

Homebrew — это __менеджер пакетов для macOS и Linux__, позволяющий легко и быстро устанавливать приложения и утилиты. Он работает на macOS (версии 10.13 и выше) и различных дистрибутивах Linux. Homebrew использует простой синтаксис команд и имеет огромный репозиторий программ.

## Установка Homebrew

Для установки Homebrew выполните эту команду в терминале:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

После установки может потребоваться добавить Homebrew в PATH. Следуйте инструкциям, которые выведет установщик.

## Установка приложений через Homebrew

Синтаксис команды: `brew install название_пакета`

Например: `brew install git`, `brew install python`, `brew install wget`, `brew install spicetify-cli`

Найти доступные приложения можно на сайте __https://formulae.brew.sh__.

## Основные команды Homebrew

**Поиск пакета:**
```bash
brew search название_пакета
```
Например: `brew search python`

**Информация о пакете:**
```bash
brew info название_пакета
```
Например: `brew info git`

**Обновление Homebrew:**
```bash
brew update
```

**Обновление установленных пакетов:**
```bash
brew upgrade
```

Или обновить конкретный пакет:
```bash
brew upgrade название_пакета
```

**Удаление приложения:**
```bash
brew uninstall название_пакета
```

Например: `brew uninstall discord`, `brew uninstall firefox`

**Список установленных пакетов:**
```bash
brew list
```

**Очистка кэша и удаление старых версий:**
```bash
brew cleanup
```

**Проверка здоровья Homebrew:**
```bash
brew doctor
```

## Cask

Cask — это расширение Homebrew, которое позволяет устанавливать графические приложения с пользовательским интерфейсом (GUI). В то время как обычный Homebrew в основном работает с консольными утилитами и библиотеками, Cask специализируется на полноценных приложениях с графическим интерфейсом.

Для установки графических приложений (как Chrome, Discord и т.д.) используется параметр `--cask`:

Например: `brew install --cask google-chrome`, `brew install --cask discord`, `brew install --cask spotify`, `brew install --cask vlc`, `brew install --cask obs`

**Поиск Cask приложения:**
```bash
brew search --casks название_приложения
```

**Удаление Cask приложения:**
```bash
brew uninstall --cask название_приложения
```

**Список установленных Cask приложений:**
```bash
brew list --cask
```

## Linux

Установка Homebrew на Linux аналогична macOS, той же командой. После установки добавьте Homebrew в PATH:

```bash
(echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> ~/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```