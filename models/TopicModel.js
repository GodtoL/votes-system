const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexion.js'); // Importa la conexión

const Topic = sequelize.define('Topic', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    votes: {
        type: DataTypes.INTEGER,
    }
});

// Sincronizar el modelo con la base de datos
sequelize.sync()
    .then(() => {
        console.log('Modelo sincronizado con la base de datos');
    })
    .catch(err => {
        console.error('Error sincronizando el modelo', err);
    });

module.exports = Topic;
