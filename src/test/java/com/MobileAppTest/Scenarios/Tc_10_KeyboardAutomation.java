package com.MobileAppTest.Scenarios;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;
import com.MobileTest.Generic.MobileUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import io.appium.java_client.android.nativekey.KeyEventMetaModifier;

public class Tc_10_KeyboardAutomation {
  @Test
  public void testKeyborad() 
    {
	  
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  //views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  //page area
	  WebElement area=driver.findElement(AppiumBy.id("android:id/list"));
	  
	  //scroll down 3
	  MobileUtil.scrollUptoCount(driver,area,3,"down");
	  
	  //textField
	  driver.findElement(AppiumBy.accessibilityId("TextFields")).click();
	  
	  //type
	  //driver.findElement(AppiumBy.id("io.appium.android.apis:id/edit")).sendKeys("Hello All");
	  
	  /*
	   * Few methods are platform specific so you can not access it using AppiumDriver instance
	   * Do type casting like convert AppiumDriver instance into AndroidDriver instance
	   * 
	   */
	 ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.H).withMetaModifier(KeyEventMetaModifier.SHIFT_ON));
	 ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.E));
	 ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.L));
	 ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.L));
	 ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.O));
	 
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
