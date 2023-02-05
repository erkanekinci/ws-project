package com.myproject.ws;

import com.myproject.ws.user.UserService;
import com.myproject.ws.user.Users;
import org.apache.catalina.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class WsApplication {

	public static void main(String[] args) {
		SpringApplication.run(WsApplication.class, args);
	}
	@Bean
	CommandLineRunner createInitialUsers(UserService userService){
		return new CommandLineRunner() {
			@Override
			public void run(String... args) throws Exception {
				Users user = new Users();
				user.setTc("11111111111");
				user.setPassword("P4ssword");
				userService.save(user);
			}
		};
	}
}
