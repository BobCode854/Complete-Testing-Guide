// ================================================================
// PLAYWRIGHT DATA
// ================================================================
const PLAYWRIGHT_TOPICS = [

  // ── 1. Introduction ──────────────────────────────────────────
  {
    id: 'playwright-introduction',
    title: 'Playwright Introduction',
    section: 'playwright',
    difficulty: 'easy',
    time: '20 min',
    shortDesc: 'What is Playwright, why Microsoft built it, and how it compares to Selenium and Cypress.',
    content: `
      <div class="topic-section">
        <h2>What is Playwright?</h2>
        <div class="ans-hero">Playwright is a <strong>modern, open-source end-to-end testing framework</strong> by Microsoft that automates Chromium, Firefox, and WebKit with a single API — supporting TypeScript, JavaScript, Python, Java, and C#.</div>

        <div class="definition-card">
          <div class="definition-term">Why is Playwright growing so fast?</div>
          <div class="definition-body">
            Playwright has become one of the fastest-growing automation testing frameworks because it solves many problems that testers faced with traditional tools like Selenium.<br><br>
            <strong>In simple words:</strong> Playwright is famous because it allows testers to automate modern web applications <em>faster</em>, <em>more reliably</em>, and with <em>less maintenance</em>.<br><br>
            It is especially popular among <strong>SDET engineers</strong>, modern QA teams, and companies moving toward CI/CD and cloud testing.
          </div>
        </div>

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-globe2"></i></div>
            <div class="bm-title">Cross-Browser</div>
            <div class="bm-count">Chrome, Firefox, Safari</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-lightning-charge"></i></div>
            <div class="bm-title">Auto-Waiting</div>
            <div class="bm-count">No manual sleeps</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-cloud-arrow-up"></i></div>
            <div class="bm-title">API Testing</div>
            <div class="bm-count">Built-in request API</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-phone"></i></div>
            <div class="bm-title">Mobile Emulation</div>
            <div class="bm-count">iPhone, Android</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-diagram-3"></i></div>
            <div class="bm-title">Parallel Execution</div>
            <div class="bm-count">Workers + Sharding</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-camera-video"></i></div>
            <div class="bm-title">Trace Viewer</div>
            <div class="bm-count">Video + Screenshots</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Playwright vs Selenium vs Cypress</h2>
        <table class="comparison-table">
          <thead><tr><th>Feature</th><th>Playwright</th><th>Selenium</th><th>Cypress</th></tr></thead>
          <tbody>
            <tr><td>Creator</td><td>Microsoft</td><td>ThoughtWorks / Open Source</td><td>Cypress.io</td></tr>
            <tr><td>Language</td><td>TS, JS, Python, Java, C#</td><td>Java, Python, C#, JS, Ruby</td><td>JS / TS only</td></tr>
            <tr><td>Browser support</td><td>Chromium, Firefox, WebKit</td><td>All browsers via drivers</td><td>Chromium-family only</td></tr>
            <tr><td>Auto-wait</td><td>Yes — built-in</td><td>No — explicit waits needed</td><td>Yes — built-in</td></tr>
            <tr><td>API testing</td><td>Built-in (request)</td><td>No (needs Rest Assured)</td><td>Built-in (cy.request)</td></tr>
            <tr><td>Parallel execution</td><td>Workers + Sharding (fast)</td><td>Selenium Grid (complex setup)</td><td>Limited in free tier</td></tr>
            <tr><td>iframes</td><td>frameLocator() — easy</td><td>switchTo().frame()</td><td>Limited</td></tr>
            <tr><td>Multiple tabs/windows</td><td>Native support</td><td>Via window handles</td><td>Same-origin only</td></tr>
            <tr><td>Network interception</td><td>page.route() — powerful</td><td>No (needs proxy)</td><td>cy.intercept()</td></tr>
            <tr><td>Visual testing</td><td>toHaveScreenshot() built-in</td><td>No (needs Applitools)</td><td>Plugin needed</td></tr>
            <tr><td>SAP / desktop</td><td>No</td><td>No (needs Sikuli)</td><td>No</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Selenium vs Playwright — Quick Comparison</h2>
        <table class="comparison-table">
          <thead><tr><th>Feature</th><th>Selenium</th><th>Playwright</th></tr></thead>
          <tbody>
            <tr><td>Browser Support</td><td>Excellent</td><td>Excellent</td></tr>
            <tr><td>Created By</td><td>Open Source Community</td><td>Microsoft</td></tr>
            <tr><td>Driver Management</td><td>Manual</td><td>Automatic</td></tr>
            <tr><td>Auto Wait</td><td>Limited</td><td>Excellent</td></tr>
            <tr><td>Parallel Execution</td><td>Possible</td><td>Built-in</td></tr>
            <tr><td>API Testing</td><td>Separate Tool</td><td>Built-in</td></tr>
            <tr><td>Network Mocking</td><td>Limited</td><td>Excellent</td></tr>
            <tr><td>Debugging</td><td>Good</td><td>Excellent</td></tr>
            <tr><td>Modern Apps</td><td>Good</td><td>Excellent</td></tr>
            <tr><td>Mobile Browser Testing</td><td>Requires setup</td><td>Built-in</td></tr>
            <tr><td>Learning Curve</td><td>Medium</td><td>Medium</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Where Selenium Still Wins</h2>
        <div class="info-panel tip">
          <div class="panel-title">Selenium is not dead</div>
          <p>Selenium is still heavily used and remains the right choice in many situations.</p>
        </div>
        <ul class="ans-list green">
          <li><span class="icon">✅</span><strong>Mature (20+ years):</strong> Battle-tested across thousands of enterprise projects worldwide</li>
          <li><span class="icon">✅</span><strong>Huge community:</strong> Massive Stack Overflow coverage, extensive documentation, and ecosystem of plugins</li>
          <li><span class="icon">✅</span><strong>Existing frameworks:</strong> Teams with large Selenium codebases don't need to migrate — the investment is already made</li>
          <li><span class="icon">✅</span><strong>Enterprise legacy systems:</strong> Many banking and government systems are tightly integrated with Selenium-based tooling and reporting</li>
          <li><span class="icon">✅</span><strong>Strong Java ecosystem:</strong> Selenium + Java + TestNG + Maven is the standard stack in many large enterprises, especially in India</li>
        </ul>
        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Choose Playwright when...</h6>
            Starting a new project, need built-in parallel execution, working with modern SPAs, need API + UI in one framework, moving to CI/CD pipelines, or team prefers TypeScript.
          </div>
          <div class="compare-card green">
            <h6>Stick with Selenium when...</h6>
            Large existing test suite, Java-first team, enterprise legacy system integrations, or the organisation already has Selenium Grid infrastructure in place.
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Installation &amp; Setup</h2>
        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Install Node.js (v18+)</div>
              <div class="step-desc">Download from nodejs.org. Verify: <code>node -v</code> and <code>npm -v</code></div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Create Playwright project</div>
              <div class="step-desc"><code>npm init playwright@latest</code> — prompts for language (TS recommended), test folder, GitHub Actions CI config, and browser installs.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Install browsers</div>
              <div class="step-desc"><code>npx playwright install</code> — installs Chromium, Firefox, WebKit binaries. They are bundled — no separate WebDriver downloads needed.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Run sample test</div>
              <div class="step-desc"><code>npx playwright test</code> — runs the generated example.spec.ts. HTML report auto-opens after run.</div>
            </div>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">BASH — Setup Commands</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-bash">npm init playwright@latest
npx playwright install
npx playwright test                      # run all tests
npx playwright test --headed             # see the browser
npx playwright test --debug              # pause-and-step debugger
npx playwright show-report               # open HTML report</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'easy',
        q: "What is Playwright and what are its key advantages over Selenium?",
        a: `<div class="ans-hero">Playwright is Microsoft's open-source framework for end-to-end web testing. Key advantages: built-in auto-waiting, multi-language support, native multi-tab/iframe handling, and no driver installation needed.</div>
        <ul class="ans-list green">
          <li><span class="icon">✅</span><strong>Auto-wait:</strong> Playwright waits for elements to be actionable before every interaction — no explicit waits needed</li>
          <li><span class="icon">✅</span><strong>No WebDriver:</strong> Communicates directly with browsers via CDP — no chromedriver/geckodriver management</li>
          <li><span class="icon">✅</span><strong>Multi-language:</strong> TypeScript, JavaScript, Python, Java, C# — same API across all</li>
          <li><span class="icon">✅</span><strong>Browser isolation:</strong> BrowserContext isolates cookies/sessions — run parallel tests without interference</li>
          <li><span class="icon">✅</span><strong>API testing built-in:</strong> request fixture tests HTTP APIs without a browser</li>
        </ul>`
      },
      {
        difficulty: 'easy',
        q: "Why do companies prefer Playwright + TypeScript for modern automation?",
        a: `<div class="ans-hero">TypeScript adds static typing to JavaScript — catching errors at compile time instead of runtime. Combined with Playwright's rich API, it creates a fast, maintainable, and type-safe test suite.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>JavaScript</h6>No type checking. Error: "page.clck is not a function" found at RUNTIME during test execution.</div>
          <div class="compare-card green"><h6>TypeScript</h6>Type checking catches "page.clck" as a compile-time error BEFORE the test even runs. IDE autocomplete suggests correct method names.</div>
        </div>`
      }
    ]
  },

  // ── 2. Architecture ───────────────────────────────────────────
  {
    id: 'playwright-architecture',
    title: 'Playwright Architecture',
    section: 'playwright',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'How Playwright communicates with browsers via CDP/WebSocket, the 3-step execution model, and Browser → Context → Page hierarchy.',
    content: `
      <div class="topic-section">
        <h2>Playwright Architecture Overview</h2>
        <div class="ans-hero">Playwright uses a persistent WebSocket connection to a Playwright Server that relays commands to browser engines via CDP (Chrome DevTools Protocol) for Chromium, and custom protocols for Firefox and WebKit.</div>

        <img src="images/playwright/architecture-cdp.jpeg" alt="Playwright Architecture — Client Libraries to Playwright Server via WebSocket/CDP to Chrome/Firefox/WebKit rendering processes" class="notion-img" />

        <img src="images/playwright/architecture-overview.jpeg" alt="Playwright Architecture Overview — Test Code to Playwright Node.js Process to Chromium/Firefox/WebKit to Real Web Pages" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>The 3-Step Execution Model</h2>
        <img src="images/playwright/architecture-3step.jpeg" alt="Playwright 3-Step Architecture — Client code converted to JSON, Playwright Server as communication hub, Browser Engines via CDP" class="notion-img" />

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Step 1 — The Client</div>
              <div class="step-desc">Your test code (TS/JS/Python/Java/C#) is converted to JSON commands. A persistent WebSocket connection is made to the Playwright Server for all tests — not one-per-test.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Step 2 — The Playwright Server</div>
              <div class="step-desc">Receives JSON via WebSocket, acts as the communication hub between your code and the browsers. Manages contexts, pages, routing, and network interception.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Step 3 — The Browser Engines</div>
              <div class="step-desc">Commands sent via CDP to Chromium (Chrome+Edge), Firefox (Gecko), WebKit (Safari). The single persistent connection significantly reduces test flakiness vs Selenium's per-command HTTP requests.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Playwright Architecture &amp; Workflow</h2>
        <img src="images/playwright/architecture-workflow-horizontal.jpeg" alt="Playwright Architecture and Workflow — Test Scripts to Runner to API to Browser Server" class="notion-img" />

        <table class="comparison-table">
          <thead><tr><th>Layer</th><th>Component</th><th>Responsibility</th></tr></thead>
          <tbody>
            <tr><td>1</td><td><strong>Test Scripts</strong></td><td>Your *.spec.ts files + playwright.config.ts settings</td></tr>
            <tr><td>2</td><td><strong>Playwright Runner</strong></td><td>Finds tests, manages Fixtures, parallelization (workers), and reporters</td></tr>
            <tr><td>3</td><td><strong>Playwright API</strong></td><td>page.goto(), page.click(), expect() — the test commands layer</td></tr>
            <tr><td>4</td><td><strong>Browser Server</strong></td><td>Headless/Headed browser process. Manages Contexts and Pages (tabs)</td></tr>
          </tbody>
        </table>

        <div class="info-panel tip"><div class="panel-title">Why Playwright is faster than Selenium</div><p>Selenium sends HTTP requests to WebDriver for every command (new connection each time). Playwright uses a single persistent WebSocket — commands are streamed continuously. This is why Playwright tests typically run 2–5× faster than equivalent Selenium tests.</p></div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "Explain Playwright's architecture. How does it communicate with browsers?",
        a: `<div class="ans-hero">Playwright uses a persistent WebSocket connection from your test code to a Playwright Server, which sends commands to browser engines via CDP (Chromium) or custom protocols (Firefox/WebKit).</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Client code → JSON</div><div class="step-desc">TypeScript/Java/Python test code is serialised to JSON commands</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">WebSocket → Playwright Server</div><div class="step-desc">Single persistent connection (not per-command HTTP like Selenium)</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">CDP → Browser Engine</div><div class="step-desc">Chrome DevTools Protocol for Chromium; custom CDP-like protocol for Firefox and WebKit</div></div></div>
        </div>`
      },
      {
        difficulty: 'medium',
        q: "Why does Playwright have less test flakiness than Selenium?",
        a: `<div class="ans-hero">Two reasons: persistent WebSocket (no connection overhead per command) and built-in auto-waiting (never interacts with elements that aren't ready).</div>
        <table class="comparison-table">
          <thead><tr><th>Cause of Flakiness</th><th>Selenium</th><th>Playwright</th></tr></thead>
          <tbody>
            <tr><td>Connection overhead</td><td>New HTTP request per command — latency spikes cause timeouts</td><td>Single persistent WebSocket — no reconnection delay</td></tr>
            <tr><td>Element not ready</td><td>StaleElementReferenceException if element moves mid-interaction</td><td>Auto-retries until element is stable and actionable</td></tr>
            <tr><td>Page not loaded</td><td>Needs explicit waits (WebDriverWait)</td><td>Automatically waits for network idle, DOM content, load events</td></tr>
          </tbody>
        </table>`
      }
    ]
  },

  // ── 3. Browser / Context / Page ───────────────────────────────
  {
    id: 'playwright-browser-context',
    title: 'Browser, Context & Page',
    section: 'playwright',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'The Browser → BrowserContext → Page hierarchy — Playwright\'s most important concept for isolation and parallel testing.',
    content: `
      <div class="topic-section">
        <h2>Browser → Context → Page Hierarchy</h2>
        <div class="ans-hero">This three-level hierarchy is the most important Playwright concept. It enables completely isolated sessions running in parallel — within the same browser process.</div>

        <img src="images/playwright/browser-context-hierarchy.jpeg" alt="Playwright Core Concept: Browser vs Context vs Page — Browser → Context 1/2 → Page 1/2 hierarchy" class="notion-img" />

        <img src="images/playwright/browser-context-pages.jpeg" alt="Browser with Context1/Context2/Context3 each containing Page1, Page2, Page3 — isolation diagram" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Tab as Page — Context as Window</h2>
        <img src="images/playwright/browser-context-tab-page.jpeg" alt="Tab as Page, Browser Window as BrowserContext — Playwright Chromium browser channels" class="notion-img" />

        <table class="comparison-table">
          <thead><tr><th>Concept</th><th>Real-world analogy</th><th>Code</th></tr></thead>
          <tbody>
            <tr><td><strong>Browser</strong></td><td>The Chrome/Firefox/Safari application</td><td><code>const browser = await chromium.launch()</code></td></tr>
            <tr><td><strong>BrowserContext</strong></td><td>An incognito window — completely isolated cookies, localStorage, auth</td><td><code>const ctx = await browser.newContext()</code></td></tr>
            <tr><td><strong>Page</strong></td><td>A single browser tab inside the window</td><td><code>const page = await ctx.newPage()</code></td></tr>
          </tbody>
        </table>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — Browser / Context / Page</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: false });

// Context 1 — User A session
const ctxAdmin = await browser.newContext({
  storageState: 'auth/admin.json'   // pre-saved login cookies
});
const adminPage = await ctxAdmin.newPage();
await adminPage.goto('https://bankapp.com/dashboard');

// Context 2 — User B session (isolated — no shared cookies with ctxAdmin)
const ctxCustomer = await browser.newContext();
const customerPage = await ctxCustomer.newPage();
await customerPage.goto('https://bankapp.com/login');

// Both sessions run simultaneously — no interference
await browser.close();</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Why BrowserContext Matters for Banking Tests</h2>
        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Without Context isolation</h6>
            Admin login in Test A leaves session cookies. Test B accidentally runs as admin. Tests pollute each other. Flaky results depending on run order.
          </div>
          <div class="compare-card green">
            <h6>With BrowserContext</h6>
            Each test gets a fresh context — clean cookies, clean localStorage, no auth bleed. Parallel tests for "admin user" and "customer user" run simultaneously without interfering.
          </div>
        </div>

        <h3>storageState — Pre-Authenticated Context</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — Save &amp; Reuse Login State</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">// setup/auth.setup.ts — runs ONCE before all tests
import { test as setup } from '@playwright/test';

setup('authenticate as admin', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', 'admin@bankapp.com');
  await page.fill('#password', 'Admin@123');
  await page.click('#loginBtn');
  await page.waitForURL('/dashboard');

  // Save cookies + localStorage to file
  await page.context().storageState({ path: 'auth/admin.json' });
});

// In playwright.config.ts — every test uses saved state (skips login)
use: {
  storageState: 'auth/admin.json'
}</code></pre>
        </div>
        <div class="info-panel tip"><div class="panel-title">Speed benefit</div><p>Login takes ~2–3 seconds. With 50 tests, that's 2.5 minutes saved by reusing storageState instead of logging in fresh every test.</p></div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What is the difference between Browser, BrowserContext, and Page in Playwright?",
        a: `<div class="ans-hero">Browser is the browser process, BrowserContext is an isolated session (like incognito), Page is a single tab. Each Context has completely separate cookies, localStorage, and auth.</div>
        <table class="comparison-table">
          <thead><tr><th>Level</th><th>Analogy</th><th>Isolation</th></tr></thead>
          <tbody>
            <tr><td>Browser</td><td>Chrome app running</td><td>Shared browser engine</td></tr>
            <tr><td>BrowserContext</td><td>Incognito window</td><td>Separate cookies, localStorage, auth tokens</td></tr>
            <tr><td>Page</td><td>One browser tab</td><td>Separate DOM, separate URL, shares context session</td></tr>
          </tbody>
        </table>
        <div class="info-panel tip"><div class="panel-title">Interview answer formula</div><p>Multiple tests can run <strong>in the same browser</strong> (efficient) but with <strong>different contexts</strong> (isolated) — so a logged-in admin test doesn't bleed cookies into a logged-out customer test.</p></div>`
      },
      {
        difficulty: 'hard',
        q: "How does storageState work in Playwright and why is it important for large test suites?",
        a: `<div class="ans-hero">storageState saves the browser's cookies and localStorage to a JSON file after login. Subsequent test contexts load this file and start already authenticated — no login step needed per test.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Auth setup test runs once</div><div class="step-desc">Logs in via UI, saves context state to auth/admin.json</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">All other tests load the state</div><div class="step-desc">playwright.config.ts: use: { storageState: 'auth/admin.json' } — every test starts with active session</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Speed benefit</div><div class="step-desc">50 tests × 3s login saved = 2.5 min total. For 200 tests that's 10 minutes saved per run.</div></div></div>
        </div>`
      }
    ]
  },

  // ── 4. Locators ───────────────────────────────────────────────
  {
    id: 'playwright-locators',
    title: 'Locators & Selectors',
    section: 'playwright',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'All Playwright locator strategies — role, text, placeholder, label, testid, CSS, XPath — and best practices.',
    content: `
      <div class="topic-section">
        <h2>Playwright Locator Priority</h2>
        <div class="ans-hero">Playwright recommends user-facing locators (role, text, label) over technical ones (CSS, XPath) — they are more resilient to UI changes and closer to how real users interact.</div>

        <table class="comparison-table">
          <thead><tr><th>Priority</th><th>Locator</th><th>Example</th><th>Best for</th></tr></thead>
          <tbody>
            <tr><td>🥇 1st</td><td><code>getByRole()</code></td><td><code>page.getByRole('button', {name: 'Login'})</code></td><td>Buttons, inputs, links — accessible roles</td></tr>
            <tr><td>🥇 1st</td><td><code>getByLabel()</code></td><td><code>page.getByLabel('Username')</code></td><td>Form fields with &lt;label&gt; elements</td></tr>
            <tr><td>🥈 2nd</td><td><code>getByPlaceholder()</code></td><td><code>page.getByPlaceholder('Enter email')</code></td><td>Input fields with placeholder text</td></tr>
            <tr><td>🥈 2nd</td><td><code>getByText()</code></td><td><code>page.getByText('Transfer Successful')</code></td><td>Paragraphs, headings, any visible text</td></tr>
            <tr><td>🥈 2nd</td><td><code>getByAltText()</code></td><td><code>page.getByAltText('Bank logo')</code></td><td>Images with alt text</td></tr>
            <tr><td>🥉 3rd</td><td><code>getByTestId()</code></td><td><code>page.getByTestId('submit-btn')</code></td><td>data-testid attributes (team agreement)</td></tr>
            <tr><td>🔧 Last</td><td><code>locator('css')</code></td><td><code>page.locator('#loginBtn')</code></td><td>When above don't work</td></tr>
            <tr><td>🔧 Last</td><td><code>locator('xpath')</code></td><td><code>page.locator('//button[@id="login"]')</code></td><td>Complex DOM traversal only</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Locators in Code — Banking Application</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — All Locator Types</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">// ── Recommended: User-Facing Locators ──────────────────────
// Role locator — button with name
await page.getByRole('button', { name: 'Login' }).click();

// Label locator — input associated with a label
await page.getByLabel('Username').fill('karan@bankapp.com');
await page.getByLabel('Password').fill('Secure@1234');

// Placeholder locator
await page.getByPlaceholder('Enter your email').fill('test@bank.com');

// Text locator — any visible text
await expect(page.getByText('Transfer Successful')).toBeVisible();

// Test ID locator — data-testid="submit-btn" in HTML
await page.getByTestId('submit-btn').click();

// ── Fallback: CSS / XPath ───────────────────────────────────
await page.locator('#accountBalance').textContent();
await page.locator('.error-message').waitFor({ state: 'visible' });
await page.locator('//input[@name="amount"]').fill('5000');

// ── Chaining / Filtering ────────────────────────────────────
// Find a row in a table by text, then click a button in that row
await page.getByRole('row', { name: 'Rahul Sharma' })
          .getByRole('button', { name: 'Delete' })
          .click();</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Locator Actions</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — Common Element Actions</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">const loc = page.getByLabel('Transfer Amount');

await loc.fill('5000');                         // clear + type
await loc.type('5000');                         // char-by-char (for JS keyUp events)
await loc.clear();                              // clear field
await loc.click();                              // click
await loc.dblclick();                           // double click
await loc.hover();                              // hover (for tooltips)
await loc.focus();                              // focus without click
await loc.press('Enter');                       // keyboard key
await loc.selectOption('NEFT');                 // dropdown by visible text
await loc.selectOption({ value: 'neft' });      // dropdown by value
await loc.check();                              // checkbox / radio
await loc.uncheck();
await loc.setInputFiles('docs/statement.pdf');  // file upload
const text = await loc.textContent();           // get text
const val  = await loc.inputValue();            // get input value
const vis  = await loc.isVisible();             // boolean</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What is the recommended locator strategy in Playwright and why?",
        a: `<div class="ans-hero">Playwright recommends user-facing locators (getByRole, getByLabel, getByText) first — they are resilient to technical changes (ID/class changes) and reflect how real users find elements.</div>
        <table class="comparison-table">
          <thead><tr><th>Approach</th><th>Example</th><th>Resilience</th></tr></thead>
          <tbody>
            <tr><td>getByRole (best)</td><td>getByRole('button', {name:'Login'})</td><td>Works even if button ID/class changes</td></tr>
            <tr><td>getByLabel</td><td>getByLabel('Username')</td><td>Tied to label text, not technical attr</td></tr>
            <tr><td>getByTestId</td><td>getByTestId('login-btn')</td><td>Stable if team maintains data-testid</td></tr>
            <tr><td>CSS/XPath (last resort)</td><td>locator('#loginBtn')</td><td>Breaks when ID/class changes</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'medium',
        q: "How do you select a specific row in a table and click a button within it using Playwright?",
        a: `<div class="ans-hero">Chain locators: find the row by text, then find the button within that row using .getByRole().</div>
        <div class="code-block"><code><span class="cm">// Find row "Rahul Sharma" → click Delete button in that row</span>
<span class="kw">await</span> page
  .<span class="fn">getByRole</span>(<span class="st">'row'</span>, { name: <span class="st">'Rahul Sharma'</span> })
  .<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Delete'</span> })
  .<span class="fn">click</span>();

<span class="cm">// Or filter from all rows:</span>
<span class="kw">await</span> page.<span class="fn">locator</span>(<span class="st">'tr'</span>)
  .<span class="fn">filter</span>({ hasText: <span class="st">'Rahul Sharma'</span> })
  .<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Delete'</span> })
  .<span class="fn">click</span>();</code></div>`
      }
    ]
  },

  // ── 5. Assertions & Auto-Wait ────────────────────────────────
  {
    id: 'playwright-assertions',
    title: 'Assertions & Auto-Waiting',
    section: 'playwright',
    difficulty: 'medium',
    time: '20 min',
    shortDesc: 'Web-first assertions with expect(), auto-retry, timeout configuration, and soft assertions.',
    content: `
      <div class="topic-section">
        <h2>Web-First Assertions</h2>
        <div class="ans-hero">Playwright's <code>expect(locator)</code> assertions are "web-first" — they automatically retry until the condition passes or timeout is reached. No manual polling needed.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — All Common Assertions</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">// ── Visibility ──────────────────────────────────────────────
await expect(page.getByText('Transfer Successful')).toBeVisible();
await expect(page.locator('.error-msg')).toBeHidden();
await expect(page.getByRole('button', {name:'Login'})).toBeEnabled();
await expect(page.getByRole('button', {name:'Submit'})).toBeDisabled();

// ── Text ────────────────────────────────────────────────────
await expect(page.getByTestId('welcome')).toHaveText('Welcome, Karan');
await expect(page.getByTestId('balance')).toContainText('₹10,000');

// ── Input values ────────────────────────────────────────────
await expect(page.getByLabel('Amount')).toHaveValue('5000');
await expect(page.getByRole('checkbox', {name:'Remember me'})).toBeChecked();

// ── URL & Title ─────────────────────────────────────────────
await expect(page).toHaveURL('/dashboard');
await expect(page).toHaveURL(/.*dashboard.*/);  // regex
await expect(page).toHaveTitle('Banking — Dashboard');

// ── Count ───────────────────────────────────────────────────
await expect(page.locator('.txn-row')).toHaveCount(5);
await expect(page.locator('.txn-row')).not.toHaveCount(0);

// ── Attribute ───────────────────────────────────────────────
await expect(page.locator('img.logo')).toHaveAttribute('alt', 'Bank Logo');

// ── Screenshot comparison (Visual Testing) ──────────────────
await expect(page).toHaveScreenshot('dashboard.png');
await expect(page.locator('.balance-card')).toHaveScreenshot('balance.png');</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Auto-Wait — How Playwright Waits</h2>
        <div class="ans-hero">Before every action (click, fill, check), Playwright automatically waits for the element to be: attached to DOM, visible, stable (not animating), enabled, and ready to receive the event.</div>

        <table class="comparison-table">
          <thead><tr><th>Action</th><th>What Playwright waits for</th></tr></thead>
          <tbody>
            <tr><td>click()</td><td>Visible, enabled, stable, no overlay covering it</td></tr>
            <tr><td>fill()</td><td>Visible, enabled, editable (not readonly)</td></tr>
            <tr><td>check() / uncheck()</td><td>Visible, enabled</td></tr>
            <tr><td>selectOption()</td><td>Visible, enabled, has matching option</td></tr>
            <tr><td>expect().toBeVisible()</td><td>Retries until visible or timeout</td></tr>
          </tbody>
        </table>

        <h3>Explicit Waits — When You Need Them</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — Explicit Wait Methods</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">// Wait for a specific URL after clicking a link
await page.waitForURL('/dashboard');

// Wait for an element to appear
await page.waitForSelector('.success-banner');

// Wait for network to be idle (all XHR/fetch complete)
await page.waitForLoadState('networkidle');

// Wait for element state
await page.locator('#spinner').waitFor({ state: 'hidden' });
await page.locator('.results').waitFor({ state: 'visible' });

// Custom timeout for a single assertion
await expect(page.getByText('Processing')).toBeHidden({ timeout: 15000 });</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Soft Assertions</h2>
        <div class="definition-card">
          <div class="definition-term">When to use Soft Assertions</div>
          <div class="definition-body">
            Soft assertions don't stop the test on failure — they collect all failures and report them at the end. Use when you need to validate multiple independent fields on a page (like a dashboard with 6 widgets).
          </div>
        </div>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — Soft Assertions</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">test('validate dashboard widgets', async ({ page }) => {
  // soft.expect does NOT stop on failure
  await expect.soft(page.getByTestId('balance')).toBeVisible();
  await expect.soft(page.getByTestId('account-no')).toContainText('XXXX');
  await expect.soft(page.getByTestId('last-txn')).toBeVisible();
  await expect.soft(page.locator('.welcome-msg')).toContainText('Karan');

  // All failures reported together at end of test
  // Hard assertion — stops immediately if fails
  await expect(page).toHaveURL('/dashboard');
});</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What are web-first assertions in Playwright? How do they differ from regular assertions?",
        a: `<div class="ans-hero">Web-first assertions (expect(locator).toBeVisible() etc.) automatically retry until the condition is met or timeout reached — no manual polling or waits needed.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Regular assertion (fails if element not ready)</h6><code>assert(page.locator('.msg').isVisible())</code> — evaluates ONCE. If element is mid-animation, it fails immediately.</div>
          <div class="compare-card green"><h6>Web-first assertion (retries automatically)</h6><code>await expect(page.locator('.msg')).toBeVisible()</code> — retries every 100ms for up to 5 seconds (configurable). Passes as soon as condition is true.</div>
        </div>`
      },
      {
        difficulty: 'easy',
        q: "When would you use a soft assertion in Playwright?",
        a: `<div class="ans-hero">Use soft assertions when validating multiple independent elements on a page — so a single failure doesn't prevent checking the others.</div>
        <ul class="ans-list green">
          <li><span class="icon">✅</span>Dashboard with 6 widgets — validate all 6, report all failures together</li>
          <li><span class="icon">✅</span>Registration form validation messages — check all field errors in one test</li>
          <li><span class="icon">✅</span>Banking statement page — verify date, amount, reference, status all visible</li>
        </ul>
        <div class="info-panel tip"><div class="panel-title">Syntax</div><p><code>await expect.soft(locator).toBeVisible()</code> — note the <strong>.soft</strong> after expect. All soft failures are thrown together at the test's end.</p></div>`
      }
    ]
  },

  // ── 6. Page Object Model ──────────────────────────────────────
  {
    id: 'playwright-pom',
    title: 'Page Object Model (POM)',
    section: 'playwright',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'Building maintainable Playwright POM with TypeScript classes, constructor injection, and fixtures for shared page objects.',
    content: `
      <div class="topic-section">
        <h2>POM in Playwright + TypeScript</h2>
        <div class="ans-hero">A Page Object class encapsulates locators and actions for one page. Tests call page methods — they never reference locators directly. TypeScript makes this strongly typed.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — LoginPage.ts</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton:   Locator;
  private readonly errorMessage:  Locator;

  constructor(private page: Page) {
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton   = page.getByRole('button', { name: 'Login' });
    this.errorMessage  = page.getByTestId('error-alert');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectErrorMessage(text: string) {
    await expect(this.errorMessage).toContainText(text);
  }
}</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — DashboardPage.ts</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  private readonly welcomeMsg:    Locator;
  private readonly accountBalance: Locator;
  private readonly transferBtn:   Locator;

  constructor(private page: Page) {
    this.welcomeMsg     = page.getByTestId('welcome-message');
    this.accountBalance = page.getByTestId('account-balance');
    this.transferBtn    = page.getByRole('link', { name: 'Fund Transfer' });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL('/dashboard');
    await expect(this.welcomeMsg).toBeVisible();
  }

  async getBalance(): Promise&lt;number&gt; {
    const text = await this.accountBalance.textContent() ?? '0';
    return parseFloat(text.replace(/[^0-9.]/g, ''));
  }

  async goToTransfer() {
    await this.transferBtn.click();
  }
}</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Using POM in Tests</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — login.spec.ts</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { test, expect } from '@playwright/test';
import { LoginPage }    from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login Tests', () => {

  test('TC-L-01: valid credentials → dashboard', async ({ page }) => {
    const loginPage     = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('karan@bankapp.com', 'Secure@1234');
    await dashboardPage.expectLoaded();
  });

  test('TC-L-02: wrong password → error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('karan@bankapp.com', 'WrongPass');
    await loginPage.expectErrorMessage('Invalid username or password');
  });

});</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>POM with Fixtures (Advanced)</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — fixtures/pages.ts</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { test as base } from '@playwright/test';
import { LoginPage }     from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { TransferPage }  from '../pages/TransferPage';

// Extend base test with page object fixtures
export const test = base.extend&lt;{
  loginPage:     LoginPage;
  dashboardPage: DashboardPage;
  transferPage:  TransferPage;
}&gt;({
  loginPage:     async ({ page }, use) => { await use(new LoginPage(page)); },
  dashboardPage: async ({ page }, use) => { await use(new DashboardPage(page)); },
  transferPage:  async ({ page }, use) => { await use(new TransferPage(page)); },
});

// Test using fixtures — no manual instantiation
test('transfer money', async ({ loginPage, dashboardPage, transferPage }) => {
  await loginPage.goto();
  await loginPage.login('karan@bankapp.com', 'Secure@1234');
  await dashboardPage.goToTransfer();
  await transferPage.transfer('NEFT', '9876543210', '5000');
  await transferPage.expectSuccess();
});</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "How do you implement Page Object Model in Playwright with TypeScript?",
        a: `<div class="ans-hero">Create a TypeScript class per page. Constructor takes Page object and defines Locators as private readonly fields. Methods encapsulate actions. Tests instantiate page classes and call methods.</div>
        <div class="code-block"><code><span class="kw">export class</span> <span class="cl">LoginPage</span> {
  <span class="kw">private readonly</span> username: <span class="cl">Locator</span>;

  <span class="fn">constructor</span>(<span class="kw">private</span> page: <span class="cl">Page</span>) {
    <span class="kw">this</span>.username = page.<span class="fn">getByLabel</span>(<span class="st">'Username'</span>);
  }

  <span class="kw">async</span> <span class="fn">login</span>(user: <span class="kw">string</span>, pass: <span class="kw">string</span>) {
    <span class="kw">await this</span>.username.<span class="fn">fill</span>(user);
    <span class="cm">// ...</span>
  }
}</code></div>`
      },
      {
        difficulty: 'hard',
        q: "What are Playwright Fixtures and how do they improve POM usage?",
        a: `<div class="ans-hero">Fixtures extend the base test object with pre-instantiated page objects. Tests receive them via destructuring — no manual new LoginPage(page) needed in every test.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Without Fixtures</h6>Every test: const loginPage = new LoginPage(page) — repeated boilerplate. Miss it once and test breaks.</div>
          <div class="compare-card green"><h6>With Fixtures</h6>test('name', async ({ loginPage }) => { ... }) — loginPage auto-instantiated and injected. DRY, typed, reusable.</div>
        </div>`
      }
    ]
  },

  // ── 7. Network & API Testing ─────────────────────────────────
  {
    id: 'playwright-api-network',
    title: 'API Testing & Network Interception',
    section: 'playwright',
    difficulty: 'hard',
    time: '30 min',
    shortDesc: 'Built-in API testing with request fixture, network interception with page.route(), mocking API responses, and HAR recording.',
    content: `
      <div class="topic-section">
        <h2>API Testing with Playwright</h2>
        <div class="ans-hero">Playwright's <code>request</code> fixture sends HTTP requests without a browser — perfect for API smoke tests, seeding test data, or validating backend responses in the same framework as your UI tests.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — API Testing (request fixture)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { test, expect } from '@playwright/test';

test('POST /api/transfer — success response', async ({ request }) => {
  const response = await request.post('/api/transfer', {
    headers: { 'Authorization': 'Bearer eyJhbGciOi...' },
    data: {
      fromAccount: '1234567890',
      toAccount:   '9876543210',
      amount:      5000,
      type:        'NEFT'
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.status).toBe('SUCCESS');
  expect(body.referenceNumber).toMatch(/^TXN/);
});

test('GET /api/accounts — list accounts', async ({ request }) => {
  const response = await request.get('/api/accounts', {
    headers: { 'Authorization': 'Bearer eyJhbGciOi...' }
  });

  expect(response.ok()).toBeTruthy();
  const accounts = await response.json();
  expect(accounts).toHaveLength(2);
  expect(accounts[0]).toHaveProperty('balance');
});</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Network Interception — page.route()</h2>
        <div class="ans-hero"><code>page.route()</code> intercepts browser network requests — mock API responses, block unnecessary requests, or modify responses to test edge cases without touching the backend.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — Mock API Response</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">test('show insufficient balance error when API returns 422', async ({ page }) => {
  // Intercept the transfer API and return a mock error
  await page.route('**/api/transfer', async route => {
    await route.fulfill({
      status: 422,
      contentType: 'application/json',
      body: JSON.stringify({
        error: 'Insufficient balance',
        code:  'ERR_INSUFFICIENT_FUNDS'
      })
    });
  });

  // Now run the UI flow — it will see the mocked 422 response
  await page.goto('/transfer');
  await page.getByLabel('Amount').fill('9999999');
  await page.getByRole('button', { name: 'Proceed' }).click();

  await expect(page.getByTestId('error-message'))
    .toContainText('Insufficient balance');
});

// Block analytics/tracking requests to speed up tests
test('block tracking scripts', async ({ page }) => {
  await page.route('**google-analytics**', route => route.abort());
  await page.route('**hotjar**',           route => route.abort());
  await page.goto('/dashboard');
});</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — Intercept &amp; Modify Response</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">// Modify a real API response — inject a large balance for testing
await page.route('**/api/account/balance', async route => {
  const response = await route.fetch();        // fetch real response
  const json     = await response.json();
  json.balance   = 9999999;                    // override just the balance
  await route.fulfill({ json });               // send modified response
});

await page.goto('/dashboard');
await expect(page.getByTestId('account-balance')).toContainText('9,999,999');</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Combined UI + API Test (End-to-End)</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — UI action + API validation</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">test('fund transfer: UI success + API verification', async ({ page, request }) => {
  let capturedRefNo = '';

  // Intercept the transfer response to capture reference number
  await page.route('**/api/transfer', async route => {
    const response = await route.fetch();
    const json     = await response.json();
    capturedRefNo  = json.referenceNumber;
    await route.fulfill({ response });          // pass through unchanged
  });

  // UI: perform the transfer
  await page.goto('/dashboard');
  await page.getByRole('link', { name: 'Fund Transfer' }).click();
  await page.getByLabel('Transfer Type').selectOption('NEFT');
  await page.getByLabel('Beneficiary Account').fill('9876543210');
  await page.getByLabel('Amount').fill('5000');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByLabel('OTP').fill('123456');
  await page.getByRole('button', { name: 'Confirm' }).click();

  await expect(page.getByTestId('success-message')).toContainText('Transfer Successful');

  // API: verify the transaction record was created
  const txnResponse = await request.get(\`/api/transactions/\${capturedRefNo}\`);
  expect(txnResponse.status()).toBe(200);
  const txn = await txnResponse.json();
  expect(txn.status).toBe('COMPLETED');
  expect(txn.amount).toBe(5000);
});</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How do you mock an API response in Playwright to test an error scenario?",
        a: `<div class="ans-hero">Use page.route() to intercept the API call and return a mock response via route.fulfill() — without touching the real backend.</div>
        <div class="code-block"><code><span class="kw">await</span> page.<span class="fn">route</span>(<span class="st">'**/api/transfer'</span>, <span class="kw">async</span> route => {
  <span class="kw">await</span> route.<span class="fn">fulfill</span>({
    status: <span class="num">422</span>,
    contentType: <span class="st">'application/json'</span>,
    body: <span class="cl">JSON</span>.<span class="fn">stringify</span>({ error: <span class="st">'Insufficient balance'</span> })
  });
});
<span class="cm">// Now run UI — error message should appear</span>
<span class="kw">await</span> <span class="fn">expect</span>(page.<span class="fn">getByTestId</span>(<span class="st">'error-msg'</span>)).<span class="fn">toContainText</span>(<span class="st">'Insufficient balance'</span>);</code></div>
        <div class="info-panel tip"><div class="panel-title">Why this matters</div><p>Test error paths without making the real backend return errors — no test data cleanup, no environment dependency, deterministic every time.</p></div>`
      },
      {
        difficulty: 'hard',
        q: "How do you perform API testing in Playwright without a browser?",
        a: `<div class="ans-hero">Use the request fixture — it sends HTTP requests directly, shares the same authentication context, and produces the same HTML report as UI tests.</div>
        <div class="code-block"><code><span class="fn">test</span>(<span class="st">'POST /api/transfer'</span>, <span class="kw">async</span> ({ request }) => {
  <span class="kw">const</span> res = <span class="kw">await</span> request.<span class="fn">post</span>(<span class="st">'/api/transfer'</span>, {
    data: { amount: <span class="num">5000</span>, toAccount: <span class="st">'9876'</span> }
  });
  <span class="fn">expect</span>(res.<span class="fn">status</span>()).<span class="fn">toBe</span>(<span class="num">200</span>);
  <span class="kw">const</span> body = <span class="kw">await</span> res.<span class="fn">json</span>();
  <span class="fn">expect</span>(body.status).<span class="fn">toBe</span>(<span class="st">'SUCCESS'</span>);
});</code></div>`
      }
    ]
  },

  // ── 8. Config, Parallel & CI/CD ───────────────────────────────
  {
    id: 'playwright-config-parallel',
    title: 'Config, Parallel Execution & CI/CD',
    section: 'playwright',
    difficulty: 'hard',
    time: '25 min',
    shortDesc: 'playwright.config.ts deep dive, parallel workers, sharding, cross-browser projects, and GitHub Actions / Jenkins CI integration.',
    content: `
      <div class="topic-section">
        <h2>playwright.config.ts</h2>
        <div class="ans-hero">All Playwright settings — browsers, parallelism, base URL, viewport, retries, reporters, timeouts — are configured in one file: <code>playwright.config.ts</code>.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — playwright.config.ts (Enterprise)</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir:     './tests',
  fullyParallel: true,              // files run in parallel
  workers:     process.env.CI ? 4 : undefined,  // 4 in CI, auto-detect locally
  retries:     process.env.CI ? 2 : 0,          // retry 2x in CI
  timeout:     30_000,              // 30s per test
  reporter: [
    ['html',  { open: 'never' }],
    ['junit', { outputFile: 'results/junit.xml' }],
    ['line'],
  ],

  use: {
    baseURL:         process.env.BASE_URL || 'https://uat.bankapp.com',
    storageState:    'auth/admin.json',      // shared auth state
    screenshot:      'only-on-failure',
    video:           'retain-on-failure',
    trace:           'on-first-retry',       // trace viewer on retry
    actionTimeout:   8_000,                  // per-action timeout
    navigationTimeout: 15_000,
  },

  projects: [
    // Auth setup — runs before all tests
    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    // Cross-browser projects
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['setup'],
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['setup'],
    },

    // Mobile emulation
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
      dependencies: ['setup'],
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 14'] },
      dependencies: ['setup'],
    },
  ],
});</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Parallel Execution — Workers &amp; Sharding</h2>
        <table class="comparison-table">
          <thead><tr><th>Mechanism</th><th>How it works</th><th>Use case</th></tr></thead>
          <tbody>
            <tr><td><strong>Workers</strong></td><td>Multiple test files run simultaneously on the same machine. Default: 50% of CPU cores.</td><td>Local development and single-machine CI</td></tr>
            <tr><td><strong>fullyParallel: true</strong></td><td>Tests WITHIN a file also run in parallel (not just across files)</td><td>Independent test suites with no ordering dependency</td></tr>
            <tr><td><strong>Sharding</strong></td><td>Split test suite across multiple CI machines: <code>--shard=1/4</code>, <code>--shard=2/4</code>...</td><td>Distributing load across multiple CI runners in GitHub Actions</td></tr>
          </tbody>
        </table>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">BASH — Sharding Commands</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-bash"># Run shard 1 of 4 — this machine handles 25% of tests
npx playwright test --shard=1/4

# Run shard 2 of 4 — on a different CI runner
npx playwright test --shard=2/4

# Merge all shard reports into one HTML report
npx playwright merge-reports --reporter html ./all-blobs</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>GitHub Actions CI/CD</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">YAML — .github/workflows/playwright.yml</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-yaml">name: Playwright Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        shard: [1, 2, 3, 4]           # 4 parallel runners

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps chromium

      - name: Run Playwright tests (shard \${{ matrix.shard }}/4)
        run: npx playwright test --shard=\${{ matrix.shard }}/4
        env:
          BASE_URL: \${{ secrets.UAT_URL }}

      - name: Upload blob report
        uses: actions/upload-artifact@v4
        with:
          name: blob-report-\${{ matrix.shard }}
          path: blob-report/

  merge-reports:
    needs: [test]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - name: Download all blobs
        uses: actions/download-artifact@v4
        with:
          path: all-blobs
          pattern: blob-report-*
          merge-multiple: true
      - name: Merge reports
        run: npx playwright merge-reports --reporter html ./all-blobs
      - name: Upload HTML report
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How do you configure cross-browser testing in Playwright for Chromium, Firefox, and WebKit?",
        a: `<div class="ans-hero">Define projects in playwright.config.ts — each project targets a different browser using devices from @playwright/test. Run all with npx playwright test.</div>
        <div class="code-block"><code>projects: [
  { name: <span class="st">'Chrome'</span>,  use: { ...devices[<span class="st">'Desktop Chrome'</span>]  } },
  { name: <span class="st">'Firefox'</span>, use: { ...devices[<span class="st">'Desktop Firefox'</span>] } },
  { name: <span class="st">'Safari'</span>,  use: { ...devices[<span class="st">'Desktop Safari'</span>]  } },
  { name: <span class="st">'Mobile'</span>,  use: { ...devices[<span class="st">'iPhone 14'</span>]       } },
]</code></div>
        <div class="info-panel tip"><div class="panel-title">Run specific browser</div><p><code>npx playwright test --project=Chrome</code> — runs only Chrome project. Saves time during development.</p></div>`
      },
      {
        difficulty: 'hard',
        q: "How do you use sharding in Playwright to speed up CI execution?",
        a: `<div class="ans-hero">Sharding splits the test suite across multiple CI runners. Each runner processes a fraction of tests in parallel, drastically reducing wall-clock time.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Without sharding (1 runner)</h6>400 tests × 3s avg = 20 min. Blocks the PR pipeline for 20 minutes.</div>
          <div class="compare-card green"><h6>With sharding (4 runners)</h6>100 tests per runner × 3s = 5 min total. Each PR gets results in 5 min.</div>
        </div>
        <div class="info-panel tip"><div class="panel-title">Command</div><p>Runner 1: <code>npx playwright test --shard=1/4</code><br>Runner 2: <code>npx playwright test --shard=2/4</code><br>Merge: <code>npx playwright merge-reports --reporter html</code></p></div>`
      }
    ]
  },

  // ── 9. Banking Application ────────────────────────────────────
  {
    id: 'playwright-banking-app',
    title: 'Banking App — Playwright Tests',
    section: 'playwright',
    difficulty: 'hard',
    time: '60 min',
    shortDesc: 'Complete Playwright + TypeScript test suite for a banking application — login, fund transfer, account, beneficiary, API validation, and security tests.',
    content: `
      <div class="topic-section">
        <h2>Banking Application — Playwright Automation</h2>
        <div class="ans-hero">A banking application is a ideal Playwright project — it requires multi-user session isolation, API interception for OTP mocking, network interception for error scenarios, and combined UI + API validation.</div>

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-shield-lock"></i></div>
            <div class="bm-title">Login &amp; Auth</div>
            <div class="bm-count">5 tests</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-arrow-left-right"></i></div>
            <div class="bm-title">Fund Transfer</div>
            <div class="bm-count">6 tests</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-wallet2"></i></div>
            <div class="bm-title">Dashboard</div>
            <div class="bm-count">4 tests</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-clock-history"></i></div>
            <div class="bm-title">Statements</div>
            <div class="bm-count">3 tests</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-people"></i></div>
            <div class="bm-title">Beneficiary</div>
            <div class="bm-count">4 tests</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-bug"></i></div>
            <div class="bm-title">Security</div>
            <div class="bm-count">3 tests</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Project Structure</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Project Layout</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>banking-playwright/
├── playwright.config.ts
├── package.json
├── auth/
│   ├── admin.json           ← saved storageState after login
│   └── customer.json
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── TransferPage.ts
│   ├── BeneficiaryPage.ts
│   └── StatementPage.ts
├── fixtures/
│   └── pages.ts             ← test.extend with all page objects
├── tests/
│   ├── auth.setup.ts        ← runs once: saves storageState
│   ├── login.spec.ts
│   ├── transfer.spec.ts
│   ├── dashboard.spec.ts
│   ├── beneficiary.spec.ts
│   ├── statement.spec.ts
│   └── security.spec.ts
├── test-data/
│   └── transfer-data.json
└── utils/
    └── api-helpers.ts</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Login Tests — login.spec.ts</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — login.spec.ts</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { test, expect } from '@playwright/test';
import { LoginPage }    from '../pages/LoginPage';

test.describe('Login', () => {

  test.use({ storageState: { cookies: [], origins: [] } }); // no pre-auth for login tests

  test('TC-L-01: valid login → dashboard', async ({ page }) => {
    const lp = new LoginPage(page);
    await lp.goto();
    await lp.login('karan@bankapp.com', 'Secure@1234');
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByTestId('welcome-message')).toContainText('Welcome, Karan');
  });

  test('TC-L-02: wrong password → error', async ({ page }) => {
    const lp = new LoginPage(page);
    await lp.goto();
    await lp.login('karan@bankapp.com', 'BadPass999');
    await expect(page.getByTestId('error-alert')).toContainText('Invalid username or password');
  });

  test('TC-L-03: blank fields → validation', async ({ page }) => {
    const lp = new LoginPage(page);
    await lp.goto();
    await page.getByRole('button', { name: 'Login' }).click();
    await expect.soft(page.getByText('Username is required')).toBeVisible();
    await expect.soft(page.getByText('Password is required')).toBeVisible();
  });

  test('TC-L-04: account lockout after 3 failures', async ({ page }) => {
    const lp = new LoginPage(page);
    await lp.goto();
    for (let i = 1; i &lt;= 3; i++) {
      await lp.login('karan@bankapp.com', \`WrongPass\${i}\`);
      if (i &lt; 3) { await page.reload(); }
    }
    await expect(page.getByTestId('error-alert')).toContainText('Account is locked');
  });

  const loginMatrix = [
    { user: 'karan@bankapp.com',   pass: 'Secure@1234', expect: 'success' },
    { user: 'manager@bankapp.com', pass: 'Mgr@1234',    expect: 'success' },
    { user: 'karan@bankapp.com',   pass: 'Wrong',        expect: 'error'   },
    { user: '',                    pass: 'Secure@1234',  expect: 'validation' },
  ];

  for (const row of loginMatrix) {
    test(\`TC-L-05: data-driven login — \${row.user || 'empty'} → \${row.expect}\`, async ({ page }) => {
      const lp = new LoginPage(page);
      await lp.goto();
      await lp.login(row.user, row.pass);
      if (row.expect === 'success') {
        await expect(page).toHaveURL('/dashboard');
      } else {
        await expect(page.getByTestId('error-alert').or(page.getByText('is required'))).toBeVisible();
      }
    });
  }
});</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Fund Transfer Tests — transfer.spec.ts</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — transfer.spec.ts</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { test, expect } from '../fixtures/pages';

test.describe('Fund Transfer', () => {

  test('TC-T-01: NEFT transfer success + balance reduction', async ({
    page, dashboardPage, transferPage
  }) => {
    await page.goto('/dashboard');
    const balanceBefore = await dashboardPage.getBalance();

    await dashboardPage.goToTransfer();
    await transferPage.transfer({
      type:        'NEFT',
      toAccount:   '9876543210',
      amount:      '5000',
      remarks:     'Monthly Rent'
    });

    // Mock OTP input — test env uses fixed 123456
    await page.getByLabel('OTP').fill('123456');
    await page.getByRole('button', { name: 'Confirm' }).click();

    await expect(page.getByTestId('success-message')).toContainText('Transfer Successful');

    // Verify balance reduced
    await page.goto('/dashboard');
    const balanceAfter = await dashboardPage.getBalance();
    expect(balanceAfter).toBeCloseTo(balanceBefore - 5000, 2);
  });

  test('TC-T-02: insufficient balance → error mocked via route', async ({ page }) => {
    // Mock the transfer API to return insufficient balance
    await page.route('**/api/transfer', async route => {
      await route.fulfill({
        status: 422,
        json:   { error: 'Insufficient balance', code: 'ERR_FUNDS' }
      });
    });

    await page.goto('/transfer');
    await page.getByLabel('Amount').fill('9999999');
    await page.getByRole('button', { name: 'Proceed' }).click();
    await expect(page.getByTestId('error-message')).toContainText('Insufficient balance');
  });

  const invalidAmounts = [
    { amount: '0',        error: 'Amount must be greater than zero' },
    { amount: '-500',     error: 'Amount cannot be negative'        },
    { amount: 'abc',      error: 'Please enter a valid amount'      },
  ];

  for (const row of invalidAmounts) {
    test(\`TC-T-03: invalid amount "\${row.amount}" → validation\`, async ({ page }) => {
      await page.goto('/transfer');
      await page.getByLabel('Amount').fill(row.amount);
      await page.getByRole('button', { name: 'Proceed' }).click();
      await expect(page.getByTestId('amount-error')).toContainText(row.error);
    });
  }
});</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>Security Tests — security.spec.ts</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">TypeScript — security.spec.ts</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-typescript">import { test, expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

const sqlPayloads = [
  "' OR '1'='1",
  "admin'--",
  "' OR 1=1--",
];

for (const payload of sqlPayloads) {
  test(\`SQL injection blocked: \${payload}\`, async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Username').fill(payload);
    await page.getByLabel('Password').fill('anything');
    await page.getByRole('button', { name: 'Login' }).click();

    // Must NOT land on dashboard
    await expect(page).not.toHaveURL('/dashboard');
    // Must show an error
    await expect(page.getByTestId('error-alert')).toBeVisible();
  });
}

test('XSS in remarks field is sanitised', async ({ page }) => {
  // Assume logged-in context (storageState applied by config)
  await page.goto('/transfer');
  await page.getByLabel('Remarks').fill('&lt;script&gt;alert("xss")&lt;/script&gt;');
  await page.getByRole('button', { name: 'Proceed' }).click();

  // No alert dialog should appear
  page.on('dialog', dialog => {
    throw new Error(\`XSS vulnerability: dialog appeared with "\${dialog.message()}"\`);
  });

  // Wait briefly for any potential dialog
  await page.waitForTimeout(1000);
});

test('protected route redirects unauthenticated user to login', async ({ page }) => {
  // Fresh context — not logged in
  await page.goto('/transfer');
  await expect(page).toHaveURL('/login');
});</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How do you handle OTP in Playwright automation for a banking application?",
        a: `<div class="ans-hero">Use page.route() to intercept the OTP API and return a known value, OR configure the UAT environment to accept a fixed OTP stored in the environment config.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Approach 1: Fixed OTP in UAT env</div><div class="step-desc">Dev team configures UAT to accept 123456 as a bypass OTP. Test fills page.getByLabel('OTP').fill('123456'). Simple, no interception needed.</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Approach 2: Intercept OTP API</div><div class="step-desc">await page.route('**/api/otp/**', route => route.fulfill({ json: { otp: '123456' } })). Test never sees real OTP.</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Approach 3: API retrieval</div><div class="step-desc">const otpRes = await request.get('/test-api/latest-otp?user=karan@bankapp.com'); const otp = (await otpRes.json()).otp; await page.getByLabel('OTP').fill(otp);</div></div></div>
        </div>`
      },
      {
        difficulty: 'hard',
        q: "How do you run Playwright tests for two different user roles (admin and customer) in parallel without session conflicts?",
        a: `<div class="ans-hero">Create two storageState files (admin.json, customer.json) from separate auth setups. Use test.use({ storageState }) to assign each test to the right session. BrowserContext keeps them isolated.</div>
        <div class="code-block"><code><span class="cm">// auth.setup.ts — save both sessions</span>
<span class="fn">setup</span>(<span class="st">'admin login'</span>, <span class="kw">async</span> ({ page }) => {
  <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/login'</span>);
  <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Username'</span>).<span class="fn">fill</span>(<span class="st">'admin@bankapp.com'</span>);
  <span class="cm">// ... complete login</span>
  <span class="kw">await</span> page.<span class="fn">context</span>().<span class="fn">storageState</span>({ path: <span class="st">'auth/admin.json'</span> });
});

<span class="cm">// In admin tests:</span>
test.<span class="fn">use</span>({ storageState: <span class="st">'auth/admin.json'</span> });

<span class="cm">// In customer tests:</span>
test.<span class="fn">use</span>({ storageState: <span class="st">'auth/customer.json'</span> });</code></div>
        <div class="info-panel tip"><div class="panel-title">Key point</div><p>Each test gets its own BrowserContext loaded from the right storageState — admin and customer tests run simultaneously on separate workers with zero session interference.</p></div>`
      }
    ]
  }
];
