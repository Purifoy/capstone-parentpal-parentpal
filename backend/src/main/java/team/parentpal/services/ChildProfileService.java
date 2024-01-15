package team.parentpal.services;


import java.util.List;
import java.util.Objects;

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
}
