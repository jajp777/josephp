#!/usr/bin/env node
const clearConsole = require('clear-any-console');
const pkgJSON = require("./package.json");
const welcome = require('cli-welcome');
// Clears the console.
clearConsole();
// console.log(`
// NAME: ${pkgJSON.name}
// VERSION: ${pkgJSON.version}
// DESCRIPTION: ${pkgJSON.description}
// `)
welcome({
    title: pkgJSON.name,
    tagLine: `Howdy, nice to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
})
console.log(`Joseph Pradeep  hello3

Award-winning Open-source enginner and developer.

`);