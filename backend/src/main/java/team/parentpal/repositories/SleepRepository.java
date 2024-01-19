package team.parentpal.repositories;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import org.springframework.transaction.annotation.Transactional;
import team.parentpal.models.SleepModel;


public interface SleepRepository extends CrudRepository<SleepModel, Long> {

  Optional<SleepModel> findById(Long id);

  @Query("SELECT c FROM SleepModel c WHERE c.startTime BETWEEN :startDateTime AND :endDateTime")
  List<SleepModel> findBySleepDateRange(@Param("startDateTime") Date startDateTime,
      @Param("endDateTime") Date endDateTime);

  @Query("SELECT c FROM SleepModel c WHERE c.childId = :childId ORDER BY c.startTime DESC")
  List<SleepModel> findByChildId(@Param("childId") Long childId);   
}