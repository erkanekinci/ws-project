package com.myproject.ws.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.Date;
import java.util.Map;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiError {
    public int status;
    public String message;
    public String path;
    public long timestamp = new Date().getTime();

    public Map<String,String > validationErrors;
    public ApiError(int status, String message, String path){
        this.status= status;
        this.message = message;
        this.path = path;
    }

}
