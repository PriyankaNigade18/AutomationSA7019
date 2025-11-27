package com.MobileAppTest.Scenarios;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class Tc_11_NotificationsTest {
  @Test
  public void testNotifications() 
  {
	  
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  
	  ((AndroidDriver)driver).openNotifications();
	  
	  
	  //total Notifications
	 List<WebElement> headers=driver.findElements(AppiumBy.id("android:id/app_name_text"));
	  
	 System.out.println("Total Notifications are: "+headers.size());
	 
	 
	 for(WebElement i:headers)
	 {
		 System.out.println(i.getText());
	 }
	 
	 //expand appiumsetting
	 driver.findElement(AppiumBy.accessibilityId("Expand")).click();
	 
	 List<WebElement> bigtext=driver.findElements(AppiumBy.id("android:id/big_text"));
	 
	 for(WebElement i:bigtext)
	 {
		 System.out.println(i.getText());
	 }
	 
	 
	 
	 
	 
	 
	 
	 
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
