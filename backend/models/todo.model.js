import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
  }, {
    timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;