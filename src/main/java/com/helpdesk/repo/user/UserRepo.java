package com.helpdesk.repo.user;

import com.helpdesk.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, String> {
    User findByName(String name);
}
