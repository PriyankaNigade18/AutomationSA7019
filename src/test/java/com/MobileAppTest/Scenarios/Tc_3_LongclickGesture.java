package com.MobileAppTest.Scenarios;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class Tc_3_LongclickGesture {
  @Test
  public void testLongClickGesture()
  {
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  //views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //drag and drop
	  driver.findElement(AppiumBy.accessibilityId("Drag and Drop")).click();
	  
	  
	  //circle ele
	  WebElement ele=driver.findElement(AppiumBy.id("io.appium.android.apis:id/drag_dot_1"));
	  
	  //mobile:longClickGesture
	  driver.executeScript("mobile:longClickGesture",ImmutableMap.of(
			  
			  "elementId",((RemoteWebElement)ele).getId(),
			  "duration",3000
			  
			   ));
	  
	  
	  
	  
	  
	  
	  
	  
	  
	
	  
	  
	  
  }
  
  
}
