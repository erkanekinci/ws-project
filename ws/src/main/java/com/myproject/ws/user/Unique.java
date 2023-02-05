package com.myproject.ws.user;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Target({ ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(
        validatedBy = {UniqueTcValidator.class}
)
public @interface Unique {
    String message() default "Tc Kimlik Numarası sistemde bulunmaktadır";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
