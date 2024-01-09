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
        .catch((error) => console.error("Error adding todo:", error));
    }
  };

  const handleDeleteTodo = (task) => {
    axios
      .delete(`/api/todolist/deletetask/${encodeURIComponent(task)}`)
      .then((response) => {
        console.log(response.data);
        fetchTodoList(); //fetch the updated to do list
      })
      .catch((error) => console.error("Error deleting task: ", error));
  };

  return (
    <>
      <div className="max-w-sm border border-gray-300 rounded-lg shadow">
        <div className="flex items-center justify-center">
          <img
            className="flex flex-row align-middle"
            src="./src/assets/todo.png"
            alt="todo"
            style={{ height: "50px" }}
          />
        </div>
        <div className=" p-5">
          <ul>
            {todos.map((todo) => (
              <li key={todo}>
                {todo}
                <button
                  onClick={() => handleDeleteTodo(todo)}
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                >
                  Delete Task
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2">
            <input
              className="h-8 opacity-80 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />

            <button
              onClick={handleAddTodo}
              type="button"
              className="h-8 flex items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoListCard;
