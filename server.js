const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//middleware for static files (css, images)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use((req, res) => {
  res.status(404).render("404");
});


app.listen(PORT,() => {
  console.log(`Server running at http:localhost:${PORT}`)
})