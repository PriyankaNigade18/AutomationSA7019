package com.MobileAppTest.Scenarios;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;
import com.MobileTest.Generic.MobileUtil;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class Tc_2_ClickGesture {
  @Test
  public void testClickGesture() throws InterruptedException
  {
	
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  MobileUtil.getScreenshot(driver,"HomePage");
	  
	  //click action on Views element
	  //driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //Identify ele
	  WebElement ele=driver.findElement(AppiumBy.accessibilityId("Views"));
	  
	  //clickGesture
	  //To get the element id covert webelement into remoteWebelement obj
	  
	  
	  driver.executeScript("mobile:clickGesture",ImmutableMap.of(
			  "elementId",((RemoteWebElement)ele).getId()
			  
			  ));
	  
	  Thread.sleep(2000);
	  
	  MobileUtil.getScreenshot(driver,"NewViewPage");
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
