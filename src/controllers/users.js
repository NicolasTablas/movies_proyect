const db = require("../database/models/index")
const users = require("../models/users")
const bcrypt = require("bcrypt");
const {validationResult} = require("express-validator");


module.exports = {
    register: async (req, res) => {
            res.render("register", {
                styles: ["register"],
                title: "Registro",
                userLog: req.session.userLog
            })  
    },
    show: async (req, res) => {
        try {
            const movie = await db["movies"].findByPk(req.params.id,{include: ['movies_genre_id_foreign']});
            res.render("detail", {
                styles: ["detail"],
                title: "pelicula",
                movie: movie, userLog: req.session.userLog     
            })
        } catch (error) {
            console.log(error)
        }
    }, 
    edit: async (req, res) => {
        try {
            const movieEdit = await db["movies"].findByPk(req.params.id)
            res.render("edit", {
                styles: ["edit"],
                title: "Actualizar",
                movie: movieEdit, userLog: req.session.userLog})
        } catch (error) {
            console.log(error)
        } 
    },

    saveEdit: async (req, res) => {
        const emailExist = await users.search("email",req.body.email)
        if (emailExist){
            return res.render("users/register",{
                styles: ["register"],
                errors:{
                    email:{msg: "El email ya existe",
                    },
                }
            })
        }
        users.create(req.body).then((r) => res.redirect("/login"))
    }, 

    destroy: async (req, res) => {
        const destroy = await db["movies"].destroy({
            where:{id: req.params.id}
        })
        res.redirect("/")
    }, 
    create: async (req, res) => {
        res.render("create", {
            styles: ["create"],
            title: "pelicula",
            userLog: req.session.userLog   
        })
    }, 

    saveUser: async (req, res) => {
        //const create = await users.create(req.body)
        let errors = validationResult(req)
        console.log(errors.mapped())
        if(!errors.isEmpty()){
            return res.render("register",{
                errors: errors.mapped(),
                userLog: req.session.userLog,
                styles: ["register"],
                oldData: req.body
            })
        } else {
        res.redirect("/")
        }
    },

    login: async (req, res) => {
        res.render("login", {
            styles: ["login"],
            title: "pelicula",
            userLog: req.session.userLog   
        })
    },

    access: async (req, res) => {
        const userLog = await users.search(req.body.email)
        let errors = validationResult(req)
       // console.log(errors.mapped()) 
        if(!errors.isEmpty()){
            return res.render("login",{
                errors: errors.mapped(),
                userLog: req.session.userLog,
                styles: ["register"],
                oldData: req.body
            })
        } else {
        
        if(userLog) {
            if (!bcrypt.compareSync(req.body.password, userLog.password)){
                res.redirect("/login")
            } else {
                req.session.userLog = userLog
                res.redirect("/")
                //res.send(validationResult)
            }
        } else {    
            
        }
    }
    },
    logout: (req,res) => {
        delete req.session.userLog
        return res.redirect('/')
    },


}

