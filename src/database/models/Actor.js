module.exports = (sequelize, DataTypes) => {
    const actor = sequelize.define('actors', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        favorite_movie_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // deletedAt1: {
        //     field: 'deleted_at1',
        //     type: DataTypes.DATE,
        // },
        
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
        tableName: "actors",
    })

    actor.associate = function(models){
        actor.belongsToMany(models.movies,{
            as: 'actor_movie_movie_id_foreign',
            through: "actor_movie",
            foreignKey: 'movie_id',
            otherKey: "actor_id",
            timestamp: false
        });
    }

    return actor;
}