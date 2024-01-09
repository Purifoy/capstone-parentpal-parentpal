 package team.parentpal.repositories;
 import org.springframework.data.repository.CrudRepository;
 import team.parentpal.models.UserModel;

 
 public interface UserRepository extends CrudRepository<UserModel, Long> {
     UserModel findByUserId(String userId);
 }