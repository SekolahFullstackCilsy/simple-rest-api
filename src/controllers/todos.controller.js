const db = require('../models')
const Todo = db.todos

const Op = db.sequelize.Op

exports.create = (req, res) => {
  const todo = {
    title: req.body.title,
    description: req.body.description,
  }

  Todo.create(todo).then(() => {
    res.status(201).send({
      success: true,
      message: 'Todo berhasil di tambah',
    })
  }).catch((err) => {
    res.status(500).send({
      success: false,
      message: err.message,
    })
  })
}

exports.findAll = (req, res) => {

  Todo.findAll({}).then((data) => {
    res.status(201).send({
      success: true,
      message: 'Todo berhasil di ambil',
      data: data
    })
  }).catch((err) => {
    res.status(500).send({
      success: false,
      message: err.message,
    })
  })
}