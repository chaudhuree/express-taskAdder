
const express = require('express')
// router
const tasks = require('./routes/tasks')

const app = express()
const port = 3000


// database
const connectDB = require('./db/connect')

// app dependencies
app.use(express.json())

// app.get('/api/v1/tasks')          -get all the tasks
// app.post('/api/v1/tasks')         -create a new task
// app.post('/api/v1/tasks/:id')     -get single task
// app.post('/api/v1/tasks/:id')     -update task
// app.post('/api/v1/tasks/:id')     -delete task

// router
app.use('/api/v1/tasks', tasks)

// for other routes rather than the original one
app.all('*', (req, res) => res.send('you are on wrong way boy'))


const start = async () => {
  await connectDB()
app.listen(port, console.log(` server is running on port no ${port}`))
}

// call  start function
start()
