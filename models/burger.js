module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    eaten: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};