package com.MobileAppTest.Scenarios;

import java.util.List;

import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class Tc_14_PerformanceParameters {
  @Test
  public void testPerformanceParameter() 
  {
	  //create driver session
	  
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  List<String> allDataTypes=((AndroidDriver)driver).getSupportedPerformanceDataTypes();
	  System.out.println(allDataTypes);
	  
	  //[cpuinfo, memoryinfo, batteryinfo, networkinfo]
	  
	  //application package name
	  
	  String appPackage=((AndroidDriver)driver).getCurrentPackage();
	  System.out.println(appPackage);
	  
	  List<List<Object>> batteryData=((AndroidDriver)driver).getPerformanceData(appPackage,"batteryinfo",5);
	  System.out.println("Battery data: "+batteryData);
	  System.out.println("----------------------------");
	  
	  List<List<Object>> networkData=((AndroidDriver)driver).getPerformanceData(appPackage,"networkinfo",5);
	  System.out.println("Network data: "+networkData);
	  
	  System.out.println("----------------------------");
	  
	  List<List<Object>> memoryData=((AndroidDriver)driver).getPerformanceData(appPackage,"memoryinfo",5);
	  System.out.println("Memory data: "+memoryData);
	  
	  System.out.println("----------------------------");
	  
//	  List<List<Object>> cpuData=((AndroidDriver)driver).getPerformanceData(appPackage,"cpuinfo",5);
//	  System.out.println("CPU data: "+cpuData);
//	  
//	  System.out.println("----------------------------");
//	  
//	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
