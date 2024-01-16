package team.parentpal.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@MappedSuperclass
public abstract class EventModel {
  @Id
  @GeneratedValue
  private Long id;

  private long childId;

  @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
  @Column(name = "start_time")
  @Temporal(TemporalType.TIMESTAMP)
  private Date startTime;

  private String notes;

  public EventModel() {
  }

  public EventModel(long childId, String notes) {
    this.childId = childId;
    this.startTime = new Date(System.currentTimeMillis());
    this.notes = notes;
  }

  public Long getId() {
    return id;
  }

  public long getChildId() {
    return childId;
  }

  public void setChildId(long childId) {
    this.childId = childId;
  }

  public Date getStartTime() {
    return startTime;
  }

  public void setStartTime(Date startTime) {
    this.startTime = startTime;
  }

  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }

}