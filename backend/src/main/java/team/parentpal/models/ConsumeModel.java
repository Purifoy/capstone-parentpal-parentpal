package team.parentpal.models;

import java.util.Date;

import jakarta.persistence.Entity;

@Entity
public class ConsumeModel extends EventModel {
  public ConsumeModel() {
  }

  public ConsumeModel(long childId, String notes) {
    super(childId, notes);
  }

  public ConsumeModel(long childId, Date startTime, String notes) {
    super(childId, startTime, notes);
  }

  public ConsumeModel(long childId, Date startTime, Date endTime, String notes) {
    super(childId, startTime, endTime, notes);
  }
}