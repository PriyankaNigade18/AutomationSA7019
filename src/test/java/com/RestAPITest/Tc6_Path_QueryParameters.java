package com.RestAPITest;

import static io.restassured.RestAssured.given;

import org.testng.annotations.Test;

import io.restassured.RestAssured;
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
public class Tc6_Path_QueryParameters {
  @Test
  public void f()
  {
	  //https://api.restful-api.dev/objects?id=3&id=5&id=10
	  
	  RestAssured.baseURI="https://api.restful-api.dev";
	  Response res=given()
			  	.pathParam("path","objects")
			  	.queryParam("id",3)
			  	.queryParam("id",5)
			  	.queryParam("id",10)
			  		
			  	.when().get("/{path}");
			  	
			  	//.when().get("https://api.restful-api.dev/{path}");
			  	//.when().get("https://api.restful-api.dev/objects?id=3&id=5&id=10");
	  
	  
	  //response
	  res.then().log().body();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
