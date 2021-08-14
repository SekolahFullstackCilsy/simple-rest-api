const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const router = express.Router();

// controlers
const todos = require('./controllers/todos.controller')


// express json
app.use(express.json())

app.use(cors())

const db = require('./models')
db.sequelize.sync({ force: false }).then(() => {
  console.log('res-sycnc db')
})

router.post('/todos', todos.create)
router.get('/todos', todos.findAll)
router.get('/todos/:id', todos.findOne)

app.use('/api', router)

// hello api
// app.get('/api/hello', (req, res) => {
//   res.status(200).send({
//     success: true,
//     message: 'Hello API'
//   })
// })

// app.get('/api/sample-data', (req, res) => {
//   res.status(200).send({
//     success: true,
//     message: 'Data berhasil',
//     data: [
//       {id: 1, name: 'john', lastName: 'due'}
//     ]
//   })
// })

// // API TODO
// // get
// app.get('/api/todos', (req, res) => {
//   res.status(200).send({
//     success: true,
//     message: 'Todo berhasil di ambil',
//     data: db
//   })
// })

// // post
// app.post('/api/todos', (req, res) => {
//   const todo = {
//     id: db.length + 1,
//     title: req.body.title,
//     description: req.body.description,
//   }

//   db.push(todo)

//   res.status(201).send({
//     success: true,
//     message: 'Todo berhasil di tambah',
//   })
// })

// // GET By ID
// app.get('/api/todos/:id', (req, res) => {
//   const id = +req.params.id
//   db.find((todo) => {
//     if (todo.id === id) {
//       res.status(200).send({
//         success: true,
//         message: 'todo berhasil di ambil',
//         data: todo
//       })
//     }
//   })

//   res.status(404).send({
//     success: false,
//     message: 'todo tidak di temukan'
//   })
// })

// // DELETE
// app.delete('/api/todos/:id', (req, res) => {
//   const id = +req.params.id
//   const findTodoByIndex = db.findIndex(todo => todo.id === id)
//   db.splice(findTodoByIndex, 1)

//   res.status(200).send({
//     success: true,
//     message: 'todo berhasil di hapus',
//   })
// })

// // UPDATE
// app.put('/api/todos/:id', (req, res) => {
//   const id = +req.params.id
//   const findTodo = db.find(todo => todo.id === id)
//   const findTodoByIndex = db.findIndex(todo => todo.id === id)

//   if (!findTodo) {
//     res.status(404).send({
//       success: false,
//       message: 'todo tidak di temukan'
//     })
//   }

//   const updatedTodo = {
//     id: findTodo.id,
//     title: req.body.title || findTodo.title,
//     description: req.body.description || findTodo.description,
//   }

//   db.splice(findTodoByIndex, 1, updatedTodo)

//   res.status(201).send({
//     success: true,
//     message: 'Todo berhasil di update',
//   })
// })

app.listen(PORT, () => {
  console.log(`Server is Running in ${PORT}`)
})