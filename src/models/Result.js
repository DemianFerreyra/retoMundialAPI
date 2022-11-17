const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("result", {
    userUbication: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    team1Result: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team2Result: {
        type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
