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
app.use(express.static(path.resolve(__dirname,"../public")))

app.set("port", process.env.PORT || 9000);
app.listen(app.get("port"), () => console.log("listening on port http://localhost:" + app.get("port")))



app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(express.urlencoded({extended: true}))

app.use(cookie());

app.use(session({
    secret: "digital",
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false }
 })) 

 app.use(function(req, res, next) {
   req.session.emailLogin ? res.locals.emailLogin = req.session.emailLogin : null
  //res.locals.emailLogin = req.session.emailLogin;
  console.log(req.session.emailLogin)
    next();
  });

app.use(mainRoutes)