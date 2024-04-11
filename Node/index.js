// console.log("Hello from Node!");
// Native node Modules: Starting toolset

// CJS (Comman JS pattern )
const fs = require('node:fs');

// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved!");
// });

// read from the file 
fs.readFile("./message.txt", "utf8",(err, data) => {
    if (err) throw err;
    console.log(data);
});


