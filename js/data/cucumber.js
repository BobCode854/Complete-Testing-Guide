// ================================================================
// CUCUMBER DATA
// ================================================================
const CUCUMBER_TOPICS = [

  // ── 1. Introduction & BDD ─────────────────────────────────────
  {
    id: 'cucumber-introduction',
    title: 'Cucumber & BDD Introduction',
    section: 'cucumber',
    difficulty: 'easy',
    time: '20 min',
    shortDesc: 'What is Cucumber, what is BDD, why teams use it, and how it bridges the gap between business and automation.',
    content: `
      <div class="topic-section">
        <h2>What is Cucumber?</h2>
        <div class="ans-hero">Cucumber is a <strong>Behavior Driven Development (BDD) testing framework</strong> that allows teams to write test cases in plain English using <strong>Gherkin language</strong> — understandable by developers, testers, business analysts, and product owners.</div>

        <div class="definition-card">
          <div class="definition-term">The Core Problem Cucumber Solves</div>
          <div class="definition-body">
            <strong>Traditional automation:</strong> Tester writes Java code → Developer cannot understand it → Business team cannot validate it → Miscommunication about requirements.<br><br>
            <strong>With Cucumber:</strong> Business Requirement → Feature File (plain English) → Automation Code → Execution. Every stakeholder can read and validate the tests.
          </div>
        </div>

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-file-earmark-text"></i></div>
            <div class="bm-title">Business Readable</div>
            <div class="bm-count">Plain English tests</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-people"></i></div>
            <div class="bm-title">Collaboration</div>
            <div class="bm-count">QA + Dev + BA together</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-journal-text"></i></div>
            <div class="bm-title">Living Documentation</div>
            <div class="bm-count">Feature files = specs</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-arrow-repeat"></i></div>
            <div class="bm-title">Reusable Steps</div>
            <div class="bm-count">Write once, use many</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-globe2"></i></div>
            <div class="bm-title">Multi-Language</div>
            <div class="bm-count">Java, JS, Python, Ruby</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-gear"></i></div>
            <div class="bm-title">CI/CD Ready</div>
            <div class="bm-count">Maven + Jenkins</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>What is BDD?</h2>
        <div class="ans-hero">BDD (Behavior Driven Development) is a software development approach where application behavior is described from the <strong>user's perspective</strong> — before writing any code.</div>

        <img src="images/cucumber/specifications-flow.jpeg" alt="Cucumber Specifications Flow — Feature → Scenario → Step → StepDefinition → Framework → System → Implementation" class="notion-img" />

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Requirement</div>
              <div class="step-desc">Business analyst documents what the system should do: "Customer must be able to login with valid credentials"</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Behavior (Feature File)</div>
              <div class="step-desc">Team writes Gherkin scenarios describing the expected behavior — Given/When/Then format</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Automation Script</div>
              <div class="step-desc">Developer/SDET writes step definitions (Java code) that implement each Gherkin step</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Test Execution</div>
              <div class="step-desc">Runner class executes the feature files — results reported in HTML/JSON format</div>
            </div>
          </div>
        </div>

        <h3>BDD vs Traditional Testing</h3>
        <table class="comparison-table">
          <thead><tr><th>Aspect</th><th>Traditional Testing</th><th>BDD</th></tr></thead>
          <tbody>
            <tr><td>Language</td><td>Technical code (Java, Python)</td><td>Business language (Given/When/Then)</td></tr>
            <tr><td>Artefact</td><td>Test scripts / test cases</td><td>Scenarios in feature files</td></tr>
            <tr><td>Who writes</td><td>Tester only</td><td>QA + Dev + Business Analyst together</td></tr>
            <tr><td>Approach</td><td>Code first, test after</td><td>Behavior described first, code follows</td></tr>
            <tr><td>Documentation</td><td>Separate test doc</td><td>Feature files ARE the documentation</td></tr>
            <tr><td>Business validation</td><td>Hard — business can't read code</td><td>Easy — business reads plain English</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Real World Example — Banking Login</h2>
        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Traditional Selenium Code (hard to read for BA)</h6>
            <code>driver.findElement(By.id("username")).sendKeys("admin");<br>driver.findElement(By.id("password")).sendKeys("Pass@123");<br>driver.findElement(By.id("loginBtn")).click();<br>Assert.assertTrue(driver.getCurrentUrl().contains("dashboard"));</code>
          </div>
          <div class="compare-card green">
            <h6>Cucumber Gherkin (everyone understands)</h6>
            <code>Given customer opens banking application<br>When customer enters valid username and password<br>And clicks login button<br>Then customer should see dashboard</code>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Advantages of Cucumber</h2>
        <ul class="ans-list green">
          <li><span class="icon">✅</span><strong>Business Readability:</strong> Non-technical people can read, write, and validate test scenarios without coding knowledge</li>
          <li><span class="icon">✅</span><strong>Collaboration:</strong> QA, developers, and business analysts all contribute to the same feature files</li>
          <li><span class="icon">✅</span><strong>Living Documentation:</strong> Feature files are always up-to-date documentation of system behavior</li>
          <li><span class="icon">✅</span><strong>Reusable Steps:</strong> One step definition can be reused across dozens of scenarios — write once, use many times</li>
          <li><span class="icon">✅</span><strong>Early defect detection:</strong> Behavior is agreed upon before development starts — misunderstandings caught early</li>
          <li><span class="icon">✅</span><strong>Data-driven testing:</strong> Scenario Outline + Examples table runs the same scenario with multiple datasets</li>
        </ul>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'easy',
        q: "What is BDD and how does Cucumber support it?",
        a: `<div class="ans-hero">BDD (Behavior Driven Development) describes application behavior from the user's perspective in plain English before writing code. Cucumber supports BDD by providing the Gherkin language for writing scenarios that all stakeholders can read.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">BA writes business requirement</div><div class="step-desc">"Customer must be able to login with valid credentials"</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Team writes Gherkin scenario</div><div class="step-desc">Given/When/Then in a .feature file — readable by everyone</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">SDET writes step definitions</div><div class="step-desc">Java methods implementing each Gherkin step using Selenium</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Runner executes, reports generated</div><div class="step-desc">HTML/JSON reports — business team reads results in plain English</div></div></div>
        </div>`
      },
      {
        difficulty: 'easy',
        q: "What is Gherkin language and what are its key keywords?",
        a: `<div class="ans-hero">Gherkin is a plain-text structured language used by Cucumber to write test scenarios. It uses specific keywords to describe behavior in a way both humans and Cucumber can understand.</div>
        <table class="comparison-table">
          <thead><tr><th>Keyword</th><th>Purpose</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Feature</strong></td><td>Describes the feature being tested</td><td>Feature: Customer Login</td></tr>
            <tr><td><strong>Scenario</strong></td><td>One specific test case</td><td>Scenario: Login with valid credentials</td></tr>
            <tr><td><strong>Given</strong></td><td>Precondition / initial state</td><td>Given user is on the login page</td></tr>
            <tr><td><strong>When</strong></td><td>Action performed by the user</td><td>When user enters valid password</td></tr>
            <tr><td><strong>Then</strong></td><td>Expected result / assertion</td><td>Then user should see dashboard</td></tr>
            <tr><td><strong>And / But</strong></td><td>Additional steps in Given/When/Then</td><td>And user clicks Login button</td></tr>
            <tr><td><strong>Background</strong></td><td>Steps that run before every scenario</td><td>Background: Given application is open</td></tr>
            <tr><td><strong>Scenario Outline</strong></td><td>Data-driven scenario template</td><td>Runs once per row in Examples table</td></tr>
            <tr><td><strong>Examples</strong></td><td>Data table for Scenario Outline</td><td>| username | password |</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'easy',
        q: "What is the difference between Scenario and Scenario Outline?",
        a: `<table class="comparison-table">
          <thead><tr><th>Aspect</th><th>Scenario</th><th>Scenario Outline</th></tr></thead>
          <tbody>
            <tr><td>Data</td><td>Fixed values hardcoded in steps</td><td>Dynamic — values from Examples table</td></tr>
            <tr><td>Execution count</td><td>Runs once</td><td>Runs once per row in Examples table</td></tr>
            <tr><td>Use case</td><td>Single unique scenario</td><td>Same flow with different data sets</td></tr>
            <tr><td>Example</td><td>Scenario: Login as admin</td><td>Scenario Outline: Login as &lt;role&gt; with &lt;3 rows&gt;</td></tr>
          </tbody>
        </table>
        <div class="info-panel tip"><div class="panel-title">When to use Scenario Outline</div><p>Login with 5 different user roles, form validation with 10 invalid inputs, search with 6 different keywords — any time the same steps repeat with different data.</p></div>`
      }
    ]
  },

  // ── 2. Architecture ───────────────────────────────────────────
  {
    id: 'cucumber-architecture',
    title: 'Cucumber Architecture',
    section: 'cucumber',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'How Cucumber works internally — Feature File → Gherkin Parser → Step Definitions → Selenium → Reports, and Maven project structure.',
    content: `
      <div class="topic-section">
        <h2>Cucumber Execution Flow</h2>
        <div class="ans-hero">Cucumber parses feature files, matches each Gherkin step to a Java step definition method, executes the automation code (Selenium/API), and generates reports.</div>

        <img src="images/cucumber/framework-architecture.jpeg" alt="Cucumber Test Automation Framework Architecture — Feature Files/Gherkin → Step Definitions → POM / Test Runner / Utilities → Web Browser / Mobile / API" class="notion-img" />

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Feature File (.feature)</div>
              <div class="step-desc">Written in Gherkin. Contains Feature description, Scenarios with Given/When/Then steps. This is the entry point of every Cucumber execution.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Gherkin Parser</div>
              <div class="step-desc">Cucumber reads and parses the .feature file. Identifies each step (Given/When/Then/And) as a separate command to be executed.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Step Definitions (Java)</div>
              <div class="step-desc">Cucumber matches each Gherkin step to a Java method using @Given/@When/@Then annotations. If no match is found — "undefined step" error.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Automation Code (Selenium / API)</div>
              <div class="step-desc">Step definition calls Page Object methods → Selenium WebDriver drives the browser. For API tests, step definitions call Rest Assured.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-content">
              <div class="step-title">Reports</div>
              <div class="step-desc">Cucumber generates HTML/JSON reports. Plugins like Extent Reports and Allure provide rich visual dashboards with screenshots and step logs.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Building a BDD Framework — Cucumber + TestNG + Java</h2>
        <img src="images/cucumber/bdd-testng-java.jpeg" alt="Building a BDD Test Framework Using Cucumber, TestNG, and Java — Feature File → Step Definitions → Java → TestNG Test Runner" class="notion-img" />

        <img src="images/cucumber/bdd-framework-maven.jpeg" alt="Cucumber BDD Framework with Maven — src/main/java (Selenium+Utils+Hooks), src/test/java (Pages+StepDefs+Runner), src/test/resources (Features+Config)" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Maven Project Structure</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Enterprise Cucumber Framework Structure</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>CucumberBDDFramework/
├── src/
│   ├── main/java/
│   │   ├── pages/
│   │   │   ├── LoginPage.java
│   │   │   ├── DashboardPage.java
│   │   │   └── TransferPage.java
│   │   └── utilities/
│   │       ├── DriverManager.java
│   │       └── ExcelReader.java
│   │
│   └── test/
│       ├── java/
│       │   ├── stepDefinitions/
│       │   │   ├── LoginSteps.java
│       │   │   └── TransferSteps.java
│       │   ├── hooks/
│       │   │   └── Hooks.java
│       │   └── runners/
│       │       └── TestRunner.java
│       │
│       └── resources/
│           ├── features/
│           │   ├── Login.feature
│           │   ├── Transfer.feature
│           │   └── Beneficiary.feature
│           └── config.properties
│
├── pom.xml
└── testng.xml</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Key Cucumber Components</h2>
        <table class="comparison-table">
          <thead><tr><th>Component</th><th>Role</th><th>File / Annotation</th></tr></thead>
          <tbody>
            <tr><td><strong>Feature File</strong></td><td>Business scenarios in plain English</td><td>Login.feature (.feature extension)</td></tr>
            <tr><td><strong>Gherkin Language</strong></td><td>Given/When/Then syntax for scenarios</td><td>Inside .feature files</td></tr>
            <tr><td><strong>Step Definitions</strong></td><td>Java methods implementing Gherkin steps</td><td>@Given, @When, @Then annotations</td></tr>
            <tr><td><strong>Runner Class</strong></td><td>Connects features + step defs, sets options</td><td>@CucumberOptions annotation</td></tr>
            <tr><td><strong>Hooks</strong></td><td>Setup/teardown code per scenario</td><td>@Before, @After annotations</td></tr>
            <tr><td><strong>Page Objects</strong></td><td>Encapsulate UI element interactions</td><td>LoginPage.java, DashboardPage.java</td></tr>
            <tr><td><strong>Tags</strong></td><td>Filter which scenarios to run</td><td>@smoke, @regression, @login</td></tr>
          </tbody>
        </table>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — pom.xml Key Dependencies</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;dependencies&gt;
  &lt;!-- Cucumber Java --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;io.cucumber&lt;/groupId&gt;
    &lt;artifactId&gt;cucumber-java&lt;/artifactId&gt;
    &lt;version&gt;7.15.0&lt;/version&gt;
  &lt;/dependency&gt;

  &lt;!-- Cucumber TestNG --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;io.cucumber&lt;/groupId&gt;
    &lt;artifactId&gt;cucumber-testng&lt;/artifactId&gt;
    &lt;version&gt;7.15.0&lt;/version&gt;
  &lt;/dependency&gt;

  &lt;!-- Selenium --&gt;
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
&lt;/dependencies&gt;</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "Explain Cucumber's internal execution flow from feature file to report.",
        a: `<div class="ans-hero">Cucumber reads the .feature file, parses each Gherkin step, matches it to a Java step definition method, executes the Selenium automation, and generates reports.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Feature File parsed</div><div class="step-desc">Gherkin Parser reads Login.feature, identifies each Given/When/Then step</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Step matched to Java method</div><div class="step-desc">@Given("user is on login page") → finds matching method in LoginSteps.java. Unmatched step = "undefined" error.</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Page Object method called</div><div class="step-desc">Step definition calls loginPage.enterUsername(user) → Selenium WebDriver types into the field</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Result captured → Report</div><div class="step-desc">Pass/Fail for each step → HTML report with screenshots on failure</div></div></div>
        </div>`
      },
      {
        difficulty: 'medium',
        q: "What is the role of the Runner Class in Cucumber?",
        a: `<div class="ans-hero">The Runner Class is the entry point for executing Cucumber tests. It connects feature files to step definitions and configures execution options via @CucumberOptions.</div>
        <div class="code-block"><code><span class="kw">@CucumberOptions</span>(
  features = <span class="st">"src/test/resources/features"</span>,
  glue     = <span class="st">"com.stepdefinitions"</span>,   <span class="cm">// step defs package</span>
  tags     = <span class="st">"@smoke"</span>,               <span class="cm">// filter which scenarios</span>
  plugin   = { <span class="st">"html:target/report.html"</span>, <span class="st">"json:target/cucumber.json"</span> }
)
<span class="kw">public class</span> <span class="cl">TestRunner</span> <span class="kw">extends</span> <span class="cl">AbstractTestNGCucumberTests</span> { }</code></div>
        <div class="info-panel tip"><div class="panel-title">Key options</div><p><code>features</code> — where .feature files are | <code>glue</code> — where step definitions are | <code>tags</code> — which scenarios to run | <code>plugin</code> — report formats</p></div>`
      }
    ]
  },

  // ── 3. Feature Files & Gherkin ────────────────────────────────
  {
    id: 'cucumber-feature-files',
    title: 'Feature Files & Gherkin',
    section: 'cucumber',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'Writing feature files, all Gherkin keywords, Background, Scenario Outline with Examples, Data Tables, and tags.',
    content: `
      <div class="topic-section">
        <h2>Feature File — Complete Banking Example</h2>
        <div class="ans-hero">A feature file describes the behavior of one application feature using Gherkin. Every scenario is a test case — business-readable, self-documenting, and executable.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">GHERKIN — Login.feature</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Feature: Customer Login
  As a registered bank customer
  I want to login to the banking portal
  So that I can access my account

  Background:
    Given customer opens the banking application
    And customer navigates to the login page

  @smoke @regression
  Scenario: Successful login with valid credentials
    When customer enters username "karan@bankapp.com"
    And customer enters password "Secure@1234"
    And customer clicks the Login button
    Then customer should be redirected to the dashboard
    And welcome message should display "Welcome, Karan"

  @regression
  Scenario: Login fails with wrong password
    When customer enters username "karan@bankapp.com"
    And customer enters password "WrongPass"
    And customer clicks the Login button
    Then error message "Invalid username or password" should be displayed

  @regression
  Scenario: Account locked after 3 failed attempts
    When customer enters wrong password 3 times
    Then account should be locked
    And message "Your account has been locked" should appear

  @regression
  Scenario Outline: Login with multiple user types
    When customer enters username "&lt;username&gt;"
    And customer enters password "&lt;password&gt;"
    And customer clicks the Login button
    Then customer should see "&lt;expectedMessage&gt;"

    Examples:
      | username              | password      | expectedMessage         |
      | karan@bankapp.com     | Secure@1234   | Welcome, Karan          |
      | manager@bankapp.com   | Mgr@1234      | Welcome, Manager        |
      | invalid@bankapp.com   | WrongPass     | Invalid credentials     |
      |                       | Secure@1234   | Username is required    |</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Background Keyword</h2>
        <div class="ans-hero">Background contains steps that run before EVERY scenario in the feature file. Use it to avoid repeating the same precondition steps across all scenarios.</div>

        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Without Background (repetitive)</h6>
            <code>Scenario: Test A<br>Given user opens app<br>When user does X<br><br>Scenario: Test B<br>Given user opens app<br>When user does Y</code><br><br>
            "Given user opens app" repeated in every scenario.
          </div>
          <div class="compare-card green">
            <h6>With Background (clean)</h6>
            <code>Background:<br>Given user opens app<br><br>Scenario: Test A<br>When user does X<br><br>Scenario: Test B<br>When user does Y</code><br><br>
            Background runs before each scenario — no repetition.
          </div>
        </div>

        <div class="info-panel warning">
          <div class="panel-title">Background vs Hooks</div>
          <p><strong>Background:</strong> Gherkin steps that appear in the report — visible, business-readable preconditions.<br>
          <strong>@Before Hook:</strong> Java code that runs before each scenario — invisible in the Gherkin report. Use hooks for WebDriver setup, not for business steps.</p>
        </div>
      </div>

      <div class="topic-section">
        <h2>Scenario Outline — Data-Driven Testing</h2>
        <div class="ans-hero">Scenario Outline is a template with placeholders (&lt;param&gt;). The Examples table provides data rows. Cucumber runs the scenario once per row automatically.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">GHERKIN — Fund Transfer Data-Driven</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Scenario Outline: Fund transfer with different amounts and types
  Given customer is logged in as "&lt;user&gt;"
  When customer initiates a "&lt;transferType&gt;" transfer of "&lt;amount&gt;" to "&lt;account&gt;"
  Then transfer should "&lt;result&gt;"

  Examples:
    | user          | transferType | amount  | account    | result              |
    | karan         | NEFT         | 5000    | 9876543210 | succeed             |
    | karan         | RTGS         | 200000  | 9876543210 | succeed             |
    | karan         | NEFT         | 0       | 9876543210 | fail with error     |
    | karan         | NEFT         | 5000    |            | fail - no account   |
    | karan         | NEFT         | 9999999 | 9876543210 | fail - insufficient |</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Data Tables</h2>
        <div class="ans-hero">Data Tables pass structured tabular data to a single step — unlike Scenario Outline (which runs the scenario multiple times), a Data Table passes all rows to one step method at once.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">GHERKIN — Data Table Example</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Scenario: Add multiple beneficiaries at once
  Given customer is on the beneficiary management page
  When customer adds the following beneficiaries:
    | name          | account    | bank        | ifsc         |
    | Rahul Sharma  | 1234567890 | HDFC Bank   | HDFC0001234  |
    | Priya Singh   | 9876543210 | ICICI Bank  | ICIC0009876  |
    | Amit Kumar    | 5555555555 | SBI         | SBIN0005555  |
  Then all 3 beneficiaries should appear in the list</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Reading Data Table in Step Definition</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">@When("customer adds the following beneficiaries:")
public void addBeneficiaries(DataTable dataTable) {
    List&lt;Map&lt;String, String&gt;&gt; rows = dataTable.asMaps(String.class, String.class);
    for (Map&lt;String, String&gt; row : rows) {
        beneficiaryPage.addBeneficiary(
            row.get("name"),
            row.get("account"),
            row.get("bank"),
            row.get("ifsc")
        );
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Tags — Organising &amp; Filtering Scenarios</h2>
        <div class="ans-hero">Tags are labels placed above Feature, Scenario, or Scenario Outline. They let you run specific subsets of tests — smoke only, regression only, or by feature area.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">GHERKIN — Tags Usage</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>@smoke @critical
Feature: Customer Login

  @smoke
  Scenario: Valid login

  @regression @login
  Scenario: Invalid password shows error

  @regression @wip
  Scenario: Password reset flow</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Running by Tag in TestRunner</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">// Run only smoke tests
@CucumberOptions(tags = "@smoke")

// Run smoke OR regression
@CucumberOptions(tags = "@smoke or @regression")

// Run regression but NOT work-in-progress
@CucumberOptions(tags = "@regression and not @wip")

// Run via Maven command
// mvn test -Dcucumber.filter.tags="@smoke"</code></pre>
        </div>

        <h3>Common Tag Conventions</h3>
        <table class="comparison-table">
          <thead><tr><th>Tag</th><th>When to run</th></tr></thead>
          <tbody>
            <tr><td><code>@smoke</code></td><td>Every deployment — quick sanity (10–15 min)</td></tr>
            <tr><td><code>@regression</code></td><td>Full suite — nightly or before release</td></tr>
            <tr><td><code>@sanity</code></td><td>After a hotfix — specific area only</td></tr>
            <tr><td><code>@wip</code></td><td>Work in progress — skip in CI</td></tr>
            <tr><td><code>@api</code></td><td>API-only tests without browser</td></tr>
            <tr><td><code>@banking</code></td><td>Banking module scenarios only</td></tr>
          </tbody>
        </table>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What is the Background keyword in Cucumber and how is it different from @Before hook?",
        a: `<div class="ans-hero">Background defines Gherkin steps that run before every scenario in a feature file — visible in reports as real steps. @Before hook is Java code that runs before each scenario but is invisible in the Gherkin report.</div>
        <table class="comparison-table">
          <thead><tr><th>Aspect</th><th>Background</th><th>@Before Hook</th></tr></thead>
          <tbody>
            <tr><td>Where</td><td>Inside the .feature file</td><td>Inside Hooks.java</td></tr>
            <tr><td>Language</td><td>Gherkin (plain English)</td><td>Java code</td></tr>
            <tr><td>Visible in report</td><td>Yes — shows as test steps</td><td>No — runs silently</td></tr>
            <tr><td>Use for</td><td>Business preconditions (navigate to page)</td><td>Technical setup (open browser, init driver)</td></tr>
            <tr><td>Tag-specific</td><td>No — runs for all scenarios in the file</td><td>Yes — @Before("@smoke") runs only for @smoke</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'medium',
        q: "What is the difference between Data Table and Scenario Outline?",
        a: `<div class="ans-hero">Scenario Outline runs the same scenario multiple times (once per row). Data Table passes all rows to a single step method as a table — the scenario runs once.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Scenario Outline</h6>Runs 3 times for 3 rows.<br>Each row is a separate test execution.<br>Use when the SCENARIO repeats with different data.</div>
          <div class="compare-card green"><h6>Data Table</h6>Runs ONCE. The step receives all rows as a List&lt;Map&gt;.<br>Use when a SINGLE STEP needs multiple data rows (e.g. add 5 items to cart).</div>
        </div>`
      },
      {
        difficulty: 'easy',
        q: "How do you run only specific scenarios using Tags in Cucumber?",
        a: `<div class="ans-hero">Add tag annotations above scenarios in .feature files, then filter in the Runner class via @CucumberOptions(tags) or via Maven command line.</div>
        <div class="code-block"><code><span class="cm">// In feature file:</span>
<span class="kw">@smoke</span>
<span class="fn">Scenario:</span> Valid login

<span class="cm">// In TestRunner.java:</span>
<span class="kw">@CucumberOptions</span>(tags = <span class="st">"@smoke"</span>)

<span class="cm">// Via Maven (CI/CD):</span>
mvn test -Dcucumber.filter.tags=<span class="st">"@smoke"</span>

<span class="cm">// Combined logic:</span>
tags = <span class="st">"@regression and not @wip"</span></code></div>`
      }
    ]
  },

  // ── 4. Step Definitions & Hooks ───────────────────────────────
  {
    id: 'cucumber-step-defs',
    title: 'Step Definitions & Hooks',
    section: 'cucumber',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'Writing Java step definitions, Cucumber expressions, @Before/@After hooks, screenshot on failure, and the Runner class.',
    content: `
      <div class="topic-section">
        <h2>Step Definitions</h2>
        <div class="ans-hero">Step Definitions are Java methods that implement Gherkin steps. Cucumber matches each step text to a method using regex or Cucumber expressions and calls it during execution.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — LoginSteps.java (Complete)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">package stepDefinitions;

import io.cucumber.java.en.*;
import org.testng.Assert;
import pages.LoginPage;
import pages.DashboardPage;
import utilities.DriverManager;

public class LoginSteps {

    LoginPage     loginPage     = new LoginPage(DriverManager.getDriver());
    DashboardPage dashboardPage = new DashboardPage(DriverManager.getDriver());

    @Given("customer opens the banking application")
    public void openBankingApp() {
        DriverManager.getDriver().get("https://bankapp.com");
    }

    @Given("customer navigates to the login page")
    public void navigateToLogin() {
        DriverManager.getDriver().get("https://bankapp.com/login");
    }

    // {string} captures text in double quotes from the Gherkin step
    @When("customer enters username {string}")
    public void enterUsername(String username) {
        loginPage.enterUsername(username);
    }

    @When("customer enters password {string}")
    public void enterPassword(String password) {
        loginPage.enterPassword(password);
    }

    @When("customer clicks the Login button")
    public void clickLogin() {
        loginPage.clickLoginButton();
    }

    @Then("customer should be redirected to the dashboard")
    public void verifyDashboard() {
        Assert.assertTrue(
            DriverManager.getDriver().getCurrentUrl().contains("dashboard"),
            "Expected URL to contain 'dashboard'"
        );
    }

    @Then("welcome message should display {string}")
    public void verifyWelcomeMessage(String expectedMessage) {
        Assert.assertEquals(dashboardPage.getWelcomeMessage(), expectedMessage);
    }

    @Then("error message {string} should be displayed")
    public void verifyErrorMessage(String expected) {
        Assert.assertEquals(loginPage.getErrorMessage(), expected);
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Cucumber Expressions — Parameter Types</h2>
        <div class="ans-hero">Cucumber expressions capture dynamic values from Gherkin steps and pass them as method parameters. Use {string}, {int}, {double}, or {word} depending on the data type.</div>

        <table class="comparison-table">
          <thead><tr><th>Expression</th><th>Matches</th><th>Java Type</th><th>Example Gherkin</th></tr></thead>
          <tbody>
            <tr><td><code>{string}</code></td><td>Text in double quotes</td><td>String</td><td>enters username "admin"</td></tr>
            <tr><td><code>{int}</code></td><td>Integer number</td><td>int</td><td>enters amount 5000</td></tr>
            <tr><td><code>{double}</code></td><td>Decimal number</td><td>double</td><td>enters rate 4.5</td></tr>
            <tr><td><code>{word}</code></td><td>Single word (no spaces)</td><td>String</td><td>selects transfer NEFT</td></tr>
            <tr><td><code>(.*)</code></td><td>Any text (regex)</td><td>String</td><td>sees any message</td></tr>
          </tbody>
        </table>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Expression Examples</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">// Gherkin: When customer transfers 5000 to account "9876543210"
@When("customer transfers {int} to account {string}")
public void transfer(int amount, String account) {
    transferPage.initiateTransfer(amount, account);
}

// Gherkin: When customer enters wrong password 3 times
@When("customer enters wrong password {int} times")
public void enterWrongPassword(int times) {
    for (int i = 0; i &lt; times; i++) {
        loginPage.enterPassword("WrongPass" + i);
        loginPage.clickLoginButton();
    }
}

// Gherkin: Then transfer amount should be 4975.50
@Then("transfer amount should be {double}")
public void verifyAmount(double amount) {
    Assert.assertEquals(transferPage.getTransferAmount(), amount, 0.01);
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Hooks — Setup &amp; Teardown</h2>
        <div class="ans-hero">Hooks are Java methods that run automatically before or after each scenario. @Before opens the browser and initialises objects; @After takes screenshots on failure and closes the browser.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Hooks.java (Enterprise)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">package hooks;

import io.cucumber.java.Before;
import io.cucumber.java.After;
import io.cucumber.java.BeforeAll;
import io.cucumber.java.AfterAll;
import io.cucumber.java.Scenario;
import org.openqa.selenium.*;
import utilities.DriverManager;

public class Hooks {

    // Runs ONCE before all scenarios
    @BeforeAll
    public static void globalSetup() {
        System.out.println("=== Test Suite Starting ===");
    }

    // Runs before EACH scenario
    @Before
    public void setUp(Scenario scenario) {
        System.out.println("Starting: " + scenario.getName());
        DriverManager.initDriver("chrome");
        DriverManager.getDriver().manage().window().maximize();
    }

    // Runs before EACH @smoke tagged scenario only
    @Before("@smoke")
    public void smokeSetup() {
        System.out.println("Smoke test setup — extra logging enabled");
    }

    // Runs after EACH scenario
    @After
    public void tearDown(Scenario scenario) {
        // Capture screenshot on failure
        if (scenario.isFailed()) {
            TakesScreenshot ts = (TakesScreenshot) DriverManager.getDriver();
            byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot, "image/png", "Failure Screenshot");
        }
        DriverManager.quitDriver();
        System.out.println("Finished: " + scenario.getName() + " — " + scenario.getStatus());
    }

    // Runs ONCE after all scenarios
    @AfterAll
    public static void globalTeardown() {
        System.out.println("=== Test Suite Complete ===");
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Runner Class</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — TestRunner.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">package runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;

@CucumberOptions(
    features   = "src/test/resources/features",
    glue       = {"stepDefinitions", "hooks"},
    tags       = "@smoke",
    plugin     = {
        "pretty",
        "html:target/cucumber-report.html",
        "json:target/cucumber.json",
        "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"
    },
    monochrome = true,
    dryRun     = false    // true = validates step mappings without executing
)
public class TestRunner extends AbstractTestNGCucumberTests {

    // Enable parallel execution of scenarios
    @Override
    @DataProvider(parallel = true)
    public Object[][] scenarios() {
        return super.scenarios();
    }
}</code></pre>
        </div>

        <div class="definition-card">
          <div class="definition-term">dryRun = true</div>
          <div class="definition-body">
            When dryRun = true, Cucumber checks that every Gherkin step has a matching step definition — WITHOUT actually running any tests. Use this after writing a new feature file to quickly verify all steps are mapped before running the full suite.
          </div>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What are Cucumber Hooks and how are they different from TestNG @BeforeMethod?",
        a: `<table class="comparison-table">
          <thead><tr><th>Aspect</th><th>Cucumber @Before/@After</th><th>TestNG @BeforeMethod</th></tr></thead>
          <tbody>
            <tr><td>Package</td><td>io.cucumber.java</td><td>org.testng.annotations</td></tr>
            <tr><td>Runs before</td><td>Each Scenario</td><td>Each @Test method</td></tr>
            <tr><td>Tag-specific</td><td>Yes — @Before("@smoke") runs only for @smoke scenarios</td><td>No — runs for all methods</td></tr>
            <tr><td>Scenario access</td><td>Has Scenario object: name, tags, isFailed(), attach()</td><td>Has ITestResult</td></tr>
            <tr><td>Framework</td><td>BDD / Cucumber</td><td>TestNG</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'medium',
        q: "How do you capture a screenshot on test failure in Cucumber?",
        a: `<div class="ans-hero">In the @After hook, check scenario.isFailed() — if true, take a screenshot using TakesScreenshot and attach it to the scenario report with scenario.attach().</div>
        <div class="code-block"><code><span class="kw">@After</span>
<span class="kw">public void</span> <span class="fn">tearDown</span>(<span class="cl">Scenario</span> scenario) {
  <span class="kw">if</span> (scenario.<span class="fn">isFailed</span>()) {
    <span class="cl">TakesScreenshot</span> ts = (<span class="cl">TakesScreenshot</span>) driver;
    <span class="kw">byte</span>[] img = ts.<span class="fn">getScreenshotAs</span>(<span class="cl">OutputType</span>.BYTES);
    scenario.<span class="fn">attach</span>(img, <span class="st">"image/png"</span>, <span class="st">"Failure Screenshot"</span>);
  }
  driver.<span class="fn">quit</span>();
}</code></div>
        <div class="info-panel tip"><div class="panel-title">scenario.attach()</div><p>The attached screenshot appears directly in the Cucumber HTML report next to the failed step — no extra configuration needed.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "What is dryRun in Cucumber and when do you use it?",
        a: `<div class="ans-hero">dryRun = true validates that every Gherkin step has a matching step definition — without actually executing any tests. Use it after writing new feature files to check for undefined steps.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>dryRun = false (default)</h6>Executes all tests normally. Undefined step = test fails at runtime after partial execution.</div>
          <div class="compare-card green"><h6>dryRun = true</h6>Just checks step mappings. "Undefined step: customer clicks Login button" reported instantly — no browser opened, no time wasted.</div>
        </div>`
      }
    ]
  },

  // ── 5. Page Object Model ──────────────────────────────────────
  {
    id: 'cucumber-pom',
    title: 'Page Object Model with Cucumber',
    section: 'cucumber',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'Combining Cucumber step definitions with Page Object Model pattern for a maintainable enterprise BDD framework.',
    content: `
      <div class="topic-section">
        <h2>Why POM with Cucumber?</h2>
        <div class="ans-hero">Step definitions should be thin — they call Page Object methods. All Selenium locators and interactions live in Page Objects. This keeps step definitions readable and makes maintenance easy.</div>

        <img src="images/cucumber/pom-cucumber-testng.jpeg" alt="Page Object Model with Cucumber, Selenium, and TestNG — Feature File (Gherkin) → Step Definition → Test Runner → Cucumber Report / TestNG Report" class="notion-img" />

        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Without POM — Selenium in step definitions</h6>
            Step definition directly uses: <code>driver.findElement(By.id("username")).sendKeys(user)</code><br><br>
            When the locator changes, you must find and update every step definition that uses it. 50 step files = 50 places to fix.
          </div>
          <div class="compare-card green">
            <h6>With POM — thin step definitions</h6>
            Step definition calls: <code>loginPage.enterUsername(user)</code><br><br>
            Locator lives in LoginPage.java only. Change it once → all step definitions that call it are automatically fixed.
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Complete POM Implementation</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — LoginPage.java (Page Object)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">package pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    private WebDriver driver;

    @FindBy(id = "username")
    private WebElement usernameField;

    @FindBy(id = "password")
    private WebElement passwordField;

    @FindBy(id = "loginBtn")
    private WebElement loginButton;

    @FindBy(css = ".error-message")
    private WebElement errorMessage;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void enterUsername(String username) {
        usernameField.clear();
        usernameField.sendKeys(username);
    }

    public void enterPassword(String password) {
        passwordField.clear();
        passwordField.sendKeys(password);
    }

    public void clickLoginButton() {
        loginButton.click();
    }

    public String getErrorMessage() {
        return errorMessage.getText();
    }
}</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — TransferPage.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">package pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.*;

public class TransferPage {

    private WebDriver driver;

    @FindBy(id = "transferType")
    private WebElement transferTypeDropdown;

    @FindBy(id = "beneficiaryAccount")
    private WebElement beneficiaryAccountField;

    @FindBy(id = "amount")
    private WebElement amountField;

    @FindBy(id = "remarks")
    private WebElement remarksField;

    @FindBy(id = "proceedBtn")
    private WebElement proceedButton;

    @FindBy(css = ".success-message")
    private WebElement successMessage;

    public TransferPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void selectTransferType(String type) {
        new Select(transferTypeDropdown).selectByVisibleText(type);
    }

    public void enterBeneficiaryAccount(String account) {
        beneficiaryAccountField.sendKeys(account);
    }

    public void enterAmount(String amount) {
        amountField.clear();
        amountField.sendKeys(amount);
    }

    public void clickProceed() {
        proceedButton.click();
    }

    public boolean isTransferSuccessful() {
        return successMessage.isDisplayed();
    }
}</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — TransferSteps.java (Thin Step Definitions)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">package stepDefinitions;

import io.cucumber.java.en.*;
import org.testng.Assert;
import pages.TransferPage;
import utilities.DriverManager;

public class TransferSteps {

    TransferPage transferPage = new TransferPage(DriverManager.getDriver());

    @Given("customer is logged in as {string}")
    public void loginAs(String user) {
        // reuse login page object — don't repeat login code
        new LoginSteps().loginAs(user);
    }

    @When("customer initiates a {string} transfer of {string} to {string}")
    public void initiateTransfer(String type, String amount, String account) {
        transferPage.selectTransferType(type);
        transferPage.enterBeneficiaryAccount(account);
        transferPage.enterAmount(amount);
        transferPage.clickProceed();
    }

    @Then("transfer should succeed")
    public void verifyTransferSuccess() {
        Assert.assertTrue(transferPage.isTransferSuccessful(),
            "Transfer success message not displayed");
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>DriverManager — Thread-Safe WebDriver</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — DriverManager.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverManager {

    // ThreadLocal ensures each parallel scenario gets its own driver
    private static ThreadLocal&lt;WebDriver&gt; driverThread = new ThreadLocal&lt;&gt;();

    public static void initDriver(String browser) {
        WebDriver driver;
        switch (browser.toLowerCase()) {
            case "firefox": driver = new FirefoxDriver(); break;
            default:        driver = new ChromeDriver();  break;
        }
        driver.manage().window().maximize();
        driverThread.set(driver);
    }

    public static WebDriver getDriver() {
        return driverThread.get();
    }

    public static void quitDriver() {
        if (driverThread.get() != null) {
            driverThread.get().quit();
            driverThread.remove();
        }
    }
}</code></pre>
        </div>
        <div class="info-panel tip">
          <div class="panel-title">Why ThreadLocal?</div>
          <p>When tests run in parallel, multiple scenarios run simultaneously in different threads. ThreadLocal&lt;WebDriver&gt; gives each thread its own driver instance — they don't share or interfere with each other.</p>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "How do you implement Page Object Model with Cucumber + Selenium?",
        a: `<div class="ans-hero">Create Page Object classes (LoginPage.java, DashboardPage.java) that encapsulate locators and actions. Step definition methods call Page Object methods — never use Selenium directly in step definitions.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Feature File</div><div class="step-desc">When customer enters username "karan@bankapp.com"</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Step Definition (thin)</div><div class="step-desc">@When("customer enters username {string}") public void enterUser(String u) { loginPage.enterUsername(u); }</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Page Object</div><div class="step-desc">LoginPage.enterUsername() → usernameField.clear(); usernameField.sendKeys(username);</div></div></div>
        </div>`
      },
      {
        difficulty: 'hard',
        q: "Why use ThreadLocal<WebDriver> in Cucumber parallel execution?",
        a: `<div class="ans-hero">In parallel execution, multiple scenarios run simultaneously in different threads. Without ThreadLocal, all threads share the same WebDriver instance — causing race conditions, cross-contamination, and random failures.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Static WebDriver (broken in parallel)</h6>Thread 1 opens Chrome for login test → Thread 2 overwrites with Firefox for transfer test → Thread 1 now drives Firefox → crashes.</div>
          <div class="compare-card green"><h6>ThreadLocal WebDriver (safe)</h6>Thread 1 gets its own Chrome instance. Thread 2 gets its own Firefox instance. They never interfere. Each scenario is completely isolated.</div>
        </div>`
      }
    ]
  },

  // ── 6. Parallel, Reports & CI/CD ─────────────────────────────
  {
    id: 'cucumber-advanced',
    title: 'Parallel Execution, Reports & CI/CD',
    section: 'cucumber',
    difficulty: 'hard',
    time: '30 min',
    shortDesc: 'Running Cucumber tests in parallel with TestNG, generating Extent/Allure reports, API testing with Rest Assured, and Jenkins integration.',
    content: `
      <div class="topic-section">
        <h2>Parallel Execution</h2>
        <div class="ans-hero">Cucumber + TestNG supports parallel scenario execution. Enable it in the Runner class with @DataProvider(parallel = true) and configure thread count in testng.xml.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — TestRunner for Parallel Execution</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">@CucumberOptions(
    features = "src/test/resources/features",
    glue     = {"stepDefinitions", "hooks"},
    plugin   = { "html:target/report.html", "json:target/cucumber.json" }
)
public class TestRunner extends AbstractTestNGCucumberTests {

    @Override
    @DataProvider(parallel = true)    // enables parallel scenario execution
    public Object[][] scenarios() {
        return super.scenarios();
    }
}</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — testng.xml for Thread Count</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;suite name="BankingRegressionSuite" parallel="tests" thread-count="4"&gt;
  &lt;test name="BankingTests"&gt;
    &lt;classes&gt;
      &lt;class name="runners.TestRunner"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;</code></pre>
        </div>

        <table class="comparison-table">
          <thead><tr><th>Mode</th><th>Setting</th><th>What runs in parallel</th></tr></thead>
          <tbody>
            <tr><td>Scenario-level parallel</td><td>@DataProvider(parallel=true)</td><td>Individual scenarios across all features</td></tr>
            <tr><td>Feature-level parallel</td><td>parallel="tests" in testng.xml</td><td>Each feature file runs in its own thread</td></tr>
            <tr><td>Maven parallel</td><td>maven-surefire-plugin forkCount=4</td><td>JVM-level forking for CI</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Reports</h2>
        <div class="ans-hero">Cucumber generates default HTML/JSON reports. Enterprise teams use Extent Reports or Allure Reports for rich visual dashboards with charts, screenshots, and step-level details.</div>

        <table class="comparison-table">
          <thead><tr><th>Report Type</th><th>Plugin</th><th>Features</th></tr></thead>
          <tbody>
            <tr><td><strong>Cucumber HTML</strong></td><td>html:target/report.html</td><td>Basic pass/fail, step details, embedded screenshots</td></tr>
            <tr><td><strong>JSON Report</strong></td><td>json:target/cucumber.json</td><td>Machine-readable — used by Jenkins/CI to parse results</td></tr>
            <tr><td><strong>Extent Reports</strong></td><td>ExtentCucumberAdapter</td><td>Rich dashboard, pie charts, scenario timeline, screenshots</td></tr>
            <tr><td><strong>Allure Reports</strong></td><td>allure-cucumber7-jvm</td><td>Beautiful interactive reports, trend graphs, category view</td></tr>
          </tbody>
        </table>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Attach Screenshot to Report</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">@After
public void tearDown(Scenario scenario) {
    if (scenario.isFailed()) {
        // Capture screenshot and attach to Cucumber report
        byte[] screenshot = ((TakesScreenshot) DriverManager.getDriver())
            .getScreenshotAs(OutputType.BYTES);
        scenario.attach(screenshot, "image/png", "failure-screenshot");

        // Optionally save to file for Extent/Allure
        String path = "screenshots/" + scenario.getName() + ".png";
        FileUtils.writeByteArrayToFile(new File(path), screenshot);
    }
    DriverManager.quitDriver();
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>API Testing with Cucumber + Rest Assured</h2>
        <div class="ans-hero">Cucumber + Rest Assured enables BDD-style API testing — scenarios describe API behavior in Given/When/Then, step definitions use Rest Assured to send HTTP requests and validate responses.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">GHERKIN — api-transfer.feature</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>@api
Feature: Fund Transfer API

  Scenario: Successful fund transfer via API
    Given the API base URL is "https://bankapp.com/api"
    And authentication token is available
    When customer sends POST request to "/transfer" with:
      | fromAccount | 1234567890 |
      | toAccount   | 9876543210 |
      | amount      | 5000       |
      | type        | NEFT       |
    Then response status code should be 200
    And response body should contain "SUCCESS"
    And reference number should be returned</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — ApiTransferSteps.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ApiTransferSteps {

    private Response response;

    @Given("the API base URL is {string}")
    public void setBaseUrl(String url) {
        RestAssured.baseURI = url;
    }

    @When("customer sends POST request to {string} with:")
    public void sendPostRequest(String endpoint, DataTable data) {
        Map&lt;String, String&gt; body = data.asMap(String.class, String.class);
        response = given()
            .header("Authorization", "Bearer " + getAuthToken())
            .contentType("application/json")
            .body(body)
            .when()
            .post(endpoint);
    }

    @Then("response status code should be {int}")
    public void verifyStatusCode(int expected) {
        Assert.assertEquals(response.getStatusCode(), expected);
    }

    @Then("response body should contain {string}")
    public void verifyResponseBody(String expected) {
        Assert.assertTrue(response.getBody().asString().contains(expected));
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>CI/CD Integration with Jenkins</h2>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Code commit to Git</div><div class="step-desc">Developer pushes code → GitHub webhook triggers Jenkins build automatically</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Jenkins runs Maven</div><div class="step-desc"><code>mvn test -Dcucumber.filter.tags="@smoke"</code> — smoke tests run on every push; full regression nightly</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Cucumber JSON report generated</div><div class="step-desc">target/cucumber.json → Jenkins Cucumber Reports plugin parses it → builds pass/fail dashboard</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Email / Slack notification</div><div class="step-desc">Build result (pass/fail + test count + link to report) sent to team on completion</div></div></div>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">GROOVY — Jenkinsfile (Declarative Pipeline)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps { git 'https://github.com/org/banking-automation.git' }
        }
        stage('Build') {
            steps { sh 'mvn clean compile' }
        }
        stage('Smoke Tests') {
            steps {
                sh 'mvn test -Dcucumber.filter.tags="@smoke"'
            }
        }
        stage('Regression Tests') {
            when { branch 'main' }
            steps {
                sh 'mvn test -Dcucumber.filter.tags="@regression"'
            }
        }
    }
    post {
        always {
            cucumber fileIncludePattern: '**/cucumber.json',
                     reportTitle: 'Banking BDD Report'
        }
    }
}</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How do you run Cucumber tests in parallel and what precautions are needed?",
        a: `<div class="ans-hero">Enable parallel execution in the Runner class with @DataProvider(parallel=true). Ensure ThreadLocal WebDriver, no shared state between scenarios, and independent test data.</div>
        <div class="code-block"><code><span class="kw">@Override</span>
<span class="kw">@DataProvider</span>(parallel = <span class="kw">true</span>)
<span class="kw">public</span> Object[][] <span class="fn">scenarios</span>() {
  <span class="kw">return super</span>.<span class="fn">scenarios</span>();
}</code></div>
        <ul class="ans-list green">
          <li><span class="icon">✅</span><strong>ThreadLocal WebDriver:</strong> Each thread must get its own browser instance</li>
          <li><span class="icon">✅</span><strong>No shared state:</strong> Don't use static variables in step definitions</li>
          <li><span class="icon">✅</span><strong>Independent test data:</strong> Parallel login tests must use different usernames</li>
          <li><span class="icon">✅</span><strong>@Before / @After per scenario:</strong> Must initialise/quit driver correctly</li>
        </ul>`
      },
      {
        difficulty: 'hard',
        q: "How do you integrate Cucumber with Jenkins CI/CD pipeline?",
        a: `<div class="ans-hero">Run tests via Maven in Jenkins pipeline stages, publish results using the Cucumber Reports Jenkins plugin, and filter test suites by tags for different pipeline stages.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Smoke tests on every commit</div><div class="step-desc">mvn test -Dcucumber.filter.tags="@smoke" — runs in &lt;10 min, fast feedback</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Regression on main branch merge</div><div class="step-desc">mvn test -Dcucumber.filter.tags="@regression" — full suite nightly</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Cucumber Reports plugin</div><div class="step-desc">Jenkins parses target/cucumber.json → builds HTML dashboard with pass/fail per scenario</div></div></div>
        </div>`
      },
      {
        difficulty: 'medium',
        q: "How do you handle failed scenarios in Cucumber — how do you re-run only failed tests?",
        a: `<div class="ans-hero">Cucumber generates a rerun.txt file (via the rerun plugin) listing failed scenarios. A second Runner class reads this file and re-runs only those scenarios.</div>
        <div class="code-block"><code><span class="cm">// First runner — generate rerun.txt on failure</span>
<span class="kw">@CucumberOptions</span>(
  plugin = { <span class="st">"rerun:target/rerun.txt"</span> }
)

<span class="cm">// Second runner — re-run only failed scenarios</span>
<span class="kw">@CucumberOptions</span>(
  features = <span class="st">"@target/rerun.txt"</span>
)</code></div>
        <div class="info-panel tip"><div class="panel-title">CI usage</div><p>Run the main runner first. If it fails, run the rerun runner (reads rerun.txt) to retry only flaky/failed scenarios. Reduces CI time significantly for stable suites with occasional flakiness.</p></div>`
      }
    ]
  },

  // ── 7. Banking Application ─────────────────────────────────────
  {
    id: 'cucumber-banking-app',
    title: 'Banking App — BDD Test Suite',
    section: 'cucumber',
    difficulty: 'hard',
    time: '60 min',
    shortDesc: 'Complete Cucumber + Selenium + TestNG BDD framework for a banking application — login, fund transfer, beneficiary, statement, and API tests.',
    content: `
      <div class="topic-section">
        <h2>Banking Application — BDD Automation</h2>
        <div class="ans-hero">A banking application is the perfect Cucumber project — every feature maps directly to a business requirement, stakeholders can validate the scenarios, and the reusable step library grows with each sprint.</div>

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-shield-lock"></i></div>
            <div class="bm-title">Login &amp; Auth</div>
            <div class="bm-count">5 scenarios</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-arrow-left-right"></i></div>
            <div class="bm-title">Fund Transfer</div>
            <div class="bm-count">7 scenarios</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-wallet2"></i></div>
            <div class="bm-title">Dashboard</div>
            <div class="bm-count">4 scenarios</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-clock-history"></i></div>
            <div class="bm-title">Statements</div>
            <div class="bm-count">3 scenarios</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-people"></i></div>
            <div class="bm-title">Beneficiary</div>
            <div class="bm-count">4 scenarios</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-cloud-arrow-up"></i></div>
            <div class="bm-title">API Scenarios</div>
            <div class="bm-count">3 scenarios</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Login Feature File</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">GHERKIN — Login.feature</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Feature: Customer Login
  As a registered customer
  I want to log into the banking portal
  So that I can manage my accounts

  Background:
    Given customer opens the banking application at "https://bankapp.com"

  @smoke @login
  Scenario: Successful login with valid credentials
    When customer enters username "karan@bankapp.com" and password "Secure@1234"
    And customer clicks Login
    Then customer should land on the dashboard
    And welcome message should be "Welcome, Karan"

  @regression @login
  Scenario: Login fails with incorrect password
    When customer enters username "karan@bankapp.com" and password "WrongPass"
    And customer clicks Login
    Then error message "Invalid username or password" should appear

  @regression @login
  Scenario: Account locked after 3 failed login attempts
    When customer enters wrong password 3 times for "karan@bankapp.com"
    Then account should be locked
    And error "Your account has been locked. Contact support." should appear

  @regression @login
  Scenario Outline: Login validation with multiple credentials
    When customer enters username "&lt;username&gt;" and password "&lt;password&gt;"
    And customer clicks Login
    Then customer should see "&lt;result&gt;"

    Examples:
      | username              | password      | result                       |
      | karan@bankapp.com     | Secure@1234   | Welcome, Karan               |
      | manager@bankapp.com   | Mgr@1234      | Welcome, Manager             |
      | karan@bankapp.com     | WrongPass     | Invalid username or password |
      |                       | Secure@1234   | Username is required         |</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Fund Transfer Feature File</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">GHERKIN — FundTransfer.feature</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Feature: Fund Transfer
  As a bank customer
  I want to transfer money to another account
  So that I can pay bills and send money

  Background:
    Given customer is logged in as "karan@bankapp.com"
    And customer navigates to the Fund Transfer page

  @smoke @transfer
  Scenario: Successful NEFT transfer
    When customer selects transfer type "NEFT"
    And customer enters beneficiary account "9876543210"
    And customer enters amount "5000"
    And customer enters remarks "Rent payment"
    And customer clicks Proceed
    And customer enters OTP "123456"
    And customer clicks Confirm
    Then transfer success message should appear
    And reference number should be generated
    And account balance should decrease by "5000"

  @regression @transfer
  Scenario: Transfer fails for insufficient balance
    When customer selects transfer type "NEFT"
    And customer enters beneficiary account "9876543210"
    And customer enters amount "9999999"
    And customer clicks Proceed
    Then error "Insufficient balance" should be displayed

  @regression @transfer
  Scenario Outline: Fund transfer with different types and amounts
    When customer selects transfer type "&lt;type&gt;"
    And customer enters beneficiary account "9876543210"
    And customer enters amount "&lt;amount&gt;"
    And customer clicks Proceed
    And customer confirms with OTP
    Then transfer should "&lt;result&gt;"

    Examples:
      | type  | amount  | result              |
      | NEFT  | 1000    | succeed             |
      | RTGS  | 200000  | succeed             |
      | IMPS  | 50000   | succeed             |
      | NEFT  | 0       | fail — invalid amt  |
      | NEFT  | -500    | fail — invalid amt  |</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Step Definitions — Fund Transfer</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — TransferSteps.java</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">package stepDefinitions;

import io.cucumber.java.en.*;
import org.testng.Assert;
import pages.*;
import utilities.DriverManager;

public class TransferSteps {

    TransferPage  transferPage  = new TransferPage(DriverManager.getDriver());
    DashboardPage dashboardPage = new DashboardPage(DriverManager.getDriver());

    private double balanceBefore;

    @Given("customer navigates to the Fund Transfer page")
    public void navigateToTransfer() {
        dashboardPage.clickFundTransferMenu();
    }

    @When("customer selects transfer type {string}")
    public void selectType(String type) {
        transferPage.selectTransferType(type);
    }

    @When("customer enters beneficiary account {string}")
    public void enterBeneficiary(String account) {
        transferPage.enterBeneficiaryAccount(account);
    }

    @When("customer enters amount {string}")
    public void enterAmount(String amount) {
        balanceBefore = dashboardPage.getAccountBalance();
        transferPage.enterAmount(amount);
    }

    @When("customer enters remarks {string}")
    public void enterRemarks(String remarks) {
        transferPage.enterRemarks(remarks);
    }

    @When("customer clicks Proceed")
    public void clickProceed() {
        transferPage.clickProceed();
    }

    @When("customer enters OTP {string}")
    public void enterOtp(String otp) {
        transferPage.enterOtp(otp);
    }

    @When("customer clicks Confirm")
    public void clickConfirm() {
        transferPage.clickConfirm();
    }

    @Then("transfer success message should appear")
    public void verifySuccess() {
        Assert.assertTrue(transferPage.isSuccessMessageDisplayed(),
            "Transfer success message not found");
    }

    @Then("reference number should be generated")
    public void verifyReferenceNumber() {
        String refNo = transferPage.getReferenceNumber();
        Assert.assertNotNull(refNo, "Reference number is null");
        Assert.assertTrue(refNo.startsWith("TXN"), "Ref no format invalid: " + refNo);
    }

    @Then("account balance should decrease by {string}")
    public void verifyBalanceDecrease(String amount) {
        double expected  = balanceBefore - Double.parseDouble(amount);
        double actual    = dashboardPage.getAccountBalance();
        Assert.assertEquals(actual, expected, 1.0,
            "Balance not reduced correctly after transfer");
    }

    @Then("error {string} should be displayed")
    public void verifyError(String error) {
        Assert.assertEquals(transferPage.getErrorMessage(), error);
    }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Beneficiary Feature File</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">GHERKIN — Beneficiary.feature</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Feature: Beneficiary Management

  Background:
    Given customer is logged in as "karan@bankapp.com"
    And customer is on the Beneficiary Management page

  @regression @beneficiary
  Scenario: Add new beneficiary successfully
    When customer clicks Add Beneficiary
    And customer fills beneficiary details:
      | field   | value         |
      | Name    | Rahul Sharma  |
      | Account | 9876543210    |
      | Bank    | HDFC Bank     |
      | IFSC    | HDFC0001234   |
    And customer confirms with OTP "123456"
    Then beneficiary "Rahul Sharma" should appear in the list

  @regression @beneficiary
  Scenario: Delete an existing beneficiary
    Given beneficiary "Rahul Sharma" exists
    When customer clicks Delete for "Rahul Sharma"
    And customer confirms deletion
    Then "Rahul Sharma" should no longer appear in the list

  @regression @beneficiary
  Scenario: Cannot add duplicate beneficiary
    Given beneficiary "Rahul Sharma" with account "9876543210" already exists
    When customer tries to add beneficiary with same account "9876543210"
    Then error "Beneficiary already exists" should be displayed</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Complete testng.xml for Banking Suite</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — testng.xml</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd"&gt;
&lt;suite name="BankingBDDSuite" parallel="tests" thread-count="4"&gt;

  &lt;test name="SmokeTests"&gt;
    &lt;parameter name="tags" value="@smoke"/&gt;
    &lt;classes&gt;
      &lt;class name="runners.TestRunner"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

  &lt;test name="LoginRegression"&gt;
    &lt;parameter name="tags" value="@regression and @login"/&gt;
    &lt;classes&gt;
      &lt;class name="runners.TestRunner"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

  &lt;test name="TransferRegression"&gt;
    &lt;parameter name="tags" value="@regression and @transfer"/&gt;
    &lt;classes&gt;
      &lt;class name="runners.TestRunner"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;

&lt;/suite&gt;</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How do you write a Cucumber feature file for a fund transfer scenario that includes OTP verification?",
        a: `<div class="ans-hero">Model each user action as a Gherkin step. OTP is handled in the step definition — UAT uses a fixed OTP or a test API endpoint that returns the latest OTP.</div>
        <div class="code-block"><code>Scenario: NEFT fund transfer with OTP
  <span class="kw">Given</span> customer is logged in
  <span class="kw">When</span> customer initiates NEFT transfer of <span class="st">"5000"</span> to <span class="st">"9876543210"</span>
  <span class="kw">And</span> customer enters OTP <span class="st">"123456"</span>
  <span class="kw">And</span> customer confirms the transfer
  <span class="kw">Then</span> transfer success message should appear
  <span class="kw">And</span> reference number should start with <span class="st">"TXN"</span></code></div>
        <div class="info-panel tip"><div class="panel-title">OTP in UAT</div><p>In the step definition for "customer enters OTP {string}", the step either reads from a fixed config (UAT mock OTP = 123456) or calls an internal test API to retrieve the latest OTP for the user's account.</p></div>`
      },
      {
        difficulty: 'hard',
        q: "How do you design a Cucumber framework for a banking application from scratch?",
        a: `<div class="ans-hero">Layer the framework: Feature Files → Step Definitions → Page Objects → Utilities → Hooks → Runner. Each layer has a single responsibility.</div>
        <div class="code-block"><code>Framework layers:
1. features/        — .feature files per module (Login, Transfer, Beneficiary)
2. stepDefinitions/ — thin Java classes, one per feature, call page methods
3. pages/           — Page Objects (LoginPage, TransferPage, DashboardPage)
4. hooks/           — Hooks.java: @Before (init driver), @After (screenshot + quit)
5. utilities/       — DriverManager (ThreadLocal), ExcelReader, ConfigReader
6. runners/         — TestRunner.java: @CucumberOptions with tags, glue, plugin
7. resources/
   ├── features/    — all .feature files
   └── config.properties — baseUrl, browser, credentials</code></div>`
      },
      {
        difficulty: 'medium',
        q: "How do you handle test data in a Cucumber banking test suite?",
        a: `<div class="ans-hero">Use Scenario Outline Examples tables for simple data-driven tests, DataTable for structured multi-field data, config.properties for environment settings, and Excel (via ExcelReader utility) for large external datasets.</div>
        <table class="comparison-table">
          <thead><tr><th>Data Source</th><th>Best for</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>Examples table</td><td>5–10 rows of scenario variations</td><td>Login with 4 user types</td></tr>
            <tr><td>Data Table (inline)</td><td>Multi-field data for one step</td><td>Add beneficiary with 5 fields</td></tr>
            <tr><td>config.properties</td><td>Environment settings</td><td>baseUrl, browser, default credentials</td></tr>
            <tr><td>Excel (ExcelReader)</td><td>Large datasets, shared with business team</td><td>500 account numbers for data validation</td></tr>
          </tbody>
        </table>`
      }
    ]
  }
];
