const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("simpleresult", {
    winner: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
  });
};
