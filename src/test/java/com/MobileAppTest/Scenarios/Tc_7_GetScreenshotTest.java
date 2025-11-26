package com.MobileAppTest.Scenarios;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;

import io.appium.java_client.AppiumDriver;

public class Tc_7_GetScreenshotTest {
  @Test
  public void testScreenshot() throws IOException
  {
	  
	  
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  
	  TakesScreenshot ts=(TakesScreenshot)driver;
	  File temp=ts.getScreenshotAs(OutputType.FILE);
	  File dest=new File(System.getProperty("user.dir")+"//Screenshots//demosApp"+System.currentTimeMillis()+".png");
	  
	  FileHandler.copy(temp,dest);
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
