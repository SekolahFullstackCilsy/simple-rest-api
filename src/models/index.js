const dbConfig = require('../config/config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.todos = require('./todos.model')(sequelize, Sequelize)

module.exports = db