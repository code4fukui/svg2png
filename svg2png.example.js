import { svg2png } from "./svg2png.js";

const svg = await Deno.readFile('./test.svg');

const t = performance.now();

const png = svg2png(svg);

console.info('✨ Done in', performance.now() - t, 'ms');

await Deno.writeFile('./test.png', png);
