const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

//middleware for static files (css, images)
app.use(express.static(__dirname));

//routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"))
})

//404 handler

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"))
})

// server listen

app.listen(PORT, (
  console.log(`Server running at http:localhost:${PORT}`)
))