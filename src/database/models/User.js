module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('users', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rol: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
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
       timestamp: true,
        tableName: "users",
        paranoid: true
    })
    
    // movie.associate = function(models){
    //     movie.belongsTo(models.genres,{
    //       foreignKey: 'genre_id',
    //       as: 'movies_genre_id_foreign',
    //     });
    // }
    return user;
}
