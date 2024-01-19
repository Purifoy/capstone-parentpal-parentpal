package team.parentpal.repositories;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.CrudRepository;

import team.parentpal.models.ConsumeModel;

public interface ConsumeRepository extends CrudRepository<ConsumeModel, Long> {

  Optional<ConsumeModel> findById(Long id);

  @Query("SELECT c FROM ConsumeModel c WHERE c.startTime BETWEEN :startDateTime AND :endDateTime")
  List<ConsumeModel> findByConsumeDateRange(@Param("startDateTime") Date startDateTime,
      @Param("endDateTime") Date endDateTime);

  @Query("SELECT c FROM ConsumeModel c WHERE c.childId = :childId ORDER BY c.startTime DESC")
  List<ConsumeModel> findByChildId(@Param("childId") Long childId);
}
