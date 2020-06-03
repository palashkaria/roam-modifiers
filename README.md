# roam-modifiers
 userscripts/custom CSS files for Roam Research

## Styles

The mappletons-andy theme (thanks to [@mapplestons](https://twitter.com/Mappletons) and [@vandermerwed](https://twitter.com/vandermerwed) :)

I have some more modifications applied on top of it. 

- a viewdata square (⌗) for block refs 🚀
    - Seems appropriate, as # evolved from ⌗ :)


- Sidebar overlay/slide in - don't move content on hover 🔥
  - this is pretty hacky, but I am going to keep this updated if it breaks. I need it too much.
  
  
- Better scrollbars 🤓
  - (increase size on hover, have space around them (like OSX!))
  - This uses a tiny border CSS hack I learned, using border to create the space

- Other modifications are mostly color/width changes :)

See images below

Sidebar overlay (no content push)          |  Block ref (⌗)
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/2976363/83698596-74ae5300-a61f-11ea-9c2a-1078aaa6070e.png)  | ![image](https://user-images.githubusercontent.com/2976363/83698671-ae7f5980-a61f-11ea-93b1-fdc2e66312f8.png)


I use [stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en) for applying these


## Tampermonkey scripts
Click on the raw github link to trigger a tampermonkey download.

### /Current Time format to AM/PM
#### time-format.js

I prefer my time to be in AM/PM, so this script just watches for keypress on a textarea, and if the time matches the current time (in 24 hour format),
it updates the value to AM/PM

Todo:
- Support multiple time values in the same text area
- Probably a clean way to look for textarea? (currently uses MutationObserver)


------

The old theme I used was from https://github.com/apg-dev/roam-theme-bear, with colors have been tweaked. It does not work very well & has been removed
