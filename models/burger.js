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


  Burger.associate = function (models) {
    if (Burger.eaten===true) {
      Burger.belongsTo(models.Customer, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  }

  return Burger;
};