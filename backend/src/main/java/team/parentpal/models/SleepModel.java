package team.parentpal.models;

import java.util.Date;

import jakarta.persistence.Entity;

@Entity
public class SleepModel extends EventModel {
  public SleepModel() {
  }

  public SleepModel(long childId, String notes) {
    super(childId, notes);
  }

  public SleepModel(long childId, Date startTime, String notes) {
    super(childId, startTime, notes);
  }

  public SleepModel(Long childId, Date startTime, Date endTime, String notes) {
    super(childId, startTime, endTime, notes);
  }
  
  public SleepModel(Long childId, Date startTime, Date endTime) {
    super(childId, startTime, endTime);
  }
}
