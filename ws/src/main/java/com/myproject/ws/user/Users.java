package com.myproject.ws.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NonNull;


@Data
@Entity
public class Users {
    @Id
    @GeneratedValue
    private long Id;
    @Size(min = 4)
    @NotNull
    @NotEmpty
    public String Username;
    @NotNull
    @NotEmpty
    public String Tc;
    public String Password;

}
