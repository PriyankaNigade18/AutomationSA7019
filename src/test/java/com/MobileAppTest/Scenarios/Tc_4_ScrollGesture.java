package com.MobileAppTest.Scenarios;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;
import com.MobileTest.Generic.MobileUtil;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class Tc_4_ScrollGesture {
  @Test
  public void testScrollGesture() throws InterruptedException
  {
	  
	  //create  driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  //views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //scroll area
	  WebElement pageArea=driver.findElement(AppiumBy.id("android:id/list"));
	  
	  //mobile:scrollGesture
	  
//	  driver.executeScript("mobile:scrollGesture",ImmutableMap.of(
//			  
//			  "elementId",((RemoteWebElement)pageArea).getId(),
//			  "direction","down",
//			  "percent",1.0
//			  
//			  ));
//	  
	  //MobileUtil.scrollDown(driver,pageArea);
	 
	  MobileUtil.scrollUptoCount(driver,pageArea,2,"down");
	  
	  Thread.sleep(2000);
	  
	  MobileUtil.scrollUptoCount(driver, pageArea,1,"up");
	  
	 // MobileUtil.scrollUp(driver,pageArea);
	  
	 
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
