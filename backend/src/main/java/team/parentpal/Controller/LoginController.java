package team.parentpal.controller;

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
        if (this.login(model.getUserName(), model.getPassword(), response)) {
            return ResponseEntity.ok("Login Complete");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid login");
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpServletResponse response) {
        this.logout(response);
        return ResponseEntity.ok("Logout complete");
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
