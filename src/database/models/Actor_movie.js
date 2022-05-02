module.exports = (sequelize, DataTypes) => {
    const actor_movie = sequelize.define('actor_movie', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        actor_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        movie_id: {
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
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE,
        },
        
    },{
       timestamp: false,
        tableName: "actor_movie",
        paranoid: true
    })
    
    // actor_movie.associate = function(models){
    //     actor_movie.hasMany(models.movies,{
    //       foreignKey: 'actor_id',
    //       as: 'actor_movie_actor_id_foreign',
    //     });
    // }
    // actor_movie.associate = function(models){
    //     actor_movie.belongsTo(models.movies,{
    //       foreignKey: 'actor_id',
    //       as: 'actor_movie_actor_id_foreign',
    //     });
    // }
    return actor_movie;
}
