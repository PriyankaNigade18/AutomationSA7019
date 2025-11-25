package com.MobileAppTest.Scenarios;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class Tc_1_LocatorsTest {
  @Test
  public void testMobileLocators()
  {
	  
	  //create driver session
	  
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  
	  //Locator1: accessibilityId(primary)
	  
	  WebElement ele1=driver.findElement(AppiumBy.accessibilityId("Access'ibility"));
	  
	  System.out.println("Element 1 text is: "+ele1.getText());

	  ele1.click();
	  
	  
  }
}
