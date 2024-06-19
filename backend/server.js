import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const todoRouter = require('./routes/todo');
app.use('/todos', todoRouter);

app.listen(port, () => {
    console.log('Server is running on port: ${port}');
});