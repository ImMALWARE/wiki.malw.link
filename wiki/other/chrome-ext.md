# Активация всех расширений в Google Chrome (в старой версии)

::: warning Внимание
### В Chrome, начиная с 149-151 версии, MV2 полностью вырезан из кодовой базы Chromium, даже если включать различные флаги и активацию групповой политики.
А также Google [объявила](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline#aug_31st_2026_all_remaining_manifest_v2_extensions_removed_from_the_chrome_web_store) о том, что расширения на базе Manifest V2 будут полностью удалены с Chrome Web Store 31 августа 2026 года. Для того чтобы продолжить использование расширений на базе MV2, нужно переходить на другие браузеры: Firefox и браузеры на его основе (Zen, Waterfox, Librewolf, Floorp), браузеры на базе Chromium, которые все ещё должны поддерживать MV2 (из известных Helium, Brave).
Edge и Opera тоже прекратят поддержку MV2 следом за Chrome.
:::

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
