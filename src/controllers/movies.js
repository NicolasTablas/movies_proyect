const db = require("../database/models/index")
const movies = require("../models/movies")
const session = require("express-session");
const {validationResult} = require("express-validator");

module.exports = {
    index: async (req, res) => {
        try {
            const movies = await db["movies"].findAll({raw : true},{include: ['movies_genre_id_foreign']});            
            res.render("movies", {
                styles: ["movies"],
                title: "peliculas",
                info: movies, userLog: req.session.userLog
            })  
        } catch (error) {
            console.log(error)
        }
    },
    detail: async (req, res) => {
        try {
            const movie = await db["movies"].findByPk(req.params.id,{include: [{association: "actor_movie_actor_id_foreign"}, 'movies_genre_id_foreign']});
            console.log(req.session.userLog)
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
        let errors = validationResult(req)
        try {
        const movieEdit = await db["movies"].findByPk(req.params.id)
        if(!errors.isEmpty()){
            res.render("edit", {
                errors: errors.mapped(),
                styles: ["edit"],
                title: "Actualizar",
                movie: movieEdit, userLog: req.session.userLog})
        } else {
            
                res.render("edit", {
                    errors: errors.mapped(),
                    styles: ["edit"],
                    title: "Actualizar",
                    movie: movieEdit, userLog: req.session.userLog})
            
        }
        } catch (error) {
            console.log(error)
        } 
        
    },

    saveEdit: async (req, res) => {
        const resultado = await movies.save(req.params.id,req.body)
        res.redirect(/movie/+ resultado)
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

    save: async (req, res) => {
        let errors = validationResult(req)
        console.log(errors)
        if(!errors.isEmpty()){
            res.render("create", {
                errors: errors.mapped(),
                styles: ["create"],
                title: "Actualizar",
                userLog: req.session.userLog})
        } else {
            try {
                const create = await movies.create(req.body)
                res.redirect("/")
            } catch (error) {
                console.log(error)
            } 
        }
        
    }
}

