//Modelo acrescentou a linha 5 unique sempre que repeti isso 
//irá dar erro.
module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })