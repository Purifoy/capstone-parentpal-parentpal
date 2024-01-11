package team.parentpal;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import jakarta.annotation.Resource;
import team.parentpal.enums.RoleEnum;
import team.parentpal.models.ConsumeModel;
import team.parentpal.models.UserModel;
import team.parentpal.repositories.ConsumeRepository;
import team.parentpal.repositories.UserRepository;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private UserRepository userRepository;
    @Resource
    private ConsumeRepository consumeRepository;

    public Populator(UserRepository userRepository, ConsumeRepository consumeRepository) {
        this.userRepository = userRepository;
        this.consumeRepository = consumeRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Date date = new Date();
        UserModel user1 = new UserModel("Admin", "admin", "password", RoleEnum.ADMIN);
        ConsumeModel consume1 = new ConsumeModel(1, date, "notes");
        userRepository.save(user1);
        consumeRepository.save(consume1);

    }

}
