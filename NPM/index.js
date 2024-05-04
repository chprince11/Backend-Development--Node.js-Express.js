/* 
npm ( Node Package Manager ) 
- npm is like community tool library. It is open-source. 

- npm comes pre-bundled with Node, so if have Node installed, you also have NPM installed.

 Step-1: Initialize npm ( npm init ) - -configuration file will download ( package.json ). 
 - It basically brings up the initialization utility, which help us to create our config. file, which is called package.json.

 Step-2: Have to install the npm package 
 npm install 'Name of the packages' or npm i 'package name'

*/
// ** CJS module **

// var generateName = require('sillyname');
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

// ** ESM ECMAScript module **

// To use the ESM we have to go to the package.json and after the main comma have insert this key value pair ' "type": module, ', now you are good to use ESM

import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// ECMAScript Modules ( ESM )
