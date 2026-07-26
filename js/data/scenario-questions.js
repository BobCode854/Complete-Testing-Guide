// ================================================================
// SCENARIO BASED QUESTIONS DATA
// ================================================================
const SCENARIO_QUESTIONS = {

  manual: [
    // ── EASY ──
    {
      difficulty: 'easy',
      q: "You are testing a login page of a banking application. The login button is not working at all. What type of bug is this — and what severity/priority would you assign?",
      a: `<div class="ans-hero">Login button not working = Critical Severity, High Priority — it blocks all users from accessing the app.</div>
      <ul class="ans-list">
        <li><span class="icon">🔴</span><strong>Severity: Critical</strong> — login is the entry point to the entire application. Without it, nothing works.</li>
        <li><span class="icon">🔴</span><strong>Priority: High</strong> — it affects every single user; must be fixed before any testing can proceed.</li>
        <li><span class="icon">📋</span><strong>Action:</strong> Raise a defect immediately with steps to reproduce, screenshots, and mark it as "Blocker".</li>
        <li><span class="icon">🚫</span><strong>What NOT to do:</strong> Do not skip this and continue testing other features — this is a showstopper bug.</li>
      </ul>`
    },
    {
      difficulty: 'easy',
      q: "You receive a new build of an e-commerce app. You don't know where to start testing. What is the first thing you do?",
      a: `<div class="ans-hero">First perform Smoke Testing — verify the critical features are working before doing detailed testing.</div>
      <ul class="ans-list green">
        <li><span class="icon">1️⃣</span>Check if the app launches without crashing</li>
        <li><span class="icon">2️⃣</span>Check if login works with valid credentials</li>
        <li><span class="icon">3️⃣</span>Check if the home/product page loads</li>
        <li><span class="icon">4️⃣</span>Check if you can add a product to cart</li>
        <li><span class="icon">5️⃣</span>Check if checkout page opens</li>
      </ul>
      <div class="info-panel tip"><div class="panel-title">Why Smoke First?</div><p>If any of these core flows are broken, there is no point doing deep testing — the build itself is unstable.</p></div>`
    },
    {
      difficulty: 'easy',
      q: "A developer tells you 'I fixed the bug where users could not upload a profile picture.' What type of testing do you do next?",
      a: `<div class="ans-hero">Sanity Testing — specifically test the profile picture upload feature to confirm the fix works.</div>
      <div class="compare-grid">
        <div class="compare-card green"><h6>What TO Test</h6>Upload valid image (JPG, PNG) → succeeds<br/>Upload oversized file → shows error<br/>Upload invalid type (PDF) → shows error<br/>Upload and view — displays correctly</div>
        <div class="compare-card red"><h6>What NOT TO Test (yet)</h6>Don't re-run all 500 test cases. That is regression testing — which comes after sanity passes.</div>
      </div>`
    },
    {
      difficulty: 'easy',
      q: "You are writing test cases for a date-of-birth field that accepts ages between 18 and 60. What values would you test?",
      a: `<div class="ans-hero">Use Boundary Value Analysis (BVA) + Equivalence Partitioning.</div>
      <table class="table-light-custom">
        <thead><tr><th>Value</th><th>Type</th><th>Expected Result</th></tr></thead>
        <tbody>
          <tr><td>17</td><td>Below minimum boundary</td><td>❌ Error: must be 18+</td></tr>
          <tr><td>18</td><td>Minimum boundary (valid)</td><td>✅ Accepted</td></tr>
          <tr><td>19</td><td>Just above minimum</td><td>✅ Accepted</td></tr>
          <tr><td>35</td><td>Middle valid value</td><td>✅ Accepted</td></tr>
          <tr><td>59</td><td>Just below maximum</td><td>✅ Accepted</td></tr>
          <tr><td>60</td><td>Maximum boundary (valid)</td><td>✅ Accepted</td></tr>
          <tr><td>61</td><td>Above maximum boundary</td><td>❌ Error: must be 60 or below</td></tr>
          <tr><td>0 or negative</td><td>Invalid</td><td>❌ Error</td></tr>
          <tr><td>abc (letters)</td><td>Invalid type</td><td>❌ Error: numbers only</td></tr>
        </tbody>
      </table>`
    },
    {
      difficulty: 'easy',
      q: "Your test case says: 'Enter valid username and password and click Login'. The test passes but later a customer reports they cannot login. What went wrong?",
      a: `<div class="ans-hero">The test case was too generic — it didn't cover edge cases or the specific scenario the customer faced.</div>
      <ul class="ans-list amber">
        <li><span class="icon">⚠️</span>The test only covered the "happy path" (valid data), not edge cases</li>
        <li><span class="icon">⚠️</span>What if the customer used a special character in their password?</li>
        <li><span class="icon">⚠️</span>What if they logged in from a different browser/device?</li>
        <li><span class="icon">⚠️</span>What if the session timeout scenario was not tested?</li>
      </ul>
      <div class="info-panel tip"><div class="panel-title">Lesson</div><p>Good test cases must cover: valid data, invalid data, boundary values, special characters, empty fields, and different environments.</p></div>`
    },
    {
      difficulty: 'easy',
      q: "You find 5 bugs in the application. How do you decide which one to report first?",
      a: `<div class="ans-hero">Prioritize by Severity first, then Priority — report Blockers and Critical bugs immediately.</div>
      <table class="table-light-custom">
        <thead><tr><th>Bug</th><th>Severity</th><th>Report Order</th></tr></thead>
        <tbody>
          <tr><td>Login page crashes</td><td>Critical/Blocker</td><td>1st — blocks all testing</td></tr>
          <tr><td>Transfer money shows wrong amount</td><td>Critical</td><td>2nd — financial data issue</td></tr>
          <tr><td>Dashboard page takes 10 seconds to load</td><td>Major</td><td>3rd — performance issue</td></tr>
          <tr><td>Spelling mistake in error message</td><td>Minor</td><td>4th — cosmetic issue</td></tr>
          <tr><td>Footer copyright year is 2022</td><td>Trivial</td><td>5th — no functional impact</td></tr>
        </tbody>
      </table>`
    },
    {
      difficulty: 'easy',
      q: "What will you do if you find a bug but the developer says 'It's working as designed'?",
      a: `<div class="ans-hero">Escalate with proof — refer to requirements document; if behaviour contradicts requirements, it IS a bug.</div>
      <ul class="ans-list">
        <li><span class="icon">1️⃣</span>Check the <strong>FRS / BRS / requirements document</strong> for the expected behaviour</li>
        <li><span class="icon">2️⃣</span>If requirements say it should work differently → it IS a bug; escalate to BA or PM</li>
        <li><span class="icon">3️⃣</span>If requirements are silent → discuss with the BA to get clarification</li>
        <li><span class="icon">4️⃣</span>Document the discussion and the final decision in the bug report</li>
        <li><span class="icon">5️⃣</span>Never close the bug unilaterally — get written sign-off from BA/PM</li>
      </ul>`
    },
    {
      difficulty: 'easy',
      q: "You are asked to test a payment page but the requirements document hasn't been provided yet. What do you do?",
      a: `<div class="ans-hero">Do not start formal testing — but you CAN do exploratory testing and document assumptions.</div>
      <ul class="ans-list green">
        <li><span class="icon">1️⃣</span>Communicate to your test lead / PM that requirements are missing</li>
        <li><span class="icon">2️⃣</span>Ask for at least a basic feature description or user story</li>
        <li><span class="icon">3️⃣</span>Meanwhile, do exploratory testing — explore the feature and document what you find</li>
        <li><span class="icon">4️⃣</span>Document all your assumptions — e.g. "I assumed payment above ₹1 lakh requires OTP"</li>
        <li><span class="icon">5️⃣</span>Once requirements arrive, validate assumptions and write proper test cases</li>
      </ul>`
    },

    // ── MEDIUM ──
    {
      difficulty: 'medium',
      q: "The application was working fine yesterday. Today, after a hotfix deployment, the 'Add to Cart' button is not working. What type of bug is this and what is your next step?",
      a: `<div class="ans-hero">This is a Regression Bug — the hotfix introduced a side-effect that broke existing functionality.</div>
      <ul class="ans-list">
        <li><span class="icon">🔍</span><strong>Confirm:</strong> Verify the bug is reproducible — try multiple browsers and sessions</li>
        <li><span class="icon">📸</span><strong>Document:</strong> Capture screenshots, console errors, and note the exact steps</li>
        <li><span class="icon">🐛</span><strong>Raise a bug</strong> marked as Regression with severity "Critical" (blocks purchase flow)</li>
        <li><span class="icon">🔗</span><strong>Link to the hotfix</strong> deployment — mention in the bug "Issue started after hotfix v1.2.1"</li>
        <li><span class="icon">🔄</span><strong>Suggest rollback</strong> if fix cannot be delivered quickly — communicate to dev lead</li>
      </ul>
      <div class="info-panel warning"><div class="panel-title">Key Point</div><p>Always check the deployment log when a previously working feature suddenly breaks — 95% of the time it is caused by a recent code change.</p></div>`
    },
    {
      difficulty: 'medium',
      q: "You are testing a bank transfer feature. After a successful transfer of ₹10,000, the sender's balance is deducted but the receiver's balance is NOT updated. What type of issue is this and how do you report it?",
      a: `<div class="ans-hero">This is a Critical Integration Bug — the Transfer module is not communicating correctly with the Account Balance module.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>What Happened</h6>Transfer module deducted ₹10,000 from sender ✅<br/>But did NOT credit ₹10,000 to receiver ❌<br/>This means data flow between modules is broken</div>
        <div class="compare-card blue"><h6>Bug Report Contents</h6>Title: Transfer deducts from sender but receiver not credited<br/>Severity: Critical (financial data loss)<br/>Priority: High<br/>Steps, Expected, Actual, Screenshots</div>
      </div>
      <div class="info-panel danger"><div class="panel-title" style="color:var(--danger)">Why Critical?</div><p>This is a data integrity issue in a banking app. Real money is involved. This must be a P0 blocker — app cannot go live with this bug.</p></div>`
    },
    {
      difficulty: 'medium',
      q: "You have 200 test cases to execute and only 2 days. How do you prioritise?",
      a: `<div class="ans-hero">Apply Risk-Based Testing — prioritise test cases by business impact, critical paths, and areas most likely to fail.</div>
      <ul class="ans-list blue">
        <li><span class="icon">1️⃣</span><strong>P1 — Critical flows:</strong> Login, Checkout, Payment — execute these first (approx. 20% of cases)</li>
        <li><span class="icon">2️⃣</span><strong>P2 — High-impact features:</strong> Core CRUD operations, data validation, API responses</li>
        <li><span class="icon">3️⃣</span><strong>P3 — Recently changed areas:</strong> Features touched in this sprint are highest risk</li>
        <li><span class="icon">4️⃣</span><strong>P4 — Low-risk cosmetic:</strong> UI alignment, colours, spelling — execute last if time permits</li>
        <li><span class="icon">5️⃣</span><strong>Communicate:</strong> Report to lead what was covered and what was deferred — document the risk</li>
      </ul>`
    },
    {
      difficulty: 'medium',
      q: "In an Agile sprint, a developer says 'this feature is too small to test.' How do you respond?",
      a: `<div class="ans-hero">No feature is too small to test — even a "small" change can break existing functionality through unintended side effects.</div>
      <ul class="ans-list">
        <li><span class="icon">🗣️</span>Politely explain that <strong>every code change carries risk</strong> — even a 1-line change can break something</li>
        <li><span class="icon">📋</span>Reference the Definition of Done — in most teams, testing sign-off is required before closing a story</li>
        <li><span class="icon">🔄</span>Point to past examples where "small" changes caused regression bugs</li>
        <li><span class="icon">⏱️</span>Propose a time-boxed quick test: "Give me 30 minutes — I'll do a smoke + sanity check"</li>
        <li><span class="icon">✅</span>Document the outcome — if skipped, note it as an accepted risk with approval from PM</li>
      </ul>`
    },
    {
      difficulty: 'medium',
      q: "You found a critical bug on the last day before release. The PM says we will fix it in the next release. What do you do?",
      a: `<div class="ans-hero">As a tester, your job is to report the risk clearly — the final release decision belongs to PM/stakeholders, but you must document your recommendation.</div>
      <ul class="ans-list">
        <li><span class="icon">📋</span><strong>Document the bug</strong> with full details, severity, and business impact</li>
        <li><span class="icon">⚠️</span><strong>Clearly communicate the risk</strong> — "This bug affects X% of users and may cause Y problem"</li>
        <li><span class="icon">📧</span><strong>Put it in writing</strong> — email/Jira comment stating the risk of releasing with this known issue</li>
        <li><span class="icon">🤝</span><strong>Get sign-off</strong> — PM/stakeholder formally acknowledges and accepts the risk in writing</li>
        <li><span class="icon">✅</span>Do NOT block the release on your own — your job is to flag, not decide</li>
      </ul>`
    },
    {
      difficulty: 'medium',
      q: "You are testing an OTP feature. The OTP should expire after 5 minutes. How do you test this?",
      a: `<div class="ans-hero">Test OTP expiry with boundary values and negative scenarios around the 5-minute window.</div>
      <table class="table-light-custom">
        <thead><tr><th>Test Case</th><th>Action</th><th>Expected</th></tr></thead>
        <tbody>
          <tr><td>Valid OTP within 1 min</td><td>Enter OTP at 1 min</td><td>✅ Success</td></tr>
          <tr><td>Valid OTP at exactly 4:59</td><td>Enter OTP just before expiry</td><td>✅ Success</td></tr>
          <tr><td>OTP exactly at 5:00</td><td>Enter OTP at boundary</td><td>Clarify with dev — should this pass or fail?</td></tr>
          <tr><td>OTP after 5:01</td><td>Enter OTP just after expiry</td><td>❌ "OTP has expired" message</td></tr>
          <tr><td>OTP after 10 minutes</td><td>Enter OTP long after expiry</td><td>❌ "OTP has expired" message</td></tr>
          <tr><td>Wrong OTP</td><td>Enter incorrect OTP</td><td>❌ "Invalid OTP" message</td></tr>
          <tr><td>Same OTP used twice</td><td>Re-use already used OTP</td><td>❌ "OTP already used"</td></tr>
        </tbody>
      </table>`
    },

    // ── HARD ──
    {
      difficulty: 'hard',
      q: "The production server is down and customers cannot access the banking app. You are the on-call tester. Walk me through what you do.",
      a: `<div class="ans-hero">Follow the incident response protocol — verify, document, escalate, and support the fix verification.</div>
      <ul class="ans-list red">
        <li><span class="icon">1️⃣</span><strong>Verify independently:</strong> Try to reproduce from multiple devices/networks — confirm it's not a local issue</li>
        <li><span class="icon">2️⃣</span><strong>Check monitoring dashboards:</strong> Grafana, CloudWatch, or equivalent — is it server or DB?</li>
        <li><span class="icon">3️⃣</span><strong>Escalate immediately:</strong> Alert on-call developer, DevOps engineer, and test lead — do NOT wait</li>
        <li><span class="icon">4️⃣</span><strong>Document the incident:</strong> Time of detection, symptoms, affected users/regions</li>
        <li><span class="icon">5️⃣</span><strong>Support the fix:</strong> Once DevOps deploys a fix, immediately run smoke tests to verify recovery</li>
        <li><span class="icon">6️⃣</span><strong>Post-incident:</strong> Write a test for this scenario so it can be detected earlier next time</li>
      </ul>`
    },
    {
      difficulty: 'hard',
      q: "You are in a sprint where there are 50 new test cases and also 200 regression test cases to run. You only have 3 days. What is your strategy?",
      a: `<div class="ans-hero">Split effort: automate regression, manually test new cases, and risk-prioritise everything.</div>
      <ul class="ans-list blue">
        <li><span class="icon">🤖</span><strong>Automation first:</strong> If a regression suite exists, trigger automated regression — runs 200 cases in hours, freeing you for new cases</li>
        <li><span class="icon">🎯</span><strong>Risk-based selection:</strong> From 50 new cases, prioritise P1 (core flows) — execute these first</li>
        <li><span class="icon">📊</span><strong>Impact analysis:</strong> Identify which of the 200 regression cases cover areas touched by this sprint's changes — run those manually if automation isn't complete</li>
        <li><span class="icon">⏱️</span><strong>Time-box:</strong> Day 1 = new critical + high cases. Day 2 = new medium cases + triggered regression. Day 3 = review results + retest failed cases</li>
        <li><span class="icon">📢</span><strong>Communicate gaps:</strong> Report to lead what was covered vs deferred — document risk for deferred cases</li>
      </ul>`
    },
    {
      difficulty: 'hard',
      q: "During UAT, the client is testing the fund transfer feature and says 'the behaviour is different from what we expected.' But the feature was built exactly as per the signed-off requirements document. How do you handle this?",
      a: `<div class="ans-hero">This is a requirements gap issue — the client's actual expectation was never captured in writing correctly.</div>
      <ul class="ans-list">
        <li><span class="icon">1️⃣</span><strong>Stay neutral:</strong> Do not say "the requirements are correct and you are wrong"</li>
        <li><span class="icon">2️⃣</span><strong>Pull up the signed-off requirements</strong> and compare point by point with client's expectation</li>
        <li><span class="icon">3️⃣</span><strong>Identify the gap:</strong> Is it a missing requirement? An ambiguous statement? A changed business need?</li>
        <li><span class="icon">4️⃣</span><strong>Involve BA immediately:</strong> This is a change request or a requirements defect — needs BA + client alignment</li>
        <li><span class="icon">5️⃣</span><strong>Document everything:</strong> New expectation, current behaviour, gap analysis — in writing</li>
        <li><span class="icon">6️⃣</span><strong>Change request process:</strong> If it's a new expectation, raise a CR — estimate impact and timeline with dev lead</li>
      </ul>`
    },
    {
      difficulty: 'hard',
      q: "Explain how you would test a Search feature in an e-commerce application end-to-end.",
      a: `<div class="ans-hero">Test search across: functional, edge cases, performance, UI, and integration with backend.</div>
      <table class="table-light-custom">
        <thead><tr><th>Category</th><th>Test Scenario</th><th>Expected</th></tr></thead>
        <tbody>
          <tr><td>Functional</td><td>Search exact product name "iPhone 15"</td><td>iPhone 15 results shown</td></tr>
          <tr><td>Functional</td><td>Search partial name "iPh"</td><td>Auto-suggestions / partial matches shown</td></tr>
          <tr><td>Edge Case</td><td>Search with special chars "iPhone@#$"</td><td>No crash; "no results" or sanitized search</td></tr>
          <tr><td>Edge Case</td><td>Empty search → click search</td><td>Error message or show all products</td></tr>
          <tr><td>Edge Case</td><td>Search with 1000 characters</td><td>Handled gracefully — no server error</td></tr>
          <tr><td>Case sensitivity</td><td>"iphone" vs "IPHONE"</td><td>Same results — search should be case-insensitive</td></tr>
          <tr><td>Performance</td><td>Search response time</td><td>Results appear within 2 seconds</td></tr>
          <tr><td>Integration</td><td>Search result matches database inventory</td><td>Out-of-stock items handled correctly</td></tr>
          <tr><td>Filter</td><td>Apply price filter on search results</td><td>Only items in range shown</td></tr>
          <tr><td>Sort</td><td>Sort search results by rating</td><td>Highest rated shown first</td></tr>
        </tbody>
      </table>`
    },
    {
      difficulty: 'hard',
      q: "Your automation suite has 1000 test cases and 20% are flaky (sometimes pass, sometimes fail without code changes). How do you fix this?",
      a: `<div class="ans-hero">Flaky tests are usually caused by timing issues, test data conflicts, or environment dependencies — fix each root cause.</div>
      <ul class="ans-list">
        <li><span class="icon">1️⃣</span><strong>Identify patterns:</strong> Which tests are flaky? Are they always the same 200? Or random? Log the failure patterns over 10 runs</li>
        <li><span class="icon">⏱️</span><strong>Timing issues (most common):</strong> Replace <code>Thread.sleep()</code> with explicit waits <code>WebDriverWait</code> — wait for specific element conditions</li>
        <li><span class="icon">🗄️</span><strong>Test data conflicts:</strong> Tests sharing the same data cause flakiness — give each test isolated, independent test data</li>
        <li><span class="icon">🌐</span><strong>Environment issues:</strong> Some tests fail on slow CI servers — add environment checks and appropriate timeouts</li>
        <li><span class="icon">🔀</span><strong>Test dependency:</strong> Tests relying on execution order fail when run in parallel — make each test fully independent</li>
        <li><span class="icon">🏷️</span><strong>Quarantine strategy:</strong> Tag flaky tests, exclude from main suite while fixing — keep main suite green</li>
      </ul>`
    }
  ],

  selenium: [
    {
      difficulty: 'easy',
      q: "You need to click a button that appears only after hovering over a menu item. How do you do this in Selenium?",
      a: `<div class="ans-hero">Use the Actions class to perform hover (moveToElement) then click the appearing element.</div>
      <div class="code-block"><code><span class="kw">Actions</span> actions = <span class="kw">new</span> <span class="fn">Actions</span>(driver);
<span class="cl">WebElement</span> menu = driver.<span class="fn">findElement</span>(By.<span class="fn">id</span>(<span class="st">"mainMenu"</span>));
<span class="cl">WebElement</span> subItem = driver.<span class="fn">findElement</span>(By.<span class="fn">id</span>(<span class="st">"subMenuItem"</span>));
actions.<span class="fn">moveToElement</span>(menu).<span class="fn">pause</span>(500).<span class="fn">click</span>(subItem).<span class="fn">perform</span>();</code></div>
      <ul class="ans-list blue">
        <li><span class="icon">💡</span>The <code>.pause(500)</code> gives the sub-menu time to appear after hover</li>
        <li><span class="icon">💡</span>Always use <code>WebDriverWait</code> to wait for the sub-item to be visible before clicking</li>
      </ul>`
    },
    {
      difficulty: 'easy',
      q: "An element is present in the DOM but not visible on screen. Your findElement() finds it but click() does nothing. How do you fix this?",
      a: `<div class="ans-hero">Scroll the element into view using JavascriptExecutor before clicking.</div>
      <div class="code-block"><code><span class="cl">WebElement</span> element = driver.<span class="fn">findElement</span>(By.<span class="fn">id</span>(<span class="st">"submitBtn"</span>));
<span class="cl">JavascriptExecutor</span> js = (<span class="cl">JavascriptExecutor</span>) driver;
js.<span class="fn">executeScript</span>(<span class="st">"arguments[0].scrollIntoView(true);"</span>, element);
js.<span class="fn">executeScript</span>(<span class="st">"arguments[0].click();"</span>, element); <span class="cm">// JS click if normal click fails</span></code></div>
      <ul class="ans-list green">
        <li><span class="icon">✅</span>Scroll into view ensures the element is in the viewport</li>
        <li><span class="icon">✅</span>JS click bypasses overlay elements that might be intercepting the click</li>
      </ul>`
    },
    {
      difficulty: 'easy',
      q: "You need to select 'India' from a country dropdown. How do you do it in Selenium?",
      a: `<div class="ans-hero">Use the Select class for HTML &lt;select&gt; dropdowns — three methods available.</div>
      <div class="code-block"><code><span class="cl">Select</span> dropdown = <span class="kw">new</span> <span class="cl">Select</span>(driver.<span class="fn">findElement</span>(By.<span class="fn">id</span>(<span class="st">"country"</span>)));

<span class="cm">// Method 1: by visible text</span>
dropdown.<span class="fn">selectByVisibleText</span>(<span class="st">"India"</span>);

<span class="cm">// Method 2: by value attribute</span>
dropdown.<span class="fn">selectByValue</span>(<span class="st">"IN"</span>);

<span class="cm">// Method 3: by index (0-based)</span>
dropdown.<span class="fn">selectByIndex</span>(<span class="num">2</span>);</code></div>
      <div class="info-panel tip"><div class="panel-title">Important</div><p>Select class only works with native HTML <code>&lt;select&gt;</code> elements. For custom dropdowns (built with div/ul), use click() + findElement().</p></div>`
    },
    {
      difficulty: 'easy',
      q: "Your test opens a new browser tab after clicking a link. Now Selenium is still controlling the old tab. How do you switch to the new tab?",
      a: `<div class="ans-hero">Use getWindowHandles() to get all window handles, then switch to the new one.</div>
      <div class="code-block"><code><span class="cl">String</span> originalWindow = driver.<span class="fn">getWindowHandle</span>();

<span class="cm">// Click the link that opens a new tab</span>
driver.<span class="fn">findElement</span>(By.<span class="fn">linkText</span>(<span class="st">"Open Statement"</span>)).<span class="fn">click</span>();

<span class="cm">// Get all window handles</span>
<span class="kw">for</span> (<span class="cl">String</span> handle : driver.<span class="fn">getWindowHandles</span>()) {
    <span class="kw">if</span> (!handle.<span class="fn">equals</span>(originalWindow)) {
        driver.<span class="fn">switchTo</span>().<span class="fn">window</span>(handle);
        <span class="kw">break</span>;
    }
}
<span class="cm">// Now on new tab — do your work</span>

<span class="cm">// Switch back to original tab</span>
driver.<span class="fn">switchTo</span>().<span class="fn">window</span>(originalWindow);</code></div>`
    },
    {
      difficulty: 'easy',
      q: "An alert/popup appears unexpectedly during your test and causes it to fail. How do you handle it?",
      a: `<div class="ans-hero">Use driver.switchTo().alert() to handle JS alerts, confirms, and prompts.</div>
      <div class="code-block"><code><span class="kw">try</span> {
    <span class="cl">Alert</span> alert = driver.<span class="fn">switchTo</span>().<span class="fn">alert</span>();
    <span class="cl">String</span> text = alert.<span class="fn">getText</span>();    <span class="cm">// Read alert message</span>
    System.out.<span class="fn">println</span>(<span class="st">"Alert: "</span> + text);
    alert.<span class="fn">accept</span>();                   <span class="cm">// Click OK</span>
    <span class="cm">// alert.dismiss();               // Click Cancel</span>
    <span class="cm">// alert.sendKeys("text");        // For prompt alerts</span>
} <span class="kw">catch</span> (<span class="cl">NoAlertPresentException</span> e) {
    System.out.<span class="fn">println</span>(<span class="st">"No alert present"</span>);
}</code></div>`
    },
    {
      difficulty: 'medium',
      q: "Your test is failing because the element loads dynamically via AJAX (appears after a delay). Thread.sleep() works but is unreliable. What is the right approach?",
      a: `<div class="ans-hero">Use WebDriverWait with ExpectedConditions — waits for a specific condition rather than a fixed time.</div>
      <div class="code-block"><code><span class="cl">WebDriverWait</span> wait = <span class="kw">new</span> <span class="cl">WebDriverWait</span>(driver, <span class="cl">Duration</span>.<span class="fn">ofSeconds</span>(<span class="num">10</span>));

<span class="cm">// Wait until element is clickable</span>
<span class="cl">WebElement</span> el = wait.<span class="fn">until</span>(
    <span class="cl">ExpectedConditions</span>.<span class="fn">elementToBeClickable</span>(By.<span class="fn">id</span>(<span class="st">"submitBtn"</span>))
);
el.<span class="fn">click</span>();

<span class="cm">// Wait for text to be present</span>
wait.<span class="fn">until</span>(<span class="cl">ExpectedConditions</span>.<span class="fn">textToBePresentInElement</span>(
    driver.<span class="fn">findElement</span>(By.<span class="fn">id</span>(<span class="st">"status"</span>)), <span class="st">"Success"</span>
));</code></div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>❌ Thread.sleep(3000)</h6>Always waits 3 seconds even if element is ready in 0.5s. Slow and unreliable.</div>
        <div class="compare-card green"><h6>✅ WebDriverWait</h6>Polls every 500ms for up to 10 seconds. Returns as soon as condition is met. Fast and reliable.</div>
      </div>`
    },
    {
      difficulty: 'medium',
      q: "You have a login test and a transfer test. The transfer test requires a logged-in user. They currently set up their own drivers separately. How do you improve this?",
      a: `<div class="ans-hero">Use Page Object Model with a shared BaseTest class that handles setup/teardown — avoid duplicate driver setup.</div>
      <div class="code-block"><code><span class="kw">public class</span> <span class="cl">BaseTest</span> {
    <span class="kw">protected</span> <span class="cl">WebDriver</span> driver;

    <span class="ann">@BeforeMethod</span>
    <span class="kw">public void</span> <span class="fn">setUp</span>() {
        driver = <span class="kw">new</span> <span class="cl">ChromeDriver</span>();
        driver.manage().window().<span class="fn">maximize</span>();
        driver.manage().timeouts().<span class="fn">implicitlyWait</span>(<span class="cl">Duration</span>.<span class="fn">ofSeconds</span>(<span class="num">10</span>));
    }

    <span class="ann">@AfterMethod</span>
    <span class="kw">public void</span> <span class="fn">tearDown</span>() {
        <span class="kw">if</span> (driver != <span class="kw">null</span>) driver.<span class="fn">quit</span>();
    }
}

<span class="kw">public class</span> <span class="cl">TransferTest</span> <span class="kw">extends</span> <span class="cl">BaseTest</span> {
    <span class="ann">@Test</span>
    <span class="kw">public void</span> <span class="fn">testTransfer</span>() {
        <span class="kw">new</span> <span class="cl">LoginPage</span>(driver).<span class="fn">login</span>(<span class="st">"user"</span>, <span class="st">"pass"</span>);
        <span class="kw">new</span> <span class="cl">TransferPage</span>(driver).<span class="fn">transfer</span>(<span class="st">"ACC1234"</span>, <span class="num">5000</span>);
    }
}</code></div>`
    },
    {
      difficulty: 'medium',
      q: "You get a StaleElementReferenceException when clicking a button after the page partially refreshes. How do you fix this?",
      a: `<div class="ans-hero">The element was found before a DOM refresh — re-find the element after the refresh happens.</div>
      <ul class="ans-list">
        <li><span class="icon">❌</span><strong>Why it happens:</strong> DOM refreshed/updated after you found the element, making the reference "stale"</li>
        <li><span class="icon">✅</span><strong>Fix 1 — Re-find after action:</strong> Find the element AGAIN after any action that triggers a DOM update</li>
        <li><span class="icon">✅</span><strong>Fix 2 — Retry loop:</strong></li>
      </ul>
      <div class="code-block"><code><span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < <span class="num">3</span>; i++) {
    <span class="kw">try</span> {
        driver.<span class="fn">findElement</span>(By.<span class="fn">id</span>(<span class="st">"confirmBtn"</span>)).<span class="fn">click</span>();
        <span class="kw">break</span>;
    } <span class="kw">catch</span> (<span class="cl">StaleElementReferenceException</span> e) {
        <span class="cm">// Element went stale, retry</span>
    }
}</code></div>`
    },
    {
      difficulty: 'medium',
      q: "The locator By.id('username') worked yesterday but breaks today because the developer changed the id dynamically. What do you do?",
      a: `<div class="ans-hero">Switch to a more stable locator strategy — prefer attributes that developers don't change dynamically.</div>
      <ul class="ans-list blue">
        <li><span class="icon">1️⃣</span><strong>Use name attribute:</strong> <code>By.name("username")</code> — usually stable</li>
        <li><span class="icon">2️⃣</span><strong>Use CSS with partial match:</strong> <code>By.cssSelector("[id*='user']")</code> — matches if id contains 'user'</li>
        <li><span class="icon">3️⃣</span><strong>Use XPath with text:</strong> <code>By.xpath("//input[@placeholder='Enter username']")</code></li>
        <li><span class="icon">4️⃣</span><strong>Best practice:</strong> Ask developers to add <code>data-testid="username-input"</code> — a stable, automation-specific attribute</li>
        <li><span class="icon">5️⃣</span><strong>Use relative XPath:</strong> Navigate via parent container to the input, not directly by volatile id</li>
      </ul>`
    },
    {
      difficulty: 'hard',
      q: "You need to test file upload functionality. A file input is present but the OS file dialog opens when you click it — Selenium cannot interact with OS dialogs. How do you handle this?",
      a: `<div class="ans-hero">Use sendKeys() directly on the file input element — bypasses the OS dialog entirely.</div>
      <div class="code-block"><code><span class="cl">WebElement</span> fileInput = driver.<span class="fn">findElement</span>(By.<span class="fn">id</span>(<span class="st">"fileUpload"</span>));
<span class="cm">// Send absolute file path directly — no dialog opens</span>
fileInput.<span class="fn">sendKeys</span>(<span class="st">"/Users/karan/Documents/test_document.pdf"</span>);

<span class="cm">// Then click upload/submit button</span>
driver.<span class="fn">findElement</span>(By.<span class="fn">id</span>(<span class="st">"uploadBtn"</span>)).<span class="fn">click</span>();

<span class="cm">// Wait for upload success message</span>
<span class="kw">new</span> <span class="cl">WebDriverWait</span>(driver, <span class="cl">Duration</span>.<span class="fn">ofSeconds</span>(<span class="num">15</span>)).<span class="fn">until</span>(
    <span class="cl">ExpectedConditions</span>.<span class="fn">visibilityOfElementLocated</span>(By.<span class="fn">id</span>(<span class="st">"uploadSuccess"</span>))
);</code></div>
      <div class="info-panel tip"><div class="panel-title">Important</div><p>The file input must be of type="file". If it's hidden (display:none), make it visible first using JavascriptExecutor before calling sendKeys.</p></div>`
    },
    {
      difficulty: 'hard',
      q: "You need to run 500 test cases in parallel across Chrome, Firefox, and Edge. How do you set this up?",
      a: `<div class="ans-hero">Use Selenium Grid with TestNG parallel execution — distribute tests across browser nodes.</div>
      <div class="code-block"><code><span class="cm">// testng.xml — parallel execution</span>
&lt;suite name="CrossBrowserSuite" parallel="tests" thread-count="3"&gt;
  &lt;test name="Chrome"&gt;
    &lt;parameter name="browser" value="chrome"/&gt;
    &lt;classes&gt;&lt;class name="tests.LoginTest"/&gt;&lt;/classes&gt;
  &lt;/test&gt;
  &lt;test name="Firefox"&gt;
    &lt;parameter name="browser" value="firefox"/&gt;
    &lt;classes&gt;&lt;class name="tests.LoginTest"/&gt;&lt;/classes&gt;
  &lt;/test&gt;
  &lt;test name="Edge"&gt;
    &lt;parameter name="browser" value="edge"/&gt;
    &lt;classes&gt;&lt;class name="tests.LoginTest"/&gt;&lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;</code></div>
      <ul class="ans-list green">
        <li><span class="icon">🖥️</span>Start Selenium Grid Hub + register browser nodes</li>
        <li><span class="icon">🧵</span>Use ThreadLocal&lt;WebDriver&gt; to keep each thread's driver isolated</li>
        <li><span class="icon">☁️</span>Alternatively: use cloud services like Sauce Labs, BrowserStack, or LambdaTest</li>
      </ul>`
    },
    {
      difficulty: 'hard',
      q: "You need to verify that an email was sent after a user registers on a website. How do you automate this?",
      a: `<div class="ans-hero">Use a test email API (e.g. Mailosaur, MailHog, or Gmail API) to fetch and verify the received email programmatically.</div>
      <ul class="ans-list blue">
        <li><span class="icon">1️⃣</span><strong>Setup test inbox:</strong> Use Mailosaur — creates a disposable inbox per test, accessible via API</li>
        <li><span class="icon">2️⃣</span><strong>Register with test email:</strong> Use <code>test123@mailosaur.net</code> (Mailosaur managed address)</li>
        <li><span class="icon">3️⃣</span><strong>Poll for email via API:</strong></li>
      </ul>
      <div class="code-block"><code>MailosaurClient client = <span class="kw">new</span> <span class="cl">MailosaurClient</span>(<span class="st">"API_KEY"</span>);
<span class="cl">Message</span> email = client.messages().<span class="fn">get</span>(serverId, <span class="kw">new</span> <span class="cl">SearchCriteria</span>()
    .<span class="fn">withSentTo</span>(<span class="st">"test123@mailosaur.net"</span>));

<span class="cm">// Assert email subject and body</span>
Assert.<span class="fn">assertEquals</span>(email.<span class="fn">subject</span>(), <span class="st">"Welcome to BankApp"</span>);
Assert.<span class="fn">assertTrue</span>(email.<span class="fn">html</span>().<span class="fn">body</span>().<span class="fn">contains</span>(<span class="st">"Verify your email"</span>));</code></div>`
    },
    {
      difficulty: 'hard',
      q: "Your Page Object class has grown to 500 lines with 60+ methods. How do you refactor it?",
      a: `<div class="ans-hero">Apply Page Component Pattern and Single Responsibility Principle — split into smaller, focused classes.</div>
      <div class="code-block"><code><span class="cm">// Before: One giant LoginPage.java with 60 methods</span>

<span class="cm">// After: Broken into components</span>
<span class="kw">public class</span> <span class="cl">LoginPage</span> {
    <span class="kw">private</span> <span class="cl">LoginForm</span> loginForm;       <span class="cm">// handles form fields</span>
    <span class="kw">private</span> <span class="cl">LoginValidation</span> validation; <span class="cm">// handles error messages</span>
    <span class="kw">private</span> <span class="cl">LoginNavigation</span> navigation; <span class="cm">// handles page navigation</span>
}

<span class="cm">// Each component has focused responsibility</span>
<span class="kw">public class</span> <span class="cl">LoginForm</span> {
    <span class="kw">public void</span> <span class="fn">enterUsername</span>(<span class="cl">String</span> u) {...}
    <span class="kw">public void</span> <span class="fn">enterPassword</span>(<span class="cl">String</span> p) {...}
    <span class="kw">public void</span> <span class="fn">clickLogin</span>() {...}
}</code></div>`
    },
    {
      difficulty: 'hard',
      q: "After deployment to UAT, automated tests pass but users report the UI looks broken on mobile. Your automation ran only on desktop Chrome. How do you address this?",
      a: `<div class="ans-hero">Add mobile viewport testing to your automation suite using ChromeOptions device emulation or real device cloud testing.</div>
      <div class="code-block"><code><span class="cm">// Mobile emulation in Chrome</span>
<span class="cl">Map</span>&lt;<span class="cl">String</span>, <span class="cl">String</span>&gt; mobileEmulation = <span class="kw">new</span> <span class="cl">HashMap</span>&lt;&gt;();
mobileEmulation.<span class="fn">put</span>(<span class="st">"deviceName"</span>, <span class="st">"iPhone 12 Pro"</span>);

<span class="cl">ChromeOptions</span> options = <span class="kw">new</span> <span class="cl">ChromeOptions</span>();
options.<span class="fn">setExperimentalOption</span>(<span class="st">"mobileEmulation"</span>, mobileEmulation);

<span class="cl">WebDriver</span> mobileDriver = <span class="kw">new</span> <span class="cl">ChromeDriver</span>(options);</code></div>
      <ul class="ans-list green">
        <li><span class="icon">📱</span>Add mobile-viewport tests to your CI pipeline</li>
        <li><span class="icon">☁️</span>Use BrowserStack/LambdaTest for real device testing across iOS/Android</li>
        <li><span class="icon">👁️</span>Consider visual regression tools like Percy or Applitools for automated UI comparison</li>
      </ul>`
    },

    // ── Banking Application — Selenium Scenarios ──────────────────────────────
    {
      difficulty: 'hard',
      q: "You need to automate a fund transfer flow in a banking app. The flow requires entering account number, amount, selecting NEFT/IMPS, submitting, and then entering a one-time OTP. How do you design this?",
      a: `<div class="ans-hero">Use Page Object Model with fluent chaining. For OTP, the test environment uses a mock/fixed OTP — never rely on real SMS in automation.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Page Objects: TransferPage.java</div><div class="step-desc">Elements: beneficiaryField, amountField, transferTypeDropdown, proceedBtn, otpField, confirmBtn, successMessage. Use @FindBy + PageFactory.initElements()</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Fluent chain in test</div><div class="step-desc">transferPage.selectTransferType("NEFT").enterBeneficiaryAccount("9876").enterAmount("5000").clickProceed()</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Handle OTP step</div><div class="step-desc">wait.until(visibilityOf(otpField)) → otpField.sendKeys("123456") → confirmButton.click(). Test env exposes fixed mock OTP via config.properties.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Assert success + balance</div><div class="step-desc">SoftAssert: successMessage.contains("Successful"), referenceNumber.startsWith("TXN"), and dashboard balance decreased by transfer amount.</div></div></div>
      </div>
      <div class="info-panel warning"><div class="panel-title">OTP Challenge</div><p>In real environments, intercept OTP via API endpoint exposed by test infrastructure (e.g. <code>GET /test-api/otp?user=karan</code>) — never hardcode it or skip the step.</p></div>`
    },
    {
      difficulty: 'hard',
      q: "Your banking app's account lockout feature must lock the account after 3 failed login attempts. How do you automate and verify this with Selenium?",
      a: `<div class="ans-hero">Loop through 3 failed attempts, assert lockout message on the 3rd, and verify the account cannot be unlocked by simply refreshing the page.</div>
      <div class="code-block"><code><span class="kw">for</span> (<span class="kw">int</span> attempt = <span class="num">1</span>; attempt &lt;= <span class="num">3</span>; attempt++) {
    loginPage.<span class="fn">enterUsername</span>(<span class="st">"karan@bankapp.com"</span>)
             .<span class="fn">enterPassword</span>(<span class="st">"WrongPass"</span> + attempt)
             .<span class="fn">clickLogin</span>();

    <span class="kw">if</span> (attempt &lt; <span class="num">3</span>) {
        driver.<span class="fn">navigate</span>().<span class="fn">refresh</span>();
        loginPage = <span class="kw">new</span> <span class="cl">LoginPage</span>(driver);
    }
}
<span class="cm">// After 3rd attempt:</span>
<span class="cl">Assert</span>.<span class="fn">assertTrue</span>(loginPage.<span class="fn">getErrorMessage</span>().<span class="fn">contains</span>(<span class="st">"Account is locked"</span>));

<span class="cm">// Verify lockout persists after page refresh</span>
driver.<span class="fn">navigate</span>().<span class="fn">refresh</span>();
loginPage = <span class="kw">new</span> <span class="cl">LoginPage</span>(driver);
loginPage.<span class="fn">enterUsername</span>(<span class="st">"karan@bankapp.com"</span>)
         .<span class="fn">enterPassword</span>(<span class="st">"Secure@1234"</span>)  <span class="cm">// correct password</span>
         .<span class="fn">clickLogin</span>();
<span class="cl">Assert</span>.<span class="fn">assertTrue</span>(loginPage.<span class="fn">getErrorMessage</span>().<span class="fn">contains</span>(<span class="st">"Account is locked"</span>),
    <span class="st">"Lock should persist even with correct password"</span>);</code></div>`
    },
    {
      difficulty: 'medium',
      q: "While automating a banking app's statement download feature, the test passes in isolation but fails in the CI pipeline because the PDF doesn't download. What do you investigate?",
      a: `<div class="ans-hero">PDF download failures in CI are almost always a browser headless mode + download directory issue. Three things to check.</div>
      <table class="comparison-table">
        <thead><tr><th>Root Cause</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>Headless Chrome blocks downloads by default</td><td>Set <code>prefs.put("download.default_directory", downloadPath)</code> and allow popups in ChromeOptions</td></tr>
          <tr><td>Download directory doesn't exist on CI agent</td><td>Create the dir in @BeforeSuite: <code>new File(downloadPath).mkdirs()</code></td></tr>
          <tr><td>Test doesn't wait for file to appear</td><td>Use a polling wait: check <code>new File(dir).listFiles()</code> every 500ms up to 20 seconds</td></tr>
          <tr><td>CI runs as a restricted user</td><td>Configure CI to write to /tmp or a workspace-relative path the agent has write access to</td></tr>
        </tbody>
      </table>
      <div class="code-block"><code><span class="cm">// ChromeOptions for headless download</span>
<span class="cl">Map</span>&lt;<span class="cl">String</span>, <span class="cl">Object</span>&gt; prefs = <span class="kw">new</span> <span class="cl">HashMap</span>&lt;&gt;();
prefs.<span class="fn">put</span>(<span class="st">"download.default_directory"</span>, downloadPath);
prefs.<span class="fn">put</span>(<span class="st">"download.prompt_for_download"</span>, <span class="kw">false</span>);
prefs.<span class="fn">put</span>(<span class="st">"plugins.always_open_pdf_externally"</span>, <span class="kw">true</span>);
options.<span class="fn">setExperimentalOption</span>(<span class="st">"prefs"</span>, prefs);</code></div>`
    }
  ],

  testng: [
    // ── Banking App Scenarios ─────────────────────────────────────────────────
    {
      difficulty: 'easy',
      q: "Your banking app has 5 login test cases (valid user, invalid password, locked account, blank fields, SQL injection). How do you write all 5 without duplicating code?",
      a: `<div class="ans-hero">@DataProvider — one test method, 5 rows of data. TestNG runs it 5 times and reports each row separately.</div>
      <div class="code-block"><code><span class="ann">@DataProvider</span>(name = <span class="st">"bankLoginData"</span>)
<span class="kw">public</span> <span class="cl">Object</span>[][] <span class="fn">bankLoginData</span>() {
    <span class="kw">return new</span> <span class="cl">Object</span>[][] {
        { <span class="st">"admin@bank.com"</span>,  <span class="st">"Admin@123"</span>,       <span class="kw">true</span>,  <span class="st">"Dashboard"</span>          },
        { <span class="st">"admin@bank.com"</span>,  <span class="st">"WrongPass"</span>,       <span class="kw">false</span>, <span class="st">"Invalid credentials"</span>},
        { <span class="st">"locked@bank.com"</span>, <span class="st">"Locked@123"</span>,      <span class="kw">false</span>, <span class="st">"Account is locked"</span>  },
        { <span class="st">""</span>,                <span class="st">""</span>,                <span class="kw">false</span>, <span class="st">"Username is required"</span>},
        { <span class="st">"' OR 1=1 --"</span>,    <span class="st">"anything"</span>,        <span class="kw">false</span>, <span class="st">"Invalid credentials"</span>}
    };
}

<span class="ann">@Test</span>(dataProvider = <span class="st">"bankLoginData"</span>, groups = {<span class="st">"regression"</span>})
<span class="kw">public void</span> <span class="fn">testBankLogin</span>(<span class="cl">String</span> u, <span class="cl">String</span> p, <span class="kw">boolean</span> ok, <span class="cl">String</span> msg) {
    loginPage.<span class="fn">login</span>(u, p);
    <span class="kw">if</span> (ok) Assert.<span class="fn">assertTrue</span>(dashboard.<span class="fn">isLoaded</span>());
    <span class="kw">else</span>   Assert.<span class="fn">assertTrue</span>(loginPage.<span class="fn">getError</span>().<span class="fn">contains</span>(msg));
}</code></div>
      <div class="info-panel tip"><div class="panel-title">Report</div><p>Report shows 5 separate rows: TC[1] PASS, TC[2] PASS, TC[3] PASS... Each row identified by its data so failures are immediately traceable.</p></div>`
    },
    {
      difficulty: 'easy',
      q: "Your test method needs test data for 5 different users. Instead of writing 5 separate test methods, how do you handle this in TestNG?",
      a: `<div class="ans-hero">Use @DataProvider — supplies multiple rows of data to one test method, which runs once per row.</div>
      <div class="code-block"><code><span class="ann">@DataProvider</span>(name = <span class="st">"loginData"</span>)
<span class="kw">public</span> <span class="cl">Object</span>[][] <span class="fn">loginData</span>() {
    <span class="kw">return new</span> <span class="cl">Object</span>[][] {
        {<span class="st">"admin@bank.com"</span>,  <span class="st">"Admin@123"</span>,  <span class="st">"Dashboard"</span>},
        {<span class="st">"user@bank.com"</span>,   <span class="st">"User@123"</span>,   <span class="st">"Dashboard"</span>},
        {<span class="st">"wrong@bank.com"</span>,  <span class="st">"WrongPass"</span>,  <span class="st">"Invalid credentials"</span>}
    };
}

<span class="ann">@Test</span>(dataProvider = <span class="st">"loginData"</span>)
<span class="kw">public void</span> <span class="fn">testLogin</span>(<span class="cl">String</span> email, <span class="cl">String</span> pass, <span class="cl">String</span> expected) {
    loginPage.<span class="fn">login</span>(email, pass);
    Assert.<span class="fn">assertTrue</span>(driver.<span class="fn">getPageSource</span>().<span class="fn">contains</span>(expected));
}</code></div>
      <div class="info-panel tip"><div class="panel-title">Result</div><p>TestNG runs testLogin 3 times — once per row in the data provider.</p></div>`
    },
    {
      difficulty: 'easy',
      q: "Your first test (login) must always run before the second test (transfer). How do you enforce this order in TestNG?",
      a: `<div class="ans-hero">Use dependsOnMethods to declare a dependency — the dependent test is skipped if the depended-on test fails.</div>
      <div class="code-block"><code><span class="ann">@Test</span>
<span class="kw">public void</span> <span class="fn">testLogin</span>() {
    loginPage.<span class="fn">login</span>(<span class="st">"user"</span>, <span class="st">"pass"</span>);
    Assert.<span class="fn">assertTrue</span>(homePage.<span class="fn">isDisplayed</span>());
}

<span class="ann">@Test</span>(dependsOnMethods = {<span class="st">"testLogin"</span>})
<span class="kw">public void</span> <span class="fn">testTransfer</span>() {
    transferPage.<span class="fn">transfer</span>(<span class="st">"ACC1234"</span>, <span class="num">1000</span>);
    Assert.<span class="fn">assertEquals</span>(transferPage.<span class="fn">getStatus</span>(), <span class="st">"Success"</span>);
}</code></div>
      <div class="info-panel warning"><div class="panel-title">Caution</div><p>If testLogin fails, testTransfer is automatically SKIPPED — not failed. This is by design.</p></div>`
    },
    {
      difficulty: 'medium',
      q: "Your test method has 10 assertions. The first assertion fails so all remaining 9 are not executed. How do you make ALL assertions run regardless of failures?",
      a: `<div class="ans-hero">Use SoftAssert — collects all failures and reports them together at the end instead of stopping at the first failure.</div>
      <div class="code-block"><code><span class="ann">@Test</span>
<span class="kw">public void</span> <span class="fn">testDashboard</span>() {
    <span class="cl">SoftAssert</span> soft = <span class="kw">new</span> <span class="cl">SoftAssert</span>();

    soft.<span class="fn">assertEquals</span>(dashboard.<span class="fn">getTitle</span>(), <span class="st">"My Dashboard"</span>);
    soft.<span class="fn">assertTrue</span>(dashboard.<span class="fn">isBalanceVisible</span>());
    soft.<span class="fn">assertEquals</span>(dashboard.<span class="fn">getUserName</span>(), <span class="st">"Karan"</span>);
    soft.<span class="fn">assertTrue</span>(dashboard.<span class="fn">isTransferBtnEnabled</span>());

    soft.<span class="fn">assertAll</span>(); <span class="cm">// MUST call this — reports all failures together</span>
}</code></div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Hard Assert</h6>Stops test at first failure. Other assertions never run. Use when subsequent steps depend on this one.</div>
        <div class="compare-card green"><h6>Soft Assert</h6>Runs ALL assertions. Reports all failures at assertAll(). Use when assertions are independent of each other.</div>
      </div>`
    },
    {
      difficulty: 'medium',
      q: "Some of your tests are flaky in CI — they fail randomly due to network latency and pass on retry. How do you automatically retry failed tests in TestNG?",
      a: `<div class="ans-hero">Implement IRetryAnalyzer interface and attach it to your tests.</div>
      <div class="code-block"><code><span class="kw">public class</span> <span class="cl">RetryAnalyzer</span> <span class="kw">implements</span> <span class="cl">IRetryAnalyzer</span> {
    <span class="kw">private int</span> count = <span class="num">0</span>;
    <span class="kw">private static final int</span> MAX_RETRY = <span class="num">2</span>;

    <span class="ann">@Override</span>
    <span class="kw">public boolean</span> <span class="fn">retry</span>(<span class="cl">ITestResult</span> result) {
        <span class="kw">if</span> (count < MAX_RETRY) {
            count++;
            <span class="kw">return true</span>;  <span class="cm">// retry</span>
        }
        <span class="kw">return false</span>;     <span class="cm">// no more retries</span>
    }
}

<span class="cm">// Attach to test</span>
<span class="ann">@Test</span>(retryAnalyzer = <span class="cl">RetryAnalyzer</span>.<span class="kw">class</span>)
<span class="kw">public void</span> <span class="fn">testPayment</span>() { ... }</code></div>`
    },
    {
      difficulty: 'medium',
      q: "You want to run only the Smoke tests from your 200-test suite in TestNG. How do you organise and run this?",
      a: `<div class="ans-hero">Use @Test(groups = "smoke") to tag tests, then configure testng.xml to run only the smoke group.</div>
      <div class="code-block"><code><span class="cm">// Tag tests with groups</span>
<span class="ann">@Test</span>(groups = {<span class="st">"smoke"</span>, <span class="st">"regression"</span>})
<span class="kw">public void</span> <span class="fn">testLogin</span>() {...}

<span class="ann">@Test</span>(groups = {<span class="st">"regression"</span>})
<span class="kw">public void</span> <span class="fn">testStatements</span>() {...}

<span class="cm">// testng.xml — run only smoke</span></code></div>
      <div class="code-block"><code>&lt;suite name="Suite"&gt;
  &lt;test name="Smoke Only"&gt;
    &lt;groups&gt;
      &lt;run&gt;
        &lt;include name="smoke"/&gt;
      &lt;/run&gt;
    &lt;/groups&gt;
    &lt;classes&gt;
      &lt;class name="tests.BankingTests"/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;</code></div>`
    },
    {
      difficulty: 'hard',
      q: "You need to generate a custom HTML report after each test run that includes screenshots of failed tests. How do you implement this using TestNG Listeners?",
      a: `<div class="ans-hero">Implement ITestListener — override onTestFailure to capture screenshot, then aggregate into a custom HTML report.</div>
      <div class="code-block"><code><span class="kw">public class</span> <span class="cl">TestListener</span> <span class="kw">implements</span> <span class="cl">ITestListener</span> {

    <span class="ann">@Override</span>
    <span class="kw">public void</span> <span class="fn">onTestFailure</span>(<span class="cl">ITestResult</span> result) {
        <span class="cl">WebDriver</span> driver = <span class="fn">getDriver</span>(result);  <span class="cm">// get from ThreadLocal</span>
        <span class="cl">String</span> screenshotPath = <span class="fn">captureScreenshot</span>(driver, result.<span class="fn">getName</span>());
        <span class="cm">// Attach to Extent Report</span>
        ExtentTest test = extentMap.<span class="fn">get</span>(result.<span class="fn">getName</span>());
        test.<span class="fn">fail</span>(result.<span class="fn">getThrowable</span>());
        test.<span class="fn">addScreenCaptureFromPath</span>(screenshotPath);
    }

    <span class="kw">private</span> <span class="cl">String</span> <span class="fn">captureScreenshot</span>(<span class="cl">WebDriver</span> driver, <span class="cl">String</span> name) {
        <span class="cl">TakesScreenshot</span> ts = (<span class="cl">TakesScreenshot</span>) driver;
        <span class="cl">File</span> src = ts.<span class="fn">getScreenshotAs</span>(<span class="cl">OutputType</span>.FILE);
        <span class="cl">String</span> path = <span class="st">"reports/screenshots/"</span> + name + <span class="st">".png"</span>;
        <span class="cl">FileUtils</span>.<span class="fn">copyFile</span>(src, <span class="kw">new</span> <span class="cl">File</span>(path));
        <span class="kw">return</span> path;
    }
}</code></div>`
    },
    {
      difficulty: 'hard',
      q: "Your banking app regression suite has 300 tests. Running them sequentially takes 90 minutes. Requirement: complete in under 20 minutes. How do you achieve this with TestNG?",
      a: `<div class="ans-hero">Parallel execution with ThreadLocal WebDriver — 300 tests across 5 threads with cross-browser runs simultaneously.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Before — Sequential</h6>300 tests × 18 sec avg = 90 minutes. One browser, one test at a time. Not feasible for agile sprints requiring fast feedback.</div>
        <div class="compare-card green"><h6>After — Parallel</h6>parallel="tests" thread-count="5" → 300 ÷ 5 = 60 tests per thread × 18 sec = 18 minutes. Meets requirement with margin.</div>
      </div>
      <div class="code-block"><code><span class="cm">&lt;!-- testng.xml --&gt;</span>
&lt;suite name=<span class="st">"Regression"</span> <span class="ann">parallel</span>=<span class="st">"tests"</span> <span class="ann">thread-count</span>=<span class="st">"5"</span>&gt;
  &lt;test name=<span class="st">"Login Module"</span>&gt;
    &lt;parameter name=<span class="st">"browser"</span> value=<span class="st">"chrome"</span>/&gt;
    &lt;classes&gt;&lt;class name=<span class="st">"LoginTest"</span>/&gt;&lt;/classes&gt;
  &lt;/test&gt;
  &lt;test name=<span class="st">"Transfer Module"</span>&gt;
    &lt;parameter name=<span class="st">"browser"</span> value=<span class="st">"chrome"</span>/&gt;
    &lt;classes&gt;&lt;class name=<span class="st">"TransferTest"</span>/&gt;&lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;

<span class="cm">// CRITICAL — ThreadLocal keeps each thread's browser isolated:</span>
<span class="kw">private static</span> <span class="cl">ThreadLocal</span>&lt;<span class="cl">WebDriver</span>&gt; tlDriver = <span class="kw">new</span> <span class="cl">ThreadLocal</span>&lt;&gt;();</code></div>
      <div class="info-panel warning"><div class="panel-title">Always use ThreadLocal</div><p>Without ThreadLocal, Thread A's browser receives Thread B's click actions. Tests corrupt each other and produce false failures — the most common parallel testing mistake.</p></div>`
    },
    {
      difficulty: 'hard',
      q: "After a release, you find that 15 tests pass locally but fail in Jenkins CI with 'NoSuchElementException'. The annotation lifecycle is fine. What do you check?",
      a: `<div class="ans-hero">CI failures with correct annotations usually mean timing issues, headless mode differences, or missing @BeforeMethod state setup.</div>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-num">1</div>
          <div class="step-content">
            <div class="step-title">Check @BeforeMethod runs headless</div>
            <div class="step-desc">Add ChromeOptions --headless, --no-sandbox, --disable-dev-shm-usage. CI servers have no display — elements may render differently.</div>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">2</div>
          <div class="step-content">
            <div class="step-title">Verify explicit waits in @BeforeMethod</div>
            <div class="step-desc">Replace Thread.sleep() with WebDriverWait.until(visibilityOf). CI machines can be slower — hard-coded sleeps become insufficient.</div>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">3</div>
          <div class="step-content">
            <div class="step-title">Check if @BeforeTest sets base URL correctly</div>
            <div class="step-desc">Config URL for CI may differ from local. Verify ConfigReader reads the correct env parameter from testng.xml.</div>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">4</div>
          <div class="step-content">
            <div class="step-title">Add screenshot in @AfterMethod on failure</div>
            <div class="step-desc">ITestResult in @AfterMethod — if FAILURE, take screenshot. This shows exactly what was visible when the test broke on CI.</div>
          </div>
        </div>
      </div>`
    },
    {
      difficulty: 'medium',
      q: "Your banking app's OTP verification test passes most of the time but fails 1 in 5 runs due to SMS gateway delays. How do you handle this without making the suite unstable?",
      a: `<div class="ans-hero">Apply RetryAnalyzer specifically to OTP-dependent tests — max 2 retries with a wait between attempts.</div>
      <div class="code-block"><code><span class="kw">public class</span> <span class="cl">OTPRetryAnalyzer</span> <span class="kw">implements</span> <span class="cl">IRetryAnalyzer</span> {
    <span class="kw">private int</span> count = <span class="num">0</span>;
    <span class="kw">private static final int</span> MAX = <span class="num">2</span>;

    <span class="ann">@Override</span>
    <span class="kw">public boolean</span> <span class="fn">retry</span>(<span class="cl">ITestResult</span> result) {
        <span class="kw">if</span> (count &lt; MAX) {
            count++;
            <span class="cm">// wait 5s for SMS gateway before retry</span>
            <span class="kw">try</span> { <span class="cl">Thread</span>.<span class="fn">sleep</span>(<span class="num">5000</span>); } <span class="kw">catch</span> (<span class="cl">Exception</span> e) {}
            <span class="kw">return true</span>;
        }
        <span class="kw">return false</span>;
    }
}

<span class="cm">// Apply ONLY to OTP test — not the whole suite</span>
<span class="ann">@Test</span>(retryAnalyzer = <span class="cl">OTPRetryAnalyzer</span>.<span class="kw">class</span>,
      groups = {<span class="st">"regression"</span>},
      description = <span class="st">"TC — Verify OTP login for fund transfer"</span>)
<span class="kw">public void</span> <span class="fn">testOTPVerification</span>() {
    transferPage.<span class="fn">initiateTransfer</span>();
    otpPage.<span class="fn">waitForOTPField</span>(<span class="num">10</span>);
    otpPage.<span class="fn">enterOTP</span>(<span class="fn">getOTPFromGateway</span>());
    Assert.<span class="fn">assertEquals</span>(transferPage.<span class="fn">getStatus</span>(), <span class="st">"Transfer Successful"</span>);
}</code></div>
      <div class="info-panel warning"><div class="panel-title">Key rule</div><p>Apply retry to specific tests with known external flakiness — NOT globally via @BeforeSuite. Global retry hides real bugs.</p></div>`
    },
    {
      difficulty: 'medium',
      q: "Your team has a 200-test suite: 20 smoke, 130 regression, 50 WIP. You only want smoke tests to run on each pull request, but the full suite runs nightly. How do you configure this with one testng.xml?",
      a: `<div class="ans-hero">Use separate &lt;test&gt; blocks with group includes — or two XML files. Maven profiles select which file CI uses.</div>
      <div class="code-block"><code><span class="cm">&lt;!-- smoke-testng.xml (PR trigger) --&gt;</span>
&lt;suite name=<span class="st">"PR Smoke"</span>&gt;
  &lt;test name=<span class="st">"Smoke"</span>&gt;
    &lt;groups&gt;&lt;run&gt;&lt;include name=<span class="st">"smoke"</span>/&gt;&lt;/run&gt;&lt;/groups&gt;
    &lt;classes&gt;&lt;class name=<span class="st">"com.tests.BankingTests"</span>/&gt;&lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;

<span class="cm">&lt;!-- regression-testng.xml (nightly) --&gt;</span>
&lt;suite name=<span class="st">"Nightly Regression"</span> parallel=<span class="st">"tests"</span> thread-count=<span class="st">"4"</span>&gt;
  &lt;test name=<span class="st">"Full Regression"</span>&gt;
    &lt;groups&gt;&lt;run&gt;
      &lt;include name=<span class="st">"regression"</span>/&gt;
      &lt;exclude name=<span class="st">"wip"</span>/&gt;
    &lt;/run&gt;&lt;/groups&gt;
    &lt;classes&gt;&lt;class name=<span class="st">"com.tests.BankingTests"</span>/&gt;&lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;

<span class="cm"># Jenkins PR pipeline:</span>
mvn test -DsuiteFile=smoke-testng.xml
<span class="cm"># Jenkins nightly pipeline:</span>
mvn test -DsuiteFile=regression-testng.xml</code></div>`
    }
  ],

  cucumber: [
    {
      difficulty: 'easy',
      q: "Your team uses Cucumber. A business analyst asks how they can write test scenarios without knowing Java. How does Cucumber help?",
      a: `<div class="ans-hero">Cucumber's Gherkin language allows writing test scenarios in plain English — no coding knowledge needed.</div>
      <div class="code-block"><code><span class="cm"># BA writes this in plain English:</span>
Feature: Bank Transfer

  Scenario: Successful fund transfer
    <span class="kw">Given</span> the user is logged into the banking app
    <span class="kw">When</span> the user transfers Rs 5000 to account "ACC1234"
    <span class="kw">Then</span> the transfer should be successful
    <span class="kw">And</span> the sender balance should be reduced by Rs 5000
    <span class="kw">And</span> the receiver should receive an SMS notification</code></div>
      <ul class="ans-list green">
        <li><span class="icon">✅</span>BA writes feature files in plain English — acts as living documentation</li>
        <li><span class="icon">✅</span>Developers/Testers write Step Definitions in Java to implement the steps</li>
        <li><span class="icon">✅</span>Everyone — BA, Dev, QA — understands the same test scenarios</li>
      </ul>`
    },
    {
      difficulty: 'easy',
      q: "You need to test the same login scenario with 5 different user types (admin, user, manager, guest, blocked). How do you avoid writing 5 separate scenarios in Cucumber?",
      a: `<div class="ans-hero">Use Scenario Outline with an Examples table — one template runs for each row of data.</div>
      <div class="code-block"><code>Scenario Outline: Login with different user types
  <span class="kw">Given</span> the user is on the login page
  <span class="kw">When</span> the user logs in as "&lt;userType&gt;" with password "&lt;password&gt;"
  <span class="kw">Then</span> the user should see "&lt;expectedPage&gt;"

  Examples:
    | userType | password   | expectedPage      |
    | admin    | Admin@123  | Admin Dashboard   |
    | user     | User@123   | User Dashboard    |
    | manager  | Mgr@123    | Manager Dashboard |
    | guest    | Guest@123  | Limited View      |
    | blocked  | Block@123  | Account Blocked   |</code></div>
      <div class="info-panel tip"><div class="panel-title">Result</div><p>Cucumber runs this scenario 5 times — once per row in the Examples table.</p></div>`
    },
    {
      difficulty: 'medium',
      q: "Every scenario in your feature file starts with 'Given the user is on the login page'. How do you avoid repeating this step in every scenario?",
      a: `<div class="ans-hero">Use the Background keyword — steps under Background run before every scenario in the feature file.</div>
      <div class="code-block"><code>Feature: Banking Transactions

  <span class="kw">Background:</span>
    Given the user is on the login page
    And the user logs in with "admin@bank.com" and "Admin@123"
    And the user is on the Dashboard

  Scenario: Check Balance
    <span class="kw">When</span> the user clicks "Check Balance"
    <span class="kw">Then</span> the balance "Rs 85,000" should be displayed

  Scenario: Transfer Money
    <span class="kw">When</span> the user initiates a transfer of Rs 5000
    <span class="kw">Then</span> the transfer should succeed</code></div>`
    },
    {
      difficulty: 'medium',
      q: "You want the WebDriver to be set up before every scenario and quit after. Where do you do this in Cucumber?",
      a: `<div class="ans-hero">Use @Before and @After Hooks in a Hooks.java class — they run before/after every scenario.</div>
      <div class="code-block"><code><span class="kw">public class</span> <span class="cl">Hooks</span> {
    <span class="kw">private</span> <span class="cl">WebDriver</span> driver;

    <span class="ann">@Before</span>
    <span class="kw">public void</span> <span class="fn">setUp</span>(<span class="cl">Scenario</span> scenario) {
        driver = <span class="kw">new</span> <span class="cl">ChromeDriver</span>();
        driver.manage().window().<span class="fn">maximize</span>();
        System.out.<span class="fn">println</span>(<span class="st">"Starting: "</span> + scenario.<span class="fn">getName</span>());
    }

    <span class="ann">@After</span>
    <span class="kw">public void</span> <span class="fn">tearDown</span>(<span class="cl">Scenario</span> scenario) {
        <span class="kw">if</span> (scenario.<span class="fn">isFailed</span>()) {
            <span class="kw">byte</span>[] screenshot = ((<span class="cl">TakesScreenshot</span>) driver)
                .<span class="fn">getScreenshotAs</span>(<span class="cl">OutputType</span>.BYTES);
            scenario.<span class="fn">attach</span>(screenshot, <span class="st">"image/png"</span>, <span class="st">"failure"</span>);
        }
        driver.<span class="fn">quit</span>();
    }
}</code></div>`
    },
    {
      difficulty: 'hard',
      q: "You are running a Cucumber test for a bank transfer. The step 'Then the transfer should succeed' requires checking a database record. How do you implement this step?",
      a: `<div class="ans-hero">In the step definition, execute a DB query using JDBC and assert the transaction record was created.</div>
      <div class="code-block"><code><span class="ann">@Then</span>(<span class="st">"the transfer should succeed"</span>)
<span class="kw">public void</span> <span class="fn">verifyTransferInDB</span>() <span class="kw">throws</span> <span class="cl">SQLException</span> {
    <span class="cm">// Verify in UI first</span>
    Assert.<span class="fn">assertEquals</span>(transferPage.<span class="fn">getStatus</span>(), <span class="st">"Transfer Successful"</span>);

    <span class="cm">// Verify in Database</span>
    <span class="cl">Connection</span> conn = <span class="cl">DriverManager</span>.<span class="fn">getConnection</span>(DB_URL, USER, PASS);
    <span class="cl">PreparedStatement</span> stmt = conn.<span class="fn">prepareStatement</span>(
        <span class="st">"SELECT * FROM transactions WHERE sender_id=? ORDER BY created_at DESC LIMIT 1"</span>
    );
    stmt.<span class="fn">setInt</span>(<span class="num">1</span>, senderId);
    <span class="cl">ResultSet</span> rs = stmt.<span class="fn">executeQuery</span>();
    Assert.<span class="fn">assertTrue</span>(rs.<span class="fn">next</span>(), <span class="st">"No transaction record found in DB"</span>);
    Assert.<span class="fn">assertEquals</span>(rs.<span class="fn">getDouble</span>(<span class="st">"amount"</span>), <span class="num">5000.00</span>);
    Assert.<span class="fn">assertEquals</span>(rs.<span class="fn">getString</span>(<span class="st">"status"</span>), <span class="st">"SUCCESS"</span>);
    conn.<span class="fn">close</span>();
}</code></div>`
    },

    // ── New Cucumber Scenarios ──────────────────────────────────
    {
      difficulty: 'hard',
      q: "Your banking application sends an OTP during fund transfer. How do you handle OTP verification in a Cucumber automated test?",
      a: `<div class="ans-hero">In UAT/test environments, the team configures a fixed test OTP or an internal OTP retrieval API. The step definition reads the OTP programmatically — never manually.</div>
      <div class="code-block"><code><span class="cm">// Feature file:</span>
Scenario: NEFT transfer with OTP verification
  <span class="kw">Given</span> customer is logged in as "karan@bankapp.com"
  <span class="kw">When</span> customer initiates NEFT transfer of "5000" to account "9876543210"
  <span class="kw">And</span> customer enters OTP received on registered mobile
  <span class="kw">And</span> customer clicks Confirm
  <span class="kw">Then</span> transfer success message should appear
  <span class="kw">And</span> reference number should start with "TXN"

<span class="cm">// Step definition — OTP from test API:</span>
<span class="kw">@And</span>(<span class="st">"customer enters OTP received on registered mobile"</span>)
<span class="kw">public void</span> <span class="fn">enterOtp</span>() {
  <span class="cm">// UAT: call internal test API to get latest OTP for the user</span>
  <span class="cl">String</span> otp = otpService.<span class="fn">getLatestOtp</span>(<span class="st">"karan@bankapp.com"</span>);
  transferPage.<span class="fn">enterOtp</span>(otp);
}</code></div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">UAT environment uses mock OTP service</div><div class="step-desc">OTP service stores the last sent OTP in a test database — accessible via REST API /test/otp/{userId}</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Step def calls OTP API</div><div class="step-desc">String otp = given().get("/test/otp/karan@bankapp.com").jsonPath().getString("otp")</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Config-based fallback for stable environments</div><div class="step-desc">config.properties: test.otp=123456 — for environments with a fixed test OTP bypassing actual SMS</div></div></div>
      </div>
      <div class="info-panel warning"><div class="panel-title">Never hardcode OTP in feature files</div><p>Feature file scenarios should describe BEHAVIOUR ("customer enters OTP received on mobile"), not implementation details ("customer enters OTP 123456"). The step definition handles the technical retrieval.</p></div>`
    },
    {
      difficulty: 'hard',
      q: "Your Cucumber regression suite has 300 scenarios and takes 3 hours. The CI pipeline needs to complete in under 30 minutes. How do you solve this?",
      a: `<div class="ans-hero">Combine parallel execution (TestNG @DataProvider(parallel=true)), split runners by module/tag, run smoke-only on every commit and full regression nightly.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Enable parallel in Runner</div><div class="step-desc">Override scenarios() with @DataProvider(parallel=true). Set thread-count="8" in testng.xml. 300 tests ÷ 8 threads = ~38 scenarios per thread running simultaneously.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Ensure ThreadLocal WebDriver</div><div class="step-desc">DriverManager.java must use ThreadLocal&lt;WebDriver&gt; — each thread gets its own browser instance. No shared static driver.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Tag-based CI pipeline</div><div class="step-desc">On every commit: run only @smoke (30 scenarios, 5 min). On merge to main: run @regression (full 300, 30 min with 8 threads). Nightly: full suite.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">rerun.txt for flaky tests</div><div class="step-desc">After regression, FailedTestRunner reruns only failed scenarios — prevents re-running the whole suite for 2-3 flaky tests.</div></div></div>
      </div>
      <table class="comparison-table">
        <thead><tr><th>Strategy</th><th>Before</th><th>After</th></tr></thead>
        <tbody>
          <tr><td>Thread count</td><td>1 (sequential)</td><td>8 (parallel)</td></tr>
          <tr><td>Full regression</td><td>3 hours</td><td>~25 min</td></tr>
          <tr><td>PR pipeline</td><td>3 hours</td><td>5 min (@smoke only)</td></tr>
        </tbody>
      </table>`
    },
    {
      difficulty: 'hard',
      q: "Two Cucumber tests that run fine individually fail when run in parallel — both try to log in with the same username and corrupt each other's session. How do you fix this?",
      a: `<div class="ans-hero">Parallel tests must use independent test data. Use thread-ID or parameterized users so each thread operates on a separate account with no shared session.</div>
      <div class="code-block"><code><span class="cm">// Problem: both threads use same user → session conflict</span>
<span class="kw">@Before</span>
<span class="kw">public void</span> <span class="fn">login</span>() {
  loginPage.<span class="fn">loginAs</span>(<span class="st">"karan@bankapp.com"</span>);  <span class="cm">// ← shared user</span>
}

<span class="cm">// Fix 1 — thread-specific user from a pool</span>
<span class="kw">private static</span> <span class="cl">List</span>&lt;<span class="cl">String</span>&gt; USER_POOL = <span class="cl">List</span>.<span class="fn">of</span>(
    <span class="st">"testuser1@bank.com"</span>, <span class="st">"testuser2@bank.com"</span>,
    <span class="st">"testuser3@bank.com"</span>, <span class="st">"testuser4@bank.com"</span>
);
<span class="kw">private static</span> <span class="cl">AtomicInteger</span> counter = <span class="kw">new</span> <span class="cl">AtomicInteger</span>(0);

<span class="kw">@Before</span>
<span class="kw">public void</span> <span class="fn">login</span>() {
  <span class="kw">int</span> idx = counter.<span class="fn">getAndIncrement</span>() % USER_POOL.<span class="fn">size</span>();
  <span class="cl">String</span> user = USER_POOL.<span class="fn">get</span>(idx);
  ctx.currentUser = user;
  loginPage.<span class="fn">loginAs</span>(user);  <span class="cm">// each thread gets a different user</span>
}

<span class="cm">// Fix 2 — Scenario Outline (each row = different user)</span>
Scenario Outline: Transfer as &lt;user&gt;
  <span class="kw">Given</span> customer is logged in as "&lt;user&gt;"
  ...
  Examples:
    | user            |
    | testuser1@bank.com |
    | testuser2@bank.com |</code></div>
      <div class="info-panel warning"><div class="panel-title">Root rule</div><p>Every parallel test must own its data exclusively. Share NOTHING between threads — not users, not account numbers, not application state.</p></div>`
    },
    {
      difficulty: 'medium',
      q: "Your Cucumber feature file has 20 scenarios. You need to run only the 3 that test the payment module quickly after a hotfix. How do you do this without creating a new feature file?",
      a: `<div class="ans-hero">Tag the 3 payment scenarios with @payment and run only those via tags in the Runner or Maven command — no file changes needed.</div>
      <div class="code-block"><code><span class="cm">// Add tag to the 3 scenarios in the feature file:</span>
<span class="kw">@payment @hotfix</span>
Scenario: NEFT payment success
  ...

<span class="kw">@payment @hotfix</span>
Scenario: Payment with insufficient balance
  ...

<span class="kw">@payment @hotfix</span>
Scenario: Duplicate payment prevention
  ...

<span class="cm">// Runner — run only payment:</span>
<span class="kw">@CucumberOptions</span>(tags = <span class="st">"@payment"</span>)

<span class="cm">// Or Maven (no Runner change needed):</span>
mvn test -Dcucumber.filter.tags=<span class="st">"@payment"</span>

<span class="cm">// Combined — payment but not the known broken one:</span>
mvn test -Dcucumber.filter.tags=<span class="st">"@payment and not @wip"</span></code></div>
      <div class="info-panel tip"><div class="panel-title">CI workflow</div><p>After hotfix: run @hotfix tag (2 min). After merge to main: run @regression (30 min). Nightly: full suite. Tags give you surgical control over what runs when.</p></div>`
    }
  ],

  tosca: [
    {
      difficulty: 'easy',
      q: "Your company tests a complex SAP application. A junior tester with no coding skills joins the team. Why would Tosca be a better choice than Selenium for this project?",
      a: `<div class="ans-hero">Tosca is model-based and codeless — designed for SAP and enterprise apps, requires no programming knowledge.</div>
      <table class="table-light-custom">
        <thead><tr><th>Factor</th><th>Tosca</th><th>Selenium</th></tr></thead>
        <tbody>
          <tr><td>Coding required</td><td>❌ No coding needed</td><td>✅ Java/Python required</td></tr>
          <tr><td>SAP Support</td><td>✅ Native SAP connector</td><td>❌ Very difficult with SAP GUI</td></tr>
          <tr><td>Test creation</td><td>Drag-and-drop (XScan)</td><td>Write code manually</td></tr>
          <tr><td>Non-technical testers</td><td>✅ Suitable</td><td>❌ Not suitable</td></tr>
          <tr><td>Cost</td><td>❌ Expensive license</td><td>✅ Free, open source</td></tr>
        </tbody>
      </table>`
    },
    {
      difficulty: 'medium',
      q: "During test execution in Tosca, a 'Session Timeout' dialog appears unexpectedly and causes all your tests to fail. How do you handle this without modifying every test case?",
      a: `<div class="ans-hero">Use a Recovery Scenario — it automatically detects and handles the unexpected dialog, then resumes test execution.</div>
      <ul class="ans-list blue">
        <li><span class="icon">1️⃣</span><strong>Create a Module</strong> for the "Session Timeout" dialog — scan it with XScan to capture its elements</li>
        <li><span class="icon">2️⃣</span><strong>Create a Recovery Scenario</strong> in Tosca Commander</li>
        <li><span class="icon">3️⃣</span><strong>Configure trigger:</strong> "If this dialog appears during any test execution..."</li>
        <li><span class="icon">4️⃣</span><strong>Configure action:</strong> "...click 'Continue' button and resume execution"</li>
        <li><span class="icon">5️⃣</span><strong>Assign to Execution List</strong> — the recovery applies automatically to all tests without modifying individual test cases</li>
      </ul>
      <div class="info-panel tip"><div class="panel-title">Why This is Powerful</div><p>One Recovery Scenario protects ALL test cases — no need to add dialog handling to each individual test.</p></div>`
    },
    {
      difficulty: 'hard',
      q: "You need to test a REST API in Tosca that creates a new bank account. Walk through the complete setup.",
      a: `<div class="ans-hero">Use Tosca's API Engine — create an API Module, configure request/response, add verify steps.</div>
      <ul class="ans-list">
        <li><span class="icon">1️⃣</span><strong>Create API Module:</strong> Modules → New → Select type "API Scan" → Enter endpoint URL</li>
        <li><span class="icon">2️⃣</span><strong>Configure request:</strong> Method = POST, URL = <code>/api/accounts/create</code>, Headers = Content-Type: application/json</li>
        <li><span class="icon">3️⃣</span><strong>Add request body params:</strong> accountHolderName (Input), initialDeposit (Input), accountType (Input)</li>
        <li><span class="icon">4️⃣</span><strong>Add response verifications:</strong> statusCode → Verify = 201, accountId → Verify = not null, message → Verify = "Account created successfully"</li>
        <li><span class="icon">5️⃣</span><strong>Create Test Case:</strong> Drag Module Attributes → Set values → Run</li>
        <li><span class="icon">6️⃣</span><strong>Chain to UI:</strong> Store returned accountId in Buffer → use in subsequent UI test case to verify account appears in dashboard</li>
      </ul>`
    },

    // ── Banking App — Tosca Scenarios ─────────────────────────────────────────
    {
      difficulty: 'hard',
      q: "You are designing Tosca automation for a banking fund transfer flow that includes OTP verification. The OTP comes to the user's phone. How do you handle this in Tosca?",
      a: `<div class="ans-hero">Test environments use a mock/fixed OTP via Business Parameters. For more advanced setups, an API Module retrieves the OTP and a Buffer passes it to the OTP input step.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">UAT environment: fixed OTP</div><div class="step-desc">Configure UAT to accept a fixed value (e.g. 123456). Store in Business Parameter: {EP[UAT.MockOTP]}. OTP step → ActionMode Input → {EP[UAT.MockOTP]}. Zero test case changes needed when OTP changes — only update the parameter.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Advanced: API-based OTP retrieval</div><div class="step-desc">After clicking Proceed button: add an API Module step → GET /test-api/otp?user={EP[UAT.User]} → Buffer response as {B[OTPCode]} → OTPField step → Input → {B[OTPCode]}. Fully automated without hardcoding.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Never test real OTP in automation</div><div class="step-desc">Real OTP delivery (SMS) is non-deterministic and cannot be automated reliably. This is a design contract with the dev team: UAT must expose a testable OTP mechanism.</div></div></div>
      </div>`
    },
    {
      difficulty: 'hard',
      q: "Your banking regression suite has 400 tests and currently takes 6 hours on a single machine. Management wants it under 45 minutes. What is your Tosca strategy?",
      a: `<div class="ans-hero">Use Tosca's Distributed Execution (DEX) with the Elastic Execution Grid on Azure. Parallelize by feature area across multiple agents.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Before</h6>400 tests × ~54 sec/test = 6 hours. 1 machine. Sequential execution. Any machine issue = full re-run.</div>
        <div class="compare-card green"><h6>After (DEX, 10 agents)</h6>400 tests ÷ 10 agents = 40 tests/agent × ~54 sec = ~36 min. Elastic grid auto-provisions Azure VMs. Agent failure only affects its batch.</div>
      </div>
      <ul class="ans-list green">
        <li><span class="icon">1️⃣</span><strong>Execution List design:</strong> Split into independent sub-lists by feature: Login, Transfer, Beneficiary, Statement — no dependencies across lists</li>
        <li><span class="icon">2️⃣</span><strong>Enable DEX:</strong> Configure parallel="true", thread-count=10 in Execution List settings</li>
        <li><span class="icon">3️⃣</span><strong>Elastic Grid setup:</strong> Provision 10 Azure VMs with Tosca Agent installed. Register with DEX server.</li>
        <li><span class="icon">4️⃣</span><strong>Avoid shared state:</strong> Each test case must use its own test data (TDM subsets) — no two parallel tests can use the same bank account or they'll conflict</li>
      </ul>`
    },
    {
      difficulty: 'medium',
      q: "After a UI redesign of the banking app, 80% of your Tosca test cases are failing. The dev team changed button IDs across all pages. What is the fastest recovery strategy?",
      a: `<div class="ans-hero">Re-scan only the affected Module Attributes using XScan. All test cases using those modules auto-fix — no individual test case editing needed.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Identify which modules are broken</div><div class="step-desc">Run a failed test case → look at the first failing step → it tells you exactly which Module + Attribute failed. All failures from the same UI page share one module.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Open the Module → Re-scan affected attributes</div><div class="step-desc">In Commander → Modules section → open LoginPage Module. Right-click the broken attribute → Rescan. XScan highlights the element on the live page — confirm the new ID → save. Done for that attribute.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">All test cases auto-healed</div><div class="step-desc">Every test case that uses LoginPage Module's LoginButton attribute now uses the updated locator. Zero test case edits. This is the MBTA advantage over Selenium POM — even POM needs per-attribute edits; Tosca re-scan is visual and faster.</div></div></div>
      </div>
      <div class="info-panel tip"><div class="panel-title">Prevention strategy</div><p>Work with devs to add stable <code>data-testid</code> attributes to all interactive elements — these don't change with styling/refactoring. XScan then uses data-testid as the primary identifier, making future UI changes even safer.</p></div>`
    },
    {
      difficulty: 'hard',
      q: "You need to validate that after a fund transfer in the banking app, both the UI shows success AND the database has the correct transaction record. How do you build this as a single end-to-end Tosca test case?",
      a: `<div class="ans-hero">Combine UI Module steps + DB Module steps in one test case. Buffer the reference number from the UI step to use as the DB query parameter.</div>
      <table class="comparison-table">
        <thead><tr><th>Step</th><th>Module Type</th><th>Action Mode → Value</th></tr></thead>
        <tbody>
          <tr><td>1–10</td><td>UI (HTML Engine)</td><td>Full transfer flow via TransferPage Module. Step 12: Buffer ReferenceNumber → {B[RefNo]}</td></tr>
          <tr><td>11</td><td>UI: TransferPage → SuccessMessage</td><td>Verify → "Transfer Successful"</td></tr>
          <tr><td>12</td><td>API Module: GET /transactions/{B[RefNo]}</td><td>Verify: status=COMPLETED, amount=5000</td></tr>
          <tr><td>13</td><td>DB Module: SELECT status FROM txn WHERE ref='{B[RefNo]}'</td><td>Verify → COMPLETED</td></tr>
          <tr><td>14</td><td>DB Module: SELECT balance FROM accounts WHERE id='A'</td><td>Verify → {B[BalanceBefore]} - 5000</td></tr>
        </tbody>
      </table>
      <div class="info-panel tip"><div class="panel-title">Key design point</div><p>The DB Module needs a JDBC connection string configured in Tosca Settings (server, port, database name, credentials). This is a one-time setup — all DB test cases reuse it.</p></div>`
    }
  ],

  // ── PLAYWRIGHT ──────────────────────────────────────────────────────────────
  playwright: [
    {
      difficulty: 'hard',
      q: "Your banking application requires OTP verification via SMS during fund transfer. How do you handle OTP in Playwright automation without receiving real SMS messages?",
      a: `<div class="ans-hero">Use page.route() to intercept the OTP API and return a known value, OR configure UAT to accept a fixed OTP stored in environment variables.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Approach 1 (Preferred): Fixed OTP in UAT config</div><div class="step-desc">Dev team configures UAT so OTP "123456" always passes. Test fills: <code>await page.getByLabel('OTP').fill(process.env.TEST_OTP || '123456')</code>. Simple, no route interception needed. Contract with the dev team — UAT must never send real SMS.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Approach 2: Intercept OTP via page.route()</div><div class="step-desc"><code>await page.route('**/api/otp/**', route => route.fulfill({ json: { otp: '123456' } }))</code>. The browser never hits the real OTP service. Test fills the mocked value. Works even if UAT sends real OTPs in some scenarios.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Approach 3: Retrieve from test API</div><div class="step-desc"><code>const otpRes = await request.get('/test-api/latest-otp?user=karan@bankapp.com')</code>. Backend stores the OTP it would have sent, test retrieves it. Most realistic but requires backend support.</div></div></div>
      </div>
      <div class="info-panel warning"><div class="panel-title">Never in automation</div><p>Do NOT automate reading real SMS (Twilio APIs, phone emulators). It is non-deterministic, expensive, and creates flaky tests. This is a design contract between QA and dev: UAT environments must expose a testable OTP mechanism.</p></div>`
    },
    {
      difficulty: 'hard',
      q: "You need to test the same banking workflow as two different user roles — 'admin' and 'customer' — simultaneously in CI. How do you design this in Playwright without session conflicts?",
      a: `<div class="ans-hero">Create two storageState files from separate auth setups. Assign each test group its own storageState via test.use(). BrowserContext isolation ensures no session bleed between parallel workers.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Create two auth setup tests</div><div class="step-desc">auth.setup.ts: setup('admin', ...) saves auth/admin.json; setup('customer', ...) saves auth/customer.json. These run ONCE before all tests (via dependencies in playwright.config.ts).</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Assign storageState per test group</div><div class="step-desc">admin.spec.ts: test.use({ storageState: 'auth/admin.json' }). customer.spec.ts: test.use({ storageState: 'auth/customer.json' }). Each test starts with a fresh BrowserContext loaded from the right session file.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Parallel execution — no conflicts</div><div class="step-desc">Worker 1 runs admin tests (admin.json context). Worker 2 runs customer tests (customer.json context). Completely isolated — no shared cookies, no shared localStorage. 2x faster than sequential.</div></div></div>
      </div>
      <div class="info-panel tip"><div class="panel-title">Key principle</div><p>BrowserContext is the isolation unit in Playwright — not Browser. Multiple contexts run in the same browser process (fast) but with completely separate sessions (safe).</p></div>`
    },
    {
      difficulty: 'hard',
      q: "Your Playwright CI pipeline takes 40 minutes for 400 banking tests. How do you bring this under 10 minutes using Playwright's parallelization features?",
      a: `<div class="ans-hero">Use sharding across 4+ GitHub Actions runners combined with fullyParallel: true within each shard. 400 tests divided by 4 shards with parallel workers gets to about 8 minutes.</div>
      <table class="comparison-table">
        <thead><tr><th>Optimization</th><th>Config / Command</th><th>Impact</th></tr></thead>
        <tbody>
          <tr><td>Sharding (4 runners)</td><td>--shard=1/4, --shard=2/4 etc. in GitHub Actions matrix</td><td>400 → 100 tests per runner</td></tr>
          <tr><td>fullyParallel</td><td>fullyParallel: true in playwright.config.ts</td><td>Tests WITHIN a file run concurrently</td></tr>
          <tr><td>workers</td><td>workers: 4 in CI</td><td>4 test files run simultaneously per runner</td></tr>
          <tr><td>storageState</td><td>Pre-saved auth state — no login per test</td><td>Save 2-3s x 400 tests = 20 min</td></tr>
          <tr><td>Block trackers</td><td>page.route('**analytics**', route => route.abort())</td><td>Remove slow 3rd-party requests</td></tr>
        </tbody>
      </table>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Before</h6>400 tests, sequential, login per test = ~40 min</div>
        <div class="compare-card green"><h6>After (4 shards + parallel + storageState)</h6>100 tests/shard divided by 4 workers x ~5s/test = ~2 min per shard. Total: ~8 minutes wall-clock.</div>
      </div>`
    },
    {
      difficulty: 'medium',
      q: "During a CI run, 3 Playwright tests intermittently fail with 'element not found' errors in the banking dashboard. Locally they always pass. How do you debug and fix this?",
      a: `<div class="ans-hero">CI is headless and slower — elements load after the test tries to interact. Use Playwright's trace viewer to find the root cause, then fix with proper assertions instead of timeouts.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Enable trace on first retry in playwright.config.ts</div><div class="step-desc"><code>trace: 'on-first-retry'</code> saves a full trace zip (screenshots, DOM snapshots, network log) for every flaky test automatically in CI.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Download and open the trace</div><div class="step-desc"><code>npx playwright show-trace trace.zip</code> shows exact timeline of actions, DOM state at each step, network waterfall. Find the step where element was not found — check the DOM snapshot — element was hidden behind a loading spinner.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Fix: wait for spinner to disappear</div><div class="step-desc">Add: <code>await page.locator('.loading-spinner').waitFor({ state: 'hidden' })</code> before the failing interaction. Or use a web-first assertion: <code>await expect(page.locator('.balance-card')).toBeVisible()</code> which retries automatically.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Never fix with page.waitForTimeout()</div><div class="step-desc">Arbitrary sleeps make tests slower AND still flaky if the page is slow that day. Always wait for a specific condition (element visible, URL change, spinner hidden).</div></div></div>
      </div>`
    },

    {
      difficulty: 'medium',
      q: "A banking application loads an account summary dashboard that shows balance, last 5 transactions, and pending requests via 3 separate AJAX calls. Some tests fail because they assert balance before all 3 calls complete. How do you handle this in Playwright?",
      a: `<div class="ans-hero">Wait for each specific UI element that represents the loaded state — not an arbitrary timeout. Use web-first assertions or waitForResponse() to wait for all 3 API responses before asserting.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Wrong approach: sleep</div><div class="step-desc"><code>await page.waitForTimeout(3000)</code> is fragile — 3s may not be enough on slow CI, and it always wastes 3s on fast environments. Never use this.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Correct: wait for all 3 API responses</div><div class="step-desc"><code>await Promise.all([page.waitForResponse('**/api/balance'), page.waitForResponse('**/api/transactions'), page.waitForResponse('**/api/requests')])</code> before asserting any dashboard element. Playwright resolves as soon as all 3 respond.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Alternative: wait for the UI indicators</div><div class="step-desc">Each section shows a spinner while loading. After navigation: <code>await expect(page.locator('.balance-spinner')).toBeHidden()</code> and so on for each section. When all spinners are gone, data is loaded.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Best practice: waitForLoadState</div><div class="step-desc">After the navigation: <code>await page.waitForLoadState('networkidle')</code> waits until there are no network requests for 500ms. Works well if all 3 AJAX calls fire on page load. Combine with a UI assertion for safety.</div></div></div>
      </div>`
    },

    {
      difficulty: 'medium',
      q: "You need to test a banking PDF statement download. After clicking 'Download', the browser saves the file. How do you verify the PDF was downloaded and contains the correct data in Playwright?",
      a: `<div class="ans-hero">Use the 'download' event with Promise.all() to capture the download object before it completes, then verify the filename and use a PDF parsing library to check content.</div>
      <div class="code-block"><code><span class="cm">// Capture the download:</span>
<span class="kw">const</span> [download] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
  page.<span class="fn">waitForEvent</span>(<span class="st">'download'</span>),
  page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Download Statement'</span> }).<span class="fn">click</span>()
]);

<span class="cm">// Verify filename (e.g. statement-Jan-2024.pdf):</span>
expect(download.<span class="fn">suggestedFilename</span>()).<span class="fn">toMatch</span>(/statement-.*\.pdf/);

<span class="cm">// Save and verify file exists:</span>
<span class="kw">await</span> download.<span class="fn">saveAs</span>(<span class="st">'downloads/statement.pdf'</span>);
expect(fs.<span class="fn">existsSync</span>(<span class="st">'downloads/statement.pdf'</span>)).<span class="fn">toBe</span>(<span class="kw">true</span>);

<span class="cm">// Verify PDF content (using pdf-parse library):</span>
<span class="kw">const</span> pdfBuffer = fs.<span class="fn">readFileSync</span>(<span class="st">'downloads/statement.pdf'</span>);
<span class="kw">const</span> pdfData = <span class="kw">await</span> <span class="fn">pdfParse</span>(pdfBuffer);
expect(pdfData.text).<span class="fn">toContain</span>(<span class="st">'Account Number'</span>);
expect(pdfData.text).<span class="fn">toContain</span>(<span class="st">'NEFT'</span>);</code></div>`
    },

    {
      difficulty: 'hard',
      q: "Your bank's payment gateway uses a third-party iframe (Razorpay/PayU) for card payments. How do you test the complete payment flow in Playwright including filling card details inside the iframe?",
      a: `<div class="ans-hero">Use frameLocator() to scope all locators inside the payment iframe. Treat it as a separate DOM — all Playwright locator methods work inside frameLocator() just like on the main page.</div>
      <div class="code-block"><code><span class="cm">// Navigate to payment page, amount pre-filled:</span>
<span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/payment'</span>);
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Amount'</span>).<span class="fn">fill</span>(<span class="st">'1999'</span>);
<span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Pay Now'</span> }).<span class="fn">click</span>();

<span class="cm">// Wait for payment iframe to appear:</span>
<span class="kw">await</span> page.<span class="fn">waitForSelector</span>(<span class="st">'iframe[src*="razorpay"]'</span>);

<span class="cm">// Scope all locators inside the iframe:</span>
<span class="kw">const</span> frame = page.<span class="fn">frameLocator</span>(<span class="st">'iframe[src*="razorpay"]'</span>);
<span class="kw">await</span> frame.<span class="fn">getByLabel</span>(<span class="st">'Card Number'</span>).<span class="fn">fill</span>(<span class="st">'4111111111111111'</span>);
<span class="kw">await</span> frame.<span class="fn">getByLabel</span>(<span class="st">'Expiry'</span>).<span class="fn">fill</span>(<span class="st">'12/26'</span>);
<span class="kw">await</span> frame.<span class="fn">getByLabel</span>(<span class="st">'CVV'</span>).<span class="fn">fill</span>(<span class="st">'123'</span>);
<span class="kw">await</span> frame.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Pay ₹1,999'</span> }).<span class="fn">click</span>();

<span class="cm">// Back on main page — verify success:</span>
<span class="kw">await</span> expect(page.<span class="fn">getByText</span>(<span class="st">'Payment Successful'</span>)).<span class="fn">toBeVisible</span>();
<span class="kw">await</span> expect(page).<span class="fn">toHaveURL</span>(/payment-success/);</code></div>
      <div class="info-panel warning"><div class="panel-title">Sandbox cards</div><p>Always use the payment gateway's test card numbers in UAT (e.g. Razorpay test card: 4111111111111111, CVV: any 3 digits). Never use real card data in tests.</p></div>`
    },

    {
      difficulty: 'hard',
      q: "You need to test a banking chatbot widget that opens in a separate pop-up window when the user clicks 'Chat with us'. The chatbot is hosted on a different domain. How do you handle this?",
      a: `<div class="ans-hero">Use context.waitForEvent('page') to capture the pop-up page, then interact with it normally. Playwright bypasses CORS for test automation — cross-origin pop-ups work the same way.</div>
      <div class="code-block"><code><span class="cm">// Capture pop-up when it opens:</span>
<span class="kw">const</span> [chatPopup] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
  page.<span class="fn">context</span>().<span class="fn">waitForEvent</span>(<span class="st">'page'</span>),
  page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Chat with us'</span> }).<span class="fn">click</span>()
]);

<span class="cm">// Wait for pop-up to fully load:</span>
<span class="kw">await</span> chatPopup.<span class="fn">waitForLoadState</span>(<span class="st">'domcontentloaded'</span>);

<span class="cm">// Interact with chatbot:</span>
<span class="kw">await</span> chatPopup.<span class="fn">getByPlaceholder</span>(<span class="st">'Type your message'</span>).<span class="fn">fill</span>(<span class="st">'What is my account balance?'</span>);
<span class="kw">await</span> chatPopup.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Send'</span> }).<span class="fn">click</span>();

<span class="cm">// Verify bot response:</span>
<span class="kw">await</span> expect(chatPopup.<span class="fn">getByTestId</span>(<span class="st">'bot-message'</span>))
  .<span class="fn">toContainText</span>(<span class="st">'Your balance'</span>, { timeout: 10_000 });

<span class="cm">// Close pop-up and continue on main page:</span>
<span class="kw">await</span> chatPopup.<span class="fn">close</span>();
<span class="kw">await</span> expect(page.<span class="fn">getByTestId</span>(<span class="st">'chat-icon'</span>)).<span class="fn">toBeVisible</span>();</code></div>`
    },

    {
      difficulty: 'hard',
      q: "The bank's loan EMI calculator updates the EMI amount in real time as the user types the loan amount. Tests fail because they assert EMI before the calculation completes. How do you fix this?",
      a: `<div class="ans-hero">The real-time calculation fires on each keystroke but may be debounced. Wait for a stable (non-changing) value in the EMI field using expect.poll() or wait for the API response if EMI is server-calculated.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Root cause</div><div class="step-desc">EMI field updates multiple times as '2', '25', '250', '2500' are typed. Test asserts after '25' is typed, before final value is set. Using fill() fires input event once, but the server may debounce.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Fix 1: Wait for network response (server-calculated EMI)</div><div class="step-desc"><code>const [response] = await Promise.all([page.waitForResponse('**/api/calculate-emi'), page.getByLabel('Loan Amount').fill('250000')]); await expect(page.getByTestId('emi-amount')).not.toHaveText('--');</code></div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Fix 2: Use expect.poll() for stable value (client-calculated)</div><div class="step-desc"><code>await page.getByLabel('Loan Amount').fill('250000'); await expect.poll(async () => page.getByTestId('emi-amount').textContent(), { intervals: [200] }).toMatch(/₹[\d,]+/)</code>. Polls until EMI shows a non-empty number.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Fix 3: Tab away to trigger blur</div><div class="step-desc"><code>await page.getByLabel('Loan Amount').fill('250000'); await page.getByLabel('Loan Amount').press('Tab');</code> Many calculators trigger final computation on blur — tabbing away fires blur and forces the final value.</div></div></div>
      </div>`
    },

    {
      difficulty: 'medium',
      q: "You have 200 banking test cases but want to run only 'smoke' tests on every PR and the full suite only nightly. How do you tag and run specific test subsets in Playwright?",
      a: `<div class="ans-hero">Use Playwright's --grep flag with a naming convention or test.describe with tagged names. Mark smoke tests with @smoke in the test title and filter with --grep @smoke on PRs.</div>
      <div class="code-block"><code><span class="cm">// Mark tests with tags in their title:</span>
test(<span class="st">'@smoke @login user can login with valid credentials'</span>, ...);
test(<span class="st">'@smoke @transfer basic NEFT transfer'</span>, ...);
test(<span class="st">'@regression edge case: transfer with special characters'</span>, ...);

<span class="cm">// PR pipeline — only smoke tests:</span>
npx playwright test --grep @smoke

<span class="cm">// Nightly — full regression:</span>
npx playwright test

<span class="cm">// OR use Playwright's built-in tag support (v1.42+):</span>
test(<span class="st">'user can login'</span>, { tag: [<span class="st">'@smoke'</span>, <span class="st">'@login'</span>] }, <span class="kw">async</span> ({ page }) => { ... });

<span class="cm">// Filter by tag:</span>
npx playwright test --grep "@smoke"
npx playwright test --grep "@login"
npx playwright test --grep-invert "@slow"</code></div>
      <div class="info-panel tip"><div class="panel-title">CI strategy</div><p>@smoke: 20–30 tests, &lt;5 min — run on every PR. @regression: all 200, 30–40 min — run nightly and before releases. @critical: 10 tests — run on every deploy to production.</p></div>`
    },

    {
      difficulty: 'hard',
      q: "A banking API endpoint /api/transfer is called by your Playwright test. You need to verify that the request payload contains the correct fields and values. How do you capture and assert API request details in Playwright?",
      a: `<div class="ans-hero">Use page.on('request') or page.waitForRequest() to capture the outgoing request, then inspect its method, URL, headers, and POST body before asserting.</div>
      <div class="code-block"><code><span class="cm">// Capture request when it fires:</span>
<span class="kw">const</span> [request] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
  page.<span class="fn">waitForRequest</span>(<span class="st">'**/api/transfer'</span>),
  page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Confirm Transfer'</span> }).<span class="fn">click</span>()
]);

<span class="cm">// Assert request method:</span>
expect(request.<span class="fn">method</span>()).<span class="fn">toBe</span>(<span class="st">'POST'</span>);

<span class="cm">// Assert request URL:</span>
expect(request.<span class="fn">url</span>()).<span class="fn">toContain</span>(<span class="st">'/api/transfer'</span>);

<span class="cm">// Assert request headers:</span>
expect(request.<span class="fn">headers</span>()[<span class="st">'content-type'</span>]).<span class="fn">toContain</span>(<span class="st">'application/json'</span>);

<span class="cm">// Assert POST body fields:</span>
<span class="kw">const</span> body = JSON.<span class="fn">parse</span>(request.<span class="fn">postData</span>() || <span class="st">'{}'</span>);
expect(body.fromAccount).<span class="fn">toBe</span>(<span class="st">'1234567890'</span>);
expect(body.toAccount).<span class="fn">toBe</span>(<span class="st">'9876543210'</span>);
expect(body.amount).<span class="fn">toBe</span>(5000);
expect(body.transferType).<span class="fn">toBe</span>(<span class="st">'NEFT'</span>);</code></div>`
    },

    {
      difficulty: 'hard',
      q: "Your banking application has a 15-minute session timeout. After inactivity, the user is shown a 'Session Expired' modal and redirected to login. How do you test this in Playwright without waiting 15 minutes?",
      a: `<div class="ans-hero">Use page.evaluate() to fast-forward the session expiry by manipulating browser storage, OR mock the session-check API to return a 401, OR use CDP to advance the clock. Each is faster than waiting the real timeout.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Approach 1: Clear session via localStorage/Cookie</div><div class="step-desc"><code>await page.evaluate(() => { localStorage.removeItem('authToken'); sessionStorage.clear(); })</code> then trigger any action. App detects missing token, shows session expired modal. Fast — no actual wait needed.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Approach 2: Mock session-check API to return 401</div><div class="step-desc"><code>await page.route('**/api/session/check', route => route.fulfill({ status: 401, json: { error: 'Session expired' } }))</code>. Next session-check ping triggers logout flow. Use this when the app polls a backend endpoint.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Assert the session expired modal</div><div class="step-desc"><code>await expect(page.getByRole('dialog', { name: 'Session Expired' })).toBeVisible(); await expect(page.getByText('Your session has expired')).toBeVisible();</code></div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Assert redirect to login</div><div class="step-desc"><code>await page.getByRole('button', { name: 'Login Again' }).click(); await expect(page).toHaveURL(/login/);</code></div></div></div>
      </div>`
    },

    {
      difficulty: 'hard',
      q: "You need to test a bank's mobile responsive version (375×812 viewport) across 3 browsers in Playwright. How do you configure and run mobile emulation tests?",
      a: `<div class="ans-hero">Use Playwright's built-in device descriptors via the devices object in playwright.config.ts. Each device preset includes viewport, user-agent, and touch support. Create a dedicated project per device.</div>
      <div class="code-block"><code><span class="cm">// playwright.config.ts:</span>
<span class="kw">import</span> { defineConfig, devices } <span class="kw">from</span> <span class="st">'@playwright/test'</span>;

<span class="kw">export default</span> <span class="fn">defineConfig</span>({
  projects: [
    <span class="cm">// Desktop:</span>
    { name: <span class="st">'Desktop Chrome'</span>, use: { ...devices[<span class="st">'Desktop Chrome'</span>] } },

    <span class="cm">// Mobile devices:</span>
    { name: <span class="st">'iPhone 14'</span>,     use: { ...devices[<span class="st">'iPhone 14'</span>] } },
    { name: <span class="st">'Pixel 7'</span>,       use: { ...devices[<span class="st">'Pixel 7'</span>] } },
    { name: <span class="st">'iPad Pro'</span>,      use: { ...devices[<span class="st">'iPad Pro'</span>] } },

    <span class="cm">// Custom viewport (banking kiosk):</span>
    { name: <span class="st">'Kiosk'</span>, use: { viewport: { width: 1024, height: 768 }, isMobile: <span class="kw">false</span> } },
  ]
});

<span class="cm">// Run only mobile tests:</span>
npx playwright test --project="iPhone 14" --project="Pixel 7"</code></div>
      <div class="info-panel tip"><div class="panel-title">Mobile-specific assertions</div><p>Check hamburger menu: <code>await expect(page.getByRole('button', { name: 'Menu' })).toBeVisible()</code>. Check desktop nav is hidden: <code>await expect(page.getByRole('navigation', { name: 'main' })).toBeHidden()</code>.</p></div>`
    },

    {
      difficulty: 'medium',
      q: "The bank's transaction history page uses infinite scroll — more transactions load as you scroll to the bottom. How do you test that all transactions load correctly in Playwright?",
      a: `<div class="ans-hero">Scroll to the bottom repeatedly in a loop, waiting for new rows each time, until the 'Load More' indicator disappears or the row count stops increasing.</div>
      <div class="code-block"><code>test(<span class="st">'all transactions load via infinite scroll'</span>, <span class="kw">async</span> ({ page }) => {
  <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/transactions'</span>);

  <span class="kw">let</span> previousCount = 0;
  <span class="kw">let</span> currentCount = 0;

  <span class="kw">do</span> {
    previousCount = <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'row'</span>).<span class="fn">count</span>();

    <span class="cm">// Scroll to the bottom:</span>
    <span class="kw">await</span> page.<span class="fn">evaluate</span>(() =>
      window.<span class="fn">scrollTo</span>(0, document.body.scrollHeight)
    );

    <span class="cm">// Wait for new rows to appear:</span>
    <span class="kw">await</span> page.<span class="fn">waitForTimeout</span>(1000);
    currentCount = <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'row'</span>).<span class="fn">count</span>();

  } <span class="kw">while</span> (currentCount > previousCount);

  <span class="cm">// All rows loaded — check total count:</span>
  expect(currentCount).<span class="fn">toBeGreaterThan</span>(20);

  <span class="cm">// Verify no duplicate transaction IDs:</span>
  <span class="kw">const</span> ids = <span class="kw">await</span> page.<span class="fn">getByTestId</span>(<span class="st">'txn-id'</span>).<span class="fn">allTextContents</span>();
  expect(<span class="kw">new</span> Set(ids).size).<span class="fn">toBe</span>(ids.length);
});</code></div>`
    },

    {
      difficulty: 'hard',
      q: "Your Playwright test suite runs against 3 environments (dev, UAT, prod). Each environment has different base URLs, test users, and some features only enabled in UAT. How do you manage this?",
      a: `<div class="ans-hero">Use environment variables to parameterize baseURL and test credentials. Create a config object that returns the right values per environment. Feature flags control environment-specific test skips.</div>
      <div class="code-block"><code><span class="cm">// config/envConfig.ts</span>
<span class="kw">const</span> configs = {
  dev: {
    baseURL: <span class="st">'https://dev.bankapp.com'</span>,
    adminUser: <span class="st">'admin@dev.bankapp.com'</span>,
    adminPass: process.env.DEV_ADMIN_PASS!,
    features: { internationalTransfer: <span class="kw">true</span>, biometricLogin: <span class="kw">false</span> }
  },
  uat: {
    baseURL: <span class="st">'https://uat.bankapp.com'</span>,
    adminUser: <span class="st">'admin@uat.bankapp.com'</span>,
    adminPass: process.env.UAT_ADMIN_PASS!,
    features: { internationalTransfer: <span class="kw">true</span>, biometricLogin: <span class="kw">true</span> }
  },
  prod: {
    baseURL: <span class="st">'https://bankapp.com'</span>,
    adminUser: <span class="st">''</span>,
    adminPass: <span class="st">''</span>,
    features: { internationalTransfer: <span class="kw">false</span>, biometricLogin: <span class="kw">false</span> }
  }
};

<span class="kw">export const</span> env = configs[process.env.TEST_ENV || <span class="st">'uat'</span>];

<span class="cm">// playwright.config.ts:</span>
use: { baseURL: env.baseURL }

<span class="cm">// In tests — skip if feature not enabled:</span>
test.<span class="fn">skip</span>(!env.features.biometricLogin, <span class="st">'Biometric not available in this env'</span>);

<span class="cm">// CI commands:</span>
TEST_ENV=dev  npx playwright test
TEST_ENV=uat  npx playwright test
TEST_ENV=prod npx playwright test --grep @smoke</code></div>`
    },

    {
      difficulty: 'hard',
      q: "A senior developer says Playwright is 'just another Selenium' and wants to keep Selenium. How do you make the technical case for migrating to Playwright?",
      a: `<div class="ans-hero">Present concrete evidence on 4 pillars: reliability (auto-waiting vs explicit waits), speed (parallel + sharding vs Grid), modern features (network interception, trace viewer, WebKit), and developer experience (better debugging, no setup overhead).</div>
      <table class="comparison-table">
        <thead><tr><th>Dimension</th><th>Selenium</th><th>Playwright</th><th>Impact</th></tr></thead>
        <tbody>
          <tr><td><strong>Flakiness</strong></td><td>Manual Thread.sleep(), explicit waits everywhere</td><td>Auto-waiting built-in, web-first assertions with auto-retry</td><td>~40% fewer flaky tests</td></tr>
          <tr><td><strong>Speed</strong></td><td>Sequential by default, Grid for parallel (complex setup)</td><td>Workers + sharding built-in, no Grid needed</td><td>3–5x faster CI</td></tr>
          <tr><td><strong>Network</strong></td><td>BrowserMob Proxy (separate process, fragile)</td><td>page.route() native — intercept/mock in 2 lines</td><td>Eliminates external dependency</td></tr>
          <tr><td><strong>Debugging</strong></td><td>Screenshots only, no step-by-step replay</td><td>Trace viewer: DOM snapshot + network + console per action</td><td>Root cause in minutes not hours</td></tr>
          <tr><td><strong>Safari</strong></td><td>Requires real Safari on macOS (expensive CI)</td><td>WebKit engine runs cross-platform including Linux CI</td><td>Cross-browser on standard Linux runners</td></tr>
          <tr><td><strong>Auth setup</strong></td><td>Login in every test (or share state — flaky)</td><td>storageState: login once, reuse safely</td><td>Saves minutes per run</td></tr>
        </tbody>
      </table>
      <div class="info-panel tip"><div class="panel-title">Migration approach</div><p>Start with new features — write them in Playwright. Migrate old tests opportunistically when they break (rewrite in Playwright rather than fixing). Parallel-run both for 1–2 sprints. No big-bang rewrite needed.</p></div>`
    },

    {
      difficulty: 'medium',
      q: "Your Playwright test for beneficiary management needs to add, verify, and delete a beneficiary. The delete action shows a confirmation dialog. How do you handle the full flow including dialog?",
      a: `<div class="ans-hero">Use the standard CRUD flow with a page.once('dialog') listener registered before the delete click. The 'once' handler fires only for the confirmation dialog and is then removed automatically.</div>
      <div class="code-block"><code>test(<span class="st">'add and delete beneficiary'</span>, <span class="kw">async</span> ({ page }) => {
  <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/beneficiaries'</span>);

  <span class="cm">// ADD beneficiary:</span>
  <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Add Beneficiary'</span> }).<span class="fn">click</span>();
  <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Name'</span>).<span class="fn">fill</span>(<span class="st">'Rahul Sharma'</span>);
  <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Account Number'</span>).<span class="fn">fill</span>(<span class="st">'9876543210'</span>);
  <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'IFSC Code'</span>).<span class="fn">fill</span>(<span class="st">'HDFC0001234'</span>);
  <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Save'</span> }).<span class="fn">click</span>();

  <span class="cm">// VERIFY beneficiary added:</span>
  <span class="kw">await</span> expect(page.<span class="fn">getByText</span>(<span class="st">'Rahul Sharma'</span>)).<span class="fn">toBeVisible</span>();

  <span class="cm">// DELETE — register dialog handler first:</span>
  page.<span class="fn">once</span>(<span class="st">'dialog'</span>, dialog => dialog.<span class="fn">accept</span>());
  <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'row'</span>, { name: <span class="st">'Rahul Sharma'</span> })
    .<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Delete'</span> }).<span class="fn">click</span>();

  <span class="cm">// VERIFY deleted:</span>
  <span class="kw">await</span> expect(page.<span class="fn">getByText</span>(<span class="st">'Rahul Sharma'</span>)).<span class="fn">toBeHidden</span>();
});</code></div>`
    },

    {
      difficulty: 'medium',
      q: "How do you use Playwright's API testing to set up test data before a UI test and clean it up afterwards — without going through the UI for setup/teardown?",
      a: `<div class="ans-hero">Use the request fixture in test.beforeEach/afterEach to create and delete test data via API. UI tests start with a known database state without going through the setup UI, saving minutes per test.</div>
      <div class="code-block"><code><span class="kw">let</span> createdBeneficiaryId: <span class="kw">string</span>;

test.<span class="fn">beforeEach</span>(<span class="kw">async</span> ({ request }) => {
  <span class="cm">// Create test beneficiary via API (10ms) instead of UI (15s):</span>
  <span class="kw">const</span> response = <span class="kw">await</span> request.<span class="fn">post</span>(<span class="st">'/api/beneficiaries'</span>, {
    headers: { Authorization: <span class="st">'Bearer '</span> + process.env.API_TOKEN },
    data: { name: <span class="st">'Test User'</span>, account: <span class="st">'9999999999'</span>, ifsc: <span class="st">'HDFC0001234'</span> }
  });
  <span class="kw">const</span> body = <span class="kw">await</span> response.<span class="fn">json</span>();
  createdBeneficiaryId = body.id;
});

test(<span class="st">'can transfer to existing beneficiary'</span>, <span class="kw">async</span> ({ page }) => {
  <span class="cm">// Beneficiary already exists — go straight to transfer test</span>
  <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/transfer'</span>);
  <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Beneficiary'</span>).<span class="fn">selectOption</span>(<span class="st">'Test User'</span>);
  <span class="cm">// ... rest of transfer test</span>
});

test.<span class="fn">afterEach</span>(<span class="kw">async</span> ({ request }) => {
  <span class="cm">// Clean up — prevent test data build-up in UAT</span>
  <span class="kw">if</span> (createdBeneficiaryId) {
    <span class="kw">await</span> request.<span class="fn">delete</span>(<span class="st">\`/api/beneficiaries/\${createdBeneficiaryId}\`</span>);
  }
});</code></div>`
    },

    {
      difficulty: 'hard',
      q: "Your bank's home loan application is a 5-step wizard. How do you design a robust Playwright test for the complete flow, and how do you handle the case where the user refreshes mid-wizard?",
      a: `<div class="ans-hero">Create a Page Object per wizard step for maintainability. Test the happy path as one test, then individual steps in separate tests using page.route() to mock prior steps as completed. Test refresh recovery separately.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Happy path test — full 5-step flow</div><div class="step-desc">One test drives the complete flow: personal details → employment → income → documents → review & submit. Assert step indicator progress after each step. Assert final confirmation page.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Individual step tests — mock completed steps</div><div class="step-desc">To test step 3 (income) in isolation: navigate to /loan/step3 (if URL-routable) OR complete steps 1–2 via API (POST /api/loan/steps/1, /api/loan/steps/2) then navigate to the step 3 URL. Skips slow UI navigation.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Refresh recovery test</div><div class="step-desc"><code>await page.goto('/loan/step3'); await page.reload(); await expect(page).toHaveURL(/loan\/step3/); await expect(page.getByText('Income Details')).toBeVisible();</code> Verify data entered before refresh is still there (if app uses session storage) or that the user is redirected to start.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Back navigation test</div><div class="step-desc">Click 'Back' from step 4 — verify step 3 is shown with previously entered data pre-filled. This is a common regression: back button clears the form instead of restoring values.</div></div></div>
      </div>`
    },

    {
      difficulty: 'hard',
      q: "A critical Playwright test that validates a ₹5 lakh RTGS transfer passes in isolation but fails when run in parallel with other transfer tests. How do you diagnose and fix this?",
      a: `<div class="ans-hero">This is a test data collision — parallel tests are sharing the same source account or beneficiary. The fix is test data isolation: each parallel worker uses a dedicated account or creates its own test data via API.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Diagnose: identify the shared resource</div><div class="step-desc">Add request logging: <code>page.on('requestfailed', r => console.log(r.url(), r.failure()))</code>. Run with trace: 'on'. Check if transfer fails with 'Insufficient balance' (another test depleted the account) or 'Duplicate transaction' (race condition).</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Fix 1: Dedicated test accounts per worker</div><div class="step-desc">Create one source account per worker. Use testInfo.workerIndex: <code>const account = TEST_ACCOUNTS[testInfo.workerIndex]</code>. Worker 0 uses account-A (₹10L balance), worker 1 uses account-B (₹10L balance). No sharing, no race.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Fix 2: Create fresh account via API in beforeEach</div><div class="step-desc"><code>const { accountId } = await request.post('/api/test/accounts', { data: { balance: 1000000 } })</code>. Each test creates and owns its own account. afterEach deletes it. Completely isolated — no shared state at all.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Fix 3: Use page.route() to mock the balance</div><div class="step-desc">Mock the balance check API: <code>await page.route('**/api/account/*/balance', route => route.fulfill({ json: { balance: 1000000 } }))</code>. The UI sees ₹10L regardless of the real account balance. Use when you can't create test accounts.</div></div></div>
      </div>`
    }
  ],

  'ai-testing': [
    {
      difficulty: 'medium',
      q: "Your manager asks you to use AI to generate test cases for the banking fund transfer feature. How do you approach this? What prompt do you write?",
      a: `<div class="ans-hero">Write a structured prompt with your role, application context, required format, and coverage areas. Review AI output for domain accuracy and add any missing banking-specific edge cases.</div>
      <div class="code-block"><code><span class="cm">// The prompt you give ChatGPT/Claude:</span>
You are a senior QA engineer for a banking application.

Generate 20 test cases for the Fund Transfer feature.

Application context:
- Transfer types: NEFT, RTGS, IMPS
- Min amount: Rs 1
- Max amount: Rs 10,00,000
- Requires OTP verification
- Only registered beneficiaries allowed

Format:
| Test ID | Scenario | Test Data | Steps | Expected Result | Priority |

Cover:
- Valid transfer for each type
- Amount boundary values (min, max, over-limit, zero, negative)
- Unregistered beneficiary
- Wrong OTP / expired OTP
- Session timeout during transfer
- Concurrent transfers
- Network failure after OTP entry</code></div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Get AI output</div><div class="step-desc">AI generates 20+ structured test cases in seconds with test IDs, test data, and expected results.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Review for domain accuracy</div><div class="step-desc">Verify RTGS minimum (Rs 2 lakhs), NEFT cut-off times, IMPS 24/7 availability — AI may not know bank-specific rules.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Add missing edge cases</div><div class="step-desc">Add: duplicate transfer within 60 seconds, transfer to own account, SWIFT for international transfers — domain knowledge AI cannot infer.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Import to test management</div><div class="step-desc">Paste into Jira/Azure DevOps or directly into the Cucumber .feature file. Time: 20 min total vs 3 hours manually.</div></div></div>
      </div>`
    },
    {
      difficulty: 'hard',
      q: "Your Selenium regression suite has 200 tests and 30% break every sprint because developers constantly rename UI elements. How do you solve this using AI?",
      a: `<div class="ans-hero">Integrate Healenium — a self-healing wrapper for Selenium WebDriver. It uses ML to detect renamed elements and auto-updates locators, eliminating the 30% breakage rate without rewriting any tests.</div>
      <div class="code-block"><code><span class="cm">// Step 1: Add Healenium to pom.xml</span>
&lt;dependency&gt;
  &lt;groupId&gt;com.epam.healenium&lt;/groupId&gt;
  &lt;artifactId&gt;healenium-web&lt;/artifactId&gt;
  &lt;version&gt;3.4.4&lt;/version&gt;
&lt;/dependency&gt;

<span class="cm">// Step 2: Wrap driver — zero changes to existing tests</span>
<span class="kw">WebDriver</span> chrome = <span class="kw">new</span> <span class="cl">ChromeDriver</span>();
<span class="cl">SelfHealingDriver</span> driver = <span class="cl">SelfHealingDriver</span>.<span class="fn">create</span>(chrome);

<span class="cm">// All existing tests work unchanged:</span>
driver.<span class="fn">findElement</span>(<span class="cl">By</span>.<span class="fn">id</span>(<span class="st">"loginBtn"</span>)).<span class="fn">click</span>();
<span class="cm">// ↑ If "loginBtn" renamed → Healenium auto-heals</span></code></div>
      <table class="comparison-table">
        <thead><tr><th>Metric</th><th>Before Healenium</th><th>After Healenium</th></tr></thead>
        <tbody>
          <tr><td>Tests broken per sprint</td><td>60 tests (30%)</td><td>0–2 (genuine failures only)</td></tr>
          <tr><td>Maintenance time</td><td>~4 hours per sprint</td><td>~15 min (review healing report)</td></tr>
          <tr><td>CI false failures</td><td>High — team ignores alerts</td><td>Near zero — every alert is real</td></tr>
        </tbody>
      </table>`
    },
    {
      difficulty: 'hard',
      q: "Your banking app deployed a release candidate. How do you use AI visual testing to validate the UI hasn't regressed across 150 screens?",
      a: `<div class="ans-hero">Integrate Applitools Eyes into the existing test suite. Capture baseline screenshots in UAT, then run visual AI comparison on every release candidate — all 150 screens compared in minutes with near-zero false positives.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Baseline run (once)</div><div class="step-desc">Run tests with Eyes.check() on each screen. Applitools marks all screenshots as the approved baseline. Takes 30 minutes for 150 screens.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Add to CI pipeline</div><div class="step-desc">Every release candidate build runs the same test suite with Applitools integration. GitHub Actions triggers automatically on PR to main.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">AI comparison runs</div><div class="step-desc">Applitools Visual AI compares all 150 screenshots to baseline. Ignores dynamic content (timestamps, user names, live balance data). Flags: "Account summary card — alignment shifted 15px" and "Transfer button color changed from blue to grey."</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Review dashboard</div><div class="step-desc">Applitools dashboard shows side-by-side comparison of only the flagged differences. QA reviews 3 real issues in 10 minutes. No false positives to wade through.</div></div></div>
      </div>
      <div class="info-panel tip"><div class="panel-title">Result</div><p>Manual UI verification of 150 screens: ~3 hours per release. AI visual testing: 10 minutes per release. No human would screenshot-compare 150 pages — so most visual regressions were shipping to production undetected. Now they are caught every release.</p></div>`
    },
    {
      difficulty: 'medium',
      q: "A production issue occurs in the banking payment service — thousands of transactions failing. Your job is to do root cause analysis. How do you use AI?",
      a: `<div class="ans-hero">Use AI log analysis (Datadog AI or paste logs into ChatGPT) to identify the error pattern, correlate with the last deployment, and generate a structured RCA report — turning hours of log archaeology into 5 minutes of AI-assisted analysis.</div>
      <div class="code-block"><code><span class="cm">// Prompt to give ChatGPT (paste error logs + deployment info):</span>

You are a senior QA engineer / SRE.

Analyze these production error logs from our banking payment service.
The issue started at 14:32 UTC. We deployed PaymentService v2.3.1 at 14:30 UTC.

[paste stack trace and error logs here]

Generate:
1. Root cause summary
2. Which deployment likely introduced it
3. Affected user flows
4. Immediate mitigation
5. Long-term fix recommendation
6. Test cases to prevent recurrence</code></div>
      <div class="info-panel tip"><div class="panel-title">AI output</div><p>AI identifies: "NullPointerException in validateOTP() — OTP session object is null when user's session nears expiry during transfer confirmation. Root cause: session TTL check missing in new v2.3.1 code. Affected flow: NEFT transfers within 30 seconds of session expiry. Fix: add null check before OTP validation."</p></div>`
    }
  ]

};
