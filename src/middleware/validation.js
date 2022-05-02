const {body} = require("express-validator")

const validation = {
    validateRegister: [
        body("email").isEmail().withMessage("El email no es valido"),
        body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
        // body("nombre").isLength({min: 1}).withMessage("El nombre es obligatorio"),
        // body("apellido").isLength({min: 1}).withMessage("El apellido es obligatorio"),
    ],
    validateLogin: [
        body("email").isEmail().withMessage("El email no es valido"),
        body("password").isLength({min: 2}).withMessage("La contraseña debe tener al menos 6 caracteres"),
        // body("nombre").isLength({min: 1}).withMessage("El nombre es obligatorio"),
        // body("apellido").isLength({min: 1}).withMessage("El apellido es obligatorio"),
    ],
    validateCreate: [
        //body("email").isEmail().withMessage("El email no es valido"),
        //body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
        // body("nombre").isLength({min: 1}).withMessage("El nombre es obligatorio"),
        // body("apellido").isLength({min: 1}).withMessage("El apellido es obligatorio"),
    ]
}

module.exports = validation