package com.MobileAppTest.Scenarios;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;
import com.MobileTest.Generic.MobileUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class Tc_12_ToggelWifiDataAirplaneMode {
  @Test
  public void testNetworkSetup()
  {
	  
	  //Create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  /*
	   * on-off
	   * wifi: toggleWifi()
	   * mobileData: toggleData()
	   * airplanemode: toggleAirplaneMode()
	   * 
	   */
	  
	  //wifi
	  	((AndroidDriver)driver).toggleWifi();
	  	
	  	
	  	//swipe left
	  	WebElement area=driver.findElement(AppiumBy.id("com.android.systemui:id/qs_pager"));
	  	
	  	MobileUtil.swipeLeft(driver,area);
	  	
	  //mobile data
	  	
	  	System.out.println("Mobile Data status is ON");
	  	//On - Off
	  	((AndroidDriver)driver).toggleData();
	  	
	  	System.out.println("Mobile Data status is OFF");
	  
	 	((AndroidDriver)driver).toggleData();//On
	  
	 	//airplaneMode-off
	 	
	 	((AndroidDriver)driver).toggleAirplaneMode();//on
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
