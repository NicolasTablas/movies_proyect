const {Router} = require("express");
const router = Router();
const {body} = require("express-validator")
const {index, detail, edit, save, saveEdit, destroy, create} = require("../controllers/movies");
const {register, saveUser, login, access, logout} = require("../controllers/users");
const checkAdmin = require('../middleware/checkAdmin')
const {validateRegister, validateLogin, validateCreate} = require('../middleware/validation')


// router.get("/", index)

// router.get("/register", register)

// router.post("/register", validateRegister, saveUser)

// router.get("/login", login)

// router.get("/logout", logout)

// router.post("/login", validateLogin, access)

// router.get("/movie/edit/:id",checkAdmin, edit)

// router.get("/movie/create",checkAdmin,  create)

// router.post("/movie/create",checkAdmin, validateCreate, save)

// router.post("/movie/edit/:id",checkAdmin, validateCreate, saveEdit)

// router.post("/movie/delete/:id",checkAdmin, destroy)

// router.get("/movie/:id", detail)

router.get("/", index)

router.get("/register", register)

router.post("/register", validateRegister, saveUser)

router.get("/login", login)

router.get("/logout", logout)

router.post("/login", access)

router.get("/movie/edit/:id", edit)

router.get("/movie/create",  create)

router.post("/movie/create", validateCreate, save)

router.post("/movie/edit/:id", validateCreate, saveEdit)

router.post("/movie/delete/:id", destroy)

router.get("/movie/:id", detail)

module.exports = router;

