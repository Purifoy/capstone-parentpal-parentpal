package team.parentpal.models;

import java.util.Date;

import jakarta.persistence.Entity;

@Entity
public class ConsumeModel extends EventModel {
  public ConsumeModel() {
  }

  public ConsumeModel(long childId, Date startTime, String notes) {
    super(childId, startTime, notes);
  }
}