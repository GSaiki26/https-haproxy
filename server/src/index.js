// Libs
const fs = require("fs");
const https = require("https");

const express = require("express");

// Data
const app = express();

app.get("/", (req, res) => {
    console.log(`Request from: ${req.ip}`);
    res.status(200).send("OK");
});

const server = https.createServer({
    cert: fs.readFileSync("./certs/ca.crt"),
    key: fs.readFileSync("./certs/ca.crt.key"),
    ca: fs.readFileSync("./certs/ca.crt")
}, app);

server.listen(8000, ()=> {
    console.log("The server is online on port: 8000");
});