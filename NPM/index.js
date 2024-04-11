/* 
npm ( Node Package Manager )
 npm comes pre-bundled with Node, so if have Node installed, you also have NPM installed.

 Step-1: Initialize npm ( npm init ) - configuration file will download 

 Step-2: npm install 'Name of the packages' or npm i 'package name'


*/

// var generateName = require('sillyname');

import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// ECMAScript Modules ( ESM )




