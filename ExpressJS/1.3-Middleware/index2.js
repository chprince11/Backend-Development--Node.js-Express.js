import express from "express";

import morgan from "morgan";

// Logging middleware is morgan
const app = express();
const port = 3000;

app.use(morgan("combined")); //Other predefined formats: common, dev, short, tiny,

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
