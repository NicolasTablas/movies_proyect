module.exports = (sequelize, DataTypes) => {
    const genre = sequelize.define('genres', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ranking: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        
    },{
       timestamp: true,
        tableName: "genres",
    })

    genre.associate = function(models){
        genre.hasMany(models.movies,{
          foreignKey: 'genre_id',
          as: 'moviesGenre',
        });
    }

    return genre;
}