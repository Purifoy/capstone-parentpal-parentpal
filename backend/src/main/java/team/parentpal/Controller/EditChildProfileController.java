package team.parentpal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.parentpal.models.ChildProfileModel;
import team.parentpal.services.ChildProfileService;

@RestController
@RequestMapping("/api/editchildprofile")
public class EditChildProfileController {

    @Autowired
    private ChildProfileService childProfileService;

    // Endpoint to update an existing child profile
    @PutMapping("/{childProfileId}")
    public ResponseEntity<ChildProfileModel> editChildProfile(
            @PathVariable Long childProfileId,
            @RequestBody ChildProfileModel updatedProfile) {
        
        // Call service to update child profile
        ChildProfileModel updatedChildProfile = childProfileService.updateChildProfile(childProfileId, updatedProfile);
        
        return ResponseEntity.ok(updatedChildProfile);
    }
}
