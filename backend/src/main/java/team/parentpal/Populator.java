package team.parentpal;

import java.sql.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import jakarta.annotation.Resource;

import team.parentpal.enums.RoleEnum;
import team.parentpal.models.ChildProfileModel;
import team.parentpal.models.SleepModel;
import team.parentpal.models.UserModel;
import team.parentpal.repositories.ChildProfileRepository;
import team.parentpal.repositories.ConsumeRepository;
import team.parentpal.repositories.SleepRepository;
import team.parentpal.repositories.UserRepository;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private UserRepository userRepository;
    @Resource
    private ConsumeRepository consumeRepository;
    @Resource
    private ChildProfileRepository childProfileRepository;
    @Resource
    private SleepRepository sleepRepository;

    // public Populator(UserRepository userRepository, ConsumeRepository
    // consumeRepository) {
    // this.userRepository = userRepository;
    // this.consumeRepository = consumeRepository;
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

        ChildProfileModel child1 = new ChildProfileModel("Elsa", "2 months");
        childProfileRepository.save(child1);
        Date dateTimeNow = new Date(System.currentTimeMillis());
        Date dateTimeTomorrow = new Date(System.currentTimeMillis() + 86400000);
        SleepModel sleep1 = new SleepModel(child1.getId(), dateTimeNow,
                dateTimeTomorrow, "Nap");
        sleepRepository.save(sleep1);
    }

}
