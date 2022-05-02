const db = require("../database/models/index")

const modelMovie = {
    save: async (id, data) => {
        //console.log(data)
        const resultado = await db["movies"].update(
            {
            id: data.id,
            title: data.title,
            awards: data.awards,
            rating: data.rating,
            length: data.length,
            genre_id: data.genre_id,
            },{
                where: {id: id}
            })
            console.log(resultado)
            return data.id
    },
    generate: data => Object({
        title: data.title,
        awards: data.awards,
        release_date: data.release_date,
        rating: data.rating,
        length: data.length,
        genre_id: data.genre_id,
    }),

    create: data => db["movies"].create(modelMovie.generate(data)).then((resultado) => resultado),



}


module.exports = modelMovie;
