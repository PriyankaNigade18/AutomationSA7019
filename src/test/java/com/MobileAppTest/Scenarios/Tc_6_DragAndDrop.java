package com.MobileAppTest.Scenarios;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class Tc_6_DragAndDrop {
  @Test
  public void testDragAndDrop() 
    {
	  
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  //views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //drag and drop
	  driver.findElement(AppiumBy.accessibilityId("Drag and Drop")).click();
	  
	  //dot1
	  WebElement ele=driver.findElement(AppiumBy.id("io.appium.android.apis:id/drag_dot_1"));
	  
	  //dragGasture
	  driver.executeScript("mobile:dragGesture",ImmutableMap.of(
			  
			  "elementId",((RemoteWebElement)ele).getId(),
			  "endX",723,
			  "endY",1161
			  
			  ));
	  
	  
	  String resultText=driver.findElement(AppiumBy.id("io.appium.android.apis:id/drag_result_text")).getText();
	  //System.out.println(resultText);
	  
	  Assert.assertEquals(resultText,"Dropped!");
	  System.out.println("Test Pass!: "+resultText);
	  
	  
  }
}
