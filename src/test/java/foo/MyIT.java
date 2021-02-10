package foo;

import com.vaadin.testbench.TestBenchTestCase;

import org.junit.Test;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class MyIT extends TestBenchTestCase {

    @Test
    public void clickAButton() {
        WebDriverManager.chromedriver().setup();

        setDriver(new ChromeDriver());
        getDriver().get("http://localhost:8080");
        System.out.println("Text for the first element: " + $("*").first().getText());
        getDriver().close();
    }
}
