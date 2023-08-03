package com.eloja.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class CoreApplication extends ServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(CoreApplication.class, args);
    }

}
