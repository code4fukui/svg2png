# svg2png

svg2png is converter from svg to png

```js
import { svg2png } from "https://code4fukui.github.io/svg2png/svg2png.js";

const svg = `<svg></svg>`;
const png = svg2png(svg);
console.log(png);
```

## how to build

```sh
deno run -A https://code4fukui.github.io/bin2js/bin2js.js ./MPLUS1p-Regular.ttf
```

## reference

- lib: [Resvg](https://github.com/thx/resvg-js)
- font: [M PLUS 1p - Google Fonts](https://fonts.google.com/specimen/M+PLUS+1p)
