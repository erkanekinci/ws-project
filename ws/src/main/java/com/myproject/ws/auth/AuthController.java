package com.myproject.ws.auth;

import com.myproject.ws.error.ApiError;
import com.myproject.ws.user.UserRepo;
import com.myproject.ws.user.Users;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    UserRepo userRepo;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    private static final  Logger Log = LoggerFactory.getLogger(AuthController.class);
    @PostMapping("/api/1.0/auth")
    ResponseEntity<?> handleAuthentication(@RequestHeader (name = "Authorization" , required = false) String auth){
        if (auth == null){
            ApiError error = new ApiError(401,"Giriş Bilgileri Yanlış","/api/1.0/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }
        String base64encoded = auth.split("Basic ")[1];
        String decoded = new String(Base64.getDecoder().decode(base64encoded)); // TC:şifre
        String[] parts = decoded.split(":");
        String tc = parts[0];
        String password = parts[1];
        Users inDB = userRepo.findByTc(tc);
        if(inDB == null){
            ApiError error = new ApiError(401,"Giriş Bilgileri Yanlış","/api/1.0/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }
        String hashedPassword = inDB.getPassword();
        if(!passwordEncoder.matches(password,hashedPassword)){
            ApiError error = new ApiError(401,"Giriş Bilgileri Yanlış","/api/1.0/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }

        Map<String, String > responseBody = new HashMap<>();
        responseBody.put("tc", inDB.getTc());
        responseBody.put("adsoyad", inDB.getAdsoyad());

        return ResponseEntity.ok(responseBody);
    }
}
