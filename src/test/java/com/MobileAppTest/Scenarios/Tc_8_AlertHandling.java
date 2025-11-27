package com.MobileAppTest.Scenarios;

import org.openqa.selenium.Alert;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class Tc_8_AlertHandling {
  @Test
  public void testAlert() throws InterruptedException
  {
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  /*
	   * To automate alert we use Alert Interface
	   * Alert alt=driver.switchTo().alert()
	   * 
	   * Ok=accept()
	   * cancel=dismiss()
	   * to get text of alert=getText()
	   * for Prompt=sendKeys()
	   */
	  
	  driver.findElement(AppiumBy.accessibilityId("App")).click();
	  
	  driver.findElement(AppiumBy.accessibilityId("Alert Dialogs")).click();
	  
	  driver.findElement(AppiumBy.accessibilityId("OK Cancel dialog with a message")).click();
	  Thread.sleep(1500);
	  //alert will open
	  Alert alt=driver.switchTo().alert();
	  System.out.println("Text of alert: "+alt.getText());
	  //ok
	  alt.accept();
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
