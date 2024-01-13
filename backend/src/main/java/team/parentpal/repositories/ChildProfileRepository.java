package team.parentpal.repositories;

import org.springframework.data.repository.CrudRepository;
import team.parentpal.models.ChildProfileModel;

public interface ChildProfileRepository extends CrudRepository<ChildProfileModel, Long> {
     ChildProfileModel findByName(String name);

}