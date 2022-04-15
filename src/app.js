const path = require("path");
const express = require("express");
const method = require("method-override");
const app = express();
const cookie = require("cookie-parser");
const session = require("express-session");
const bp = require('body-parser');

const mainRoutes = require("./routes/index")

app.set("view engine", "ejs");
app.set("views" , path.resolve(__dirname, "views"));

app.set("port", process.env.PORT || 9000);
app.listen(app.get("port"), () => console.log("listening on port http://localhost:" + app.get("port")))

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(express.urlencoded({extended: true}))

app.use(mainRoutes)