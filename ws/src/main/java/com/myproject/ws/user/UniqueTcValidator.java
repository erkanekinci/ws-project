package com.myproject.ws.user;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

public class UniqueTcValidator implements ConstraintValidator <Unique , String> {

    @Autowired
    UserRepo userRepo;
    @Override
    public boolean isValid(String tc, ConstraintValidatorContext constraintValidatorContext) {
        Users user = userRepo.findByTc(tc);
        if(user != null){
            return false;
        }
        return true;
    }
}
