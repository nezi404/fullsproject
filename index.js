

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hellowolrd");
})
 app.listen(300)
