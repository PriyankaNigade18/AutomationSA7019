package com.RestAPITest;

import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
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

public class AuthorizationTypes {
  @Test
  public void testBasicAuth()
  {
	  
	  //Base64 algorithm
	  Response res=given()
			  			.auth().basic("postman","password")
	  
			  			.when().get("https://postman-echo.com/basic-auth");
	  
	  
	  
	  res.then().log().body();
	  
	  
	   }
  
  
  @Test
  public void digestAuth()
  {
	  
	  Response res=given()
			  			.auth().digest("postman","password")
			  		.when().get("https://postman-echo.com/digest-auth");
	  
	  res.then().log().body();
	  
  }
  
  
  @Test
  public void testBearerToken()
  {
	  String token="github token";
	  
	  Response res=given()
			  		.header("Authorization","Bearer "+token)
	  
			  			.when().get("https://api.github.com/user/repos");
	  
	  res.then().log().body();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
