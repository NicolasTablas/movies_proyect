const db = require("../database/models/index")
const bcrypt = require("bcrypt");

const modelUser = {
    generate: data => Object({
        name: data.name,
        email: data.email,
        password: bcrypt.hashSync(data.password, 10),
        rol: 0
    }),

    create: data => db["users"].create(modelUser.generate(data)).then((resultado) => resultado),

    search: email => db["users"].findOne({
        where:{
            email: email
        }
    })

}


module.exports = modelUser;
