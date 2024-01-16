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
}
