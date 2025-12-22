# Активация всех расширений в Google Chrome

В последних версиях Google Chrome (и других браузеров на [Chromium](https://ru.wikipedia.org/wiki/Chromium)) расширения Manifest v2 были принудительно отключены. Самые популярные примеры — [uBlock Origin](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) и [Violentmonkey](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag). Для того, чтобы их активировать, нужно всегда запускать браузер с аргументом `--disable-features=ExtensionManifestV2Unsupported,ExtensionManifestV2Disabled`.

Откройте "Свойства" ярлыка Chrome (или к другому Chromium-браузеру). В конце поля "Объект" поставьте пробел и допишите
```
--disable-features=ExtensionManifestV2Unsupported,ExtensionManifestV2Disabled
```

Для редактирования свойств ярлыка, закреплённого на панели задач, [выполните команду](/windows/run):
```
explorer %AppData%\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar
```

В этой папке будут ярлыки, закрепленные на панели задач. Аналогично отредактируйте ярлык браузера там.