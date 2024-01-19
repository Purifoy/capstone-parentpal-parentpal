package team.parentpal.services;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.parentpal.models.ChildProfileModel;
import team.parentpal.repositories.ChildProfileRepository;

@Service
public class ChildProfileService {

    @Autowired
    private ChildProfileRepository childProfileRepository;

    public ChildProfileModel addChildProfile(ChildProfileModel childProfile) {
        Objects.requireNonNull(childProfile, "Child profile must not be null");

        return childProfileRepository.save(childProfile);
    }

    public void deleteChildProfile(Long childProfileId) {
        Objects.requireNonNull(childProfileId, "Child profile ID must not be null");
        childProfileRepository.deleteById(childProfileId);
    }

    public List<ChildProfileModel> getAllChildProfiles() {
        return (List<ChildProfileModel>) childProfileRepository.findAll();
    }

    public ChildProfileModel getChildProfileById(Long childProfileId) {
        Objects.requireNonNull(childProfileId, "Child profile ID must not be null");
        return childProfileRepository.findById(childProfileId).orElse(null);
    }

    public ChildProfileModel getChildProfileByName(String name) {
        Objects.requireNonNull(name, "Name must not be null");
        return childProfileRepository.findByName(name);
    }



    public ChildProfileModel updateChildProfile(Long childProfileId, ChildProfileModel updatedProfile) {
        Objects.requireNonNull(childProfileId, "Child profile ID must not be null");
        Objects.requireNonNull(updatedProfile, "Updated profile must not be null");

        ChildProfileModel existingProfile = childProfileRepository.findById(childProfileId)
                .orElseThrow(() -> new IllegalArgumentException("Child profile not found with ID: " + childProfileId));

        // Update the fields you want to allow modification
        existingProfile.setName(updatedProfile.getName());
        existingProfile.setAge(updatedProfile.getAge());
        
        // Save the updated profile
        return childProfileRepository.save(existingProfile);
    }

}
