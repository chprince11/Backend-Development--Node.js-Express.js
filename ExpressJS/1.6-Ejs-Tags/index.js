import express from "express";

const app = express();
const port = 3000;

// EJS Tags

// <%= variable %> - JS Output
// <% console.log("Hello World")%> - JS Execute (No output )
// <%- <h1>Hello</h1> %> - Render HTML
// <%% %%> - show <% or %> - Escape ejs tags
// <%# %> - comment - Stop Execution
// <%- include("header.ejs") %> - Insert another EJS file

let bowl = ["Apple", "Oranges", "Pears"];
app.get("/", (req, res) => {
  res.render("index.ejs", {
    fruits: bowl,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
