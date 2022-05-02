const {body} = require("express-validator")

module.exports =  {
    
    validateRegister:  [
        body("email").isEmail().withMessage("El email no es valido"),
        body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
        body("name").isLength({min: 1}).withMessage("El nombre es obligatorio"),
        // body("apellido").isLength({min: 1}).withMessage("El apellido es obligatorio"),
    ],
    validateLogin: [
        body("email").isEmail().withMessage("El email no es valido"),
        //body("password").equals(body("password2")).withMessage("Las contraseñas deben coincidir"),
        body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
        // body("nombre").isLength({min: 1}).withMessage("El nombre es obligatorio"),
        // body("apellido").isLength({min: 1}).withMessage("El apellido es obligatorio"),
    ],
    validateCreate: [
        body("title").isLength({min: 1}).withMessage("El titulo no puede quedar vacio"),
        body("rating").isLength({min: 1}).withMessage("El rating no puede quedar vacio").isNumeric().withMessage("El campo rating solo admite numeros"),
        body("awards").isLength({min: 1}).withMessage("Los Awards no pueden quedar vacios").isInt().withMessage("El campo rating solo admite numeros enteros"),
        body("release_date").isLength({min: 1}).withMessage("El estreno no puede quedar vacio"),
        body("genre_id").isLength({min: 1}).withMessage("El ID del genero no puede quedar vacio")
        // body("nombre").isLength({min: 1}).withMessage("El nombre es obligatorio"),
        // body("apellido").isLength({min: 1}).withMessage("El apellido es obligatorio"),
    ]
}

