const router = require('express').Router();
let Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
    Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const description = req.body.description;
    const completed = Boolean(req.body.completed);

    const newTodo = new Todo({
        description,
        completed,
    });

    newTodo.save()
    .then(() => res.json('Todo added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;