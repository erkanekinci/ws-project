package com.myproject.ws.auth;

import com.myproject.ws.shared.CurrentUser;
import com.myproject.ws.user.UserRepo;
import com.myproject.ws.user.Users;
import org.apache.catalina.User;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    UserRepo userRepo;


    private static final  Logger Log = LoggerFactory.getLogger(AuthController.class);
    @PostMapping("/api/1.0/auth")
    ResponseEntity<?> handleAuthentication(@CurrentUser Users user){
        String tc = user.getUsername();
        Users inDB = userRepo.findByTc(tc);

        Map<String, String > responseBody = new HashMap<>();
        responseBody.put("tc", inDB.getTc());
        responseBody.put("adsoyad", inDB.getAdsoyad());

        return ResponseEntity.ok(responseBody);
    }
}
