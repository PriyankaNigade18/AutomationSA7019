package com.MobileAppTest.Scenarios;

import java.time.Duration;

import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class Tc_15_AppicationCommands {
  @Test
  public void testAppCommands() throws InterruptedException 
  {
	  
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  
	  String appPackage=((AndroidDriver)driver).getCurrentPackage();
	  
	  //current status of application
	  System.out.println("Current app status: "+((AndroidDriver)driver).queryAppState(appPackage));
	  
	  //terminate app
	  ((AndroidDriver)driver).terminateApp(appPackage);
	  
	  System.out.println("After terminate Current app status: "+((AndroidDriver)driver).queryAppState(appPackage));

	  Thread.sleep(1500);
	  
	  //activate app
	  ((AndroidDriver)driver).activateApp(appPackage);
	  
	  System.out.println("After activate Current app status: "+((AndroidDriver)driver).queryAppState(appPackage));

	  Thread.sleep(1500);
	  //uninstall app
	  ((AndroidDriver)driver).removeApp(appPackage);
	  System.out.println("After remove Current app status: "+((AndroidDriver)driver).queryAppState(appPackage));

	  
	  //install
	  String path=System.getProperty("user.dir")+"//src//test//resources//ApiDemos-debug.apk";
	  ((AndroidDriver)driver).installApp(path);
	  
	  Thread.sleep(1000);
	  
	  ((AndroidDriver)driver).activateApp(appPackage);
	  
	  
	  Thread.sleep(1000);
	  
	  //run app in background
	  
	  ((AndroidDriver)driver).runAppInBackground(Duration.ofSeconds(3));
	  
	  System.out.println("After 3sec Current app status: "+((AndroidDriver)driver).queryAppState(appPackage));

	  
	  
	  
	  
	  
	  
	  
  }
}
