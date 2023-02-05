package com.myproject.ws.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NonNull;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;


@Data
@Entity
public class Users {
    @Id
    @GeneratedValue
    private long Id;


    @Size(min = 11, max=11,message = "Tc Kimlik Numarası 11 Haneli Olmalıdır")
    @NotNull
    @NotEmpty
    @Unique
    public String tc;

    @Size(min=8,message = "Şifre minimum 8 karakterden oluşmalıdır")
    @NotNull
    @NotEmpty
    @Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$",message = "Şifre 1 küçük harf, 1 büyük harf ve 1 özel karakter içermelidir")
    public String Password;

}
