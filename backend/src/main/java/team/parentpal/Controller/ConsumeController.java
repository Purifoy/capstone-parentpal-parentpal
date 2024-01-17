package team.parentpal.controller;

import java.util.List;
import java.util.Optional;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.parentpal.models.ConsumeModel;
import team.parentpal.repositories.ConsumeRepository;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/consume")
public class ConsumeController {
  @Autowired
  private ConsumeRepository consumeRepository;

  @PostMapping("/new")
  public @NonNull ConsumeModel addConsumeEvent(@RequestBody ConsumeModel consume) {
    return consumeRepository.save(consume);
  }

  @PutMapping("/update/{consumeId}")
  public @NonNull ConsumeModel updateconsumeEvent(@RequestBody ConsumeModel consume) {
    return consumeRepository.save(consume);
  }

  @GetMapping("/all")
  public Iterable<ConsumeModel> getAllConsumeEvents() {
    return consumeRepository.findAll();
  }

  @GetMapping("/{id}")
  public Optional<ConsumeModel> getConsumeEvent(@PathVariable Long id) {
    return consumeRepository.findById(id);
  }

  @GetMapping("/{startDateTime}/{endDateTime}")
  public List<ConsumeModel> getConsumeEvent(@PathVariable Date startDateTime, @PathVariable Date endDateTime) {
    return consumeRepository.findByConsumeDateRange(startDateTime, endDateTime);
  }

  @GetMapping("/child/{childId}")
  public List<ConsumeModel> getConsumeEventByChild(@PathVariable Long childId) {
    return consumeRepository.findByChildId(childId);
  }
}
