package com.RestAPITest;

import static io.restassured.RestAssured.given;

import java.util.HashMap;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;
/*
* given(): Prerequisite
* ---------------------------
* header,path parameter,query parameter,request payload , authrozation 
* 
*  
* when(): Action(Type of request)
* ---------------------------------
* GET,POST,PUT,PATCH,DELETE
* 
* 
* then():Validate Response
* -------------------------
* status code, status message, response time, response payload,headers,cookies
* 
* 
*/
public class TelecomeProject 
{
  @Test(priority=1)
  public void AddNewUser() 
  {
	  String useremail="priyanka"+System.currentTimeMillis()+"@gmail.com";
	  //payload
	  HashMap<String,Object> data=new HashMap<String,Object>();
	  data.put("firstName","Priyanka");
	  data.put("lastName","Nigade");
	  data.put("email",useremail);
	  data.put("password","test123");
	  
	 Response res= given()
	  	.header("Content-type","application/json")
	  	.body(data)
	  	
	  	.when().post("https://thinking-tester-contact-list.herokuapp.com/users");
	  
	  //log
	 res.then().log().all();
	 
	 Assert.assertEquals(res.getStatusCode(),201);
	 System.out.println("Status code matched!");
	 
	 //get the response as token
	 String tokenValue=res.jsonPath().getString("token");
	 System.out.println("Token is: "+tokenValue);
	  
	  
	  
	  
  }
}
