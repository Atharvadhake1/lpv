const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {

    const filePath = path.join(__dirname, "DS.zip");

    res.download(filePath);
});

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});