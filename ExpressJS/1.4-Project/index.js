import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
// import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

// Can also use express instead of importing bodyParser, it will work the same
app.use(express.urlencoded({extended:true}));

function passwordCheck(req, res, next) {
    const password = req.body['password'];
    if( password === "ILoveProgramming"){
        userIsAuthorised = true;
    }
    next();
};

app.use(passwordCheck);

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
}) ;

app.post("/check", (req,res) => {
    if(userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});