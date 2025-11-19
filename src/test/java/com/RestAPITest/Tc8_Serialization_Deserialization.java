package com.RestAPITest;

import org.testng.annotations.Test;

import com.PojoClasses.AuthPojo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Tc8_Serialization_Deserialization
{
	/*
	 * POJO Object------->JSON= Serialization
	 * JSON object------->POJO= De-serialization
	 * 
	 */
  @Test
  public void testSerialization() throws JsonProcessingException
  {
	  AuthPojo auth=new AuthPojo();
	  auth.setUsername("Jay");
	  auth.setPassword("test123");
	  
	  ObjectMapper obj=new ObjectMapper();
	 String jsonData=obj.writerWithDefaultPrettyPrinter().writeValueAsString(auth);
	  
	  System.out.println(jsonData);
	  
	  
 
  }
  
  @Test
  public void testDeserialization() throws JsonMappingException, JsonProcessingException
  {
	  String jsonData="{\n"
	  		+ "  \"username\" : \"Jayesh\",\n"
	  		+ "  \"password\" : \"test1234\"\n"
	  		+ "}";
	  
	  ObjectMapper obj=new ObjectMapper();
	  AuthPojo auth=obj.readValue(jsonData,AuthPojo.class);
	  
	  System.out.println(auth.getUsername());
	  System.out.println(auth.getPassword());
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
