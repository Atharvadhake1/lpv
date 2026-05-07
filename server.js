const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {

    const filePath = path.join(__dirname, "DS.zip");

    res.download(filePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});