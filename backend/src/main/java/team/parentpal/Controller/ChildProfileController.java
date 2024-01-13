package team.parentpal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.parentpal.repositories.ChildProfileRepository;

@RestController
@RequestMapping("/child")
public class ChildProfileController {

    @Autowired
    private ChildProfileRepository childProfileRepository;

    @GetMapping("/all")
    public ResponseEntity<?> getAllChildProfiles() {
        return ResponseEntity.ok(childProfileRepository.findAll());
    }
    //
    // @PostMapping("/addchild")
    // public ResponseEntity<String> addChild(@RequestBody String child) {
    // childProfileService.addChildProfile(child);
    // return ResponseEntity.ok("Child added successfully");
    // }
    //
    // @DeleteMapping("/deletechild/{child}")
    // public ResponseEntity<String> deleteChild(@PathVariable String child) {
    // boolean deletionResult = childProfileService.deleteChildProfile(child);
    // if (deletionResult) {
    // return ResponseEntity.ok("Child deleted successfully");
    // } else {
    // return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Child not found");
    // }
    // }

}
