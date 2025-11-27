package com.MobileAppTest.Scenarios;

import org.openqa.selenium.ScreenOrientation;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class Tc_13_LockUnlockRotate {
  @Test
  public void testLock_Unlock_Rotate() throws InterruptedException
  {
	  //create session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  //lock device
	  ((AndroidDriver)driver).lockDevice();
	  
	  
	  Thread.sleep(2000);
	  
	  
	  //unlock device
	  ((AndroidDriver)driver).unlockDevice();

	  
	  //rotate
	  ((AndroidDriver)driver).rotate(ScreenOrientation.PORTRAIT);
	  
	  Thread.sleep(2000);
	  
	  ((AndroidDriver)driver).rotate(ScreenOrientation.LANDSCAPE);
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
