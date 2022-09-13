const mongoose= require('mongoose')

const connectionString="mongodb+srv://sohan:1234@expresstaskmanager.grxys5y.mongodb.net/EXPRESS-TASK-MANAGER?retryWrites=true&w=majority"

mongoose.connect(connectionString).then(()=>console.log("CONNECTION ESTABLISHED WITH DB")).catch(err=>console.log(err))