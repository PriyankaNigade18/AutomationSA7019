package com.RestAPITest;

import java.util.concurrent.TimeUnit;

import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class Tc1_FirstAPITest_NonBDD {
  @Test
  public void SingleObjectTest()
  {
	  /*
	   * RestAssured as class
	   * Response is an Interface
	   */
	  
	  Response res=RestAssured.get("https://api.restful-api.dev/objects/7");
	  System.out.println("Status code is: "+res.getStatusCode());
	  System.out.println("Status line: "+res.getStatusLine());
	  System.out.println("Response time: "+res.getTimeIn(TimeUnit.MILLISECONDS));
	  System.out.println("Header: "+res.getHeader("Content-Type"));
	  System.out.println("--------Json Payload-------");
	  System.out.println(res.asPrettyString());
	  
	  
  }
}
