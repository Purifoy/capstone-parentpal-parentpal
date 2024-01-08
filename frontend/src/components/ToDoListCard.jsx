import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function ToDoListCard() {
  //Store existing todo list
  const [todos, setTodos] = useState([]);

  //Store new to do input
  const [newTodo, setNewTodo] = useState("");

  // Fetch the todo list from the API on component mount
  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = () => {
    axios
      .get("/api/todolist")
      .then((response) => {
        setTodos(response.data);
      })

      .catch((error) => console.error("Error fetching todo list:", error));
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      axios
        .post("/api/todolist/addtask", newTodo)
        .then((response) => {
          console.log(response.data);
          setNewTodo("");
          fetchTodoList();
        })

        .const((error) => console.error("Error adding todo:", error));
    }
  };

  const handleDeleteTodo = (index) => {
    axios
      .delete(`/api/todolist/deletetask/${index}`)
      .then((response) => {
        console.log(response.data);
        fetchTodoList(); //fetch the updated to do list
      })
      .catch((error) => console.error("Error deleting task: ", error));
  };

  return (
    <div>
      <h1 className="text-2xl font-[Roboto]">Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => handleDeleteTodo(index)}
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default ToDoListCard;
