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
  @Column(name = "event_id")
  private Long id;

  @Column(name = "child_id")
  private long childId;

  @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
  @Column(name = "start_time")
  @Temporal(TemporalType.TIMESTAMP)
  private Date startTime;

  @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
  @Column(name = "end_time")
  @Temporal(TemporalType.TIMESTAMP)
  private Date endTime;

  private String notes;

  private Double durationInMills;

  private int durationHours;
  private int durationMinutes;

  public EventModel() {
  }

  public EventModel(long childId, String notes) {
    this.childId = childId;
    this.startTime = new Date(System.currentTimeMillis());
    this.notes = notes;
  }

  public EventModel(long childId, Date startTime, String notes) {
    this.childId = childId;
    this.startTime = startTime;
    this.notes = notes;
  }
  
  public EventModel(long childId, Date startTime, Date endTime) {
    this.childId = childId;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public EventModel(long childId, Date startTime, Date endTime, String notes) {
    this.childId = childId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.notes = notes;
    this.durationInMills = calcDurationInMills();
    calcDurationHoursAndMinutes();
  }

  public Double calcDurationInMills() {
    Double result = null;
    if (this.endTime != null && this.startTime != null) {
      result = (double) (this.endTime.getTime() - this.startTime.getTime());
    }

    return result;
  }

  public void calcDurationHoursAndMinutes() {
    if (this.durationInMills != null) {
      this.durationHours = (int) (this.durationInMills / 3600000);
      this.durationMinutes = (int) ((this.durationInMills % 3600000) / 60000);
    }
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

  public Date getEndTime() {
    return endTime;
  }

  public void setEndTime(Date endTime) {
    this.endTime = endTime;
    durationInMills = calcDurationInMills();
  }

  public Double getDurationInMills() {
    return durationInMills;
  }

  public int getDurationHours() {
    return durationHours;
  }

  public int getDurationMinutes() {
    return durationMinutes;
  }

}