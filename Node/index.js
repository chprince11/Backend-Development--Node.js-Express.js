// console.log("Hello from Node!");
// Native node Modules: Starting toolset

// CJS (Comman JS pattern )
const fs = require('node:fs');

// Inserted a file system (fs) modulue , then we call the method writeFile which have 3 parameters to pass on 1) the file name 2) data into that file 3) the callback function for handing the error

// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved!");
// });

// read from the file 
fs.readFile("./message.txt", "utf8",(err, data) => {
    if (err) throw err;
    console.log(data);
});


