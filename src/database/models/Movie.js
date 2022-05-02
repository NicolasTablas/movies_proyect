module.exports = (sequelize, DataTypes) => {
    const movie = sequelize.define('movies', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        awards: {
            type: DataTypes.STRING,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        length: {
            type: DataTypes.STRING,
            allowNull: true
        },
        genre_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE,
        },
        
    },{
       timestamp: true,
        tableName: "movies",
        paranoid: true
    })
    
    movie.associate = function(models){
        movie.belongsTo(models.genres,{
          foreignKey: 'genre_id',
          as: 'movies_genre_id_foreign',
        });

        movie.belongsToMany(models.actors, {
            as:"actor_movie_actor_id_foreign",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
    }
    return movie;
}
