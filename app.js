const express = require("express");
const bodyParser = require("body-parser");

const stringify = require("json-stable-stringify");
const crypto = require("crypto-js");

const app = express();
app.use(bodyParser.json());

app.post("/", (req, res) => {
    const hash = crypto
        .SHA256(stringify(req.body))
        .toString(crypto.HEX)
        .toLowerCase();
    res.status(200).json({
        hash,
    });
});

app.get("/", (req, res) => {
    console.log("the request body is ", req.body);
    const hash = crypto
        .SHA256(stringify(req.body))
        .toString(crypto.HEX)
        .toLowerCase();
    res.status(200).json({
        hash,
    });
});

app.listen(8001, () => console.log("App is listening on port 8001."));
