package team.parentpal.controllers;

import team.parentpal.enums.RoleEnum;

import jakarta.annotation.Resource;
import jakarta.servlet.http.*;
import team.parentpal.models.UserModel;
import team.parentpal.repositories.UserRepository;

public abstract class BaseController {
    @Resource
    private UserRepository userRepository;

    public BaseController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    protected boolean login(String userId, String password, HttpServletResponse reponse) {
        logout(reponse);
        UserModel user = userRepository.findByUserId(userId);
        boolean returnValue = false;
        if (user != null && user.getPassword().equals(password)) {
            Cookie jwtTokenCookie = new Cookie("user-id", "" + user.getId());
            Cookie nameCookie = new Cookie("username", user.getName());
            Cookie roleCookie = new Cookie("role", "" + user.getRole());
            reponse.addCookie(roleCookie);
            reponse.addCookie(nameCookie);
            reponse.addCookie(jwtTokenCookie);
            returnValue = true;
        }
        return returnValue;
    }

    protected void logout(HttpServletResponse reponse) {
        Cookie jwtTokenCookie = new Cookie("user-id", "null");
        Cookie nameCookie = new Cookie("username", "null");
        Cookie roleCookie = new Cookie("role", "null");
        jwtTokenCookie.setMaxAge(0);
        nameCookie.setMaxAge(0);
        roleCookie.setMaxAge(0);
        reponse.addCookie(roleCookie);
        reponse.addCookie(nameCookie);
        reponse.addCookie(jwtTokenCookie);
    }

    protected void checkAccess(RoleEnum userRole, HttpServletRequest request) throws Exception {
        RoleEnum role = getUserRole(request);
        if (userRole.compareTo(role) > 0) {
            throw new Exception("unauthorized access");
        }
    }

    protected RoleEnum getUserRole(HttpServletRequest request) throws Exception {
        RoleEnum returnValue = RoleEnum.NONE;
        Cookie[] cookies = request.getCookies();
        if (cookies == null) {
            throw new Exception("Please login to use this app");
        }
        for (int x = 0; x < cookies.length; x++) {
            if (cookies[x].getName().equals("role")) {
                String value = cookies[x].getValue();
                if (!value.equals("null")) {
                    returnValue = RoleEnum.valueOf(value);
                }
                break;
            }
        }
        return returnValue;
    }

}
