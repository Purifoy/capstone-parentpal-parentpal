package team.parentpal.Controller;

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
        todoListService.addTask(task);  
        return "Task added successfully: " + task;
    }
}
