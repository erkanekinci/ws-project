package com.myproject.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    UserRepo userRepo;

    PasswordEncoder passwordEncoder;
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public void save(Users users) {
        users.setPassword(this.passwordEncoder.encode(users.getPassword()));
        userRepo.save(users);
    }
}
