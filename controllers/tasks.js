const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error')

//docs: create a task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

//docs: get single tasks by id
//next is also passed to throw any kind of error 
const getTask = asyncWrapper(async (req, res, next) => {

  //note: rename id to taskID 

  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {

    //docs: 
    //next() is used to send custom error 
    //createCustomError is a custom function to create custom error where message and status code is passed

    //imp: return is used to stop the execution of the function 
    //if we donot use return then we have to throw error by res.code manner
    // res.status(404).json({ message: `No task with id : ${taskID}` })
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})

// docs: get all tasks 
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

// docs: delete task 
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

// docs: update task
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    // overwrite: true
  })

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})
module.exports = { getAllTasks, createTask, deleteTask, getTask, updateTask, deleteTask }


// dummy code
// const getAllTasks=(req, res) =>{
//   res.json({"response":'get all tasks'});
// }
// const createTask=(req, res) =>{
//   res.json({"response":'create task'});
// }
// const getTask=(req, res) =>{
//   res.json({"response":'get single task'});
// }
// const updateTask=(req, res) =>{
//   res.json({"response":'update task'});
// }
// const deleteTask=(req, res) =>{
//   res.json({"response":'delete task'});
// }