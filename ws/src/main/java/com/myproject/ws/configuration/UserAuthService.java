package com.myproject.ws.configuration;

import com.myproject.ws.user.UserRepo;
import com.myproject.ws.user.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserAuthService implements UserDetailsService {

    @Autowired
    UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String tc) throws UsernameNotFoundException {
        Users inDB = userRepo.findByTc(tc);
        if(inDB == null)
            throw new UsernameNotFoundException("Kullanıcı bulunamadı");
        return inDB;
    }
}
