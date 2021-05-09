const express = require('express');
const path = require("path");
const { send } = require('process');
const { stringify } = require('querystring');
const internal = require('stream');
const app = express();

const router = express.Router();

const port = '3000';
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

router.get("/", (req, res) => res.sendFile(path.resolve("./index.html")));
router.get("/home", (req, res) => res.sendFile(path.resolve("./home.html")));


module.exports = router;
var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));
app.use(router);
app.use(express.json());
app.listen(port, () => console.log(`server running on http://localhost:${port}`));


