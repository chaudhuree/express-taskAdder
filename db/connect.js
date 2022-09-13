const mongoose = require('mongoose')

const connectionString = "mongodb+srv://sohan:1234@expresstaskmanager.grxys5y.mongodb.net/EXPRESS-TASK-MANAGER?retryWrites=true&w=majority"

// second parameter for get relieve from console depricative notice
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
.then(() => console.log("CONNECTION ESTABLISHED WITH DB"))
.catch(err => console.log(err))