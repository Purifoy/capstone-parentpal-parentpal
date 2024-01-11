package team.parentpal;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import jakarta.annotation.Resource;
import team.parentpal.enums.RoleEnum;
import team.parentpal.models.UserModel;
import team.parentpal.repositories.UserRepository;

@Component
public class Populator implements CommandLineRunner {

     @Resource
    private UserRepository userRepository;

    public Populator(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        UserModel user1 = new UserModel("Admin", "admin", "password", RoleEnum.ADMIN);
        userRepository.save(user1);

    }

}
