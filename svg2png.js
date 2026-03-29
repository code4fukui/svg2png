import { Resvg } from 'npm:@resvg/resvg-js'

const defaultOpts = {
  background: "#ffffff", //'rgba(238, 235, 230, .9)',
  fitTo: {
    mode: 'width',
    value: 1200,
  },
  font: {
    fontFiles: ['./MPLUS1p-Regular.ttf'], // Load custom fonts.
    loadSystemFonts: false, // It will be faster to disable loading system fonts.
    defaultFontFamily: 'M PLUS 1p',
  },
  logLevel: 'debug', // Default Value: error
};

export const svg2png = (svg, opts = defaultOpts) => {
  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const png = pngData.asPng();
  //console.info('Original SVG Size:', `${resvg.width} x ${resvg.height}`);
  //console.info('Output PNG Size  :', `${pngData.width} x ${pngData.height}`);
  return png;
};
