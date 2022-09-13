const getAllTasks=(req, res) =>{
  res.json({"respnse":'get all tasks'});
}
const createTask=(req, res) =>{
  res.json({"response":'create task'});
}
const getTask=(req, res) =>{
  res.json({"response":'get single task'});
}
const updateTask=(req, res) =>{
  res.json({"response":'update task'});
}
const deleteTask=(req, res) =>{
  res.json({"response":'delete task'});
}


module.exports={getAllTasks,createTask,deleteTask,getTask,updateTask}