[
  {
    q: "What is BDD (Behavior-Driven Development)? Why does it exist and who benefits from it?",
    difficulty: "easy",
    a: `<div class="ans-hero">BDD is a software development approach where tests are written in plain English describing the expected behavior of the system, so developers, QA, and business stakeholders can all collaborate from one shared source of truth.</div>
<ul class="ans-list blue">
  <li><span class="icon">💡</span><strong>Why BDD exists</strong> — Traditional testing was too technical for business teams. Requirements were misunderstood, leading to bugs. BDD forces everyone to agree on behavior before a single line of code is written.</li>
  <li><span class="icon">🏢</span><strong>Business Analysts / Product Owners benefit</strong> — They write and read scenarios in plain English without needing to understand code. They can verify that the right thing is being built.</li>
  <li><span class="icon">👨‍💻</span><strong>Developers benefit</strong> — Scenarios serve as unambiguous specifications. There is no guessing about what "correct behavior" means.</li>
  <li><span class="icon">🧪</span><strong>QA Engineers benefit</strong> — Test scenarios double as automated tests. Regression is automated and readable without maintaining separate test case documents.</li>
  <li><span class="icon">🔄</span><strong>The BDD cycle</strong> — Discover (workshops) → Formulate (Gherkin scenarios) → Automate (step definitions). This is often called the "Three Amigos" meeting: BA + Dev + QA.</li>
</ul>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>Given</h6>
    <ul>
      <li>Sets the initial context</li>
      <li>Precondition / system state</li>
      <li>Example: Given the user is on the login page</li>
    </ul>
  </div>
  <div class="compare-card green">
    <h6>When</h6>
    <ul>
      <li>Describes the action/event</li>
      <li>What the user does</li>
      <li>Example: When the user enters valid credentials</li>
    </ul>
  </div>
  <div class="compare-card purple">
    <h6>Then</h6>
    <ul>
      <li>Describes the expected outcome</li>
      <li>Verifiable result</li>
      <li>Example: Then the dashboard should be displayed</li>
    </ul>
  </div>
</div>
<div class="info-panel tip"><div class="panel-title">💡 Key Insight</div><p>BDD is not just a testing technique — it is a <strong>communication and collaboration framework</strong>. The automated tests are a by-product of the collaboration, not the primary goal.</p></div>`
  },
  {
    q: "What is Cucumber? What is its purpose and which languages and tools does it support?",
    difficulty: "easy",
    a: `<div class="ans-hero">Cucumber is an open-source BDD testing tool that allows writing automated test scenarios in plain English using the Gherkin language, bridging the communication gap between business and technical teams.</div>
<ul class="ans-list green">
  <li><span class="icon">🥒</span><strong>Primary purpose</strong> — Execute feature files written in Gherkin as automated tests. It reads each Gherkin step and invokes the matching Java (or other language) method to perform the actual action.</li>
  <li><span class="icon">🌉</span><strong>Bridges the gap</strong> — Business stakeholders write or review feature files in plain English. Developers/QA implement step definitions. Both sides work on the same artifact.</li>
  <li><span class="icon">📄</span><strong>Living documentation</strong> — Feature files always reflect the current behavior of the system. They are both a specification and a test suite.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Language / Tool</th><th>Cucumber Implementation</th></tr></thead>
  <tbody>
    <tr><td>Java</td><td>Cucumber-JVM (most widely used in enterprise)</td></tr>
    <tr><td>JavaScript / TypeScript</td><td>Cucumber.js</td></tr>
    <tr><td>Ruby</td><td>Cucumber-Ruby (original implementation)</td></tr>
    <tr><td>Python</td><td>Behave (inspired by Cucumber)</td></tr>
    <tr><td>.NET / C#</td><td>SpecFlow (Cucumber-compatible)</td></tr>
    <tr><td>Kotlin</td><td>Cucumber-JVM with Kotlin DSL</td></tr>
  </tbody>
</table>
<ul class="ans-list amber">
  <li><span class="icon">🔗</span><strong>Integrates with</strong> — Selenium WebDriver, Appium (mobile), REST Assured (API), JUnit, TestNG, Maven, Gradle, Jenkins, Git.</li>
  <li><span class="icon">📊</span><strong>Reporting</strong> — Built-in pretty/HTML/JSON reporters, plus Extent Reports, Allure, and ReportPortal integrations.</li>
  <li><span class="icon">🏷️</span><strong>Tag-based execution</strong> — Run specific subsets of tests (smoke, regression, wip) using tags without changing code.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Core Components</div><p>Cucumber has four main parts: <strong>Feature Files</strong> (Gherkin scenarios), <strong>Step Definitions</strong> (Java code), <strong>Hooks</strong> (@Before/@After), and the <strong>Runner Class</strong> (@CucumberOptions). All four work together to execute tests.</p></div>`
  },
  {
    q: "What is the Gherkin language? Explain every keyword: Feature, Scenario, Given, When, Then, And, But, Background, Scenario Outline, Examples.",
    difficulty: "easy",
    a: `<div class="ans-hero">Gherkin is a plain-English Domain Specific Language (DSL) used to write Cucumber test scenarios. It uses a fixed set of keywords to structure test descriptions in a way that is both human-readable and machine-executable.</div>
<table class="table-light-custom">
  <thead><tr><th>Keyword</th><th>Purpose</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><code>Feature</code></td><td>High-level description of the feature being tested. First line in every .feature file.</td><td>Feature: User Login</td></tr>
    <tr><td><code>Scenario</code></td><td>A specific test case — one concrete example of a behavior. Has a title and a series of steps.</td><td>Scenario: Successful login</td></tr>
    <tr><td><code>Given</code></td><td>Sets up the initial state or context (precondition) before the action happens.</td><td>Given the user is on the login page</td></tr>
    <tr><td><code>When</code></td><td>Describes the action or event performed by the user or system.</td><td>When the user submits valid credentials</td></tr>
    <tr><td><code>Then</code></td><td>Describes the expected observable outcome after the When action.</td><td>Then the dashboard should be displayed</td></tr>
    <tr><td><code>And</code></td><td>Continuation of a Given, When, or Then. Avoids repeating the same keyword multiple times.</td><td>And the welcome message should appear</td></tr>
    <tr><td><code>But</code></td><td>Negative continuation of a Given/When/Then. Reads more naturally for negative assertions.</td><td>But the error message should not be shown</td></tr>
    <tr><td><code>Background</code></td><td>Steps that run before every Scenario in the Feature file. Avoids repeating common setup steps.</td><td>Background: Given the app is launched</td></tr>
    <tr><td><code>Scenario Outline</code></td><td>A template scenario that runs multiple times with different data from an Examples table.</td><td>Scenario Outline: Login as &lt;role&gt;</td></tr>
    <tr><td><code>Examples</code></td><td>The data table attached to a Scenario Outline. Each row produces one execution of the scenario.</td><td>Examples: | username | password |</td></tr>
  </tbody>
</table>
<ul class="ans-list purple">
  <li><span class="icon">📂</span><strong>File extension</strong> — Gherkin files are saved with the <code>.feature</code> extension, e.g., <code>login.feature</code>.</li>
  <li><span class="icon">#️⃣</span><strong>Comments</strong> — Lines starting with <code>#</code> are comments and are ignored by Cucumber.</li>
  <li><span class="icon">🏷️</span><strong>Tags</strong> — Lines starting with <code>@</code> (e.g., <code>@smoke</code>, <code>@regression</code>) annotate Features or Scenarios for selective execution.</li>
  <li><span class="icon">📝</span><strong>Free text</strong> — Below the Feature keyword you can add a free-text description (no keyword required) that serves as documentation.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 And/But are aliases</div><p><strong>And</strong> and <strong>But</strong> are syntactic sugar — they are treated identically to whatever step type came before them (Given, When, or Then). They exist purely to make scenarios read more naturally in English.</p></div>`
  },
  {
    q: "What are Step Definitions in Cucumber? How do they map to Gherkin steps? Explain @Given/@When/@Then annotations and Cucumber Expressions with a code example.",
    difficulty: "medium",
    a: `<div class="ans-hero">Step Definitions are Java methods annotated with @Given, @When, @Then (or @And/@But) that Cucumber invokes when it matches a Gherkin step — they are the bridge between plain-English scenarios and actual executable code.</div>
<ul class="ans-list blue">
  <li><span class="icon">🔗</span><strong>Mapping mechanism</strong> — Each annotation takes a string pattern. When Cucumber reads a Gherkin step, it scans all step definitions for a matching pattern. If found, that method is called.</li>
  <li><span class="icon">🧩</span><strong>Cucumber Expressions</strong> — Modern, readable syntax using <code>{string}</code>, <code>{int}</code>, <code>{double}</code>, <code>{word}</code>, <code>{}</code>. Preferred over regex in modern projects.</li>
  <li><span class="icon">📐</span><strong>Regular Expressions</strong> — Older syntax using <code>^...$</code> patterns with capture groups <code>(\\d+)</code>, <code>([^"]*)</code>. Still valid but less readable.</li>
  <li><span class="icon">📦</span><strong>Package</strong> — Import from <code>io.cucumber.java.en.*</code> for English annotations.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Gherkin Step</th><th>Step Definition Pattern</th><th>Extracted Value</th></tr></thead>
  <tbody>
    <tr><td>When the user enters username "admin"</td><td><code>@When("the user enters username {string}")</code></td><td>String: "admin"</td></tr>
    <tr><td>And the user waits 5 seconds</td><td><code>@And("the user waits {int} seconds")</code></td><td>int: 5</td></tr>
    <tr><td>Then the price should be 19.99</td><td><code>@Then("the price should be {double}")</code></td><td>double: 19.99</td></tr>
    <tr><td>Given the user has admin role</td><td><code>@Given("the user has {word} role")</code></td><td>String: "admin"</td></tr>
  </tbody>
</table>
<ul class="ans-list green">
  <li><span class="icon">💻</span><strong>Code example — LoginSteps.java</strong></li>
</ul>
<ul class="ans-list amber">
  <li><span class="icon">📌</span><code>@Given("the user is on the login page") public void navigateToLogin() { driver.get("https://app.com/login"); }</code></li>
  <li><span class="icon">📌</span><code>@When("the user enters username {string} and password {string}") public void enterCredentials(String user, String pass) { loginPage.enterUsername(user); loginPage.enterPassword(pass); }</code></li>
  <li><span class="icon">📌</span><code>@Then("the user should see the dashboard") public void verifyDashboard() { Assert.assertTrue(driver.getTitle().contains("Dashboard")); }</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 @And and @But annotations</div><p>You can use <code>@And</code> and <code>@But</code> in step definitions, but it is considered best practice to use <code>@Given</code>, <code>@When</code>, or <code>@Then</code> based on the semantic intent of the step, regardless of what keyword appears in the feature file. Cucumber does not differentiate between them at runtime.</p></div>`
  },
  {
    q: "Explain the structure of a Cucumber Feature file. What are Features, Scenarios, steps, comments, and tags? Show a complete example.",
    difficulty: "medium",
    a: `<div class="ans-hero">A Feature file is a plain-text file with a .feature extension that contains one Feature, one or more Scenarios (or Scenario Outlines), and Gherkin steps — it is the primary artifact in a Cucumber project.</div>
<ul class="ans-list blue">
  <li><span class="icon">📁</span><strong>Location</strong> — Feature files are placed under <code>src/test/resources/features/</code> by convention in a Maven project.</li>
  <li><span class="icon">🏷️</span><strong>Tags (<code>@tagname</code>)</strong> — Placed on the line above a Feature or Scenario. Used to filter which tests run. Example: <code>@smoke</code>, <code>@regression</code>, <code>@wip</code>.</li>
  <li><span class="icon">#️⃣</span><strong>Comments (<code># text</code>)</strong> — Any line starting with <code>#</code> is ignored by Cucumber. Used for notes and documentation.</li>
  <li><span class="icon">📝</span><strong>Feature description</strong> — Free-form text after the <code>Feature:</code> line (no keyword prefix) is treated as documentation, not executed.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Element</th><th>Syntax</th><th>Required?</th></tr></thead>
  <tbody>
    <tr><td>Feature title</td><td><code>Feature: title text</code></td><td>Yes (one per file)</td></tr>
    <tr><td>Tag</td><td><code>@tagName</code> on line before Feature/Scenario</td><td>No</td></tr>
    <tr><td>Background</td><td><code>Background:</code> followed by Given steps</td><td>No (at most one per feature)</td></tr>
    <tr><td>Scenario</td><td><code>Scenario: title</code> followed by steps</td><td>At least one</td></tr>
    <tr><td>Steps</td><td><code>Given / When / Then / And / But</code></td><td>Yes (inside each scenario)</td></tr>
    <tr><td>Comment</td><td><code># any text</code></td><td>No</td></tr>
  </tbody>
</table>
<ul class="ans-list purple">
  <li><span class="icon">📄</span><strong>Complete feature file example:</strong></li>
  <li><span class="icon">1️⃣</span><code>@regression</code></li>
  <li><span class="icon">2️⃣</span><code>Feature: Shopping Cart</code> — <em>As a customer, I want to manage my cart so that I can purchase items</em></li>
  <li><span class="icon">3️⃣</span><code># Common setup runs before every scenario</code></li>
  <li><span class="icon">4️⃣</span><code>Background: Given the user is logged in And the user is on the shop page</code></li>
  <li><span class="icon">5️⃣</span><code>@smoke</code> <code>Scenario: Add item to cart</code> — <code>When the user clicks "Add to Cart" on "Laptop"</code> / <code>Then the cart count should be 1</code></li>
  <li><span class="icon">6️⃣</span><code>Scenario: Remove item from cart</code> — <code>Given the cart contains "Laptop"</code> / <code>When the user removes "Laptop"</code> / <code>Then the cart should be empty</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 One Feature per file</div><p>Each <code>.feature</code> file should contain <strong>exactly one Feature</strong> and describe one specific area of functionality. Having multiple Features in one file is technically valid but considered bad practice — it makes tag-based filtering and reporting harder to manage.</p></div>`
  },
  {
    q: "What is a Scenario Outline in Cucumber? How does parameterization work with the Examples table and &lt;placeholder&gt; syntax? How is it different from a regular Scenario?",
    difficulty: "hard",
    a: `<div class="ans-hero">A Scenario Outline is a template-based Cucumber construct that allows one scenario to run multiple times with different sets of data defined in an Examples table — eliminating the need to duplicate scenarios for data-driven testing.</div>
<ul class="ans-list blue">
  <li><span class="icon">🔁</span><strong>How it works</strong> — Placeholders in angle brackets (e.g., <code>&lt;username&gt;</code>) inside step text are replaced by values from the corresponding column of the Examples table. Cucumber executes the scenario once per row.</li>
  <li><span class="icon">📊</span><strong>Examples table structure</strong> — The first row is the header (column names matching placeholders). Each subsequent row is one test execution.</li>
  <li><span class="icon">🏷️</span><strong>Multiple Examples tables</strong> — A single Scenario Outline can have multiple Examples tables with different tags, useful for separating valid vs invalid datasets.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Aspect</th><th>Scenario</th><th>Scenario Outline</th></tr></thead>
  <tbody>
    <tr><td>Data</td><td>Hardcoded directly in steps</td><td>Parameterized via &lt;placeholder&gt; and Examples table</td></tr>
    <tr><td>Executions</td><td>Runs exactly once</td><td>Runs once per row in the Examples table</td></tr>
    <tr><td>Use case</td><td>Single, specific test case</td><td>Same workflow with multiple data combinations</td></tr>
    <tr><td>Step Def method</td><td>Accepts literal or {string}</td><td>Same step def reused for every row</td></tr>
    <tr><td>Report</td><td>One result entry</td><td>One result entry per row, with data shown</td></tr>
  </tbody>
</table>
<ul class="ans-list green">
  <li><span class="icon">📝</span><strong>Feature file structure:</strong></li>
  <li><span class="icon">▶️</span><code>Scenario Outline: Login with various user types</code></li>
  <li><span class="icon">▶️</span><code>Given the user is on the login page</code></li>
  <li><span class="icon">▶️</span><code>When the user enters username "&lt;username&gt;" and password "&lt;password&gt;"</code></li>
  <li><span class="icon">▶️</span><code>Then the user should see "&lt;expectedMessage&gt;"</code></li>
  <li><span class="icon">📋</span><code>Examples:</code> <code>| username | password | expectedMessage |</code></li>
  <li><span class="icon">📋</span><code>| admin@test.com | Admin@123 | Welcome, Admin |</code></li>
  <li><span class="icon">📋</span><code>| user@test.com  | User@123  | Welcome, User  |</code></li>
  <li><span class="icon">📋</span><code>| wrong@email.com | wrong | Invalid credentials |</code></li>
</ul>
<ul class="ans-list amber">
  <li><span class="icon">⚠️</span><strong>Placeholders are case-sensitive</strong> — <code>&lt;Username&gt;</code> and <code>&lt;username&gt;</code> are treated as different columns. Always match header names exactly.</li>
  <li><span class="icon">🔗</span><strong>Placeholders in step definition</strong> — The step def uses <code>{string}</code> or <code>{int}</code> to capture the substituted value. No changes to the step def are needed regardless of how many rows are in Examples.</li>
  <li><span class="icon">🏷️</span><strong>Tagged Examples</strong> — You can tag individual Examples blocks: <code>@valid</code> Examples for valid data and <code>@invalid</code> Examples for invalid data in the same Scenario Outline.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 When to prefer Scenario Outline</div><p>Use Scenario Outline when the <strong>same business flow</strong> needs to be tested with 3 or more data sets. For 1–2 variations, consider separate Scenarios for clarity. For large datasets (50+ rows), consider using external data sources (Excel, CSV) via custom DataProviders instead of embedding all data in the feature file.</p></div>`
  },
  {
    q: "What are Hooks in Cucumber? Explain @Before, @After, @BeforeStep, @AfterStep, their order of execution, and how to use tagged hooks.",
    difficulty: "medium",
    a: `<div class="ans-hero">Hooks are special methods annotated with @Before, @After, @BeforeStep, or @AfterStep that Cucumber automatically invokes at specific points in the test lifecycle — used for setup (opening browser) and teardown (closing browser, taking screenshots).</div>
<table class="table-light-custom">
  <thead><tr><th>Hook</th><th>Runs</th><th>Typical Use</th><th>Receives</th></tr></thead>
  <tbody>
    <tr><td><code>@Before</code></td><td>Before each Scenario</td><td>Launch browser, initialize page objects, set up test data</td><td>Scenario object (optional)</td></tr>
    <tr><td><code>@After</code></td><td>After each Scenario</td><td>Close browser, capture screenshot on failure, clean up data</td><td>Scenario object (optional)</td></tr>
    <tr><td><code>@BeforeStep</code></td><td>Before each individual step</td><td>Logging, performance timing per step</td><td>Scenario object</td></tr>
    <tr><td><code>@AfterStep</code></td><td>After each individual step</td><td>Step-level screenshot, assertion logging</td><td>Scenario object</td></tr>
  </tbody>
</table>
<ul class="ans-list blue">
  <li><span class="icon">🔢</span><strong>Execution order</strong> — <code>@Before</code> → <code>@BeforeStep</code> → Step runs → <code>@AfterStep</code> → (repeat for each step) → <code>@After</code>.</li>
  <li><span class="icon">📦</span><strong>Package</strong> — Import from <code>io.cucumber.java</code>, not from JUnit or TestNG.</li>
  <li><span class="icon">🎯</span><strong>Order attribute</strong> — <code>@Before(order = 1)</code> controls execution order when multiple @Before hooks exist. Lower number runs first.</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">🏷️</span><strong>Tagged hooks — syntax:</strong></li>
  <li><span class="icon">▶️</span><code>@Before("@smoke")</code> — runs only before scenarios tagged with <code>@smoke</code></li>
  <li><span class="icon">▶️</span><code>@After("@api")</code> — runs only after scenarios tagged with <code>@api</code></li>
  <li><span class="icon">▶️</span><code>@Before("@smoke and @regression")</code> — runs only when both tags are present</li>
  <li><span class="icon">▶️</span><code>@Before("@smoke or @sanity")</code> — runs when either tag is present</li>
</ul>
<ul class="ans-list amber">
  <li><span class="icon">💻</span><strong>@After example with screenshot on failure:</strong></li>
  <li><span class="icon">📌</span><code>@After public void tearDown(Scenario scenario) { if (scenario.isFailed()) { byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES); scenario.attach(screenshot, "image/png", "failure"); } driver.quit(); }</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Hooks vs Background</div><p><strong>Background</strong> is a Gherkin keyword — it runs visible Gherkin steps before each scenario and appears in reports as actual steps. <strong>@Before hook</strong> runs Java code invisibly before the scenario starts and does not appear as a Gherkin step in reports. Use Background for steps that should be visible to business stakeholders; use @Before for technical infrastructure setup like launching browsers.</p></div>`
  },
  {
    q: "What is @CucumberOptions? Explain every attribute: features, glue, tags, plugin, dryRun, monochrome, strict.",
    difficulty: "medium",
    a: `<div class="ans-hero">@CucumberOptions is a configuration annotation placed on the Runner class that tells Cucumber where to find feature files, where step definitions are, which tags to run, how to format output, and other execution behaviors.</div>
<table class="table-light-custom">
  <thead><tr><th>Attribute</th><th>Type</th><th>Purpose</th><th>Example Value</th></tr></thead>
  <tbody>
    <tr><td><code>features</code></td><td>String[]</td><td>Path(s) to the feature files or feature file folder</td><td>"src/test/resources/features"</td></tr>
    <tr><td><code>glue</code></td><td>String[]</td><td>Package(s) where step definitions and hooks are located</td><td>"com.steps", "com.hooks"</td></tr>
    <tr><td><code>tags</code></td><td>String</td><td>Tag expression to filter which scenarios run</td><td>"@smoke and not @wip"</td></tr>
    <tr><td><code>plugin</code></td><td>String[]</td><td>Report formatters — pretty, html, json, junit, timeline</td><td>"pretty", "html:target/report.html"</td></tr>
    <tr><td><code>dryRun</code></td><td>boolean</td><td>When true, checks that every step has a matching definition without executing them. Useful for finding undefined steps.</td><td>true / false</td></tr>
    <tr><td><code>monochrome</code></td><td>boolean</td><td>When true, removes ANSI color codes from console output for cleaner CI logs</td><td>true</td></tr>
    <tr><td><code>strict</code></td><td>boolean</td><td>When true, the build fails if there are any undefined or pending steps. Enforces 100% step definition coverage. (deprecated in newer versions — use publish=false)</td><td>true</td></tr>
  </tbody>
</table>
<ul class="ans-list purple">
  <li><span class="icon">📋</span><strong>Complete Runner class example:</strong></li>
  <li><span class="icon">▶️</span><code>@RunWith(Cucumber.class)</code></li>
  <li><span class="icon">▶️</span><code>@CucumberOptions(</code></li>
  <li><span class="icon">▶️</span><code>features = "src/test/resources/features",</code></li>
  <li><span class="icon">▶️</span><code>glue = {"com.stepdefs", "com.hooks"},</code></li>
  <li><span class="icon">▶️</span><code>tags = "@regression and not @wip",</code></li>
  <li><span class="icon">▶️</span><code>plugin = {"pretty", "html:target/report.html", "json:target/cucumber.json"},</code></li>
  <li><span class="icon">▶️</span><code>dryRun = false, monochrome = true</code></li>
  <li><span class="icon">▶️</span><code>) public class TestRunner extends AbstractTestNGCucumberTests {}</code></li>
</ul>
<ul class="ans-list amber">
  <li><span class="icon">🔍</span><strong>dryRun = true use case</strong> — Run this before implementing step definitions to generate a skeleton of all undefined steps. Cucumber will print a template for each missing step definition.</li>
  <li><span class="icon">🎯</span><strong>Targeting a single file</strong> — <code>features = "src/test/resources/features/login.feature"</code> runs only that file. You can also specify a line number: <code>"login.feature:15"</code> runs only the scenario at line 15.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Multiple glue packages</div><p>If your step definitions are split across multiple packages (e.g., separate packages for different modules), provide all packages in the <code>glue</code> array: <code>glue = {"com.login.steps", "com.cart.steps", "com.hooks"}</code>. Cucumber scans all listed packages for annotated methods.</p></div>`
  },
  {
    q: "What is the difference between Scenario and Scenario Outline in Cucumber? When should you use each?",
    difficulty: "medium",
    a: `<div class="ans-hero">Scenario is a single concrete test case with fixed data written directly in the steps. Scenario Outline is a parameterized template that runs the same steps multiple times with different data from an Examples table.</div>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>Scenario</h6>
    <ul>
      <li>Data is hardcoded in the step text</li>
      <li>Executes exactly once</li>
      <li>Simpler to read and understand</li>
      <li>No Examples table needed</li>
      <li>Best for unique, one-off business flows</li>
      <li>Example: "Successful login as admin"</li>
    </ul>
  </div>
  <div class="compare-card green">
    <h6>Scenario Outline</h6>
    <ul>
      <li>Data uses &lt;placeholder&gt; syntax</li>
      <li>Executes once per Examples row</li>
      <li>Slightly more complex to read</li>
      <li>Requires Examples table</li>
      <li>Best for same flow, multiple data sets</li>
      <li>Example: "Login as &lt;role&gt; with &lt;credentials&gt;"</li>
    </ul>
  </div>
</div>
<ul class="ans-list amber">
  <li><span class="icon">✅</span><strong>Use Scenario when</strong> — the test case is unique and does not share a flow with other test cases. Example: "Verify that the 'Forgot Password' link is visible on the login page."</li>
  <li><span class="icon">✅</span><strong>Use Scenario Outline when</strong> — the same business flow needs to be tested with different inputs. Example: "Verify login with valid credentials, invalid password, locked account, and expired session" — all follow the same steps but with different data.</li>
  <li><span class="icon">⚠️</span><strong>Over-using Scenario Outline</strong> — Wrapping a single-data scenario in Scenario Outline adds unnecessary complexity. Use it only when you have 3 or more data combinations.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Criteria</th><th>Choose Scenario</th><th>Choose Scenario Outline</th></tr></thead>
  <tbody>
    <tr><td>Data sets</td><td>1</td><td>3 or more</td></tr>
    <tr><td>Business flow</td><td>Unique to this test</td><td>Identical steps, different data</td></tr>
    <tr><td>Readability</td><td>Better for business reviewers</td><td>Better for data-driven testing</td></tr>
    <tr><td>Maintenance</td><td>Add a new Scenario for new case</td><td>Add a new row to Examples table</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Hybrid approach</div><p>You can mix both in the same feature file — use a few concrete Scenarios for the most important "happy path" cases (which are easily readable by business) and a Scenario Outline for the comprehensive data-driven coverage.</p></div>`
  },
  {
    q: "How do you pass data in Cucumber? Explain inline Gherkin Expressions, Data Tables (List and Map), and DocStrings with parsing code examples.",
    difficulty: "hard",
    a: `<div class="ans-hero">Cucumber provides three mechanisms for passing data from feature files to step definitions: inline parameters via Gherkin Expressions (simple values), Data Tables (tabular data), and DocStrings (large multi-line text blocks).</div>
<ul class="ans-list blue">
  <li><span class="icon">1️⃣</span><strong>Inline Gherkin Expressions</strong> — Values embedded directly in the step text and captured with <code>{string}</code>, <code>{int}</code>, <code>{double}</code>, or <code>{word}</code>.</li>
  <li><span class="icon">▶️</span>Feature: <code>When the user adds 3 items to the cart</code></li>
  <li><span class="icon">▶️</span>Step Def: <code>@When("the user adds {int} items to the cart") public void addItems(int count) { ... }</code></li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">2️⃣</span><strong>Data Tables — as List&lt;List&lt;String&gt;&gt;</strong> — for simple tabular data without headers.</li>
  <li><span class="icon">▶️</span>Feature step followed by: <code>| John | john@test.com | Admin |</code> / <code>| Jane | jane@test.com | User |</code></li>
  <li><span class="icon">▶️</span>Step Def: <code>@Given("the following users exist:") public void createUsers(DataTable table) { List&lt;List&lt;String&gt;&gt; rows = table.asLists(String.class); for (List&lt;String&gt; row : rows) { String name = row.get(0); String email = row.get(1); } }</code></li>
  <li><span class="icon">3️⃣</span><strong>Data Tables — as List&lt;Map&lt;String, String&gt;&gt;</strong> — for data with a header row acting as keys.</li>
  <li><span class="icon">▶️</span>Feature: <code>| name | email | role |</code> / <code>| John | john@test.com | Admin |</code></li>
  <li><span class="icon">▶️</span>Step Def: <code>@Given("users:") public void users(DataTable table) { List&lt;Map&lt;String,String&gt;&gt; users = table.asMaps(String.class, String.class); for (Map&lt;String,String&gt; u : users) { String name = u.get("name"); String role = u.get("role"); } }</code></li>
</ul>
<ul class="ans-list purple">
  <li><span class="icon">4️⃣</span><strong>DocStrings</strong> — Multi-line text blocks passed to a step using triple-quote delimiters <code>"""</code>. Used for JSON payloads, XML, HTML, SQL, large text inputs.</li>
  <li><span class="icon">▶️</span>Feature: <code>When the API receives the following JSON: """ { "user": "admin", "action": "login" } """</code></li>
  <li><span class="icon">▶️</span>Step Def: <code>@When("the API receives the following JSON:") public void sendJson(String payload) { apiClient.post("/login", payload); }</code></li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Method</th><th>Best For</th><th>Step Def Parameter Type</th></tr></thead>
  <tbody>
    <tr><td>Gherkin Expression</td><td>1–3 simple inline values</td><td>String, int, double, word</td></tr>
    <tr><td>Data Table (List)</td><td>Rows of data without named columns</td><td>DataTable → asLists()</td></tr>
    <tr><td>Data Table (Map)</td><td>Rows of data with named columns/headers</td><td>DataTable → asMaps()</td></tr>
    <tr><td>DocString</td><td>Large text blocks: JSON, XML, SQL, HTML</td><td>String (plain text)</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 DataTable vs Examples table</div><p>The <strong>Examples table</strong> in a Scenario Outline drives multiple executions of the whole scenario — each row is a full test run. A <strong>Data Table</strong> inside a step passes all its rows as a single parameter to one step method within one scenario execution. These are completely different mechanisms used for different purposes.</p></div>`
  },
  {
    q: "What is the Background keyword in Cucumber? When does it run and how is it different from the @Before hook?",
    difficulty: "easy",
    a: `<div class="ans-hero">Background is a Gherkin keyword that groups common Given steps executed before every Scenario in the same Feature file — it eliminates duplication of setup steps across multiple scenarios.</div>
<ul class="ans-list blue">
  <li><span class="icon">📋</span><strong>Syntax</strong> — Place <code>Background:</code> after the Feature description, before any Scenario. Write only Given steps (technically When/Then work but are considered bad practice).</li>
  <li><span class="icon">🔁</span><strong>When it runs</strong> — Before each Scenario in the same Feature file. It runs after any <code>@Before</code> hooks but before the scenario's own steps.</li>
  <li><span class="icon">📄</span><strong>Visible in reports</strong> — Background steps appear in the test report as executed steps, just like scenario steps. Business stakeholders can see them.</li>
  <li><span class="icon">🚫</span><strong>One per feature</strong> — A feature file can have at most one Background block. You cannot have multiple Background blocks.</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">📝</span><strong>Example:</strong></li>
  <li><span class="icon">▶️</span><code>Feature: User Account Management</code></li>
  <li><span class="icon">▶️</span><code>Background:</code></li>
  <li><span class="icon">▶️</span><code>  Given the user is logged in as "admin"</code></li>
  <li><span class="icon">▶️</span><code>  And the user is on the account settings page</code></li>
  <li><span class="icon">▶️</span><code>Scenario: Change email address — When the user updates email ...</code></li>
  <li><span class="icon">▶️</span><code>Scenario: Change password — When the user updates password ...</code></li>
</ul>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>Background Keyword</h6>
    <ul>
      <li>Written in Gherkin feature file</li>
      <li>Visible as steps in reports</li>
      <li>Contains Gherkin steps (Given)</li>
      <li>Scoped to the Feature file</li>
      <li>Runs after @Before hooks</li>
      <li>Readable by business stakeholders</li>
    </ul>
  </div>
  <div class="compare-card purple">
    <h6>@Before Hook</h6>
    <ul>
      <li>Written in Java step definition class</li>
      <li>Not visible as steps in reports</li>
      <li>Contains Java code</li>
      <li>Applies globally to all scenarios</li>
      <li>Runs first (before Background)</li>
      <li>Technical setup (launch browser, DB)</li>
    </ul>
  </div>
</div>
<div class="info-panel tip"><div class="panel-title">💡 Execution order</div><p>Full order per scenario: <strong>@Before hook → Background steps → Scenario steps → @After hook</strong>. Background steps are part of the Gherkin execution flow, not the Java hook lifecycle.</p></div>`
  },
  {
    q: "How do Tags work in Cucumber? Explain @tag syntax, running specific tags via @CucumberOptions, tag expressions (and/or/not), and the @wip tag convention.",
    difficulty: "medium",
    a: `<div class="ans-hero">Tags are labels prefixed with @ that annotate Feature or Scenario blocks in Gherkin, allowing you to selectively run or exclude specific subsets of tests without modifying the feature files.</div>
<ul class="ans-list blue">
  <li><span class="icon">🏷️</span><strong>Tag syntax</strong> — Place <code>@tagname</code> on the line immediately before a <code>Feature:</code> or <code>Scenario:</code>. Tag names are case-sensitive. Multiple tags can be on one line: <code>@smoke @regression @login</code>.</li>
  <li><span class="icon">🌐</span><strong>Feature-level tag</strong> — A tag on the Feature applies to all Scenarios in the file. Individual Scenario tags add to (not replace) the Feature tags.</li>
  <li><span class="icon">🎯</span><strong>Running via @CucumberOptions</strong> — Set <code>tags = "@smoke"</code> to run only @smoke-tagged scenarios. Leave blank or remove to run all.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Tag Expression</th><th>Meaning</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><code>@smoke</code></td><td>Run all scenarios tagged @smoke</td><td>tags = "@smoke"</td></tr>
    <tr><td><code>not @wip</code></td><td>Run all scenarios EXCEPT @wip</td><td>tags = "not @wip"</td></tr>
    <tr><td><code>@smoke and @regression</code></td><td>Run scenarios with BOTH tags</td><td>tags = "@smoke and @regression"</td></tr>
    <tr><td><code>@smoke or @sanity</code></td><td>Run scenarios with EITHER tag</td><td>tags = "@smoke or @sanity"</td></tr>
    <tr><td><code>@regression and not @slow</code></td><td>Regression but exclude slow tests</td><td>tags = "@regression and not @slow"</td></tr>
  </tbody>
</table>
<ul class="ans-list green">
  <li><span class="icon">🚧</span><strong>@wip (Work In Progress)</strong> — Convention for scenarios that are still being developed and should not run in the main CI pipeline. Typically configured in the runner as <code>not @wip</code> to exclude them automatically.</li>
  <li><span class="icon">🔥</span><strong>@smoke</strong> — A small, fast subset of critical tests run on every build to verify basic functionality.</li>
  <li><span class="icon">🔁</span><strong>@regression</strong> — Full suite run before releases to ensure no existing functionality is broken.</li>
  <li><span class="icon">🌙</span><strong>@nightly</strong> — Long-running tests scheduled for overnight execution.</li>
</ul>
<ul class="ans-list amber">
  <li><span class="icon">💻</span><strong>Running from command line (Maven):</strong></li>
  <li><span class="icon">▶️</span><code>mvn test -Dcucumber.filter.tags="@smoke"</code></li>
  <li><span class="icon">▶️</span><code>mvn test -Dcucumber.filter.tags="@regression and not @wip"</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Tag inheritance</div><p>Tags are <strong>inherited downward</strong>. If <code>@regression</code> is on the Feature, every Scenario in that file is implicitly tagged <code>@regression</code>. A Scenario's own tags are merged with the Feature's tags — so a Scenario tagged <code>@smoke</code> inside a <code>@regression</code> Feature has both <code>@smoke</code> and <code>@regression</code> tags.</p></div>`
  },
  {
    q: "How do you generate reports in Cucumber? Explain built-in reporters (pretty, html, json, junit) and how to integrate Extent Reports and Allure.",
    difficulty: "hard",
    a: `<div class="ans-hero">Cucumber supports multiple built-in reporting plugins configured via @CucumberOptions, and can be extended with third-party reporters like Extent Reports and Allure for rich, visually detailed HTML dashboards with charts, screenshots, and history tracking.</div>
<table class="table-light-custom">
  <thead><tr><th>Plugin</th><th>Output</th><th>Best For</th><th>Configuration</th></tr></thead>
  <tbody>
    <tr><td><code>pretty</code></td><td>Colored console output with step details</td><td>Local debugging, quick feedback</td><td>"pretty"</td></tr>
    <tr><td><code>html</code></td><td>Simple built-in HTML report</td><td>Basic shareable report</td><td>"html:target/report.html"</td></tr>
    <tr><td><code>json</code></td><td>JSON file with full test data</td><td>Input for Extent Reports, ReportPortal, custom dashboards</td><td>"json:target/cucumber.json"</td></tr>
    <tr><td><code>junit</code></td><td>JUnit-format XML</td><td>CI/CD tools (Jenkins, GitLab) that parse JUnit XML</td><td>"junit:target/junit-report.xml"</td></tr>
    <tr><td><code>timeline</code></td><td>HTML with execution timeline</td><td>Parallel test execution analysis</td><td>"timeline:target/timeline"</td></tr>
  </tbody>
</table>
<ul class="ans-list green">
  <li><span class="icon">📊</span><strong>Extent Reports integration:</strong></li>
  <li><span class="icon">▶️</span>Add dependency: <code>com.aventstack:extentreports:5.x.x</code></li>
  <li><span class="icon">▶️</span>Use <code>ExtentCucumberAdapter</code> plugin: <code>"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"</code> in the plugin array.</li>
  <li><span class="icon">▶️</span>Create <code>extent.properties</code> in <code>src/test/resources/</code> to configure output path, report title, and theme (dark/standard).</li>
  <li><span class="icon">▶️</span>Features: Pie charts, step-level details, embedded screenshots, system info, retry history, environment information.</li>
</ul>
<ul class="ans-list purple">
  <li><span class="icon">📈</span><strong>Allure Reports integration:</strong></li>
  <li><span class="icon">▶️</span>Add dependency: <code>io.qameta.allure:allure-cucumber7-jvm:2.x.x</code></li>
  <li><span class="icon">▶️</span>Add plugin: <code>"io.qameta.allure.cucumber7jvm.AllureCucumber7Jvm"</code></li>
  <li><span class="icon">▶️</span>Generate report: <code>mvn allure:report</code> or <code>allure serve target/allure-results</code></li>
  <li><span class="icon">▶️</span>Features: Historical trends, test flakiness detection, categories, environment info, timeline, rich media attachments.</li>
</ul>
<ul class="ans-list amber">
  <li><span class="icon">📸</span><strong>Attaching screenshots to reports</strong> — In the @After hook: <code>scenario.attach(screenshotBytes, "image/png", "Screenshot")</code>. Both Extent Reports and Allure automatically pick up Scenario attachments.</li>
  <li><span class="icon">🔗</span><strong>ReportPortal</strong> — Cloud-based real-time dashboard. Add the <code>agent-java-cucumber7</code> dependency and configure <code>reportportal.properties</code> with launch URL and API key.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Recommended stack</div><p>For enterprise projects: use <strong>json plugin</strong> to produce raw data + <strong>Allure</strong> for trend analysis across builds in Jenkins, or <strong>Extent Reports</strong> for self-contained HTML email attachments. Always generate <strong>junit XML</strong> as well so Jenkins/GitLab CI can mark build pass/fail correctly based on test results.</p></div>`
  },
  {
    q: "How do you integrate Cucumber with Selenium WebDriver? Explain project structure, Maven dependencies, step definitions calling WebDriver, and sharing the driver between step definition classes.",
    difficulty: "hard",
    a: `<div class="ans-hero">Cucumber + Selenium integration involves a Maven project where feature files describe test scenarios in Gherkin, step definition classes use Selenium WebDriver to perform browser actions, and a shared driver management pattern (ThreadLocal or dependency injection) ensures the driver is accessible across all step definition classes in one scenario.</div>
<ul class="ans-list blue">
  <li><span class="icon">📁</span><strong>Project structure:</strong></li>
  <li><span class="icon">▶️</span><code>src/test/java/com/stepdefs/</code> — Step definition classes</li>
  <li><span class="icon">▶️</span><code>src/test/java/com/hooks/</code> — Hooks.java (@Before/@After)</li>
  <li><span class="icon">▶️</span><code>src/test/java/com/runner/</code> — TestRunner.java</li>
  <li><span class="icon">▶️</span><code>src/test/java/com/utils/DriverManager.java</code> — ThreadLocal WebDriver helper</li>
  <li><span class="icon">▶️</span><code>src/test/java/com/pages/</code> — Page Object Model classes</li>
  <li><span class="icon">▶️</span><code>src/test/resources/features/</code> — .feature files</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">📦</span><strong>Key Maven dependencies (pom.xml):</strong></li>
  <li><span class="icon">▶️</span><code>io.cucumber:cucumber-java:7.x.x</code></li>
  <li><span class="icon">▶️</span><code>io.cucumber:cucumber-testng:7.x.x</code> (or cucumber-junit)</li>
  <li><span class="icon">▶️</span><code>org.seleniumhq.selenium:selenium-java:4.x.x</code></li>
  <li><span class="icon">▶️</span><code>io.github.bonigarcia:webdrivermanager:5.x.x</code> (auto-manages ChromeDriver)</li>
  <li><span class="icon">▶️</span><code>org.testng:testng:7.x.x</code></li>
</ul>
<ul class="ans-list purple">
  <li><span class="icon">🔧</span><strong>DriverManager.java — ThreadLocal pattern:</strong></li>
  <li><span class="icon">▶️</span><code>public class DriverManager { private static ThreadLocal&lt;WebDriver&gt; driver = new ThreadLocal&lt;&gt;(); public static WebDriver getDriver() { return driver.get(); } public static void setDriver(WebDriver d) { driver.set(d); } public static void quitDriver() { driver.get().quit(); driver.remove(); } }</code></li>
  <li><span class="icon">🪝</span><strong>Hooks.java:</strong></li>
  <li><span class="icon">▶️</span><code>@Before public void setUp() { WebDriverManager.chromedriver().setup(); WebDriver d = new ChromeDriver(); d.manage().window().maximize(); DriverManager.setDriver(d); }</code></li>
  <li><span class="icon">▶️</span><code>@After public void tearDown(Scenario s) { if(s.isFailed()) { scenario.attach(screenshot, "image/png", "failure"); } DriverManager.quitDriver(); }</code></li>
</ul>
<ul class="ans-list amber">
  <li><span class="icon">💻</span><strong>Step definition using driver:</strong></li>
  <li><span class="icon">▶️</span><code>@When("the user clicks the login button") public void clickLogin() { DriverManager.getDriver().findElement(By.id("loginBtn")).click(); }</code></li>
  <li><span class="icon">🔗</span><strong>Alternative: Dependency Injection (PicoContainer)</strong> — Add <code>io.cucumber:cucumber-picocontainer</code> dependency. Define a shared context class, inject it into step defs via constructor. Cucumber manages the lifecycle — no ThreadLocal needed.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Why ThreadLocal?</div><p>When Cucumber scenarios run in <strong>parallel</strong> (multiple threads), each thread needs its own WebDriver instance. A plain <code>static WebDriver driver</code> is shared across threads and causes race conditions. <strong>ThreadLocal</strong> ensures each thread gets its own independent driver instance, enabling safe parallel execution.</p></div>`
  },
  {
    q: "What is the Cucumber Runner class? Explain @RunWith(Cucumber.class), @CucumberOptions placement, and how Cucumber discovers feature files and glue code.",
    difficulty: "medium",
    a: `<div class="ans-hero">The Runner class is a special Java class that acts as the entry point for Cucumber test execution — it uses @RunWith(Cucumber.class) (for JUnit) or extends AbstractTestNGCucumberTests (for TestNG) and carries the @CucumberOptions annotation that tells Cucumber where to find feature files and step definitions.</div>
<ul class="ans-list blue">
  <li><span class="icon">🚀</span><strong>Role of the Runner</strong> — When Maven runs tests, it discovers the Runner class (usually a test class in src/test/java). The JUnit or TestNG framework sees the class and invokes Cucumber, which reads @CucumberOptions to find everything else.</li>
  <li><span class="icon">📦</span><strong>JUnit 4 Runner:</strong> <code>@RunWith(Cucumber.class)</code> annotation + <code>@CucumberOptions</code> on the same class. Inherits nothing — plain class body is empty.</li>
  <li><span class="icon">📦</span><strong>TestNG Runner:</strong> Extend <code>AbstractTestNGCucumberTests</code> — no @RunWith needed. <code>@CucumberOptions</code> still placed on the class. Override <code>scenarios()</code> with <code>@DataProvider(parallel = true)</code> to enable parallel execution.</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">🔍</span><strong>Feature file discovery:</strong></li>
  <li><span class="icon">▶️</span>Cucumber reads the <code>features</code> attribute in @CucumberOptions.</li>
  <li><span class="icon">▶️</span>If it is a directory path, Cucumber recursively scans all <code>.feature</code> files inside it.</li>
  <li><span class="icon">▶️</span>If it is a specific file path, only that file is loaded.</li>
  <li><span class="icon">▶️</span>Appending <code>:lineNumber</code> (e.g., <code>login.feature:12</code>) runs only the scenario starting at that line.</li>
  <li><span class="icon">🔍</span><strong>Glue code discovery:</strong></li>
  <li><span class="icon">▶️</span>Cucumber scans all classes in the packages listed in the <code>glue</code> attribute.</li>
  <li><span class="icon">▶️</span>Any method annotated with <code>@Given</code>, <code>@When</code>, <code>@Then</code>, <code>@And</code>, <code>@But</code>, <code>@Before</code>, <code>@After</code>, etc. is registered as a step definition or hook.</li>
  <li><span class="icon">▶️</span>If <code>glue</code> points to a parent package, all sub-packages are also scanned automatically.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Framework</th><th>Runner Annotation</th><th>Base Class</th><th>Parallel Support</th></tr></thead>
  <tbody>
    <tr><td>JUnit 4</td><td><code>@RunWith(Cucumber.class)</code></td><td>None required</td><td>Via Cucumber's built-in parallel plugin</td></tr>
    <tr><td>JUnit 5</td><td><code>@Suite + @SelectPackages</code></td><td>None required</td><td>JUnit 5 parallel config</td></tr>
    <tr><td>TestNG</td><td>Not needed</td><td><code>AbstractTestNGCucumberTests</code></td><td><code>@DataProvider(parallel = true)</code></td></tr>
  </tbody>
</table>
<ul class="ans-list amber">
  <li><span class="icon">⚠️</span><strong>Common mistake</strong> — Placing the Runner class in the wrong package or wrong directory. Maven's Surefire plugin runs classes matching <code>**/*Test.java</code>, <code>**/*Tests.java</code>, or <code>**/*Runner.java</code> by default. Name your class <code>TestRunner</code> or configure the Surefire plugin to include it explicitly.</li>
  <li><span class="icon">⚙️</span><strong>Surefire plugin config</strong> — In <code>pom.xml</code>: <code>&lt;configuration&gt;&lt;includes&gt;&lt;include&gt;**/TestRunner.java&lt;/include&gt;&lt;/includes&gt;&lt;/configuration&gt;</code> to ensure Maven picks it up.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Multiple Runner classes</div><p>You can have multiple Runner classes in the same project — one for smoke tests (<code>SmokeTestRunner</code> with <code>tags = "@smoke"</code>) and one for regression (<code>RegressionTestRunner</code> with <code>tags = "@regression"</code>). This lets you trigger different test suites from different CI pipeline stages without changing feature files or step definitions.</p></div>`
  }
]
