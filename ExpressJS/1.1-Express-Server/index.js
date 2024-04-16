/*

There are total of six steps to create a Server:
1) Create dir
2) Create index.js file
3) Initialise NPM
4) Install the Express package
5) Write Server application in index.js
6) Start Server ( node index.js )
- netstat -ano | findstr "LISTENING" ( TO check the active ports )

*/

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});