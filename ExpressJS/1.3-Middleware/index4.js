import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

var fullName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function fullNameGenerator(req, res, next) {
  console.log(req.body);
  fullName = req.body["firstname"] + " " + req.body["lastname"];
  next();
}

app.use(fullNameGenerator);

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, response) => {
  response.send(`<h1> Your full name is: ${fullName}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
