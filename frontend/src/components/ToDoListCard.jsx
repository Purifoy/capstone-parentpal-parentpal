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

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const encodedTodo = encodeURIComponent(newTodo); // Encode the task string
      axios
        .post("/api/todolist/addtask", encodedTodo)
        .then((response) => {
          console.log(response.data);
          setNewTodo("");
          fetchTodoList();
        })
        .catch((error) => console.error("Error adding todo:", error));
    }
  };

  const fetchTodoList = () => {
    axios
      .get("/api/todolist")
      .then((response) => {
        setTodos(response.data);
      })

      .catch((error) => console.error("Error fetching todo list:", error));
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
      <div className="max-w-sm border bg-[#D0E7D2] border-gray-300 rounded-lg shadow">
        <div className="flex items-center justify-center">
          <img
            className="flex flex-row align-middle"
            src="./src/assets/todo.png"
            alt="todo"
            style={{ height: "50px" }}
          />
        </div>
        <div className="p-5">
          <ul>
            {todos.map((todo) => (
              <li key={todo}>
                {todo}
                <button
                  onClick={() => handleDeleteTodo(todo)}
                  type="button"
                  className="h-5  flex flex-row items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Delete Task
                </button>
                <br />
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
              className="h-8 flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
