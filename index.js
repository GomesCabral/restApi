const mongoose = require('mongoose');
const express = require('express');


const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/task').then(()=> console.log('conecao feito com sucesso!')).catch((err)=>console.error(err));

const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');

app.use(userRoutes);
app.use(taskRoutes);


const port = process.env.PORT || 4040;
app.listen(port, ()=> console.log(`server is running at port ${port}`));