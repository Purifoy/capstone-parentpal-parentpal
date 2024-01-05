package team.parentpal.controllers;

import java.net.http.HttpResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletResponse;
import team.parentpal.repositories.UserRepository;
import team.parentpal.models.UserModel;

@RestController
@RequestMapping("/api")
public class LoginController extends BaseController {

    @Resource
    private UserRepository userRepository;

    public LoginController(UserRepository userRepository) {
        super(userRepository);
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> postLogin(@RequestBody UserModel model, HttpServletResponse response) {
        if (this.login(model.getUserId(), model.getPassword(), response)) {
            return ResponseEntity.ok("Login Complete");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid login");
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpServletResponse response) {
        this.logout(response);
        return ResponseEntity.ok("Logout complete");
    }

    @PostMapping("/createUser")
    public ResponseEntity<?> postCreateUser(@RequestBody UserModel model, HttpServletResponse response) {
        // if user exists, return error
        if (userRepository.findByUserId(model.getUserId()) != null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User already exists");
        }
        // if user does not exist, create user and login
        userRepository.save(model);
        if (this.login(model.getUserId(), model.getPassword(), response)) {
            return ResponseEntity.ok("Login Complete");
        }
        // if login fails, return error
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid login");
    }

    @GetMapping()
    public String getMethodName() {
        return "Hello World";
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUser() {
        return ResponseEntity.ok(userRepository.findAll());
    }

}
