// ================================================================
// SELENIUM DATA
// ================================================================
const SELENIUM_TOPICS = [
  // ── 0. Core Java for Selenium ──────────────────────────────────
  {
    id: 'core-java-selenium',
    title: 'Core Java for Selenium',
    section: 'selenium',
    difficulty: 'easy',
    time: '40 min',
    shortDesc: 'Java fundamentals every Selenium tester must know — OOP, Collections, Exception Handling, and File Handling.',
    content: `
      <div class="topic-section">
        <h2>Why Java for Selenium?</h2>
        <div class="ans-hero">Selenium is a tool, but coding knowledge is mandatory. Most enterprises use Java + Selenium.</div>
        <ul class="ans-list blue">
          <li><span class="icon">☕</span>Java is the #1 language used in enterprise Selenium frameworks</li>
          <li><span class="icon">🏢</span>Most SDET job descriptions require Java + Selenium + TestNG</li>
          <li><span class="icon">🔧</span>Frameworks like POM, Data Driven, and Hybrid are all Java-based</li>
        </ul>
      </div>

      <div class="topic-section">
        <h2>1. Java Basics — JVM, JRE, JDK</h2>
        <div class="compare-grid">
          <div class="compare-card blue"><h6>JDK — Java Development Kit</h6>Full package for developers. Contains JRE + compiler (javac) + debugging tools. <strong>Install this for Selenium automation.</strong></div>
          <div class="compare-card green"><h6>JRE — Java Runtime Environment</h6>Contains JVM + class libraries. Needed to RUN Java programs (not compile them).</div>
          <div class="compare-card purple"><h6>JVM — Java Virtual Machine</h6>Runs compiled .class bytecode. Converts bytecode to machine code. Provides platform independence.</div>
        </div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Basics</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Data types
int age = 25;
String name = "Karan";
boolean isLoggedIn = true;
double amount = 9999.99;

// Conditional
if (age >= 18) {
    System.out.println("Adult user — can access all features");
} else {
    System.out.println("Minor — restricted access");
}

// Loop — useful for iterating web elements
for (int i = 0; i < 10; i++) {
    System.out.println("Test run #" + i);
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>2. OOP Concepts (Critical for Selenium Frameworks)</h2>
        <p>Selenium frameworks heavily depend on OOP. Every interview will test these.</p>

        <h4>Encapsulation — Used in Page Object Model</h4>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Encapsulation: hide internal state, expose via methods
public class LoginPage {
    private WebDriver driver;   // private — hidden from outside
    private By usernameField = By.id("username");

    public LoginPage(WebDriver driver) {
        this.driver = driver;   // set via constructor
    }

    public void enterUsername(String user) {
        driver.findElement(usernameField).sendKeys(user);
    }
}</code></pre>
        </div>

        <h4>Inheritance — Used in BaseTest / BasePage</h4>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Parent class — common setup for all tests
public class BaseTest {
    protected WebDriver driver;

    @BeforeMethod
    public void setUp() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }
}

// Child class inherits driver setup automatically
public class LoginTest extends BaseTest {
    @Test
    public void testValidLogin() {
        driver.get("https://bank.com/login");
        // driver is available from BaseTest
    }
}</code></pre>
        </div>

        <h4>Polymorphism — Used in WebDriver Declaration</h4>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Parent type reference, child type object — polymorphism!
// Same variable works for Chrome, Firefox, Edge
WebDriver driver = new ChromeDriver();   // Chrome
WebDriver driver = new FirefoxDriver();  // Firefox
WebDriver driver = new EdgeDriver();     // Edge

// Factory method using polymorphism
public static WebDriver getDriver(String browser) {
    switch (browser) {
        case "chrome":  return new ChromeDriver();
        case "firefox": return new FirefoxDriver();
        case "edge":    return new EdgeDriver();
        default: throw new RuntimeException("Unknown browser: " + browser);
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>3. Java Collections (Essential for Selenium)</h2>
        <table class="table-light-custom">
          <thead><tr><th>Collection</th><th>Use in Selenium</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>List&lt;WebElement&gt;</td><td>Store multiple elements (all links, all rows)</td><td>driver.findElements() returns List</td></tr>
            <tr><td>Set&lt;String&gt;</td><td>Store window handles (no duplicates)</td><td>driver.getWindowHandles()</td></tr>
            <tr><td>Map&lt;String,String&gt;</td><td>Store test data key-value pairs</td><td>{"username":"admin", "password":"pass"}</td></tr>
            <tr><td>ArrayList</td><td>Dynamic list of test results/links</td><td>Collecting all hrefs from page</td></tr>
          </tbody>
        </table>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Collections in Selenium</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// List — get all links on page
List&lt;WebElement&gt; allLinks = driver.findElements(By.tagName("a"));
for (WebElement link : allLinks) {
    System.out.println(link.getText() + " → " + link.getAttribute("href"));
}

// Set — get all window handles
Set&lt;String&gt; windows = driver.getWindowHandles();
for (String handle : windows) {
    driver.switchTo().window(handle);
}

// Map — test data
Map&lt;String, String&gt; testData = new HashMap&lt;&gt;();
testData.put("username", "admin@bank.com");
testData.put("password", "Admin@123");</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>4. Exception Handling (Critical for Reliable Tests)</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Exception Handling</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Common Selenium exceptions and how to handle them
try {
    WebElement element = driver.findElement(By.id("submitBtn"));
    element.click();
} catch (NoSuchElementException e) {
    System.out.println("Element not found: " + e.getMessage());
    // Take screenshot for debugging
} catch (StaleElementReferenceException e) {
    System.out.println("Element stale — re-find it");
    driver.findElement(By.id("submitBtn")).click(); // retry
} catch (TimeoutException e) {
    System.out.println("Page took too long: " + e.getMessage());
} finally {
    // Always runs — good for cleanup
    System.out.println("Test execution attempted");
}</code></pre>
        </div>
        <table class="table-light-custom">
          <thead><tr><th>Exception</th><th>When It Occurs</th><th>Fix</th></tr></thead>
          <tbody>
            <tr><td>NoSuchElementException</td><td>Element not found in DOM</td><td>Check locator, add wait</td></tr>
            <tr><td>StaleElementReferenceException</td><td>DOM updated after element found</td><td>Re-find element after DOM change</td></tr>
            <tr><td>TimeoutException</td><td>WebDriverWait condition not met in time</td><td>Increase timeout or fix timing</td></tr>
            <tr><td>ElementNotInteractableException</td><td>Element exists but not visible/enabled</td><td>Wait for visibility/enabled state</td></tr>
            <tr><td>WebDriverException</td><td>Browser crash, driver not found</td><td>Check driver version compatibility</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>5. File Handling — Reading Properties and Excel</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Reading config.properties</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// config.properties file:
// browser=chrome
// baseUrl=https://bank.com
// timeout=10

public class ConfigReader {
    private static Properties props = new Properties();

    static {
        try {
            FileInputStream fis = new FileInputStream("src/test/resources/config.properties");
            props.load(fis);
        } catch (IOException e) {
            throw new RuntimeException("config.properties not found", e);
        }
    }

    public static String get(String key) {
        return props.getProperty(key);
    }
}

// Usage:
String browser = ConfigReader.get("browser");   // "chrome"
String baseUrl  = ConfigReader.get("baseUrl");  // "https://bank.com"</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "Why is OOP important in Selenium frameworks?",
        a: `<div class="ans-hero">OOP makes Selenium frameworks maintainable, reusable, and scalable — each concept maps directly to a framework pattern.</div>
        <ul class="ans-list blue">
          <li><span class="icon">📦</span><strong>Encapsulation → Page Object Model:</strong> Hide locators inside page classes, expose only methods</li>
          <li><span class="icon">🧬</span><strong>Inheritance → BaseTest:</strong> All test classes inherit driver setup/teardown from BaseTest — no code duplication</li>
          <li><span class="icon">🔄</span><strong>Polymorphism → WebDriver declaration:</strong> WebDriver driver = new ChromeDriver() — switch browser by changing just this line</li>
          <li><span class="icon">🎭</span><strong>Abstraction → Interface design:</strong> Define what a page SHOULD do without specifying how</li>
        </ul>`
      }
    ]
  },
  {
    id: 'selenium-introduction',
    title: 'Selenium Introduction',
    section: 'selenium',
    difficulty: 'easy',
    time: '20 min',
    shortDesc: 'Introduction to Selenium, its components, and why it is the most popular web automation tool.',
    content: `
      <div class="topic-section">
        <h2><i class="bi bi-browser-chrome"></i> What is Selenium?</h2>
        <p><strong>Selenium</strong> is an open-source, free web automation framework used for automating web browsers. It supports multiple programming languages, browsers, and operating systems.</p>

        <div class="definition-card">
          <div class="definition-term">Key Characteristics</div>
          <div class="definition-body">
            ✅ Open Source &amp; Free<br>
            ✅ Supports Java, Python, C#, Ruby, JavaScript<br>
            ✅ Works on Chrome, Firefox, Edge, Safari, IE<br>
            ✅ Works on Windows, Mac, Linux<br>
            ✅ Can integrate with TestNG, JUnit, Maven, Jenkins
          </div>
        </div>

        <h3>Selenium Components</h3>
        <table class="comparison-table">
          <thead><tr><th>Component</th><th>Description</th><th>Use Case</th></tr></thead>
          <tbody>
            <tr><td><strong>Selenium IDE</strong></td><td>Browser extension for record &amp; replay</td><td>Quick test creation, no coding needed</td></tr>
            <tr><td><strong>Selenium WebDriver</strong></td><td>API that directly communicates with browser</td><td>Most used — full automation framework</td></tr>
            <tr><td><strong>Selenium Grid</strong></td><td>Run tests in parallel on multiple machines/browsers</td><td>Cross-browser, parallel execution</td></tr>
          </tbody>
        </table>

        <h3>Selenium WebDriver Architecture</h3>
        <div class="flow-diagram">
          <div class="flow-node fn-active"><div class="fn-title">Test Script</div><div class="fn-sub">Java/Python</div></div>
          <div class="flow-arrow"><i class="bi bi-arrow-right"></i></div>
          <div class="flow-node fn-orange"><div class="fn-title">Selenium WebDriver API</div></div>
          <div class="flow-arrow"><i class="bi bi-arrow-right"></i></div>
          <div class="flow-node fn-green"><div class="fn-title">Browser Driver</div><div class="fn-sub">ChromeDriver</div></div>
          <div class="flow-arrow"><i class="bi bi-arrow-right"></i></div>
          <div class="flow-node fn-active"><div class="fn-title">Browser</div><div class="fn-sub">Chrome/Firefox</div></div>
        </div>

        <h3>First Selenium Script — Java</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FirstTest {
    public static void main(String[] args) {
        // Initialize ChromeDriver
        WebDriver driver = new ChromeDriver();

        // Open URL
        driver.get("https://www.google.com");

        // Print page title
        System.out.println("Page Title: " + driver.getTitle());

        // Maximize browser window
        driver.manage().window().maximize();

        // Close browser
        driver.quit();
    }
}</code></pre>
        </div>

        <div class="info-box info">
          <div class="info-box-title"><i class="bi bi-info-circle me-1"></i> driver.close() vs driver.quit()</div>
          <p><strong>close():</strong> Closes the current browser window only.<br>
          <strong>quit():</strong> Closes all browser windows and ends the WebDriver session. Always use quit() in teardown.</p>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is Selenium WebDriver and how does it differ from Selenium RC?",
        a: `<table class="comparison-table">
          <thead><tr><th>Selenium WebDriver</th><th>Selenium RC (Remote Control)</th></tr></thead>
          <tbody>
            <tr><td>Directly communicates with browser through browser driver</td><td>Used JavaScript injection to automate browsers</td></tr>
            <tr><td>Faster execution</td><td>Slower due to intermediate server</td></tr>
            <tr><td>Supports headless browser testing</td><td>No headless support</td></tr>
            <tr><td>More stable and modern</td><td>Deprecated — not used anymore</td></tr>
            <tr><td>No separate server needed</td><td>Required Selenium RC server to run</td></tr>
          </tbody>
        </table>`
      },
      {
        q: "Explain the Selenium WebDriver architecture.",
        a: `<ol>
          <li><strong>Test Script (Java/Python):</strong> The automation code you write using Selenium API</li>
          <li><strong>Selenium WebDriver API:</strong> Provides the interface methods (findElement, click, sendKeys, etc.)</li>
          <li><strong>Browser Driver (ChromeDriver/GeckoDriver):</strong> Acts as a bridge between Selenium and the browser. Converts Selenium commands to browser-specific instructions using W3C WebDriver Protocol</li>
          <li><strong>Browser (Chrome/Firefox):</strong> Receives and executes the browser commands</li>
          <li>Communication happens via HTTP protocol using W3C WebDriver specification (JSON Wire Protocol previously)</li>
        </ol>`
      }
    ]
  },
  {
    id: 'locators',
    title: 'Locators & Element Identification',
    section: 'selenium',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'All Selenium locators — ID, Name, XPath, CSS Selector, Class Name, Tag Name, Link Text.',
    content: `
      <div class="topic-section">
        <h2><i class="bi bi-crosshair"></i> Selenium Locators</h2>
        <p>Locators are used to <strong>identify and locate web elements</strong> on a web page. Choosing the right locator is critical for test stability.</p>

        <h3>Locator Types (Best to Worst Priority)</h3>
        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">ID — Most Preferred</div>
              <div class="step-desc">Fastest and most reliable. Use when element has a unique ID.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Name</div>
              <div class="step-desc">Use when element has a name attribute. Common in forms.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">CSS Selector</div>
              <div class="step-desc">Flexible and fast. Preferred when ID is not available.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">XPath</div>
              <div class="step-desc">Most powerful but slower. Use as last resort for complex elements.</div>
            </div>
          </div>
        </div>

        <h3>All Locator Examples</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">// By ID
driver.findElement(By.id("username"));

// By Name
driver.findElement(By.name("email"));

// By Class Name
driver.findElement(By.className("login-btn"));

// By Tag Name
driver.findElement(By.tagName("input"));

// By Link Text (exact)
driver.findElement(By.linkText("Forgot Password"));

// By Partial Link Text
driver.findElement(By.partialLinkText("Forgot"));

// By CSS Selector
driver.findElement(By.cssSelector("#username"));
driver.findElement(By.cssSelector("input[name='email']"));
driver.findElement(By.cssSelector(".login-form input"));

// By XPath (Absolute)
driver.findElement(By.xpath("/html/body/div/form/input[1]"));

// By XPath (Relative — preferred)
driver.findElement(By.xpath("//input[@id='username']"));
driver.findElement(By.xpath("//button[text()='Login']"));
driver.findElement(By.xpath("//div[@class='form']//input"));</code></pre>
        </div>

        <h3>XPath — Advanced</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">XPATH</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">// Contains — partial match on attribute
//input[contains(@id,'user')]

// Starts-with
//input[starts-with(@name,'pass')]

// AND condition
//input[@type='text' and @name='username']

// OR condition
//input[@type='text' or @type='email']

// Parent (go up)
//input[@id='username']/..

// Following sibling
//label[text()='Username']/following-sibling::input

// Index-based (first element)
(//input[@type='text'])[1]

// Contains text
//button[contains(text(),'Login')]

// Normalize-space (handles whitespace)
//button[normalize-space()='Login']</code></pre>
        </div>

        <h3>CSS Selector — Advanced</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">CSS</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">// ID
#username

// Class
.login-btn

// Attribute
input[type='email']

// Attribute contains
input[id*='user']       // *=  contains
input[id^='user']       // ^=  starts with
input[id$='name']       // $=  ends with

// Child
div.form > input

// Descendant
.login-form input

// nth-child
table tr:nth-child(2) td</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is the difference between XPath and CSS Selector? Which do you prefer and why?",
        a: `<table class="comparison-table">
          <thead><tr><th>XPath</th><th>CSS Selector</th></tr></thead>
          <tbody>
            <tr><td>Can navigate up (parent) and sideways</td><td>Can only navigate downward (child/descendant)</td></tr>
            <tr><td>Slightly slower</td><td>Faster execution</td></tr>
            <tr><td>Can search by text content</td><td>Cannot search by text content</td></tr>
            <tr><td>Supported in all browsers</td><td>Supported in all modern browsers</td></tr>
          </tbody>
        </table>
        <p><strong>Preference:</strong> CSS Selector is preferred for speed and readability. XPath is used when I need to navigate to parent elements or when elements can only be identified by text content.</p>`
      },
      {
        q: "The element ID changes dynamically on every page load. How do you locate it?",
        a: `<span class="iq-scenario-tag"><i class="bi bi-briefcase me-1"></i> Scenario Based</span>
        <ol>
          <li><strong>Use a stable attribute</strong> — name, class, data-* attributes that don't change</li>
          <li><strong>XPath with contains():</strong> //input[contains(@id,'user_')] — if the prefix is stable</li>
          <li><strong>XPath with sibling/parent relationship:</strong> //label[text()='Username']/following-sibling::input</li>
          <li><strong>CSS with partial attribute:</strong> input[id*='user'] — attribute contains 'user'</li>
          <li><strong>Combine multiple stable attributes:</strong> //input[@type='text' and @placeholder='Enter username']</li>
        </ol>`
      }
    ]
  },
  {
    id: 'waits',
    title: 'Selenium Waits',
    section: 'selenium',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'Implicit Wait, Explicit Wait, and Fluent Wait — handling timing issues in Selenium automation.',
    content: `
      <div class="topic-section">
        <h2><i class="bi bi-hourglass-split"></i> Why Waits Are Needed</h2>
        <p>Modern web applications load content dynamically. Selenium executes commands very fast — sometimes <strong>faster than the browser can render elements</strong>. Waits prevent <code>NoSuchElementException</code> and <code>ElementNotInteractableException</code>.</p>

        <h3>Types of Waits</h3>

        <h4>1. Implicit Wait</h4>
        <div class="definition-card">
          <div class="definition-term">Implicit Wait</div>
          <div class="definition-body">Tells WebDriver to wait for a specified amount of time before throwing a NoSuchElementException. Applied globally to all findElement calls.</div>
        </div>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">// Set implicit wait of 10 seconds (applies to ALL findElement calls)
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

// Now any findElement will wait up to 10 seconds before failing
WebElement element = driver.findElement(By.id("username"));</code></pre>
        </div>

        <h4>2. Explicit Wait</h4>
        <div class="definition-card">
          <div class="definition-term">Explicit Wait</div>
          <div class="definition-body">Wait for a specific condition to be true before proceeding. Applied to individual elements/conditions. Uses WebDriverWait + ExpectedConditions.</div>
        </div>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));

// Wait until element is visible
WebElement element = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.id("loginBtn"))
);

// Wait until element is clickable
WebElement btn = wait.until(
    ExpectedConditions.elementToBeClickable(By.cssSelector(".submit-btn"))
);

// Wait until element contains text
wait.until(ExpectedConditions.textToBePresentInElementLocated(
    By.id("msg"), "Success"
));

// Wait until URL contains
wait.until(ExpectedConditions.urlContains("dashboard"));</code></pre>
        </div>

        <h4>3. Fluent Wait</h4>
        <div class="definition-card">
          <div class="definition-term">Fluent Wait</div>
          <div class="definition-body">Advanced wait with configurable polling frequency and ability to ignore specific exceptions. Checks condition at regular intervals.</div>
        </div>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.NoSuchElementException;
import java.time.Duration;

FluentWait&lt;WebDriver&gt; fluentWait = new FluentWait&lt;&gt;(driver)
    .withTimeout(Duration.ofSeconds(30))    // max wait time
    .pollingEvery(Duration.ofSeconds(2))    // check every 2 seconds
    .ignoring(NoSuchElementException.class); // ignore this exception

WebElement element = fluentWait.until(driver -&gt;
    driver.findElement(By.id("dynamicElement"))
);</code></pre>
        </div>

        <table class="comparison-table">
          <thead><tr><th>Wait Type</th><th>Scope</th><th>Polling</th><th>Best For</th></tr></thead>
          <tbody>
            <tr><td>Implicit Wait</td><td>Global (all elements)</td><td>Default (500ms)</td><td>Simple pages, general use</td></tr>
            <tr><td>Explicit Wait</td><td>Specific element/condition</td><td>Default (500ms)</td><td>Specific conditions, AJAX</td></tr>
            <tr><td>Fluent Wait</td><td>Specific element</td><td>Configurable</td><td>Dynamic elements, custom polling</td></tr>
          </tbody>
        </table>

        <div class="info-box danger">
          <div class="info-box-title"><i class="bi bi-exclamation-triangle me-1"></i> Avoid Thread.sleep()</div>
          <p>Never use Thread.sleep() in production test code. It wastes time by always waiting the full duration even if the element appears earlier. Use explicit waits instead.</p>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is the difference between Implicit, Explicit, and Fluent Wait?",
        a: `<table class="comparison-table">
          <thead><tr><th>Feature</th><th>Implicit</th><th>Explicit</th><th>Fluent</th></tr></thead>
          <tbody>
            <tr><td>Scope</td><td>Global</td><td>Specific element</td><td>Specific element</td></tr>
            <tr><td>Condition</td><td>Element presence only</td><td>Any ExpectedCondition</td><td>Custom condition (lambda)</td></tr>
            <tr><td>Polling interval</td><td>Not configurable</td><td>Default 500ms</td><td>Configurable</td></tr>
            <tr><td>Ignore exceptions</td><td>No</td><td>Limited</td><td>Yes, configurable</td></tr>
          </tbody>
        </table>`
      },
      {
        q: "Your test is failing intermittently with StaleElementReferenceException. How do you fix it?",
        a: `<span class="iq-scenario-tag"><i class="bi bi-briefcase me-1"></i> Scenario Based</span>
        <p>StaleElementReferenceException occurs when the DOM has been refreshed/updated and the previously found element reference is no longer valid.</p>
        <p><strong>Solutions:</strong></p>
        <ol>
          <li><strong>Re-find the element</strong> — Move findElement() inside the method/action instead of storing it once</li>
          <li><strong>Use Explicit Wait:</strong> wait.until(ExpectedConditions.refreshed(ExpectedConditions.elementToBeClickable(locator)))</li>
          <li><strong>Try-Catch with Retry:</strong> Catch StaleElementReferenceException and retry finding the element</li>
          <li><strong>Wait for page to stabilize</strong> — Wait for document.readyState == 'complete' using JavaScript executor</li>
        </ol>`
      }
    ]
  },
  {
    id: 'pom',
    title: 'Page Object Model (POM)',
    section: 'selenium',
    difficulty: 'hard',
    time: '35 min',
    shortDesc: 'Design pattern for creating maintainable, reusable Selenium automation using Page Object Model and Page Factory.',
    content: `
      <div class="topic-section">
        <h2><i class="bi bi-layers"></i> What is Page Object Model?</h2>
        <p>Page Object Model (POM) is a <strong>design pattern</strong> that creates an object repository for web UI elements. Each web page has a corresponding Page class that contains the locators and methods for that page.</p>

        <h3>Benefits of POM</h3>
        <ul>
          <li><strong>Maintainability:</strong> Locator changes in one place only (the page class)</li>
          <li><strong>Reusability:</strong> Page methods can be reused across multiple test cases</li>
          <li><strong>Readability:</strong> Tests read like plain English</li>
          <li><strong>Separation of concerns:</strong> Test logic separated from UI interaction logic</li>
        </ul>

        <h3>POM Implementation</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA — LoginPage.java</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">// LoginPage.java — Page Object class
public class LoginPage {
    WebDriver driver;

    // Locators
    By usernameField = By.id("username");
    By passwordField = By.id("password");
    By loginButton   = By.cssSelector(".login-btn");
    By errorMessage  = By.id("error-msg");

    // Constructor
    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    // Methods
    public void enterUsername(String username) {
        driver.findElement(usernameField).sendKeys(username);
    }

    public void enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
    }

    public void clickLogin() {
        driver.findElement(loginButton).click();
    }

    public void login(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        clickLogin();
    }

    public String getErrorMessage() {
        return driver.findElement(errorMessage).getText();
    }
}</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA — LoginTest.java (Test Class)</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">// LoginTest.java — Test class using POM
public class LoginTest {
    WebDriver driver;
    LoginPage loginPage;

    @BeforeMethod
    public void setup() {
        driver = new ChromeDriver();
        driver.get("https://example.com/login");
        loginPage = new LoginPage(driver);
    }

    @Test
    public void testValidLogin() {
        loginPage.login("admin@test.com", "Pass@123");
        Assert.assertTrue(driver.getCurrentUrl().contains("dashboard"));
    }

    @Test
    public void testInvalidLogin() {
        loginPage.login("wrong@test.com", "wrongpass");
        Assert.assertEquals(loginPage.getErrorMessage(), "Invalid credentials");
    }

    @AfterMethod
    public void teardown() {
        driver.quit();
    }
}</code></pre>
        </div>

        <h3>Page Factory</h3>
        <p>Page Factory is an <strong>enhanced POM</strong> using <code>@FindBy</code> annotations and <code>PageFactory.initElements()</code> for cleaner code.</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA — Page Factory</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPagePF {
    WebDriver driver;

    @FindBy(id = "username")
    WebElement usernameField;

    @FindBy(id = "password")
    WebElement passwordField;

    @FindBy(css = ".login-btn")
    WebElement loginButton;

    @FindBy(id = "error-msg")
    WebElement errorMessage;

    public LoginPagePF(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void login(String username, String password) {
        usernameField.sendKeys(username);
        passwordField.sendKeys(password);
        loginButton.click();
    }

    public String getErrorMessage() {
        return errorMessage.getText();
    }
}</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "Why do we use Page Object Model? What problem does it solve?",
        a: `<p>Without POM, locators are scattered throughout test classes. If a locator changes (e.g., login button ID changes), you need to update it in every test that uses it — which could be 50+ places.</p>
        <p><strong>POM solves this by:</strong></p>
        <ol>
          <li><strong>Single place for locators:</strong> Update only the page class — all tests using it get the fix automatically</li>
          <li><strong>Readable tests:</strong> loginPage.login("user", "pass") is cleaner than raw driver.findElement(By.id("btn")).click()</li>
          <li><strong>Reusable methods:</strong> login() method reused across 20 test cases</li>
          <li><strong>Easier debugging:</strong> If login fails, you know to check LoginPage.java</li>
        </ol>`
      },
      {
        q: "What is the difference between POM and Page Factory?",
        a: `<table class="comparison-table">
          <thead><tr><th>POM</th><th>Page Factory</th></tr></thead>
          <tbody>
            <tr><td>Uses By class for locators</td><td>Uses @FindBy annotation</td></tr>
            <tr><td>Elements located each time findElement() is called</td><td>Elements initialized once via PageFactory.initElements()</td></tr>
            <tr><td>No lazy initialization</td><td>Lazy initialization — element found only when accessed</td></tr>
            <tr><td>More verbose code</td><td>Cleaner, annotation-based code</td></tr>
          </tbody>
        </table>`
      }
    ]
  },
  {
    id: 'frameworks',
    title: 'Automation Frameworks',
    section: 'selenium',
    difficulty: 'hard',
    time: '40 min',
    shortDesc: 'Data Driven, Keyword Driven, and Hybrid frameworks — architecture and implementation patterns.',
    content: `
      <div class="topic-section">
        <h2><i class="bi bi-diagram-3"></i> Automation Frameworks</h2>
        <p>An automation framework is a <strong>set of guidelines, coding standards, tools, and practices</strong> that enable efficient test development and execution.</p>

        <h3>Types of Automation Frameworks</h3>
        <table class="comparison-table">
          <thead><tr><th>Framework</th><th>Description</th><th>Best For</th></tr></thead>
          <tbody>
            <tr><td><strong>Linear Scripting</strong></td><td>Record and playback, no structure</td><td>Proof of concept only</td></tr>
            <tr><td><strong>Modular</strong></td><td>Each module has its own test script</td><td>Small to medium projects</td></tr>
            <tr><td><strong>Data Driven</strong></td><td>Test data separate from test scripts (Excel/CSV)</td><td>Same test with different data sets</td></tr>
            <tr><td><strong>Keyword Driven</strong></td><td>Actions stored as keywords in external files</td><td>Non-technical stakeholders writing tests</td></tr>
            <tr><td><strong>Hybrid</strong></td><td>Combination of Data Driven + Keyword Driven + POM</td><td>Enterprise projects (most common)</td></tr>
            <tr><td><strong>BDD (Cucumber)</strong></td><td>Tests written in plain English (Gherkin)</td><td>Collaboration between business and QA</td></tr>
          </tbody>
        </table>

        <h3>Data Driven Framework</h3>
        <p>Test data (username, password, expected results) is stored in Excel/CSV/Database. Same test logic runs with multiple data sets.</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA — Data Driven with TestNG @DataProvider</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class DataDrivenLoginTest {

    // DataProvider returns test data as 2D array
    @DataProvider(name = "loginData")
    public Object[][] getLoginData() {
        return new Object[][] {
            {"admin@test.com",  "Pass@123",  true,  "dashboard"},
            {"wrong@test.com",  "Pass@123",  false, "Invalid credentials"},
            {"admin@test.com",  "wrongpass", false, "Invalid credentials"},
            {"",                "",          false, "Required field"},
        };
    }

    @Test(dataProvider = "loginData")
    public void testLogin(String email, String pass, boolean shouldPass, String expectedMsg) {
        // ... test logic using POM
        // loginPage.login(email, pass);
        // if(shouldPass) { Assert.assertTrue(isOnDashboard()); }
        // else { Assert.assertEquals(getErrorMsg(), expectedMsg); }
    }
}</code></pre>
        </div>

        <h3>Reading from Excel — Apache POI</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">JAVA — Excel Reader Utility</span>
            <button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button>
          </div>
          <pre><code class="language-java">import org.apache.poi.xssf.usermodel.*;
import java.io.FileInputStream;

public class ExcelUtils {
    public static String[][] readExcel(String filePath, String sheetName) throws Exception {
        FileInputStream fis = new FileInputStream(filePath);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);
        XSSFSheet sheet = workbook.getSheet(sheetName);

        int rows = sheet.getLastRowNum() + 1;
        int cols = sheet.getRow(0).getLastCellNum();
        String[][] data = new String[rows][cols];

        for (int i = 0; i &lt; rows; i++) {
            for (int j = 0; j &lt; cols; j++) {
                data[i][j] = sheet.getRow(i).getCell(j).getStringCellValue();
            }
        }
        workbook.close();
        return data;
    }
}</code></pre>
        </div>

        <h3>Hybrid Framework — Folder Structure</h3>
        <div class="definition-card">
          <div class="definition-term">Recommended Project Structure</div>
          <div class="definition-body">
            <pre style="font-family: monospace; font-size:.82rem; color: var(--text-muted); margin:0;">
src/main/java/
├── pages/          ← Page Object classes
│   ├── BasePage.java
│   ├── LoginPage.java
│   └── DashboardPage.java
├── utils/          ← Utility classes
│   ├── ExcelUtils.java
│   ├── ConfigReader.java
│   └── WaitUtils.java
└── base/
    └── BaseTest.java   ← Setup &amp; teardown

src/test/java/
└── tests/
    ├── LoginTest.java
    └── CheckoutTest.java

src/test/resources/
├── config.properties
├── testng.xml
└── testdata/
    └── LoginData.xlsx
            </pre>
          </div>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "Explain the Hybrid Framework you have worked on.",
        a: `<span class="iq-scenario-tag"><i class="bi bi-briefcase me-1"></i> Experience Based</span>
        <ol>
          <li><strong>POM for page organization:</strong> Each page (Login, Dashboard, Cart) has its own Page class with locators and methods</li>
          <li><strong>Data Driven:</strong> Test data stored in Excel sheets, read using Apache POI, passed to tests via @DataProvider</li>
          <li><strong>TestNG for test management:</strong> Annotations, grouping (smoke, regression), parallel execution</li>
          <li><strong>Config Properties:</strong> Browser, URL, timeout values stored in config.properties — no hardcoding</li>
          <li><strong>BasePage &amp; BaseTest:</strong> Common setup (driver init), teardown, waits in base classes</li>
          <li><strong>Reporting:</strong> ExtentReports or Allure for HTML reports with screenshots on failure</li>
          <li><strong>CI Integration:</strong> Maven for dependency management, Jenkins for scheduled runs</li>
        </ol>`
      }
    ]
  },

  // ── Web Elements ──────────────────────────────────────────────
  {
    id: 'web-elements',
    title: 'Web Elements Interaction',
    section: 'selenium',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'Interacting with textboxes, buttons, checkboxes, radio buttons, dropdowns, and tables in Selenium.',
    content: `
      <div class="topic-section">
        <h2>Web Elements in Selenium</h2>
        <div class="ans-hero">Web elements are the building blocks of every web page — buttons, inputs, dropdowns, tables. Selenium provides methods to interact with each type.</div>
      </div>

      <div class="topic-section">
        <h2>1. Textbox / Input Field</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">WebElement usernameField = driver.findElement(By.id("username"));

// Type text
usernameField.sendKeys("admin@bank.com");

// Clear existing text
usernameField.clear();

// Type after clearing
usernameField.clear();
usernameField.sendKeys("newuser@bank.com");

// Get current value
String currentValue = usernameField.getAttribute("value");

// Check if field is enabled / displayed
boolean isEnabled   = usernameField.isEnabled();
boolean isDisplayed = usernameField.isDisplayed();</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>2. Button</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">WebElement loginBtn = driver.findElement(By.cssSelector(".login-btn"));

// Click
loginBtn.click();

// Check if button is enabled before clicking
if (loginBtn.isEnabled()) {
    loginBtn.click();
}

// Get button text
String btnText = loginBtn.getText(); // "Login"</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>3. Checkbox</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">WebElement rememberMe = driver.findElement(By.id("rememberMe"));

// Check if already selected
if (!rememberMe.isSelected()) {
    rememberMe.click();   // select it
}

// Uncheck if selected
if (rememberMe.isSelected()) {
    rememberMe.click();   // deselect
}

// Verify state
boolean isChecked = rememberMe.isSelected(); // true or false</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>4. Radio Button</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Get all radio buttons in a group
List&lt;WebElement&gt; transferTypes = driver.findElements(
    By.name("transferType")
);

// Select by visible text (by iterating)
for (WebElement radio : transferTypes) {
    if (radio.getAttribute("value").equals("NEFT")) {
        radio.click();
        break;
    }
}

// Or directly by value
driver.findElement(By.cssSelector("input[value='NEFT']")).click();</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>5. Dropdown — Select Class</h2>
        <div class="info-panel tip"><div class="panel-title">Important</div><p>Select class only works with native HTML <code>&lt;select&gt;</code> elements. For custom Bootstrap/div dropdowns, use click() + findElement().</p></div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Native Select Dropdown</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">import org.openqa.selenium.support.ui.Select;

WebElement countryDropdown = driver.findElement(By.id("country"));
Select select = new Select(countryDropdown);

// 3 ways to select
select.selectByVisibleText("India");  // by display text
select.selectByValue("IN");           // by value attribute
select.selectByIndex(2);              // by 0-based index

// Get selected option text
String selected = select.getFirstSelectedOption().getText();

// Get all options
List&lt;WebElement&gt; options = select.getOptions();
for (WebElement opt : options) {
    System.out.println(opt.getText());
}

// Multiple select (if multiple attribute present)
if (select.isMultiple()) {
    select.selectByVisibleText("India");
    select.selectByVisibleText("USA");
}</code></pre>
        </div>

        <h4>Custom Dropdown (Bootstrap / Angular)</h4>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Custom Dropdown</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// 1. Click to open the dropdown
driver.findElement(By.id("countryDropdown")).click();

// 2. Wait for list to appear
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.visibilityOfElementLocated(
    By.cssSelector(".dropdown-menu")));

// 3. Click the desired option
driver.findElement(By.xpath("//ul[@class='dropdown-menu']//li[text()='India']")).click();</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>6. Tables</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Table Handling</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Get all rows in a table
List&lt;WebElement&gt; rows = driver.findElements(By.cssSelector("table tbody tr"));
System.out.println("Total rows: " + rows.size());

// Get specific cell — row 2, column 3 (1-based)
String cellText = driver.findElement(
    By.xpath("//table/tbody/tr[2]/td[3]")
).getText();

// Loop through all rows and cells
for (WebElement row : rows) {
    List&lt;WebElement&gt; cells = row.findElements(By.tagName("td"));
    for (WebElement cell : cells) {
        System.out.print(cell.getText() + " | ");
    }
    System.out.println();
}

// Find row containing specific text
WebElement targetRow = driver.findElement(
    By.xpath("//table/tbody/tr[td[text()='ACC1234']]")
);</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "How do you handle a dropdown in Selenium? What is the difference between native and custom dropdowns?",
        a: `<div class="ans-hero">Native &lt;select&gt; → use Select class. Custom div/ul dropdowns → use click() + findElement().</div>
        <div class="compare-grid">
          <div class="compare-card green"><h6>Native HTML &lt;select&gt;</h6>HTML tag is &lt;select&gt;. Use: Select sel = new Select(element); sel.selectByVisibleText("India"); Works out of the box with Selenium.</div>
          <div class="compare-card blue"><h6>Custom Dropdown (Bootstrap)</h6>Built with &lt;div&gt;, &lt;ul&gt;, &lt;li&gt; tags. Select class does NOT work. Method: click dropdown button → wait for menu → click option.</div>
        </div>`
      }
    ]
  },

  // ── Advanced Handling ─────────────────────────────────────────
  {
    id: 'advanced-handling',
    title: 'Advanced Selenium Handling',
    section: 'selenium',
    difficulty: 'hard',
    time: '45 min',
    shortDesc: 'Alerts, iFrames, multiple windows/tabs, Actions class (hover, drag-drop), keyboard actions, and screenshots.',
    content: `
      <div class="topic-section">
        <h2>1. Alerts &amp; Popups</h2>
        <div class="ans-hero">JavaScript alerts are native browser dialogs — Selenium can only handle them via driver.switchTo().alert().</div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Alerts</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">import org.openqa.selenium.Alert;

// Wait for alert to appear
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.alertIsPresent());

// Switch to alert
Alert alert = driver.switchTo().alert();

// Read message
String message = alert.getText();
System.out.println("Alert says: " + message);

// Simple Alert (only OK) — accept
alert.accept();

// Confirm Alert (OK / Cancel) — dismiss for Cancel
alert.dismiss();

// Prompt Alert (text input)
alert.sendKeys("Karan");  // type in the prompt
alert.accept();           // click OK

// Safe handling with try-catch
try {
    Alert a = driver.switchTo().alert();
    a.accept();
} catch (NoAlertPresentException e) {
    System.out.println("No alert present");
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>2. iFrames (Inline Frames)</h2>
        <div class="ans-hero">An iFrame is an HTML page embedded inside another page — Selenium must switch context to interact with elements inside it.</div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — iFrames</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Switch to frame by index (0-based)
driver.switchTo().frame(0);

// Switch to frame by name or ID attribute
driver.switchTo().frame("paymentFrame");

// Switch to frame by WebElement (most reliable)
WebElement frame = driver.findElement(By.id("payment-iframe"));
driver.switchTo().frame(frame);

// Now you can interact with elements inside the iframe
driver.findElement(By.id("cardNumber")).sendKeys("4111111111111111");

// Switch back to main page
driver.switchTo().defaultContent();

// Switch to parent frame (if nested iframes)
driver.switchTo().parentFrame();</code></pre>
        </div>
        <div class="info-panel warning"><div class="panel-title">Common Mistake</div><p>Forgetting to call <code>switchTo().defaultContent()</code> after working in a frame. Subsequent actions on main page elements will fail until you switch back.</p></div>
      </div>

      <div class="topic-section">
        <h2>3. Multiple Windows &amp; Tabs</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Window Handling</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Save original window handle
String mainWindow = driver.getWindowHandle();

// Click link that opens new tab/window
driver.findElement(By.id("openStatementBtn")).click();

// Get all window handles
Set&lt;String&gt; allWindows = driver.getWindowHandles();

// Switch to the new window
for (String window : allWindows) {
    if (!window.equals(mainWindow)) {
        driver.switchTo().window(window);
        break;
    }
}

// Do work in new window
System.out.println("New window title: " + driver.getTitle());
driver.findElement(By.id("downloadBtn")).click();

// Close new window and switch back
driver.close();
driver.switchTo().window(mainWindow);</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>4. Actions Class — Mouse &amp; Keyboard</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Actions Class</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">import org.openqa.selenium.interactions.Actions;

Actions actions = new Actions(driver);

// Hover over element (reveals sub-menu)
WebElement menu = driver.findElement(By.id("mainMenu"));
actions.moveToElement(menu).perform();

// Double click
WebElement editBtn = driver.findElement(By.id("editBtn"));
actions.doubleClick(editBtn).perform();

// Right click (context menu)
WebElement item = driver.findElement(By.id("fileItem"));
actions.contextClick(item).perform();

// Drag and drop
WebElement source = driver.findElement(By.id("draggable"));
WebElement target = driver.findElement(By.id("droppable"));
actions.dragAndDrop(source, target).perform();

// Drag by offset (pixel coordinates)
actions.dragAndDropBy(source, 200, 100).perform();

// Keyboard — Ctrl+A (select all)
WebElement inputField = driver.findElement(By.id("textArea"));
inputField.click();
actions.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTROL).perform();

// Ctrl+C then Ctrl+V
actions.keyDown(Keys.CONTROL).sendKeys("c").keyUp(Keys.CONTROL)
       .keyDown(Keys.CONTROL).sendKeys("v").keyUp(Keys.CONTROL).perform();

// Press Enter
actions.sendKeys(Keys.ENTER).perform();

// Press Escape
actions.sendKeys(Keys.ESCAPE).perform();</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>5. Screenshots</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Screenshots</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

// Full page screenshot
TakesScreenshot ts = (TakesScreenshot) driver;
File srcFile = ts.getScreenshotAs(OutputType.FILE);
String path = "screenshots/test_" + System.currentTimeMillis() + ".png";
FileUtils.copyFile(srcFile, new File(path));

// Screenshot as byte array (for Extent Reports / Cucumber)
byte[] screenshotBytes = ts.getScreenshotAs(OutputType.BYTES);

// Element-level screenshot (Selenium 4)
WebElement chart = driver.findElement(By.id("salesChart"));
File elementShot = chart.getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(elementShot, new File("screenshots/chart.png"));</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "How do you handle iFrames in Selenium? What is a common mistake?",
        a: `<div class="ans-hero">Switch context into iframe with switchTo().frame(), interact, then return with switchTo().defaultContent().</div>
        <ul class="ans-list">
          <li><span class="icon">1️⃣</span>Find iframe element: <code>driver.findElement(By.id("payFrame"))</code></li>
          <li><span class="icon">2️⃣</span>Switch into it: <code>driver.switchTo().frame(frameElement);</code></li>
          <li><span class="icon">3️⃣</span>Interact with elements inside frame</li>
          <li><span class="icon">4️⃣</span>Switch back: <code>driver.switchTo().defaultContent();</code></li>
        </ul>
        <div class="info-panel warning"><div class="panel-title">Most common mistake</div><p>Forgetting switchTo().defaultContent() after working in frame — causes NoSuchElementException for ALL subsequent main page elements.</p></div>`
      },
      {
        q: "How do you perform hover in Selenium? What class do you use?",
        a: `<div class="ans-hero">Use the Actions class — moveToElement() performs hover, then .perform() executes the action.</div>
        <div class="code-block"><code>Actions actions = new Actions(driver);
WebElement menu = driver.findElement(By.id("navMenu"));
WebElement subItem = driver.findElement(By.id("subMenuItem"));
actions.moveToElement(menu).pause(500).click(subItem).perform();</code></div>
        <div class="info-panel tip"><div class="panel-title">Why .pause()?</div><p>Adding a small pause after hover gives the sub-menu time to animate/render before clicking.</p></div>`
      }
    ]
  },

  // ── JavaScript Executor ───────────────────────────────────────
  {
    id: 'javascript-executor',
    title: 'JavaScript Executor',
    section: 'selenium',
    difficulty: 'medium',
    time: '20 min',
    shortDesc: 'Execute JavaScript in the browser to scroll, click hidden elements, set values, and get page info.',
    content: `
      <div class="topic-section">
        <h2>What is JavascriptExecutor?</h2>
        <div class="ans-hero">JavascriptExecutor is a Selenium interface that lets you run JavaScript directly in the browser — used when normal Selenium commands cannot interact with an element.</div>
        <ul class="ans-list blue">
          <li><span class="icon">💡</span>Some elements are blocked by overlays — JS click bypasses them</li>
          <li><span class="icon">💡</span>Hidden inputs can't be typed into with sendKeys — JS setValue works</li>
          <li><span class="icon">💡</span>Selenium has no native scroll API — JS scroll is the only way</li>
        </ul>
      </div>

      <div class="topic-section">
        <h2>Common JavascriptExecutor Operations</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — JavascriptExecutor</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">JavascriptExecutor js = (JavascriptExecutor) driver;

// ── Scroll ──────────────────────────────────────────────────────
// Scroll to bottom of page
js.executeScript("window.scrollTo(0, document.body.scrollHeight);");

// Scroll to top
js.executeScript("window.scrollTo(0, 0);");

// Scroll by pixel offset (x, y)
js.executeScript("window.scrollBy(0, 500);");

// Scroll element into view
WebElement el = driver.findElement(By.id("footer"));
js.executeScript("arguments[0].scrollIntoView(true);", el);

// Scroll inside a div (not the whole page)
WebElement scrollDiv = driver.findElement(By.id("resultsDiv"));
js.executeScript("arguments[0].scrollTop = arguments[0].scrollHeight;", scrollDiv);

// ── Click ────────────────────────────────────────────────────────
// JS click — when normal click() is blocked by overlay
WebElement btn = driver.findElement(By.id("hiddenBtn"));
js.executeScript("arguments[0].click();", btn);

// ── Set Value ────────────────────────────────────────────────────
// Type into a hidden/read-only input field
WebElement dateField = driver.findElement(By.id("dateInput"));
js.executeScript("arguments[0].value='2025-12-25';", dateField);

// ── Get Page Info ─────────────────────────────────────────────────
String title = (String) js.executeScript("return document.title;");
String url   = (String) js.executeScript("return document.URL;");
Long height  = (Long)   js.executeScript("return document.body.scrollHeight;");

// ── Highlight element (useful for debugging) ─────────────────────
js.executeScript(
    "arguments[0].style.border='3px solid red';",
    driver.findElement(By.id("username"))
);</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "When would you use JavascriptExecutor instead of normal Selenium commands?",
        a: `<div class="ans-hero">Use JavascriptExecutor when standard Selenium commands fail due to overlays, hidden elements, or lack of native API support.</div>
        <table class="table-light-custom">
          <thead><tr><th>Situation</th><th>Normal Selenium</th><th>JavascriptExecutor</th></tr></thead>
          <tbody>
            <tr><td>Element blocked by overlay</td><td>click() throws ElementClickInterceptedException</td><td>js.executeScript("arguments[0].click()", el) ✅</td></tr>
            <tr><td>Hidden input field (date picker)</td><td>sendKeys() throws exception</td><td>js.executeScript("arguments[0].value='...'", el) ✅</td></tr>
            <tr><td>Scroll to element</td><td>No native scroll API</td><td>scrollIntoView() ✅</td></tr>
            <tr><td>Get inner text / value</td><td>getText() works for visible text</td><td>executeScript("return arguments[0].value", el) for inputs ✅</td></tr>
          </tbody>
        </table>`
      }
    ]
  },

  // ── Maven & Reporting ─────────────────────────────────────────
  {
    id: 'maven-reporting',
    title: 'Maven, Reporting & Logging',
    section: 'selenium',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'Maven build lifecycle, pom.xml dependencies, Extent Reports for HTML reports, and Log4j for logging.',
    content: `
      <div class="topic-section">
        <h2>What is Maven?</h2>
        <div class="ans-hero">Maven is a build automation tool for Java — manages project dependencies, build lifecycle, and test execution via a single pom.xml configuration.</div>
        <ul class="ans-list blue">
          <li><span class="icon">📦</span>Download Selenium/TestNG JARs automatically from Maven Central — no manual JAR management</li>
          <li><span class="icon">🔄</span>Standard build lifecycle: validate → compile → test → package → install → deploy</li>
          <li><span class="icon">🔧</span>Run tests from command line: <code>mvn clean test</code></li>
          <li><span class="icon">🔗</span>Integrates with Jenkins — Jenkins runs <code>mvn test</code> in CI pipeline</li>
        </ul>
      </div>

      <div class="topic-section">
        <h2>pom.xml — Key Dependencies</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — pom.xml (Essential Dependencies)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;project&gt;
  &lt;groupId&gt;com.bankapp&lt;/groupId&gt;
  &lt;artifactId&gt;selenium-framework&lt;/artifactId&gt;
  &lt;version&gt;1.0&lt;/version&gt;

  &lt;dependencies&gt;
    &lt;!-- Selenium WebDriver --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.seleniumhq.selenium&lt;/groupId&gt;
      &lt;artifactId&gt;selenium-java&lt;/artifactId&gt;
      &lt;version&gt;4.18.1&lt;/version&gt;
    &lt;/dependency&gt;

    &lt;!-- TestNG --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.testng&lt;/groupId&gt;
      &lt;artifactId&gt;testng&lt;/artifactId&gt;
      &lt;version&gt;7.9.0&lt;/version&gt;
    &lt;/dependency&gt;

    &lt;!-- ExtentReports --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.aventstack&lt;/groupId&gt;
      &lt;artifactId&gt;extentreports&lt;/artifactId&gt;
      &lt;version&gt;5.1.1&lt;/version&gt;
    &lt;/dependency&gt;

    &lt;!-- Apache POI (Excel) --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;
      &lt;artifactId&gt;poi-ooxml&lt;/artifactId&gt;
      &lt;version&gt;5.2.3&lt;/version&gt;
    &lt;/dependency&gt;

    &lt;!-- Log4j2 --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;
      &lt;artifactId&gt;log4j-core&lt;/artifactId&gt;
      &lt;version&gt;2.22.0&lt;/version&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;

  &lt;build&gt;
    &lt;plugins&gt;
      &lt;plugin&gt;
        &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
        &lt;artifactId&gt;maven-surefire-plugin&lt;/artifactId&gt;
        &lt;version&gt;3.2.5&lt;/version&gt;
        &lt;configuration&gt;
          &lt;suiteXmlFiles&gt;
            &lt;suiteXmlFile&gt;testng.xml&lt;/suiteXmlFile&gt;
          &lt;/suiteXmlFiles&gt;
        &lt;/configuration&gt;
      &lt;/plugin&gt;
    &lt;/plugins&gt;
  &lt;/build&gt;
&lt;/project&gt;</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Maven Commands</h2>
        <div class="compare-grid">
          <div class="compare-card blue"><h6>mvn clean</h6>Deletes the <code>target/</code> folder — removes all compiled files and old reports. Run before every fresh test execution.</div>
          <div class="compare-card green"><h6>mvn test</h6>Compiles source + runs all tests defined in testng.xml (or default discovery). Generates Surefire reports in <code>target/surefire-reports/</code>.</div>
          <div class="compare-card purple"><h6>mvn clean test</h6>Combined: clean + compile + test. This is the command Jenkins uses in CI pipelines.</div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Extent Reports</h2>
        <div class="ans-hero">Extent Reports generates beautiful HTML test execution reports with pass/fail status, logs, and screenshot attachments.</div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Extent Reports Setup</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">import com.aventstack.extentreports.*;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

public class ExtentManager {
    static ExtentReports extent;
    static ExtentTest test;

    public static void setUpExtent() {
        ExtentSparkReporter spark = new ExtentSparkReporter("reports/ExtentReport.html");
        spark.config().setDocumentTitle("Bank App Test Report");
        spark.config().setReportName("Regression Suite");

        extent = new ExtentReports();
        extent.attachReporter(spark);
        extent.setSystemInfo("Browser", "Chrome");
        extent.setSystemInfo("Environment", "UAT");
    }

    // Call in @BeforeMethod
    public static ExtentTest startTest(String testName) {
        test = extent.createTest(testName);
        return test;
    }

    // Call in @AfterSuite
    public static void flushReport() {
        extent.flush();
    }
}

// In test:
public class LoginTest {
    @Test
    public void testLogin() {
        ExtentTest test = ExtentManager.startTest("Login Test");
        try {
            loginPage.login("admin", "pass");
            test.pass("Login successful");
        } catch (Exception e) {
            test.fail(e);
            // Attach screenshot
            test.addScreenCaptureFromPath(captureScreenshot("loginFail"));
        }
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Log4j — Logging</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Log4j2</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LoginPage {
    private static final Logger log = LogManager.getLogger(LoginPage.class);

    public void login(String user, String pass) {
        log.info("Entering username: " + user);
        driver.findElement(By.id("username")).sendKeys(user);

        log.info("Entering password");
        driver.findElement(By.id("password")).sendKeys(pass);

        log.info("Clicking login button");
        driver.findElement(By.id("loginBtn")).click();

        log.debug("Login method completed");
    }
}
// Log levels (lowest → highest): TRACE → DEBUG → INFO → WARN → ERROR → FATAL</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is Maven? Why do we use it in Selenium projects?",
        a: `<div class="ans-hero">Maven automates dependency management and build lifecycle — eliminates manual JAR downloads and standardizes project structure.</div>
        <ul class="ans-list green">
          <li><span class="icon">📦</span><strong>Dependency management:</strong> Add Selenium/TestNG to pom.xml → Maven downloads and manages versions automatically</li>
          <li><span class="icon">🔄</span><strong>Build lifecycle:</strong> <code>mvn clean test</code> — one command to clean, compile, and run all tests</li>
          <li><span class="icon">🔗</span><strong>CI integration:</strong> Jenkins runs <code>mvn clean test</code> — no manual test execution</li>
          <li><span class="icon">📊</span><strong>Report generation:</strong> Surefire plugin generates XML/HTML reports automatically</li>
        </ul>`
      }
    ]
  },

  // ── Selenium Grid ─────────────────────────────────────────────
  {
    id: 'selenium-grid',
    title: 'Selenium Grid & Parallel Execution',
    section: 'selenium',
    difficulty: 'hard',
    time: '35 min',
    shortDesc: 'Run tests in parallel across multiple browsers and machines using Selenium Grid — reducing execution time from hours to minutes.',
    content: `
      <div class="topic-section">
        <h2>What is Selenium Grid?</h2>
        <div class="ans-hero">Selenium Grid distributes test execution across multiple machines and browsers simultaneously — enabling parallel cross-browser testing.</div>
        <ul class="ans-list blue">
          <li><span class="icon">⚡</span>500 tests × 1 browser sequential = 2 hours → Grid with 5 nodes = 24 minutes</li>
          <li><span class="icon">🌐</span>Cross-browser: Run same tests on Chrome, Firefox, Edge at the same time</li>
          <li><span class="icon">💻</span>Cross-OS: Windows node, Mac node, Linux node — all running in parallel</li>
        </ul>

        <h3>Grid 4 Architecture</h3>
        <div class="flow-diagram">
          <div class="flow-node fn-active"><div class="fn-title">Test Script</div><div class="fn-sub">RemoteWebDriver</div></div>
          <div class="flow-arrow"><i class="bi bi-arrow-right"></i></div>
          <div class="flow-node fn-orange"><div class="fn-title">Grid Hub / Router</div><div class="fn-sub">Central coordinator</div></div>
          <div class="flow-arrow"><i class="bi bi-arrow-right"></i></div>
          <div class="flow-node fn-green"><div class="fn-title">Nodes</div><div class="fn-sub">Chrome / Firefox / Edge</div></div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Grid 4 — Setup &amp; Usage</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">BASH — Start Grid</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Download selenium-server-4.x.x.jar
// Start as Hub:
java -jar selenium-server.jar hub

// Start as Node (on same or different machine):
java -jar selenium-server.jar node --hub http://localhost:4444

// Start as Standalone (Hub + Node on same machine):
java -jar selenium-server.jar standalone</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — RemoteWebDriver (Connect to Grid)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.net.URL;

// Create capabilities
ChromeOptions options = new ChromeOptions();
options.addArguments("--headless"); // run headless on CI

// Connect to Grid hub
WebDriver driver = new RemoteWebDriver(
    new URL("http://localhost:4444"),
    options
);

driver.get("https://bank.com");
System.out.println("Running on Grid: " + driver.getTitle());
driver.quit();</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Parallel Execution with TestNG + Grid</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — testng.xml Cross-Browser Parallel</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">&lt;suite name="CrossBrowserSuite" parallel="tests" thread-count="3"&gt;

  &lt;test name="Chrome Tests"&gt;
    &lt;parameter name="browser" value="chrome"/&gt;
    &lt;classes&gt;&lt;class name="tests.LoginTest"/&gt;&lt;/classes&gt;
  &lt;/test&gt;

  &lt;test name="Firefox Tests"&gt;
    &lt;parameter name="browser" value="firefox"/&gt;
    &lt;classes&gt;&lt;class name="tests.LoginTest"/&gt;&lt;/classes&gt;
  &lt;/test&gt;

  &lt;test name="Edge Tests"&gt;
    &lt;parameter name="browser" value="edge"/&gt;
    &lt;classes&gt;&lt;class name="tests.LoginTest"/&gt;&lt;/classes&gt;
  &lt;/test&gt;

&lt;/suite&gt;</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — BaseTest with @Parameters + ThreadLocal</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">public class BaseTest {
    // ThreadLocal ensures each parallel thread has its own driver
    private static ThreadLocal&lt;WebDriver&gt; tlDriver = new ThreadLocal&lt;&gt;();

    @Parameters("browser")
    @BeforeMethod
    public void setUp(@Optional("chrome") String browser) throws Exception {
        WebDriver driver;
        ChromeOptions options = new ChromeOptions();

        switch (browser.toLowerCase()) {
            case "chrome":
                driver = new RemoteWebDriver(new URL("http://localhost:4444"), options);
                break;
            case "firefox":
                driver = new RemoteWebDriver(new URL("http://localhost:4444"), new FirefoxOptions());
                break;
            default:
                driver = new RemoteWebDriver(new URL("http://localhost:4444"), new EdgeOptions());
        }
        tlDriver.set(driver);
        getDriver().manage().window().maximize();
    }

    public static WebDriver getDriver() {
        return tlDriver.get();
    }

    @AfterMethod
    public void tearDown() {
        if (getDriver() != null) {
            getDriver().quit();
            tlDriver.remove();
        }
    }
}</code></pre>
        </div>
        <div class="info-panel warning"><div class="panel-title">Critical: ThreadLocal</div><p>When running tests in parallel, each thread MUST have its own WebDriver instance. ThreadLocal&lt;WebDriver&gt; ensures thread isolation — without it, threads share the same driver and tests corrupt each other.</p></div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is Selenium Grid? When and why do you use it?",
        a: `<div class="ans-hero">Selenium Grid runs tests in parallel across multiple machines and browsers — reduces execution time and enables cross-browser testing.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Without Grid</h6>500 tests × 5 browsers = 2500 sequential test runs. Takes 10+ hours. Not feasible for Agile sprints.</div>
          <div class="compare-card green"><h6>With Grid (5 nodes)</h6>500 tests spread across 5 nodes = 100 tests per node. All 5 browsers run simultaneously. Total time ≈ 2 hours.</div>
        </div>`
      }
    ]
  },

  // ── CI/CD with Jenkins ────────────────────────────────────────
  {
    id: 'cicd-jenkins',
    title: 'CI/CD with Jenkins & Git',
    section: 'selenium',
    difficulty: 'hard',
    time: '30 min',
    shortDesc: 'Integrate Selenium tests into CI/CD pipelines using Jenkins — automate test execution on every code commit.',
    content: `
      <div class="topic-section">
        <h2>Why CI/CD for Automation?</h2>
        <div class="ans-hero">Without CI/CD, automation tests run manually by testers. With CI/CD, tests run automatically on every code commit — catching regressions immediately.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Without CI/CD</h6>Developer commits code at 5pm. Tester runs regression tests next day. Bug found 24 hours later. Developer has forgotten context. Expensive fix.</div>
          <div class="compare-card green"><h6>With CI/CD (Jenkins)</h6>Developer commits code. Jenkins detects commit. Automatically runs 500 regression tests. Emails report within 30 minutes. Bug found same day, same context.</div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Jenkins Pipeline for Selenium</h2>
        <div class="flow-diagram">
          <div class="flow-node fn-active"><div class="fn-title">Code Commit</div><div class="fn-sub">Git push</div></div>
          <div class="flow-arrow"><i class="bi bi-arrow-right"></i></div>
          <div class="flow-node fn-orange"><div class="fn-title">Jenkins Trigger</div><div class="fn-sub">Webhook / Poll SCM</div></div>
          <div class="flow-arrow"><i class="bi bi-arrow-right"></i></div>
          <div class="flow-node fn-green"><div class="fn-title">mvn clean test</div><div class="fn-sub">Run Selenium tests</div></div>
          <div class="flow-arrow"><i class="bi bi-arrow-right"></i></div>
          <div class="flow-node fn-active"><div class="fn-title">Publish Report</div><div class="fn-sub">Extent / Allure</div></div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Jenkins Jenkinsfile (Declarative Pipeline)</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">GROOVY — Jenkinsfile</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">pipeline {
    agent any

    environment {
        BROWSER = 'chrome'
        ENV     = 'UAT'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/company/selenium-framework.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean compile -DskipTests'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                sh 'mvn test -Dbrowser=\${BROWSER} -Denv=\${ENV}'
            }
        }

        stage('Publish Reports') {
            steps {
                publishHTML([
                    allowMissing: false,
                    reportDir: 'reports',
                    reportFiles: 'ExtentReport.html',
                    reportName: 'Selenium Test Report'
                ])
            }
        }
    }

    post {
        always {
            junit 'target/surefire-reports/*.xml'
        }
        failure {
            mail to: 'qa-team@company.com',
                 subject: "FAILED: Selenium Tests - \${BUILD_NUMBER}",
                 body: "Selenium tests failed. Check: \${BUILD_URL}"
        }
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Git Workflow for QA Teams</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">BASH — Essential Git Commands for QA</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">// Clone the automation framework
git clone https://github.com/company/selenium-framework.git

// Create feature branch for new test
git checkout -b feature/add-transfer-tests

// Check what files changed
git status

// Stage and commit your test files
git add src/test/java/tests/TransferTest.java
git add src/test/java/pages/TransferPage.java
git commit -m "Add automated tests for fund transfer feature"

// Push to remote and create PR
git push origin feature/add-transfer-tests

// Update your branch with latest main
git pull origin main</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Headless Browser Testing for CI</h2>
        <div class="ans-hero">CI servers (Jenkins) have no display — run tests in headless mode so no browser UI is needed.</div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Headless Chrome</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">ChromeOptions options = new ChromeOptions();

// Run without UI — required on CI servers
options.addArguments("--headless=new");      // Chrome 112+
options.addArguments("--no-sandbox");         // Required in Linux CI
options.addArguments("--disable-dev-shm-usage"); // Fix shared memory issues
options.addArguments("--window-size=1920,1080");  // Set viewport size

WebDriver driver = new ChromeDriver(options);</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "How do you integrate Selenium tests with Jenkins?",
        a: `<div class="ans-hero">Jenkins runs mvn clean test on every code commit — triggering automated test execution and publishing reports.</div>
        <ul class="ans-list green">
          <li><span class="icon">1️⃣</span>Install Jenkins + Maven + Git plugins</li>
          <li><span class="icon">2️⃣</span>Create Jenkins job → configure Git repository URL</li>
          <li><span class="icon">3️⃣</span>Build trigger: "Poll SCM" (check every 5 min) or GitHub Webhook (immediate trigger on push)</li>
          <li><span class="icon">4️⃣</span>Build step: <code>mvn clean test</code></li>
          <li><span class="icon">5️⃣</span>Post-build: Publish HTML report (Extent), Archive JUnit XML results</li>
          <li><span class="icon">6️⃣</span>Email notification on failure to QA team</li>
        </ul>`
      },
      {
        q: "Selenium tests pass locally but fail in Jenkins CI. How do you debug?",
        a: `<div class="ans-hero">This is a classic CI/local environment mismatch — follow a structured debug approach.</div>
        <ul class="ans-list amber">
          <li><span class="icon">1️⃣</span><strong>Headless mode:</strong> Is Chrome running headless on CI? Add --headless, --no-sandbox, --disable-dev-shm-usage flags</li>
          <li><span class="icon">2️⃣</span><strong>Browser version:</strong> CI server may have older Chrome — check ChromeDriver compatibility</li>
          <li><span class="icon">3️⃣</span><strong>Screen resolution:</strong> CI has no display — set window size explicitly: --window-size=1920,1080</li>
          <li><span class="icon">4️⃣</span><strong>Timing issues:</strong> CI machines can be slower — increase implicit/explicit waits</li>
          <li><span class="icon">5️⃣</span><strong>File paths:</strong> Relative paths may differ on CI — use absolute paths or System.getProperty("user.dir")</li>
          <li><span class="icon">6️⃣</span><strong>Check Jenkins console log</strong> and screenshots — add screenshot-on-failure listener</li>
        </ul>`
      }
    ]
  },

  // ── Database Testing ──────────────────────────────────────────
  {
    id: 'db-testing',
    title: 'Database Testing with JDBC',
    section: 'selenium',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'Validate backend data using JDBC — verify UI data matches database records in end-to-end test automation.',
    content: `
      <div class="topic-section">
        <h2>Why Database Testing in Automation?</h2>
        <div class="ans-hero">UI tests verify what the user sees — DB tests verify that the right data was actually saved/updated in the database. Combined, they give full end-to-end confidence.</div>
        <div class="compare-grid">
          <div class="compare-card blue"><h6>UI Test Only</h6>User submits transfer form. UI shows "Transfer Successful". But was the amount actually debited from Account A and credited to Account B in the DB? UI test cannot verify this.</div>
          <div class="compare-card green"><h6>UI + DB Test</h6>After transfer, run a JDBC query: SELECT balance FROM accounts WHERE id = 'ACC1234'. Compare DB result with expected value. True end-to-end validation.</div>
        </div>
      </div>

      <div class="topic-section">
        <h2>JDBC Dependency (pom.xml)</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">&lt;dependency&gt;
    &lt;groupId&gt;com.mysql&lt;/groupId&gt;
    &lt;artifactId&gt;mysql-connector-j&lt;/artifactId&gt;
    &lt;version&gt;8.3.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>JDBC Utility Class</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — DBUtil</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">import java.sql.*;

public class DBUtil {
    private static Connection conn;

    public static Connection getConnection() throws SQLException {
        if (conn == null || conn.isClosed()) {
            conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/bankdb", "root", "password");
        }
        return conn;
    }

    public static String getSingleValue(String query) throws SQLException {
        Statement stmt = getConnection().createStatement();
        ResultSet rs   = stmt.executeQuery(query);
        String result  = null;
        if (rs.next()) result = rs.getString(1);
        rs.close(); stmt.close();
        return result;
    }

    public static void close() throws SQLException {
        if (conn != null && !conn.isClosed()) conn.close();
    }
}

// In test — verify UI + DB together
@Test
public void verifyTransferInDB() throws Exception {
    transferPage.transferFunds("ACC1234", "ACC5678", 1000);
    Assert.assertTrue(transferPage.getSuccessMessage().contains("Transfer Successful"));

    String dbBalance = DBUtil.getSingleValue(
        "SELECT balance FROM accounts WHERE account_no = 'ACC1234'");
    Assert.assertEquals(dbBalance, "4000.00", "Balance not updated in DB");
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Common DB Validation Scenarios</h2>
        <table class="table-light-custom">
          <thead><tr><th>Test Scenario</th><th>SQL Query</th></tr></thead>
          <tbody>
            <tr><td>Verify new user saved</td><td>SELECT * FROM users WHERE email = 'test@bank.com'</td></tr>
            <tr><td>Verify balance after transfer</td><td>SELECT balance FROM accounts WHERE acc_no = 'ACC1234'</td></tr>
            <tr><td>Verify transaction created</td><td>SELECT COUNT(*) FROM transactions WHERE reference = 'REF001'</td></tr>
            <tr><td>Verify deleted record removed</td><td>SELECT COUNT(*) FROM beneficiaries WHERE id = 10 (expect 0)</td></tr>
          </tbody>
        </table>
      </div>
    `,
    interviewQuestions: [
      {
        q: "How do you combine UI testing and database testing in Selenium?",
        a: `<div class="ans-hero">Use JDBC alongside Selenium — UI performs the action, JDBC query validates the backend data was correctly saved.</div>
        <ul class="ans-list green">
          <li><span class="icon">1</span>UI action: Fill transfer form and click Submit via Selenium</li>
          <li><span class="icon">2</span>UI assertion: Verify success message shown on screen</li>
          <li><span class="icon">3</span>DB assertion: JDBC query → SELECT balance WHERE acc = 'X' → Assert equals expected</li>
          <li><span class="icon">4</span>This confirms the full flow: UI works AND data persisted correctly</li>
        </ul>`
      }
    ]
  },

  // ── API Testing Integration ───────────────────────────────────
  {
    id: 'api-testing-integration',
    title: 'API Testing with Rest Assured',
    section: 'selenium',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'Automate REST API tests with Rest Assured — test APIs independently and combine with UI tests for end-to-end coverage.',
    content: `
      <div class="topic-section">
        <h2>Why API Testing in Selenium Frameworks?</h2>
        <div class="ans-hero">APIs are the backbone of web apps — testing them directly is 10x faster than through the UI and catches backend issues before UI is even built.</div>
        <ul class="ans-list blue">
          <li><span class="icon">&#9889;</span>API tests run in milliseconds vs seconds for UI tests — run as a fast sanity layer</li>
          <li><span class="icon">&#128274;</span>Create test data via API instead of slow UI flows — speed up test setup</li>
          <li><span class="icon">&#128279;</span>Combined strategy: API creates user, Selenium tests UI login, API verifies session</li>
        </ul>
      </div>

      <div class="topic-section">
        <h2>Rest Assured Setup</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — pom.xml</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">&lt;dependency&gt;
    &lt;groupId&gt;io.rest-assured&lt;/groupId&gt;
    &lt;artifactId&gt;rest-assured&lt;/artifactId&gt;
    &lt;version&gt;5.4.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>REST API CRUD Tests</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Rest Assured Tests</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class AccountAPITest {

    @BeforeClass
    public void setUp() {
        RestAssured.baseURI = "https://api.bankapp.com";
    }

    @Test
    public void getAccountDetails() {
        given()
            .header("Authorization", "Bearer " + getToken())
        .when()
            .get("/api/accounts/ACC1234")
        .then()
            .statusCode(200)
            .body("accountNumber", equalTo("ACC1234"))
            .body("balance", greaterThan(0.0f))
            .body("status", equalTo("ACTIVE"));
    }

    @Test
    public void createBeneficiary() {
        String body = "{\"name\":\"John Doe\",\"accountNumber\":\"ACC9876\"}";
        given()
            .header("Authorization", "Bearer " + getToken())
            .contentType("application/json")
            .body(body)
        .when()
            .post("/api/beneficiaries")
        .then()
            .statusCode(201)
            .body("name", equalTo("John Doe"));
    }

    @Test
    public void deleteBeneficiary() {
        given()
            .header("Authorization", "Bearer " + getToken())
        .when()
            .delete("/api/beneficiaries/5")
        .then()
            .statusCode(204);
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Combined UI + API Test Pattern</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — End-to-End Test</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">@Test
public void endToEndTransferTest() {
    // STEP 1: Create test user via API (fast — no UI needed)
    String userId = apiUtil.createUser("testuser@bank.com", "Test@1234");

    // STEP 2: Login via UI (testing UI layer)
    loginPage.login("testuser@bank.com", "Test@1234");
    dashboardPage.assertDashboardLoaded();

    // STEP 3: Perform transfer via UI
    transferPage.transferFunds("ACC1234", "ACC5678", 500.00);
    Assert.assertEquals(transferPage.getSuccessMsg(), "Transfer Successful");

    // STEP 4: Verify via API (faster than reading UI table)
    given()
        .header("Authorization", "Bearer " + getToken())
    .when()
        .get("/api/transactions/latest")
    .then()
        .statusCode(200)
        .body("amount", equalTo(500.0f))
        .body("status", equalTo("COMPLETED"));

    // STEP 5: Cleanup via API
    apiUtil.deleteUser(userId);
}</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "How do you combine API testing with Selenium UI testing?",
        a: `<div class="ans-hero">Use API for test setup/teardown and verification — use Selenium only for UI-layer testing. This is the fastest and most reliable end-to-end strategy.</div>
        <ul class="ans-list green">
          <li><span class="icon">A</span><strong>API for setup:</strong> Create test users/data via API (10ms) instead of via UI forms (5+ seconds)</li>
          <li><span class="icon">B</span><strong>Selenium for UI:</strong> Test the actual UI workflows, user experience, visual correctness</li>
          <li><span class="icon">C</span><strong>API for verification:</strong> After UI action, verify backend state via API — faster than reading from UI</li>
          <li><span class="icon">D</span><strong>API for cleanup:</strong> Delete test data via API after test — no manual cleanup</li>
        </ul>`
      }
    ]
  },

  // ── Enterprise Framework ──────────────────────────────────────
  {
    id: 'enterprise-framework',
    title: 'Enterprise Selenium Framework',
    section: 'selenium',
    difficulty: 'hard',
    time: '50 min',
    shortDesc: 'Build a production-grade automation framework: POM + TestNG + Maven + Extent Reports + Jenkins + Git — the complete SDET stack.',
    content: `
      <div class="topic-section">
        <h2>Enterprise Framework Architecture</h2>
        <div class="ans-hero">An enterprise Selenium framework combines all layers into a maintainable, scalable structure that a team of 5-20 QA engineers can work on simultaneously.</div>

        <h3>Project Structure</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Structure</span></div>
          <pre><code class="language-java">selenium-framework/
├── src/main/java/com/bankapp/
│   ├── base/
│   │   └── BaseTest.java         ← WebDriver lifecycle
│   ├── pages/
│   │   ├── LoginPage.java        ← Page Object classes
│   │   ├── DashboardPage.java
│   │   └── TransferPage.java
│   └── utils/
│       ├── ConfigReader.java     ← Read config.properties
│       ├── ExcelUtil.java        ← Apache POI data reader
│       ├── DBUtil.java           ← JDBC database util
│       ├── APIUtil.java          ← Rest Assured API util
│       ├── ExtentManager.java    ← Report setup
│       └── ScreenshotUtil.java   ← Screenshot on failure
├── src/test/java/com/bankapp/tests/
│   ├── LoginTest.java
│   ├── TransferTest.java
│   └── AccountTest.java
├── src/test/resources/
│   ├── config.properties
│   ├── testng.xml
│   └── testdata/TransferData.xlsx
├── reports/
├── screenshots/
├── pom.xml
└── Jenkinsfile</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>BaseTest.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Thread-Safe BaseTest</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">public class BaseTest {
    protected static ThreadLocal&lt;WebDriver&gt; tlDriver = new ThreadLocal&lt;&gt;();

    @Parameters({"browser","env"})
    @BeforeMethod
    public void setUp(@Optional("chrome") String browser,
                      @Optional("UAT")    String env) {
        String baseUrl = ConfigReader.get("url." + env.toLowerCase());
        WebDriver driver = DriverFactory.createDriver(browser);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get(baseUrl);
        tlDriver.set(driver);
        ExtentManager.startTest(this.getClass().getSimpleName(), browser);
    }

    public static WebDriver getDriver() { return tlDriver.get(); }

    @AfterMethod
    public void tearDown(ITestResult result) {
        if (result.getStatus() == ITestResult.FAILURE) {
            String shot = ScreenshotUtil.capture(getDriver(), result.getName());
            ExtentManager.getTest().fail(result.getThrowable());
            ExtentManager.getTest().addScreenCaptureFromPath(shot);
        } else {
            ExtentManager.getTest().pass("Test passed");
        }
        getDriver().quit();
        tlDriver.remove();
    }

    @AfterSuite
    public void afterSuite() { ExtentManager.flush(); }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>LoginPage.java (Page Object)</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Page Factory POM</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">public class LoginPage extends BaseTest {
    @FindBy(id = "username")    private WebElement usernameField;
    @FindBy(id = "password")    private WebElement passwordField;
    @FindBy(id = "loginBtn")    private WebElement loginButton;
    @FindBy(css = ".error-msg") private WebElement errorMessage;

    public LoginPage() {
        PageFactory.initElements(getDriver(), this);
    }

    public DashboardPage login(String user, String pass) {
        usernameField.clear();
        usernameField.sendKeys(user);
        passwordField.sendKeys(pass);
        loginButton.click();
        return new DashboardPage();
    }

    public String getErrorMessage() {
        new WebDriverWait(getDriver(), Duration.ofSeconds(5))
            .until(ExpectedConditions.visibilityOf(errorMessage));
        return errorMessage.getText();
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Data-Driven LoginTest</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — @DataProvider Test</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard me-1"></i>Copy</button></div>
          <pre><code class="language-java">public class LoginTest extends BaseTest {

    @DataProvider(name = "loginData")
    public Object[][] getLoginData() {
        return ExcelUtil.readData("testdata/LoginData.xlsx", "LoginSheet");
    }

    @Test(dataProvider = "loginData", groups = {"smoke","regression"})
    public void testLogin(String username, String password, String expected) {
        LoginPage loginPage = new LoginPage();
        if (expected.equals("success")) {
            Assert.assertTrue(loginPage.login(username, password).isLoaded());
        } else {
            loginPage.login(username, password);
            Assert.assertEquals(loginPage.getErrorMessage(), "Invalid credentials");
        }
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Framework Principles Summary</h2>
        <table class="table-light-custom">
          <thead><tr><th>Principle</th><th>Implementation</th><th>Benefit</th></tr></thead>
          <tbody>
            <tr><td>Page Object Model</td><td>Separate class per page with locators</td><td>1 locator change updates 1 file, not 50 tests</td></tr>
            <tr><td>Thread Safety</td><td>ThreadLocal&lt;WebDriver&gt; in BaseTest</td><td>100 parallel tests without driver corruption</td></tr>
            <tr><td>Externalized Config</td><td>config.properties + ConfigReader</td><td>Switch UAT/Prod without code changes</td></tr>
            <tr><td>Externalized Data</td><td>Excel + DataProvider</td><td>Testers add test data without touching code</td></tr>
            <tr><td>Auto Screenshot</td><td>ITestResult in @AfterMethod</td><td>Every failure has visual evidence automatically</td></tr>
          </tbody>
        </table>
      </div>
    `,
    interviewQuestions: [
      {
        q: "Describe the architecture of an enterprise Selenium framework you have built or worked with.",
        a: `<div class="ans-hero">A production framework has 6 layers: Base (WebDriver), Pages (POM), Tests (TestNG), Data (Excel/JSON), Utils (Reports/DB), and CI (Jenkins/Maven).</div>
        <ul class="ans-list green">
          <li><span class="icon">A</span><strong>Base layer:</strong> BaseTest with ThreadLocal WebDriver — handles driver lifecycle for all tests. @BeforeMethod/@AfterMethod with screenshot-on-failure.</li>
          <li><span class="icon">B</span><strong>Page layer:</strong> One class per page — PageFactory @FindBy locators, reusable action methods, return next page object for chaining.</li>
          <li><span class="icon">C</span><strong>Test layer:</strong> TestNG @Test with groups (smoke/regression), @DataProvider for data-driven, organized by feature.</li>
          <li><span class="icon">D</span><strong>Reporting:</strong> Extent Reports auto-attached to every test — pass/fail logs + screenshots for failures.</li>
          <li><span class="icon">E</span><strong>CI/CD:</strong> Jenkinsfile triggers mvn clean test on every push — email alerts on failure, HTML report published.</li>
        </ul>`
      },
      {
        q: "How do you ensure your automation framework is maintainable when the application UI changes frequently?",
        a: `<div class="ans-hero">POM architecture ensures a locator change requires updating exactly ONE place — the page class. Tests never contain locators directly.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Without POM</h6>50 tests all have findElement(By.id("loginBtn")). Button ID changes. Must update 50 tests — high chance of missing some.</div>
          <div class="compare-card green"><h6>With POM</h6>LoginPage.java has @FindBy(id="loginBtn") once. 50 tests call loginPage.login(). ID changes → update LoginPage only. Done in 30 seconds.</div>
        </div>`
      }
    ]
  },

  // ── Banking Application — Selenium Tests ─────────────────────
  {
    id: 'selenium-banking-app',
    title: 'Banking App — Selenium Test Cases',
    section: 'selenium',
    difficulty: 'hard',
    time: '60 min',
    shortDesc: 'Real Selenium automation scripts for a banking application — login, fund transfer, account dashboard, beneficiary, statements, and security flows.',
    content: `
      <div class="topic-section">
        <h2>Banking Application Test Architecture</h2>
        <div class="ans-hero">A banking application demands the highest test coverage — any bug can cause financial loss. Every Selenium test must be precise, stable, and independently verifiable.</div>

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-shield-lock"></i></div>
            <div class="bm-title">Login &amp; Security</div>
            <div class="bm-count">5 scripts</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-arrow-left-right"></i></div>
            <div class="bm-title">Fund Transfer</div>
            <div class="bm-count">6 scripts</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-wallet2"></i></div>
            <div class="bm-title">Account Dashboard</div>
            <div class="bm-count">4 scripts</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-clock-history"></i></div>
            <div class="bm-title">Statements</div>
            <div class="bm-count">3 scripts</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-people"></i></div>
            <div class="bm-title">Beneficiary Mgmt</div>
            <div class="bm-count">4 scripts</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-person-gear"></i></div>
            <div class="bm-title">Profile &amp; Settings</div>
            <div class="bm-count">3 scripts</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Project Structure</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Project Layout</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">banking-selenium-framework/
├── src/main/java/com/bankapp/
│   ├── base/
│   │   └── BaseTest.java            ← ThreadLocal WebDriver, setup/teardown
│   ├── pages/
│   │   ├── LoginPage.java
│   │   ├── DashboardPage.java
│   │   ├── TransferPage.java
│   │   ├── BeneficiaryPage.java
│   │   ├── StatementPage.java
│   │   └── ProfilePage.java
│   └── utils/
│       ├── ConfigReader.java        ← reads config.properties
│       ├── DriverFactory.java       ← creates ChromeDriver/FirefoxDriver
│       ├── WaitUtil.java            ← explicit wait helpers
│       └── ScreenshotUtil.java      ← captures PNG on failure
├── src/test/java/com/bankapp/tests/
│   ├── LoginTest.java
│   ├── TransferTest.java
│   ├── DashboardTest.java
│   ├── BeneficiaryTest.java
│   └── StatementTest.java
├── src/test/resources/
│   ├── config.properties
│   ├── testng.xml
│   └── testdata/BankingData.xlsx
└── pom.xml</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>BaseTest.java — Shared Foundation</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — BaseTest.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class BaseTest {

    private static ThreadLocal&lt;WebDriver&gt; tlDriver = new ThreadLocal&lt;&gt;();

    @Parameters({"browser", "env"})
    @BeforeMethod
    public void setUp(
        @Optional("chrome") String browser,
        @Optional("UAT")    String env
    ) {
        WebDriver driver = DriverFactory.createDriver(browser);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(8));
        driver.get(ConfigReader.get("url." + env.toLowerCase()));
        tlDriver.set(driver);
    }

    public static WebDriver getDriver() {
        return tlDriver.get();
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown(ITestResult result) {
        if (result.getStatus() == ITestResult.FAILURE) {
            ScreenshotUtil.capture(getDriver(), result.getName());
        }
        if (getDriver() != null) {
            getDriver().quit();
            tlDriver.remove();
        }
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>1. Login Page — LoginPage.java &amp; LoginTest.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — LoginPage.java (Page Object)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class LoginPage {

    private WebDriver driver;
    private WebDriverWait wait;

    // Page Factory locators
    @FindBy(id = "username")              private WebElement usernameField;
    @FindBy(id = "password")              private WebElement passwordField;
    @FindBy(id = "loginBtn")              private WebElement loginButton;
    @FindBy(css = ".error-alert")         private WebElement errorAlert;
    @FindBy(css = ".forgot-password-link")private WebElement forgotPasswordLink;
    @FindBy(id = "captchaImage")          private WebElement captchaImage;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait   = new WebDriverWait(driver, Duration.ofSeconds(10));
        PageFactory.initElements(driver, this);
    }

    public LoginPage enterUsername(String username) {
        wait.until(ExpectedConditions.visibilityOf(usernameField));
        usernameField.clear();
        usernameField.sendKeys(username);
        return this;
    }

    public LoginPage enterPassword(String password) {
        passwordField.clear();
        passwordField.sendKeys(password);
        return this;
    }

    public DashboardPage clickLogin() {
        loginButton.click();
        return new DashboardPage(driver);
    }

    // Fluent chain: loginPage.enterUsername(u).enterPassword(p).clickLogin()
    public DashboardPage login(String username, String password) {
        return enterUsername(username).enterPassword(password).clickLogin();
    }

    public String getErrorMessage() {
        wait.until(ExpectedConditions.visibilityOf(errorAlert));
        return errorAlert.getText();
    }

    public boolean isErrorDisplayed() {
        try {
            wait.until(ExpectedConditions.visibilityOf(errorAlert));
            return errorAlert.isDisplayed();
        } catch (TimeoutException e) {
            return false;
        }
    }

    public boolean isLoginButtonEnabled() {
        return loginButton.isEnabled();
    }

    public void clickForgotPassword() {
        forgotPasswordLink.click();
    }
}</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — LoginTest.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class LoginTest extends BaseTest {

    LoginPage loginPage;

    @BeforeMethod
    public void initPage() {
        loginPage = new LoginPage(getDriver());
    }

    // TC-L-01: Valid credentials → Dashboard
    @Test(priority = 1, groups = {"smoke"})
    public void testValidLogin() {
        DashboardPage dashboard = loginPage
            .enterUsername("karan@bankapp.com")
            .enterPassword("Secure@1234")
            .clickLogin();

        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(10));
        wait.until(ExpectedConditions.titleContains("Dashboard"));

        Assert.assertTrue(dashboard.isLoaded(),
            "Dashboard should load after valid login");
        Assert.assertTrue(dashboard.getWelcomeText().contains("Karan"),
            "Welcome message should contain user name");
    }

    // TC-L-02: Wrong password → error message
    @Test(priority = 2, groups = {"smoke", "regression"})
    public void testInvalidPassword() {
        loginPage.enterUsername("karan@bankapp.com")
                 .enterPassword("WrongPass999")
                 .clickLogin();

        Assert.assertTrue(loginPage.isErrorDisplayed(),
            "Error alert should appear for invalid password");
        Assert.assertEquals(loginPage.getErrorMessage(),
            "Invalid username or password",
            "Error message text mismatch");
    }

    // TC-L-03: Blank submission → field-level validation messages
    @Test(priority = 3, groups = {"regression"})
    public void testBlankFieldValidation() {
        loginPage.clickLogin(); // submit without entering anything

        SoftAssert soft = new SoftAssert();
        // username and password error messages checked independently
        soft.assertTrue(getDriver().getPageSource().contains("Username is required"),
            "Username validation missing");
        soft.assertTrue(getDriver().getPageSource().contains("Password is required"),
            "Password validation missing");
        soft.assertAll();
    }

    // TC-L-04: Account lockout after 3 failed attempts
    @Test(priority = 4, groups = {"regression", "security"})
    public void testAccountLockoutAfterThreeFailures() {
        for (int attempt = 1; attempt &lt;= 3; attempt++) {
            loginPage.enterUsername("karan@bankapp.com")
                     .enterPassword("WrongPass" + attempt)
                     .clickLogin();

            if (attempt &lt; 3) {
                getDriver().navigate().refresh();
                loginPage = new LoginPage(getDriver());
            }
        }
        // After 3rd failure
        Assert.assertTrue(loginPage.getErrorMessage()
            .contains("Account is locked"),
            "Account should be locked after 3 failed attempts");
    }

    // TC-L-05: Data-driven login — valid + invalid + edge cases
    @DataProvider(name = "loginMatrix")
    public Object[][] loginMatrix() {
        return new Object[][] {
            // username,                password,       expectLogin, expectedText
            { "karan@bankapp.com",      "Secure@1234",  true,  "Dashboard"           },
            { "manager@bankapp.com",    "Manager@123",  true,  "Dashboard"           },
            { "karan@bankapp.com",      "wrong",        false, "Invalid username"    },
            { "",                       "Secure@1234",  false, "Username is required"},
            { "notexist@bankapp.com",   "any",          false, "Invalid username"    },
        };
    }

    @Test(dataProvider = "loginMatrix", groups = {"regression"}, priority = 5)
    public void testLoginDataDriven(String user, String pass,
                                    boolean expectSuccess, String expectedText) {
        loginPage.enterUsername(user).enterPassword(pass).clickLogin();

        if (expectSuccess) {
            Assert.assertTrue(getDriver().getTitle().contains("Dashboard"),
                "Login failed for user: " + user);
        } else {
            Assert.assertTrue(loginPage.isErrorDisplayed() ||
                getDriver().getPageSource().contains(expectedText),
                "Unexpected result for user: " + user);
        }
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>2. Dashboard Page — DashboardPage.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — DashboardPage.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class DashboardPage {

    private WebDriver driver;
    private WebDriverWait wait;

    @FindBy(css = ".welcome-message")      private WebElement welcomeText;
    @FindBy(css = ".account-balance")      private WebElement balanceElement;
    @FindBy(css = ".account-number")       private WebElement accountNumber;
    @FindBy(id = "fundTransferBtn")        private WebElement fundTransferBtn;
    @FindBy(id = "viewStatementBtn")       private WebElement viewStatementBtn;
    @FindBy(css = ".quick-links")          private WebElement quickLinks;
    @FindBy(css = ".notification-bell")    private WebElement notificationBell;
    @FindBy(css = ".recent-txn-table tbody tr") private List&lt;WebElement&gt; recentTxns;

    public DashboardPage(WebDriver driver) {
        this.driver = driver;
        this.wait   = new WebDriverWait(driver, Duration.ofSeconds(10));
        PageFactory.initElements(driver, this);
    }

    public boolean isLoaded() {
        try {
            wait.until(ExpectedConditions.visibilityOf(balanceElement));
            return true;
        } catch (TimeoutException e) { return false; }
    }

    public String getWelcomeText() {
        return welcomeText.getText();
    }

    public double getAccountBalance() {
        String raw = balanceElement.getText()
            .replaceAll("[^0-9.]", ""); // strip ₹ and commas
        return Double.parseDouble(raw);
    }

    public String getAccountNumber() {
        return accountNumber.getText().trim();
    }

    public int getRecentTransactionCount() {
        return recentTxns.size();
    }

    public TransferPage clickFundTransfer() {
        wait.until(ExpectedConditions.elementToBeClickable(fundTransferBtn));
        fundTransferBtn.click();
        return new TransferPage(driver);
    }

    public StatementPage clickViewStatement() {
        viewStatementBtn.click();
        return new StatementPage(driver);
    }
}</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — DashboardTest.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class DashboardTest extends BaseTest {

    DashboardPage dashboard;

    @BeforeMethod
    public void loginFirst() {
        LoginPage lp = new LoginPage(getDriver());
        dashboard = lp.login("karan@bankapp.com", "Secure@1234");
        Assert.assertTrue(dashboard.isLoaded(), "Pre-condition: dashboard must load");
    }

    // TC-D-01: All dashboard widgets present
    @Test(priority = 1, groups = {"smoke"})
    public void testDashboardElementsVisible() {
        SoftAssert soft = new SoftAssert();
        soft.assertNotNull(dashboard.getWelcomeText(),         "Welcome text missing");
        soft.assertTrue(dashboard.getAccountBalance() >= 0,    "Balance should be >= 0");
        soft.assertNotNull(dashboard.getAccountNumber(),       "Account number missing");
        soft.assertTrue(dashboard.getRecentTransactionCount() >= 0,
            "Recent transactions section missing");
        soft.assertAll();
    }

    // TC-D-02: Account balance display format
    @Test(priority = 2, groups = {"regression"})
    public void testBalanceFormat() {
        double balance = dashboard.getAccountBalance();
        // Balance should be a valid positive number
        Assert.assertTrue(balance >= 0,
            "Balance must be non-negative, got: " + balance);
    }

    // TC-D-03: Quick links navigation
    @Test(priority = 3, groups = {"regression"})
    public void testFundTransferNavigation() {
        TransferPage tp = dashboard.clickFundTransfer();
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(10));
        wait.until(ExpectedConditions.titleContains("Fund Transfer"));
        Assert.assertTrue(getDriver().getTitle().contains("Transfer"),
            "Should navigate to Fund Transfer page");
    }

    // TC-D-04: Recent transactions table populated
    @Test(priority = 4, groups = {"regression"})
    public void testRecentTransactionsPresent() {
        Assert.assertTrue(dashboard.getRecentTransactionCount() > 0,
            "Dashboard should show at least one recent transaction");
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>3. Fund Transfer — TransferPage.java &amp; TransferTest.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — TransferPage.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class TransferPage {

    private WebDriver driver;
    private WebDriverWait wait;

    @FindBy(id = "beneficiaryAccount")      private WebElement beneficiaryField;
    @FindBy(id = "transferAmount")          private WebElement amountField;
    @FindBy(id = "transferType")            private WebElement transferTypeDropdown;
    @FindBy(id = "remarks")                 private WebElement remarksField;
    @FindBy(id = "proceedBtn")              private WebElement proceedButton;
    @FindBy(id = "confirmBtn")              private WebElement confirmButton;
    @FindBy(id = "otpField")               private WebElement otpField;
    @FindBy(css = ".success-msg")           private WebElement successMessage;
    @FindBy(css = ".error-msg")             private WebElement errorMessage;
    @FindBy(css = ".reference-number")      private WebElement referenceNumber;
    @FindBy(css = ".available-balance")     private WebElement availableBalance;

    public TransferPage(WebDriver driver) {
        this.driver = driver;
        this.wait   = new WebDriverWait(driver, Duration.ofSeconds(10));
        PageFactory.initElements(driver, this);
    }

    public TransferPage selectTransferType(String type) {
        Select select = new Select(transferTypeDropdown);
        select.selectByVisibleText(type); // NEFT / IMPS / RTGS
        return this;
    }

    public TransferPage enterBeneficiaryAccount(String account) {
        wait.until(ExpectedConditions.visibilityOf(beneficiaryField));
        beneficiaryField.clear();
        beneficiaryField.sendKeys(account);
        return this;
    }

    public TransferPage enterAmount(String amount) {
        amountField.clear();
        amountField.sendKeys(amount);
        return this;
    }

    public TransferPage enterRemarks(String text) {
        remarksField.sendKeys(text);
        return this;
    }

    public TransferPage clickProceed() {
        proceedButton.click();
        return this;
    }

    public void enterOTPAndConfirm(String otp) {
        wait.until(ExpectedConditions.visibilityOf(otpField));
        otpField.sendKeys(otp);
        confirmButton.click();
    }

    public String getSuccessMessage() {
        wait.until(ExpectedConditions.visibilityOf(successMessage));
        return successMessage.getText();
    }

    public String getErrorMessage() {
        wait.until(ExpectedConditions.visibilityOf(errorMessage));
        return errorMessage.getText();
    }

    public String getReferenceNumber() {
        return referenceNumber.getText().trim();
    }

    public double getAvailableBalance() {
        String raw = availableBalance.getText().replaceAll("[^0-9.]", "");
        return Double.parseDouble(raw);
    }
}</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — TransferTest.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class TransferTest extends BaseTest {

    TransferPage transferPage;
    double balanceBefore;

    @BeforeMethod
    public void loginAndNavigate() {
        LoginPage lp = new LoginPage(getDriver());
        DashboardPage dash = lp.login("karan@bankapp.com", "Secure@1234");
        balanceBefore = dash.getAccountBalance();
        transferPage  = dash.clickFundTransfer();
    }

    // TC-T-01: Successful NEFT transfer
    @Test(priority = 1, groups = {"smoke"})
    public void testSuccessfulNEFTTransfer() {
        transferPage
            .selectTransferType("NEFT")
            .enterBeneficiaryAccount("9876543210")
            .enterAmount("5000")
            .enterRemarks("Monthly rent")
            .clickProceed();

        transferPage.enterOTPAndConfirm("123456"); // mock OTP in test env

        SoftAssert soft = new SoftAssert();
        soft.assertTrue(transferPage.getSuccessMessage()
            .contains("Transfer Successful"),           "Success message missing");
        soft.assertTrue(transferPage.getReferenceNumber()
            .startsWith("TXN"),                        "Reference number format wrong");
        soft.assertAll();
    }

    // TC-T-02: IMPS transfer — instant confirmation
    @Test(priority = 2, groups = {"regression"})
    public void testIMPSTransfer() {
        transferPage
            .selectTransferType("IMPS")
            .enterBeneficiaryAccount("1234567890")
            .enterAmount("2000")
            .clickProceed();

        transferPage.enterOTPAndConfirm("123456");
        Assert.assertTrue(transferPage.getSuccessMessage()
            .contains("Transfer Successful"), "IMPS transfer failed");
    }

    // TC-T-03: Insufficient balance
    @Test(priority = 3, groups = {"regression"})
    public void testInsufficientBalance() {
        double largeAmount = balanceBefore + 100000; // exceeds balance
        transferPage
            .selectTransferType("NEFT")
            .enterBeneficiaryAccount("9876543210")
            .enterAmount(String.valueOf(largeAmount))
            .clickProceed();

        Assert.assertTrue(transferPage.getErrorMessage()
            .contains("Insufficient balance"),
            "Error not shown for insufficient funds");
    }

    // TC-T-04: Invalid beneficiary account
    @Test(priority = 4, groups = {"regression"})
    public void testInvalidBeneficiaryAccount() {
        transferPage
            .selectTransferType("NEFT")
            .enterBeneficiaryAccount("INVALID999")
            .enterAmount("1000")
            .clickProceed();

        Assert.assertTrue(transferPage.getErrorMessage()
            .contains("Invalid account number"),
            "Error not shown for invalid account");
    }

    // TC-T-05: Zero / negative amount validation
    @DataProvider(name = "invalidAmounts")
    public Object[][] invalidAmounts() {
        return new Object[][] {
            { "0",        "Amount must be greater than zero"   },
            { "-500",     "Amount cannot be negative"          },
            { "abc",      "Please enter a valid amount"        },
            { "99999999", "Exceeds daily transfer limit"       },
        };
    }

    @Test(dataProvider = "invalidAmounts", groups = {"regression"}, priority = 5)
    public void testInvalidAmounts(String amount, String expectedError) {
        transferPage
            .selectTransferType("NEFT")
            .enterBeneficiaryAccount("9876543210")
            .enterAmount(amount)
            .clickProceed();

        Assert.assertTrue(transferPage.getErrorMessage().contains(expectedError),
            "Wrong error for amount: " + amount);
    }

    // TC-T-06: Balance decreases after successful transfer
    @Test(priority = 6, groups = {"regression"})
    public void testBalanceDecreasesAfterTransfer() {
        double transferAmount = 3000;
        transferPage
            .selectTransferType("NEFT")
            .enterBeneficiaryAccount("9876543210")
            .enterAmount(String.valueOf(transferAmount))
            .clickProceed();
        transferPage.enterOTPAndConfirm("123456");

        // Navigate back to dashboard
        getDriver().navigate().back();
        DashboardPage dash = new DashboardPage(getDriver());
        double balanceAfter = dash.getAccountBalance();

        Assert.assertEquals(balanceAfter, balanceBefore - transferAmount, 0.01,
            "Balance should decrease by exactly the transfer amount");
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>4. Beneficiary Management — BeneficiaryTest.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — BeneficiaryTest.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class BeneficiaryTest extends BaseTest {

    BeneficiaryPage beneficiaryPage;

    @BeforeMethod
    public void setUp() {
        LoginPage lp = new LoginPage(getDriver());
        lp.login("karan@bankapp.com", "Secure@1234");
        beneficiaryPage = new BeneficiaryPage(getDriver());
        beneficiaryPage.navigate();
    }

    // TC-B-01: Add new beneficiary successfully
    @Test(priority = 1, groups = {"smoke", "regression"})
    public void testAddBeneficiary() {
        int countBefore = beneficiaryPage.getBeneficiaryCount();

        beneficiaryPage.clickAddBeneficiary()
            .enterName("Rahul Sharma")
            .enterAccountNumber("5555666677778888")
            .enterIFSC("HDFC0001234")
            .enterBankName("HDFC Bank")
            .clickSave();

        // Wait for page to refresh
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(5));
        wait.until(ExpectedConditions.textToBePresentInElement(
            beneficiaryPage.getSuccessBanner(), "Beneficiary added"));

        Assert.assertEquals(beneficiaryPage.getBeneficiaryCount(),
            countBefore + 1, "Beneficiary count should increase by 1");
    }

    // TC-B-02: Duplicate beneficiary rejected
    @Test(priority = 2, groups = {"regression"})
    public void testDuplicateBeneficiary() {
        // Add once
        beneficiaryPage.clickAddBeneficiary()
            .enterName("Test User")
            .enterAccountNumber("1111222233334444")
            .enterIFSC("SBIN0001234")
            .clickSave();

        // Try to add same account again
        beneficiaryPage.clickAddBeneficiary()
            .enterName("Test User 2")
            .enterAccountNumber("1111222233334444")
            .enterIFSC("SBIN0001234")
            .clickSave();

        Assert.assertTrue(beneficiaryPage.getErrorMessage()
            .contains("Beneficiary already exists"),
            "Duplicate beneficiary should not be allowed");
    }

    // TC-B-03: Delete beneficiary
    @Test(priority = 3, groups = {"regression"})
    public void testDeleteBeneficiary() {
        int countBefore = beneficiaryPage.getBeneficiaryCount();
        Assert.assertTrue(countBefore > 0,
            "Pre-condition: at least one beneficiary must exist");

        beneficiaryPage.deleteFirstBeneficiary();
        beneficiaryPage.confirmDelete(); // handles the confirm dialog

        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(5));
        wait.until(ExpectedConditions.numberOfElementsToBeLessThan(
            By.cssSelector(".beneficiary-row"), countBefore));

        Assert.assertEquals(beneficiaryPage.getBeneficiaryCount(),
            countBefore - 1, "Beneficiary count should decrease by 1");
    }

    // TC-B-04: Search beneficiary by name
    @Test(priority = 4, groups = {"regression"})
    public void testSearchBeneficiary() {
        String searchName = "Rahul";
        beneficiaryPage.searchByName(searchName);

        List&lt;String&gt; results = beneficiaryPage.getAllBeneficiaryNames();
        Assert.assertFalse(results.isEmpty(), "Search returned no results");
        for (String name : results) {
            Assert.assertTrue(name.toLowerCase().contains(searchName.toLowerCase()),
                "Result '" + name + "' does not contain search term '" + searchName + "'");
        }
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>5. Account Statement — StatementTest.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — StatementTest.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class StatementTest extends BaseTest {

    StatementPage statementPage;

    @BeforeMethod
    public void setUp() {
        LoginPage lp = new LoginPage(getDriver());
        DashboardPage dash = lp.login("karan@bankapp.com", "Secure@1234");
        statementPage = dash.clickViewStatement();
    }

    // TC-S-01: Statement page loads with transactions
    @Test(priority = 1, groups = {"smoke"})
    public void testStatementPageLoads() {
        Assert.assertTrue(statementPage.isLoaded(),
            "Statement page did not load");
        Assert.assertTrue(statementPage.getTransactionRowCount() > 0,
            "Statement should have at least one transaction");
    }

    // TC-S-02: Date range filter
    @Test(priority = 2, groups = {"regression"})
    public void testDateRangeFilter() {
        statementPage.setFromDate("01/01/2025");
        statementPage.setToDate("31/03/2025");
        statementPage.applyFilter();

        List&lt;WebElement&gt; rows = statementPage.getTransactionRows();
        Assert.assertFalse(rows.isEmpty(), "Filter returned no results");

        // Verify all displayed dates fall within the range
        for (WebElement row : rows) {
            String date = statementPage.getDateFromRow(row);
            Assert.assertTrue(
                DateUtil.isBetween(date, "01/01/2025", "31/03/2025"),
                "Transaction date " + date + " is outside the filter range"
            );
        }
    }

    // TC-S-03: Download statement as PDF
    @Test(priority = 3, groups = {"regression"})
    public void testDownloadStatementPDF() {
        statementPage.setFromDate("01/01/2025");
        statementPage.setToDate("31/01/2025");
        statementPage.applyFilter();
        statementPage.clickDownload("PDF");

        String downloadDir = ConfigReader.get("download.path");
        boolean fileFound  = WaitUtil.waitForFileDownload(downloadDir, ".pdf", 20);

        Assert.assertTrue(fileFound,
            "PDF statement was not downloaded within 20 seconds");
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>6. Security Test Scenarios</h2>
        <div class="info-panel tip"><div class="panel-title">Why Test Security in Selenium?</div><p>Banking apps are prime targets — SQL injection, XSS, and session fixation must be verified. Selenium can automate these checks by submitting malicious payloads and asserting the app handles them safely.</p></div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — SecurityTest.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class SecurityTest extends BaseTest {

    LoginPage loginPage;

    @BeforeMethod
    public void initPage() {
        loginPage = new LoginPage(getDriver());
    }

    // TC-SEC-01: SQL injection in login fields
    @DataProvider(name = "sqlPayloads")
    public Object[][] sqlPayloads() {
        return new Object[][] {
            { "' OR '1'='1",       "anything"       },
            { "admin'--",          "password"       },
            { "' OR 1=1--",        "any"            },
            { "\" OR \"\"=\"",     "pass"           },
        };
    }

    @Test(dataProvider = "sqlPayloads", groups = {"security"})
    public void testSQLInjectionPrevented(String username, String password) {
        loginPage.enterUsername(username)
                 .enterPassword(password)
                 .clickLogin();

        // App must show error, NOT login or crash
        Assert.assertFalse(getDriver().getTitle().contains("Dashboard"),
            "SQL injection allowed login — CRITICAL VULNERABILITY for: " + username);
        Assert.assertTrue(loginPage.isErrorDisplayed() ||
            getDriver().getPageSource().contains("Invalid"),
            "No rejection shown for SQL injection payload: " + username);
    }

    // TC-SEC-02: XSS in transfer remarks field
    @Test(groups = {"security"})
    public void testXSSInRemarksField() {
        // Login first
        DashboardPage dash = loginPage.login("karan@bankapp.com", "Secure@1234");
        TransferPage tp = dash.clickFundTransfer();

        String xssPayload = "&lt;script&gt;alert('XSS')&lt;/script&gt;";
        tp.selectTransferType("NEFT")
          .enterBeneficiaryAccount("9876543210")
          .enterAmount("100")
          .enterRemarks(xssPayload)
          .clickProceed();

        // XSS must be sanitised — no script execution, payload shown as plain text
        try {
            getDriver().switchTo().alert().dismiss(); // if alert fires — XSS present
            Assert.fail("XSS vulnerability found: script executed in remarks field");
        } catch (NoAlertPresentException e) {
            // Expected — no alert means XSS was sanitised correctly
        }
    }

    // TC-SEC-03: Session timeout after inactivity
    @Test(groups = {"security", "regression"})
    public void testSessionTimeout() throws InterruptedException {
        loginPage.login("karan@bankapp.com", "Secure@1234");
        Assert.assertTrue(new DashboardPage(getDriver()).isLoaded(),
            "Should be logged in");

        // Simulate inactivity — in test env, session timeout is 2 minutes
        Thread.sleep(120000); // wait 2 mins

        // Try to navigate to a protected page
        getDriver().get(ConfigReader.get("url.uat") + "/transfer");

        // Should redirect to login page
        Assert.assertTrue(getDriver().getCurrentUrl().contains("login"),
            "Session should expire after inactivity and redirect to login");
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>testng.xml — Full Banking Suite</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — banking-regression.xml</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd"&gt;

&lt;suite name="Banking App — Full Selenium Suite"
       parallel="tests" thread-count="2"&gt;

  &lt;listeners&gt;
    &lt;listener class-name="com.utils.TestListener"/&gt;
    &lt;listener class-name="com.utils.RetryTransformer"/&gt;
  &lt;/listeners&gt;

  &lt;!-- SMOKE — runs on every PR (fast, critical paths only) --&gt;
  &lt;test name="Smoke — Chrome"&gt;
    &lt;parameter name="browser" value="chrome"/&gt;
    &lt;parameter name="env"     value="UAT"/&gt;
    &lt;groups&gt;&lt;run&gt;&lt;include name="smoke"/&gt;&lt;/run&gt;&lt;/groups&gt;
    &lt;classes&gt;
      &lt;class name="com.tests.LoginTest"/&gt;
      &lt;class name="com.tests.DashboardTest"/&gt;
      &lt;class name="com.tests.TransferTest"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

  &lt;!-- REGRESSION — runs nightly, full coverage --&gt;
  &lt;test name="Regression — Chrome"&gt;
    &lt;parameter name="browser" value="chrome"/&gt;
    &lt;parameter name="env"     value="UAT"/&gt;
    &lt;groups&gt;
      &lt;run&gt;
        &lt;include name="regression"/&gt;
        &lt;exclude name="wip"/&gt;
      &lt;/run&gt;
    &lt;/groups&gt;
    &lt;classes&gt;
      &lt;class name="com.tests.LoginTest"/&gt;
      &lt;class name="com.tests.DashboardTest"/&gt;
      &lt;class name="com.tests.TransferTest"/&gt;
      &lt;class name="com.tests.BeneficiaryTest"/&gt;
      &lt;class name="com.tests.StatementTest"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

  &lt;!-- SECURITY — separate suite, runs weekly --&gt;
  &lt;test name="Security Tests"&gt;
    &lt;parameter name="browser" value="chrome"/&gt;
    &lt;parameter name="env"     value="UAT"/&gt;
    &lt;groups&gt;&lt;run&gt;&lt;include name="security"/&gt;&lt;/run&gt;&lt;/groups&gt;
    &lt;classes&gt;
      &lt;class name="com.tests.SecurityTest"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

&lt;/suite&gt;</code></pre>
        </div>
        <div class="info-panel tip"><div class="panel-title">Run from Maven</div><p><code>mvn clean test -DsuiteFile=src/test/resources/banking-regression.xml</code></p></div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How would you automate a fund transfer flow in a banking application using Selenium? What are the key challenges?",
        a: `<div class="ans-hero">Fund transfer involves multi-step navigation, dropdown interaction, OTP handling, and balance verification — each step needs explicit waits and proper assertions.</div>
        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Login &amp; navigate to Transfer page</div>
              <div class="step-desc">loginPage.login(user, pass) → dashboardPage.clickFundTransfer() — use Page Object fluent chain</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Fill form: type, account, amount, remarks</div>
              <div class="step-desc">Select class for dropdown (NEFT/IMPS), sendKeys for inputs, explicit wait before each field</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Handle OTP confirmation</div>
              <div class="step-desc">Wait for OTP field to appear, enter mock OTP (test env), click Confirm. Real OTP handled by mock SMS gateway in UAT.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Assert success + reference number</div>
              <div class="step-desc">SoftAssert: success message present, reference number starts with TXN, balance reduced by transfer amount</div>
            </div>
          </div>
        </div>
        <ul class="ans-list amber">
          <li><span class="icon">⚠</span><strong>Challenge 1 — OTP:</strong> Real OTP can't be automated. Solution: test environment uses a mock/fixed OTP or an API to retrieve it.</li>
          <li><span class="icon">⚠</span><strong>Challenge 2 — Timing:</strong> Bank APIs can be slow. Solution: WebDriverWait with ExpectedConditions, never Thread.sleep()</li>
          <li><span class="icon">⚠</span><strong>Challenge 3 — Balance verification:</strong> Parse ₹1,23,456.00 → strip currency and commas before comparison</li>
        </ul>`
      },
      {
        difficulty: 'hard',
        q: "How do you automate security testing of a banking application with Selenium? Give examples.",
        a: `<div class="ans-hero">Selenium can test SQL injection, XSS, and session timeout by submitting attack payloads and asserting the app rejects or sanitises them.</div>
        <table class="comparison-table">
          <thead><tr><th>Security Test</th><th>Selenium Approach</th><th>Pass Condition</th></tr></thead>
          <tbody>
            <tr><td>SQL Injection</td><td>Enter <code>' OR 1=1--</code> in login username field</td><td>Error shown, NOT logged in</td></tr>
            <tr><td>XSS in inputs</td><td>Enter <code>&lt;script&gt;alert('xss')&lt;/script&gt;</code> in remarks</td><td>NoAlertPresentException — script not executed</td></tr>
            <tr><td>Session timeout</td><td>Login, wait N minutes, try to access protected URL</td><td>Redirected to login page</td></tr>
            <tr><td>Forced browsing</td><td>Directly navigate to /admin or /transfer without login</td><td>Redirected to login, not allowed in</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'medium',
        q: "How do you handle dynamic elements and waits in a banking application where page loads are slower than typical sites?",
        a: `<div class="ans-hero">Use explicit WebDriverWait with specific ExpectedConditions — never implicit wait or Thread.sleep() in a banking framework.</div>
        <div class="code-block"><code><span class="cl">WebDriverWait</span> wait = <span class="kw">new</span> <span class="cl">WebDriverWait</span>(driver, <span class="cl">Duration</span>.<span class="fn">ofSeconds</span>(<span class="num">15</span>));

<span class="cm">// Wait for element to be visible</span>
wait.<span class="fn">until</span>(<span class="cl">ExpectedConditions</span>.<span class="fn">visibilityOfElementLocated</span>(
    <span class="cl">By</span>.<span class="fn">id</span>(<span class="st">"balanceAmount"</span>)));

<span class="cm">// Wait for success message text</span>
wait.<span class="fn">until</span>(<span class="cl">ExpectedConditions</span>.<span class="fn">textToBePresentInElementLocated</span>(
    <span class="cl">By</span>.<span class="fn">cssSelector</span>(<span class="st">".status-msg"</span>), <span class="st">"Transfer Successful"</span>));

<span class="cm">// Wait for loading spinner to disappear</span>
wait.<span class="fn">until</span>(<span class="cl">ExpectedConditions</span>.<span class="fn">invisibilityOfElementLocated</span>(
    <span class="cl">By</span>.<span class="fn">id</span>(<span class="st">"loadingSpinner"</span>)));

<span class="cm">// Wait for URL to change after redirect</span>
wait.<span class="fn">until</span>(<span class="cl">ExpectedConditions</span>.<span class="fn">urlContains</span>(<span class="st">"dashboard"</span>));</code></div>`
      }
    ]
  }
];
