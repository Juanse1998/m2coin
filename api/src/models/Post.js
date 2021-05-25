const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
		"post",
		{
			fecha: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			fechaMod: {
				type: DataTypes.STRING,
			},
			titulo: {
				type: DataTypes.STRING,
			},
			descripcionCorta: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			descripcionLarga: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			ubicacion: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			precio: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			stock: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			imagen: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};




