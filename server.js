const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const server = http.createServer((req, res) => {
    let filepath;

    switch(req.url) {
        case "/":
            filepath = 'index.html';
            break;
        case "/contact":
            filepath = 'contact.html';
            break;
        case "/about":
            filepath = 'about.html';
            break;
        default:
            filepath = '404.html';
            break;
    }

    fs.readFile(path.join(__dirname, filepath), (err, content) => {
        if(err) {
            res.writeHead(500)
            res.end("Server Error")
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content)
        }
    })
})

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})