#!/usr/bin/env node

const prettier = require("prettier");
const pug = require("pug");

var args = process.argv.slice(2);

html = pug.renderFile(args[0]);

console.log(prettier.format(html, { parser: "html" }));
