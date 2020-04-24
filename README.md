# roam-modifiers
 userscripts/custom CSS files for Roam Research

## Styles

The Bear theme, from https://github.com/apg-dev/roam-theme-bear, some colors have been tweaked.

## Tampermonkey scripts
Click on the raw github link to trigger a tampermonkey download.

### /Current Time format to AM/PM
#### time-format.js

I prefer my time to be in AM/PM, so this script just watches for keypress on a textarea, and if the time matches the current time (in 24 hour format),
it updates the value to AM/PM

Todo:
- Support multiple time values in the same text area
- Probably a clean way to look for textarea? (currently uses MutationObserver)

