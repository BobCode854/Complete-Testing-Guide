// ================================================================
// TESTNG DATA  — Full rewrite from TestNG-Guide + images
// ================================================================
const TESTNG_TOPICS = [

  // ── Introduction ─────────────────────────────────────────────
  {
    id: 'testng-introduction',
    title: 'TestNG Introduction',
    section: 'testng',
    difficulty: 'easy',
    time: '20 min',
    shortDesc: 'What is TestNG, why it beats JUnit, and how it fits into the Selenium + Maven + Jenkins ecosystem.',
    content: `
      <div class="topic-section">
        <h2>What is TestNG?</h2>
        <div class="ans-hero">TestNG = <strong>Test Next Generation</strong>. It is a Java testing framework that manages how your Selenium tests are run, organised, reported, and distributed — inspired by JUnit but far more powerful.</div>

        <div class="tng-why-grid">
          <div class="tng-why-card">
            <div class="tng-why-icon"><i class="bi bi-sort-numeric-down"></i></div>
            <div class="tng-why-title">Execution Order</div>
            <div class="tng-why-desc">Priority &amp; dependency control — run login before checkout, always.</div>
          </div>
          <div class="tng-why-card">
            <div class="tng-why-icon"><i class="bi bi-file-earmark-bar-graph"></i></div>
            <div class="tng-why-title">HTML Reports</div>
            <div class="tng-why-desc">Auto-generates pass/fail/skip HTML reports after every run.</div>
          </div>
          <div class="tng-why-card">
            <div class="tng-why-icon"><i class="bi bi-lightning-charge"></i></div>
            <div class="tng-why-title">Parallel Execution</div>
            <div class="tng-why-desc">Run 500 tests across 10 threads — cut execution time by 10×.</div>
          </div>
          <div class="tng-why-card">
            <div class="tng-why-icon"><i class="bi bi-table"></i></div>
            <div class="tng-why-title">Data-Driven</div>
            <div class="tng-why-desc">@DataProvider feeds multiple test inputs to a single method.</div>
          </div>
          <div class="tng-why-card">
            <div class="tng-why-icon"><i class="bi bi-layers"></i></div>
            <div class="tng-why-title">Grouping</div>
            <div class="tng-why-desc">Tag tests as Smoke / Regression / Sanity and run any subset.</div>
          </div>
          <div class="tng-why-card">
            <div class="tng-why-icon"><i class="bi bi-ear"></i></div>
            <div class="tng-why-title">Listeners</div>
            <div class="tng-why-desc">Hook into test events — auto-screenshot on every failure.</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>TestNG vs JUnit</h2>
        <table class="comparison-table">
          <thead><tr><th>Feature</th><th>TestNG ✅</th><th>JUnit</th></tr></thead>
          <tbody>
            <tr><td>Parallel execution</td><td>Built-in via testng.xml</td><td>Limited, needs extra config</td></tr>
            <tr><td>Data-driven testing</td><td>@DataProvider (clean)</td><td>@Parameterized (complex)</td></tr>
            <tr><td>Test grouping</td><td>groups = {"smoke","regression"}</td><td>Categories (less flexible)</td></tr>
            <tr><td>Dependencies</td><td>dependsOnMethods / dependsOnGroups</td><td>Not natively supported</td></tr>
            <tr><td>HTML reports</td><td>Auto-generated index.html</td><td>None built-in</td></tr>
            <tr><td>Retry failed tests</td><td>IRetryAnalyzer interface</td><td>Not built-in</td></tr>
            <tr><td>testng.xml</td><td>Full suite configuration</td><td>No equivalent</td></tr>
            <tr><td>Selenium integration</td><td>First-class, widely used</td><td>Works but less common</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>TestNG in the Full Stack</h2>
        <div class="tng-stack-flow">
          <div class="tsf-box tsf-aut"><div class="tsf-label">AUT</div><div class="tsf-sub">Application Under Test</div></div>
          <div class="tsf-arrow"><i class="bi bi-arrow-left-right"></i></div>
          <div class="tsf-box tsf-selenium"><div class="tsf-label">Selenium WebDriver</div><div class="tsf-sub">Browser automation</div></div>
          <div class="tsf-arrow"><i class="bi bi-arrow-left-right"></i></div>
          <div class="tsf-box tsf-testng"><div class="tsf-label">TestNG</div><div class="tsf-sub">Test management</div></div>
          <div class="tsf-arrow"><i class="bi bi-arrow-left-right"></i></div>
          <div class="tsf-box tsf-maven"><div class="tsf-label">Maven</div><div class="tsf-sub">Build + pom.xml</div></div>
          <div class="tsf-arrow"><i class="bi bi-arrow-right"></i></div>
          <div class="tsf-box tsf-reports"><div class="tsf-label">Reports</div><div class="tsf-sub">index.html</div></div>
        </div>

        <img src="images/testng/execution-flow.jpeg" alt="Selenium & TestNG Test Execution Flow — 10-step architecture from Suite to Reports" class="notion-img" />

        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — pom.xml dependency</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;dependency&gt;
    &lt;groupId&gt;org.testng&lt;/groupId&gt;
    &lt;artifactId&gt;testng&lt;/artifactId&gt;
    &lt;version&gt;7.10.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        </div>

        <img src="images/testng/selenium-testng-framework.jpeg" alt="Selenium Testing Framework with TestNG — AUT, WebDriver, TestNG, Maven, Apache POI, Test Data" class="notion-img" />

      </div>

      <div class="topic-section">
        <h2>Your First TestNG Test</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — First TestNG Program</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">import org.testng.Assert;
import org.testng.annotations.*;

public class LoginTest {

    @BeforeSuite
    public void globalSetup() {
        System.out.println("Suite started — initialising config");
    }

    @BeforeMethod
    public void setUp() {
        // Launch browser, navigate to app
        System.out.println("Browser launched");
    }

    @Test(priority = 1, groups = {"smoke"})
    public void testValidLogin() {
        // Enter credentials and click login
        String pageTitle = "Dashboard"; // simulated
        Assert.assertEquals(pageTitle, "Dashboard", "Login failed");
    }

    @Test(priority = 2, groups = {"regression"})
    public void testInvalidLogin() {
        String errorMsg = "Invalid credentials"; // simulated
        Assert.assertTrue(errorMsg.contains("Invalid"));
    }

    @AfterMethod
    public void tearDown() {
        System.out.println("Browser closed");
    }

    @AfterSuite
    public void globalTearDown() {
        System.out.println("Suite finished — generating report");
    }
}</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'easy',
        q: "What is TestNG and why is it used with Selenium?",
        a: `<div class="ans-hero">TestNG manages test execution, assertions, reporting, and parallelism — filling the gaps Selenium alone cannot handle.</div>
        <ul class="ans-list green">
          <li><span class="icon">🎯</span>Selenium automates browsers — but cannot control test order, grouping, or reports</li>
          <li><span class="icon">📋</span>TestNG provides @Test, @BeforeMethod, @AfterMethod annotations for lifecycle management</li>
          <li><span class="icon">📊</span>Auto-generates HTML reports (index.html, emailable-report.html) after each run</li>
          <li><span class="icon">⚡</span>Built-in parallel execution — run tests on Chrome, Firefox, Edge simultaneously</li>
          <li><span class="icon">🔗</span>Integrates seamlessly with Maven (mvn clean test) and Jenkins CI pipelines</li>
        </ul>`
      },
      {
        difficulty: 'easy',
        q: "What is the difference between @BeforeMethod and @BeforeClass?",
        a: `<div class="compare-grid">
          <div class="compare-card blue"><h6>@BeforeMethod</h6>Runs before <strong>every single @Test method</strong> in the class. If you have 5 tests, it runs 5 times. Used for: launching browser, navigating to URL, fresh state per test.</div>
          <div class="compare-card green"><h6>@BeforeClass</h6>Runs <strong>once</strong> before the first test method in the class. Used for: one-time expensive setup — like reading config file or creating a DB connection that all tests in the class share.</div>
        </div>
        <div class="info-panel tip"><div class="panel-title">Rule of thumb</div><p>If each test needs a fresh state (new browser, new login) → @BeforeMethod. If all tests share the same setup → @BeforeClass.</p></div>`
      }
    ]
  },

  // ── Annotations Deep Dive ─────────────────────────────────────
  {
    id: 'testng-annotations',
    title: 'TestNG Annotations — Complete Guide',
    section: 'testng',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'All TestNG annotations explained with execution lifecycle flow, @Test attributes, and Configuration annotations.',
    content: `
      <div class="topic-section">
        <h2>Annotation Execution Lifecycle</h2>
        <div class="ans-hero">The annotation order is fixed and deterministic. Understanding it is the single most tested TestNG interview topic.</div>

        <div class="lifecycle-flow">
          <div class="lf-step lf-suite"><div class="lf-badge">Suite</div><div class="lf-name">@BeforeSuite</div><div class="lf-note">Runs once for the entire suite</div></div>
          <div class="lf-connector"></div>
          <div class="lf-step lf-test"><div class="lf-badge">Test</div><div class="lf-name">@BeforeTest</div><div class="lf-note">Runs before each &lt;test&gt; tag in XML</div></div>
          <div class="lf-connector"></div>
          <div class="lf-step lf-class"><div class="lf-badge">Class</div><div class="lf-name">@BeforeClass</div><div class="lf-note">Runs once before first method in class</div></div>
          <div class="lf-connector lf-loop-start"></div>
          <div class="lf-step lf-method"><div class="lf-badge lf-repeat">×N</div><div class="lf-name">@BeforeMethod</div><div class="lf-note">Runs before EVERY @Test method</div></div>
          <div class="lf-connector"></div>
          <div class="lf-step lf-testcase"><div class="lf-badge lf-testbadge">@Test</div><div class="lf-name">Test Execution</div><div class="lf-note">Your actual test logic runs here</div></div>
          <div class="lf-connector"></div>
          <div class="lf-step lf-method"><div class="lf-badge lf-repeat">×N</div><div class="lf-name">@AfterMethod</div><div class="lf-note">Runs after EVERY @Test method</div></div>
          <div class="lf-connector lf-loop-end"></div>
          <div class="lf-step lf-class"><div class="lf-badge">Class</div><div class="lf-name">@AfterClass</div><div class="lf-note">Runs once after all methods in class</div></div>
          <div class="lf-connector"></div>
          <div class="lf-step lf-test"><div class="lf-badge">Test</div><div class="lf-name">@AfterTest</div><div class="lf-note">Runs after &lt;test&gt; tag completes</div></div>
          <div class="lf-connector"></div>
          <div class="lf-step lf-suite"><div class="lf-badge">Suite</div><div class="lf-name">@AfterSuite</div><div class="lf-note">Runs once after entire suite</div></div>
        </div>

        <img src="images/testng/annotation-order-staircase.jpeg" alt="TestNG Annotation Execution Order — Staircase diagram from @BeforeSuite to @AfterSuite" class="notion-img" />

      </div>

      <div class="topic-section">
        <h2>Configuration Annotations — What Goes Where</h2>
        <div class="annotation-grid">
          <div class="annotation-item ann-suite">
            <div class="ann-tag">@BeforeSuite</div>
            <div class="ann-use">DB connection, load global config, start test server</div>
          </div>
          <div class="annotation-item ann-suite after">
            <div class="ann-tag">@AfterSuite</div>
            <div class="ann-use">Close DB, generate final Extent report, send email</div>
          </div>
          <div class="annotation-item ann-test">
            <div class="ann-tag">@BeforeTest</div>
            <div class="ann-use">Set base URL, read config.properties per environment</div>
          </div>
          <div class="annotation-item ann-test after">
            <div class="ann-tag">@AfterTest</div>
            <div class="ann-use">Flush partial reports, clean temp data</div>
          </div>
          <div class="annotation-item ann-class">
            <div class="ann-tag">@BeforeClass</div>
            <div class="ann-use">Create one WebDriver instance shared across tests in class</div>
          </div>
          <div class="annotation-item ann-class after">
            <div class="ann-tag">@AfterClass</div>
            <div class="ann-use">Quit WebDriver, delete class-scoped test data</div>
          </div>
          <div class="annotation-item ann-method">
            <div class="ann-tag">@BeforeMethod</div>
            <div class="ann-use">Launch fresh browser, navigate to login page</div>
          </div>
          <div class="annotation-item ann-method after">
            <div class="ann-tag">@AfterMethod</div>
            <div class="ann-use">Take screenshot on failure, logout, close browser</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>@Test Annotation — All Attributes</h2>
        <table class="comparison-table">
          <thead><tr><th>Attribute</th><th>Example</th><th>What it does</th></tr></thead>
          <tbody>
            <tr><td><code>priority</code></td><td>@Test(priority=1)</td><td>Controls execution order. Lower = runs first. Default = 0.</td></tr>
            <tr><td><code>enabled</code></td><td>@Test(enabled=false)</td><td>Disables the test — it is skipped without removing the code.</td></tr>
            <tr><td><code>groups</code></td><td>@Test(groups={"smoke"})</td><td>Tags the test to a group for selective execution.</td></tr>
            <tr><td><code>dependsOnMethods</code></td><td>@Test(dependsOnMethods={"login"})</td><td>Test runs only if the specified method passes.</td></tr>
            <tr><td><code>dependsOnGroups</code></td><td>@Test(dependsOnGroups={"setup"})</td><td>Test runs only if all tests in the group pass.</td></tr>
            <tr><td><code>dataProvider</code></td><td>@Test(dataProvider="loginData")</td><td>Feeds data from a @DataProvider method.</td></tr>
            <tr><td><code>description</code></td><td>@Test(description="Verify login")</td><td>Adds a label in the HTML report for the test.</td></tr>
            <tr><td><code>retryAnalyzer</code></td><td>@Test(retryAnalyzer=Retry.class)</td><td>Auto-retries the test on failure.</td></tr>
            <tr><td><code>alwaysRun</code></td><td>@Test(alwaysRun=true)</td><td>Runs even if methods it depends on failed.</td></tr>
            <tr><td><code>timeOut</code></td><td>@Test(timeOut=5000)</td><td>Fails test if it takes longer than 5000ms.</td></tr>
            <tr><td><code>invocationCount</code></td><td>@Test(invocationCount=3)</td><td>Runs the test method 3 times.</td></tr>
          </tbody>
        </table>

        <img src="images/testng/annotations-taxonomy.jpeg" alt="TestNG Annotations Taxonomy — Configuration, Data-driven (@DataProvider), Listener, and @Test attributes" class="notion-img" />

      </div>

      <div class="topic-section">
        <h2>Execution Lifecycle — Live Example</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Complete Lifecycle Demo</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class BankingTestLifecycle {

    @BeforeSuite
    public void initSuite() {
        System.out.println("1 ▶ BeforeSuite  — Load config, start reporting");
    }

    @BeforeTest
    public void initTest() {
        System.out.println("2 ▶ BeforeTest   — Set environment URL");
    }

    @BeforeClass
    public void initClass() {
        System.out.println("3 ▶ BeforeClass  — Runs once before first test in class");
    }

    @BeforeMethod
    public void initMethod() {
        System.out.println("4 ▶ BeforeMethod — Launch Chrome, navigate to bank URL");
    }

    @Test(priority = 1, groups = "smoke", description = "Verify valid login")
    public void testValidLogin() {
        System.out.println("5 ▶ @Test        — testValidLogin");
    }

    @Test(priority = 2, groups = "smoke", description = "Verify invalid login error message")
    public void testInvalidLogin() {
        System.out.println("5 ▶ @Test        — testInvalidLogin");
    }

    @AfterMethod
    public void cleanupMethod() {
        System.out.println("6 ▶ AfterMethod  — Screenshot if failed, close browser");
    }

    @AfterClass
    public void cleanupClass() {
        System.out.println("7 ▶ AfterClass   — Runs once after all tests in class");
    }

    @AfterTest
    public void cleanupTest() {
        System.out.println("8 ▶ AfterTest    — Runs after &lt;test&gt; block in XML");
    }

    @AfterSuite
    public void cleanupSuite() {
        System.out.println("9 ▶ AfterSuite   — Flush reports, send notification");
    }
}

/*  CONSOLE OUTPUT:
    1 ▶ BeforeSuite  — Load config, start reporting
    2 ▶ BeforeTest   — Set environment URL
    3 ▶ BeforeClass  — Runs once before first test in class
    4 ▶ BeforeMethod — Launch Chrome, navigate to bank URL
    5 ▶ @Test        — testValidLogin
    6 ▶ AfterMethod  — Screenshot if failed, close browser
    4 ▶ BeforeMethod — Launch Chrome, navigate to bank URL
    5 ▶ @Test        — testInvalidLogin
    6 ▶ AfterMethod  — Screenshot if failed, close browser
    7 ▶ AfterClass   — Runs once after all tests in class
    8 ▶ AfterTest    — Runs after &lt;test&gt; block in XML
    9 ▶ AfterSuite   — Flush reports, send notification       */</code></pre>
        </div>

        <img src="images/testng/lifecycle-nesting.jpeg" alt="TestNG Suite→Test→Class lifecycle nesting — showing @BeforeMethod/@Test/@AfterMethod repeating per test within the class scope" class="notion-img" />

      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'easy',
        q: "What is the order of execution of TestNG annotations?",
        a: `<div class="ans-hero">BeforeSuite → BeforeTest → BeforeClass → [BeforeMethod → @Test → AfterMethod] × N → AfterClass → AfterTest → AfterSuite</div>
        <div class="lifecycle-mini">
          <span class="lm-step suite">@BeforeSuite</span><span class="lm-arrow">→</span>
          <span class="lm-step test">@BeforeTest</span><span class="lm-arrow">→</span>
          <span class="lm-step class">@BeforeClass</span><span class="lm-arrow">→</span>
          <span class="lm-step method">@BeforeMethod</span><span class="lm-arrow">→</span>
          <span class="lm-step testcase">@Test</span><span class="lm-arrow">→</span>
          <span class="lm-step method">@AfterMethod</span><span class="lm-arrow">→</span>
          <span class="lm-step class">@AfterClass</span><span class="lm-arrow">→</span>
          <span class="lm-step test">@AfterTest</span><span class="lm-arrow">→</span>
          <span class="lm-step suite">@AfterSuite</span>
        </div>
        <div class="info-panel tip"><div class="panel-title">Key Interview Fact</div><p>If a class has 3 @Test methods: @BeforeMethod runs 3 times, @AfterMethod runs 3 times, but @BeforeClass and @AfterClass each run only ONCE.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "If @BeforeMethod fails, what happens to the corresponding @Test method?",
        a: `<div class="ans-hero">The @Test method is SKIPPED (not failed) — and @AfterMethod still runs for cleanup.</div>
        <table class="comparison-table">
          <thead><tr><th>What fails</th><th>Effect on @Test</th><th>Effect on @AfterMethod</th></tr></thead>
          <tbody>
            <tr><td>@BeforeMethod fails</td><td>@Test is SKIPPED</td><td>@AfterMethod STILL runs</td></tr>
            <tr><td>@Test fails</td><td>@Test marked FAIL</td><td>@AfterMethod STILL runs</td></tr>
            <tr><td>@BeforeClass fails</td><td>ALL @Tests in class SKIPPED</td><td>@AfterClass STILL runs</td></tr>
          </tbody>
        </table>
        <div class="info-panel warning"><div class="panel-title">Why SKIP and not FAIL?</div><p>SKIP means the test was not executed — distinct from FAIL (test ran and produced wrong result). Reports show them separately so you know whether the issue is in setup or the test itself.</p></div>`
      }
    ]
  },

  // ── Assertions ────────────────────────────────────────────────
  {
    id: 'testng-assertions',
    title: 'TestNG Assertions',
    section: 'testng',
    difficulty: 'medium',
    time: '20 min',
    shortDesc: 'Hard assertions, Soft assertions, all Assert methods — and when to use each in real test scenarios.',
    content: `
      <div class="topic-section">
        <h2>Hard vs Soft Assertions</h2>
        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Hard Assert — Stops on First Failure</h6>
            When an assertion fails, the test method <strong>immediately stops</strong>. Remaining assertions in the same method never run.<br><br>
            <strong>Use when:</strong> A failure means the rest of the test is meaningless. Example: login must succeed before testing the dashboard.
          </div>
          <div class="compare-card green">
            <h6>Soft Assert — Runs All, Reports All</h6>
            Test <strong>continues</strong> after a failure. All failures are collected and reported together when <code>assertAll()</code> is called.<br><br>
            <strong>Use when:</strong> Checking multiple independent fields — e.g., verify all 6 fields on a profile page.
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>All Hard Assertion Methods</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Assert (Hard)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">import org.testng.Assert;

// ── Equality ──────────────────────────────────────────────────────
Assert.assertEquals(actual, expected);
Assert.assertEquals(driver.getTitle(), "Bank Login", "Title mismatch");
Assert.assertNotEquals(actual, unexpected, "Values should differ");

// ── Boolean ──────────────────────────────────────────────────────
Assert.assertTrue(loginBtn.isDisplayed(), "Login button not visible");
Assert.assertFalse(errorMsg.isDisplayed(), "Error should not appear");

// ── Null checks ───────────────────────────────────────────────────
Assert.assertNull(response.getError(), "No error expected");
Assert.assertNotNull(driver.findElement(By.id("logo")), "Logo missing");

// ── String contains (manual check) ───────────────────────────────
Assert.assertTrue(driver.getCurrentUrl().contains("dashboard"),
    "URL should contain 'dashboard'");

// ── Collection equality ───────────────────────────────────────────
Assert.assertEquals(actualList, expectedList, "Lists don't match");

// ── Fail explicitly ───────────────────────────────────────────────
Assert.fail("Test forcefully failed — feature not implemented yet");</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Soft Assertions</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — SoftAssert (full example)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">import org.testng.asserts.SoftAssert;

@Test(description = "Verify all user profile fields after login")
public void testUserProfile() {
    SoftAssert soft = new SoftAssert(); // create per test method

    // All these run even if earlier ones fail
    soft.assertEquals(profilePage.getName(),    "Karan Singh",        "Name mismatch");
    soft.assertEquals(profilePage.getEmail(),   "karan@bank.com",     "Email mismatch");
    soft.assertEquals(profilePage.getPhone(),   "+91-98765-43210",    "Phone mismatch");
    soft.assertTrue(profilePage.isPhotoShown(), "Profile photo missing");
    soft.assertEquals(profilePage.getRole(),    "Account Holder",     "Role mismatch");

    // MANDATORY — without this, failures are silently ignored!
    soft.assertAll();
}

// Result: if Name and Role fail, report shows BOTH failures,
// not just the first one (which hard assert would show).</code></pre>
        </div>
        <div class="info-panel danger"><div class="panel-title">Critical Mistake</div><p>Never forget <code>soft.assertAll()</code>. Without it, ALL soft assertion failures are silently swallowed — the test always passes even with wrong data. This is a common cause of false-positive test results.</p></div>
      </div>

      <div class="topic-section">
        <h2>Assertion Decision Guide</h2>
        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">Q</div>
            <div class="step-content">
              <div class="step-title">Does failure mean the rest of the test can't continue?</div>
              <div class="step-desc">Example: Login must succeed before you can test the dashboard. If login fails, nothing else makes sense.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">A</div>
            <div class="step-content">
              <div class="step-title">Yes → Use Hard Assert</div>
              <div class="step-desc"><code>Assert.assertEquals(pageTitle, "Dashboard")</code> — fails fast, stops the test immediately.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">Q</div>
            <div class="step-content">
              <div class="step-title">Are you validating multiple independent fields?</div>
              <div class="step-desc">Example: Checking all 8 fields on a user registration confirmation page.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">A</div>
            <div class="step-content">
              <div class="step-title">Yes → Use Soft Assert</div>
              <div class="step-desc"><code>soft.assertEquals(...)</code> × 8 fields, then <code>soft.assertAll()</code> — see all mismatches at once.</div>
            </div>
          </div>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What is the difference between Assert.assertEquals and Assert.assertTrue?",
        a: `<div class="compare-grid">
          <div class="compare-card blue"><h6>assertEquals(actual, expected)</h6>Compares two values for exact equality. Fails if they are different. Best for strings, numbers, page titles. Failure message shows both actual and expected values.</div>
          <div class="compare-card purple"><h6>assertTrue(condition)</h6>Verifies a boolean condition is true. Best for element visibility, URL checks (contains). Failure message only says "condition was false".</div>
        </div>
        <div class="code-block"><code>// assertEquals — shows clear diff on failure:
Assert.assertEquals(driver.getTitle(), "Dashboard");
// Failure: "expected [Dashboard] but found [Login Page]"

// assertTrue — less informative on failure:
Assert.assertTrue(driver.getTitle().equals("Dashboard"));
// Failure: "expected [true] but found [false]"</code></div>
        <div class="info-panel tip"><div class="panel-title">Best Practice</div><p>Prefer assertEquals over assertTrue for value comparisons — the error message is much clearer when tests fail.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "When would you use Soft Assertions over Hard Assertions?",
        a: `<div class="ans-hero">Use Soft Assert when multiple assertions are independent and you want to see ALL failures at once, not just the first.</div>
        <ul class="ans-list green">
          <li><span class="icon">✅</span>Validating all fields on a form after submission</li>
          <li><span class="icon">✅</span>Checking all elements on a dashboard (balance, name, account number, last login)</li>
          <li><span class="icon">✅</span>Verifying UI elements across multiple sections of a page</li>
          <li><span class="icon">✅</span>Data validation — comparing multiple DB fields with UI values</li>
        </ul>
        <ul class="ans-list red">
          <li><span class="icon">❌</span>When step 2 depends on step 1 — use Hard Assert (login before transfer)</li>
          <li><span class="icon">❌</span>Critical flow assertions — if homepage doesn't load, stop immediately</li>
        </ul>`
      }
    ]
  },

  // ── DataProvider & Parameterization ──────────────────────────
  {
    id: 'testng-dataprovider',
    title: 'DataProvider & Parameterization',
    section: 'testng',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'Run one test with multiple data sets using @DataProvider — and pass parameters from testng.xml using @Parameters.',
    content: `
      <div class="topic-section">
        <h2>@DataProvider — Data-Driven Testing</h2>
        <div class="ans-hero">@DataProvider supplies a 2D array of test data to a @Test method. The test runs once per row — no code duplication, clean reports per dataset.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — @DataProvider Basic</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class LoginDataDrivenTest {

    // Step 1: Define data provider
    @DataProvider(name = "loginCredentials")
    public Object[][] loginData() {
        return new Object[][] {
            // { username,             password,       expectedResult }
            { "admin@bank.com",        "Admin@123",    "Dashboard"         },
            { "user@bank.com",         "User@123",     "Dashboard"         },
            { "locked@bank.com",       "Locked@123",   "Account is locked" },
            { "wrong@bank.com",        "WrongPass",    "Invalid credentials"},
            { "",                      "",             "Username required"  }
        };
    }

    // Step 2: Use the data provider
    @Test(dataProvider = "loginCredentials",
          description = "Verify login with multiple credential sets")
    public void testLogin(String username, String password, String expected) {
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();

        String actualMessage = loginPage.getResultMessage();
        Assert.assertEquals(actualMessage, expected,
            "Login result mismatch for user: " + username);
    }
    // TestNG runs this test 5 times — once per row — all in the report
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>@DataProvider — Reading from Excel</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Excel DataProvider (Apache POI)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">@DataProvider(name = "transferData")
public Object[][] getTransferDataFromExcel() throws Exception {
    return ExcelUtil.readData("testdata/TransferData.xlsx", "Sheet1");
    // Returns 2D array from Excel — QA team can add rows without touching code
}

// ExcelUtil using Apache POI:
public static Object[][] readData(String filePath, String sheetName) throws Exception {
    Workbook wb     = WorkbookFactory.create(new File(filePath));
    Sheet sheet     = wb.getSheet(sheetName);
    int rows        = sheet.getLastRowNum();
    int cols        = sheet.getRow(0).getLastCellNum();
    Object[][] data = new Object[rows][cols];

    for (int r = 1; r &lt;= rows; r++) {
        for (int c = 0; c &lt; cols; c++) {
            data[r - 1][c] = sheet.getRow(r).getCell(c).toString();
        }
    }
    wb.close();
    return data;
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>@Parameters — Passing from testng.xml</h2>
        <div class="ans-hero">@Parameters passes values defined in testng.xml at runtime — ideal for browser type and environment URL so you don't hardcode them.</div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — testng.xml with parameters</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;suite name="BankApp Suite"&gt;
  &lt;test name="Chrome — UAT"&gt;
    &lt;parameter name="browser" value="chrome"/&gt;
    &lt;parameter name="env"     value="UAT"/&gt;
    &lt;classes&gt;
      &lt;class name="com.tests.LoginTest"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

  &lt;test name="Firefox — UAT"&gt;
    &lt;parameter name="browser" value="firefox"/&gt;
    &lt;parameter name="env"     value="UAT"/&gt;
    &lt;classes&gt;
      &lt;class name="com.tests.LoginTest"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;</code></pre>
        </div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — @Parameters in test</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">@Parameters({"browser", "env"})
@BeforeMethod
public void setUp(
    @Optional("chrome") String browser,
    @Optional("UAT")    String env
) {
    String baseUrl = ConfigReader.get("url." + env.toLowerCase());
    driver = DriverFactory.createDriver(browser);
    driver.get(baseUrl);
}

@Test
public void testLogin() {
    // Uses whatever browser and env were passed from XML
}</code></pre>
        </div>

        <table class="comparison-table">
          <thead><tr><th></th><th>@DataProvider</th><th>@Parameters</th></tr></thead>
          <tbody>
            <tr><td><strong>Source</strong></td><td>Java method (or Excel via POI)</td><td>testng.xml parameter tags</td></tr>
            <tr><td><strong>Best for</strong></td><td>Test input data (credentials, amounts)</td><td>Environment config (browser, URL, env name)</td></tr>
            <tr><td><strong>Runs test N times?</strong></td><td>Yes — once per data row</td><td>No — passes a single value</td></tr>
            <tr><td><strong>Cross-browser?</strong></td><td>No</td><td>Yes — define multiple &lt;test&gt; tags in XML</td></tr>
          </tbody>
        </table>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "How does @DataProvider work in TestNG? Write an example.",
        a: `<div class="ans-hero">@DataProvider returns a 2D Object array — TestNG calls the @Test method once per row, passing each row as method arguments.</div>
        <div class="code-block"><code><span class="ann">@DataProvider</span>(name = <span class="st">"credentials"</span>)
<span class="kw">public</span> <span class="cl">Object</span>[][] <span class="fn">getData</span>() {
    <span class="kw">return new</span> <span class="cl">Object</span>[][] {
        {<span class="st">"admin"</span>, <span class="st">"pass123"</span>, <span class="st">"Dashboard"</span>},
        {<span class="st">"wrong"</span>, <span class="st">"bad"</span>,    <span class="st">"Invalid credentials"</span>}
    };
}

<span class="ann">@Test</span>(dataProvider = <span class="st">"credentials"</span>)
<span class="kw">public void</span> <span class="fn">testLogin</span>(<span class="cl">String</span> u, <span class="cl">String</span> p, <span class="cl">String</span> expected) {
    Assert.<span class="fn">assertEquals</span>(loginPage.<span class="fn">login</span>(u, p), expected);
}</code></div>
        <div class="info-panel tip"><div class="panel-title">Result</div><p>TestNG runs testLogin twice — row 1 (admin/pass123 → Dashboard), row 2 (wrong/bad → Invalid credentials). Both appear as separate entries in the HTML report.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "What is the difference between @DataProvider and @Parameters in TestNG?",
        a: `<div class="compare-grid">
          <div class="compare-card blue"><h6>@DataProvider</h6>Supplies test input data. Source: Java method returning Object[][]. Test runs N times (once per row). Best for: login credentials, transfer amounts, form inputs.</div>
          <div class="compare-card green"><h6>@Parameters</h6>Supplies configuration values from testng.xml. Test runs once per &lt;test&gt; block. Best for: browser type, environment (UAT/Prod), base URL — values that change per run, not per test case.</div>
        </div>`
      }
    ]
  },

  // ── Advanced: Groups, Listeners, Retry, Parallel ─────────────
  {
    id: 'testng-advanced',
    title: 'TestNG Advanced — Groups, Listeners & Parallel',
    section: 'testng',
    difficulty: 'hard',
    time: '35 min',
    shortDesc: 'Test groups, ITestListener for screenshots, IRetryAnalyzer for flaky tests, and parallel execution with ThreadLocal.',
    content: `
      <div class="topic-section">
        <h2>Groups — Selective Test Execution</h2>
        <div class="ans-hero">Groups let you tag tests and run any subset — Smoke only, Regression only, or all. No code changes needed — just change testng.xml.</div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Groups</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">// A test can belong to multiple groups
@Test(groups = {"smoke", "regression"}, priority = 1)
public void testLogin() { }

@Test(groups = {"regression"}, priority = 2,
      dependsOnMethods = {"testLogin"})
public void testFundTransfer() { }

@Test(groups = {"smoke"}, priority = 3)
public void testDashboardLoad() { }

@Test(groups = {"regression", "sanity"}, priority = 4)
public void testAccountBalance() { }

@Test(groups = {"regression"}, enabled = false) // disabled — won't run
public void testLegacyFeature() { }</code></pre>
        </div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — testng.xml run Smoke only</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;suite name="Smoke Suite"&gt;
  &lt;test name="Smoke Tests"&gt;
    &lt;groups&gt;
      &lt;run&gt;
        &lt;include name="smoke"/&gt;
        &lt;!-- exclude specific group: &lt;exclude name="wip"/&gt; --&gt;
      &lt;/run&gt;
    &lt;/groups&gt;
    &lt;classes&gt;
      &lt;class name="com.tests.BankingTests"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Listeners — ITestListener</h2>
        <div class="ans-hero">Listeners react to test events automatically — take screenshot on failure, log test start/end, update reports — without touching test code.</div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Full ITestListener with screenshot on failure</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">import org.testng.*;

public class TestListener implements ITestListener {

    @Override
    public void onTestStart(ITestResult result) {
        System.out.println("▶ STARTED : " + result.getName());
        ExtentManager.startTest(result.getName());
    }

    @Override
    public void onTestSuccess(ITestResult result) {
        System.out.println("✅ PASSED  : " + result.getName());
        ExtentManager.getTest().pass("Test passed");
    }

    @Override
    public void onTestFailure(ITestResult result) {
        System.out.println("❌ FAILED  : " + result.getName());

        // Auto-capture screenshot
        WebDriver driver = BaseTest.getDriver();
        String path = ScreenshotUtil.capture(driver, result.getName());

        // Attach to Extent Report
        ExtentManager.getTest()
            .fail(result.getThrowable())
            .addScreenCaptureFromPath(path, "Failure Screenshot");
    }

    @Override
    public void onTestSkipped(ITestResult result) {
        System.out.println("⏭ SKIPPED : " + result.getName());
        ExtentManager.getTest().skip(result.getThrowable());
    }
}

// Register in testng.xml:
// &lt;listeners&gt;
//   &lt;listener class-name="com.utils.TestListener"/&gt;
// &lt;/listeners&gt;</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Retry Analyzer — Auto-Retry Flaky Tests</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — RetryAnalyzer + Annotation Transformer</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">// Step 1: Create RetryAnalyzer
public class RetryAnalyzer implements IRetryAnalyzer {
    private int retryCount = 0;
    private static final int MAX_RETRY = 2;

    @Override
    public boolean retry(ITestResult result) {
        if (retryCount &lt; MAX_RETRY) {
            retryCount++;
            System.out.println("Retrying: " + result.getName()
                + " (attempt " + retryCount + "/" + MAX_RETRY + ")");
            return true;   // retry the test
        }
        return false;      // no more retries — mark as failed
    }
}

// Step 2A: Apply to individual test
@Test(retryAnalyzer = RetryAnalyzer.class)
public void testPaymentGateway() { }

// Step 2B: Apply globally via AnnotationTransformer (no annotation on each test)
public class RetryTransformer implements IAnnotationTransformer {
    @Override
    public void transform(ITestAnnotation annotation, Class testClass,
                          Constructor testConstructor, Method testMethod) {
        annotation.setRetryAnalyzer(RetryAnalyzer.class);
    }
}

// Register transformer in testng.xml:
// &lt;listeners&gt;
//   &lt;listener class-name="com.utils.RetryTransformer"/&gt;
// &lt;/listeners&gt;</code></pre>
        </div>
        <div class="info-panel warning"><div class="panel-title">Don't Overuse Retry</div><p>Retry hides real bugs. If a test keeps failing and passing intermittently, investigate the root cause first. Use retry only for genuinely flaky external dependencies (payment APIs, SMS OTP, network calls).</p></div>
      </div>

      <div class="topic-section">
        <h2>Parallel Execution with testng.xml</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — Cross-Browser Parallel Suite</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;suite name="Cross-Browser Suite" parallel="tests" thread-count="3"&gt;

  &lt;listeners&gt;
    &lt;listener class-name="com.utils.TestListener"/&gt;
  &lt;/listeners&gt;

  &lt;test name="Chrome Tests"&gt;
    &lt;parameter name="browser" value="chrome"/&gt;
    &lt;classes&gt;&lt;class name="com.tests.BankingTest"/&gt;&lt;/classes&gt;
  &lt;/test&gt;

  &lt;test name="Firefox Tests"&gt;
    &lt;parameter name="browser" value="firefox"/&gt;
    &lt;classes&gt;&lt;class name="com.tests.BankingTest"/&gt;&lt;/classes&gt;
  &lt;/test&gt;

  &lt;test name="Edge Tests"&gt;
    &lt;parameter name="browser" value="edge"/&gt;
    &lt;classes&gt;&lt;class name="com.tests.BankingTest"/&gt;&lt;/classes&gt;
  &lt;/test&gt;

&lt;/suite&gt;</code></pre>
        </div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — ThreadLocal WebDriver (Thread-Safe)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">// CRITICAL: Each parallel thread must have its own WebDriver
public class BaseTest {
    private static ThreadLocal&lt;WebDriver&gt; tlDriver = new ThreadLocal&lt;&gt;();

    @Parameters("browser")
    @BeforeMethod
    public void setUp(@Optional("chrome") String browser) {
        WebDriver driver = DriverFactory.createDriver(browser);
        driver.manage().window().maximize();
        tlDriver.set(driver); // store driver in current thread's slot
    }

    public static WebDriver getDriver() {
        return tlDriver.get(); // each thread gets its own driver
    }

    @AfterMethod
    public void tearDown() {
        if (getDriver() != null) {
            getDriver().quit();
            tlDriver.remove(); // clean up thread slot
        }
    }
}</code></pre>
        </div>
        <div class="info-panel danger"><div class="panel-title">Without ThreadLocal — Tests Corrupt Each Other</div><p>Without ThreadLocal, 3 parallel threads share one WebDriver instance. Thread 1 might close the browser while Thread 2 is still using it. Always use ThreadLocal&lt;WebDriver&gt; for parallel execution.</p></div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How do you run tests in parallel in TestNG? What is ThreadLocal and why is it needed?",
        a: `<div class="ans-hero">Set parallel attribute in testng.xml + use ThreadLocal&lt;WebDriver&gt; so each thread has its own isolated browser instance.</div>
        <ul class="ans-list blue">
          <li><span class="icon">1</span><strong>testng.xml:</strong> &lt;suite parallel="tests" thread-count="3"&gt;</li>
          <li><span class="icon">2</span><strong>ThreadLocal:</strong> <code>ThreadLocal&lt;WebDriver&gt; tlDriver = new ThreadLocal&lt;&gt;()</code></li>
          <li><span class="icon">3</span><strong>Store per thread:</strong> <code>tlDriver.set(driver)</code> in @BeforeMethod</li>
          <li><span class="icon">4</span><strong>Retrieve per thread:</strong> <code>tlDriver.get()</code> in test methods</li>
          <li><span class="icon">5</span><strong>Clean up:</strong> <code>tlDriver.remove()</code> in @AfterMethod</li>
        </ul>
        <div class="info-panel tip"><div class="panel-title">Why ThreadLocal?</div><p>Without it, 3 threads share one WebDriver — Thread A clicks Login while Thread B is already on Dashboard. ThreadLocal gives each thread its own private WebDriver slot.</p></div>`
      },
      {
        difficulty: 'hard',
        q: "What are TestNG Listeners? Which interfaces can you implement?",
        a: `<div class="ans-hero">Listeners are interfaces that intercept test events — you implement them to add cross-cutting behaviour like screenshots, logging, and custom reporting without modifying test code.</div>
        <table class="comparison-table">
          <thead><tr><th>Interface</th><th>Key Methods</th><th>Use Case</th></tr></thead>
          <tbody>
            <tr><td>ITestListener</td><td>onTestFailure, onTestSuccess, onTestSkipped</td><td>Screenshot on failure, Extent Report updates</td></tr>
            <tr><td>ISuiteListener</td><td>onStart, onFinish</td><td>Suite-level setup/teardown, final report flush</td></tr>
            <tr><td>IRetryAnalyzer</td><td>retry(ITestResult)</td><td>Auto-retry flaky tests</td></tr>
            <tr><td>IAnnotationTransformer</td><td>transform()</td><td>Apply retry globally without annotating each test</td></tr>
            <tr><td>IReporter</td><td>generateReport()</td><td>Create fully custom HTML/JSON reports</td></tr>
          </tbody>
        </table>`
      }
    ]
  },

  // ── testng.xml Configuration ──────────────────────────────────
  {
    id: 'testng-xml',
    title: 'testng.xml — Suite Configuration',
    section: 'testng',
    difficulty: 'medium',
    time: '20 min',
    shortDesc: 'Master testng.xml — suites, tests, classes, groups, parameters, parallel, and listener configuration.',
    content: `
      <div class="topic-section">
        <h2>testng.xml Hierarchy</h2>
        <div class="ans-hero">testng.xml is the control centre for your test suite — it decides WHAT runs, in WHAT order, on HOW MANY threads, with WHICH parameters.</div>

        <div class="tng-hierarchy">
          <div class="tng-h-level h-suite">
            <div class="tng-h-label">&lt;suite&gt;</div>
            <div class="tng-h-desc">Top level — entire test suite. Controls parallel mode &amp; thread count.</div>
          </div>
          <div class="tng-h-level h-test">
            <div class="tng-h-label">&lt;test&gt;</div>
            <div class="tng-h-desc">Groups of classes. Each &lt;test&gt; can have its own parameters (browser, env).</div>
          </div>
          <div class="tng-h-level h-class">
            <div class="tng-h-label">&lt;class&gt;</div>
            <div class="tng-h-desc">A Java test class. Maps to a .java file with @Test methods.</div>
          </div>
          <div class="tng-h-level h-method">
            <div class="tng-h-label">&lt;include&gt; / &lt;exclude&gt;</div>
            <div class="tng-h-desc">Include or exclude specific methods or groups within a class.</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Complete testng.xml — Banking App</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — Full Enterprise testng.xml</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd"&gt;

&lt;suite name="Banking App Regression Suite"
       parallel="tests"
       thread-count="3"
       verbose="1"&gt;

  &lt;!-- Register listeners globally --&gt;
  &lt;listeners&gt;
    &lt;listener class-name="com.utils.TestListener"/&gt;
    &lt;listener class-name="com.utils.RetryTransformer"/&gt;
  &lt;/listeners&gt;

  &lt;!-- Smoke Tests on Chrome --&gt;
  &lt;test name="Smoke — Chrome"&gt;
    &lt;parameter name="browser" value="chrome"/&gt;
    &lt;parameter name="env"     value="UAT"/&gt;
    &lt;groups&gt;
      &lt;run&gt;
        &lt;include name="smoke"/&gt;
      &lt;/run&gt;
    &lt;/groups&gt;
    &lt;classes&gt;
      &lt;class name="com.tests.LoginTest"/&gt;
      &lt;class name="com.tests.DashboardTest"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

  &lt;!-- Regression Tests on Firefox --&gt;
  &lt;test name="Regression — Firefox"&gt;
    &lt;parameter name="browser" value="firefox"/&gt;
    &lt;parameter name="env"     value="UAT"/&gt;
    &lt;groups&gt;
      &lt;run&gt;
        &lt;include name="regression"/&gt;
        &lt;exclude name="wip"/&gt;
      &lt;/run&gt;
    &lt;/groups&gt;
    &lt;classes&gt;
      &lt;class name="com.tests.LoginTest"/&gt;
      &lt;class name="com.tests.TransferTest"/&gt;
      &lt;class name="com.tests.AccountTest"/&gt;
      &lt;class name="com.tests.BeneficiaryTest"&gt;
        &lt;!-- Run only specific methods --&gt;
        &lt;methods&gt;
          &lt;include name="testAddBeneficiary"/&gt;
          &lt;include name="testDeleteBeneficiary"/&gt;
        &lt;/methods&gt;
      &lt;/class&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

&lt;/suite&gt;</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Parallel Modes Explained</h2>
        <table class="comparison-table">
          <thead><tr><th>parallel=""</th><th>What runs in parallel</th><th>Best for</th></tr></thead>
          <tbody>
            <tr><td>tests</td><td>Each &lt;test&gt; tag runs in a separate thread</td><td>Cross-browser: Chrome, Firefox, Edge in parallel</td></tr>
            <tr><td>classes</td><td>Each &lt;class&gt; runs in a separate thread</td><td>Independent feature modules running simultaneously</td></tr>
            <tr><td>methods</td><td>Each @Test method runs in a separate thread</td><td>Maximum parallelism — most aggressive, needs careful ThreadLocal usage</td></tr>
            <tr><td>instances</td><td>Each instance of a test class runs in a thread</td><td>Factory-created instances</td></tr>
          </tbody>
        </table>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What is testng.xml and what can you configure in it?",
        a: `<div class="ans-hero">testng.xml is the suite configuration file that controls which tests run, in what order, with what parameters, and how many threads.</div>
        <ul class="ans-list blue">
          <li><span class="icon">📋</span><strong>Suite name:</strong> Top-level label for reports</li>
          <li><span class="icon">🔀</span><strong>Parallel mode + thread count:</strong> parallel="tests" thread-count="3"</li>
          <li><span class="icon">📦</span><strong>Test blocks:</strong> Multiple &lt;test&gt; tags — each can have different params</li>
          <li><span class="icon">⚙️</span><strong>Parameters:</strong> browser, env — overrides without code changes</li>
          <li><span class="icon">🎯</span><strong>Groups:</strong> include/exclude smoke, regression, wip</li>
          <li><span class="icon">👂</span><strong>Listeners:</strong> Register ITestListener, RetryAnalyzer globally</li>
          <li><span class="icon">🔧</span><strong>Methods include/exclude:</strong> Run only specific methods from a class</li>
        </ul>`
      }
    ]
  },

  // ── Banking Application TestNG Tests ─────────────────────────
  {
    id: 'testng-banking-app',
    title: 'Banking App — TestNG Test Cases',
    section: 'testng',
    difficulty: 'hard',
    time: '50 min',
    shortDesc: 'Real TestNG automation test cases for a banking application — login, fund transfer, account balance, transaction history, and beneficiary management.',
    content: `
      <div class="topic-section">
        <h2>Banking Application Test Architecture</h2>
        <div class="ans-hero">A banking application has critical flows that must be tested with precision — every test validates a user journey from start to finish with proper setup, execution, and teardown.</div>

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-shield-lock"></i></div>
            <div class="bm-title">Login &amp; Auth</div>
            <div class="bm-count">4 tests</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-arrow-left-right"></i></div>
            <div class="bm-title">Fund Transfer</div>
            <div class="bm-count">5 tests</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-wallet2"></i></div>
            <div class="bm-title">Account &amp; Balance</div>
            <div class="bm-count">4 tests</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-clock-history"></i></div>
            <div class="bm-title">Transaction History</div>
            <div class="bm-count">3 tests</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-people"></i></div>
            <div class="bm-title">Beneficiary Mgmt</div>
            <div class="bm-count">4 tests</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-person-gear"></i></div>
            <div class="bm-title">Profile &amp; Settings</div>
            <div class="bm-count">3 tests</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Framework Architecture</h2>
        <img src="images/testng/framework-architecture.jpeg" alt="TestNG Framework Architecture — testng.xml → BaseTest (@BeforeMethod/@AfterMethod) → TestNG class (@Test) → POM → Browser, with Excel/TDR data integration" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>BaseTest — Shared Setup</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — BaseTest.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class BaseTest {
    private static ThreadLocal&lt;WebDriver&gt; tlDriver = new ThreadLocal&lt;&gt;();
    private static final Logger log = LogManager.getLogger(BaseTest.class);

    @Parameters({"browser", "env"})
    @BeforeMethod
    public void setUp(
        @Optional("chrome") String browser,
        @Optional("UAT")    String env
    ) {
        String baseUrl = ConfigReader.get("url." + env.toLowerCase());
        WebDriver driver = DriverFactory.createDriver(browser);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get(baseUrl);
        tlDriver.set(driver);
        log.info("Browser started: " + browser + " | Env: " + env);
    }

    public static WebDriver getDriver() { return tlDriver.get(); }

    @AfterMethod(alwaysRun = true)
    public void tearDown(ITestResult result) {
        if (ITestResult.FAILURE == result.getStatus()) {
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
        <h2>1. Login Tests — LoginTest.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — LoginTest.java (Banking App)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class LoginTest extends BaseTest {

    LoginPage loginPage;
    DashboardPage dashboardPage;

    @BeforeMethod
    public void initPages() {
        loginPage     = new LoginPage(getDriver());
        dashboardPage = new DashboardPage(getDriver());
    }

    // ── TC01: Valid Login ────────────────────────────────────────
    @Test(priority = 1,
          groups  = {"smoke", "regression"},
          description = "TC01 — Verify successful login with valid credentials")
    public void testValidLogin() {
        loginPage.enterUsername(ConfigReader.get("app.username"));
        loginPage.enterPassword(ConfigReader.get("app.password"));
        loginPage.clickLoginButton();

        Assert.assertTrue(dashboardPage.isLoaded(),
            "Dashboard not loaded after valid login");
        Assert.assertEquals(dashboardPage.getWelcomeMessage(),
            "Welcome, Karan Singh",
            "Welcome message mismatch");
    }

    // ── TC02: Invalid Password ───────────────────────────────────
    @Test(priority = 2,
          groups  = {"smoke", "regression"},
          description = "TC02 — Verify error message for invalid password")
    public void testInvalidPassword() {
        loginPage.enterUsername("admin@bankapp.com");
        loginPage.enterPassword("WrongPassword123");
        loginPage.clickLoginButton();

        Assert.assertTrue(loginPage.isErrorDisplayed(),
            "Error message not shown for invalid password");
        Assert.assertEquals(loginPage.getErrorText(),
            "Invalid username or password",
            "Error message text mismatch");
    }

    // ── TC03: Blank Fields ───────────────────────────────────────
    @Test(priority = 3,
          groups  = {"regression"},
          description = "TC03 — Verify validation messages for empty fields")
    public void testBlankFieldsValidation() {
        loginPage.clickLoginButton(); // click without entering anything
        SoftAssert soft = new SoftAssert();
        soft.assertEquals(loginPage.getUsernameError(),
            "Username is required", "Username error text mismatch");
        soft.assertEquals(loginPage.getPasswordError(),
            "Password is required", "Password error text mismatch");
        soft.assertAll();
    }

    // ── TC04: Multiple Credentials — Data Driven ─────────────────
    @DataProvider(name = "loginData")
    public Object[][] loginDataProvider() {
        return new Object[][] {
            { "admin@bankapp.com",  "Admin@123",   true,  "Dashboard"          },
            { "user@bankapp.com",   "User@1234",   true,  "Dashboard"          },
            { "wrong@bankapp.com",  "WrongPass",   false, "Invalid credentials"},
            { "locked@bankapp.com", "Locked@123",  false, "Account is locked"  },
            { "",                   "",            false, "Username is required"}
        };
    }

    @Test(dataProvider = "loginData",
          groups       = {"regression"},
          description  = "TC04 — Verify login with multiple credential sets")
    public void testLoginWithMultipleCredentials(
        String  username,
        String  password,
        boolean expectSuccess,
        String  expectedMessage
    ) {
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        loginPage.clickLoginButton();

        if (expectSuccess) {
            Assert.assertTrue(dashboardPage.isLoaded(),
                "Login failed for valid user: " + username);
        } else {
            Assert.assertTrue(loginPage.isErrorDisplayed(),
                "Error not shown for: " + username);
            Assert.assertTrue(loginPage.getErrorText().contains(expectedMessage),
                "Error text mismatch for: " + username);
        }
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>2. Fund Transfer Tests — TransferTest.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — TransferTest.java (Banking App)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class TransferTest extends BaseTest {

    LoginPage    loginPage;
    TransferPage transferPage;

    @BeforeMethod
    public void loginAndNavigate() {
        loginPage    = new LoginPage(getDriver());
        transferPage = new TransferPage(getDriver());
        // Pre-condition: user must be logged in
        loginPage.login(ConfigReader.get("app.username"),
                        ConfigReader.get("app.password"));
        dashboardPage.clickFundTransfer();
    }

    // ── TC05: NEFT Transfer ──────────────────────────────────────
    @Test(priority = 1,
          groups  = {"smoke", "regression"},
          description = "TC05 — Verify successful NEFT transfer")
    public void testNEFTTransfer() {
        transferPage.selectTransferType("NEFT");
        transferPage.enterBeneficiaryAccount("ACC9876543");
        transferPage.enterAmount("5000");
        transferPage.enterRemarks("Rent payment");
        transferPage.clickTransfer();
        transferPage.confirmWithOTP("123456"); // mock OTP

        SoftAssert soft = new SoftAssert();
        soft.assertEquals(transferPage.getSuccessMessage(),
            "Transfer Successful",       "Success message mismatch");
        soft.assertNotNull(transferPage.getReferenceNumber(),
            "Reference number missing");
        soft.assertTrue(transferPage.getReferenceNumber().startsWith("TXN"),
            "Reference number format invalid");
        soft.assertAll();
    }

    // ── TC06: IMPS Transfer ──────────────────────────────────────
    @Test(priority = 2,
          groups  = {"regression"},
          description = "TC06 — Verify successful IMPS transfer")
    public void testIMPSTransfer() {
        transferPage.selectTransferType("IMPS");
        transferPage.enterBeneficiaryAccount("ACC1234567");
        transferPage.enterAmount("2000");
        transferPage.clickTransfer();
        transferPage.confirmWithOTP("123456");

        Assert.assertEquals(transferPage.getSuccessMessage(),
            "Transfer Successful", "IMPS transfer failed");
    }

    // ── TC07: Transfer Exceeding Balance ─────────────────────────
    @Test(priority = 3,
          groups  = {"regression"},
          description = "TC07 — Verify error when transfer amount exceeds balance")
    public void testTransferExceedingBalance() {
        double currentBalance = transferPage.getAvailableBalance();
        double exceedAmount   = currentBalance + 10000;

        transferPage.selectTransferType("NEFT");
        transferPage.enterBeneficiaryAccount("ACC9876543");
        transferPage.enterAmount(String.valueOf(exceedAmount));
        transferPage.clickTransfer();

        Assert.assertTrue(transferPage.getErrorMessage()
            .contains("Insufficient balance"),
            "Error not shown for insufficient funds");
    }

    // ── TC08: Transfer to Invalid Account ────────────────────────
    @Test(priority = 4,
          groups  = {"regression"},
          description = "TC08 — Verify error for invalid beneficiary account")
    public void testTransferToInvalidAccount() {
        transferPage.selectTransferType("NEFT");
        transferPage.enterBeneficiaryAccount("INVALID123");
        transferPage.enterAmount("1000");
        transferPage.clickTransfer();

        Assert.assertTrue(transferPage.getErrorMessage()
            .contains("Invalid account number"),
            "Error not shown for invalid account");
    }

    // ── TC09: Transfer Amount Validation ────────────────────────
    @DataProvider(name = "transferAmounts")
    public Object[][] transferAmountData() {
        return new Object[][] {
            { "0",       false, "Amount must be greater than zero"  },
            { "-100",    false, "Amount cannot be negative"         },
            { "abc",     false, "Please enter a valid amount"       },
            { "1000",    true,  "Transfer Successful"               },
            { "99999999",false, "Amount exceeds daily transfer limit"}
        };
    }

    @Test(dataProvider = "transferAmounts",
          groups       = {"regression"},
          description  = "TC09 — Validate transfer amount boundary values")
    public void testTransferAmountValidation(
        String  amount,
        boolean expectSuccess,
        String  expectedMsg
    ) {
        transferPage.selectTransferType("NEFT");
        transferPage.enterBeneficiaryAccount("ACC9876543");
        transferPage.enterAmount(amount);
        transferPage.clickTransfer();

        if (expectSuccess) {
            transferPage.confirmWithOTP("123456");
            Assert.assertTrue(transferPage.getSuccessMessage()
                .contains(expectedMsg), "Expected success for: " + amount);
        } else {
            Assert.assertTrue(transferPage.getErrorMessage()
                .contains(expectedMsg), "Expected error for: " + amount);
        }
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>3. Account &amp; Balance Tests — AccountTest.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — AccountTest.java (Banking App)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class AccountTest extends BaseTest {

    DashboardPage dashboardPage;
    AccountPage   accountPage;

    @BeforeMethod
    public void setUp() {
        dashboardPage = new DashboardPage(getDriver());
        accountPage   = new AccountPage(getDriver());
        new LoginPage(getDriver()).login(
            ConfigReader.get("app.username"),
            ConfigReader.get("app.password")
        );
    }

    // ── TC10: Verify Account Balance ─────────────────────────────
    @Test(priority = 1,
          groups  = {"smoke"},
          description = "TC10 — Verify account balance is displayed correctly")
    public void testAccountBalanceDisplay() {
        double displayedBalance  = dashboardPage.getDisplayedBalance();
        double expectedMinBalance = 0.0;

        Assert.assertTrue(displayedBalance >= expectedMinBalance,
            "Balance should be non-negative, got: " + displayedBalance);
        Assert.assertTrue(dashboardPage.isBalanceMasked() == false
            || dashboardPage.isMaskTogglePresent(),
            "Balance mask/unmask feature missing");
    }

    // ── TC11: Account Details Page ───────────────────────────────
    @Test(priority = 2,
          groups  = {"smoke", "regression"},
          description = "TC11 — Verify all fields on account details page")
    public void testAccountDetails() {
        accountPage.navigate();
        SoftAssert soft = new SoftAssert();

        soft.assertNotNull(accountPage.getAccountNumber(), "Account number missing");
        soft.assertNotNull(accountPage.getIFSCCode(),      "IFSC code missing");
        soft.assertNotNull(accountPage.getBranchName(),    "Branch name missing");
        soft.assertEquals(accountPage.getAccountType(),
            "Savings", "Account type mismatch");
        soft.assertTrue(accountPage.getAccountNumber().length() == 12,
            "Account number should be 12 digits");
        soft.assertTrue(accountPage.getIFSCCode().matches("[A-Z]{4}0[A-Z0-9]{6}"),
            "IFSC code format invalid");
        soft.assertAll();
    }

    // ── TC12: Download Account Statement ─────────────────────────
    @Test(priority = 3,
          groups  = {"regression"},
          description = "TC12 — Verify account statement download as PDF")
    public void testDownloadStatement() {
        accountPage.navigate();
        accountPage.selectDateRange("01/01/2025", "31/01/2025");
        accountPage.clickDownloadStatement("PDF");

        // Wait for file to download
        String downloadPath = ConfigReader.get("download.path");
        boolean fileDownloaded = FileUtil.waitForFile(downloadPath, ".pdf", 15);

        Assert.assertTrue(fileDownloaded,
            "Statement PDF not downloaded within 15 seconds");
    }

    // ── TC13: Account Balance After Transfer ─────────────────────
    @Test(priority = 4,
          groups  = {"regression"},
          dependsOnMethods = {"testAccountBalanceDisplay"},
          description = "TC13 — Verify account balance decreases after transfer")
    public void testBalanceAfterTransfer() {
        double balanceBefore = dashboardPage.getDisplayedBalance();
        double transferAmount = 1000.0;

        // Perform transfer
        TransferPage tp = new TransferPage(getDriver());
        dashboardPage.clickFundTransfer();
        tp.quickTransfer("ACC9876543", transferAmount);

        // Navigate back and check balance
        getDriver().navigate().back();
        double balanceAfter = dashboardPage.getDisplayedBalance();

        Assert.assertEquals(balanceAfter, balanceBefore - transferAmount,
            "Balance not reduced by transfer amount");
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>4. Transaction History — TransactionTest.java</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — TransactionTest.java (Banking App)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">public class TransactionTest extends BaseTest {

    TransactionHistoryPage txnPage;

    @BeforeMethod
    public void setUp() {
        new LoginPage(getDriver()).login(
            ConfigReader.get("app.username"),
            ConfigReader.get("app.password")
        );
        txnPage = new TransactionHistoryPage(getDriver());
        txnPage.navigate();
    }

    // ── TC14: Transaction History List ───────────────────────────
    @Test(priority = 1,
          groups  = {"smoke"},
          description = "TC14 — Verify transaction history page loads with records")
    public void testTransactionHistoryLoads() {
        Assert.assertTrue(txnPage.isPageLoaded(),     "Transaction page not loaded");
        Assert.assertTrue(txnPage.getRecordCount() > 0, "No transaction records found");
    }

    // ── TC15: Filter by Date ─────────────────────────────────────
    @Test(priority = 2,
          groups  = {"regression"},
          description = "TC15 — Verify date range filter shows correct records")
    public void testDateRangeFilter() {
        txnPage.setFromDate("01/06/2025");
        txnPage.setToDate("30/06/2025");
        txnPage.applyFilter();

        List&lt;String&gt; dates = txnPage.getAllTransactionDates();
        for (String date : dates) {
            Assert.assertTrue(
                DateUtil.isBetween(date, "01/06/2025", "30/06/2025"),
                "Transaction date " + date + " outside filter range"
            );
        }
    }

    // ── TC16: Transaction Details Modal ─────────────────────────
    @Test(priority = 3,
          groups  = {"regression"},
          description = "TC16 — Verify transaction detail modal shows correct data")
    public void testTransactionDetailsModal() {
        txnPage.clickFirstTransaction();
        SoftAssert soft = new SoftAssert();
        soft.assertTrue(txnPage.isDetailModalOpen(),    "Detail modal not opened");
        soft.assertNotNull(txnPage.getTransactionId(),  "Transaction ID missing");
        soft.assertNotNull(txnPage.getTransactionDate(),"Transaction date missing");
        soft.assertNotNull(txnPage.getTransactionAmt(), "Transaction amount missing");
        soft.assertNotNull(txnPage.getTransactionType(),"Transaction type missing");
        soft.assertAll();
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>5. Complete testng.xml for Banking App</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — banking-testng.xml</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd"&gt;

&lt;suite name="Banking App — Full Test Suite"
       parallel="tests"
       thread-count="2"
       verbose="1"&gt;

  &lt;listeners&gt;
    &lt;listener class-name="com.utils.TestListener"/&gt;
    &lt;listener class-name="com.utils.RetryTransformer"/&gt;
  &lt;/listeners&gt;

  &lt;!-- SMOKE: Quick sanity — runs before every release --&gt;
  &lt;test name="Smoke Suite — Chrome"&gt;
    &lt;parameter name="browser" value="chrome"/&gt;
    &lt;parameter name="env"     value="UAT"/&gt;
    &lt;groups&gt;
      &lt;run&gt;&lt;include name="smoke"/&gt;&lt;/run&gt;
    &lt;/groups&gt;
    &lt;classes&gt;
      &lt;class name="com.tests.LoginTest"/&gt;
      &lt;class name="com.tests.AccountTest"/&gt;
      &lt;class name="com.tests.TransactionTest"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

  &lt;!-- REGRESSION: Full validation — runs nightly --&gt;
  &lt;test name="Regression Suite — Chrome"&gt;
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
      &lt;class name="com.tests.TransferTest"/&gt;
      &lt;class name="com.tests.AccountTest"/&gt;
      &lt;class name="com.tests.TransactionTest"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

&lt;/suite&gt;</code></pre>
        </div>
        <div class="info-panel tip"><div class="panel-title">Run from command line</div><p><code>mvn clean test -DsuiteFile=banking-testng.xml -Dbrowser=chrome -Denv=UAT</code></p></div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How would you structure TestNG tests for a banking application? What test classes would you create?",
        a: `<div class="ans-hero">Organise by business module — one test class per feature. Each class extends BaseTest for shared setup/teardown.</div>
        <ul class="ans-list green">
          <li><span class="icon">🔑</span><strong>LoginTest</strong> — valid/invalid login, account lockout, session timeout</li>
          <li><span class="icon">💸</span><strong>TransferTest</strong> — NEFT/IMPS/RTGS, insufficient balance, invalid account, daily limit</li>
          <li><span class="icon">💼</span><strong>AccountTest</strong> — balance display, account details, statement download</li>
          <li><span class="icon">📋</span><strong>TransactionTest</strong> — history list, date filter, detail modal</li>
          <li><span class="icon">👥</span><strong>BeneficiaryTest</strong> — add/edit/delete, duplicate validation</li>
          <li><span class="icon">⚙️</span><strong>ProfileTest</strong> — update profile, change password, change MPIN</li>
        </ul>
        <div class="info-panel tip"><div class="panel-title">Key Design Decisions</div><p>1) Use @DataProvider for credential/amount boundary tests. 2) Use dependsOnMethods for flows (login → transfer). 3) Use SoftAssert for multi-field page validations. 4) ThreadLocal WebDriver for parallel cross-browser runs.</p></div>`
      },
      {
        difficulty: 'hard',
        q: "How do you use @DataProvider for testing fund transfers with multiple amounts in a banking app?",
        a: `<div class="ans-hero">@DataProvider supplies a matrix of test amounts, expected outcomes, and error messages — one test method handles all boundary cases.</div>
        <div class="code-block"><code><span class="ann">@DataProvider</span>(name = <span class="st">"transferAmounts"</span>)
<span class="kw">public</span> <span class="cl">Object</span>[][] <span class="fn">transferAmounts</span>() {
    <span class="kw">return new</span> <span class="cl">Object</span>[][] {
        { <span class="st">"1000"</span>,    <span class="kw">true</span>,  <span class="st">"Transfer Successful"</span>      },
        { <span class="st">"0"</span>,       <span class="kw">false</span>, <span class="st">"Amount must be &gt; 0"</span>      },
        { <span class="st">"-500"</span>,    <span class="kw">false</span>, <span class="st">"Amount cannot be negative"</span>},
        { <span class="st">"9999999"</span>, <span class="kw">false</span>, <span class="st">"Exceeds daily limit"</span>      }
    };
}

<span class="ann">@Test</span>(dataProvider = <span class="st">"transferAmounts"</span>)
<span class="kw">public void</span> <span class="fn">testTransferAmounts</span>(
    <span class="cl">String</span> amount, <span class="kw">boolean</span> success, <span class="cl">String</span> msg) {
    transferPage.<span class="fn">enterAmount</span>(amount);
    transferPage.<span class="fn">clickTransfer</span>();
    Assert.<span class="fn">assertEquals</span>(transferPage.<span class="fn">getResultMessage</span>(), msg);
}</code></div>`
      }
    ]
  }
];
