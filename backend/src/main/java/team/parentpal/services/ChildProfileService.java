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

    public ChildProfileModel editChildProfile(Long childProfileId, ChildProfileModel newChildProfile) {
        Objects.requireNonNull(childProfileId, "Child profile ID must not be null");
    
        // Get the existing child profile by ID
        Optional<ChildProfileModel> existingChildProfileOptional = childProfileRepository.findById(childProfileId);
    
        if (existingChildProfileOptional.isPresent()) {
            ChildProfileModel existingChildProfile = existingChildProfileOptional.get();
    
            // Update the existing child profile with the new data
            existingChildProfile.setName(newChildProfile.getName());
            existingChildProfile.setAge(newChildProfile.getAge());
            // Update other fields as needed
    
            // Save the updated child profile
            return childProfileRepository.save(existingChildProfile);
        } else {
            throw new IllegalArgumentException("Child profile not found with ID: " + childProfileId);
        }
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
}
