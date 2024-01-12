package team.parentpal.models;
import java.util.Date;

import jakarta.persistence.Entity;

@Entity
public class SleepModel extends EventModel{
  public SleepModel() {
  }

  public SleepModel(long childId, Date startTime, String notes) {
    super(childId, startTime, notes);
  }
}
