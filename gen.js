const minifyPreset = require('babel-preset-minify');
const babel = require('@babel/core');
const fs = require('fs');
const args = process.argv.slice(2);
if (args.length !== 2) {
  throw new Error('Must pass two arguments, input and output filename');
}

const { code } = babel.transformSync(fs.readFileSync(args[0]), {
  minified: true,
  sourceType: "module",
  configFile: false,
  presets: [[minifyPreset]]
});

fs.writeFileSync(args[1], code);
