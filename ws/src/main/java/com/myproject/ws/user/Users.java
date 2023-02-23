package com.myproject.ws.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NonNull;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serial;
import java.util.Collection;


@Data
@Entity
public class Users implements UserDetails {
    @Serial
    private static final long serialVersionUID = 3196229870887684480L;
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
    @Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$",message = "Şifre 1 küçük harf, 1 büyük harf ve 1 özel karakter içermelidir.")
    public String Password;

    @NotNull
    @NotEmpty
    public String adsoyad;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return AuthorityUtils.createAuthorityList("Role_user");
    }

    @Override
    public String getUsername() {
        return tc;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
