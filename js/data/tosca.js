// ================================================================
// TOSCA DATA
// ================================================================
const TOSCA_TOPICS = [

  // ── 1. Introduction ──────────────────────────────────────────
  {
    id: 'tosca-introduction',
    title: 'Tosca Introduction',
    section: 'tosca',
    difficulty: 'easy',
    time: '20 min',
    shortDesc: 'What is Tricentis Tosca, why enterprises choose it, and how it compares to Selenium.',
    content: `
      <div class="topic-section">
        <h2>What is Tricentis Tosca?</h2>
        <div class="ans-hero">Tosca is a <strong>Model-Based Test Automation (MBTA)</strong> platform by Tricentis that lets testers automate complex enterprise applications — web, SAP, Salesforce, mobile, desktop, and APIs — without writing traditional code.</div>

        <img src="images/tosca/mbta-model.jpeg" alt="Tosca MBTA Model — System to Automation Model to Test Cases" class="notion-img" />

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-globe"></i></div>
            <div class="bm-title">Web Testing</div>
            <div class="bm-count">Chrome, Edge, FF</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-building"></i></div>
            <div class="bm-title">SAP Testing</div>
            <div class="bm-count">GUI + Web</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-cloud-arrow-up"></i></div>
            <div class="bm-title">API Testing</div>
            <div class="bm-count">REST + SOAP</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-phone"></i></div>
            <div class="bm-title">Mobile Testing</div>
            <div class="bm-count">iOS + Android</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-database"></i></div>
            <div class="bm-title">Database Testing</div>
            <div class="bm-count">SQL Validation</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-display"></i></div>
            <div class="bm-title">Desktop Testing</div>
            <div class="bm-count">Windows Apps</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Tosca: No-Code Visual Test Design</h2>
        <img src="images/tosca/nocode-platform.jpeg" alt="Tosca No-Code Visual Test Design — MBTA Platform" class="notion-img" />

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Scan technology under test</div>
              <div class="step-desc">Use XScan to capture UI elements from your application. Tosca automatically identifies all controls and creates a technical model — no locators to write.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Drag and drop modules</div>
              <div class="step-desc">Build test cases by dragging scanned module attributes into a test case designer. Define action mode (Input, Verify, Wait, Buffer) for each element.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Configure test steps</div>
              <div class="step-desc">Enter test data values for each step — or link to Business Parameters, Buffer variables, or TDM (Test Data Management) for dynamic data-driven execution.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Tosca vs Selenium</h2>
        <table class="comparison-table">
          <thead><tr><th>Feature</th><th>Tosca</th><th>Selenium</th></tr></thead>
          <tbody>
            <tr><td>Approach</td><td>Model-based, low-code</td><td>Code-based (Java/Python)</td></tr>
            <tr><td>Cost</td><td>Commercial license (expensive)</td><td>Open source, free</td></tr>
            <tr><td>SAP / Salesforce</td><td>Native connectors built-in</td><td>Limited, requires custom code</td></tr>
            <tr><td>Test management</td><td>Built-in (Commander)</td><td>Needs external tool (Jira, TestRail)</td></tr>
            <tr><td>Skill needed</td><td>No coding required</td><td>Java/Python required</td></tr>
            <tr><td>Risk-based testing</td><td>ML-powered optimization</td><td>Not available</td></tr>
            <tr><td>Maintenance</td><td>Re-scan module on UI change</td><td>Update locator in Page Object</td></tr>
            <tr><td>Parallel execution</td><td>DEX / Tosca Grid built-in</td><td>Selenium Grid / TestNG parallel</td></tr>
            <tr><td>API testing</td><td>Built-in API Engine</td><td>Needs Rest Assured library</td></tr>
          </tbody>
        </table>
        <div class="info-panel tip"><div class="panel-title">When to choose Tosca</div><p>Enterprise SAP/Salesforce projects, teams without coding expertise, or organizations that need combined test management + automation in one tool. Choose Selenium for web-only projects with a development team.</p></div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'easy',
        q: "What is Tosca and what makes it different from Selenium?",
        a: `<div class="ans-hero">Tosca is a Model-Based Test Automation (MBTA) platform by Tricentis. Key difference: Tosca is codeless and model-based; Selenium requires writing code.</div>
        <table class="comparison-table">
          <thead><tr><th>Tosca</th><th>Selenium</th></tr></thead>
          <tbody>
            <tr><td>No coding — drag &amp; drop modules</td><td>Write Java/Python code</td></tr>
            <tr><td>Native SAP, Salesforce support</td><td>Web only (extensions needed for SAP)</td></tr>
            <tr><td>Built-in test management + execution + reports</td><td>Separate tools needed (TestNG, Allure, Jira)</td></tr>
            <tr><td>Commercial license</td><td>Free, open source</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'easy',
        q: "What is Model-Based Test Automation (MBTA) in Tosca?",
        a: `<div class="ans-hero">MBTA separates technical information (UI structure) from business information (test logic). The Automation Model acts as a bridge between the System and Test Cases.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">System (the AUT)</div><div class="step-desc">Web app, SAP, Salesforce, mobile — the actual application under test</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Automation Model (Modules)</div><div class="step-desc">Technical representation of UI elements created by XScan. Insulates test cases from UI changes.</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Test Cases (Business Info)</div><div class="step-desc">Business-level steps that use module attributes. Testers feed data here without touching technical details.</div></div></div>
        </div>
        <div class="info-panel tip"><div class="panel-title">Why it matters</div><p>If the UI changes, you only update the Module once — all test cases using it automatically get the fix. Same as POM in Selenium but without any code.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "When would you recommend Tosca to a client over Selenium?",
        a: `<div class="ans-hero">Recommend Tosca when the project involves SAP/Salesforce, when testers are non-developers, or when a single tool must cover test management + automation.</div>
        <ul class="ans-list green">
          <li><span class="icon">✅</span><strong>SAP/Salesforce automation:</strong> Tosca has native engines for SAP GUI and Salesforce — Selenium struggles here</li>
          <li><span class="icon">✅</span><strong>Non-technical teams:</strong> Business analysts can build tests with drag-and-drop, no Java needed</li>
          <li><span class="icon">✅</span><strong>Enterprise test management:</strong> Tosca Commander combines requirements, test design, execution, and reports in one place</li>
          <li><span class="icon">✅</span><strong>Risk-based testing:</strong> Tosca uses ML to determine which tests give maximum coverage with minimum execution — critical for large regression suites</li>
        </ul>
        <ul class="ans-list amber">
          <li><span class="icon">⚠</span><strong>Don't recommend Tosca when:</strong> Budget is tight (licensing is expensive), team is developer-led, project is web-only, or open-source is a requirement</li>
        </ul>`
      }
    ]
  },

  // ── 2. Architecture ───────────────────────────────────────────
  {
    id: 'tosca-architecture',
    title: 'Tosca Architecture',
    section: 'tosca',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'Deep dive into Tosca Commander, TBOX, DEX, TDM Repository, OSV, and the Tosca Server ecosystem.',
    content: `
      <div class="topic-section">
        <h2>Tosca Architecture Overview</h2>
        <div class="ans-hero">Tosca has two major architectural diagrams to understand: the local Commander + Executor architecture, and the full enterprise Tosca Server architecture with distributed execution.</div>

        <h3>Tosca Commander + Executor (Client Side)</h3>
        <img src="images/tosca/tosca-commander-architecture.jpeg" alt="Tosca Commander Architecture — Commander, Executor, Repository, Wizard" class="notion-img" />

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Tosca Commander</div>
              <div class="step-desc">The main IDE — the central workspace where testers create Modules, Test Cases, Execution Lists, and view Reports. Connects to the Repository (database) via DB-Connection. Supports AddIns for ALM, Jira integration.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Tosca Executor (TBOX Engines)</div>
              <div class="step-desc">Runs beneath Commander. Contains multiple engines: SAP engine, HTML engine, TCP/IP, 3270 (mainframe), and more. Each engine knows how to interact with a specific application type.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Repository</div>
              <div class="step-desc">The database (SQL Server / Oracle) where all automation assets — modules, test cases, execution logs — are stored. Can be a single-user local workspace or a multi-user shared repository.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Tosca Wizard</div>
              <div class="step-desc">Simplified interface for basic test creation and execution without full Commander. Connected via Settings.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Tosca Enterprise Server Architecture</h2>
        <img src="images/tosca/tosca-server-architecture.jpeg" alt="Tosca Server Architecture — Commander, TBOX, OSV, DEX, TDM, Admin Console" class="notion-img" />

        <table class="comparison-table">
          <thead><tr><th>Component</th><th>Role</th></tr></thead>
          <tbody>
            <tr><td><strong>Tosca Commander</strong></td><td>Central IDE — UI, Business Objects, Test Case Design, Test Planning</td></tr>
            <tr><td><strong>TBOX (Scan + Execution + API Scan)</strong></td><td>Client-side scanning and local test execution engine</td></tr>
            <tr><td><strong>OSV (Object State Validation)</strong></td><td>Monitors application state during execution; OSV Monitor + OSV Host</td></tr>
            <tr><td><strong>TDM Repository</strong></td><td>Centralized test data store connected via DB-Connection</td></tr>
            <tr><td><strong>TCAPI</strong></td><td>Tosca Client API — bridge between Commander and Tosca Server over HTTPS</td></tr>
            <tr><td><strong>DEX (Distributed Execution)</strong></td><td>Runs tests in parallel across multiple remote agents</td></tr>
            <tr><td><strong>DEX Agent</strong></td><td>Client-side agent that receives and runs tests from DEX server</td></tr>
            <tr><td><strong>TDS (Tosca Distribution Server)</strong></td><td>Handles test distribution and scheduling</td></tr>
            <tr><td><strong>Admin Console</strong></td><td>Central management of agents, licenses, and configurations</td></tr>
            <tr><td><strong>Analytics</strong></td><td>Test metrics, trend analysis, and coverage dashboards</td></tr>
            <tr><td><strong>Exploratory Testing Service</strong></td><td>Session-based exploratory testing integrated into the platform</td></tr>
            <tr><td><strong>License Server</strong></td><td>Manages Tosca license distribution across the team</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Workspace Types</h2>
        <div class="compare-grid">
          <div class="compare-card green">
            <h6>Single-User Workspace</h6>
            Individual tester machine. SQLite local DB. No network needed. Good for learning and small projects.
          </div>
          <div class="compare-card blue">
            <h6>Multi-User Repository</h6>
            Shared SQL Server or Oracle DB on network. Multiple testers work on same project. Check-in/check-out for asset locking. Enterprise standard.
          </div>
        </div>
        <div class="info-panel tip"><div class="panel-title">Common Repository</div><p>In enterprise setups, a <strong>Common Repository</strong> stores shared business objects and modules reusable across projects — connected via DB-Connection from Tosca Commander.</p></div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "Explain the Tosca Commander architecture and its key components.",
        a: `<div class="ans-hero">Tosca Commander is the central client-side IDE that connects to a Repository (DB), runs tests via Tosca Executor (TBOX engines), and communicates with Tosca Server for distributed execution.</div>
        <table class="comparison-table">
          <thead><tr><th>Component</th><th>What it does</th></tr></thead>
          <tbody>
            <tr><td>Commander</td><td>IDE for creating Modules, Test Cases, Execution Lists, viewing Reports</td></tr>
            <tr><td>TBOX</td><td>Scan, record, and execute tests. Contains engines per technology (HTML, SAP, TCP/IP)</td></tr>
            <tr><td>Repository</td><td>SQL Server/Oracle DB storing all test assets</td></tr>
            <tr><td>Tosca Server</td><td>Enterprise server for DEX, TDS, Admin Console, Analytics</td></tr>
            <tr><td>DEX</td><td>Distributed Execution — run tests in parallel on remote agents</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'hard',
        q: "What is DEX in Tosca and how does it enable parallel execution?",
        a: `<div class="ans-hero">DEX (Distributed Execution) is Tosca's parallel test runner. It distributes test cases across multiple DEX Agents (machines) and runs them simultaneously.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Tosca Server hosts DEX engine</div><div class="step-desc">DEX server receives execution requests from Tosca Commander via HTTPS/TCAPI</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">DEX Agents on remote machines</div><div class="step-desc">Each agent machine has Tosca installed, registers with DEX server. Can be physical machines or VMs in Azure.</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Tests distributed automatically</div><div class="step-desc">DEX splits your Execution List across available agents. 100 tests across 5 agents = ~20 tests per agent running simultaneously.</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Results consolidated</div><div class="step-desc">All agent results collected back to Tosca Server. Unified report available in Commander.</div></div></div>
        </div>`
      }
    ]
  },

  // ── 3. Core Concepts — Modules & XScan ───────────────────────
  {
    id: 'tosca-modules-xscan',
    title: 'Modules & XScan',
    section: 'tosca',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'How to scan applications with XScan, create Modules, and manage Module Attributes — the foundation of Tosca automation.',
    content: `
      <div class="topic-section">
        <h2>What is a Module?</h2>
        <div class="ans-hero">A Module is the technical representation of a screen or UI component in your application. It holds Module Attributes — each attribute corresponds to one UI element (button, input field, dropdown, label).</div>

        <div class="definition-card">
          <div class="definition-term">Module Analogy</div>
          <div class="definition-body">
            <strong>Selenium equivalent:</strong> LoginPage.java (Page Object)<br>
            <strong>Tosca equivalent:</strong> LoginPage Module<br><br>
            In Selenium you write: <code>@FindBy(id="username") WebElement usernameField;</code><br>
            In Tosca: XScan captures the username field → stored as a Module Attribute with its ID property. No code written.
          </div>
        </div>

        <h3>Module Hierarchy</h3>
        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Module Folder</div>
              <div class="step-desc">Organizes related modules. Example: "Banking App" folder → LoginModule, TransferModule, DashboardModule</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Module</div>
              <div class="step-desc">Represents a page or dialog. Example: "Login Page Module"</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Module Attribute</div>
              <div class="step-desc">Individual UI element. Example: "Username Field", "Password Field", "Login Button". Each has properties (ID, XPath, etc.) and an ActionMode.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>XScan — Element Scanning</h2>
        <div class="ans-hero">XScan is Tosca's tool for capturing UI elements from a live application. It creates Module Attributes automatically — equivalent to Selenium's "Inspect Element" but automated.</div>

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Open Tosca Commander → Modules section</div>
              <div class="step-desc">Navigate to the Modules workspace in Commander. Create a Module folder for your application.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Click Scan → Select application type</div>
              <div class="step-desc">Choose: Web (HTML), Desktop, SAP, Mobile, API. For web: opens the browser-connected scanning overlay.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Navigate to the page and scan</div>
              <div class="step-desc">Open your target page in the browser. Click "Scan Page" — all interactive elements are captured with their technical properties (ID, Name, XPath, CSS, text).</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Review and clean up Module Attributes</div>
              <div class="step-desc">Delete irrelevant elements. Set ActionMode for each attribute: Input (enter data), Verify (check value), ToggleCheckbox, Select (dropdown), Wait, Buffer.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-content">
              <div class="step-title">Re-scan on UI change</div>
              <div class="step-desc">If the developer renames a button ID, just re-scan that page. The Module Attribute updates — all test cases using it automatically work again. No locator hunting.</div>
            </div>
          </div>
        </div>

        <h3>Action Modes — The Core of Tosca Step Configuration</h3>
        <table class="comparison-table">
          <thead><tr><th>Action Mode</th><th>What it does</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Input</strong></td><td>Enter text or value into a field</td><td>Username field → Input → "karan@bankapp.com"</td></tr>
            <tr><td><strong>Verify</strong></td><td>Assert that element value/text matches expected</td><td>Welcome message → Verify → "Welcome, Karan"</td></tr>
            <tr><td><strong>ToggleCheckbox</strong></td><td>Check or uncheck a checkbox</td><td>Remember me → ToggleCheckbox → "true"</td></tr>
            <tr><td><strong>Select</strong></td><td>Choose an option from a dropdown</td><td>Transfer type → Select → "NEFT"</td></tr>
            <tr><td><strong>Wait</strong></td><td>Pause execution until element is present/visible</td><td>Loading spinner → Wait → disappears</td></tr>
            <tr><td><strong>Buffer</strong></td><td>Store element value in a variable for later use</td><td>Order ID → Buffer → {B[OrderID]}</td></tr>
            <tr><td><strong>Click</strong></td><td>Perform a click action</td><td>Login button → Click</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Module Maintenance — What Happens When UI Changes?</h2>
        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Selenium without POM</h6>
            Login button ID changes from "loginBtn" to "btnLogin". Must find and update every test script that references it. Risk of missing some.
          </div>
          <div class="compare-card green">
            <h6>Tosca with Modules</h6>
            Login button ID changes. Open LoginPage Module → re-scan just the login button → Module Attribute updates. All test cases using this module automatically fixed. Zero test case edits.
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>XScan — Complete Execution Flow</h2>
        <div class="ans-hero">XScan is Tosca's component for identifying and scanning application objects. It creates reusable Modules containing UI controls, properties, identification information, and steering parameters.</div>

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Application</div>
              <div class="step-desc">Open the live application in the browser (e.g. Amazon login page: Username textbox, Password textbox, Login button)</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Tosca XScan</div>
              <div class="step-desc">In Tosca Commander → Modules → Right Click → Scan → XScan. Browser overlay activates, hover to highlight elements.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Identify Objects</div>
              <div class="step-desc">Click each required element: Username textbox, Password textbox, Login button. XScan reads their properties (ID, Name, Class, Text, XPath).</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Create Module</div>
              <div class="step-desc">Click "Create Module". Tosca generates Login_Module with attributes: Username, Password, Login Button. Each attribute holds its identification properties.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-content">
              <div class="step-title">Create TestCase</div>
              <div class="step-desc">Drag module attributes into a TestCase. Set values (admin, password123) and ActionModes (Input, Input, Click). Add a Verify step for the post-login message.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">6</div>
            <div class="step-content">
              <div class="step-title">Execute</div>
              <div class="step-desc">Run from Execution List. Tosca drives the browser using the stored identification properties. No code written at any step.</div>
            </div>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">Login_Module Structure</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Login_Module
  |
  |-- Username          (ActionMode: Input,  Properties: id=username)
  |-- Password          (ActionMode: Input,  Properties: id=password)
  |-- Login Button      (ActionMode: Click,  Properties: id=btnLogin)
  |-- Dashboard Header  (ActionMode: Verify, Properties: class=dashboard-header)</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Identification Properties</h2>
        <div class="ans-hero">Identification properties help Tosca uniquely identify an object on screen. Choosing stable, unique properties prevents test failures when the UI changes.</div>

        <table class="comparison-table">
          <thead><tr><th>Object Type</th><th>Recommended Properties</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Textbox</strong></td><td>ID, Name, Class</td><td>id=username, name=user_field</td></tr>
            <tr><td><strong>Button</strong></td><td>Caption, Text, ID</td><td>id=btnLogin, text=Login</td></tr>
            <tr><td><strong>Dropdown</strong></td><td>Name, Value</td><td>name=country_select</td></tr>
            <tr><td><strong>Link</strong></td><td>Href, Text</td><td>text=Fund Transfer</td></tr>
            <tr><td><strong>Checkbox</strong></td><td>ID, Name</td><td>id=rememberMe</td></tr>
            <tr><td><strong>Label / Span</strong></td><td>Class, Text</td><td>class=welcome-msg</td></tr>
          </tbody>
        </table>

        <h3>Technical ID vs Logical ID</h3>
        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Technical ID</h6>
            The actual property from the application's HTML/source code.<br><br>
            Example: <code>id=username123</code><br><br>
            Set by developers. May change across releases. Used by XScan to identify the element at runtime.
          </div>
          <div class="compare-card green">
            <h6>Logical ID</h6>
            A business-friendly display name you give the Module Attribute in Tosca Commander.<br><br>
            Example: <code>Username_Field</code><br><br>
            Makes test cases readable. The Logical ID shows in test case steps — testers see "Username_Field" not "id=username123".
          </div>
        </div>

        <h3>XScan Identification Priority</h3>
        <div class="ans-hero">Tosca evaluates properties in this order — always select the most stable (highest priority) properties available.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">ID</div><div class="step-desc">Most unique — preferred if present. Example: id=btnLogin</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Name</div><div class="step-desc">Usually unique per form. Example: name=username</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Automation ID</div><div class="step-desc">data-testid attribute — explicitly added for test stability</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Class</div><div class="step-desc">Use only if unique. Often shared across many elements.</div></div></div>
          <div class="step-item"><div class="step-num">5</div><div class="step-content"><div class="step-title">Text / Caption</div><div class="step-desc">Visible text. Works well for buttons and links.</div></div></div>
          <div class="step-item"><div class="step-num">6</div><div class="step-content"><div class="step-title">Position</div><div class="step-desc">Last resort — index-based. Breaks if page layout changes.</div></div></div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Dynamic Objects &amp; Wildcards</h2>
        <div class="ans-hero">When an object's property changes every execution (auto-generated IDs, timestamps), use Tosca wildcards to match the dynamic part.</div>

        <div class="definition-card">
          <div class="definition-term">Scenario: Dynamic Textbox ID</div>
          <div class="definition-body">
            Execution 1: <code>id=user_12345</code><br>
            Execution 2: <code>id=user_67890</code><br>
            Execution 3: <code>id=user_99001</code><br><br>
            The prefix <code>user_</code> is always the same — only the number changes.
          </div>
        </div>

        <table class="comparison-table">
          <thead><tr><th>Wildcard</th><th>Meaning</th><th>Example</th><th>Matches</th></tr></thead>
          <tbody>
            <tr><td><code>*</code></td><td>Any number of characters</td><td><code>user_*</code></td><td>user_12345, user_67890, user_abc</td></tr>
            <tr><td><code>?</code></td><td>Single character only</td><td><code>User?</code></td><td>User1, User2, UserA — NOT User12</td></tr>
            <tr><td><code>Contains</code></td><td>Property contains substring</td><td><code>id Contains user</code></td><td>Any ID containing "user"</td></tr>
            <tr><td><code>Login*</code></td><td>Starts with Login</td><td><code>Login*</code></td><td>LoginButton, LoginSubmit, Login_Form</td></tr>
          </tbody>
        </table>

        <div class="info-panel tip">
          <div class="panel-title">Best practice for dynamic IDs</div>
          <p>Ask developers to add a stable <code>data-testid</code> attribute to all interactive elements. This never changes with styling or refactoring. XScan uses it as Automation ID — the most reliable identification strategy.</p>
        </div>
      </div>

      <div class="topic-section">
        <h2>Anchor — Identifying Ambiguous Objects</h2>
        <div class="ans-hero">An Anchor is a nearby stable element used as a reference point to identify an ambiguous object. It resolves the "two identical textboxes" problem.</div>

        <div class="definition-card">
          <div class="definition-term">Scenario</div>
          <div class="definition-body">
            Page layout:<br>
            <code>Customer Name</code> [Label] &nbsp;&nbsp;&nbsp; [Textbox]<br>
            <code>Address</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Label] &nbsp;&nbsp;&nbsp; [Textbox]<br><br>
            Both textboxes have identical properties. Without anchor, Tosca picks the first one randomly.
          </div>
        </div>

        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Identify the anchor element</div><div class="step-desc">The "Customer Name" label is unique and stable next to the first textbox.</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Set anchor in XScan</div><div class="step-desc">In the Module Attribute properties, set Anchor = "Customer Name" label. Tosca finds the label first, then locates the textbox relative to it.</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Unique identification achieved</div><div class="step-desc">Anchor → Customer Name Label → Textbox to its right. No ambiguity.</div></div></div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Steering Parameters</h2>
        <div class="ans-hero">Steering parameters define the expected state or behavior of an object during execution. They validate that the element is in the right condition before Tosca interacts with it.</div>

        <table class="comparison-table">
          <thead><tr><th>Steering Parameter</th><th>Purpose</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Enabled</strong></td><td>Element must be enabled (not grayed out)</td><td>Proceed button: Enabled = True</td></tr>
            <tr><td><strong>Visible</strong></td><td>Element must be visible on screen</td><td>Error message: Visible = True</td></tr>
            <tr><td><strong>Selected</strong></td><td>Checkbox / radio is checked</td><td>Terms checkbox: Selected = True</td></tr>
            <tr><td><strong>Text</strong></td><td>Element text matches expected value</td><td>Balance label: Text = ₹10,000</td></tr>
            <tr><td><strong>Value</strong></td><td>Input field value matches</td><td>Amount field: Value = 5000</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Handling Common UI Controls</h2>

        <h3>Dropdowns</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Tosca TestStep — Dropdown</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Module Attribute: Country_Dropdown
  ActionMode: Select
  Value:       India

Module Attribute: Transfer_Type_Dropdown
  ActionMode: Select
  Value:       NEFT</code></pre>
        </div>

        <h3>Checkboxes</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Tosca TestStep — Checkbox</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Module Attribute: Accept_Terms_Checkbox
  ActionMode: Input
  Value:       True     ← checks the checkbox

Module Attribute: Remember_Me_Checkbox
  ActionMode: Input
  Value:       False    ← unchecks the checkbox</code></pre>
        </div>

        <h3>Keyboard Keys</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Tosca Special Key Syntax</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Enter key:   {ENTER}
Tab:         {TAB}
Escape:      {ESC}
Clear first: {CLEAR}admin   ← clears field, then types "admin"

Example:
  Username Field
    ActionMode: Input
    Value:       {CLEAR}karan@bankapp.com</code></pre>
        </div>

        <h3>Verify Object Exists</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Tosca TestStep — Verify Exists</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Module Attribute: Login_Button
  ActionMode: Verify
  Value:       Exists   ← confirms element is present on the page</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Buffer — Capturing &amp; Reusing Runtime Values</h2>
        <div class="ans-hero">Buffer stores a runtime value (generated Order ID, Customer ID, Reference Number) so it can be used in a later test step — without hardcoding.</div>

        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Create customer in UI</div><div class="step-desc">Fill form → submit → application generates Customer ID: CUST98765</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Buffer the generated ID</div><div class="step-desc">Module Attribute: Customer_ID_Label → ActionMode: Buffer → Buffer Name: Customer_ID</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Reuse in search</div><div class="step-desc">Search Page: Search_Field → ActionMode: Input → Value: {B[Customer_ID]}</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Verify in database or next screen</div><div class="step-desc">DB Module: SELECT * FROM customers WHERE id = '{B[Customer_ID]}' → Verify status = ACTIVE</div></div></div>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">Buffer Syntax Reference</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Store value:
  Order_Number_Label
    ActionMode:  Buffer
    Buffer Name: OrderID

Use stored value:
  Payment_Reference_Field
    ActionMode: Input
    Value:      {B[OrderID]}

Verify buffered value:
  Confirmation_Page_RefNo
    ActionMode: Verify
    Value:      {B[OrderID]}

Delete buffer (cleanup):
  TBox Delete Buffer
    Buffer Name: OrderID</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Reusable Modules — Enterprise Approach</h2>
        <div class="ans-hero">The power of Tosca is in reusability. Scan once → use in hundreds of test cases. Update once → all test cases fixed automatically.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">Enterprise Reuse Pattern</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Login_Module (scanned once)
  |
  +-- Used by: Smoke Test Suite (5 test cases)
  +-- Used by: Regression Suite (200 test cases)
  +-- Used by: End-to-End Suite (50 test cases)
  +-- Used by: Performance Baseline Tests (10 test cases)

When Login button ID changes:
  → Re-scan Login_Module once
  → All 265 test cases work again — zero manual edits</code></pre>
        </div>

        <h3>Advanced XScan Topics to Master</h3>
        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-eye"></i></div>
            <div class="bm-title">XScan Classic</div>
            <div class="bm-count">Standard web/desktop scanning</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-cpu"></i></div>
            <div class="bm-title">XScan Vision AI</div>
            <div class="bm-count">AI-based visual identification</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-layers"></i></div>
            <div class="bm-title">TestStepBlocks</div>
            <div class="bm-count">Reusable step sequences</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-arrow-repeat"></i></div>
            <div class="bm-title">Recovery Scenarios</div>
            <div class="bm-count">Handle unexpected popups</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-database"></i></div>
            <div class="bm-title">DB + API Testing</div>
            <div class="bm-count">End-to-end validation</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-gear"></i></div>
            <div class="bm-title">CI/CD Integration</div>
            <div class="bm-count">Jenkins / Azure DevOps</div>
          </div>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'easy',
        q: "What is XScan in Tosca and why is it used?",
        a: `<div class="ans-hero">XScan is Tosca's component for identifying and scanning application objects. It creates reusable Modules containing UI controls, identification properties, and steering parameters — without writing any code.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Application</div><div class="step-desc">Open the live app (e.g. Login page: Username, Password, Login Button)</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">XScan Identifies Objects</div><div class="step-desc">Hover over elements, Tosca reads their ID, Name, Class, Text properties</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Creates Module</div><div class="step-desc">Login_Module → Username, Password, Login Button attributes automatically created</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Use in TestCase</div><div class="step-desc">Drag attributes into test case, set values and ActionModes, execute</div></div></div>
        </div>`
      },
      {
        difficulty: 'easy',
        q: "What is a Module in Tosca and what are Module Attributes?",
        a: `<div class="ans-hero">A Module is the technical representation of a UI screen in Tosca. Module Attributes are the individual UI elements (fields, buttons) captured inside it.</div>
        <div class="definition-card"><div class="definition-term">Analogy</div><div class="definition-body">Tosca Module = Selenium Page Object class<br>Module Attribute = @FindBy locator inside the Page Object<br><br>Difference: Module Attributes are created by XScan (no code), not by hand-writing locators.</div></div>`
      },
      {
        difficulty: 'medium',
        q: "XScan identifies the wrong button — two buttons have the same 'Submit' text. How do you fix this?",
        a: `<div class="ans-hero">Remove the ambiguous property (Text = Submit) and add unique properties (ID, Automation ID, or Anchor) to distinguish the two buttons.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Before — Multiple Matches</h6>Class = Button<br>Text = Submit<br><br>Matches BOTH submit buttons. Tosca picks the first one — wrong element clicked.</div>
          <div class="compare-card green"><h6>After — Unique Match</h6>ID = btnSubmit_Order<br>Name = SubmitOrder<br><br>Only one element matches. Reliable every execution.</div>
        </div>
        <div class="info-panel tip"><div class="panel-title">Anchor alternative</div><p>If unique properties don't exist, set an Anchor: a nearby stable label (e.g. "Order Total" label) that only appears near the correct button. Tosca finds the anchor first, then the button relative to it.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "Explain the XScan process step by step for scanning a web application login page.",
        a: `<div class="ans-hero">XScan scans a live application page and automatically creates Module Attributes — no manual locator writing needed.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Open Tosca Commander → Modules section</div><div class="step-desc">Right Click → Scan → XScan. Select "Web" as the application type.</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Browser opens with scanning overlay</div><div class="step-desc">Navigate to the login page. Hover over elements to see them highlighted.</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Click each required object</div><div class="step-desc">Click: Username textbox, Password textbox, Login button. Each click captures that element's properties.</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Click "Create Module"</div><div class="step-desc">Tosca creates Login_Module with all selected attributes. Save the module.</div></div></div>
          <div class="step-item"><div class="step-num">5</div><div class="step-content"><div class="step-title">Set ActionModes per attribute</div><div class="step-desc">Username → Input, Password → Input, Login Button → Click, Welcome Msg → Verify.</div></div></div>
        </div>`
      },
      {
        difficulty: 'medium',
        q: "What is the difference between Input, Verify, Buffer, and Click ActionModes?",
        a: `<table class="comparison-table">
          <thead><tr><th>ActionMode</th><th>Purpose</th><th>Real Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Input</strong></td><td>Enter text or value into a field</td><td>Username: Input → "karan@bankapp.com"</td></tr>
            <tr><td><strong>Click</strong></td><td>Perform a click action</td><td>Login Button: Click (no value needed)</td></tr>
            <tr><td><strong>Verify</strong></td><td>Assert element shows expected value</td><td>Welcome Message: Verify → "Welcome, Karan"</td></tr>
            <tr><td><strong>Buffer</strong></td><td>Read &amp; store runtime value for later reuse</td><td>Order ID: Buffer → {B[OrderID]}</td></tr>
            <tr><td><strong>Select</strong></td><td>Choose a dropdown option</td><td>Transfer Type: Select → "NEFT"</td></tr>
            <tr><td><strong>Wait</strong></td><td>Pause until element reaches a state</td><td>Loading Spinner: Wait → disappears</td></tr>
          </tbody>
        </table>
        <div class="info-panel tip"><div class="panel-title">Verify Exists</div><p>To confirm an element is present on the page without checking its value: ActionMode = Verify, Value = <code>Exists</code></p></div>`
      },
      {
        difficulty: 'medium',
        q: "How do you handle elements with dynamic IDs in Tosca (ID changes every execution)?",
        a: `<div class="ans-hero">Use Tosca wildcards in the identification property value — match the stable prefix/suffix and let the dynamic part be covered by a wildcard.</div>
        <div class="definition-card">
          <div class="definition-term">Scenario</div>
          <div class="definition-body">
            Execution 1: id=user_12345<br>
            Execution 2: id=user_67890<br>
            Execution 3: id=user_99001<br>
            The prefix "user_" is always present.
          </div>
        </div>
        <table class="comparison-table">
          <thead><tr><th>Wildcard</th><th>Syntax</th><th>Matches</th></tr></thead>
          <tbody>
            <tr><td>Star wildcard</td><td>id = user_*</td><td>user_12345, user_67890, user_anything</td></tr>
            <tr><td>Contains</td><td>id Contains user</td><td>Any ID containing "user"</td></tr>
            <tr><td>Question mark</td><td>id = User?</td><td>User1, User2, UserA (single char only)</td></tr>
          </tbody>
        </table>
        <div class="info-panel tip"><div class="panel-title">Best fix</div><p>Ask the developer to add a static <code>data-testid</code> attribute. Tosca reads it as Automation ID — never changes, no wildcard needed.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "What is an Anchor in Tosca and when do you use it?",
        a: `<div class="ans-hero">An Anchor is a nearby stable element used as a reference point to uniquely identify an ambiguous object — especially when two identical controls appear on the same page.</div>
        <div class="definition-card">
          <div class="definition-term">Classic Scenario</div>
          <div class="definition-body">
            Page: &nbsp;"Customer Name" [Label] → [Textbox]<br>
            Page: &nbsp;"Address" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Label] → [Textbox]<br><br>
            Both textboxes are identical. Without anchor, Tosca picks the first one always.
          </div>
        </div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Set Anchor = "Customer Name" label</div><div class="step-desc">The label is unique on the page — only one element has text "Customer Name"</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Tosca finds anchor first</div><div class="step-desc">Locates "Customer Name" label reliably</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Finds textbox relative to anchor</div><div class="step-desc">Picks the textbox immediately to the right of (or below) the anchor element</div></div></div>
        </div>`
      },
      {
        difficulty: 'hard',
        q: "How do you design a complete Tosca Login TestCase using XScan modules?",
        a: `<div class="ans-hero">Scan the login page with XScan → create Login_Module → create a TestCase that uses the module attributes with appropriate ActionModes and values.</div>
        <div class="code-block"><code>Login TestCase
|
|-- Open_Browser
|      ActionMode: Navigate
|      Value:      https://bankapp.com/login
|
|-- Username
|      ActionMode: Input
|      Value:      admin@bankapp.com
|
|-- Password
|      ActionMode: Input
|      Value:      Secure@1234
|
|-- Login_Button
|      ActionMode: Click
|
|-- Dashboard_Header
|      ActionMode: Verify
|      Value:      Welcome, Admin</code></div>
        <div class="info-panel tip"><div class="panel-title">Reusability</div><p>Wrap these steps in a TestStepBlock called "Login_Block". Any test case that needs a logged-in state simply calls Login_Block — one step instead of five. When the login flow changes, update only Login_Block.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "How do you capture a dynamically generated Order ID and reuse it in a later test step?",
        a: `<div class="ans-hero">Use ActionMode: Buffer to capture the generated value into a named buffer, then reference it with {B[BufferName]} in subsequent steps.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">After order submission — buffer the ID</div><div class="step-desc">Order_Number_Label → ActionMode: Buffer → Buffer Name: OrderID<br>Tosca reads the label text and stores it.</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Use in payment step</div><div class="step-desc">Payment_Reference_Field → ActionMode: Input → Value: {B[OrderID]}</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Verify on confirmation page</div><div class="step-desc">Confirmation_RefNo → ActionMode: Verify → Value: {B[OrderID]}</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Verify in database (optional)</div><div class="step-desc">DB Module: SELECT status FROM orders WHERE id = '{B[OrderID]}' → Verify: COMPLETED</div></div></div>
        </div>`
      },
      {
        difficulty: 'hard',
        q: "XScan cannot identify an element on the page. What do you do?",
        a: `<div class="ans-hero">Work through a systematic checklist — visibility, technology, properties, anchor — before escalating to advanced techniques.</div>
        <ul class="ans-list green">
          <li><span class="icon">1</span><strong>Check visibility:</strong> Is the element scrolled out of view or hidden behind a modal? Scroll to it first.</li>
          <li><span class="icon">2</span><strong>Check technology:</strong> Is the correct engine selected? Web page inside an iframe needs "iframe" engine, not plain HTML.</li>
          <li><span class="icon">3</span><strong>Check unique properties:</strong> Remove unstable properties (auto-generated IDs), add stable ones (data-testid, name attribute).</li>
          <li><span class="icon">4</span><strong>Use Anchor:</strong> A stable nearby element (label, heading) can be used as a reference point to identify the ambiguous element.</li>
          <li><span class="icon">5</span><strong>Dynamic attributes:</strong> Use wildcard (user_*) if the ID has a stable prefix but a dynamic suffix.</li>
          <li><span class="icon">6</span><strong>Shadow DOM / iframe:</strong> Enable the appropriate browser engine setting and scan the container first, then the inner element.</li>
          <li><span class="icon">7</span><strong>Re-scan after page load:</strong> Some elements only appear after a user action (click, hover). Trigger the action, then scan.</li>
        </ul>`
      },
      {
        difficulty: 'hard',
        q: "A developer changed the UI and 500 test cases are now failing. How does Tosca's Module architecture solve this faster than Selenium?",
        a: `<div class="ans-hero">In Tosca, all 500 test cases reference a shared Module. Fix the Module once (re-scan the changed element) → all 500 test cases work again automatically.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Selenium</h6>Each of 500 test scripts contains locators directly. Find every occurrence of the changed locator. Update each script. Risk of missing some. Time: hours or days.</div>
          <div class="compare-card green"><h6>Tosca Modules</h6>Open the affected Module → re-scan the changed element → Module Attribute updates. All 500 test cases that use this attribute are automatically fixed. Time: minutes.</div>
        </div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Run one failed test → note which Module fails</div><div class="step-desc">Error points to "LoginPage Module → Login_Button attribute"</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Open Module → re-scan the broken attribute</div><div class="step-desc">Right-click Login_Button → Rescan → XScan highlights new button on page → confirm → save</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">All 500 test cases fixed</div><div class="step-desc">No test case edits needed. This is the MBTA advantage.</div></div></div>
        </div>`
      }
    ]
  },

  // ── 4. Test Case Design ───────────────────────────────────────
  {
    id: 'tosca-testcase-design',
    title: 'Test Case Design',
    section: 'tosca',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'Creating test cases, test step design, reusable test case templates, parameterization, and test case types.',
    content: `
      <div class="topic-section">
        <h2>Test Case Structure</h2>
        <div class="ans-hero">A Tosca Test Case is a sequence of steps built by dragging Module Attributes into the test designer. Each step has an Action Mode and a Value — no code, just configuration.</div>

        <h3>Creating a Banking Login Test Case</h3>
        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">TestCase Designer → Add Test Steps</div>
              <div class="step-desc">Right-click Test Cases folder → New Test Case. Drag Module Attributes from LoginPage Module into the test steps area.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Step: Open URL</div>
              <div class="step-desc">Module: Browser Module → Attribute: URL → ActionMode: Input → Value: https://bankapp.com/login</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Step: Enter Username</div>
              <div class="step-desc">Module: LoginPage → Attribute: Username Field → ActionMode: Input → Value: karan@bankapp.com</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Step: Enter Password</div>
              <div class="step-desc">Module: LoginPage → Attribute: Password Field → ActionMode: Input → Value: Secure@1234</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-content">
              <div class="step-title">Step: Click Login</div>
              <div class="step-desc">Module: LoginPage → Attribute: Login Button → ActionMode: Click</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">6</div>
            <div class="step-content">
              <div class="step-title">Step: Verify Dashboard</div>
              <div class="step-desc">Module: DashboardPage → Attribute: Welcome Message → ActionMode: Verify → Value: Welcome, Karan</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Test Case Types</h2>
        <table class="comparison-table">
          <thead><tr><th>Type</th><th>Description</th><th>When to use</th></tr></thead>
          <tbody>
            <tr><td><strong>Automated Test Case</strong></td><td>Executed by Tosca Executor automatically</td><td>Regression, smoke, data-driven tests</td></tr>
            <tr><td><strong>Manual Test Case</strong></td><td>Contains steps for human execution with pass/fail checkboxes</td><td>Exploratory, visual, usability testing</td></tr>
            <tr><td><strong>Template Test Case</strong></td><td>Reusable test building block — like a function</td><td>Common flows: Login, Logout, Navigation. Referenced by many test cases.</td></tr>
            <tr><td><strong>Test Configuration</strong></td><td>Combines a template with a specific data variant</td><td>Run same login template with 5 different user types</td></tr>
          </tbody>
        </table>

        <h3>Reusable Test Case Templates</h3>
        <div class="definition-card">
          <div class="definition-term">Why Use Templates?</div>
          <div class="definition-body">
            <strong>Problem:</strong> 50 test cases all start with a login flow. If the login URL changes, you'd update 50 test cases.<br><br>
            <strong>Solution:</strong> Create a "Login" Template Test Case. All 50 test cases reference the template. URL changes → update the template once → all 50 auto-fixed.<br><br>
            <strong>Equivalent:</strong> Like a @BeforeMethod in TestNG that all tests share, but defined visually as a reusable template.
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Parameterization in Tosca</h2>
        <table class="comparison-table">
          <thead><tr><th>Method</th><th>Syntax</th><th>Use Case</th></tr></thead>
          <tbody>
            <tr><td><strong>Literal value</strong></td><td>karan@bankapp.com</td><td>Simple static test data</td></tr>
            <tr><td><strong>Buffer</strong></td><td>{B[OrderID]}</td><td>Dynamic values captured during execution and reused in later steps</td></tr>
            <tr><td><strong>Business Parameter</strong></td><td>{EP[Env.BaseURL]}</td><td>Environment config (URLs, credentials) that differs between UAT/Prod</td></tr>
            <tr><td><strong>TDM (Test Data Mgmt)</strong></td><td>Linked Excel/DB row</td><td>Data-driven: run same test with 10 user records from spreadsheet</td></tr>
            <tr><td><strong>Special values</strong></td><td>{EMPTY}, {SPACE}</td><td>Testing blank/space input validation</td></tr>
          </tbody>
        </table>

        <div class="info-panel tip"><div class="panel-title">Buffer Example — Fund Transfer</div><p>Step 1: Submit fund transfer → Buffer the generated reference number: <strong>{B[RefNum]}</strong><br>Step 2: Open transaction history → Verify reference number equals <strong>{B[RefNum]}</strong><br>This links steps without hard-coding the dynamic value.</p></div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What is a Template Test Case in Tosca and why would you use one?",
        a: `<div class="ans-hero">A Template Test Case is a reusable test block (like a function) that other test cases can reference. It keeps common flows — login, navigation, logout — in one place.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Without Template</h6>50 test cases each contain the full login flow. Login URL changes → update 50 test cases. High maintenance.</div>
          <div class="compare-card green"><h6>With Template</h6>1 "Login" template. 50 test cases reference it. Login URL changes → update template once → all 50 fixed instantly.</div>
        </div>`
      },
      {
        difficulty: 'medium',
        q: "How does parameterization work in Tosca? Explain Buffer vs Business Parameters.",
        a: `<div class="ans-hero">Tosca has multiple parameterization mechanisms — Buffer for runtime-captured values, Business Parameters for environment config.</div>
        <table class="comparison-table">
          <thead><tr><th>Mechanism</th><th>When to use</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Buffer {B[name]}</strong></td><td>Capture a value during execution and reuse it later in the same run</td><td>Capture generated order ID → verify it in order history</td></tr>
            <tr><td><strong>Business Parameter {EP[set.param]}</strong></td><td>Environment-specific values set before execution</td><td>{EP[UAT.BaseURL]} vs {EP[Prod.BaseURL]} — switch without editing test cases</td></tr>
            <tr><td><strong>TDM</strong></td><td>Run same test with multiple data rows from Excel/DB</td><td>Login test with 10 different username/password combinations</td></tr>
          </tbody>
        </table>`
      }
    ]
  },

  // ── 5. Test Data Management ───────────────────────────────────
  {
    id: 'tosca-tdm',
    title: 'Test Data Management (TDM)',
    section: 'tosca',
    difficulty: 'hard',
    time: '25 min',
    shortDesc: 'Tosca TDM — centralized test data provisioning, business flows, data masking, and connecting external data sources.',
    content: `
      <div class="topic-section">
        <h2>What is TDM in Tosca?</h2>
        <div class="ans-hero">TDM (Test Data Management) is Tosca's enterprise module for creating, managing, and provisioning test data at scale. It separates test data from test logic and allows teams to define data as "business flows".</div>

        <img src="images/tosca/tdm-business-flow.jpeg" alt="Tosca TDM — Business Flow Designer showing test data subsets" class="notion-img" />

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">TDM Repository</div>
              <div class="step-desc">Central database storing all test data objects. Connected to Tosca Commander via DB-Connection. Shared across the entire team.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Business Flows</div>
              <div class="step-desc">Define how data is created for a test scenario. Example: "Open URL → Login → Navigate to Business Flow" — each step gets data from TDM subsets.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Data Subsets</div>
              <div class="step-desc">Filtered views of test data. Example: "Active Tenant - Dev Environment" vs "Expired Tenant - Dev Environment". Tests use specific subsets for targeted scenarios.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">RTSB Connection (Real-Time Sync Back)</div>
              <div class="step-desc">Links TDM data to the actual application under test. Ensures test data reflects real application state — critical for banking or financial apps where data must be consistent.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Data Management Approaches</h2>
        <table class="comparison-table">
          <thead><tr><th>Approach</th><th>How it works</th><th>Best for</th></tr></thead>
          <tbody>
            <tr><td><strong>Literal Values</strong></td><td>Data typed directly into test step value field</td><td>Simple, one-off test cases. Quick to set up.</td></tr>
            <tr><td><strong>Buffer {B[name]}</strong></td><td>Capture value at runtime, reuse in later steps of same execution</td><td>Dynamic values: generated IDs, timestamps, reference numbers</td></tr>
            <tr><td><strong>Business Parameters</strong></td><td>Pre-defined parameter sets per environment (UAT, Staging, Prod)</td><td>Environment config: URLs, credentials, API keys</td></tr>
            <tr><td><strong>Excel/CSV via TDM</strong></td><td>Link external spreadsheet, each row = one test execution iteration</td><td>Data-driven regression: 50 user records, 20 product combinations</td></tr>
            <tr><td><strong>Database via TDM</strong></td><td>SQL query feeds data directly into test case parameters</td><td>Real-time data from application DB for banking, insurance tests</td></tr>
            <tr><td><strong>TDM Business Flows</strong></td><td>Define data creation workflow with subsets and RTSB connections</td><td>Complex enterprise scenarios where data must be in a specific state</td></tr>
          </tbody>
        </table>

        <h3>Banking Application Data Strategy</h3>
        <div class="definition-card">
          <div class="definition-term">Example: Fund Transfer Test Data</div>
          <div class="definition-body">
            <strong>Business Parameter:</strong> {EP[UAT.BankURL]} = https://uat.bankapp.com<br>
            <strong>TDM Subset "Valid Sender":</strong> Account with balance &gt; ₹10,000, active status<br>
            <strong>TDM Subset "Valid Receiver":</strong> Active beneficiary account<br>
            <strong>Buffer:</strong> {B[TransferRefNo]} = captured after submit, verified in statement<br><br>
            The test case references subsets — not hardcoded values. If UAT DB is refreshed, TDM pulls fresh data automatically.
          </div>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How does Tosca TDM differ from simply using an Excel file for test data?",
        a: `<div class="ans-hero">TDM is a full platform for data lifecycle management — not just a spreadsheet. It handles data creation, masking, provisioning, and synchronization with the application state.</div>
        <table class="comparison-table">
          <thead><tr><th>Excel Data</th><th>Tosca TDM</th></tr></thead>
          <tbody>
            <tr><td>Static rows — data stale after app reset</td><td>RTSB syncs data with live application state</td></tr>
            <tr><td>Manual data creation</td><td>Business Flows automate data provisioning</td></tr>
            <tr><td>No masking — real PII visible</td><td>Data masking for GDPR/PCI compliance</td></tr>
            <tr><td>Shared file — concurrency conflicts</td><td>Centralized repository — team access with locking</td></tr>
            <tr><td>Can't query DB directly</td><td>SQL-connected subsets pull live data from DB</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'medium',
        q: "Explain Buffer vs Business Parameters with a real banking example.",
        a: `<div class="ans-hero">Buffer stores values captured DURING a test run (dynamic). Business Parameters store values SET BEFORE execution (configuration).</div>
        <div class="compare-grid">
          <div class="compare-card blue"><h6>Buffer {B[RefNo]}</h6><strong>When:</strong> During execution<br><strong>Example:</strong> Submit fund transfer → reference number generated → store as {B[RefNo]} → go to statement → verify {B[RefNo]} appears<br><strong>Scope:</strong> One execution run</div>
          <div class="compare-card green"><h6>Business Parameter {EP[UAT.URL]}</h6><strong>When:</strong> Before execution, set per environment<br><strong>Example:</strong> {EP[UAT.BaseURL]} = https://uat.bank.com — switch to Prod by changing parameter set, not test cases<br><strong>Scope:</strong> Across all test cases</div>
        </div>`
      }
    ]
  },

  // ── 6. Execution & Reporting ──────────────────────────────────
  {
    id: 'tosca-execution',
    title: 'Execution Lists & Reporting',
    section: 'tosca',
    difficulty: 'medium',
    time: '20 min',
    shortDesc: 'Organizing tests into Execution Lists, running suites, reading execution results, and Tosca report types.',
    content: `
      <div class="topic-section">
        <h2>Execution Lists</h2>
        <div class="ans-hero">An Execution List is a container that organizes test cases for a specific run — like a test suite in TestNG or a testng.xml. You define what runs, in what order, and with what configuration.</div>

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Create Execution List</div>
              <div class="step-desc">In Tosca Commander → Execution section → New Execution List. Give it a name: "Banking Regression Suite", "Smoke Tests", "API Tests".</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Add Test Cases</div>
              <div class="step-desc">Drag and drop test cases from the Test Cases workspace into the Execution List. Group them into ExecutionEntries (folders) for organization.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Configure Execution Settings</div>
              <div class="step-desc">Set Business Parameter set (UAT/Prod), agent assignment, parallel vs sequential, and screenshot behavior.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Run Execution List</div>
              <div class="step-desc">Click Run → Tosca Executor launches. Each test case runs. Results shown in real-time with pass (green) / fail (red) / not executed (grey) status per step.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-content">
              <div class="step-title">Analyze Results</div>
              <div class="step-desc">Failed test cases show the exact step that failed with error message and screenshot. Expand the step to see actual vs expected value.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Tosca Reports</h2>
        <table class="comparison-table">
          <thead><tr><th>Report Type</th><th>Content</th><th>Audience</th></tr></thead>
          <tbody>
            <tr><td><strong>Execution Report</strong></td><td>Step-by-step pass/fail for each test case. Screenshots on failure. Actual vs expected values.</td><td>QA Engineers — debugging failures</td></tr>
            <tr><td><strong>Coverage Report</strong></td><td>Which requirements are covered by test cases. Coverage % per feature area.</td><td>Test Managers — reporting to stakeholders</td></tr>
            <tr><td><strong>Defect Report</strong></td><td>Failed test cases with defect linkage to Jira/ALM. Grouped by failure reason.</td><td>Dev teams — fixing issues</td></tr>
            <tr><td><strong>Analytics Dashboard</strong></td><td>Trend charts: pass rate over time, execution duration, flaky tests, risk coverage</td><td>QA Leads — quality health monitoring</td></tr>
            <tr><td><strong>Email Report</strong></td><td>HTML summary of execution results — auto-sent after CI run</td><td>Management / stakeholders</td></tr>
          </tbody>
        </table>

        <div class="info-panel tip"><div class="panel-title">Re-running Failed Tests</div><p>After an execution, select all failed test cases in the Execution List → right-click → "Reset to Initial" → Run again. This re-runs only failed tests without touching passed ones — saves time on large regression suites.</p></div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What is an Execution List in Tosca and how do you organize a regression suite?",
        a: `<div class="ans-hero">An Execution List is a container for test cases that defines a test run — like a testng.xml. You organize tests into ExecutionEntries (sub-folders) by feature or priority.</div>
        <div class="definition-card"><div class="definition-term">Banking Regression Execution List Structure</div><div class="definition-body">Banking Regression Suite<br>├── Smoke Tests<br>│   ├── TC_Login_Valid<br>│   └── TC_Dashboard_Load<br>├── Fund Transfer Tests<br>│   ├── TC_NEFT_Success<br>│   ├── TC_NEFT_InsufficientBalance<br>│   └── TC_IMPS_Success<br>└── Security Tests<br>    ├── TC_AccountLockout<br>    └── TC_SessionTimeout</div></div>`
      }
    ]
  },

  // ── 7. Advanced Concepts ──────────────────────────────────────
  {
    id: 'tosca-advanced-concepts',
    title: 'Advanced Tosca Concepts',
    section: 'tosca',
    difficulty: 'hard',
    time: '35 min',
    shortDesc: 'Recovery Scenarios, dynamic objects, synchronization techniques, API testing with Tosca, and database validation.',
    content: `
      <div class="topic-section">
        <h2>Recovery Scenarios</h2>
        <div class="ans-hero">Recovery Scenarios handle unexpected UI states during test execution — pop-ups, session timeouts, error dialogs — so tests continue instead of failing due to environmental issues.</div>

        <h3>Recovery Scenario Types</h3>
        <table class="comparison-table">
          <thead><tr><th>Type</th><th>When it runs</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Prelude</strong></td><td>Before every test case execution</td><td>Clear cookies, close lingering dialogs, navigate to base URL</td></tr>
            <tr><td><strong>Postlude</strong></td><td>After every test case (pass or fail)</td><td>Logout, close browser, cleanup created test data</td></tr>
            <tr><td><strong>Recovery (mid-execution)</strong></td><td>When an unexpected element appears during test run</td><td>Session timeout popup → click "Continue" → resume test</td></tr>
          </tbody>
        </table>

        <div class="definition-card">
          <div class="definition-term">Real-World Recovery Example — Banking App</div>
          <div class="definition-body">
            <strong>Scenario:</strong> During fund transfer test, a "Your session expired. Please login again." dialog appears unexpectedly.<br><br>
            <strong>Without Recovery:</strong> Test fails on the next step because the expected element (Transfer confirmation) is not visible.<br><br>
            <strong>With Recovery Scenario:</strong><br>
            1. Tosca detects the session-timeout dialog (it has a Module created for this dialog)<br>
            2. Recovery fires → clicks "OK" on the dialog<br>
            3. Recovery re-logs in using Business Parameters (credentials)<br>
            4. Returns to the Transfer page<br>
            5. Test continues from where it was interrupted
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Handling Dynamic Objects</h2>
        <div class="ans-hero">Dynamic elements (changing IDs, auto-generated rows, timestamps) require special handling in Tosca — using flexible identification properties instead of fixed values.</div>

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Avoid ID-only identification</div>
              <div class="step-desc">If an element's ID is auto-generated (e.g., "field_82734"), don't use ID alone. Use combination: Name + CSS class + parent element anchor.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Use Anchor-based identification</div>
              <div class="step-desc">Identify the element relative to a stable neighbour. Example: "The input field immediately after the 'Amount' label" — more resilient to ID changes.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Use {WILDCARD} or {REGEX} in Verify steps</div>
              <div class="step-desc">When verifying dynamic text like "Order #12345 placed", use: {REGEX}Order #\d+ placed — matches any order number without hardcoding.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Buffer the dynamic value</div>
              <div class="step-desc">If a dynamic value appears in step 3 and must be verified in step 10, Buffer it: step 3 → ActionMode: Buffer → {B[GenOrderID]} → step 10 → Verify → {B[GenOrderID]}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Synchronization — Handling Slow Applications</h2>
        <table class="comparison-table">
          <thead><tr><th>Technique</th><th>How</th><th>Use Case</th></tr></thead>
          <tbody>
            <tr><td><strong>Implicit Wait (global)</strong></td><td>Set in Tosca Engine settings — max wait time before element not found error</td><td>Default for all steps. Set 10-15 seconds for banking apps.</td></tr>
            <tr><td><strong>Wait Module Attribute</strong></td><td>Drag a module attribute → ActionMode: Wait → specify wait condition (visible, enabled, text)</td><td>After clicking "Transfer" — wait until "Processing..." spinner disappears</td></tr>
            <tr><td><strong>Synchronization Point</strong></td><td>Add explicit synchronization steps between slow operations</td><td>API call takes 3-5 seconds → sync point ensures UI has updated before verify</td></tr>
            <tr><td><strong>Recovery Scenario as wait</strong></td><td>Recovery monitors for a "Loading" overlay and waits for it to vanish</td><td>App shows full-screen loader — recovery handles it globally without per-test waits</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>API Testing in Tosca</h2>
        <div class="ans-hero">Tosca's API Engine lets you create, send, and verify REST/SOAP API calls without code — and chain them with UI tests for true end-to-end automation.</div>

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Create API Module via API Scan</div>
              <div class="step-desc">In Modules → New Module → Type: API. Enter endpoint URL, HTTP method (GET/POST/PUT/DELETE), headers (Content-Type: application/json, Authorization: Bearer token).</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Define Request Body Attributes</div>
              <div class="step-desc">Add request body fields as Module Attributes with ActionMode: Input. Example: "amount" field → Input → 5000</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Define Response Verification Attributes</div>
              <div class="step-desc">Add response fields as Module Attributes with ActionMode: Verify. Example: "status" → Verify → "SUCCESS", "httpStatusCode" → Verify → 200</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Chain with UI test using Buffer</div>
              <div class="step-desc">API step: POST /transfer → Buffer response "referenceNumber" as {B[RefNo]}. UI step: Open statement page → Verify reference number = {B[RefNo]}. True end-to-end.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Database Testing in Tosca</h2>
        <div class="definition-card">
          <div class="definition-term">Database Validation — Banking Example</div>
          <div class="definition-body">
            <strong>Scenario:</strong> Verify that a fund transfer updates the DB correctly.<br><br>
            1. UI test: Submit fund transfer of ₹5,000 from Account A to Account B<br>
            2. DB Module: Execute SQL: <code>SELECT balance FROM accounts WHERE id = 'A'</code><br>
            3. Verify: balance = originalBalance - 5000<br>
            4. DB Module: Execute SQL: <code>SELECT * FROM transactions WHERE ref_no = '{B[RefNo]}'</code><br>
            5. Verify: transaction record exists with correct amount, status = "COMPLETED"<br><br>
            <strong>Setup:</strong> Tosca DB Module → configure JDBC connection string → write SQL query → add result columns as Verify Module Attributes.
          </div>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "What are Recovery Scenarios in Tosca? Give a banking application example.",
        a: `<div class="ans-hero">Recovery Scenarios are Tosca's mechanism for handling unexpected UI states (popups, session timeouts) during execution — preventing environment noise from causing test failures.</div>
        <table class="comparison-table">
          <thead><tr><th>Recovery Type</th><th>Purpose</th><th>Banking Example</th></tr></thead>
          <tbody>
            <tr><td>Prelude</td><td>Runs before each test case</td><td>Clear browser cookies, navigate to base URL, close any leftover popups</td></tr>
            <tr><td>Postlude</td><td>Runs after each test case</td><td>Logout, close browser, delete test data created during run</td></tr>
            <tr><td>Recovery (mid-run)</td><td>Fires when unexpected element appears</td><td>Session timeout dialog → click OK → re-login → return to test flow</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'hard',
        q: "How do you test an API in Tosca and chain the result to a UI verification?",
        a: `<div class="ans-hero">Use Tosca's API Engine to create an API Module (no code), send the request, and Buffer the response value for use in subsequent UI steps.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">API Module → POST /fund-transfer</div><div class="step-desc">ActionMode Input: amount=5000, toAccount=9876, fromAccount=1234. Header: Authorization Bearer token.</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Verify response</div><div class="step-desc">ActionMode Verify: httpStatus=200, body.status="SUCCESS"</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Buffer reference number</div><div class="step-desc">ActionMode Buffer: body.referenceNumber → {B[RefNo]}</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">UI step: verify in statement</div><div class="step-desc">Open transaction history → find row → Verify reference number = {B[RefNo]}</div></div></div>
        </div>`
      },
      {
        difficulty: 'hard',
        q: "How do you handle dynamic elements in Tosca where IDs change on every page load?",
        a: `<div class="ans-hero">Avoid ID-only identification. Use multi-property identification, Anchor, WILDCARD/REGEX patterns, or Buffer to handle dynamic values.</div>
        <ul class="ans-list green">
          <li><span class="icon">✅</span><strong>Multi-property identification:</strong> Combine stable properties (Name + CSS class) instead of relying on a dynamic ID alone</li>
          <li><span class="icon">✅</span><strong>Anchor:</strong> Find element relative to a stable neighbour label — "input field after 'Amount' label"</li>
          <li><span class="icon">✅</span><strong>{REGEX} in Verify:</strong> <code>{REGEX}Order #\d+ placed</code> — matches any order number without hardcoding</li>
          <li><span class="icon">✅</span><strong>Buffer:</strong> Capture dynamic value in step 3 as {B[DynValue]}, verify it in step 10 — the buffer holds the exact value at runtime</li>
        </ul>`
      }
    ]
  },

  // ── 8. Tosca Cloud & Grid ─────────────────────────────────────
  {
    id: 'tosca-cloud',
    title: 'Tosca Cloud & Elastic Execution Grid',
    section: 'tosca',
    difficulty: 'hard',
    time: '25 min',
    shortDesc: 'Tosca Cloud architecture on Azure, Elastic Execution Grid, distributed execution with DEX agents, and CI/CD integration.',
    content: `
      <div class="topic-section">
        <h2>Tosca Elastic Execution Grid</h2>
        <div class="ans-hero">Tosca's Elastic Execution Grid uses Azure cloud agents (VMs) to run tests in parallel at massive scale — no need to maintain a physical test machine lab.</div>

        <img src="images/tosca/tosca-cloud-grid.jpeg" alt="Tosca Elastic Execution Grid — Azure Cloud Agents and Customer Environments" class="notion-img" />

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Azure — Tosca Elastic Execution Grid</div>
              <div class="step-desc">Cloud Agents provisioned as VMs on Azure. Tosca manages agent lifecycle — spin up for a test run, shut down after. Pay only for what you use.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Agent Connection (HTTPS/WSS)</div>
              <div class="step-desc">Cloud agents connect to the Tosca execution infrastructure via secure HTTPS/WSS. Agents register with the DEX server automatically.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Customer Execution Environment</div>
              <div class="step-desc">Team Agent(s) and Simulator connect to the System Under Test. Tests run against your actual application, not a sandbox.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">User Machines</div>
              <div class="step-desc">Tosca Commander on developer/tester machines manages everything via Agent Connection. Browser, Personal Agent, and Tosca Commander all route through the grid.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Tosca Cloud vs On-Premise Tosca</h2>
        <table class="comparison-table">
          <thead><tr><th>Feature</th><th>Tosca On-Premise</th><th>Tosca Cloud (Elastic Grid)</th></tr></thead>
          <tbody>
            <tr><td>Infrastructure</td><td>Company maintains machines</td><td>Azure VMs managed by Tricentis</td></tr>
            <tr><td>Scalability</td><td>Limited by physical machines</td><td>Elastic — scale to 100s of agents on demand</td></tr>
            <tr><td>Parallel execution</td><td>Fixed agent pool</td><td>Unlimited parallelism (cost-based)</td></tr>
            <tr><td>Maintenance</td><td>Team manages agent setup, updates</td><td>Tricentis manages infrastructure</td></tr>
            <tr><td>Cost model</td><td>One-time infra + license</td><td>Consumption-based (per execution minute)</td></tr>
            <tr><td>Data security</td><td>All data stays on-premise</td><td>Data flows through cloud — compliance considerations</td></tr>
          </tbody>
        </table>

        <div class="info-panel tip"><div class="panel-title">When to use Cloud Grid</div><p>Large regression suites (500+ tests) that need to finish in under 30 minutes. Cross-browser parallel runs (Chrome + Edge + Firefox simultaneously). Sprint-end regression before release.</p></div>
      </div>

      <div class="topic-section">
        <h2>CI/CD Integration</h2>
        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Developer commits code → Jenkins/Azure DevOps triggers pipeline</div>
              <div class="step-desc">CI server detects new commit or PR. Triggers Tosca execution via Tosca CI plugin or REST API call to Tosca Server.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">CI calls Tosca DEX to run Execution List</div>
              <div class="step-desc">Jenkins plugin: "Tricentis Continuous Integration" — points to Execution List name + Tosca Server URL. DEX distributes tests across agents.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Parallel execution on grid</div>
              <div class="step-desc">100 tests split across 10 agents = 10x faster. Each agent runs its batch independently.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Results back to CI pipeline</div>
              <div class="step-desc">JUnit XML results exported from Tosca. Jenkins reads them → marks build PASS/FAIL. Tosca Analytics dashboard shows trends over time.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-content">
              <div class="step-title">Email / Slack notification</div>
              <div class="step-desc">Auto-email with HTML execution report to team. Failed test cases linked to defects in Jira.</div>
            </div>
          </div>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How does Tosca integrate with Jenkins for CI/CD? Walk through the pipeline.",
        a: `<div class="ans-hero">Tosca integrates with Jenkins via the Tricentis CI plugin. Jenkins triggers Tosca DEX to run an Execution List, waits for results, and marks the build pass/fail based on JUnit XML output.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Install Tricentis CI plugin in Jenkins</div><div class="step-desc">Configure Tosca Server URL + credentials in Jenkins global settings</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Add Tosca step to Jenkinsfile</div><div class="step-desc">Specify Execution List name, configuration set, and result path</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Jenkins triggers DEX on commit</div><div class="step-desc">DEX distributes tests across available agents and runs them in parallel</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">JUnit XML results published</div><div class="step-desc">Jenkins reads Tosca JUnit output → marks build status → sends notification</div></div></div>
        </div>`
      },
      {
        difficulty: 'hard',
        q: "What is the Tosca Elastic Execution Grid and how does it reduce regression time?",
        a: `<div class="ans-hero">The Elastic Execution Grid provisions Azure VMs as Tosca agents on demand, distributes tests across them in parallel, and releases agents after the run — no maintained machine lab needed.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Without Grid</h6>500 regression tests × 1 agent × 2 min/test = 16.6 hours. Sequential execution. One machine failure = entire run fails.</div>
          <div class="compare-card green"><h6>With Elastic Grid (25 agents)</h6>500 tests ÷ 25 agents = 20 tests/agent × 2 min = 40 minutes. Elastic: agents auto-provisioned, auto-released after run.</div>
        </div>`
      }
    ]
  },

  // ── 9. Banking Application — Tosca Test Cases ─────────────────
  {
    id: 'tosca-banking-app',
    title: 'Banking App — Tosca Test Cases',
    section: 'tosca',
    difficulty: 'hard',
    time: '55 min',
    shortDesc: 'Complete Tosca automation for a banking application — module design, test cases for login, fund transfer, account, beneficiary, statement, and security flows.',
    content: `
      <div class="topic-section">
        <h2>Banking Application — Tosca Automation Design</h2>
        <div class="ans-hero">A banking application is a perfect Tosca use case — complex UI, SAP back-office, APIs, database validation, and security checks all combined in one enterprise project.</div>

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-shield-lock"></i></div>
            <div class="bm-title">Login &amp; Security</div>
            <div class="bm-count">6 test cases</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-arrow-left-right"></i></div>
            <div class="bm-title">Fund Transfer</div>
            <div class="bm-count">5 test cases</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-wallet2"></i></div>
            <div class="bm-title">Account Dashboard</div>
            <div class="bm-count">4 test cases</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-clock-history"></i></div>
            <div class="bm-title">Statements</div>
            <div class="bm-count">3 test cases</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-people"></i></div>
            <div class="bm-title">Beneficiary Mgmt</div>
            <div class="bm-count">4 test cases</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-person-gear"></i></div>
            <div class="bm-title">API + DB Validation</div>
            <div class="bm-count">3 test cases</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Tosca Workspace Structure — Banking Project</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Project Structure</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Tosca Workspace — BankingApp
│
├── Modules/
│   ├── Common/
│   │   └── BrowserModule        (Open URL, Close Browser)
│   ├── LoginPage/
│   │   ├── UsernameField        (Input)
│   │   ├── PasswordField        (Input)
│   │   ├── LoginButton          (Click)
│   │   └── ErrorMessage         (Verify)
│   ├── DashboardPage/
│   │   ├── WelcomeMessage       (Verify)
│   │   ├── AccountBalance       (Verify / Buffer)
│   │   ├── AccountNumber        (Verify / Buffer)
│   │   └── FundTransferButton   (Click)
│   ├── TransferPage/
│   │   ├── TransferTypeDropdown (Select)
│   │   ├── BeneficiaryAccount   (Input)
│   │   ├── AmountField          (Input)
│   │   ├── RemarksField         (Input)
│   │   ├── ProceedButton        (Click)
│   │   ├── OTPField             (Input)
│   │   ├── ConfirmButton        (Click)
│   │   ├── SuccessMessage       (Verify)
│   │   └── ReferenceNumber      (Verify / Buffer)
│   ├── BeneficiaryPage/
│   │   ├── AddBeneficiaryButton (Click)
│   │   ├── BeneficiaryName      (Input)
│   │   ├── AccountNumber        (Input)
│   │   ├── IFSCCode             (Input)
│   │   ├── SaveButton           (Click)
│   │   └── SuccessBanner        (Verify)
│   └── StatementPage/
│       ├── FromDate             (Input)
│       ├── ToDate               (Input)
│       ├── ApplyFilterButton    (Click)
│       ├── TransactionTable     (Verify)
│       └── DownloadButton       (Click)
│
├── Test Cases/
│   ├── Templates/
│   │   ├── TC_Template_Login    (reusable login flow)
│   │   └── TC_Template_Logout   (reusable logout)
│   ├── Login/
│   ├── Dashboard/
│   ├── FundTransfer/
│   ├── Beneficiary/
│   ├── Statement/
│   └── API_DB/
│
├── Business Parameters/
│   ├── UAT_Environment
│   │   ├── BaseURL = https://uat.bankapp.com
│   │   ├── AdminUser = admin@bankapp.com
│   │   └── AdminPass = Admin@UAT123
│   └── Prod_Environment
│       ├── BaseURL = https://bankapp.com
│       └── (credentials from vault)
│
└── Execution Lists/
    ├── BankingApp_Smoke
    ├── BankingApp_Regression
    └── BankingApp_Security</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>1. Login Test Cases</h2>

        <h3>TC_Login_ValidUser</h3>
        <table class="comparison-table">
          <thead><tr><th>Step</th><th>Module → Attribute</th><th>Action Mode</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>BrowserModule → URL</td><td>Input</td><td>{EP[UAT.BaseURL]}/login</td></tr>
            <tr><td>2</td><td>LoginPage → UsernameField</td><td>Input</td><td>{EP[UAT.AdminUser]}</td></tr>
            <tr><td>3</td><td>LoginPage → PasswordField</td><td>Input</td><td>{EP[UAT.AdminPass]}</td></tr>
            <tr><td>4</td><td>LoginPage → LoginButton</td><td>Click</td><td></td></tr>
            <tr><td>5</td><td>DashboardPage → WelcomeMessage</td><td>Verify</td><td>Welcome, Admin</td></tr>
            <tr><td>6</td><td>DashboardPage → AccountBalance</td><td>Verify (not empty)</td><td>{NOT_EMPTY}</td></tr>
          </tbody>
        </table>

        <h3>TC_Login_InvalidPassword</h3>
        <table class="comparison-table">
          <thead><tr><th>Step</th><th>Attribute</th><th>Action Mode</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>BrowserModule → URL</td><td>Input</td><td>{EP[UAT.BaseURL]}/login</td></tr>
            <tr><td>2</td><td>LoginPage → UsernameField</td><td>Input</td><td>karan@bankapp.com</td></tr>
            <tr><td>3</td><td>LoginPage → PasswordField</td><td>Input</td><td>WrongPass999</td></tr>
            <tr><td>4</td><td>LoginPage → LoginButton</td><td>Click</td><td></td></tr>
            <tr><td>5</td><td>LoginPage → ErrorMessage</td><td>Verify</td><td>Invalid username or password</td></tr>
          </tbody>
        </table>

        <h3>TC_Login_AccountLockout (3 failed attempts)</h3>
        <table class="comparison-table">
          <thead><tr><th>Step</th><th>Attribute</th><th>Action Mode</th><th>Value / Note</th></tr></thead>
          <tbody>
            <tr><td>1–4</td><td>Login with wrong password</td><td>Input / Click</td><td>Attempt 1</td></tr>
            <tr><td>5</td><td>LoginPage → LoginButton</td><td>Click</td><td>Refresh page</td></tr>
            <tr><td>6–9</td><td>Login with wrong password</td><td>Input / Click</td><td>Attempt 2</td></tr>
            <tr><td>10</td><td>LoginPage → LoginButton</td><td>Click</td><td>Refresh page</td></tr>
            <tr><td>11–14</td><td>Login with wrong password</td><td>Input / Click</td><td>Attempt 3</td></tr>
            <tr><td>15</td><td>LoginPage → ErrorMessage</td><td>Verify</td><td>Account is locked</td></tr>
            <tr><td>16</td><td>LoginPage → LoginButton</td><td>Verify (disabled)</td><td>{DISABLED}</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>2. Fund Transfer Test Cases</h2>

        <h3>TC_FundTransfer_NEFT_Success</h3>
        <table class="comparison-table">
          <thead><tr><th>Step</th><th>Attribute</th><th>Action Mode</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Reference: TC_Template_Login</td><td>—</td><td>(calls reusable login template)</td></tr>
            <tr><td>2</td><td>DashboardPage → AccountBalance</td><td>Buffer</td><td>{B[BalanceBefore]}</td></tr>
            <tr><td>3</td><td>DashboardPage → FundTransferButton</td><td>Click</td><td></td></tr>
            <tr><td>4</td><td>TransferPage → TransferTypeDropdown</td><td>Select</td><td>NEFT</td></tr>
            <tr><td>5</td><td>TransferPage → BeneficiaryAccount</td><td>Input</td><td>9876543210</td></tr>
            <tr><td>6</td><td>TransferPage → AmountField</td><td>Input</td><td>5000</td></tr>
            <tr><td>7</td><td>TransferPage → RemarksField</td><td>Input</td><td>Monthly Rent Payment</td></tr>
            <tr><td>8</td><td>TransferPage → ProceedButton</td><td>Click</td><td></td></tr>
            <tr><td>9</td><td>TransferPage → OTPField</td><td>Wait + Input</td><td>123456 (mock OTP)</td></tr>
            <tr><td>10</td><td>TransferPage → ConfirmButton</td><td>Click</td><td></td></tr>
            <tr><td>11</td><td>TransferPage → SuccessMessage</td><td>Verify</td><td>Transfer Successful</td></tr>
            <tr><td>12</td><td>TransferPage → ReferenceNumber</td><td>Buffer</td><td>{B[RefNo]}</td></tr>
            <tr><td>13</td><td>Navigate back to Dashboard</td><td></td><td></td></tr>
            <tr><td>14</td><td>DashboardPage → AccountBalance</td><td>Verify</td><td>{B[BalanceBefore]} - 5000</td></tr>
          </tbody>
        </table>

        <h3>TC_FundTransfer_InsufficientBalance</h3>
        <table class="comparison-table">
          <thead><tr><th>Step</th><th>Attribute</th><th>Action</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>TC_Template_Login</td><td>—</td><td>Login template</td></tr>
            <tr><td>2</td><td>DashboardPage → AccountBalance</td><td>Buffer</td><td>{B[Balance]}</td></tr>
            <tr><td>3</td><td>Navigate to Transfer</td><td></td><td></td></tr>
            <tr><td>4</td><td>TransferPage → AmountField</td><td>Input</td><td>9999999 (exceeds balance)</td></tr>
            <tr><td>5</td><td>TransferPage → ProceedButton</td><td>Click</td><td></td></tr>
            <tr><td>6</td><td>TransferPage → ErrorMessage</td><td>Verify</td><td>Insufficient balance</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>3. Beneficiary Management</h2>
        <h3>TC_AddBeneficiary_Success</h3>
        <table class="comparison-table">
          <thead><tr><th>Step</th><th>Attribute</th><th>Action Mode</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>TC_Template_Login</td><td>—</td><td></td></tr>
            <tr><td>2</td><td>Navigate to Beneficiary page</td><td></td><td></td></tr>
            <tr><td>3</td><td>BeneficiaryPage → AddBeneficiaryButton</td><td>Click</td><td></td></tr>
            <tr><td>4</td><td>BeneficiaryPage → BeneficiaryName</td><td>Input</td><td>Rahul Sharma</td></tr>
            <tr><td>5</td><td>BeneficiaryPage → AccountNumber</td><td>Input</td><td>5555666677778888</td></tr>
            <tr><td>6</td><td>BeneficiaryPage → IFSCCode</td><td>Input</td><td>HDFC0001234</td></tr>
            <tr><td>7</td><td>BeneficiaryPage → SaveButton</td><td>Click</td><td></td></tr>
            <tr><td>8</td><td>BeneficiaryPage → SuccessBanner</td><td>Verify</td><td>Beneficiary added successfully</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>4. API + DB Validation Test Cases</h2>
        <div class="info-panel tip"><div class="panel-title">End-to-End Validation Pattern</div><p>Tosca's strength in banking: trigger a UI action, validate the API response, then validate the database record — all in one unified test case without writing code.</p></div>

        <h3>TC_FundTransfer_API_DB_Validation</h3>
        <table class="comparison-table">
          <thead><tr><th>Step</th><th>Module Type</th><th>Action</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>1–12</td><td>UI: TC_FundTransfer_NEFT_Success steps</td><td>—</td><td>Reference number in {B[RefNo]}</td></tr>
            <tr><td>13</td><td>API Module: GET /transactions/{B[RefNo]}</td><td>Verify</td><td>status = "COMPLETED"</td></tr>
            <tr><td>14</td><td>API Module: response.amount</td><td>Verify</td><td>5000</td></tr>
            <tr><td>15</td><td>DB Module: SELECT status FROM transactions WHERE ref_no = '{B[RefNo]}'</td><td>Verify</td><td>COMPLETED</td></tr>
            <tr><td>16</td><td>DB Module: SELECT balance FROM accounts WHERE id = 'A'</td><td>Verify</td><td>{B[BalanceBefore]} - 5000</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>5. Execution Lists — Banking Regression</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Execution Structure</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Execution List: BankingApp_Regression
│
├── Configuration: UAT_Environment (Business Parameter Set)
├── Parallel: true  |  Thread Count: 4
│
├── ExecutionEntry: Smoke (runs on every PR)
│   ├── TC_Login_ValidUser
│   ├── TC_Dashboard_Load
│   └── TC_FundTransfer_NEFT_Success
│
├── ExecutionEntry: FundTransfer_Suite
│   ├── TC_FundTransfer_NEFT_Success
│   ├── TC_FundTransfer_IMPS_Success
│   ├── TC_FundTransfer_InsufficientBalance
│   ├── TC_FundTransfer_InvalidBeneficiary
│   └── TC_FundTransfer_API_DB_Validation
│
├── ExecutionEntry: Beneficiary_Suite
│   ├── TC_AddBeneficiary_Success
│   ├── TC_AddBeneficiary_Duplicate
│   └── TC_DeleteBeneficiary
│
└── ExecutionEntry: Security_Suite
    ├── TC_AccountLockout_3Attempts
    ├── TC_SessionTimeout
    └── TC_SQLInjection_Login</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How would you design Tosca modules for a banking fund transfer flow? What reuse patterns would you apply?",
        a: `<div class="ans-hero">Separate modules per page, create a reusable Login Template, use Business Parameters for environment URLs/credentials, and Buffer the reference number for multi-step validation.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Module per page</div><div class="step-desc">LoginPage Module, DashboardPage Module, TransferPage Module — each module has only the attributes needed for that page. One re-scan fixes all tests if UI changes.</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Login Template reused by all tests</div><div class="step-desc">TC_Template_Login referenced in every test case. Login flow changes → update once → all tests fixed.</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Buffer for dynamic reference number</div><div class="step-desc">After transfer submit → Buffer ReferenceNumber as {B[RefNo]} → use in statement verification, API validation, DB validation steps</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Business Parameters for environments</div><div class="step-desc">{EP[UAT.BaseURL]} vs {EP[Prod.BaseURL]} — run same test suite against different environments without editing test cases</div></div></div>
        </div>`
      },
      {
        difficulty: 'hard',
        q: "A banking app does end-to-end fund transfer. How do you validate: UI success, API response, and database record — all in one Tosca test case?",
        a: `<div class="ans-hero">Combine UI Module steps + API Module steps + DB Module steps in a single test case, linked by Buffer variables. Tosca's unified engine handles all three without code.</div>
        <table class="comparison-table">
          <thead><tr><th>Layer</th><th>Tosca Module Type</th><th>Validation</th></tr></thead>
          <tbody>
            <tr><td>UI</td><td>TransferPage Module (HTML engine)</td><td>SuccessMessage = "Transfer Successful", ReferenceNumber starts with TXN → Buffer as {B[RefNo]}</td></tr>
            <tr><td>API</td><td>API Module → GET /transactions/{B[RefNo]}</td><td>Verify: status = COMPLETED, amount = 5000, httpStatus = 200</td></tr>
            <tr><td>DB</td><td>DB Module → SQL query with {B[RefNo]}</td><td>Verify: transaction row exists, status = COMPLETED, sender_balance reduced by 5000</td></tr>
          </tbody>
        </table>
        <div class="info-panel tip"><div class="panel-title">Why Tosca excels here</div><p>All three layers in ONE test case, no code, and Buffer seamlessly passes the reference number between steps. In Selenium, this would require Java code for UI + Rest Assured for API + JDBC for DB — three separate concerns.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "How do you handle the OTP step in a banking fund transfer test case in Tosca?",
        a: `<div class="ans-hero">In test environments, OTP is a fixed/mock value configured in Business Parameters. For real environments, Tosca can call an internal API to retrieve the OTP and use Buffer to pass it to the input step.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Test environment: mock OTP</div><div class="step-desc">UAT environment is configured to accept a fixed OTP (e.g., 123456). Business Parameter: {EP[UAT.MockOTP]} = 123456. OTP step: Input → {EP[UAT.MockOTP]}</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">API-based OTP retrieval</div><div class="step-desc">After clicking Proceed: API Module step → GET /test-api/otp?user={EP[UAT.AdminUser]} → Buffer OTP as {B[OTPValue]} → OTPField → Input → {B[OTPValue]}</div></div></div>
        </div>`
      }
    ]
  }
];
