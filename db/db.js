require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  });
 
  
  const Post = sequelize.define('autenticação', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome_usuario:{
      type: Sequelize.STRING
    },
    senha:{
      type: Sequelize.STRING
    }
  })
  
  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Post: Post
  } 
