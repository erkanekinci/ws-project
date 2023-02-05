package com.myproject.ws.auth;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

public class AuthController {

    private static final  Logger Log = LoggerFactory.getLogger(AuthController.class);
    @PostMapping("/api/1.0/auth")
    void handleAuthentication(@RequestHeader (name = "Authorization") String auth){
        Log.info(auth);
    }
}
