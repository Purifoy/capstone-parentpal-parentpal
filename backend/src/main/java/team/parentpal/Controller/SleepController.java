package team.parentpal.controller;

import java.util.List;
import java.util.Optional;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.parentpal.models.SleepModel;
import team.parentpal.repositories.SleepRepository;

@RestController
@RequestMapping("/api/sleep")
public class SleepController {
  @Autowired
  private SleepRepository sleepRepository;

  @PostMapping("/new")
  public @NonNull SleepModel addSleepEvent(@RequestBody SleepModel sleep) {
    return sleepRepository.save(sleep);
  }

  @PutMapping("/update/{sleepId}")
  public @NonNull SleepModel updateSleepEvent(@RequestBody SleepModel sleep) {
    return sleepRepository.save(sleep);
  }

  @GetMapping("/all")
  public Iterable<SleepModel> getAllSleepEvents() {
    return sleepRepository.findAll();
  }

  @GetMapping("/{id}")
  public Optional<SleepModel> getSleepEvent(@PathVariable Long id) {
    return sleepRepository.findById(id);
  }

  @GetMapping("/{startDateTime}/{endDateTime}")
  public List<SleepModel> getSleepEvent(@PathVariable Date startDateTime, @PathVariable Date endDateTime) {
    return sleepRepository.findBySleepDateRange(startDateTime, endDateTime);
  }

  @GetMapping("/child/{childId}")
  public List<SleepModel> getSleepEventByChild(@PathVariable Long childId) {
    return sleepRepository.findByChildId(childId);
  }
}
