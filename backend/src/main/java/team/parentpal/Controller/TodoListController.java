package team.parentpal.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import team.parentpal.services.TodoListService;

@RestController
@RequestMapping("/api/todolist")
public class TodoListController {

    @Autowired
    private TodoListService todoListService;

    @GetMapping
    public List<String> getTodoList() {
        return todoListService.getTodoList();
    }

    @PostMapping("/addtask")
    public String addTask(@RequestBody String task) {
        try {
            String decodedTask = URLDecoder.decode(task, "UTF-8");
            String formattedTask = decodedTask.replace("+", "").replace("=", "");
            todoListService.addTask(formattedTask);
            return "Task added successfully: " + formattedTask;
        } catch (UnsupportedEncodingException e) {
            return "Error decoding task: " + e.getMessage();
        }
    }
    
    @DeleteMapping("/deletetask/{addedTask}")
    public String deleteTask(@PathVariable String addedTask) {
        todoListService.deleteTask(addedTask);
        return "Task deleted successfully";

    }
}
