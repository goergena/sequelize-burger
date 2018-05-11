module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
    
    });
    return Customer;
  };