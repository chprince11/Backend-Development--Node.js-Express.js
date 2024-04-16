/* 
HTTP Requets:

GET - GET is a request a resource from the server it could be html file, text file, JS file, etc.

POST - Sending a resource to the server
PUT & PATCH - Both are update method. PUT when what to replace it completely.
PATCH - Patch up a resources
DELETE - delete resources ( request from client-side to server-side )

*/
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, response) =>{
    response.send("<h1>Hello, World!</h1>");
    // console.log(req.rawHeaders);
});

app.get("/about", (req, res) =>{
    res.send("<h1>About Me</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

// Endpoints: /destinaiton
