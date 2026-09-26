# Simon

A Simon game I made while learning JavaScript. You can play it at https://diwakar767.github.io/simonGame.github.io/

The game flashes a color, then you press that pad. Next round it flashes two, then three, and it keeps adding one. You have to follow the same order. Miss one and the screen goes red, the wrong sound plays, and you start over from level 1.

Press any key to start. On a phone that does nothing, so tapping the title starts it too. I added the tap later, in September 2021, because the first version only listened for the keyboard.

There are four pads: green, red, yellow, and blue. Each pad has its own sound in the `sounds` folder.

The page is `index.html` and `styles.css`. The game itself is `index.js`, and it uses jQuery for the clicks and the key press. The title font is Press Start 2P.

To run it yourself, open `index.html` in a browser. The sounds load from the `sounds` folder next to the page.
