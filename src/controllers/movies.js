const db = require("../database/models/index")
const movies = require("../models/movies")
const session = require("express-session");

module.exports = {
    index: async (req, res) => {
        try {
            const movies = await db["movies"].findAll({raw : true});
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
        const create = await movies.create(req.body)
        res.redirect("/")
    }
}

