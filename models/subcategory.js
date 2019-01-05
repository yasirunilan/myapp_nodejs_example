'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  SubCategory.associate = function(models) {
    // associations can be defined here
      SubCategory.belongsTo(models.Category, { foreignKey: 'id'})
  };
  return SubCategory;
};