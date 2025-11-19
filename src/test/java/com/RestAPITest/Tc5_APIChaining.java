package com.RestAPITest;

import static io.restassured.RestAssured.given;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.PojoClasses.AuthPojo;
import com.PojoClasses.Booking;
import com.PojoClasses.BookingDates;

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
public class Tc5_APIChaining
{
	
	int bookingid;
	String tokenValue;
	
  @Test(priority=1)
  public void createNewBooking()
  {
	  System.out.println("--------Create new booking------");
	  //generate payload
	  BookingDates date=new BookingDates();
	  date.setCheckin("2025-11-19");
	  date.setCheckout("2025-11-20");
	  
	  Booking booking=new Booking();
	  booking.setFirstname("Priyanka");
	  booking.setLastname("Nigade");
	  booking.setTotalprice(12234);
	  booking.setDepositpaid(true);
	  booking.setBookingdates(date);
	  booking.setAdditionalneeds("Lunch");
	  
	  Response res=given()
			  		.header("Content-Type","application/json")
			  			.body(booking)
	  
			  				.when().post("https://restful-booker.herokuapp.com/booking");
	  
	  //status code
	  System.out.println("Status code is: "+res.getStatusCode());
	  
	  //log the body
	  res.then().log().body();
	  
	  //booking id to store
	  bookingid=res.jsonPath().getInt("bookingid");
	  System.out.println("Booking created with id: "+bookingid);
	  
	  
	  
  }
  
  @Test(priority=2)
  public void getBookingDetails()
  {
	  System.out.println("-----Get Booking Details------");
	    
	  Response res=given()
	  
			  		.when().get("https://restful-booker.herokuapp.com/booking/"+bookingid);
	  
	  //log the response
	  res.then().log().body();
	  
	  System.out.println("Booking details for id : "+bookingid);
	  
	  //response data
	  String fname=res.jsonPath().getString("firstname");
	  Assert.assertEquals(fname,"Priyanka");
	  System.out.println("Firtsname match!");
	  
	  
	  
  }
  
  
  @Test(priority=3)
  public void createToken()
  {
	  System.out.println("-------Create Auth Token--------");
	  //generate payload
	  AuthPojo auth=new AuthPojo();
	  auth.setUsername("admin");
	  auth.setPassword("password123");
	  
	  Response res=given()
			  .header("Content-Type","application/json")
			  .body(auth)
	  
			  .when().post("https://restful-booker.herokuapp.com/auth");
	  
	  //log the response
	  res.then().log().body();
	  
	  tokenValue=res.jsonPath().getString("token");
	  System.out.println("Token genearated: "+tokenValue);
	  
	  
	  
  }
  
  
  @Test(priority=4)
  public void fullUpdateBooking()
  {
	  System.out.println("------Full update booking------");
	  //generate payload
	  BookingDates date=new BookingDates();
	  date.setCheckin("2025-11-20");
	  date.setCheckout("2025-11-21");
	  
	  Booking booking=new Booking();
	  booking.setFirstname("Sarang");
	  booking.setLastname("Sharma");
	  booking.setTotalprice(6666);
	  booking.setDepositpaid(true);
	  booking.setBookingdates(date);
	  booking.setAdditionalneeds("Dinner");
	  
	  Response res=given()
			  .header("Content-Type","application/json")
			  	.header("Accept","application/json")
			  		.header("Cookie","token="+tokenValue)
			  			.body(booking)
	  
			  				.when().put("https://restful-booker.herokuapp.com/booking/"+bookingid);
	  
	  
	  //log the result
	  res.then().log().body();
	  System.out.println("Booking updated with id: "+bookingid);
	  
	  
  }
  
  
  @Test(priority=5)
  public void deleteBooking()
  {
	  System.out.println("----------------Delete Booking-----------");
	  
	  Response res=given()
	  .header("Content-Type","application/json")
	  .header("Cookie","token="+tokenValue)
	  .when().delete("https://restful-booker.herokuapp.com/booking/"+bookingid);
	  
	  Assert.assertEquals(res.getStatusCode(),201);
	  System.out.println("Status code matched");
	  
	  res.then().log().all();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
