package team.parentpal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.micrometer.common.lang.NonNull;
import jakarta.servlet.http.HttpServletRequest;
import team.parentpal.enums.RoleEnum;
import team.parentpal.models.ChildProfileModel;
import team.parentpal.repositories.ChildProfileRepository;
import team.parentpal.services.ChildProfileService;

@RestController
@RequestMapping("/api/childprofile")
public class ChildProfileController {

    @Autowired
    private ChildProfileService childProfileService;
    private ChildProfileRepository childProfileRepository;

    // Endpoint to add a child profile
    @PostMapping
    public ResponseEntity<ChildProfileModel> addChildProfile(@RequestBody ChildProfileModel childProfile) {
        // Call service to add a child profile
        ChildProfileModel createdProfile = childProfileService.addChildProfile(childProfile);
        return ResponseEntity.ok(createdProfile);
    }

    // Endpoint to retrieve a child profile by ID
    @GetMapping("/{childProfileId}")
    public ResponseEntity<ChildProfileModel> getChildProfile(@PathVariable Long childProfileId) {
        // Call service to retrieve a child profile
        ChildProfileModel childProfile = childProfileService.getChildProfileById(childProfileId);
        return ResponseEntity.ok(childProfile);
    }

    // Endpoint to delete a child profile by ID
    @DeleteMapping("/{childProfileId}")
    public ResponseEntity<Void> deleteChildProfile(@PathVariable Long childProfileId) {
        // Call service to delete a child profile
        childProfileService.deleteChildProfile(childProfileId);
        return ResponseEntity.noContent().build();
    }

    // Endpoint to retrieve all child profiles
    @GetMapping("/all")
    public ResponseEntity<List<ChildProfileModel>> getAllChildProfiles() {
        List<ChildProfileModel> childProfiles = childProfileService.getAllChildProfiles();
        return ResponseEntity.ok(childProfiles);
    }
}
