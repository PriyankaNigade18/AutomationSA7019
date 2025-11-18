package com.RestAPITest;

import static io.restassured.RestAssured.given;

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
public class Tc3_TestBDDPattern {
  @Test
  public void testSingleUser() 
  {
	  
	 Response res= given()
			 			.header("x-api-key","reqres-free-v1")
	  
			 					.when().get("https://reqres.in/api/users/2");
	  
//	  .then().statusCode(201)
//	  .log().body();
	 
	 System.out.println(res.getStatusCode());
	 //log()
	 //all headers
	 //res.then().log().headers();
	 
	 //body()
	 //res.then().log().body();
	 
	 //all()
	 res.then().log().all();
	 
	 
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
