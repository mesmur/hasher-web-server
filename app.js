const express = require("express");
const bodyParser = require("body-parser");

const stringify = require("json-stable-stringify");
const crypto = require("crypto-js");

const PORT = process.env.PORT || 8001;

const app = express();
app.use(bodyParser.json());

app.post("/", (req, res) => {
    const stringified = stringify(req.body);
    const hash = crypto.SHA256(stringified).toString(crypto.HEX).toLowerCase();
    res.status(200).json({
        hash,
        stringified,
    });
});

app.get("/", (req, res) => {
    const hash = crypto
        .SHA256(stringify(req.body))
        .toString(crypto.HEX)
        .toLowerCase();
    res.status(200).json({
        hash,
    });
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));
