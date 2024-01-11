package team.parentpal.services;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoListService {

    private final List<String> todoList = new ArrayList<>();

    public List<String> getTodoList() {
        return new ArrayList<>(todoList);
    }

    public void addTask(String task) {
        todoList.add(task);
    }

    public void deleteTask(String addedTask){
       todoList.remove(addedTask);
    }
}
