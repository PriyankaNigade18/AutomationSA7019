package com.MobileTest.DriverSessions;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.Test;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class DriverSessionWithDesiredCapabilitiesClass {
  @Test
  public void testDriverSession() throws MalformedURLException, URISyntaxException
  {
	  
	  //set the required capabilities
	  DesiredCapabilities cap=new DesiredCapabilities();
	  cap.setCapability("platformName","Android");
	  cap.setCapability("appium:automationName","uiautomator2");
	  cap.setCapability("appium:deviceName","pixel_9");
	  cap.setCapability("appium:udid","emulator-5554");
	  cap.setCapability("appium:adbExecTimeout",30000);
	  String path=System.getProperty("user.dir")+"//src//test//resources//ApiDemos-debug.apk";
	  cap.setCapability("appium:app",path);
	    
	  //send request to server (server address)
	  URL serverUrl=new URI("http://0.0.0.0:4723").toURL();
	  
	  //create appium driver session for android platform
	  //AppiumDriver is class and AndroidDriver is class
	  AppiumDriver driver=new AndroidDriver(serverUrl,cap);
	  System.out.println("Session id is: "+driver.getSessionId());
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
