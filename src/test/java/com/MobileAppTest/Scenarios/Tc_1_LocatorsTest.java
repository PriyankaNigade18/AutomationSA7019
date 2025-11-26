package com.MobileAppTest.Scenarios;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileTest.Generic.DriverUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class Tc_1_LocatorsTest {
  @Test
  public void testMobileLocators() throws InterruptedException
  {
	  
	  //create driver session
	  
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  
	  //Locator1: accessibilityId(primary)
	  
	  WebElement ele1=driver.findElement(AppiumBy.accessibilityId("Access'ibility"));
	  
	  System.out.println("Element 1 text is: "+ele1.getText());

	  ele1.click();
	  
	  Thread.sleep(1500);
	  
	  //navigate to back
	  driver.navigate().back();
	  
	  
	  
	  //Locator2: xpath
	  
	  WebElement ele2=driver.findElement(AppiumBy.xpath("//android.widget.TextView[@content-desc='Animation']"));
	  System.out.println("Element 2 text is: "+ele2.getText());
	  ele2.click();
	  
	  Thread.sleep(1500);
	  //navigate back
	  driver.navigate().back();
	  
	  
	  //Locator3: androidUIAutomator
	  WebElement ele3=driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"App\")"));
	  System.out.println("Element 3 text is: "+ele3.getText());
	  ele3.click();
	  Thread.sleep(1500);
	  //navigate back
	  driver.navigate().back();
	  
	  
	  
	  //Locator4: ClassName
	 WebElement ele4=driver.findElements(AppiumBy.className("android.widget.TextView")).get(5);
	  
	  System.out.println("Element 4 text is: "+ele4.getText());
	  ele4.click();
	  Thread.sleep(1500);
	  //navigate back
	  driver.navigate().back();
	  
	  //Locator5: resource-id or id
	  
	  WebElement ele5=driver.findElements(AppiumBy.id("android:id/text1")).get(11);
	  System.out.println("Element 5 text is: "+ele5.getText());
	  ele5.click();
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
