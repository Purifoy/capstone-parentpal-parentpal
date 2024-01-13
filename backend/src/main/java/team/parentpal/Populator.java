package team.parentpal;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import jakarta.annotation.Resource;

import team.parentpal.enums.RoleEnum;
import team.parentpal.models.ChildProfileModel;
import team.parentpal.models.UserModel;
import team.parentpal.repositories.ChildProfileRepository;
import team.parentpal.repositories.ConsumeRepository;
import team.parentpal.repositories.UserRepository;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private UserRepository userRepository;
    @Resource
    private ConsumeRepository consumeRepository;
    @Resource
    private ChildProfileRepository childProfileRepository;

    // public Populator(UserRepository userRepository, ConsumeRepository consumeRepository) {
    //     this.userRepository = userRepository;
    //     this.consumeRepository = consumeRepository;
    // }

    public Populator(UserRepository userRepository, ChildProfileRepository childProfileRepository) {
        this.userRepository = userRepository;
        this.childProfileRepository = childProfileRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        UserModel user1 = new UserModel("Admin", "admin", "power4321!", RoleEnum.ADMIN);
        userRepository.save(user1);
        UserModel user2 = new UserModel("Guest", "guest", "noPassword", RoleEnum.GUEST);
        userRepository.save(user2);

        ChildProfileModel child1 = new ChildProfileModel("Tim", "2 months");
        childProfileRepository.save(child1);
    }

}
