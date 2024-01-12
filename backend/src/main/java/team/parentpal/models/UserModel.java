package team.parentpal.models;

import jakarta.persistence.*;
import team.parentpal.enums.RoleEnum;

@Entity
public class UserModel {
    @Id
    @GeneratedValue
    private long id;

    // @OneToMany
    // private Long[] authorizedUsersForSharing;
    //
    // @ManyToMany
    // private Long[] usersAuthorizationForViewing;

    private String name;
    private String userId;
    private String password;
    private RoleEnum role;

    public UserModel() {
    }

    public UserModel(String name, String userId, String password, RoleEnum role) {
        this.name = name;
        this.userId= userId;
        this.password = password;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public RoleEnum getRole() {
        return role;
    }

    public void setRole(RoleEnum role) {
        this.role = role;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

}
