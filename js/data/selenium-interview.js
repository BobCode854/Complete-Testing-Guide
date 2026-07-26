// ================================================================
// SELENIUM INTERVIEW QUESTIONS — 20 items
// ================================================================
const SELENIUM_INTERVIEW_QUESTIONS = [
  {
    q: "What is Selenium? Explain its 4 components — WebDriver, IDE, Grid, and RC.",
    difficulty: "easy",
    a: `<div class="ans-hero">Selenium is a free, open-source web automation framework that supports multiple languages, browsers, and operating systems — its 4 components each solve a different automation need.</div>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>Selenium WebDriver</h6>
    <ul>
      <li>Core component — most widely used</li>
      <li>Communicates directly with the browser via browser-specific drivers (ChromeDriver, GeckoDriver)</li>
      <li>Supports Java, Python, C#, Ruby, JS</li>
      <li>No separate server required</li>
      <li>Follows W3C WebDriver protocol</li>
    </ul>
  </div>
  <div class="compare-card green">
    <h6>Selenium IDE</h6>
    <ul>
      <li>Browser extension (Chrome &amp; Firefox)</li>
      <li>Record-and-playback tool — no coding needed</li>
      <li>Exports recorded tests to Java/Python</li>
      <li>Good for quick prototyping and beginners</li>
      <li>Not suitable for complex automation</li>
    </ul>
  </div>
  <div class="compare-card purple">
    <h6>Selenium Grid</h6>
    <ul>
      <li>Enables parallel test execution</li>
      <li>Hub-Node architecture — one hub controls many nodes</li>
      <li>Run tests on multiple browsers &amp; OS simultaneously</li>
      <li>Reduces total execution time drastically</li>
      <li>Supports cross-browser, cross-platform testing</li>
    </ul>
  </div>
  <div class="compare-card amber">
    <h6>Selenium RC (Remote Control)</h6>
    <ul>
      <li>Deprecated — replaced by WebDriver</li>
      <li>Used JavaScript injection to automate browsers</li>
      <li>Required a separate Selenium RC server process</li>
      <li>Slower and less stable than WebDriver</li>
      <li>No longer maintained — do not use</li>
    </ul>
  </div>
</div>
<div class="info-panel tip"><div class="panel-title">💡 Interview Tip</div><p>When asked "which Selenium component do you use?", always say <strong>Selenium WebDriver</strong> combined with <strong>Selenium Grid</strong> for parallel execution. RC is obsolete — mentioning that shows awareness of Selenium history.</p></div>`
  },
  {
    q: "What is the difference between findElement() and findElements() in Selenium?",
    difficulty: "easy",
    a: `<div class="ans-hero">findElement() returns a single WebElement and throws an exception if not found; findElements() returns a List and returns an empty list if nothing matches — never throws an exception.</div>
<table class="table-light-custom">
  <thead><tr><th>Feature</th><th><code>findElement()</code></th><th><code>findElements()</code></th></tr></thead>
  <tbody>
    <tr><td>Return type</td><td><code>WebElement</code></td><td><code>List&lt;WebElement&gt;</code></td></tr>
    <tr><td>If 0 matches</td><td>Throws <code>NoSuchElementException</code></td><td>Returns empty list — no exception</td></tr>
    <tr><td>If multiple matches</td><td>Returns the <em>first</em> matching element</td><td>Returns <em>all</em> matching elements</td></tr>
    <tr><td>Use case</td><td>Locate a unique element (login button, username field)</td><td>Locate a collection (all rows, all checkboxes, all links)</td></tr>
  </tbody>
</table>
<ul class="ans-list blue">
  <li><span class="icon">🔹</span><strong>findElement() example:</strong> <code>driver.findElement(By.id("loginBtn")).click();</code></li>
  <li><span class="icon">🔹</span><strong>findElements() example:</strong> <code>List&lt;WebElement&gt; rows = driver.findElements(By.tagName("tr"));</code></li>
  <li><span class="icon">🔹</span><strong>Check element exists:</strong> Use <code>findElements().size() &gt; 0</code> — safer than <code>findElement()</code> in a try-catch</li>
  <li><span class="icon">🔹</span><strong>Iterate all links:</strong> <code>for (WebElement link : driver.findElements(By.tagName("a"))) { System.out.println(link.getText()); }</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Best Practice</div><p>To check if an element is present without risking an exception, always use <code>driver.findElements(By.id("myId")).size() &gt; 0</code> instead of wrapping <code>findElement()</code> in a try-catch block.</p></div>`
  },
  {
    q: "What are the 8 locator types in Selenium? Explain each with a code example.",
    difficulty: "medium",
    a: `<div class="ans-hero">Selenium provides 8 built-in locator strategies via the By class — ranging from fast ID/Name lookups to powerful but slower XPath and CSS Selector expressions.</div>
<ul class="ans-list green">
  <li><span class="icon">1️⃣</span><strong>By.id</strong> — Most preferred. Fastest lookup. <code>driver.findElement(By.id("username"));</code></li>
  <li><span class="icon">2️⃣</span><strong>By.name</strong> — Common in HTML forms. <code>driver.findElement(By.name("email"));</code></li>
  <li><span class="icon">3️⃣</span><strong>By.className</strong> — Matches the CSS class attribute. <code>driver.findElement(By.className("login-btn"));</code> — avoid if multiple elements share the class</li>
  <li><span class="icon">4️⃣</span><strong>By.tagName</strong> — Matches HTML tag. Mostly used with <code>findElements()</code>. <code>driver.findElements(By.tagName("input"));</code></li>
  <li><span class="icon">5️⃣</span><strong>By.linkText</strong> — Exact text of an anchor tag. <code>driver.findElement(By.linkText("Forgot Password"));</code></li>
  <li><span class="icon">6️⃣</span><strong>By.partialLinkText</strong> — Partial text of an anchor. <code>driver.findElement(By.partialLinkText("Forgot"));</code></li>
  <li><span class="icon">7️⃣</span><strong>By.cssSelector</strong> — Fast and flexible. Supports attribute, class, ID, hierarchy. <code>driver.findElement(By.cssSelector("input[name='email']"));</code></li>
  <li><span class="icon">8️⃣</span><strong>By.xpath</strong> — Most powerful. Can traverse DOM up and sideways. <code>driver.findElement(By.xpath("//button[text()='Login']"));</code></li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Locator</th><th>Speed</th><th>Reliability</th><th>Best When</th></tr></thead>
  <tbody>
    <tr><td>id</td><td>Fastest</td><td>Highest</td><td>Element has unique ID</td></tr>
    <tr><td>name</td><td>Fast</td><td>High</td><td>Form inputs with name attr</td></tr>
    <tr><td>cssSelector</td><td>Fast</td><td>High</td><td>No ID/Name, attribute-based</td></tr>
    <tr><td>xpath</td><td>Moderate</td><td>High</td><td>Complex DOM, text-based, parent traversal</td></tr>
    <tr><td>className</td><td>Moderate</td><td>Medium</td><td>Unique CSS class</td></tr>
    <tr><td>linkText</td><td>Moderate</td><td>Medium</td><td>Anchor tags with exact text</td></tr>
    <tr><td>partialLinkText</td><td>Moderate</td><td>Medium</td><td>Anchor tags with partial text</td></tr>
    <tr><td>tagName</td><td>Slow</td><td>Low</td><td>Collecting all elements of a tag</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Priority Order</div><p>Always prefer: <strong>id → name → cssSelector → xpath</strong>. Avoid tagName for single-element lookups — it is too generic and will usually match multiple elements.</p></div>`
  },
  {
    q: "What is the difference between Absolute XPath and Relative XPath? Why is Relative XPath preferred?",
    difficulty: "medium",
    a: `<div class="ans-hero">Absolute XPath starts from the root HTML node and traces the full DOM path; Relative XPath starts from any node using // and is shorter, more readable, and far more resilient to DOM changes.</div>
<div class="compare-grid">
  <div class="compare-card red">
    <h6>Absolute XPath — Avoid</h6>
    <ul>
      <li>Starts from the root: <code>/html/body/...</code></li>
      <li>Full path from root to element</li>
      <li>Example: <code>/html/body/div[1]/form/input[2]</code></li>
      <li>Breaks if any parent element changes or is reordered</li>
      <li>Very brittle — one DOM change breaks the locator</li>
      <li>Long and unreadable</li>
    </ul>
  </div>
  <div class="compare-card green">
    <h6>Relative XPath — Preferred</h6>
    <ul>
      <li>Starts anywhere in the DOM using <code>//</code></li>
      <li>Example: <code>//input[@id='username']</code></li>
      <li>Example: <code>//button[contains(text(),'Login')]</code></li>
      <li>Stable — does not depend on the full DOM tree</li>
      <li>Short and readable</li>
      <li>Supports attributes, text, and functions</li>
    </ul>
  </div>
</div>
<ul class="ans-list blue">
  <li><span class="icon">📌</span><strong>By attribute:</strong> <code>//input[@id='username']</code></li>
  <li><span class="icon">📌</span><strong>By text:</strong> <code>//button[text()='Submit']</code></li>
  <li><span class="icon">📌</span><strong>contains():</strong> <code>//input[contains(@class,'search-field')]</code></li>
  <li><span class="icon">📌</span><strong>starts-with():</strong> <code>//input[starts-with(@id,'user_')]</code></li>
  <li><span class="icon">📌</span><strong>AND condition:</strong> <code>//input[@type='text' and @name='email']</code></li>
  <li><span class="icon">📌</span><strong>Parent traversal:</strong> <code>//span[text()='Error']/parent::div</code></li>
  <li><span class="icon">📌</span><strong>Following sibling:</strong> <code>//label[text()='Email']/following-sibling::input</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Rule of Thumb</div><p>Never use Absolute XPath in a real automation project. If your XPath starts with <code>/html</code>, rewrite it. Use <code>//</code> with a unique attribute like <code>[@id=]</code>, <code>[@name=]</code>, or <code>[contains(@class,)]</code> instead.</p></div>`
  },
  {
    q: "What is the difference between Implicit Wait, Explicit Wait, and Fluent Wait in Selenium? Provide code snippets.",
    difficulty: "hard",
    a: `<div class="ans-hero">Implicit Wait is a global timeout for element presence; Explicit Wait waits for a specific condition on a specific element; Fluent Wait is an advanced Explicit Wait with configurable polling interval and exception ignoring.</div>
<ul class="ans-list blue">
  <li><span class="icon">⏱️</span><strong>Implicit Wait</strong> — Set once, applies globally to every <code>findElement()</code> call in the session. Waits up to N seconds for element presence before throwing <code>NoSuchElementException</code>.
    <br><code>driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));</code></li>
  <li><span class="icon">⏳</span><strong>Explicit Wait</strong> — Targets a specific element and a specific condition. Uses <code>WebDriverWait</code> + <code>ExpectedConditions</code>. Polls every 500ms by default.
    <br><code>WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));</code>
    <br><code>wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("btn")));</code></li>
  <li><span class="icon">🔄</span><strong>Fluent Wait</strong> — Like Explicit Wait but with a configurable polling interval and the ability to ignore specific exceptions during polling.
    <br><code>FluentWait&lt;WebDriver&gt; fw = new FluentWait&lt;&gt;(driver).withTimeout(Duration.ofSeconds(30)).pollingEvery(Duration.ofSeconds(2)).ignoring(NoSuchElementException.class);</code></li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Feature</th><th>Implicit</th><th>Explicit</th><th>Fluent</th></tr></thead>
  <tbody>
    <tr><td>Scope</td><td>All <code>findElement()</code> calls globally</td><td>Single element/condition</td><td>Single element/condition</td></tr>
    <tr><td>Condition checked</td><td>Element presence only</td><td>Any <code>ExpectedConditions</code></td><td>Any custom lambda/condition</td></tr>
    <tr><td>Polling interval</td><td>Fixed (browser default)</td><td>Default 500ms</td><td>Configurable (e.g., every 2s)</td></tr>
    <tr><td>Ignore exceptions</td><td>No</td><td>No</td><td>Yes — <code>.ignoring()</code></td></tr>
    <tr><td>Best for</td><td>Simple stable pages</td><td>AJAX/dynamic elements</td><td>Slow/intermittent dynamic elements</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">⚠️ Never mix Implicit + Explicit Wait</div><p>Mixing both can cause unpredictable wait times because they interact with each other. If you use Explicit Wait, remove Implicit Wait. Never use <code>Thread.sleep()</code> in production — it always waits the full duration even if the element is ready.</p></div>`
  },
  {
    q: "What is the Page Object Model (POM)? What are its benefits? Show a LoginPage class structure.",
    difficulty: "hard",
    a: `<div class="ans-hero">Page Object Model is a design pattern where each web page has a corresponding Java class that stores its locators and interaction methods — separating test logic from page interaction code.</div>
<ul class="ans-list green">
  <li><span class="icon">✅</span><strong>Maintainability</strong> — Locator changes happen in one place (the page class). All 30 tests using <code>LoginPage</code> automatically get the fix.</li>
  <li><span class="icon">✅</span><strong>Reusability</strong> — <code>loginPage.login("user", "pass")</code> is called from multiple test classes without duplicating code.</li>
  <li><span class="icon">✅</span><strong>Readability</strong> — Tests read like plain English: <code>loginPage.login(); dashboardPage.verifyTitle();</code></li>
  <li><span class="icon">✅</span><strong>Separation of concerns</strong> — Test class contains assertions; Page class contains UI interactions. Clean architecture.</li>
  <li><span class="icon">✅</span><strong>Easier debugging</strong> — If login fails, you know to check <code>LoginPage.java</code>. No hunting through test files.</li>
</ul>
<ul class="ans-list purple">
  <li><span class="icon">📄</span><strong>LoginPage.java (Page Class)</strong>
    <br><code>public class LoginPage {</code>
    <br><code>&nbsp;&nbsp;WebDriver driver;</code>
    <br><code>&nbsp;&nbsp;By usernameField = By.id("username");</code>
    <br><code>&nbsp;&nbsp;By passwordField = By.id("password");</code>
    <br><code>&nbsp;&nbsp;By loginButton = By.cssSelector(".login-btn");</code>
    <br><code>&nbsp;&nbsp;By errorMsg = By.id("error-msg");</code>
    <br><code>&nbsp;&nbsp;public LoginPage(WebDriver driver) { this.driver = driver; }</code>
    <br><code>&nbsp;&nbsp;public void login(String user, String pass) {</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(usernameField).sendKeys(user);</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(passwordField).sendKeys(pass);</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(loginButton).click();</code>
    <br><code>&nbsp;&nbsp;}</code>
    <br><code>&nbsp;&nbsp;public String getError() { return driver.findElement(errorMsg).getText(); }</code>
    <br><code>}</code>
  </li>
  <li><span class="icon">🧪</span><strong>LoginTest.java (Test Class)</strong>
    <br><code>LoginPage loginPage = new LoginPage(driver);</code>
    <br><code>loginPage.login("admin@test.com", "Pass@123");</code>
    <br><code>Assert.assertTrue(driver.getCurrentUrl().contains("dashboard"));</code>
  </li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Page Factory Enhancement</div><p>Use <code>@FindBy(id="username") WebElement usernameField;</code> annotations with <code>PageFactory.initElements(driver, this);</code> in the constructor for cleaner POM code. This is called <strong>Page Factory</strong> — the enhanced version of POM.</p></div>`
  },
  {
    q: "How do you handle dropdowns in Selenium? Explain the Select class and its methods.",
    difficulty: "medium",
    a: `<div class="ans-hero">Selenium's Select class wraps a native HTML &lt;select&gt; element and provides three ways to choose an option — by visible text, by value attribute, or by index — plus methods to inspect all options.</div>
<ul class="ans-list blue">
  <li><span class="icon">📦</span><strong>Create Select object:</strong>
    <br><code>WebElement dropdownEl = driver.findElement(By.id("country"));</code>
    <br><code>Select select = new Select(dropdownEl);</code>
  </li>
  <li><span class="icon">1️⃣</span><strong>selectByVisibleText</strong> — Selects by the text the user sees.
    <br><code>select.selectByVisibleText("India");</code></li>
  <li><span class="icon">2️⃣</span><strong>selectByValue</strong> — Selects by the HTML <code>value</code> attribute.
    <br><code>select.selectByValue("IN");</code> — matches <code>&lt;option value="IN"&gt;India&lt;/option&gt;</code></li>
  <li><span class="icon">3️⃣</span><strong>selectByIndex</strong> — Selects by zero-based index.
    <br><code>select.selectByIndex(2);</code> — selects the 3rd option</li>
  <li><span class="icon">📋</span><strong>getOptions()</strong> — Returns all options as a list.
    <br><code>List&lt;WebElement&gt; options = select.getOptions();</code>
    <br><code>for (WebElement opt : options) { System.out.println(opt.getText()); }</code></li>
  <li><span class="icon">✅</span><strong>getFirstSelectedOption()</strong> — Gets currently selected option.
    <br><code>String selected = select.getFirstSelectedOption().getText();</code></li>
  <li><span class="icon">🔢</span><strong>isMultiple()</strong> — Checks if multi-select is enabled.
    <br><code>boolean isMulti = select.isMultiple();</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">⚠️ Only for Native &lt;select&gt; Tags</div><p>The <code>Select</code> class only works on standard HTML <code>&lt;select&gt;</code> elements. For custom dropdowns built with <code>&lt;div&gt;</code> or <code>&lt;ul&gt;</code> (like Bootstrap dropdowns), you must click the dropdown toggle and then click the desired option using <code>findElement()</code> directly.</p></div>`
  },
  {
    q: "How do you handle Alerts and Popups in Selenium? Explain accept, dismiss, getText, and sendKeys on alerts.",
    difficulty: "medium",
    a: `<div class="ans-hero">Selenium handles JavaScript browser alerts (alert, confirm, prompt) via the Alert interface accessed through driver.switchTo().alert() — which provides methods to accept, dismiss, read text, and type into prompts.</div>
<ul class="ans-list amber">
  <li><span class="icon">🔔</span><strong>alert()</strong> — Simple message alert. Only has OK button.
    <br>Accept: <code>driver.switchTo().alert().accept();</code></li>
  <li><span class="icon">❓</span><strong>confirm()</strong> — Confirmation popup with OK and Cancel buttons.
    <br>Accept (OK): <code>driver.switchTo().alert().accept();</code>
    <br>Dismiss (Cancel): <code>driver.switchTo().alert().dismiss();</code></li>
  <li><span class="icon">✏️</span><strong>prompt()</strong> — Input popup. Has a text field + OK + Cancel.
    <br><code>Alert prompt = driver.switchTo().alert();</code>
    <br><code>prompt.sendKeys("My Input Text");</code>
    <br><code>prompt.accept();</code></li>
  <li><span class="icon">📝</span><strong>getText()</strong> — Read the alert message text.
    <br><code>String alertMsg = driver.switchTo().alert().getText();</code></li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Alert Type</th><th>Buttons</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td><code>alert()</code></td><td>OK only</td><td><code>accept()</code></td></tr>
    <tr><td><code>confirm()</code></td><td>OK + Cancel</td><td><code>accept()</code> or <code>dismiss()</code></td></tr>
    <tr><td><code>prompt()</code></td><td>Text field + OK + Cancel</td><td><code>sendKeys()</code> then <code>accept()</code></td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">⚠️ Wait for Alert Before Switching</div><p>Always use an Explicit Wait before switching to an alert to avoid <code>NoAlertPresentException</code>: <code>wait.until(ExpectedConditions.alertIsPresent()); driver.switchTo().alert().accept();</code></p></div>`
  },
  {
    q: "How do you handle multiple browser windows/tabs in Selenium? Show code with getWindowHandles() and switchTo().window().",
    difficulty: "medium",
    a: `<div class="ans-hero">Selenium handles multiple windows by getting all window handle IDs via getWindowHandles(), then switching to the desired window using switchTo().window(handle) before interacting with it.</div>
<ul class="ans-list purple">
  <li><span class="icon">🪟</span><strong>Get current window handle:</strong>
    <br><code>String parentWindow = driver.getWindowHandle();</code></li>
  <li><span class="icon">🗂️</span><strong>Get all window handles:</strong>
    <br><code>Set&lt;String&gt; allWindows = driver.getWindowHandles();</code></li>
  <li><span class="icon">🔄</span><strong>Switch to new window (loop approach):</strong>
    <br><code>for (String handle : allWindows) {</code>
    <br><code>&nbsp;&nbsp;if (!handle.equals(parentWindow)) {</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;driver.switchTo().window(handle);</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;break;</code>
    <br><code>&nbsp;&nbsp;}</code>
    <br><code>}</code></li>
  <li><span class="icon">↩️</span><strong>Switch back to parent window:</strong>
    <br><code>driver.switchTo().window(parentWindow);</code></li>
  <li><span class="icon">❌</span><strong>Close child window and switch back:</strong>
    <br><code>driver.close(); // closes current (child) window</code>
    <br><code>driver.switchTo().window(parentWindow);</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Key Distinction</div><p><strong>getWindowHandle()</strong> (singular) returns the handle of the currently active window as a String. <strong>getWindowHandles()</strong> (plural) returns a <code>Set&lt;String&gt;</code> of ALL open window handles. After a new tab/window opens, always call <code>getWindowHandles()</code> again to get the updated set.</p></div>`
  },
  {
    q: "How do you handle iFrames in Selenium? Explain all three ways to switch into a frame and how to exit it.",
    difficulty: "medium",
    a: `<div class="ans-hero">iFrames are embedded HTML documents inside a page — Selenium cannot interact with elements inside them until you switch context into the frame using switchTo().frame(), then exit with switchTo().defaultContent().</div>
<ul class="ans-list green">
  <li><span class="icon">1️⃣</span><strong>Switch by Index (zero-based):</strong>
    <br><code>driver.switchTo().frame(0);</code> — switches to the first iframe on the page</li>
  <li><span class="icon">2️⃣</span><strong>Switch by Name or ID attribute:</strong>
    <br><code>driver.switchTo().frame("myIframe");</code> — matches <code>&lt;iframe id="myIframe"&gt;</code> or <code>name="myIframe"</code></li>
  <li><span class="icon">3️⃣</span><strong>Switch by WebElement:</strong>
    <br><code>WebElement iframeEl = driver.findElement(By.cssSelector("iframe.ad-frame"));</code>
    <br><code>driver.switchTo().frame(iframeEl);</code> — most reliable method, works for dynamic iframes</li>
  <li><span class="icon">↩️</span><strong>Exit iframe back to main page:</strong>
    <br><code>driver.switchTo().defaultContent();</code></li>
  <li><span class="icon">🔼</span><strong>Exit one frame up (nested frames):</strong>
    <br><code>driver.switchTo().parentFrame();</code> — goes up one level, not to default content</li>
</ul>
<div class="info-panel tip"><div class="panel-title">⚠️ Common Mistake</div><p>If you get <code>NoSuchElementException</code> inside an iframe, you forgot to switch into it first. After finishing interactions inside the iframe, always call <code>driver.switchTo().defaultContent()</code> before locating elements on the main page again.</p></div>`
  },
  {
    q: "What is the Actions class in Selenium? Show code for mouseHover, doubleClick, rightClick, and dragAndDrop.",
    difficulty: "medium",
    a: `<div class="ans-hero">The Actions class in Selenium simulates complex user interactions like mouse movements, double-clicks, right-clicks, hover, drag-and-drop, and key combinations that cannot be done with simple click() or sendKeys().</div>
<ul class="ans-list blue">
  <li><span class="icon">🖱️</span><strong>Create Actions object:</strong>
    <br><code>Actions actions = new Actions(driver);</code></li>
  <li><span class="icon">🎯</span><strong>Mouse Hover (moveToElement):</strong>
    <br><code>WebElement menu = driver.findElement(By.id("navMenu"));</code>
    <br><code>actions.moveToElement(menu).perform();</code></li>
  <li><span class="icon">👆</span><strong>Double Click:</strong>
    <br><code>WebElement editBtn = driver.findElement(By.id("editBtn"));</code>
    <br><code>actions.doubleClick(editBtn).perform();</code></li>
  <li><span class="icon">🖱️</span><strong>Right Click (Context Click):</strong>
    <br><code>WebElement element = driver.findElement(By.id("item"));</code>
    <br><code>actions.contextClick(element).perform();</code></li>
  <li><span class="icon">↕️</span><strong>Drag and Drop:</strong>
    <br><code>WebElement source = driver.findElement(By.id("drag"));</code>
    <br><code>WebElement target = driver.findElement(By.id("drop"));</code>
    <br><code>actions.dragAndDrop(source, target).perform();</code></li>
  <li><span class="icon">⌨️</span><strong>Key Chord (Ctrl + A):</strong>
    <br><code>actions.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTROL).perform();</code></li>
  <li><span class="icon">🔗</span><strong>Chaining multiple actions:</strong>
    <br><code>actions.moveToElement(menu).click().moveToElement(subMenu).click().perform();</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Always call .perform()</div><p>Actions are queued up and executed only when you call <code>.perform()</code> at the end. Without <code>.perform()</code>, nothing happens. You can chain multiple actions before the single <code>.perform()</code> call.</p></div>`
  },
  {
    q: "How do you take a screenshot in Selenium? Explain TakesScreenshot with a full code snippet.",
    difficulty: "medium",
    a: `<div class="ans-hero">Selenium captures screenshots by casting the WebDriver to the TakesScreenshot interface, getting the image as a File, then saving it using Apache Commons IO's FileUtils.copyFile() method.</div>
<ul class="ans-list amber">
  <li><span class="icon">📸</span><strong>Full page screenshot:</strong>
    <br><code>TakesScreenshot ts = (TakesScreenshot) driver;</code>
    <br><code>File srcFile = ts.getScreenshotAs(OutputType.FILE);</code>
    <br><code>File destFile = new File("screenshots/test_screenshot.png");</code>
    <br><code>FileUtils.copyFile(srcFile, destFile);</code></li>
  <li><span class="icon">🔢</span><strong>Screenshot as Base64 (for reports):</strong>
    <br><code>String base64 = ts.getScreenshotAs(OutputType.BASE64);</code>
    <br><code>// Use in Extent Reports: extentTest.addScreenCaptureFromBase64String(base64);</code></li>
  <li><span class="icon">📅</span><strong>Timestamped screenshot filename:</strong>
    <br><code>String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());</code>
    <br><code>File dest = new File("screenshots/screenshot_" + timestamp + ".png");</code>
    <br><code>FileUtils.copyFile(srcFile, dest);</code></li>
  <li><span class="icon">⚠️</span><strong>Screenshot on test failure (TestNG @AfterMethod):</strong>
    <br><code>@AfterMethod public void captureOnFail(ITestResult result) {</code>
    <br><code>&nbsp;&nbsp;if (result.getStatus() == ITestResult.FAILURE) {</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;// take screenshot here</code>
    <br><code>&nbsp;&nbsp;}</code>
    <br><code>}</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Maven Dependency</div><p>Add <code>commons-io</code> to your <code>pom.xml</code>: <code>&lt;artifactId&gt;commons-io&lt;/artifactId&gt;</code> to use <code>FileUtils.copyFile()</code>. Alternatively use Java NIO: <code>Files.copy(srcFile.toPath(), destFile.toPath(), StandardCopyOption.REPLACE_EXISTING);</code></p></div>`
  },
  {
    q: "What is JavascriptExecutor in Selenium? Show examples for scrolling, clicking hidden elements, and getting page title.",
    difficulty: "medium",
    a: `<div class="ans-hero">JavascriptExecutor is a Selenium interface that allows executing raw JavaScript code in the browser context — used for scrolling, interacting with hidden elements, getting DOM properties, and more.</div>
<ul class="ans-list purple">
  <li><span class="icon">🔧</span><strong>Create JavascriptExecutor:</strong>
    <br><code>JavascriptExecutor js = (JavascriptExecutor) driver;</code></li>
  <li><span class="icon">📜</span><strong>Scroll to bottom of page:</strong>
    <br><code>js.executeScript("window.scrollTo(0, document.body.scrollHeight);");</code></li>
  <li><span class="icon">📏</span><strong>Scroll by pixel amount:</strong>
    <br><code>js.executeScript("window.scrollBy(0, 500);");</code></li>
  <li><span class="icon">🎯</span><strong>Scroll element into view:</strong>
    <br><code>WebElement el = driver.findElement(By.id("footer"));</code>
    <br><code>js.executeScript("arguments[0].scrollIntoView(true);", el);</code></li>
  <li><span class="icon">👆</span><strong>Click a hidden/disabled element:</strong>
    <br><code>WebElement btn = driver.findElement(By.id("hiddenBtn"));</code>
    <br><code>js.executeScript("arguments[0].click();", btn);</code></li>
  <li><span class="icon">📝</span><strong>Set value in input field via JS:</strong>
    <br><code>js.executeScript("arguments[0].value='test@email.com';", inputField);</code></li>
  <li><span class="icon">📄</span><strong>Get page title via JS:</strong>
    <br><code>String title = (String) js.executeScript("return document.title;");</code></li>
  <li><span class="icon">🔍</span><strong>Get element attribute via JS:</strong>
    <br><code>String val = (String) js.executeScript("return arguments[0].getAttribute('value');", el);</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 When to Use JavascriptExecutor</div><p>Use JS Executor when: (1) an element is not interactable via normal Selenium commands, (2) you need to scroll to a specific position, (3) an element is hidden or overlapped, or (4) you want to manipulate the DOM directly. Avoid overusing it — prefer standard Selenium methods when they work.</p></div>`
  },
  {
    q: "What is Selenium Grid? Explain the Hub-Node architecture and how it enables parallel execution.",
    difficulty: "hard",
    a: `<div class="ans-hero">Selenium Grid is a tool that runs tests in parallel across multiple machines and browsers simultaneously — using a Hub-Node architecture where the Hub acts as the central controller and Nodes are the machines that actually execute the tests.</div>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>Hub (Central Controller)</h6>
    <ul>
      <li>Single machine that receives test requests</li>
      <li>Distributes tests to available Nodes</li>
      <li>Manages the Node registry</li>
      <li>Start: <code>java -jar selenium-server.jar hub</code></li>
      <li>Default URL: <code>http://localhost:4444</code></li>
      <li>Has a web console to monitor Nodes</li>
    </ul>
  </div>
  <div class="compare-card green">
    <h6>Node (Test Executor)</h6>
    <ul>
      <li>Multiple machines that run the actual tests</li>
      <li>Each Node registers itself with the Hub</li>
      <li>Can run Chrome, Firefox, Edge, etc.</li>
      <li>Start: <code>java -jar selenium-server.jar node --hub http://hubIP:4444</code></li>
      <li>Each Node can run multiple concurrent sessions</li>
      <li>Can be on different OS (Windows, Mac, Linux)</li>
    </ul>
  </div>
</div>
<ul class="ans-list amber">
  <li><span class="icon">⚡</span><strong>Benefits of Selenium Grid:</strong> Reduces total execution time from 2 hours to 15 minutes by running 10 tests in parallel instead of sequentially.</li>
  <li><span class="icon">🌐</span><strong>Cross-browser testing:</strong> Run same test on Chrome (Node 1), Firefox (Node 2), Edge (Node 3) simultaneously.</li>
  <li><span class="icon">🖥️</span><strong>Cross-platform testing:</strong> Run on Windows, Mac, Linux nodes at the same time.</li>
  <li><span class="icon">🔗</span><strong>RemoteWebDriver for Grid:</strong>
    <br><code>ChromeOptions options = new ChromeOptions();</code>
    <br><code>WebDriver driver = new RemoteWebDriver(new URL("http://hub:4444/wd/hub"), options);</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Grid 3 vs Grid 4</div><p><strong>Selenium Grid 3</strong> uses separate Hub and Node JARs. <strong>Selenium Grid 4</strong> (current) is a single JAR with improved architecture — it supports Standalone, Hub-Node, Fully Distributed, and Docker modes. In interviews, mention you know about Grid 4's single-JAR model.</p></div>`
  },
  {
    q: "How do you handle dynamic elements in Selenium? Explain contains(), starts-with(), and text() in XPath.",
    difficulty: "medium",
    a: `<div class="ans-hero">Dynamic elements have attributes (like id or class) that change on every page load — they are handled using XPath functions like contains(), starts-with(), and text() that match partial or stable parts of the attribute values.</div>
<ul class="ans-list blue">
  <li><span class="icon">🔍</span><strong>contains() — partial attribute match:</strong>
    <br>Stable prefix: <code>//input[contains(@id, 'username')]</code>
    <br>Matches: <code>id="username_12345"</code>, <code>id="username_abc"</code>
    <br>Partial class: <code>//div[contains(@class, 'error-msg')]</code></li>
  <li><span class="icon">🔡</span><strong>starts-with() — prefix match:</strong>
    <br><code>//input[starts-with(@id, 'user_')]</code>
    <br>Matches: <code>id="user_001"</code>, <code>id="user_98765"</code></li>
  <li><span class="icon">📝</span><strong>text() — match by visible text:</strong>
    <br>Exact text: <code>//button[text()='Submit Order']</code>
    <br>Partial text: <code>//button[contains(text(), 'Submit')]</code>
    <br>Normalize whitespace: <code>//button[normalize-space()='Submit Order']</code></li>
  <li><span class="icon">🔗</span><strong>Combining conditions:</strong>
    <br><code>//input[@type='text' and contains(@placeholder, 'Search')]</code></li>
  <li><span class="icon">🧭</span><strong>Sibling/parent relationships (anchor approach):</strong>
    <br><code>//label[text()='Email']/following-sibling::input</code>
    <br><code>//td[text()='John']/following-sibling::td[2]</code></li>
  <li><span class="icon">🔢</span><strong>Index-based for repeated patterns:</strong>
    <br><code>(//div[@class='product-card'])[3]</code> — picks the 3rd matching element</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Strategy for Dynamic IDs</div><p>Always look for a <em>stable anchor</em> nearby — a label, heading, or sibling element with a fixed text — then navigate to the dynamic element from that stable anchor using <code>following-sibling</code>, <code>parent</code>, or <code>ancestor</code> XPath axes.</p></div>`
  },
  {
    q: "What is the difference between driver.close() and driver.quit() in Selenium?",
    difficulty: "easy",
    a: `<div class="ans-hero">driver.close() closes only the currently active browser window while keeping the WebDriver session alive; driver.quit() closes ALL open browser windows and completely terminates the WebDriver session.</div>
<div class="compare-grid">
  <div class="compare-card amber">
    <h6>driver.close()</h6>
    <ul>
      <li>Closes the <em>current active</em> browser window only</li>
      <li>WebDriver session remains alive</li>
      <li>Other open windows are unaffected</li>
      <li>Does NOT end the ChromeDriver/GeckoDriver process</li>
      <li>Use when you have multiple windows and want to close just one</li>
      <li>Must switch to another window after calling it</li>
    </ul>
  </div>
  <div class="compare-card blue">
    <h6>driver.quit()</h6>
    <ul>
      <li>Closes <em>ALL</em> open browser windows and tabs</li>
      <li>Terminates the WebDriver session completely</li>
      <li>Kills the ChromeDriver/GeckoDriver process</li>
      <li>Clears browser cookies and session data</li>
      <li>Should always be called in <code>@AfterMethod</code> or <code>@AfterSuite</code></li>
      <li>Prevents memory leaks and orphan driver processes</li>
    </ul>
  </div>
</div>
<ul class="ans-list green">
  <li><span class="icon">✅</span><strong>Always use quit() in teardown:</strong>
    <br><code>@AfterMethod public void tearDown() { if (driver != null) driver.quit(); }</code></li>
  <li><span class="icon">⚠️</span><strong>Using only close() causes orphan processes:</strong> If you only call <code>close()</code>, the ChromeDriver process keeps running in the background consuming memory — especially dangerous in CI/CD pipelines.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Rule</div><p>Use <code>close()</code> when handling multiple windows mid-test to close a child window. Always end every test run with <code>quit()</code> to properly clean up all resources. Never skip <code>quit()</code> in teardown.</p></div>`
  },
  {
    q: "How do you perform Drag and Drop in Selenium? Show both the Actions class approach and the JavascriptExecutor approach.",
    difficulty: "medium",
    a: `<div class="ans-hero">Drag and Drop in Selenium is done using either the Actions class dragAndDrop() method for standard HTML5 drag-and-drop, or JavascriptExecutor for custom/library-based drag-and-drop that Actions cannot handle reliably.</div>
<ul class="ans-list blue">
  <li><span class="icon">🖱️</span><strong>Actions Class Approach (standard drag-and-drop):</strong>
    <br><code>WebElement source = driver.findElement(By.id("draggable"));</code>
    <br><code>WebElement target = driver.findElement(By.id("droppable"));</code>
    <br><code>Actions actions = new Actions(driver);</code>
    <br><code>actions.dragAndDrop(source, target).perform();</code>
    <br><br>Alternative using clickAndHold:
    <br><code>actions.clickAndHold(source).moveToElement(target).release().perform();</code></li>
  <li><span class="icon">💻</span><strong>JavascriptExecutor Approach (for HTML5 / custom drag-and-drop):</strong>
    <br><code>JavascriptExecutor js = (JavascriptExecutor) driver;</code>
    <br><code>String script =</code>
    <br><code>"var src=arguments[0], tgt=arguments[1];" +</code>
    <br><code>"var e=document.createEvent('DragEvent');" +</code>
    <br><code>"e.initMouseEvent('dragstart',true,true,window,0,0,0,0,0,false,false,false,false,0,null);" +</code>
    <br><code>"src.dispatchEvent(e);" +</code>
    <br><code>"e.initMouseEvent('drop',true,true,window,0,0,0,0,0,false,false,false,false,0,null);" +</code>
    <br><code>"tgt.dispatchEvent(e);";</code>
    <br><code>js.executeScript(script, source, target);</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 When to Use Which</div><p>Try the <strong>Actions class first</strong> — it works for most standard HTML drag-and-drop scenarios. If it silently does nothing (common with React/Angular drag-and-drop libraries), switch to the <strong>JavascriptExecutor approach</strong> or use a pre-built JS drag-and-drop helper script like the one from the <code>drag_and_drop_helper.js</code> library.</p></div>`
  },
  {
    q: "What is StaleElementReferenceException in Selenium? What causes it and how do you fix it?",
    difficulty: "hard",
    a: `<div class="ans-hero">StaleElementReferenceException is thrown when a previously found WebElement reference becomes invalid because the DOM has been updated, refreshed, or navigated away and back — the element no longer exists at the same memory reference.</div>
<ul class="ans-list red">
  <li><span class="icon">⚠️</span><strong>Cause 1 — Page refresh:</strong> Element is found, page refreshes (AJAX, auto-reload), the same element is re-rendered in the new DOM — but your variable still points to the old DOM reference.</li>
  <li><span class="icon">⚠️</span><strong>Cause 2 — Navigation:</strong> You navigate away and come back. All previously found elements are stale.</li>
  <li><span class="icon">⚠️</span><strong>Cause 3 — DOM manipulation:</strong> JavaScript re-renders a component (e.g., a React state update) destroying and recreating a DOM node.</li>
  <li><span class="icon">⚠️</span><strong>Cause 4 — Storing WebElement globally:</strong> You find an element in <code>@BeforeMethod</code> and use it in <code>@Test</code> — if any navigation happened in between, it's stale.</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">✅</span><strong>Fix 1 — Re-locate inside the method:</strong> Never store WebElements as class-level variables. Call <code>findElement()</code> just before each use.
    <br><code>driver.findElement(By.id("btn")).click(); // fresh lookup every time</code></li>
  <li><span class="icon">✅</span><strong>Fix 2 — WebDriverWait with refreshed():</strong>
    <br><code>wait.until(ExpectedConditions.refreshed(ExpectedConditions.elementToBeClickable(By.id("btn")))).click();</code></li>
  <li><span class="icon">✅</span><strong>Fix 3 — Try-catch with retry loop:</strong>
    <br><code>for (int i = 0; i &lt; 3; i++) {</code>
    <br><code>&nbsp;&nbsp;try { driver.findElement(By.id("btn")).click(); break; }</code>
    <br><code>&nbsp;&nbsp;catch (StaleElementReferenceException e) { Thread.sleep(500); }</code>
    <br><code>}</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Prevention</div><p>The golden rule: <strong>never cache WebElements as instance variables in Page Object classes</strong>. Use <code>By</code> locators as instance variables and call <code>driver.findElement(locator)</code> fresh inside each method. This eliminates stale element issues entirely.</p></div>`
  },
  {
    q: "How do you scroll in Selenium using JavascriptExecutor? Show scrollBy, scrollIntoView, and scrollTo examples.",
    difficulty: "medium",
    a: `<div class="ans-hero">Selenium does not have a native scroll command — all scrolling is done via JavascriptExecutor by executing window.scrollBy(), window.scrollTo(), or element.scrollIntoView() JavaScript functions.</div>
<ul class="ans-list blue">
  <li><span class="icon">🔧</span><strong>Setup:</strong>
    <br><code>JavascriptExecutor js = (JavascriptExecutor) driver;</code></li>
  <li><span class="icon">⬇️</span><strong>Scroll down by pixels (scrollBy):</strong>
    <br><code>js.executeScript("window.scrollBy(0, 500);");</code> — scrolls 500px down
    <br><code>js.executeScript("window.scrollBy(0, -300);");</code> — scrolls 300px up</li>
  <li><span class="icon">📍</span><strong>Scroll to absolute position (scrollTo):</strong>
    <br><code>js.executeScript("window.scrollTo(0, 0);");</code> — scroll to top of page
    <br><code>js.executeScript("window.scrollTo(0, document.body.scrollHeight);");</code> — scroll to bottom</li>
  <li><span class="icon">🎯</span><strong>Scroll element into view (scrollIntoView):</strong>
    <br><code>WebElement el = driver.findElement(By.id("submitBtn"));</code>
    <br><code>js.executeScript("arguments[0].scrollIntoView(true);", el);</code> — aligns to top of viewport
    <br><code>js.executeScript("arguments[0].scrollIntoView({behavior:'smooth', block:'center'});", el);</code></li>
  <li><span class="icon">➡️</span><strong>Horizontal scroll:</strong>
    <br><code>js.executeScript("window.scrollBy(500, 0);");</code> — scrolls 500px right</li>
  <li><span class="icon">📦</span><strong>Scroll inside a div container:</strong>
    <br><code>WebElement container = driver.findElement(By.id("scrollableDiv"));</code>
    <br><code>js.executeScript("arguments[0].scrollTop = arguments[0].scrollHeight;", container);</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Best Practice</div><p>Always use <code>scrollIntoView()</code> before interacting with elements that might be outside the viewport. This prevents <code>ElementNotInteractableException</code> caused by an element being off-screen. Prefer <code>scrollIntoView(true)</code> for the element to align to the top of the viewport.</p></div>`
  },
  {
    q: "Explain WebDriverWait with ExpectedConditions. Give code examples for visibilityOfElementLocated, elementToBeClickable, alertIsPresent, and titleContains.",
    difficulty: "hard",
    a: `<div class="ans-hero">WebDriverWait combined with ExpectedConditions provides intelligent, condition-based waiting — it polls every 500ms up to the timeout and returns the element (or true) as soon as the condition is met, making tests faster and more reliable than fixed sleeps.</div>
<ul class="ans-list purple">
  <li><span class="icon">🔧</span><strong>Setup WebDriverWait:</strong>
    <br><code>WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));</code></li>
  <li><span class="icon">👁️</span><strong>visibilityOfElementLocated</strong> — Waits until element is present in DOM AND visible (not hidden).
    <br><code>WebElement el = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("welcomeMsg")));</code>
    <br><code>System.out.println(el.getText());</code></li>
  <li><span class="icon">👆</span><strong>elementToBeClickable</strong> — Waits until element is visible AND enabled (not disabled). Use before clicking.
    <br><code>WebElement btn = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".submit-btn")));</code>
    <br><code>btn.click();</code></li>
  <li><span class="icon">🔔</span><strong>alertIsPresent</strong> — Waits until a JS alert/confirm/prompt appears.
    <br><code>Alert alert = wait.until(ExpectedConditions.alertIsPresent());</code>
    <br><code>alert.accept();</code></li>
  <li><span class="icon">📄</span><strong>titleContains</strong> — Waits until page title contains the given substring.
    <br><code>wait.until(ExpectedConditions.titleContains("Dashboard"));</code></li>
  <li><span class="icon">🔗</span><strong>urlContains</strong> — Waits until current URL contains a substring.
    <br><code>wait.until(ExpectedConditions.urlContains("/home"));</code></li>
  <li><span class="icon">✍️</span><strong>textToBePresentInElement</strong> — Waits for specific text to appear inside an element.
    <br><code>wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("status"), "Success"));</code></li>
  <li><span class="icon">❌</span><strong>invisibilityOfElementLocated</strong> — Waits until element disappears (e.g., loading spinner).
    <br><code>wait.until(ExpectedConditions.invisibilityOfElementLocated(By.className("spinner")));</code></li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Condition</th><th>Returns</th><th>Common Use Case</th></tr></thead>
  <tbody>
    <tr><td><code>visibilityOfElementLocated</code></td><td><code>WebElement</code></td><td>Wait for a message/element to appear</td></tr>
    <tr><td><code>elementToBeClickable</code></td><td><code>WebElement</code></td><td>Before clicking any button or link</td></tr>
    <tr><td><code>alertIsPresent</code></td><td><code>Alert</code></td><td>Before switching to JS alert</td></tr>
    <tr><td><code>titleContains</code></td><td><code>Boolean</code></td><td>Verify page navigation succeeded</td></tr>
    <tr><td><code>invisibilityOfElementLocated</code></td><td><code>Boolean</code></td><td>Wait for spinner/loader to disappear</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Return Value Tip</div><p>Most <code>ExpectedConditions</code> that target a single element return the <code>WebElement</code> directly — so you can chain: <code>wait.until(ExpectedConditions.elementToBeClickable(By.id("btn"))).click();</code> in a single line, no need to store the element in a variable first.</p></div>`
  }
];
