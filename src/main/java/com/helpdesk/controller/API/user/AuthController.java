package com.helpdesk.controller.API.user;

import com.helpdesk.domain.user.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth/")
public class AuthController {
    @GetMapping("profile")
    public User profile(@AuthenticationPrincipal User user) {
        return user;
    }
}
