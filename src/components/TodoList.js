import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { response } from "express";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/todos/')
        .then(response => {
          setTodos(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
      <div className="container">
        <h3>Todo List</h3>
        <ul className="list-group">
          {todos.map(todo => (
            <li key={todo._id} className="list-group-item">
              {todo.description}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;