// ================================================================
// INTERVIEW QUESTIONS DATA
// ================================================================
const INTERVIEW_QUESTIONS = {
  manual: [
    {
      q: "What are the 6 phases of the Software Testing Life Cycle (STLC)?",
      difficulty: "easy",
      a: `<div class="ans-hero">STLC is a sequence of specific activities conducted during the testing process to ensure software quality goals are met.</div>
<ul class="ans-list blue">
  <li><span class="icon">1️⃣</span><strong>Requirement Analysis</strong> — Testing team studies requirements (BRS/SRS), identifies testable requirements, clarifies ambiguities with BA/developers, and prepares the Requirement Traceability Matrix (RTM).</li>
  <li><span class="icon">2️⃣</span><strong>Test Planning</strong> — Test Manager/Lead prepares the Test Plan document covering scope, objectives, resources, schedule, entry/exit criteria, risk mitigation, and tools to be used.</li>
  <li><span class="icon">3️⃣</span><strong>Test Case Design &amp; Development</strong> — Testers write detailed test cases, test scripts, and test data using techniques like BVA and EP. Test cases are reviewed and baselined.</li>
  <li><span class="icon">4️⃣</span><strong>Test Environment Setup</strong> — QA team configures hardware, software, network, and test data. Smoke testing is done to verify the environment is stable before full testing begins.</li>
  <li><span class="icon">5️⃣</span><strong>Test Execution</strong> — Testers execute test cases, log results (Pass/Fail), raise defect reports for failures, retest fixed defects, and track progress against the test plan.</li>
  <li><span class="icon">6️⃣</span><strong>Test Cycle Closure</strong> — Team evaluates exit criteria, prepares Test Summary Report, calculates metrics (defect density, test coverage), documents lessons learned, and archives test artifacts.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Memory Tip</div><p>Remember the phases as <strong>RA → TP → TCD → TES → TE → TCC</strong> — "Really Talented Testers Tackle Every Challenge".</p></div>`
    },
    {
      q: "What is the difference between Severity and Priority in bug reporting? Give examples of all 4 combinations.",
      difficulty: "medium",
      a: `<div class="ans-hero">Severity measures the technical impact of a defect on the system; Priority measures how urgently the defect needs to be fixed from a business perspective.</div>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>Severity</h6>
    <p>Set by the <strong>QA/Tester</strong></p>
    <p>How badly the defect affects functionality</p>
    <p>Levels: Critical → Major → Minor → Trivial</p>
    <p>Technical measure</p>
  </div>
  <div class="compare-card green">
    <h6>Priority</h6>
    <p>Set by the <strong>Product Owner / Manager</strong></p>
    <p>How soon the defect must be fixed</p>
    <p>Levels: High → Medium → Low</p>
    <p>Business measure</p>
  </div>
</div>
<ul class="ans-list amber">
  <li><span class="icon">🔴</span><strong>High Severity + High Priority</strong> — Login button does not work on the production app. Users cannot log in at all. Must be fixed immediately.</li>
  <li><span class="icon">🟠</span><strong>High Severity + Low Priority</strong> — A rarely-used legacy report crashes the system. Severe crash but the feature is almost never used, so it can be scheduled for the next sprint.</li>
  <li><span class="icon">🟡</span><strong>Low Severity + High Priority</strong> — Company logo is misspelled or CEO's name is wrong on the homepage. Minor visual issue technically, but must be fixed ASAP due to business/brand impact.</li>
  <li><span class="icon">🟢</span><strong>Low Severity + Low Priority</strong> — A tooltip text has a minor grammatical error deep inside the settings page. No functional impact, fix in a future release.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Interview Tip</div><p>Interviewers love the <strong>logo/misspelling example</strong> for Low Severity + High Priority. It shows real-world business thinking beyond just technical severity.</p></div>`
    },
    {
      q: "What is the difference between a Bug, Defect, Error, and Failure?",
      difficulty: "medium",
      a: `<div class="ans-hero">These four terms describe the same problem at different stages of the SDLC — from a human mistake to a visible system breakdown.</div>
<ul class="ans-list purple">
  <li><span class="icon">✏️</span><strong>Error (Mistake)</strong> — A <em>human action</em> that produces an incorrect result. It occurs in the developer's or tester's mind. Example: A developer misunderstands a requirement and writes incorrect logic for a discount calculation.</li>
  <li><span class="icon">🐛</span><strong>Defect (Bug)</strong> — The <em>manifestation of an error in the code</em>. It is a flaw found in the software before it reaches the end user. Example: The incorrect discount calculation logic sitting inside the source code file.</li>
  <li><span class="icon">⚠️</span><strong>Bug</strong> — Informally synonymous with Defect. In strict IEEE terminology, a Bug is a defect found during testing by QA. Used interchangeably with Defect in most industry conversations.</li>
  <li><span class="icon">💥</span><strong>Failure</strong> — When the defect reaches production and the <em>end user experiences incorrect behavior</em>. The system fails to perform as expected. Example: A customer gets a wrong discount amount on their invoice — that visible incorrect behavior is a Failure.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Term</th><th>Who introduces it</th><th>When found</th><th>Stage</th></tr></thead>
  <tbody>
    <tr><td>Error</td><td>Developer / Analyst</td><td>During development/design</td><td>Cause</td></tr>
    <tr><td>Defect / Bug</td><td>Developer (via error)</td><td>During testing</td><td>Code artifact</td></tr>
    <tr><td>Failure</td><td>Defect in production</td><td>By end user</td><td>Observable symptom</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Flow</div><p><strong>Error → Defect → Failure</strong>. Not every error becomes a defect (some are caught in review), and not every defect causes a failure (some code paths are never triggered).</p></div>`
    },
    {
      q: "What is Boundary Value Analysis (BVA)? Explain with an example using age 18–60.",
      difficulty: "medium",
      a: `<div class="ans-hero">BVA is a black-box test design technique that focuses on testing the values at the exact boundaries of input ranges, where most defects tend to occur.</div>
<ul class="ans-list blue">
  <li><span class="icon">📐</span><strong>Why boundaries?</strong> — Developers often make off-by-one errors (using <code>&gt;</code> instead of <code>&gt;=</code>). BVA catches these by testing the exact edge values.</li>
  <li><span class="icon">🔢</span><strong>2-value BVA</strong> — Test the minimum and maximum boundary values: <code>min</code> and <code>max</code>.</li>
  <li><span class="icon">🔢</span><strong>3-value BVA</strong> — Test just below, at, and just above each boundary: <code>min-1</code>, <code>min</code>, <code>min+1</code> and <code>max-1</code>, <code>max</code>, <code>max+1</code>.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">Example — Age field: Valid range is 18 to 60</div><p>The system should accept ages from 18 to 60 inclusive.</p></div>
<table class="table-light-custom">
  <thead><tr><th>Test Value</th><th>Boundary Position</th><th>Expected Result</th></tr></thead>
  <tbody>
    <tr><td>17</td><td>Just below lower boundary</td><td>❌ Invalid / Rejected</td></tr>
    <tr><td>18</td><td>Lower boundary (min)</td><td>✅ Valid / Accepted</td></tr>
    <tr><td>19</td><td>Just above lower boundary</td><td>✅ Valid / Accepted</td></tr>
    <tr><td>59</td><td>Just below upper boundary</td><td>✅ Valid / Accepted</td></tr>
    <tr><td>60</td><td>Upper boundary (max)</td><td>✅ Valid / Accepted</td></tr>
    <tr><td>61</td><td>Just above upper boundary</td><td>❌ Invalid / Rejected</td></tr>
  </tbody>
</table>
<ul class="ans-list green">
  <li><span class="icon">✅</span><strong>Advantages</strong> — Reduces the number of test cases while maximizing defect detection at high-risk boundary points.</li>
  <li><span class="icon">🔗</span><strong>Often combined with EP</strong> — Use Equivalence Partitioning to define the ranges, then BVA to test the edges of those ranges.</li>
  <li><span class="icon">📦</span><strong>Works for</strong> — Numeric fields, dates, string lengths, array indices — any input with a defined range.</li>
</ul>`
    },
    {
      q: "What is Equivalence Partitioning (EP)? Explain with a valid example.",
      difficulty: "medium",
      a: `<div class="ans-hero">Equivalence Partitioning divides input data into groups (partitions) where all values in a group are expected to behave the same way — you only need to test one value per partition.</div>
<ul class="ans-list blue">
  <li><span class="icon">🎯</span><strong>Core idea</strong> — If one value in a partition passes, all others should pass too. If one fails, all should fail. This dramatically reduces the number of test cases needed.</li>
  <li><span class="icon">✅</span><strong>Valid Partitions</strong> — Input values the system should accept and process correctly.</li>
  <li><span class="icon">❌</span><strong>Invalid Partitions</strong> — Input values the system should reject with an appropriate error.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">Example — Age field: Valid range 18–60</div><p>Partition the inputs into logical groups that behave identically.</p></div>
<table class="table-light-custom">
  <thead><tr><th>Partition</th><th>Type</th><th>Sample Value</th><th>Expected Result</th></tr></thead>
  <tbody>
    <tr><td>Age &lt; 18</td><td>Invalid</td><td>10</td><td>❌ Error: Too young</td></tr>
    <tr><td>18 ≤ Age ≤ 60</td><td>Valid</td><td>35</td><td>✅ Accepted</td></tr>
    <tr><td>Age &gt; 60</td><td>Invalid</td><td>75</td><td>❌ Error: Too old</td></tr>
    <tr><td>Non-numeric (e.g. "abc")</td><td>Invalid</td><td>"abc"</td><td>❌ Error: Invalid format</td></tr>
    <tr><td>Negative number</td><td>Invalid</td><td>-5</td><td>❌ Error: Invalid input</td></tr>
  </tbody>
</table>
<ul class="ans-list green">
  <li><span class="icon">📉</span><strong>Efficiency</strong> — Instead of testing every possible age (0–120), only 5 representative values cover all scenarios.</li>
  <li><span class="icon">🔗</span><strong>Combined with BVA</strong> — EP identifies the partitions; BVA tests the boundary values of those partitions for maximum coverage.</li>
  <li><span class="icon">📋</span><strong>Applies to</strong> — Any input: numeric ranges, string lengths, dropdown selections, file sizes, date fields.</li>
</ul>`
    },
    {
      q: "What is a Requirements Traceability Matrix (RTM)? What are its columns and purpose?",
      difficulty: "hard",
      a: `<div class="ans-hero">An RTM is a document that maps and traces each requirement to its corresponding test cases, ensuring full test coverage and bi-directional traceability throughout the SDLC.</div>
<ul class="ans-list purple">
  <li><span class="icon">🗺️</span><strong>Forward Traceability</strong> — Maps requirements → test cases. Ensures every requirement has at least one test case (no requirement is untested).</li>
  <li><span class="icon">🔄</span><strong>Backward Traceability</strong> — Maps test cases → requirements. Ensures no test case exists without a corresponding requirement (no scope creep in testing).</li>
  <li><span class="icon">↔️</span><strong>Bi-directional RTM</strong> — Combines both. The gold standard used in most professional projects.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">Standard RTM Columns</div><p>A well-structured RTM typically contains the following columns:</p></div>
<table class="table-light-custom">
  <thead><tr><th>Column</th><th>Description</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Req ID</td><td>Unique requirement identifier</td><td>REQ-001</td></tr>
    <tr><td>Requirement Description</td><td>What the requirement says</td><td>User can log in with email &amp; password</td></tr>
    <tr><td>Test Case ID(s)</td><td>Test case(s) covering this requirement</td><td>TC-001, TC-002, TC-003</td></tr>
    <tr><td>Test Case Description</td><td>Brief description of each test case</td><td>Valid login, Invalid password, Empty fields</td></tr>
    <tr><td>Test Status</td><td>Pass / Fail / Blocked / Not Run</td><td>Pass</td></tr>
    <tr><td>Defect ID</td><td>Linked defect if test failed</td><td>DEF-045</td></tr>
    <tr><td>Priority</td><td>Requirement priority</td><td>High</td></tr>
  </tbody>
</table>
<ul class="ans-list amber">
  <li><span class="icon">🎯</span><strong>Purpose 1</strong> — Guarantees 100% requirement coverage — no requirement is left untested.</li>
  <li><span class="icon">🔍</span><strong>Purpose 2</strong> — Identifies gaps in test coverage early in the test planning phase.</li>
  <li><span class="icon">📊</span><strong>Purpose 3</strong> — Provides an audit trail for compliance-driven projects (banking, healthcare, aviation).</li>
  <li><span class="icon">🔔</span><strong>Purpose 4</strong> — When requirements change, RTM immediately shows which test cases need to be updated.</li>
  <li><span class="icon">📈</span><strong>Purpose 5</strong> — Helps measure test progress and communicate coverage status to stakeholders.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Pro Tip</div><p>In Agile, RTM is maintained as a <strong>living document</strong> updated each sprint. Tools like JIRA, Zephyr, TestRail, and ALM/Octane can auto-generate RTMs from linked stories and test cases.</p></div>`
    },
    {
      q: "What are the key sections/contents of a Test Plan document?",
      difficulty: "medium",
      a: `<div class="ans-hero">A Test Plan is a formal document describing the scope, approach, resources, and schedule of testing activities for a software project.</div>
<ul class="ans-list blue">
  <li><span class="icon">1️⃣</span><strong>Introduction / Purpose</strong> — Brief overview of the document, the project being tested, and the goals of the test plan.</li>
  <li><span class="icon">2️⃣</span><strong>Test Scope</strong> — <em>In-scope</em>: modules/features to be tested. <em>Out-of-scope</em>: what will NOT be tested and why.</li>
  <li><span class="icon">3️⃣</span><strong>Test Objectives</strong> — What testing aims to achieve: validate functionality, performance, security, compliance, etc.</li>
  <li><span class="icon">4️⃣</span><strong>Test Approach / Strategy</strong> — Types of testing (functional, regression, UAT), techniques (BVA, EP), and levels (unit, integration, system).</li>
  <li><span class="icon">5️⃣</span><strong>Entry and Exit Criteria</strong> — Conditions that must be met before testing begins and before testing can be declared complete.</li>
  <li><span class="icon">6️⃣</span><strong>Resource Planning</strong> — Team members, roles (Lead, Senior QA, Junior QA), skill requirements, and responsibilities.</li>
  <li><span class="icon">7️⃣</span><strong>Test Schedule / Timeline</strong> — Milestones, sprint dates, testing phases, and deadlines.</li>
  <li><span class="icon">8️⃣</span><strong>Test Deliverables</strong> — Artifacts to be produced: test cases, test scripts, test data, defect reports, test summary report.</li>
  <li><span class="icon">9️⃣</span><strong>Test Environment</strong> — Hardware, software, OS, browser versions, network configuration, and test data requirements.</li>
  <li><span class="icon">🔟</span><strong>Tools</strong> — Test management (JIRA, TestRail), automation (Selenium), defect tracking, CI/CD tools.</li>
  <li><span class="icon">⚠️</span><strong>Risks and Mitigation</strong> — Identified risks (resource unavailability, unstable build) and contingency plans.</li>
  <li><span class="icon">✅</span><strong>Approvals</strong> — Sign-off section for QA Lead, Project Manager, and stakeholders.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 IEEE 829 Standard</div><p>The Test Plan structure is defined in <strong>IEEE 829</strong> (now superseded by ISO/IEC/IEEE 29119). Most companies use a simplified version. The key is demonstrating knowledge of all major sections in an interview.</p></div>`
    },
    {
      q: "What are Entry Criteria and Exit Criteria in software testing?",
      difficulty: "easy",
      a: `<div class="ans-hero">Entry Criteria are the preconditions that must be satisfied before a testing phase begins; Exit Criteria are the conditions that must be met before a testing phase can be declared complete.</div>
<div class="compare-grid">
  <div class="compare-card green">
    <h6>Entry Criteria</h6>
    <p>"What must be true BEFORE we start testing?"</p>
    <ul>
      <li>✅ Build is deployed to test environment</li>
      <li>✅ Smoke test passed (environment is stable)</li>
      <li>✅ Test cases reviewed and approved</li>
      <li>✅ Test data prepared and available</li>
      <li>✅ Requirements are baselined (no pending changes)</li>
      <li>✅ Test environment matches production config</li>
    </ul>
  </div>
  <div class="compare-card red">
    <h6>Exit Criteria</h6>
    <p>"What must be true BEFORE we stop testing?"</p>
    <ul>
      <li>✅ All planned test cases executed</li>
      <li>✅ Test coverage ≥ 95% (or defined threshold)</li>
      <li>✅ No open Critical or High severity bugs</li>
      <li>✅ All Medium bugs have an accepted workaround or fix date</li>
      <li>✅ Test Summary Report reviewed and signed off</li>
      <li>✅ RTM shows 100% requirement coverage</li>
    </ul>
  </div>
</div>
<ul class="ans-list amber">
  <li><span class="icon">🚦</span><strong>Why they matter</strong> — Without entry criteria, testing starts on an unstable build, wasting time. Without exit criteria, teams don't know when to stop, causing scope creep.</li>
  <li><span class="icon">📋</span><strong>Defined in</strong> — The Test Plan document. Both entry and exit criteria should be agreed upon by all stakeholders before testing begins.</li>
  <li><span class="icon">🔄</span><strong>Each phase has its own</strong> — Unit testing, integration testing, system testing, and UAT each have their own entry and exit criteria.</li>
</ul>`
    },
    {
      q: "What is Exploratory Testing? When should you use it, and what are its pros and cons?",
      difficulty: "medium",
      a: `<div class="ans-hero">Exploratory Testing is a simultaneous learning, test design, and test execution approach where the tester actively controls the design of tests as they are performed, using knowledge gained during testing to guide further testing.</div>
<ul class="ans-list blue">
  <li><span class="icon">🔬</span><strong>Cem Kaner's definition</strong> — "Exploratory testing is a style of software testing that emphasizes the personal freedom and responsibility of the individual tester to continually optimize the quality of their work." It is not unstructured — it uses <strong>charters</strong> to guide sessions.</li>
  <li><span class="icon">⏱️</span><strong>Time-boxed sessions</strong> — Typically done in 60–90 minute sessions with a defined charter (e.g., "Explore the checkout flow focusing on edge cases for coupon codes").</li>
</ul>
<div class="info-panel tip"><div class="panel-title">When to use Exploratory Testing</div><p>Use when formal test cases don't yet exist, time is short, or you want to find bugs that scripted tests miss.</p></div>
<ul class="ans-list green">
  <li><span class="icon">✅</span>New features where requirements are unclear or evolving (Agile sprints)</li>
  <li><span class="icon">✅</span>After formal scripted testing to catch what structured tests missed</li>
  <li><span class="icon">✅</span>When the application is in a new or unfamiliar domain</li>
  <li><span class="icon">✅</span>Tight deadlines where writing full test cases is not feasible</li>
  <li><span class="icon">✅</span>Usability and UX investigation</li>
</ul>
<div class="compare-grid">
  <div class="compare-card green">
    <h6>Pros</h6>
    <ul>
      <li>✅ Finds bugs that scripted tests miss</li>
      <li>✅ Highly adaptable and flexible</li>
      <li>✅ Efficient when requirements are incomplete</li>
      <li>✅ Taps into tester's creativity and intuition</li>
      <li>✅ Immediate feedback — no upfront design time</li>
    </ul>
  </div>
  <div class="compare-card red">
    <h6>Cons</h6>
    <ul>
      <li>❌ Hard to reproduce or review (less documentation)</li>
      <li>❌ Coverage is difficult to measure</li>
      <li>❌ Depends heavily on tester skill and experience</li>
      <li>❌ Not suitable for compliance/regulated testing</li>
      <li>❌ Results vary between testers</li>
    </ul>
  </div>
</div>`
    },
    {
      q: "What is the difference between Smoke Testing and Sanity Testing?",
      difficulty: "easy",
      a: `<div class="ans-hero">Smoke Testing checks if the build is stable enough to proceed with further testing; Sanity Testing checks if specific functionality works correctly after a bug fix or minor change.</div>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>Smoke Testing</h6>
    <p>Also called <strong>Build Verification Testing (BVT)</strong></p>
    <ul>
      <li>🎯 Covers critical, end-to-end flows</li>
      <li>⏰ Done first on EVERY new build</li>
      <li>📋 Scripted, documented test cases</li>
      <li>👥 Done by QA team</li>
      <li>🔎 Wide but shallow coverage</li>
      <li>❓ "Is the build stable enough to test?"</li>
      <li>📌 Example: Can users log in? Can they add to cart? Does checkout load?</li>
    </ul>
  </div>
  <div class="compare-card amber">
    <h6>Sanity Testing</h6>
    <p>Also called <strong>Narrow Regression</strong></p>
    <ul>
      <li>🎯 Covers the specific bug fix or new feature only</li>
      <li>⏰ Done after a bug fix or minor change</li>
      <li>📋 Usually unscripted / exploratory</li>
      <li>👥 Done by QA team (sometimes dev)</li>
      <li>🔎 Narrow and deep coverage</li>
      <li>❓ "Does this specific fix actually work?"</li>
      <li>📌 Example: After fixing a discount calculation bug, verify only discount-related flows.</li>
    </ul>
  </div>
</div>
<table class="table-light-custom">
  <thead><tr><th>Aspect</th><th>Smoke Testing</th><th>Sanity Testing</th></tr></thead>
  <tbody>
    <tr><td>Trigger</td><td>New build received</td><td>After bug fix / minor change</td></tr>
    <tr><td>Coverage</td><td>Broad (all major features)</td><td>Narrow (affected area only)</td></tr>
    <tr><td>Documentation</td><td>Scripted test cases</td><td>Often exploratory / informal</td></tr>
    <tr><td>Subset of</td><td>System Testing</td><td>Regression Testing</td></tr>
  </tbody>
</table>`
    },
    {
      q: "What is Regression Testing? When is it triggered, and what are the different types?",
      difficulty: "medium",
      a: `<div class="ans-hero">Regression Testing verifies that previously working functionality has not been broken by new code changes, bug fixes, or configuration changes.</div>
<ul class="ans-list blue">
  <li><span class="icon">🔁</span><strong>Core idea</strong> — "Did we break anything that used to work?" Every change to code carries the risk of unintended side effects on existing functionality.</li>
  <li><span class="icon">⚡</span><strong>Why it matters</strong> — Studies show that 80% of defects are regression defects — things that worked before but broke due to a seemingly unrelated change.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">When is Regression Testing triggered?</div><p>Regression should be run whenever any of the following occurs:</p></div>
<ul class="ans-list amber">
  <li><span class="icon">🐛</span>A bug is fixed (verify the fix didn't break something else)</li>
  <li><span class="icon">✨</span>A new feature is added to an existing module</li>
  <li><span class="icon">🔧</span>Code refactoring or performance optimization</li>
  <li><span class="icon">🌐</span>Third-party library or dependency upgrade</li>
  <li><span class="icon">⚙️</span>Configuration or environment changes</li>
  <li><span class="icon">📅</span>End of each sprint in Agile development</li>
</ul>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>Full Regression</h6>
    <p>Re-execute ALL test cases in the entire test suite</p>
    <p>✅ Maximum coverage</p>
    <p>❌ Time and resource intensive</p>
    <p>Used for: Major releases, go-live</p>
  </div>
  <div class="compare-card green">
    <h6>Partial / Selective Regression</h6>
    <p>Re-execute only test cases related to the changed areas + integration points</p>
    <p>✅ Faster, resource-efficient</p>
    <p>❌ Risk of missing indirect impacts</p>
    <p>Used for: Minor fixes, mid-sprint</p>
  </div>
  <div class="compare-card purple">
    <h6>Unit Regression</h6>
    <p>Re-test only the specific unit/module that was changed</p>
    <p>✅ Fastest, done by developers</p>
    <p>❌ Narrowest coverage</p>
    <p>Used for: Small bug fixes, refactoring</p>
  </div>
</div>
<div class="info-panel tip"><div class="panel-title">💡 Automation is key</div><p>Regression testing is the #1 candidate for test automation. Automated regression suites in CI/CD pipelines (Jenkins, GitHub Actions) run on every code push, catching regressions instantly.</p></div>`
    },
    {
      q: "What is the difference between Alpha Testing and Beta Testing?",
      difficulty: "medium",
      a: `<div class="ans-hero">Alpha and Beta testing are two phases of User Acceptance Testing (UAT) performed before the product is released to the general public.</div>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>Alpha Testing</h6>
    <ul>
      <li>👥 Done by <strong>internal employees</strong> (QA, developers, product team)</li>
      <li>🏢 Performed at the <strong>developer's site</strong></li>
      <li>⏰ Comes <strong>before Beta</strong> testing</li>
      <li>🔧 Environment is <strong>controlled</strong>, debugger tools may be used</li>
      <li>🐛 Both white-box and black-box techniques used</li>
      <li>📋 Formal test cases and logging</li>
      <li>🎯 Goal: Find bugs before real users see them</li>
      <li>📌 Example: Google employees testing a new Gmail feature internally</li>
    </ul>
  </div>
  <div class="compare-card green">
    <h6>Beta Testing</h6>
    <ul>
      <li>👥 Done by <strong>real external users</strong> (selected customers)</li>
      <li>🌍 Performed at the <strong>customer's site / real environment</strong></li>
      <li>⏰ Comes <strong>after Alpha</strong> testing</li>
      <li>🌐 Environment is <strong>uncontrolled</strong>, real-world conditions</li>
      <li>⬛ Black-box testing only (end-user perspective)</li>
      <li>💬 Feedback-driven, less formal</li>
      <li>🎯 Goal: Validate product in real-world use before full launch</li>
      <li>📌 Example: Google releasing Gmail to 1,000 external "beta" users for feedback</li>
    </ul>
  </div>
</div>
<table class="table-light-custom">
  <thead><tr><th>Aspect</th><th>Alpha</th><th>Beta</th></tr></thead>
  <tbody>
    <tr><td>Testers</td><td>Internal staff</td><td>Real external users</td></tr>
    <tr><td>Location</td><td>Developer's site</td><td>Customer's environment</td></tr>
    <tr><td>Formality</td><td>Structured &amp; formal</td><td>Informal, feedback-based</td></tr>
    <tr><td>Technique</td><td>White-box + Black-box</td><td>Black-box only</td></tr>
    <tr><td>Bug fixing</td><td>Immediate</td><td>Collected and fixed post-beta</td></tr>
  </tbody>
</table>`
    },
    {
      q: "What is UAT (User Acceptance Testing)? Who performs it, and what are its types?",
      difficulty: "easy",
      a: `<div class="ans-hero">UAT is the final phase of testing where real end-users or clients verify that the software meets their business requirements and is ready for production deployment.</div>
<ul class="ans-list blue">
  <li><span class="icon">🎯</span><strong>Purpose</strong> — Validate that the system does what the business needs it to do — not just what the technical spec says. It answers: "Is this software fit for purpose?"</li>
  <li><span class="icon">👥</span><strong>Who performs it</strong> — Business users, clients, product owners, subject matter experts (SMEs), and sometimes end customers. NOT the QA team (who perform system testing).</li>
  <li><span class="icon">⏰</span><strong>When</strong> — After System Testing is complete and all critical/high defects are resolved. Just before production release.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">Types of UAT</div><p>UAT is not a single testing type — it encompasses several specialized forms:</p></div>
<ul class="ans-list green">
  <li><span class="icon">🔬</span><strong>Alpha Testing</strong> — Internal users test the application at the development site before releasing to external users.</li>
  <li><span class="icon">🌍</span><strong>Beta Testing</strong> — External real users test the application in their own environment before the full public release.</li>
  <li><span class="icon">📜</span><strong>Contract Acceptance Testing</strong> — Verifies the system meets all criteria defined in a signed contract or Service Level Agreement (SLA).</li>
  <li><span class="icon">⚖️</span><strong>Regulation Acceptance Testing</strong> — Verifies compliance with government, legal, or industry regulations (GDPR, HIPAA, SOX, FDA 21 CFR Part 11).</li>
  <li><span class="icon">🔧</span><strong>Operational Acceptance Testing (OAT)</strong> — Verifies operational readiness: backup/restore, failover, disaster recovery, security, and performance under realistic load.</li>
  <li><span class="icon">🏭</span><strong>Factory Acceptance Testing (FAT)</strong> — Performed at the vendor/factory site before delivery (common in hardware/embedded systems).</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Key point</div><p>UAT failures don't necessarily mean bugs — they may reveal that the system was <strong>built correctly but solves the wrong problem</strong>. This is why user involvement throughout SDLC (not just at the end) is critical.</p></div>`
    },
    {
      q: "What are all the components/fields of a well-written Test Case?",
      difficulty: "easy",
      a: `<div class="ans-hero">A well-written test case is a documented set of inputs, execution conditions, and expected results that allows any tester to execute the test consistently and reliably.</div>
<table class="table-light-custom">
  <thead><tr><th>Field</th><th>Description</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Test Case ID</strong></td><td>Unique identifier</td><td>TC_LOGIN_001</td></tr>
    <tr><td><strong>Test Case Title</strong></td><td>Short descriptive name</td><td>Verify login with valid credentials</td></tr>
    <tr><td><strong>Module / Feature</strong></td><td>Which part of the app it tests</td><td>Authentication Module</td></tr>
    <tr><td><strong>Requirement ID</strong></td><td>Linked requirement (for RTM)</td><td>REQ-AUTH-01</td></tr>
    <tr><td><strong>Pre-conditions</strong></td><td>What must be true before executing</td><td>User is registered; app is loaded on login page</td></tr>
    <tr><td><strong>Test Steps</strong></td><td>Numbered, step-by-step actions</td><td>1. Enter email 2. Enter password 3. Click Login</td></tr>
    <tr><td><strong>Test Data</strong></td><td>Specific input values to use</td><td>Email: user@test.com, Password: Pass@123</td></tr>
    <tr><td><strong>Expected Result</strong></td><td>What should happen after steps</td><td>User is redirected to dashboard; welcome message shown</td></tr>
    <tr><td><strong>Actual Result</strong></td><td>What actually happened (filled during execution)</td><td>Filled at runtime</td></tr>
    <tr><td><strong>Status</strong></td><td>Pass / Fail / Blocked / Not Run / Skip</td><td>Pass</td></tr>
    <tr><td><strong>Priority</strong></td><td>High / Medium / Low</td><td>High</td></tr>
    <tr><td><strong>Severity</strong></td><td>Critical / Major / Minor</td><td>Critical</td></tr>
    <tr><td><strong>Test Type</strong></td><td>Functional / Regression / Smoke / etc.</td><td>Functional</td></tr>
    <tr><td><strong>Defect ID</strong></td><td>Linked bug if status is Fail</td><td>DEF-234</td></tr>
    <tr><td><strong>Tested By</strong></td><td>Name of tester</td><td>Karan S.</td></tr>
    <tr><td><strong>Tested On</strong></td><td>Date of execution</td><td>2024-07-15</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Atomic Rule</div><p>A good test case tests <strong>ONE thing only</strong>. It should have a single, unambiguous expected result so that Pass/Fail is never in doubt. If a test case tests multiple behaviors, split it.</p></div>`
    },
    {
      q: "What are all the fields in a Defect (Bug) Report?",
      difficulty: "easy",
      a: `<div class="ans-hero">A defect report (bug report) is a document that describes a software defect in enough detail for a developer to understand, reproduce, and fix it without needing to contact the tester.</div>
<table class="table-light-custom">
  <thead><tr><th>Field</th><th>Description</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Defect ID</strong></td><td>Unique identifier (auto-generated by JIRA/Bugzilla)</td><td>BUG-1042</td></tr>
    <tr><td><strong>Defect Title / Summary</strong></td><td>Short, descriptive title (Action + Object + Symptom)</td><td>"Login button does not redirect to dashboard on valid credentials"</td></tr>
    <tr><td><strong>Project / Module</strong></td><td>Which project and module the bug belongs to</td><td>E-Commerce App / Authentication</td></tr>
    <tr><td><strong>Severity</strong></td><td>Technical impact: Critical / Major / Minor / Trivial</td><td>Critical</td></tr>
    <tr><td><strong>Priority</strong></td><td>Business urgency: High / Medium / Low</td><td>High</td></tr>
    <tr><td><strong>Status</strong></td><td>New → Assigned → In Progress → Fixed → Retest → Closed</td><td>New</td></tr>
    <tr><td><strong>Environment</strong></td><td>OS, browser, device, app version, build number</td><td>Windows 11, Chrome 124, Build 3.2.1</td></tr>
    <tr><td><strong>Steps to Reproduce</strong></td><td>Numbered, exact steps to reproduce the bug</td><td>1. Go to /login 2. Enter valid creds 3. Click Login 4. Observe</td></tr>
    <tr><td><strong>Expected Result</strong></td><td>What should happen</td><td>User redirected to /dashboard</td></tr>
    <tr><td><strong>Actual Result</strong></td><td>What actually happens</td><td>Page stays on /login, no error message shown</td></tr>
    <tr><td><strong>Attachments</strong></td><td>Screenshots, screen recordings, logs, HAR files</td><td>screenshot.png, console_log.txt</td></tr>
    <tr><td><strong>Reported By</strong></td><td>Tester's name</td><td>Karan S.</td></tr>
    <tr><td><strong>Reported Date</strong></td><td>Date the bug was found</td><td>2024-07-15</td></tr>
    <tr><td><strong>Assigned To</strong></td><td>Developer responsible for fixing</td><td>Dev Team Lead</td></tr>
    <tr><td><strong>Fix Version</strong></td><td>Which build/sprint the fix is targeted for</td><td>Sprint 12 / v3.2.2</td></tr>
    <tr><td><strong>Test Case ID</strong></td><td>Linked test case that found this bug</td><td>TC_LOGIN_001</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Golden Rule of Bug Reports</div><p>A great bug report is one a developer can <strong>reproduce in under 2 minutes</strong> without asking any questions. Include screenshots, precise steps, and the exact environment. "It doesn't work" is not a bug report.</p></div>`
    },
    {
      q: "What is Test Coverage? What are the different types and how is it measured?",
      difficulty: "medium",
      a: `<div class="ans-hero">Test Coverage measures the extent to which the source code or requirements are exercised by a test suite, expressed as a percentage.</div>
<ul class="ans-list blue">
  <li><span class="icon">📊</span><strong>Formula</strong> — <code>Coverage % = (Items Tested / Total Items) × 100</code></li>
  <li><span class="icon">🎯</span><strong>Purpose</strong> — Identify untested areas, measure testing thoroughness, reduce risk of unknown defects.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">Types of Code Coverage (White-Box)</div><p>These are measured by code coverage tools like JaCoCo, Istanbul, Coverage.py:</p></div>
<ul class="ans-list purple">
  <li><span class="icon">📝</span><strong>Statement Coverage</strong> — Every line/statement in the code is executed at least once. Simplest form. Formula: <code>(Executed Statements / Total Statements) × 100</code></li>
  <li><span class="icon">🌿</span><strong>Branch Coverage</strong> — Every branch of every decision (if/else, switch) is executed. More thorough than statement coverage. Catches bugs in untaken branches.</li>
  <li><span class="icon">⚙️</span><strong>Condition Coverage</strong> — Every boolean sub-expression in a condition evaluates to both true and false. Example: In <code>if (A &amp;&amp; B)</code>, both A and B are tested independently.</li>
  <li><span class="icon">🗺️</span><strong>Path Coverage</strong> — Every possible execution path through the code is tested. Most exhaustive but combinatorially explosive for complex code.</li>
  <li><span class="icon">🔧</span><strong>Function Coverage</strong> — Every function/method in the code is called at least once. Useful for identifying dead code.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">Types of Requirements Coverage (Black-Box)</div><p>These are measured against test cases and requirements:</p></div>
<ul class="ans-list green">
  <li><span class="icon">📋</span><strong>Requirements Coverage</strong> — % of requirements covered by at least one test case (tracked in RTM).</li>
  <li><span class="icon">🧪</span><strong>Test Case Coverage</strong> — % of test cases executed vs total planned.</li>
  <li><span class="icon">🐛</span><strong>Defect Coverage</strong> — % of known defect areas covered by test cases.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Coverage Type</th><th>Target %</th><th>Tool Examples</th></tr></thead>
  <tbody>
    <tr><td>Statement</td><td>80–90%</td><td>JaCoCo, Istanbul</td></tr>
    <tr><td>Branch</td><td>70–80%</td><td>JaCoCo, NYC</td></tr>
    <tr><td>Function</td><td>90%+</td><td>Istanbul, Coverage.py</td></tr>
    <tr><td>Requirements</td><td>100%</td><td>TestRail, JIRA, RTM</td></tr>
  </tbody>
</table>`
    },
    {
      q: "What is the difference between QA (Quality Assurance) and QC (Quality Control)?",
      difficulty: "easy",
      a: `<div class="ans-hero">QA is process-oriented and proactive — it prevents defects; QC is product-oriented and reactive — it identifies defects in the finished product.</div>
<div class="compare-grid">
  <div class="compare-card blue">
    <h6>QA — Quality Assurance</h6>
    <ul>
      <li>🔄 <strong>Process-oriented</strong></li>
      <li>🛡️ <strong>Preventive</strong> — prevents defects from being introduced</li>
      <li>📋 Defines standards, processes, and guidelines</li>
      <li>👥 Involves the entire team (Dev, BA, QA)</li>
      <li>⏰ Applied throughout the <strong>entire SDLC</strong></li>
      <li>📌 Examples: Code reviews, process audits, defining coding standards, CMMI/ISO compliance</li>
      <li>🎯 Goal: Improve the process so defects don't occur</li>
    </ul>
  </div>
  <div class="compare-card green">
    <h6>QC — Quality Control</h6>
    <ul>
      <li>📦 <strong>Product-oriented</strong></li>
      <li>🔍 <strong>Corrective</strong> — detects defects in the product</li>
      <li>🧪 Executes tests and inspects the deliverable</li>
      <li>👤 Done by the QA/Testing team</li>
      <li>⏰ Applied during <strong>testing phases</strong></li>
      <li>📌 Examples: Test case execution, bug reports, test summary reports</li>
      <li>🎯 Goal: Identify defects in the product before delivery</li>
    </ul>
  </div>
</div>
<table class="table-light-custom">
  <thead><tr><th>Aspect</th><th>QA</th><th>QC</th></tr></thead>
  <tbody>
    <tr><td>Orientation</td><td>Process</td><td>Product</td></tr>
    <tr><td>Type</td><td>Proactive / Preventive</td><td>Reactive / Detective</td></tr>
    <tr><td>Responsibility</td><td>Entire team</td><td>Testing team</td></tr>
    <tr><td>Scope</td><td>Full SDLC</td><td>Testing phase</td></tr>
    <tr><td>Output</td><td>Better processes, standards</td><td>Bug reports, test results</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Analogy</div><p><strong>QA</strong> is like a chef designing a recipe and cooking process to ensure every dish is consistently good. <strong>QC</strong> is like a food taster checking each dish before it leaves the kitchen.</p></div>`
    },
    {
      q: "What is Risk-Based Testing? Explain risk assessment and how to prioritize tests.",
      difficulty: "hard",
      a: `<div class="ans-hero">Risk-Based Testing (RBT) is a testing strategy where tests are prioritized based on the probability and impact of potential failures, ensuring the highest-risk areas receive the most thorough testing when time is limited.</div>
<ul class="ans-list blue">
  <li><span class="icon">⚠️</span><strong>Why RBT?</strong> — It is impossible to test everything exhaustively. RBT ensures that if time runs out, the most critical and risky areas have already been tested.</li>
  <li><span class="icon">📐</span><strong>Risk Score Formula</strong> — <code>Risk = Probability of Failure × Impact of Failure</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">Risk Assessment Matrix</div><p>Each feature is rated on Likelihood (1–5) and Impact (1–5). Risk = Likelihood × Impact.</p></div>
<table class="table-light-custom">
  <thead><tr><th>Feature / Area</th><th>Likelihood (1–5)</th><th>Impact (1–5)</th><th>Risk Score</th><th>Priority</th></tr></thead>
  <tbody>
    <tr><td>Payment processing</td><td>3</td><td>5</td><td>15</td><td>🔴 High</td></tr>
    <tr><td>User login / auth</td><td>2</td><td>5</td><td>10</td><td>🔴 High</td></tr>
    <tr><td>Order history page</td><td>2</td><td>3</td><td>6</td><td>🟡 Medium</td></tr>
    <tr><td>Profile picture upload</td><td>3</td><td>2</td><td>6</td><td>🟡 Medium</td></tr>
    <tr><td>Dark mode toggle</td><td>1</td><td>1</td><td>1</td><td>🟢 Low</td></tr>
  </tbody>
</table>
<ul class="ans-list purple">
  <li><span class="icon">1️⃣</span><strong>Step 1 — Identify risks</strong> — Brainstorm with BA, Dev, PO. Review change logs (recently modified code has higher risk). Analyze past defect data.</li>
  <li><span class="icon">2️⃣</span><strong>Step 2 — Analyze risks</strong> — Score each risk area for Likelihood and Impact (1–5 scale).</li>
  <li><span class="icon">3️⃣</span><strong>Step 3 — Prioritize tests</strong> — High-risk areas get: more test cases, executed first, more rigorous techniques (BVA, EP, exploratory).</li>
  <li><span class="icon">4️⃣</span><strong>Step 4 — Mitigate risks</strong> — Allocate best testers to high-risk areas. Automate regression for high-risk modules.</li>
  <li><span class="icon">5️⃣</span><strong>Step 5 — Monitor and re-assess</strong> — As development progresses, re-evaluate risks. New code changes may introduce new high-risk areas.</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">✅</span><strong>Business risk factors</strong> — Revenue impact, legal liability, brand reputation, customer data exposure.</li>
  <li><span class="icon">✅</span><strong>Technical risk factors</strong> — Code complexity, recently changed code, third-party integrations, new technologies, low code coverage.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 IEEE 829 / ISO 29119</div><p>RBT is recommended by ISO/IEC/IEEE 29119-4 (Test Techniques standard). In Agile, risk is assessed at the start of each sprint during sprint planning. Tools like JIRA allow risk labels on user stories.</p></div>`
    },
    {
      q: "How do you test when there are no requirements available? What strategies do you use?",
      difficulty: "medium",
      a: `<div class="ans-hero">Testing without requirements is a real-world challenge. Experienced testers use multiple strategies to derive test ideas from available information and their domain knowledge.</div>
<ul class="ans-list amber">
  <li><span class="icon">🔬</span><strong>1. Exploratory Testing</strong> — Use time-boxed sessions with charters to systematically explore the application. Rely on domain knowledge, heuristics, and intuition. Document findings as you go. This is the most direct response to missing requirements.</li>
  <li><span class="icon">📱</span><strong>2. Test against the previous version</strong> — If an older version of the software exists, compare the new version's behavior against it. Any behavioral difference is a potential defect or intentional change (ask the team).</li>
  <li><span class="icon">🌐</span><strong>3. Test against similar applications</strong> — Use competitor products or industry-standard applications as a reference. Example: Testing a new e-commerce cart? Compare behavior with Amazon or Shopify. Industry norms serve as implicit requirements.</li>
  <li><span class="icon">👤</span><strong>4. End-user perspective testing</strong> — Put yourself in the shoes of the end user. Create user personas and test the most common user journeys. Ask: "What would a real user try to do?"</li>
  <li><span class="icon">💬</span><strong>5. Interview stakeholders</strong> — Talk to developers, business analysts, product owners, and support teams. Support teams especially know common pain points from past user feedback.</li>
  <li><span class="icon">📄</span><strong>6. Review available artifacts</strong> — Use wireframes, mockups, UI designs (Figma), email chains, meeting notes, or any informal documentation as surrogate requirements.</li>
  <li><span class="icon">🧠</span><strong>7. Apply testing heuristics</strong> — Use frameworks like <strong>SFDIPOT</strong> (Structure, Function, Data, Interfaces, Platform, Operations, Time) or <strong>FEW HICCUPPS</strong> to guide what to test.</li>
  <li><span class="icon">🚨</span><strong>8. Risk-based prioritization</strong> — Without requirements, focus on the riskiest areas first: payment flows, authentication, data persistence, and any customer-facing features.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Also communicate the risk</div><p>Always <strong>escalate and document</strong> that requirements are missing. Testing without requirements means unknown coverage and unknown risk. Create a risk memo and get sign-off from the project manager — this protects you and the team.</p></div>`
    },
    {
      q: "What is Shift-Left Testing? What are its benefits and how does it compare to traditional testing?",
      difficulty: "hard",
      a: `<div class="ans-hero">Shift-Left Testing is the practice of moving testing activities earlier in the Software Development Life Cycle — "shifting left" on the timeline — so defects are found and fixed at the cheapest possible stage.</div>
<ul class="ans-list blue">
  <li><span class="icon">📅</span><strong>The "Left" metaphor</strong> — On a traditional SDLC timeline (Requirements → Design → Development → Testing → Deployment), Testing was always on the right side. Shift-Left moves it to the left — beginning at requirements and design.</li>
  <li><span class="icon">💰</span><strong>The cost of late defects</strong> — IBM studies show defects cost <strong>10–100x more</strong> to fix in production than in requirements. Finding a bug in requirements takes 1 hour; fixing it post-deployment can take 1 week + hotfix + rollback + customer impact.</li>
</ul>
<div class="compare-grid">
  <div class="compare-card red">
    <h6>Traditional (Shift-Right) Testing</h6>
    <ul>
      <li>Testing begins only after development is complete</li>
      <li>QA team is a gatekeeper at the end</li>
      <li>Defects found late = expensive to fix</li>
      <li>QA not involved in requirements review</li>
      <li>Long feedback cycles (weeks/months)</li>
      <li>Waterfall-friendly, not Agile-friendly</li>
    </ul>
  </div>
  <div class="compare-card green">
    <h6>Shift-Left Testing</h6>
    <ul>
      <li>Testing activities start at requirements phase</li>
      <li>QA is a collaborative partner throughout</li>
      <li>Defects found early = cheap to fix</li>
      <li>QA reviews requirements &amp; design docs</li>
      <li>Short feedback cycles (hours/days)</li>
      <li>Essential for Agile &amp; DevOps</li>
    </ul>
  </div>
</div>
<div class="info-panel tip"><div class="panel-title">How to implement Shift-Left Testing</div><p>Shift-Left is implemented through a combination of practices at each stage:</p></div>
<ul class="ans-list purple">
  <li><span class="icon">📋</span><strong>Requirements stage</strong> — QA reviews requirements for ambiguity, testability, and completeness. Write acceptance criteria (Gherkin/BDD) before development begins.</li>
  <li><span class="icon">🏗️</span><strong>Design stage</strong> — QA participates in design reviews. Identify testability issues in the architecture early.</li>
  <li><span class="icon">💻</span><strong>Development stage</strong> — Developers write unit tests (TDD/BDD). Static code analysis tools (SonarQube) run on every commit. Pair programming catches defects in real time.</li>
  <li><span class="icon">🔄</span><strong>CI/CD Pipeline</strong> — Automated tests (unit, integration, API) run on every code push. Fast feedback within minutes, not days.</li>
  <li><span class="icon">🤝</span><strong>3 Amigos meetings</strong> — BA + Developer + Tester review each user story together before sprint work begins. Misunderstandings are caught in a 30-minute meeting instead of a 3-week rework.</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">✅</span><strong>Benefit 1</strong> — Dramatically reduced cost of defect fixing</li>
  <li><span class="icon">✅</span><strong>Benefit 2</strong> — Faster time-to-market (fewer late-stage delays)</li>
  <li><span class="icon">✅</span><strong>Benefit 3</strong> — Higher software quality at release</li>
  <li><span class="icon">✅</span><strong>Benefit 4</strong> — Improved collaboration between Dev, QA, and BA</li>
  <li><span class="icon">✅</span><strong>Benefit 5</strong> — Enables true Agile and DevOps culture</li>
</ul>`
    }
  ],
  selenium: [
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
    <br><code>String script = "var src=arguments[0], tgt=arguments[1];" +</code>
    <br><code>"var e=document.createEvent('DragEvent');" +</code>
    <br><code>"e.initMouseEvent('dragstart',true,true,window,0,0,0,0,0,false,false,false,false,0,null);" +</code>
    <br><code>"src.dispatchEvent(e);" +</code>
    <br><code>"e.initMouseEvent('drop',true,true,window,0,0,0,0,0,false,false,false,false,0,null);" +</code>
    <br><code>"tgt.dispatchEvent(e);";</code>
    <br><code>js.executeScript(script, source, target);</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 When to Use Which</div><p>Try the <strong>Actions class first</strong> — it works for most standard HTML drag-and-drop scenarios. If it silently does nothing (common with React/Angular drag-and-drop libraries), switch to the <strong>JavascriptExecutor approach</strong> or use a pre-built JS drag-and-drop helper script.</p></div>`
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
  ],
  testng: [
  {
    q: "What is TestNG? What are its advantages over JUnit and key features?",
    difficulty: "easy",
    a: `<div class='ans-hero'>TestNG (Test Next Generation) is a powerful Java testing framework inspired by JUnit, designed to cover all categories of tests — unit, functional, integration, and end-to-end.</div>
<ul class='ans-list blue'>
  <li><span class='icon'>🎯</span><strong>Purpose:</strong> TestNG was created by Cedric Beust to overcome JUnit limitations and support complex testing scenarios like parallel execution, data-driven tests, and dependency management.</li>
  <li><span class='icon'>📦</span><strong>Package:</strong> <code>org.testng</code> — included via Maven/Gradle dependency.</li>
  <li><span class='icon'>📄</span><strong>Configuration:</strong> Tests are configured via <code>testng.xml</code>, giving fine-grained control over suites, groups, and parameters.</li>
</ul>
<div class='compare-grid'>
  <div class='compare-card blue'>
    <h6>TestNG Advantages</h6>
    <ul>
      <li>Supports grouping of tests</li>
      <li>Parallel execution built-in</li>
      <li>Dependency between tests</li>
      <li>Data-driven via @DataProvider</li>
      <li>Multiple @Before/@After levels</li>
      <li>Flexible testng.xml config</li>
      <li>IRetryAnalyzer for retries</li>
      <li>Listeners for custom reporting</li>
    </ul>
  </div>
  <div class='compare-card purple'>
    <h6>JUnit Limitations</h6>
    <ul>
      <li>No native test grouping</li>
      <li>Limited parallel support</li>
      <li>No method-level dependencies</li>
      <li>Limited data provider support</li>
      <li>Only @Before/@After class/method</li>
      <li>No XML configuration</li>
      <li>No built-in retry mechanism</li>
      <li>Basic listener support</li>
    </ul>
  </div>
</div>
<ul class='ans-list green'>
  <li><span class='icon'>✅</span><strong>Annotations:</strong> Rich set including <code>@BeforeSuite</code>, <code>@BeforeTest</code>, <code>@BeforeClass</code>, <code>@BeforeMethod</code> and their After counterparts.</li>
  <li><span class='icon'>✅</span><strong>Groups:</strong> Tag tests with groups and selectively run or exclude them.</li>
  <li><span class='icon'>✅</span><strong>Parallel Execution:</strong> Run methods, classes, or tests in parallel using <code>thread-count</code>.</li>
  <li><span class='icon'>✅</span><strong>Data-Driven Testing:</strong> <code>@DataProvider</code> feeds multiple data sets to a single test.</li>
  <li><span class='icon'>✅</span><strong>Dependency Management:</strong> <code>dependsOnMethods</code> and <code>dependsOnGroups</code> control execution order.</li>
  <li><span class='icon'>✅</span><strong>Flexible Assertions:</strong> Hard and Soft assertions via <code>Assert</code> and <code>SoftAssert</code>.</li>
  <li><span class='icon'>✅</span><strong>Reports:</strong> Auto-generates HTML and XML reports in <code>test-output</code> folder.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Pro Tip</div><p>TestNG is the de-facto standard in Selenium automation projects. Its <code>testng.xml</code> gives QA teams complete control over test suite organization, making it ideal for large enterprise test suites.</p></div>`
  },
  {
    q: "List all TestNG annotations and explain what each one does.",
    difficulty: "easy",
    a: `<div class='ans-hero'>TestNG provides a rich set of annotations that control test lifecycle, configuration, data supply, and listener registration.</div>
<table class='table-light-custom'>
  <thead>
    <tr><th>Annotation</th><th>Purpose</th><th>Runs</th></tr>
  </thead>
  <tbody>
    <tr><td><code>@Test</code></td><td>Marks a method as a test case</td><td>Each test execution</td></tr>
    <tr><td><code>@BeforeSuite</code></td><td>Runs once before the entire test suite begins</td><td>Once per suite</td></tr>
    <tr><td><code>@AfterSuite</code></td><td>Runs once after the entire test suite finishes</td><td>Once per suite</td></tr>
    <tr><td><code>@BeforeTest</code></td><td>Runs before any test method in the &lt;test&gt; tag</td><td>Once per &lt;test&gt; tag</td></tr>
    <tr><td><code>@AfterTest</code></td><td>Runs after all test methods in the &lt;test&gt; tag</td><td>Once per &lt;test&gt; tag</td></tr>
    <tr><td><code>@BeforeClass</code></td><td>Runs once before the first test method in the current class</td><td>Once per class</td></tr>
    <tr><td><code>@AfterClass</code></td><td>Runs once after all test methods in the current class</td><td>Once per class</td></tr>
    <tr><td><code>@BeforeMethod</code></td><td>Runs before every test method in the class</td><td>Before each @Test</td></tr>
    <tr><td><code>@AfterMethod</code></td><td>Runs after every test method in the class</td><td>After each @Test</td></tr>
    <tr><td><code>@DataProvider</code></td><td>Supplies multiple sets of data to a @Test method</td><td>Per data row</td></tr>
    <tr><td><code>@Factory</code></td><td>Creates multiple instances of a test class dynamically</td><td>At instantiation</td></tr>
    <tr><td><code>@Listeners</code></td><td>Registers listener classes on a test class</td><td>At class level</td></tr>
    <tr><td><code>@Parameters</code></td><td>Injects parameters from testng.xml into test methods</td><td>Per method</td></tr>
  </tbody>
</table>
<ul class='ans-list amber'>
  <li><span class='icon'>📌</span><strong>@Test attributes:</strong> <code>groups</code>, <code>priority</code>, <code>enabled</code>, <code>dependsOnMethods</code>, <code>dataProvider</code>, <code>retryAnalyzer</code>, <code>timeOut</code>, <code>invocationCount</code>.</li>
  <li><span class='icon'>📌</span><strong>@DataProvider(name="...")</strong> — the name attribute links the provider to the consumer test via <code>@Test(dataProvider="name")</code>.</li>
  <li><span class='icon'>📌</span><strong>@Parameters({"param1","param2"})</strong> — maps to <code>&lt;parameter name="param1" value="value1"/&gt;</code> in testng.xml.</li>
  <li><span class='icon'>📌</span><strong>@Listeners({MyListener.class})</strong> — applies listener only to that class; global listeners go in testng.xml.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Execution Order</div><p>The natural order is: <code>@BeforeSuite → @BeforeTest → @BeforeClass → @BeforeMethod → @Test → @AfterMethod → @AfterClass → @AfterTest → @AfterSuite</code>. Each level wraps the one below it.</p></div>`
  },
  {
    q: "@BeforeSuite vs @BeforeClass vs @BeforeMethod — execution order, use cases, and diagram.",
    difficulty: "medium",
    a: `<div class='ans-hero'>These three annotations define setup code at different scopes: suite-wide, class-wide, and per-method — they form a nested hierarchy that controls exactly when setup logic executes.</div>
<div class='compare-grid'>
  <div class='compare-card blue'>
    <h6>@BeforeSuite</h6>
    <ul>
      <li>Runs exactly <strong>once</strong> before the entire suite</li>
      <li>Scope: entire test suite (all classes)</li>
      <li>Use: start DB server, init global config, launch browser grid</li>
      <li>Counterpart: <code>@AfterSuite</code></li>
    </ul>
  </div>
  <div class='compare-card purple'>
    <h6>@BeforeClass</h6>
    <ul>
      <li>Runs once before first test in the class</li>
      <li>Scope: single test class</li>
      <li>Use: open DB connection, instantiate driver, load test data</li>
      <li>Counterpart: <code>@AfterClass</code></li>
    </ul>
  </div>
  <div class='compare-card green'>
    <h6>@BeforeMethod</h6>
    <ul>
      <li>Runs before <strong>every</strong> test method</li>
      <li>Scope: each individual @Test</li>
      <li>Use: navigate to URL, clear cookies, reset state</li>
      <li>Counterpart: <code>@AfterMethod</code></li>
      <li>Runs N times (once per @Test)</li>
    </ul>
  </div>
</div>
<ul class='ans-list blue'>
  <li><span class='icon'>1️⃣</span><strong>@BeforeSuite</strong> → Executes first, once for the whole suite.</li>
  <li><span class='icon'>2️⃣</span><strong>@BeforeTest</strong> → Executes before tests in each <code>&lt;test&gt;</code> XML tag.</li>
  <li><span class='icon'>3️⃣</span><strong>@BeforeClass</strong> → Executes once per class, before any @Test in that class.</li>
  <li><span class='icon'>4️⃣</span><strong>@BeforeMethod</strong> → Executes before every single @Test method.</li>
  <li><span class='icon'>5️⃣</span><strong>@Test</strong> → The actual test runs here.</li>
  <li><span class='icon'>6️⃣</span><strong>@AfterMethod</strong> → Executes after every single @Test method.</li>
  <li><span class='icon'>7️⃣</span><strong>@AfterClass</strong> → Executes once after all @Test methods in the class.</li>
  <li><span class='icon'>8️⃣</span><strong>@AfterTest</strong> → Executes after tests in each <code>&lt;test&gt;</code> XML tag.</li>
  <li><span class='icon'>9️⃣</span><strong>@AfterSuite</strong> → Executes last, once for the whole suite.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Key Insight</div><p>If you have 3 test classes with 4 methods each: <code>@BeforeSuite</code> runs 1 time, <code>@BeforeClass</code> runs 3 times, and <code>@BeforeMethod</code> runs 12 times. Choose the right scope to avoid redundant or expensive setup.</p></div>`
  },
  {
    q: "@DataProvider in TestNG — how it works, Object[][], parameterizing tests, name attribute, and code example.",
    difficulty: "hard",
    a: `<div class='ans-hero'>@DataProvider is a TestNG mechanism that feeds multiple sets of input data to a single @Test method, enabling data-driven testing without duplicating test code.</div>
<ul class='ans-list blue'>
  <li><span class='icon'>⚙️</span><strong>Return Type:</strong> Must return <code>Object[][]</code> — a 2D array where each inner array is one test invocation's parameters.</li>
  <li><span class='icon'>🔗</span><strong>Linking:</strong> The provider is linked to a @Test via <code>@Test(dataProvider="providerName")</code>.</li>
  <li><span class='icon'>📍</span><strong>Location:</strong> Can be in the same class or an external class (use <code>dataProviderClass=SomeClass.class</code>).</li>
  <li><span class='icon'>🔄</span><strong>Execution:</strong> TestNG calls the @Test method once per row in the returned Object[][] — so 3 rows = 3 test runs.</li>
  <li><span class='icon'>🏷️</span><strong>Name attribute:</strong> <code>@DataProvider(name="loginData")</code> — the name must exactly match the string in <code>dataProvider="loginData"</code>.</li>
</ul>
<ul class='ans-list green'>
  <li><span class='icon'>📝</span><strong>Basic example:</strong>
    <br><code>@DataProvider(name = "loginCredentials")</code>
    <br><code>public Object[][] getLoginData() {</code>
    <br><code>&nbsp;&nbsp;return new Object[][] {</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;{"admin@test.com", "Admin@123", true},</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;{"user@test.com", "User@123", true},</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;{"wrong@test.com", "wrongpass", false}</code>
    <br><code>&nbsp;&nbsp;};</code>
    <br><code>}</code>
    <br><code>@Test(dataProvider = "loginCredentials")</code>
    <br><code>public void testLogin(String email, String password, boolean expected) {</code>
    <br><code>&nbsp;&nbsp;Assert.assertEquals(loginPage.isLoggedIn(), expected);</code>
    <br><code>}</code>
  </li>
</ul>
<ul class='ans-list amber'>
  <li><span class='icon'>⚡</span><strong>parallel attribute:</strong> <code>@DataProvider(name="data", parallel=true)</code> runs each data row in a separate thread — requires thread-safe code.</li>
  <li><span class='icon'>📊</span><strong>Reading from Excel:</strong> Commonly combined with Apache POI to return <code>Object[][]</code> populated from an Excel sheet.</li>
  <li><span class='icon'>🔁</span><strong>Iterator return:</strong> Can also return <code>Iterator&lt;Object[]&gt;</code> instead of <code>Object[][]</code> for lazy loading large datasets.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Best Practice</div><p>Keep @DataProvider methods in a separate <code>TestDataProvider</code> class and mark them <code>static</code>. This allows any test class to access them via <code>dataProviderClass</code> without inheritance or instantiation.</p></div>`
  },
  {
    q: "Soft Assert vs Hard Assert in TestNG — behavior on failure, when to use each, and AssertAll() example.",
    difficulty: "hard",
    a: `<div class='ans-hero'>Hard Assert stops the test immediately on first failure; Soft Assert collects all failures and reports them together at the end via assertAll(), allowing the test to continue past individual assertion failures.</div>
<div class='compare-grid'>
  <div class='compare-card red'>
    <h6>Hard Assert (Assert)</h6>
    <ul>
      <li>Class: <code>org.testng.Assert</code></li>
      <li>On failure: throws <code>AssertionError</code> immediately</li>
      <li>Remaining assertions: SKIPPED</li>
      <li>Test result: FAIL at first failed assertion</li>
      <li>Use: critical checkpoints, login must pass before continuing</li>
    </ul>
  </div>
  <div class='compare-card green'>
    <h6>Soft Assert (SoftAssert)</h6>
    <ul>
      <li>Class: <code>org.testng.asserts.SoftAssert</code></li>
      <li>On failure: records failure, continues execution</li>
      <li>Remaining assertions: ALL executed</li>
      <li>Test result: FAIL only after <code>assertAll()</code></li>
      <li>Use: form validation, multiple UI checks in one test</li>
    </ul>
  </div>
</div>
<ul class='ans-list blue'>
  <li><span class='icon'>💥</span><strong>Hard Assert Example:</strong>
    <br><code>Assert.assertEquals(driver.getTitle(), "Home Page"); // FAILS here</code>
    <br><code>Assert.assertTrue(logo.isDisplayed()); // NEVER reached</code></li>
  <li><span class='icon'>🛡️</span><strong>Soft Assert Example:</strong>
    <br><code>SoftAssert softAssert = new SoftAssert();</code>
    <br><code>softAssert.assertEquals(driver.getTitle(), "Home Page", "Title mismatch");</code>
    <br><code>softAssert.assertTrue(logo.isDisplayed(), "Logo not visible");</code>
    <br><code>softAssert.assertAll(); // Reports ALL failures at once</code></li>
</ul>
<ul class='ans-list amber'>
  <li><span class='icon'>⚠️</span><strong>Critical rule:</strong> ALWAYS call <code>softAssert.assertAll()</code> at the end — if omitted, the test passes even when assertions failed!</li>
  <li><span class='icon'>🔄</span><strong>SoftAssert scope:</strong> Create a new <code>SoftAssert</code> instance per @Test method — do NOT share across tests.</li>
</ul>
<table class='table-light-custom'>
  <thead>
    <tr><th>Scenario</th><th>Use Hard Assert</th><th>Use Soft Assert</th></tr>
  </thead>
  <tbody>
    <tr><td>Login verification</td><td>✅ Yes — must pass to continue</td><td>❌ No</td></tr>
    <tr><td>Form field validations</td><td>❌ No</td><td>✅ Yes — check all fields</td></tr>
    <tr><td>API response fields</td><td>❌ No</td><td>✅ Yes — verify all fields</td></tr>
    <tr><td>Page load critical element</td><td>✅ Yes</td><td>❌ No</td></tr>
  </tbody>
</table>
<div class='info-panel tip'><div class='panel-title'>Best Practice</div><p>Use <code>@BeforeMethod</code> to initialize <code>SoftAssert softAssert = new SoftAssert()</code> as an instance variable — this ensures a fresh SoftAssert per test method and avoids stale state contamination.</p></div>`
  },
  {
    q: "Groups in TestNG — defining groups, running in testng.xml, include/exclude, and group-of-groups.",
    difficulty: "medium",
    a: `<div class='ans-hero'>TestNG groups allow you to categorize test methods with labels (like "smoke", "regression") and selectively run or exclude them through testng.xml without modifying test code.</div>
<ul class='ans-list blue'>
  <li><span class='icon'>🏷️</span><strong>Defining groups on a @Test:</strong> <code>@Test(groups = {"smoke", "regression"})</code> — a test can belong to multiple groups.</li>
  <li><span class='icon'>🏷️</span><strong>Defining groups on a class:</strong> Place <code>@Test(groups="smoke")</code> at class level to apply to all methods.</li>
</ul>
<ul class='ans-list green'>
  <li><span class='icon'>📄</span><strong>Running specific groups in testng.xml:</strong>
    <br><code>&lt;suite name="Suite"&gt;&lt;test name="Smoke"&gt;&lt;groups&gt;&lt;run&gt;&lt;include name="smoke"/&gt;&lt;/run&gt;&lt;/groups&gt;&lt;/test&gt;&lt;/suite&gt;</code></li>
  <li><span class='icon'>🚫</span><strong>Excluding groups:</strong>
    <br><code>&lt;run&gt;&lt;include name="regression"/&gt;&lt;exclude name="flaky"/&gt;&lt;/run&gt;</code></li>
</ul>
<ul class='ans-list purple'>
  <li><span class='icon'>🔗</span><strong>Group-of-groups (meta-groups):</strong>
    <br><code>&lt;groups&gt;&lt;define name="all-tests"&gt;&lt;include name="smoke"/&gt;&lt;include name="regression"/&gt;&lt;/define&gt;&lt;run&gt;&lt;include name="all-tests"/&gt;&lt;/run&gt;&lt;/groups&gt;</code></li>
  <li><span class='icon'>⚡</span><strong>@BeforeGroups / @AfterGroups:</strong> Setup/teardown that runs only when a specific group is about to start or has just finished.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Common Group Strategy</div><p>Use <strong>smoke</strong> for quick 5-minute sanity checks, <strong>regression</strong> for full suite, <strong>sanity</strong> for post-deployment verification, and <strong>flaky</strong> to tag and exclude unstable tests in CI pipelines.</p></div>`
  },
  {
    q: "testng.xml configuration — suite, test, class, method tags, parameters, listeners, and parallel attribute.",
    difficulty: "medium",
    a: `<div class='ans-hero'>testng.xml is the master configuration file for TestNG that defines which tests to run, in what order, with what parameters, listeners, and parallel execution settings.</div>
<ul class='ans-list blue'>
  <li><span class='icon'>📄</span><strong>Full annotated testng.xml structure:</strong>
    <br><code>&lt;suite name="E2E Suite" parallel="tests" thread-count="3"&gt;</code>
    <br><code>&nbsp;&nbsp;&lt;parameter name="browser" value="chrome"/&gt;</code>
    <br><code>&nbsp;&nbsp;&lt;listeners&gt;&lt;listener class-name="listeners.ExtentReportListener"/&gt;&lt;/listeners&gt;</code>
    <br><code>&nbsp;&nbsp;&lt;test name="Smoke Tests" preserve-order="true"&gt;</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;groups&gt;&lt;run&gt;&lt;include name="smoke"/&gt;&lt;/run&gt;&lt;/groups&gt;</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;classes&gt;&lt;class name="tests.LoginTest"&gt;&lt;methods&gt;&lt;include name="testValidLogin"/&gt;&lt;/methods&gt;&lt;/class&gt;&lt;/classes&gt;</code>
    <br><code>&nbsp;&nbsp;&lt;/test&gt;</code>
    <br><code>&lt;/suite&gt;</code></li>
</ul>
<table class='table-light-custom'>
  <thead>
    <tr><th>Tag/Attribute</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;suite&gt;</code></td><td>Top-level container for all tests</td></tr>
    <tr><td><code>&lt;test&gt;</code></td><td>Groups classes logically, maps to @BeforeTest scope</td></tr>
    <tr><td><code>&lt;class&gt;</code></td><td>Specifies a test class to include</td></tr>
    <tr><td><code>&lt;methods&gt;</code></td><td>Include/exclude specific methods in a class</td></tr>
    <tr><td><code>&lt;parameter&gt;</code></td><td>Passes values to @Parameters-annotated methods</td></tr>
    <tr><td><code>parallel</code></td><td>Parallel mode: methods/classes/tests/instances</td></tr>
    <tr><td><code>thread-count</code></td><td>Number of parallel threads</td></tr>
    <tr><td><code>preserve-order</code></td><td>Run classes/methods in declared order</td></tr>
  </tbody>
</table>
<div class='info-panel tip'><div class='panel-title'>DTD Declaration</div><p>Always include <code>&lt;!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd"&gt;</code> at the top — this enables IDE validation and autocomplete for the XML structure.</p></div>`
  },
  {
    q: "IRetryAnalyzer in TestNG — interface, implementing retry logic, plugging into @Test, and code example.",
    difficulty: "hard",
    a: `<div class='ans-hero'>IRetryAnalyzer is a TestNG interface that allows automatic re-execution of failed tests a specified number of times before marking them as failed — ideal for handling flaky tests in CI.</div>
<ul class='ans-list blue'>
  <li><span class='icon'>🔧</span><strong>Interface method:</strong> <code>boolean retry(ITestResult result)</code> — return <code>true</code> to retry, <code>false</code> to stop retrying and mark as failed.</li>
  <li><span class='icon'>🔗</span><strong>Attach to test:</strong> <code>@Test(retryAnalyzer = RetryAnalyzer.class)</code></li>
</ul>
<ul class='ans-list green'>
  <li><span class='icon'>📝</span><strong>Implementation:</strong>
    <br><code>public class RetryAnalyzer implements IRetryAnalyzer {</code>
    <br><code>&nbsp;&nbsp;private int retryCount = 0;</code>
    <br><code>&nbsp;&nbsp;private static final int MAX_RETRY = 3;</code>
    <br><code>&nbsp;&nbsp;@Override</code>
    <br><code>&nbsp;&nbsp;public boolean retry(ITestResult result) {</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;if (retryCount &lt; MAX_RETRY) { retryCount++; return true; }</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;return false;</code>
    <br><code>&nbsp;&nbsp;}</code>
    <br><code>}</code></li>
</ul>
<ul class='ans-list amber'>
  <li><span class='icon'>🌍</span><strong>Apply globally via IAnnotationTransformer:</strong>
    <br><code>public class RetryListener implements IAnnotationTransformer {</code>
    <br><code>&nbsp;&nbsp;@Override</code>
    <br><code>&nbsp;&nbsp;public void transform(ITestAnnotation annotation, Class testClass, Constructor testConstructor, Method testMethod) {</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;annotation.setRetryAnalyzer(RetryAnalyzer.class);</code>
    <br><code>&nbsp;&nbsp;}</code>
    <br><code>}</code>
    <br>Register in testng.xml: <code>&lt;listener class-name="listeners.RetryListener"/&gt;</code></li>
</ul>
<table class='table-light-custom'>
  <thead>
    <tr><th>Approach</th><th>Scope</th><th>Maintenance</th></tr>
  </thead>
  <tbody>
    <tr><td><code>@Test(retryAnalyzer=...)</code></td><td>Single test method</td><td>High — must add to every @Test</td></tr>
    <tr><td><code>IAnnotationTransformer</code></td><td>All tests globally</td><td>Low — set once in listener</td></tr>
  </tbody>
</table>
<div class='info-panel tip'><div class='panel-title'>Important Behavior</div><p>TestNG counts retry attempts in the test results as "skipped" before the final pass/fail. The <code>retryCount</code> variable must be an instance variable (not static) so each test instance gets its own counter.</p></div>`
  },
  {
    q: "TestNG Listeners — ITestListener, ISuiteListener — methods, how to register, and use cases.",
    difficulty: "medium",
    a: `<div class='ans-hero'>TestNG listeners are interfaces that let you hook into the test lifecycle to perform custom actions like logging, reporting, taking screenshots, or retrying — without modifying test code.</div>
<ul class='ans-list blue'>
  <li><span class='icon'>📋</span><strong>ITestListener key methods:</strong>
    <br><code>onTestStart(ITestResult result)</code> — fires when a test starts
    <br><code>onTestSuccess(ITestResult result)</code> — fires when a test passes
    <br><code>onTestFailure(ITestResult result)</code> — fires when a test fails (screenshot here!)
    <br><code>onTestSkipped(ITestResult result)</code> — fires when a test is skipped
    <br><code>onFinish(ITestContext context)</code> — fires when all tests in a context finish</li>
</ul>
<ul class='ans-list green'>
  <li><span class='icon'>🏢</span><strong>ISuiteListener:</strong>
    <br><code>onStart(ISuite suite)</code> — fires before the suite starts (initialize Extent Report)
    <br><code>onFinish(ISuite suite)</code> — fires after suite ends (flush/close report)</li>
</ul>
<table class='table-light-custom'>
  <thead>
    <tr><th>Registration Method</th><th>How</th><th>Scope</th></tr>
  </thead>
  <tbody>
    <tr><td>testng.xml</td><td><code>&lt;listener class-name="listeners.TestListener"/&gt;</code></td><td>Global — all classes</td></tr>
    <tr><td>@Listeners annotation</td><td><code>@Listeners({TestListener.class})</code> on class</td><td>Single class only</td></tr>
    <tr><td>ServiceLoader</td><td>META-INF/services file</td><td>Auto-discovery</td></tr>
  </tbody>
</table>
<div class='info-panel tip'><div class='panel-title'>ExtentReports Integration</div><p>The most common use of ITestListener is integrating ExtentReports: initialize the report in <code>onStart</code>, create a test node in <code>onTestStart</code>, log pass/fail in <code>onTestSuccess/onTestFailure</code>, and flush in <code>onFinish</code>.</p></div>`
  },
  {
    q: "@Factory annotation in TestNG — difference from @DataProvider, creating multiple test instances, and code example.",
    difficulty: "hard",
    a: `<div class='ans-hero'>@Factory creates multiple instances of a test class with different constructor arguments, whereas @DataProvider passes different data to the same instance — use @Factory when you need true class-level isolation per data set.</div>
<div class='compare-grid'>
  <div class='compare-card blue'>
    <h6>@Factory</h6>
    <ul>
      <li>Creates <strong>multiple instances</strong> of the test class</li>
      <li>Each instance is fully independent</li>
      <li>Data passed via <strong>constructor</strong></li>
      <li>All @Test methods run on each instance</li>
      <li>Use: cross-browser, cross-env, multi-user</li>
    </ul>
  </div>
  <div class='compare-card purple'>
    <h6>@DataProvider</h6>
    <ul>
      <li>Uses <strong>single class instance</strong></li>
      <li>Data passed via <strong>method parameters</strong></li>
      <li>Only the @Test with dataProvider runs</li>
      <li>Returns <code>Object[][]</code></li>
      <li>Use: input combinations for one test</li>
    </ul>
  </div>
</div>
<ul class='ans-list green'>
  <li><span class='icon'>📝</span><strong>@Factory Example — cross-browser testing:</strong>
    <br><code>public class TestFactory {</code>
    <br><code>&nbsp;&nbsp;@Factory</code>
    <br><code>&nbsp;&nbsp;public Object[] createTests() {</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;return new Object[] { new LoginTest("chrome"), new LoginTest("firefox"), new LoginTest("edge") };</code>
    <br><code>&nbsp;&nbsp;}</code>
    <br><code>}</code>
    <br><br>Result: With 3 browsers and 2 @Test methods each, TestNG runs 3 × 2 = 6 total executions.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>When to Use @Factory</div><p>Use @Factory when the <em>entire test class</em> needs to run in multiple environments (browsers, users, regions). Use @DataProvider when only <em>one specific test method</em> needs multiple input sets.</p></div>`
  },
  {
    q: "Parallel execution in TestNG — parallel modes, thread-count, testng.xml setup, and when to use each mode.",
    difficulty: "medium",
    a: `<div class='ans-hero'>TestNG supports parallel execution at four levels — methods, classes, tests, and instances — controlled via the parallel attribute in testng.xml, dramatically reducing execution time for large test suites.</div>
<table class='table-light-custom'>
  <thead>
    <tr><th>parallel value</th><th>What runs in parallel</th><th>Best For</th></tr>
  </thead>
  <tbody>
    <tr><td><code>methods</code></td><td>Each @Test method in its own thread</td><td>Independent unit tests</td></tr>
    <tr><td><code>classes</code></td><td>Each test class in its own thread</td><td>Class-isolated feature tests</td></tr>
    <tr><td><code>tests</code></td><td>Each &lt;test&gt; tag in its own thread</td><td>Cross-browser / cross-env suites</td></tr>
    <tr><td><code>instances</code></td><td>Each @Factory instance in its own thread</td><td>Multi-instance factory tests</td></tr>
  </tbody>
</table>
<ul class='ans-list green'>
  <li><span class='icon'>🔒</span><strong>Thread-safe WebDriver with ThreadLocal:</strong>
    <br><code>public class DriverManager {</code>
    <br><code>&nbsp;&nbsp;private static ThreadLocal&lt;WebDriver&gt; driver = new ThreadLocal&lt;&gt;();</code>
    <br><code>&nbsp;&nbsp;public static WebDriver getDriver() { return driver.get(); }</code>
    <br><code>&nbsp;&nbsp;public static void setDriver(WebDriver d) { driver.set(d); }</code>
    <br><code>&nbsp;&nbsp;public static void quitDriver() { driver.get().quit(); driver.remove(); }</code>
    <br><code>}</code></li>
</ul>
<ul class='ans-list amber'>
  <li><span class='icon'>⚠️</span><strong>parallel="methods" warning:</strong> Avoid shared mutable state in test classes when using method-level parallelism.</li>
  <li><span class='icon'>🔢</span><strong>thread-count:</strong> Set to number of available CPU cores or number of parallel browsers.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Recommended Setup</div><p>For Selenium, use <code>parallel="tests"</code> with <code>ThreadLocal&lt;WebDriver&gt;</code> — each &lt;test&gt; block represents a browser, and tests within each browser run sequentially. This avoids thread-safety issues while still cutting execution time.</p></div>`
  },
  {
    q: "dependsOnMethods in TestNG — behavior when dependency fails, hardDependency vs softDependency, code example.",
    difficulty: "medium",
    a: `<div class='ans-hero'>dependsOnMethods enforces execution order between @Test methods and skips dependent tests when their dependencies fail — preventing cascading failures from running irrelevant downstream tests.</div>
<ul class='ans-list blue'>
  <li><span class='icon'>🔗</span><strong>Basic syntax:</strong> <code>@Test(dependsOnMethods = {"methodName"})</code> — the test waits for the listed methods to pass before executing.</li>
  <li><span class='icon'>⛓️</span><strong>Chain: A → B → C</strong> — if A fails, both B and C are skipped.</li>
</ul>
<div class='compare-grid'>
  <div class='compare-card red'>
    <h6>hardDependency (default)</h6>
    <ul>
      <li>If dependency FAILS → dependent is SKIPPED</li>
      <li>If dependency is SKIPPED → dependent is SKIPPED</li>
      <li><code>alwaysRun=false</code> (default)</li>
      <li>Strict dependency enforcement</li>
    </ul>
  </div>
  <div class='compare-card green'>
    <h6>softDependency (alwaysRun=true)</h6>
    <ul>
      <li>If dependency FAILS → dependent STILL RUNS</li>
      <li>Execution order is still preserved</li>
      <li><code>@Test(dependsOnMethods={"step1"}, alwaysRun=true)</code></li>
      <li>Useful for cleanup/teardown steps</li>
    </ul>
  </div>
</div>
<ul class='ans-list amber'>
  <li><span class='icon'>👥</span><strong>dependsOnGroups:</strong> <code>@Test(dependsOnGroups = {"setup"})</code> — waits for all tests in the "setup" group to complete before running.</li>
  <li><span class='icon'>⚠️</span><strong>Priority vs dependsOnMethods:</strong> Priority controls order but doesn't create dependencies — a lower-priority test still runs even if a higher-priority one fails.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Best Practice</div><p>Use <code>dependsOnMethods</code> sparingly and only for true workflow tests (e.g., login → add cart → checkout). For unit tests and isolated test cases, avoid dependencies as they reduce test parallelization potential.</p></div>`
  },
  {
    q: "Skipping a test in TestNG — @Test(enabled=false), SkipException, ITestResult.SKIP, when to use each.",
    difficulty: "easy",
    a: `<div class='ans-hero'>TestNG offers three ways to skip tests: disabling via enabled=false, throwing SkipException programmatically, or using dependsOnMethods which auto-skips when dependencies fail.</div>
<div class='compare-grid'>
  <div class='compare-card blue'>
    <h6>@Test(enabled=false)</h6>
    <ul>
      <li>Compile-time / static skip</li>
      <li>Test is completely ignored</li>
      <li>Not shown in results as skipped</li>
      <li>Use: permanently disabled tests, WIP</li>
      <li>Cannot conditionally skip</li>
    </ul>
  </div>
  <div class='compare-card amber'>
    <h6>throw new SkipException()</h6>
    <ul>
      <li>Runtime / dynamic skip</li>
      <li>Shown as SKIPPED in results</li>
      <li>Can skip based on conditions</li>
      <li>Use: environment-specific, feature flags</li>
      <li>Appears in test report with message</li>
    </ul>
  </div>
</div>
<ul class='ans-list green'>
  <li><span class='icon'>⚡</span><strong>SkipException — dynamic conditional skip:</strong>
    <br><code>@Test public void testPaymentFeature() {</code>
    <br><code>&nbsp;&nbsp;if (!env.equals("production")) {</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;throw new SkipException("Skipped — not running on prod env: " + env);</code>
    <br><code>&nbsp;&nbsp;}</code>
    <br><code>&nbsp;&nbsp;// Only executes in production</code>
    <br><code>}</code></li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Best Practice</div><p>Prefer <code>SkipException</code> over <code>enabled=false</code> when possible — it appears in the test report, documents the reason for skipping, and is searchable in CI history. Use <code>enabled=false</code> only for tests that are broken/incomplete and should never run.</p></div>`
  },
  {
    q: "Priority in TestNG — @Test(priority=), default priority, negative values, and behavior with same priority.",
    difficulty: "easy",
    a: `<div class='ans-hero'>TestNG's priority attribute on @Test controls the execution order of test methods within a class — lower numeric values run first, default is 0, and negative values run before positives.</div>
<ul class='ans-list blue'>
  <li><span class='icon'>🔢</span><strong>Default priority:</strong> All @Test methods without explicit priority have priority = <strong>0</strong>.</li>
  <li><span class='icon'>📊</span><strong>Order:</strong> Tests execute from lowest to highest priority value: <code>-2, -1, 0, 1, 2, 3...</code></li>
  <li><span class='icon'>⚡</span><strong>Negative values:</strong> Fully supported — <code>priority=-1</code> runs before <code>priority=0</code>.</li>
  <li><span class='icon'>🔀</span><strong>Same priority:</strong> Tests with identical priority values run in <strong>alphabetical order</strong> by method name.</li>
</ul>
<table class='table-light-custom'>
  <thead>
    <tr><th>Priority Value</th><th>Execution Position</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>-2 or lower</td><td>Very first</td><td>Good for critical pre-checks</td></tr>
    <tr><td>-1</td><td>Before default</td><td>Pre-login setup steps</td></tr>
    <tr><td>0 (default)</td><td>Middle</td><td>All unannotated priority tests</td></tr>
    <tr><td>1, 2, 3...</td><td>After default</td><td>Post-test cleanup, final checks</td></tr>
    <tr><td>Same value</td><td>Alphabetical order</td><td>Non-deterministic if names differ only in case</td></tr>
  </tbody>
</table>
<ul class='ans-list amber'>
  <li><span class='icon'>⚠️</span><strong>Priority ≠ dependency:</strong> Even if a higher-priority test fails, lower-priority tests still execute. Use <code>dependsOnMethods</code> if you need a true dependency with skip behavior.</li>
  <li><span class='icon'>🏗️</span><strong>Scope:</strong> Priority only orders tests within the same class. Across different classes, class execution order is controlled by testng.xml <code>&lt;class&gt;</code> ordering.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Strategy Tip</div><p>Reserve negative priorities (-5 to -1) for critical setup validations, use 0 for functional tests, and positive priorities (1-5) for cleanup and teardown verification steps.</p></div>`
  },
  {
    q: "Running failed tests in TestNG — testng-failed.xml, how it's generated, how to run it, and IRetryAnalyzer approach.",
    difficulty: "medium",
    a: `<div class='ans-hero'>TestNG automatically generates a testng-failed.xml file after every suite run containing only the failed tests — this allows you to re-run just failures without running the entire suite again.</div>
<ul class='ans-list blue'>
  <li><span class='icon'>📁</span><strong>Location:</strong> Auto-generated at <code>test-output/testng-failed.xml</code> after every TestNG run.</li>
  <li><span class='icon'>⚙️</span><strong>Content:</strong> Contains the exact same structure as testng.xml but includes only the test classes/methods that failed in the last run.</li>
  <li><span class='icon'>🔄</span><strong>How to run:</strong> Pass it as your testng.xml to TestNG — only the failed tests execute.</li>
</ul>
<ul class='ans-list purple'>
  <li><span class='icon'>▶️</span><strong>Running from Maven:</strong>
    <br><code>mvn test -DsuiteXmlFile=test-output/testng-failed.xml</code></li>
</ul>
<table class='table-light-custom'>
  <thead>
    <tr><th>Approach</th><th>When it retries</th><th>Best For</th></tr>
  </thead>
  <tbody>
    <tr><td><code>IRetryAnalyzer</code></td><td>Immediately during same run</td><td>Flaky tests in CI — retry inline</td></tr>
    <tr><td><code>testng-failed.xml</code></td><td>Manually after run completes</td><td>Debugging — targeted rerun</td></tr>
    <tr><td>CI pipeline rerun</td><td>Triggered by CI on failure</td><td>Automated CI/CD retry stage</td></tr>
  </tbody>
</table>
<ul class='ans-list red'>
  <li><span class='icon'>⚠️</span><strong>Important:</strong> testng-failed.xml is <em>overwritten</em> on every run — if you want to preserve it, copy it to a dated folder before the next run.</li>
</ul>
<div class='info-panel tip'><div class='panel-title'>Pro CI/CD Strategy</div><p>Combine both approaches: use <code>IRetryAnalyzer</code> with <code>MAX_RETRY=1</code> to handle intermittent flakiness inline, then use <code>testng-failed.xml</code> in a separate CI stage for tests that fail even after inline retry.</p></div>`
  }
  ],
  cucumber: [
  {
    q: "What is BDD (Behavior-Driven Development)? Why does it exist and who benefits from it?",
    difficulty: "easy",
    a: `<div class="ans-hero">BDD is a software development approach where tests are written in plain English describing the expected behavior of the system, so developers, QA, and business stakeholders can all collaborate from one shared source of truth.</div>
<ul class="ans-list blue">
  <li><span class="icon">💡</span><strong>Why BDD exists</strong> — Traditional testing was too technical for business teams. Requirements were misunderstood, leading to bugs. BDD forces everyone to agree on behavior before a single line of code is written.</li>
  <li><span class="icon">🏢</span><strong>Business Analysts / Product Owners benefit</strong> — They write and read scenarios in plain English without needing to understand code.</li>
  <li><span class="icon">👨‍💻</span><strong>Developers benefit</strong> — Scenarios serve as unambiguous specifications. There is no guessing about what "correct behavior" means.</li>
  <li><span class="icon">🧪</span><strong>QA Engineers benefit</strong> — Test scenarios double as automated tests. Regression is automated and readable without maintaining separate test case documents.</li>
  <li><span class="icon">🔄</span><strong>The BDD cycle</strong> — Discover (workshops) → Formulate (Gherkin scenarios) → Automate (step definitions). Often called the "Three Amigos" meeting: BA + Dev + QA.</li>
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
  </tbody>
</table>
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
    <tr><td><code>Scenario</code></td><td>A specific test case — one concrete example of a behavior.</td><td>Scenario: Successful login</td></tr>
    <tr><td><code>Given</code></td><td>Sets up the initial state or context (precondition).</td><td>Given the user is on the login page</td></tr>
    <tr><td><code>When</code></td><td>Describes the action or event performed by the user.</td><td>When the user submits valid credentials</td></tr>
    <tr><td><code>Then</code></td><td>Describes the expected observable outcome.</td><td>Then the dashboard should be displayed</td></tr>
    <tr><td><code>And</code></td><td>Continuation of a Given, When, or Then. Avoids repeating keywords.</td><td>And the welcome message should appear</td></tr>
    <tr><td><code>But</code></td><td>Negative continuation of a Given/When/Then.</td><td>But the error message should not be shown</td></tr>
    <tr><td><code>Background</code></td><td>Steps that run before every Scenario in the Feature file.</td><td>Background: Given the app is launched</td></tr>
    <tr><td><code>Scenario Outline</code></td><td>A template scenario that runs multiple times with different data from an Examples table.</td><td>Scenario Outline: Login as &lt;role&gt;</td></tr>
    <tr><td><code>Examples</code></td><td>The data table attached to a Scenario Outline. Each row produces one execution.</td><td>Examples: | username | password |</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 And/But are aliases</div><p><strong>And</strong> and <strong>But</strong> are syntactic sugar — they are treated identically to whatever step type came before them (Given, When, or Then). They exist purely to make scenarios read more naturally in English.</p></div>`
  },
  {
    q: "What are Step Definitions in Cucumber? How do they map to Gherkin steps? Explain @Given/@When/@Then annotations and Cucumber Expressions.",
    difficulty: "medium",
    a: `<div class="ans-hero">Step Definitions are Java methods annotated with @Given, @When, @Then that Cucumber invokes when it matches a Gherkin step — they are the bridge between plain-English scenarios and actual executable code.</div>
<ul class="ans-list blue">
  <li><span class="icon">🔗</span><strong>Mapping mechanism</strong> — Each annotation takes a string pattern. When Cucumber reads a Gherkin step, it scans all step definitions for a matching pattern and calls that method.</li>
  <li><span class="icon">🧩</span><strong>Cucumber Expressions</strong> — Modern, readable syntax: <code>{string}</code>, <code>{int}</code>, <code>{double}</code>, <code>{word}</code>. Preferred over regex in modern projects.</li>
  <li><span class="icon">📦</span><strong>Package</strong> — Import from <code>io.cucumber.java.en.*</code> for English annotations.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Gherkin Step</th><th>Step Definition Pattern</th><th>Extracted Value</th></tr></thead>
  <tbody>
    <tr><td>When the user enters username "admin"</td><td><code>@When("the user enters username {string}")</code></td><td>String: "admin"</td></tr>
    <tr><td>And the user waits 5 seconds</td><td><code>@And("the user waits {int} seconds")</code></td><td>int: 5</td></tr>
    <tr><td>Then the price should be 19.99</td><td><code>@Then("the price should be {double}")</code></td><td>double: 19.99</td></tr>
  </tbody>
</table>
<ul class="ans-list green">
  <li><span class="icon">💻</span><strong>Code example — LoginSteps.java:</strong>
    <br><code>@Given("the user is on the login page")</code>
    <br><code>public void navigateToLogin() { driver.get("https://app.com/login"); }</code>
    <br><br><code>@When("the user enters username {string} and password {string}")</code>
    <br><code>public void enterCredentials(String user, String pass) { loginPage.enterUsername(user); loginPage.enterPassword(pass); }</code>
    <br><br><code>@Then("the user should see the dashboard")</code>
    <br><code>public void verifyDashboard() { Assert.assertTrue(driver.getTitle().contains("Dashboard")); }</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 @And and @But annotations</div><p>You can use <code>@And</code> and <code>@But</code> in step definitions, but it is best practice to use <code>@Given</code>, <code>@When</code>, or <code>@Then</code> based on the semantic intent of the step, regardless of what keyword appears in the feature file.</p></div>`
  },
  {
    q: "Explain the structure of a Cucumber Feature file. What are Features, Scenarios, steps, comments, and tags?",
    difficulty: "medium",
    a: `<div class="ans-hero">A Feature file is a plain-text file with a .feature extension that contains one Feature, one or more Scenarios, and Gherkin steps — it is the primary artifact in a Cucumber project.</div>
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
  <li><span class="icon">📄</span><strong>Complete feature file example:</strong>
    <br><code>@regression</code>
    <br><code>Feature: Shopping Cart</code>
    <br><em>As a customer, I want to manage my cart so that I can purchase items</em>
    <br><br><code>Background:</code>
    <br><code>&nbsp;&nbsp;Given the user is logged in as "admin"</code>
    <br><code>&nbsp;&nbsp;And the user is on the shop page</code>
    <br><br><code>@smoke</code>
    <br><code>Scenario: Add item to cart</code>
    <br><code>&nbsp;&nbsp;When the user clicks "Add to Cart" on "Laptop"</code>
    <br><code>&nbsp;&nbsp;Then the cart count should be 1</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 One Feature per file</div><p>Each <code>.feature</code> file should contain <strong>exactly one Feature</strong> and describe one specific area of functionality. Having multiple Features in one file makes tag-based filtering and reporting harder to manage.</p></div>`
  },
  {
    q: "What is a Scenario Outline in Cucumber? How does parameterization work with the Examples table?",
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
  </tbody>
</table>
<ul class="ans-list green">
  <li><span class="icon">📝</span><strong>Feature file structure:</strong>
    <br><code>Scenario Outline: Login with various user types</code>
    <br><code>&nbsp;&nbsp;Given the user is on the login page</code>
    <br><code>&nbsp;&nbsp;When the user enters username "&lt;username&gt;" and password "&lt;password&gt;"</code>
    <br><code>&nbsp;&nbsp;Then the user should see "&lt;expectedMessage&gt;"</code>
    <br><br><code>Examples:</code>
    <br><code>&nbsp;&nbsp;| username          | password  | expectedMessage    |</code>
    <br><code>&nbsp;&nbsp;| admin@test.com    | Admin@123 | Welcome, Admin     |</code>
    <br><code>&nbsp;&nbsp;| user@test.com     | User@123  | Welcome, User      |</code>
    <br><code>&nbsp;&nbsp;| wrong@email.com   | wrong     | Invalid credentials |</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 When to prefer Scenario Outline</div><p>Use Scenario Outline when the <strong>same business flow</strong> needs to be tested with 3 or more data sets. For 1–2 variations, consider separate Scenarios for clarity.</p></div>`
  },
  {
    q: "What are Hooks in Cucumber? Explain @Before, @After, @BeforeStep, @AfterStep, their order of execution, and tagged hooks.",
    difficulty: "medium",
    a: `<div class="ans-hero">Hooks are special methods annotated with @Before, @After, @BeforeStep, or @AfterStep that Cucumber automatically invokes at specific points in the test lifecycle — used for setup (opening browser) and teardown (closing browser, taking screenshots).</div>
<table class="table-light-custom">
  <thead><tr><th>Hook</th><th>Runs</th><th>Typical Use</th></tr></thead>
  <tbody>
    <tr><td><code>@Before</code></td><td>Before each Scenario</td><td>Launch browser, initialize page objects, set up test data</td></tr>
    <tr><td><code>@After</code></td><td>After each Scenario</td><td>Close browser, capture screenshot on failure, clean up data</td></tr>
    <tr><td><code>@BeforeStep</code></td><td>Before each individual step</td><td>Logging, performance timing per step</td></tr>
    <tr><td><code>@AfterStep</code></td><td>After each individual step</td><td>Step-level screenshot, assertion logging</td></tr>
  </tbody>
</table>
<ul class="ans-list blue">
  <li><span class="icon">🔢</span><strong>Execution order</strong> — <code>@Before</code> → <code>@BeforeStep</code> → Step runs → <code>@AfterStep</code> → (repeat for each step) → <code>@After</code>.</li>
  <li><span class="icon">🎯</span><strong>Order attribute</strong> — <code>@Before(order = 1)</code> controls execution order when multiple @Before hooks exist. Lower number runs first.</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">🏷️</span><strong>Tagged hooks — syntax:</strong>
    <br><code>@Before("@smoke")</code> — runs only before scenarios tagged with <code>@smoke</code>
    <br><code>@After("@api")</code> — runs only after scenarios tagged with <code>@api</code>
    <br><code>@Before("@smoke and @regression")</code> — runs only when both tags are present</li>
</ul>
<ul class="ans-list amber">
  <li><span class="icon">💻</span><strong>@After example with screenshot on failure:</strong>
    <br><code>@After public void tearDown(Scenario scenario) {</code>
    <br><code>&nbsp;&nbsp;if (scenario.isFailed()) {</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);</code>
    <br><code>&nbsp;&nbsp;&nbsp;&nbsp;scenario.attach(screenshot, "image/png", "failure");</code>
    <br><code>&nbsp;&nbsp;}</code>
    <br><code>&nbsp;&nbsp;driver.quit();</code>
    <br><code>}</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Hooks vs Background</div><p><strong>Background</strong> runs visible Gherkin steps and appears in reports. <strong>@Before hook</strong> runs Java code invisibly before the scenario starts. Use Background for steps visible to business stakeholders; use @Before for technical infrastructure setup like launching browsers.</p></div>`
  },
  {
    q: "What is @CucumberOptions? Explain every attribute: features, glue, tags, plugin, dryRun, monochrome, strict.",
    difficulty: "medium",
    a: `<div class="ans-hero">@CucumberOptions is a configuration annotation placed on the Runner class that tells Cucumber where to find feature files, where step definitions are, which tags to run, how to format output, and other execution behaviors.</div>
<table class="table-light-custom">
  <thead><tr><th>Attribute</th><th>Type</th><th>Purpose</th><th>Example Value</th></tr></thead>
  <tbody>
    <tr><td><code>features</code></td><td>String[]</td><td>Path(s) to the feature files or folder</td><td>"src/test/resources/features"</td></tr>
    <tr><td><code>glue</code></td><td>String[]</td><td>Package(s) where step definitions and hooks are located</td><td>"com.steps", "com.hooks"</td></tr>
    <tr><td><code>tags</code></td><td>String</td><td>Tag expression to filter which scenarios run</td><td>"@smoke and not @wip"</td></tr>
    <tr><td><code>plugin</code></td><td>String[]</td><td>Report formatters — pretty, html, json, junit, timeline</td><td>"pretty", "html:target/report.html"</td></tr>
    <tr><td><code>dryRun</code></td><td>boolean</td><td>Checks that every step has a matching definition without executing them</td><td>true / false</td></tr>
    <tr><td><code>monochrome</code></td><td>boolean</td><td>Removes ANSI color codes from console output for cleaner CI logs</td><td>true</td></tr>
    <tr><td><code>strict</code></td><td>boolean</td><td>Fails the build if there are any undefined or pending steps</td><td>true</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Multiple glue packages</div><p>If your step definitions are split across multiple packages, provide all packages in the <code>glue</code> array: <code>glue = {"com.login.steps", "com.cart.steps", "com.hooks"}</code>. Cucumber scans all listed packages for annotated methods.</p></div>`
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
    </ul>
  </div>
  <div class="compare-card green">
    <h6>Scenario Outline</h6>
    <ul>
      <li>Data uses &lt;placeholder&gt; syntax</li>
      <li>Executes once per Examples row</li>
      <li>Requires Examples table</li>
      <li>Best for same flow, multiple data sets</li>
      <li>Add new row to Examples for new case</li>
    </ul>
  </div>
</div>
<table class="table-light-custom">
  <thead><tr><th>Criteria</th><th>Choose Scenario</th><th>Choose Scenario Outline</th></tr></thead>
  <tbody>
    <tr><td>Data sets</td><td>1</td><td>3 or more</td></tr>
    <tr><td>Business flow</td><td>Unique to this test</td><td>Identical steps, different data</td></tr>
    <tr><td>Readability</td><td>Better for business reviewers</td><td>Better for data-driven testing</td></tr>
    <tr><td>Maintenance</td><td>Add new Scenario for new case</td><td>Add new row to Examples table</td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Hybrid approach</div><p>You can mix both in the same feature file — use a few concrete Scenarios for the most important "happy path" cases and a Scenario Outline for comprehensive data-driven coverage.</p></div>`
  },
  {
    q: "How do you pass data in Cucumber? Explain inline Gherkin Expressions, Data Tables (List and Map), and DocStrings.",
    difficulty: "hard",
    a: `<div class="ans-hero">Cucumber provides three mechanisms for passing data from feature files to step definitions: inline parameters via Gherkin Expressions (simple values), Data Tables (tabular data), and DocStrings (large multi-line text blocks).</div>
<ul class="ans-list blue">
  <li><span class="icon">1️⃣</span><strong>Inline Gherkin Expressions</strong> — Values embedded directly in the step text and captured with <code>{string}</code>, <code>{int}</code>, <code>{double}</code>, or <code>{word}</code>.
    <br>Feature: <code>When the user adds 3 items to the cart</code>
    <br>Step Def: <code>@When("the user adds {int} items to the cart") public void addItems(int count) { ... }</code></li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">2️⃣</span><strong>Data Tables — as List&lt;Map&lt;String, String&gt;&gt;</strong> — for data with a header row acting as keys.
    <br>Feature: <code>| name | email | role |</code> / <code>| John | john@test.com | Admin |</code>
    <br>Step Def: <code>@Given("users:") public void users(DataTable table) { List&lt;Map&lt;String,String&gt;&gt; users = table.asMaps(String.class, String.class); for (Map&lt;String,String&gt; u : users) { String name = u.get("name"); } }</code></li>
</ul>
<ul class="ans-list purple">
  <li><span class="icon">3️⃣</span><strong>DocStrings</strong> — Multi-line text blocks passed using triple-quote delimiters <code>"""</code>. Used for JSON payloads, XML, HTML, SQL.
    <br>Feature: <code>When the API receives: """ { "user": "admin" } """</code>
    <br>Step Def: <code>@When("the API receives:") public void sendJson(String payload) { apiClient.post("/login", payload); }</code></li>
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
<div class="info-panel tip"><div class="panel-title">💡 DataTable vs Examples table</div><p>The <strong>Examples table</strong> in a Scenario Outline drives multiple executions of the whole scenario. A <strong>Data Table</strong> inside a step passes all its rows as a single parameter to one step method within one scenario execution. These are completely different mechanisms.</p></div>`
  },
  {
    q: "What is the Background keyword in Cucumber? When does it run and how is it different from the @Before hook?",
    difficulty: "easy",
    a: `<div class="ans-hero">Background is a Gherkin keyword that groups common Given steps executed before every Scenario in the same Feature file — it eliminates duplication of setup steps across multiple scenarios.</div>
<ul class="ans-list blue">
  <li><span class="icon">📋</span><strong>Syntax</strong> — Place <code>Background:</code> after the Feature description, before any Scenario. Write only Given steps.</li>
  <li><span class="icon">🔁</span><strong>When it runs</strong> — Before each Scenario in the same Feature file. It runs after any <code>@Before</code> hooks but before the scenario's own steps.</li>
  <li><span class="icon">📄</span><strong>Visible in reports</strong> — Background steps appear in the test report as executed steps. Business stakeholders can see them.</li>
  <li><span class="icon">🚫</span><strong>One per feature</strong> — A feature file can have at most one Background block.</li>
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
<div class="info-panel tip"><div class="panel-title">💡 Execution order</div><p>Full order per scenario: <strong>@Before hook → Background steps → Scenario steps → @After hook</strong>.</p></div>`
  },
  {
    q: "How do Tags work in Cucumber? Explain @tag syntax, running specific tags, tag expressions (and/or/not), and @wip convention.",
    difficulty: "medium",
    a: `<div class="ans-hero">Tags are labels prefixed with @ that annotate Feature or Scenario blocks in Gherkin, allowing you to selectively run or exclude specific subsets of tests without modifying the feature files.</div>
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
  <li><span class="icon">🚧</span><strong>@wip (Work In Progress)</strong> — Convention for scenarios still being developed. Configure in the runner as <code>not @wip</code> to exclude them automatically from CI pipelines.</li>
  <li><span class="icon">🔥</span><strong>@smoke</strong> — Small, fast subset of critical tests run on every build.</li>
  <li><span class="icon">🔁</span><strong>@regression</strong> — Full suite run before releases.</li>
</ul>
<ul class="ans-list amber">
  <li><span class="icon">💻</span><strong>Running from command line (Maven):</strong>
    <br><code>mvn test -Dcucumber.filter.tags="@smoke"</code>
    <br><code>mvn test -Dcucumber.filter.tags="@regression and not @wip"</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Tag inheritance</div><p>Tags are <strong>inherited downward</strong>. If <code>@regression</code> is on the Feature, every Scenario in that file is implicitly tagged <code>@regression</code>. A Scenario's own tags are merged with the Feature's tags.</p></div>`
  },
  {
    q: "How do you generate reports in Cucumber? Explain built-in reporters and how to integrate Extent Reports and Allure.",
    difficulty: "hard",
    a: `<div class="ans-hero">Cucumber supports multiple built-in reporting plugins configured via @CucumberOptions, and can be extended with third-party reporters like Extent Reports and Allure for rich, visually detailed HTML dashboards with charts, screenshots, and history tracking.</div>
<table class="table-light-custom">
  <thead><tr><th>Plugin</th><th>Output</th><th>Best For</th><th>Configuration</th></tr></thead>
  <tbody>
    <tr><td><code>pretty</code></td><td>Colored console output with step details</td><td>Local debugging, quick feedback</td><td>"pretty"</td></tr>
    <tr><td><code>html</code></td><td>Simple built-in HTML report</td><td>Basic shareable report</td><td>"html:target/report.html"</td></tr>
    <tr><td><code>json</code></td><td>JSON file with full test data</td><td>Input for Extent Reports, ReportPortal</td><td>"json:target/cucumber.json"</td></tr>
    <tr><td><code>junit</code></td><td>JUnit-format XML</td><td>CI/CD tools that parse JUnit XML</td><td>"junit:target/junit-report.xml"</td></tr>
    <tr><td><code>timeline</code></td><td>HTML with execution timeline</td><td>Parallel test execution analysis</td><td>"timeline:target/timeline"</td></tr>
  </tbody>
</table>
<ul class="ans-list green">
  <li><span class="icon">📊</span><strong>Extent Reports integration:</strong>
    <br>Add dependency: <code>com.aventstack:extentreports:5.x.x</code>
    <br>Use plugin: <code>"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"</code>
    <br>Create <code>extent.properties</code> in <code>src/test/resources/</code> to configure output path and theme.</li>
</ul>
<ul class="ans-list purple">
  <li><span class="icon">📈</span><strong>Allure Reports integration:</strong>
    <br>Add dependency: <code>io.qameta.allure:allure-cucumber7-jvm:2.x.x</code>
    <br>Add plugin: <code>"io.qameta.allure.cucumber7jvm.AllureCucumber7Jvm"</code>
    <br>Generate: <code>mvn allure:report</code> or <code>allure serve target/allure-results</code>
    <br>Features: Historical trends, flakiness detection, timeline, rich media attachments.</li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Recommended stack</div><p>For enterprise projects: use <strong>json plugin</strong> to produce raw data + <strong>Allure</strong> for trend analysis across builds in Jenkins, or <strong>Extent Reports</strong> for self-contained HTML email attachments. Always generate <strong>junit XML</strong> as well so Jenkins/GitLab CI can mark build pass/fail correctly.</p></div>`
  },
  {
    q: "How do you integrate Cucumber with Selenium WebDriver? Explain project structure, dependencies, and sharing WebDriver between step definition classes.",
    difficulty: "hard",
    a: `<div class="ans-hero">Cucumber + Selenium integration involves a Maven project where feature files describe test scenarios in Gherkin, step definition classes use Selenium WebDriver to perform browser actions, and a shared driver management pattern (ThreadLocal or dependency injection) ensures the driver is accessible across all step definition classes in one scenario.</div>
<ul class="ans-list blue">
  <li><span class="icon">📁</span><strong>Project structure:</strong>
    <br><code>src/test/java/com/stepdefs/</code> — Step definition classes
    <br><code>src/test/java/com/hooks/</code> — Hooks.java (@Before/@After)
    <br><code>src/test/java/com/runner/</code> — TestRunner.java
    <br><code>src/test/java/com/utils/DriverManager.java</code> — ThreadLocal WebDriver helper
    <br><code>src/test/java/com/pages/</code> — Page Object Model classes
    <br><code>src/test/resources/features/</code> — .feature files</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">📦</span><strong>Key Maven dependencies (pom.xml):</strong>
    <br><code>io.cucumber:cucumber-java:7.x.x</code>
    <br><code>io.cucumber:cucumber-testng:7.x.x</code>
    <br><code>org.seleniumhq.selenium:selenium-java:4.x.x</code>
    <br><code>io.github.bonigarcia:webdrivermanager:5.x.x</code></li>
</ul>
<ul class="ans-list purple">
  <li><span class="icon">🔧</span><strong>DriverManager.java — ThreadLocal pattern:</strong>
    <br><code>public class DriverManager {</code>
    <br><code>&nbsp;&nbsp;private static ThreadLocal&lt;WebDriver&gt; driver = new ThreadLocal&lt;&gt;();</code>
    <br><code>&nbsp;&nbsp;public static WebDriver getDriver() { return driver.get(); }</code>
    <br><code>&nbsp;&nbsp;public static void setDriver(WebDriver d) { driver.set(d); }</code>
    <br><code>&nbsp;&nbsp;public static void quitDriver() { driver.get().quit(); driver.remove(); }</code>
    <br><code>}</code></li>
  <li><span class="icon">🪝</span><strong>Hooks.java:</strong>
    <br><code>@Before public void setUp() { WebDriverManager.chromedriver().setup(); WebDriver d = new ChromeDriver(); d.manage().window().maximize(); DriverManager.setDriver(d); }</code>
    <br><code>@After public void tearDown(Scenario s) { if(s.isFailed()) { /* attach screenshot */ } DriverManager.quitDriver(); }</code></li>
</ul>
<div class="info-panel tip"><div class="panel-title">💡 Why ThreadLocal?</div><p>When Cucumber scenarios run in <strong>parallel</strong>, each thread needs its own WebDriver instance. A plain <code>static WebDriver driver</code> is shared across threads and causes race conditions. <strong>ThreadLocal</strong> ensures each thread gets its own independent driver instance.</p></div>`
  },
  {
    q: "What is the Cucumber Runner class? Explain @RunWith(Cucumber.class), @CucumberOptions placement, and how Cucumber discovers feature files and glue code.",
    difficulty: "medium",
    a: `<div class="ans-hero">The Runner class is a special Java class that acts as the entry point for Cucumber test execution — it uses @RunWith(Cucumber.class) (for JUnit) or extends AbstractTestNGCucumberTests (for TestNG) and carries the @CucumberOptions annotation that tells Cucumber where to find feature files and step definitions.</div>
<ul class="ans-list blue">
  <li><span class="icon">📦</span><strong>JUnit 4 Runner:</strong> <code>@RunWith(Cucumber.class)</code> annotation + <code>@CucumberOptions</code> on the same class. Class body is empty.</li>
  <li><span class="icon">📦</span><strong>TestNG Runner:</strong> Extend <code>AbstractTestNGCucumberTests</code> — no @RunWith needed. <code>@CucumberOptions</code> still placed on the class. Override <code>scenarios()</code> with <code>@DataProvider(parallel = true)</code> to enable parallel execution.</li>
</ul>
<ul class="ans-list green">
  <li><span class="icon">🔍</span><strong>Feature file discovery:</strong>
    <br>Cucumber reads the <code>features</code> attribute in @CucumberOptions.
    <br>If it is a directory path, Cucumber recursively scans all <code>.feature</code> files inside it.
    <br>Appending <code>:lineNumber</code> (e.g., <code>login.feature:12</code>) runs only the scenario at that line.</li>
  <li><span class="icon">🔍</span><strong>Glue code discovery:</strong>
    <br>Cucumber scans all classes in the packages listed in the <code>glue</code> attribute.
    <br>Any method annotated with <code>@Given</code>, <code>@When</code>, <code>@Then</code>, <code>@Before</code>, <code>@After</code> etc. is registered.
    <br>If <code>glue</code> points to a parent package, all sub-packages are also scanned automatically.</li>
</ul>
<table class="table-light-custom">
  <thead><tr><th>Framework</th><th>Runner Annotation</th><th>Base Class</th></tr></thead>
  <tbody>
    <tr><td>JUnit 4</td><td><code>@RunWith(Cucumber.class)</code></td><td>None required</td></tr>
    <tr><td>JUnit 5</td><td><code>@Suite + @SelectPackages</code></td><td>None required</td></tr>
    <tr><td>TestNG</td><td>Not needed</td><td><code>AbstractTestNGCucumberTests</code></td></tr>
  </tbody>
</table>
<div class="info-panel tip"><div class="panel-title">💡 Multiple Runner classes</div><p>You can have multiple Runner classes in the same project — one for smoke tests (<code>SmokeTestRunner</code> with <code>tags = "@smoke"</code>) and one for regression (<code>RegressionTestRunner</code> with <code>tags = "@regression"</code>). This lets you trigger different test suites from different CI pipeline stages.</p></div>`
  },

  // ── Cucumber & BDD Deep Dive ──────────────────────────────────
  { difficulty: 'easy', q: "What is the difference between Scenario and Scenario Outline in Cucumber?",
    a: `<div class="ans-hero">Scenario runs once with fixed data. Scenario Outline is a template that runs once per row in the Examples table — used for data-driven testing.</div>
    <table class="comparison-table">
      <thead><tr><th>Aspect</th><th>Scenario</th><th>Scenario Outline</th></tr></thead>
      <tbody>
        <tr><td>Data</td><td>Hardcoded inline</td><td>From Examples table (placeholders in &lt;&gt;)</td></tr>
        <tr><td>Runs</td><td>Once</td><td>Once per row in Examples</td></tr>
        <tr><td>Use case</td><td>Single unique test</td><td>Same flow, multiple datasets</td></tr>
        <tr><td>Report entries</td><td>1 scenario</td><td>N scenarios (one per row)</td></tr>
      </tbody>
    </table>
    <div class="code-block"><code>Scenario Outline: Login with different roles
  Given user logs in as "&lt;role&gt;" with "&lt;password&gt;"
  Then user should see "&lt;page&gt;"

  Examples:
    | role    | password  | page      |
    | admin   | Admin@123 | dashboard |
    | manager | Mgr@123   | reports   |</code></div>` },

  { difficulty: 'easy', q: "What is the Background keyword in Cucumber and when should you use it?",
    a: `<div class="ans-hero">Background contains Gherkin steps that run before EVERY scenario in the feature file. Use it to extract repeated preconditions shared by all scenarios.</div>
    <div class="compare-grid">
      <div class="compare-card red"><h6>Without Background (repetitive)</h6>Every scenario starts with "Given user opens app" — duplicated across 10 scenarios.</div>
      <div class="compare-card green"><h6>With Background (clean)</h6>Background: Given user opens app → runs before each scenario automatically.</div>
    </div>
    <div class="info-panel warning"><div class="panel-title">Background vs @Before Hook</div><p>Background = Gherkin steps (visible in report, business-readable). @Before Hook = Java code (invisible in report, for technical setup like opening browser).</p></div>` },

  { difficulty: 'easy', q: "What are Cucumber Tags? How do you run specific scenarios using tags?",
    a: `<div class="ans-hero">Tags are labels (@smoke, @regression) placed above Feature or Scenario. You filter which scenarios to run via @CucumberOptions(tags) or Maven command.</div>
    <div class="code-block"><code><span class="cm">// Feature file:</span>
<span class="kw">@smoke</span>
Scenario: Successful login

<span class="cm">// Runner:</span>
<span class="kw">@CucumberOptions</span>(tags = <span class="st">"@smoke"</span>)

<span class="cm">// Combined:</span>
tags = <span class="st">"@regression and not @wip"</span>

<span class="cm">// Maven CI:</span>
mvn test -Dcucumber.filter.tags=<span class="st">"@smoke"</span></code></div>` },

  { difficulty: 'medium', q: "What is the difference between a Data Table and Scenario Outline in Cucumber?",
    a: `<div class="ans-hero">Scenario Outline runs the scenario multiple times (once per row). Data Table passes all rows to a SINGLE step at once — the scenario runs only once.</div>
    <table class="comparison-table">
      <thead><tr><th>Aspect</th><th>Scenario Outline + Examples</th><th>Data Table</th></tr></thead>
      <tbody>
        <tr><td>Execution count</td><td>N times (one per Examples row)</td><td>Once — all rows in one step</td></tr>
        <tr><td>Java type</td><td>String/int parameters in method</td><td>DataTable → List&lt;Map&lt;String,String&gt;&gt;</td></tr>
        <tr><td>Use for</td><td>Repeating a scenario with different inputs</td><td>Passing multi-row structured data to one step</td></tr>
        <tr><td>Example</td><td>Login with 5 different users</td><td>Add 5 beneficiaries at once</td></tr>
      </tbody>
    </table>
    <div class="code-block"><code><span class="cm">// Data Table step definition:</span>
<span class="kw">@When</span>(<span class="st">"customer adds the following beneficiaries:"</span>)
<span class="kw">public void</span> <span class="fn">addBeneficiaries</span>(<span class="cl">DataTable</span> dt) {
  List&lt;Map&lt;String, String&gt;&gt; rows = dt.<span class="fn">asMaps</span>(String.class, String.class);
  rows.<span class="fn">forEach</span>(row -> beneficiaryPage.<span class="fn">add</span>(row.<span class="fn">get</span>(<span class="st">"name"</span>), row.<span class="fn">get</span>(<span class="st">"account"</span>)));
}</code></div>` },

  { difficulty: 'medium', q: "What are Cucumber Expressions and how do they differ from Regular Expressions?",
    a: `<div class="ans-hero">Cucumber Expressions use typed placeholders ({string}, {int}, {double}, {word}) to capture step parameters — more readable and type-safe than raw regex. Regex uses (.*) or (\\d+) which is harder to read.</div>
    <table class="comparison-table">
      <thead><tr><th>Type</th><th>Cucumber Expression</th><th>Regex Equivalent</th></tr></thead>
      <tbody>
        <tr><td>Quoted text</td><td>{string}</td><td>"([^"]*)"</td></tr>
        <tr><td>Integer</td><td>{int}</td><td>(\\d+)</td></tr>
        <tr><td>Decimal</td><td>{double}</td><td>(\\d+\\.\\d+)</td></tr>
        <tr><td>Single word</td><td>{word}</td><td>(\\S+)</td></tr>
        <tr><td>Any text</td><td>(.*) — regex only</td><td>(.*)</td></tr>
      </tbody>
    </table>
    <div class="code-block"><code><span class="cm">// Cucumber Expression (preferred):</span>
<span class="kw">@When</span>(<span class="st">"customer transfers {int} to account {string}"</span>)
<span class="kw">public void</span> <span class="fn">transfer</span>(<span class="kw">int</span> amount, <span class="cl">String</span> account) { ... }

<span class="cm">// Regex (harder to read):</span>
<span class="kw">@When</span>(<span class="st">"customer transfers (\\d+) to account \\"([^\\"]*)\\"" </span>)</code></div>` },

  { difficulty: 'medium', q: "How do you share state (data) between step definition files in Cucumber?",
    a: `<div class="ans-hero">Cucumber creates a new instance of each step definition class per scenario. Share data using: (1) a shared context/state POJO injected via PicoContainer dependency injection, or (2) a static thread-local variable, or (3) Scenario object via hooks.</div>
    <div class="code-block"><code><span class="cm">// Option 1 — PicoContainer (recommended)</span>
<span class="cm">// pom.xml: add cucumber-picocontainer dependency</span>

<span class="kw">public class</span> <span class="cl">ScenarioContext</span> {
  <span class="kw">public</span> <span class="cl">String</span> referenceNumber;
  <span class="kw">public</span> <span class="cl">String</span> loggedInUser;
}

<span class="kw">public class</span> <span class="cl">LoginSteps</span> {
  <span class="kw">private final</span> <span class="cl">ScenarioContext</span> ctx;
  <span class="kw">public</span> <span class="fn">LoginSteps</span>(<span class="cl">ScenarioContext</span> ctx) { <span class="kw">this</span>.ctx = ctx; }
  <span class="kw">@When</span>(<span class="st">"user logs in"</span>)
  <span class="kw">public void</span> <span class="fn">login</span>() { ctx.loggedInUser = <span class="st">"karan"</span>; }
}

<span class="kw">public class</span> <span class="cl">DashboardSteps</span> {
  <span class="kw">private final</span> <span class="cl">ScenarioContext</span> ctx;
  <span class="kw">public</span> <span class="fn">DashboardSteps</span>(<span class="cl">ScenarioContext</span> ctx) { <span class="kw">this</span>.ctx = ctx; }
  <span class="kw">@Then</span>(<span class="st">"welcome message is shown"</span>)
  <span class="kw">public void</span> <span class="fn">verify</span>() { Assert.<span class="fn">assertEquals</span>(ctx.loggedInUser, <span class="st">"karan"</span>); }
}</code></div>` },

  { difficulty: 'medium', q: "What is dryRun in Cucumber @CucumberOptions? When and why do you use it?",
    a: `<div class="ans-hero">dryRun = true validates all Gherkin step mappings without executing any browser/test code. Use it after writing new feature files to verify every step is matched before running.</div>
    <div class="compare-grid">
      <div class="compare-card red"><h6>dryRun = false (default)</h6>Executes tests. Undefined step fails at runtime after partial execution, wasting time.</div>
      <div class="compare-card green"><h6>dryRun = true</h6>Checks all step mappings in seconds. "Undefined step: customer clicks Confirm" flagged immediately — no browser opened.</div>
    </div>
    <div class="info-panel tip"><div class="panel-title">Workflow</div><p>Write feature file → run dryRun=true → fix all undefined steps → set dryRun=false → run full suite. Saves hours of debugging incomplete frameworks.</p></div>` },

  { difficulty: 'medium', q: "How do Cucumber Hooks work? Explain @Before, @After, @BeforeAll, @AfterAll with order and tag-specific usage.",
    a: `<div class="ans-hero">Hooks are Java methods that run automatically at scenario lifecycle points — @Before before each scenario, @After after each scenario. They handle driver setup, teardown, and screenshots.</div>
    <table class="comparison-table">
      <thead><tr><th>Hook</th><th>Runs</th><th>Common Use</th></tr></thead>
      <tbody>
        <tr><td>@BeforeAll</td><td>Once before the entire suite</td><td>Start test server, setup DB</td></tr>
        <tr><td>@Before</td><td>Before each scenario</td><td>Open browser, navigate to URL</td></tr>
        <tr><td>@Before("@api")</td><td>Before each @api-tagged scenario only</td><td>Set up REST headers, auth token</td></tr>
        <tr><td>@After</td><td>After each scenario</td><td>Screenshot on fail, quit driver</td></tr>
        <tr><td>@AfterAll</td><td>Once after the entire suite</td><td>Send email report, clean DB</td></tr>
      </tbody>
    </table>
    <div class="code-block"><code><span class="kw">@After</span>(<span class="kw">order</span> = 1)  <span class="cm">// lower order = runs LATER</span>
<span class="kw">public void</span> <span class="fn">takeScreenshot</span>(<span class="cl">Scenario</span> s) {
  <span class="kw">if</span>(s.<span class="fn">isFailed</span>()) {
    <span class="kw">byte</span>[] img = ((<span class="cl">TakesScreenshot</span>) driver).<span class="fn">getScreenshotAs</span>(<span class="cl">OutputType</span>.BYTES);
    s.<span class="fn">attach</span>(img, <span class="st">"image/png"</span>, <span class="st">"failure"</span>);
  }
}</code></div>` },

  { difficulty: 'hard', q: "How do you implement parallel execution in Cucumber + TestNG? What issues arise and how do you fix them?",
    a: `<div class="ans-hero">Override scenarios() with @DataProvider(parallel=true) in the Runner class. Scenarios run concurrently in multiple threads. Issues: shared WebDriver state, shared step definition fields, and database conflicts.</div>
    <div class="code-block"><code><span class="kw">@Override</span>
<span class="kw">@DataProvider</span>(parallel = <span class="kw">true</span>)
<span class="kw">public</span> Object[][] <span class="fn">scenarios</span>() { <span class="kw">return super</span>.<span class="fn">scenarios</span>(); }</code></div>
    <table class="comparison-table">
      <thead><tr><th>Issue</th><th>Root Cause</th><th>Fix</th></tr></thead>
      <tbody>
        <tr><td>One browser for all threads</td><td>static WebDriver field</td><td>ThreadLocal&lt;WebDriver&gt; in DriverManager</td></tr>
        <tr><td>Step def fields shared</td><td>Instance vars shared between threads</td><td>PicoContainer DI or method-local vars</td></tr>
        <tr><td>Test data conflict</td><td>Two threads use same account number</td><td>Unique test data per thread (thread-ID suffix)</td></tr>
        <tr><td>DB state conflict</td><td>Two threads insert same record</td><td>Isolated test schemas or rollback per scenario</td></tr>
      </tbody>
    </table>` },

  { difficulty: 'hard', q: "How do you re-run only failed Cucumber scenarios in a CI pipeline?",
    a: `<div class="ans-hero">Add the rerun plugin to the main Runner — it writes failed scenario file:line paths to a .txt file. A second FailedTestRunner reads that file and re-runs only those scenarios.</div>
    <div class="code-block"><code><span class="cm">// Step 1 — main Runner generates rerun.txt</span>
<span class="kw">@CucumberOptions</span>(
  plugin = { <span class="st">"rerun:target/rerun.txt"</span> }
)
<span class="kw">public class</span> <span class="cl">TestRunner</span> <span class="kw">extends</span> <span class="cl">AbstractTestNGCucumberTests</span> {}

<span class="cm">// Step 2 — FailedTestRunner reads rerun.txt</span>
<span class="kw">@CucumberOptions</span>(
  features = <span class="st">"@target/rerun.txt"</span>
)
<span class="kw">public class</span> <span class="cl">FailedTestRunner</span> <span class="kw">extends</span> <span class="cl">AbstractTestNGCucumberTests</span> {}

<span class="cm">// Jenkinsfile:</span>
sh <span class="st">"mvn test -Drunner=TestRunner"</span>
sh <span class="st">"mvn test -Drunner=FailedTestRunner || true"</span></code></div>
    <div class="info-panel tip"><div class="panel-title">Why this matters</div><p>In a 500-scenario suite with 3 flaky tests, the rerun runner takes 2 minutes instead of re-running the full 2-hour suite.</p></div>` },

  { difficulty: 'hard', q: "How do you integrate Cucumber with Extent Reports? What is the setup?",
    a: `<div class="ans-hero">Add the ExtentCucumberAdapter plugin to @CucumberOptions. It reads scenario pass/fail data and generates a rich visual HTML dashboard with charts, step details, and screenshots.</div>
    <div class="code-block"><code><span class="cm">// pom.xml:</span>
&lt;dependency&gt;
  &lt;groupId&gt;com.aventstack&lt;/groupId&gt;
  &lt;artifactId&gt;extentreports-cucumber7-adapter&lt;/artifactId&gt;
  &lt;version&gt;1.14.0&lt;/version&gt;
&lt;/dependency&gt;

<span class="cm">// @CucumberOptions plugin:</span>
plugin = { <span class="st">"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"</span> }

<span class="cm">// extent.properties (src/test/resources):</span>
extent.reporter.spark.start=true
extent.reporter.spark.out=target/SparkReport.html
screenshot.dir=target/screenshots/
screenshot.rel.path=../screenshots/</code></div>
    <div class="info-panel tip"><div class="panel-title">Result</div><p>After execution, open target/SparkReport.html — shows pie chart of pass/fail, timeline, each scenario with all steps expanded, and failure screenshots embedded inline.</p></div>` },

  { difficulty: 'hard', q: "How do you test REST APIs using Cucumber with Rest Assured?",
    a: `<div class="ans-hero">Write Gherkin scenarios describing the API request and expected response. Step definitions use Rest Assured DSL to send HTTP requests and validate status codes, response bodies, and headers.</div>
    <div class="code-block"><code><span class="cm">// Feature file:</span>
<span class="kw">@api</span>
Scenario: Fund transfer API returns 200
  <span class="kw">Given</span> base URL is "https://bankapp.com/api"
  <span class="kw">When</span> POST to "/transfer" with amount 5000 and account "9876543210"
  <span class="kw">Then</span> status code should be 200
  <span class="kw">And</span> response should contain "SUCCESS"

<span class="cm">// Step definition:</span>
<span class="kw">@When</span>(<span class="st">"POST to {string} with amount {int} and account {string}"</span>)
<span class="kw">public void</span> <span class="fn">postTransfer</span>(<span class="cl">String</span> endpoint, <span class="kw">int</span> amount, <span class="cl">String</span> account) {
  response = <span class="fn">given</span>()
    .<span class="fn">contentType</span>(<span class="st">"application/json"</span>)
    .<span class="fn">header</span>(<span class="st">"Authorization"</span>, <span class="st">"Bearer "</span> + token)
    .<span class="fn">body</span>(Map.<span class="fn">of</span>(<span class="st">"amount"</span>, amount, <span class="st">"account"</span>, account))
    .<span class="fn">when</span>().<span class="fn">post</span>(endpoint);
}

<span class="kw">@Then</span>(<span class="st">"status code should be {int}"</span>)
<span class="kw">public void</span> <span class="fn">verifyStatus</span>(<span class="kw">int</span> code) {
  Assert.<span class="fn">assertEquals</span>(response.<span class="fn">getStatusCode</span>(), code);
}</code></div>` },

  { difficulty: 'hard', q: "You have a Cucumber BDD framework. How do you handle test data management for a banking application?",
    a: `<div class="ans-hero">Layer test data by source: inline Examples tables for simple variations, DataTable for multi-field data, config.properties for environment settings, and ExcelReader utility for large business-owned datasets.</div>
    <table class="comparison-table">
      <thead><tr><th>Source</th><th>Best for</th><th>How to access</th></tr></thead>
      <tbody>
        <tr><td>Examples table</td><td>5–10 scenario variations</td><td>Placeholders in &lt;&gt; map to method params</td></tr>
        <tr><td>DataTable inline</td><td>Multi-field data for one step</td><td>DataTable.asMaps() in step def</td></tr>
        <tr><td>config.properties</td><td>URLs, browser, credentials</td><td>Properties p = new Properties(); p.load(...)</td></tr>
        <tr><td>Excel (Apache POI)</td><td>Large datasets shared with BA team</td><td>ExcelReader.getData(sheet, row, col)</td></tr>
        <tr><td>API / DB seed</td><td>Pre-existing dependent data</td><td>@Before hook calls API or DB to create data</td></tr>
      </tbody>
    </table>` },

  { difficulty: 'hard', q: "How do you design a Cucumber framework for an enterprise banking application from scratch?",
    a: `<div class="ans-hero">Design in layers: feature files define behavior, step definitions call page objects, hooks handle setup/teardown, utilities handle cross-cutting concerns, and the runner ties it together with tags and plugins.</div>
    <div class="code-block"><code>BankingCucumberFramework/
├── features/          <span class="cm">← Login.feature, Transfer.feature, etc.</span>
├── stepDefinitions/   <span class="cm">← LoginSteps.java, TransferSteps.java (thin)</span>
├── pages/             <span class="cm">← LoginPage.java, DashboardPage.java (Selenium here)</span>
├── hooks/             <span class="cm">← Hooks.java (@Before init, @After screenshot+quit)</span>
├── context/           <span class="cm">← ScenarioContext.java (PicoContainer DI state sharing)</span>
├── utilities/         <span class="cm">← DriverManager.java, ConfigReader.java, ExcelReader.java</span>
├── runners/           <span class="cm">← TestRunner.java, SmokeRunner.java, FailedTestRunner.java</span>
└── resources/
    ├── features/      <span class="cm">← .feature files</span>
    └── config.properties</code></div>
    <ul class="ans-list green">
      <li><span class="icon">✅</span><strong>Step defs call page methods</strong> — never Selenium directly</li>
      <li><span class="icon">✅</span><strong>ThreadLocal WebDriver</strong> — parallel execution safe</li>
      <li><span class="icon">✅</span><strong>Tags per module</strong> — @smoke, @login, @transfer, @api</li>
      <li><span class="icon">✅</span><strong>rerun.txt</strong> — retry only failed scenarios in CI</li>
    </ul>` }
  ],

  // ── PLAYWRIGHT ────────────────────────────────────────────────
  playwright: [

    // ── EASY ──────────────────────────────────────────────────
    { difficulty: 'easy', q: "What is Playwright? How is it different from Selenium?",
      a: `<div class="ans-hero">Playwright is a Microsoft-backed, modern end-to-end testing framework that drives Chromium, Firefox, and WebKit via a single API. It was built for the modern web — auto-waiting, network interception, and multi-browser support are first-class features.</div>
      <table class="comparison-table">
        <thead><tr><th>Aspect</th><th>Playwright</th><th>Selenium</th></tr></thead>
        <tbody>
          <tr><td>Protocol</td><td>CDP / WebSocket (direct)</td><td>WebDriver protocol (HTTP)</td></tr>
          <tr><td>Auto-waiting</td><td>Built-in — waits for actionability automatically</td><td>Explicit waits required</td></tr>
          <tr><td>Browsers</td><td>Chromium, Firefox, WebKit (Safari)</td><td>Chrome, Firefox, Edge, Safari</td></tr>
          <tr><td>Languages</td><td>TypeScript, JavaScript, Python, Java, C#</td><td>Java, Python, JS, C#, Ruby</td></tr>
          <tr><td>Network</td><td>page.route() — intercept/mock natively</td><td>BrowserMob Proxy needed</td></tr>
          <tr><td>Parallel</td><td>Workers + sharding built-in</td><td>Grid or TestNG/JUnit needed</td></tr>
          <tr><td>Flakiness</td><td>Very low — web-first assertions + auto-retry</td><td>Higher — manual waits, no auto-retry</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'easy', q: "What browsers does Playwright support? How do you run a test on a specific browser?",
      a: `<div class="ans-hero">Playwright ships with Chromium, Firefox, and WebKit (Safari engine). Run tests on a specific browser via the projects array in playwright.config.ts or the --browser CLI flag.</div>
      <div class="code-block"><code><span class="cm">// playwright.config.ts — run on all 3 browsers:</span>
<span class="kw">export default</span> defineConfig({
  projects: [
    { name: <span class="st">'chromium'</span>, use: { ...devices[<span class="st">'Desktop Chrome'</span>] } },
    { name: <span class="st">'firefox'</span>,  use: { ...devices[<span class="st">'Desktop Firefox'</span>] } },
    { name: <span class="st">'webkit'</span>,   use: { ...devices[<span class="st">'Desktop Safari'</span>] } },
  ]
});

<span class="cm">// CLI — single browser:</span>
npx playwright test --project=chromium
npx playwright test --project=firefox</code></div>` },

    { difficulty: 'easy', q: "What are Playwright locators? List the main locator strategies.",
      a: `<div class="ans-hero">Playwright locators represent elements on the page. They are lazy (evaluated at the time of action), auto-waiting, and retry-able. Prefer user-facing locators over CSS/XPath.</div>
      <table class="comparison-table">
        <thead><tr><th>Locator</th><th>Use for</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>getByRole()</td><td>ARIA roles — most resilient</td><td>page.getByRole('button', { name: 'Login' })</td></tr>
          <tr><td>getByText()</td><td>Visible text content</td><td>page.getByText('Welcome, Karan')</td></tr>
          <tr><td>getByLabel()</td><td>Form field associated with label</td><td>page.getByLabel('Username')</td></tr>
          <tr><td>getByPlaceholder()</td><td>Input placeholder text</td><td>page.getByPlaceholder('Enter email')</td></tr>
          <tr><td>getByTestId()</td><td>data-testid attribute</td><td>page.getByTestId('transfer-btn')</td></tr>
          <tr><td>locator(css/xpath)</td><td>CSS selector or XPath</td><td>page.locator('#loginBtn')</td></tr>
          <tr><td>getByAltText()</td><td>Image alt text</td><td>page.getByAltText('Bank logo')</td></tr>
        </tbody>
      </table>
      <div class="info-panel tip"><div class="panel-title">Priority order</div><p>getByRole → getByLabel → getByPlaceholder → getByTestId → locator(css). Prefer user-visible attributes — they survive UI refactors better than CSS selectors.</p></div>` },

    { difficulty: 'easy', q: "What is auto-waiting in Playwright? Why does it reduce flakiness?",
      a: `<div class="ans-hero">Playwright automatically waits for an element to be actionable before performing any action — visible, enabled, stable, not overlapped, and attached to the DOM. You never need explicit Thread.sleep() or manual waits for normal interactions.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Attached</div><div class="step-desc">Element must exist in the DOM — not detached or removed</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Visible</div><div class="step-desc">Not hidden (display:none, visibility:hidden) — must be renderable</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Stable</div><div class="step-desc">Not animating or moving — position stable for 2 consecutive frames</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Enabled</div><div class="step-desc">Not disabled — button, input, select must accept interaction</div></div></div>
        <div class="step-item"><div class="step-num">5</div><div class="step-content"><div class="step-title">Receives events</div><div class="step-desc">No other element overlapping and intercepting pointer events</div></div></div>
      </div>
      <div class="info-panel tip"><div class="panel-title">Default timeout</div><p>Auto-waiting retries for up to 30 seconds (default). Set globally in playwright.config.ts: <code>actionTimeout: 10_000</code>. No manual waits needed for 95% of interactions.</p></div>` },

    { difficulty: 'easy', q: "What is the difference between page.fill() and page.type() in Playwright?",
      a: `<div class="ans-hero">page.fill() replaces the entire field value instantly. page.type() simulates real key-by-key typing, firing keydown/keypress/keyup events for each character — needed only for apps that react to individual keystrokes.</div>
      <table class="comparison-table">
        <thead><tr><th>Method</th><th>Behaviour</th><th>Use when</th></tr></thead>
        <tbody>
          <tr><td>locator.fill('text')</td><td>Clears field, sets value, fires input/change. Fast.</td><td>Standard form inputs — username, amount, email</td></tr>
          <tr><td>locator.pressSequentially('text')</td><td>Types char-by-char, fires full keyboard event suite per key</td><td>Autocomplete dropdowns, search with live suggestions, apps with keystroke listeners</td></tr>
          <tr><td>locator.clear()</td><td>Clears field without typing new value</td><td>Reset field before a new fill()</td></tr>
        </tbody>
      </table>
      <div class="code-block"><code><span class="cm">// Standard — fast:</span>
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Amount'</span>).<span class="fn">fill</span>(<span class="st">'5000'</span>);

<span class="cm">// Keystroke-by-keystroke (for autocomplete):</span>
<span class="kw">await</span> page.<span class="fn">getByPlaceholder</span>(<span class="st">'Search beneficiary'</span>).<span class="fn">pressSequentially</span>(<span class="st">'Rahul'</span>);</code></div>` },

    { difficulty: 'easy', q: "What is a BrowserContext in Playwright? How is it different from a Browser?",
      a: `<div class="ans-hero">Browser is the browser process (one Chrome/Firefox instance). BrowserContext is an isolated session inside the browser — separate cookies, localStorage, and cache. Think of it as a fresh Incognito window inside the same process.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Browser (process)</h6>One running Chrome instance. All contexts share the same browser process — fast. Opening a new browser = heavy, slow, expensive.</div>
        <div class="compare-card green"><h6>BrowserContext (session)</h6>Isolated cookie jar, localStorage, auth state. Multiple contexts in one browser = parallel isolated sessions. Light, fast to create.</div>
      </div>
      <div class="code-block"><code><span class="cm">// Admin and customer tests share one browser process:</span>
<span class="kw">const</span> browser = <span class="kw">await</span> chromium.<span class="fn">launch</span>();
<span class="kw">const</span> adminCtx  = <span class="kw">await</span> browser.<span class="fn">newContext</span>({ storageState: <span class="st">'auth/admin.json'</span> });
<span class="kw">const</span> custCtx   = <span class="kw">await</span> browser.<span class="fn">newContext</span>({ storageState: <span class="st">'auth/customer.json'</span> });
<span class="cm">// Completely isolated sessions — no cookie bleed between them</span></code></div>` },

    { difficulty: 'easy', q: "What is storageState in Playwright? What problem does it solve?",
      a: `<div class="ans-hero">storageState saves a BrowserContext's cookies, localStorage, and sessionStorage to a JSON file. Tests load it at startup — they start already logged in, skipping the login UI flow for every test. Cuts suite time by 20–40%.</div>
      <div class="code-block"><code><span class="cm">// auth.setup.ts — runs ONCE before all tests:</span>
<span class="kw">import</span> { test <span class="kw">as</span> setup } <span class="kw">from</span> <span class="st">'@playwright/test'</span>;

setup(<span class="st">'authenticate'</span>, <span class="kw">async</span> ({ page }) => {
  <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/login'</span>);
  <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Username'</span>).<span class="fn">fill</span>(<span class="st">'karan@bankapp.com'</span>);
  <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Password'</span>).<span class="fn">fill</span>(<span class="st">'Secure@1234'</span>);
  <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Login'</span> }).<span class="fn">click</span>();
  <span class="kw">await</span> page.<span class="fn">context</span>().<span class="fn">storageState</span>({ path: <span class="st">'auth/user.json'</span> });
});

<span class="cm">// All other tests use it — no login needed:</span>
use: { storageState: <span class="st">'auth/user.json'</span> }</code></div>` },

    { difficulty: 'easy', q: "What is the difference between expect(locator).toBeVisible() and locator.isVisible()?",
      a: `<div class="ans-hero">expect().toBeVisible() is a web-first assertion — it retries until the condition is met or times out. locator.isVisible() is an instant check — it returns true/false at that exact moment without waiting.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>locator.isVisible() — snapshot</h6><code>const visible = await page.locator('.spinner').isVisible();</code><br>Returns immediately. If spinner just appeared 10ms later, returns false. Use only for immediate state checks.</div>
        <div class="compare-card green"><h6>expect().toBeVisible() — waiting</h6><code>await expect(page.locator('.dashboard')).toBeVisible();</code><br>Retries every 100ms until element appears (up to timeout). Correct choice for post-navigation, post-click assertions.</div>
      </div>` },

    { difficulty: 'easy', q: "How do you take a screenshot in Playwright? What are the different screenshot options?",
      a: `<div class="ans-hero">Use page.screenshot() for full-page or viewport screenshots. Use locator.screenshot() for element-specific screenshots. Screenshots can be saved to file, returned as Buffer, or attached to test reports.</div>
      <div class="code-block"><code><span class="cm">// Full page screenshot:</span>
<span class="kw">await</span> page.<span class="fn">screenshot</span>({ path: <span class="st">'reports/dashboard.png'</span>, fullPage: <span class="kw">true</span> });

<span class="cm">// Viewport only:</span>
<span class="kw">await</span> page.<span class="fn">screenshot</span>({ path: <span class="st">'viewport.png'</span> });

<span class="cm">// Specific element:</span>
<span class="kw">await</span> page.<span class="fn">getByTestId</span>(<span class="st">'balance-card'</span>).<span class="fn">screenshot</span>({ path: <span class="st">'balance.png'</span> });

<span class="cm">// As Buffer (attach to Playwright report):</span>
<span class="kw">const</span> buf = <span class="kw">await</span> page.<span class="fn">screenshot</span>();
<span class="kw">await</span> testInfo.<span class="fn">attach</span>(<span class="st">'screenshot'</span>, { body: buf, contentType: <span class="st">'image/png'</span> });

<span class="cm">// playwright.config.ts — auto on failure:</span>
screenshot: <span class="st">'only-on-failure'</span></code></div>` },

    { difficulty: 'easy', q: "What are soft assertions in Playwright? When do you use them?",
      a: `<div class="ans-hero">Soft assertions (expect.soft()) do not stop test execution on failure — the test continues to collect all failures, then fails at the end with all issues reported together. Use when you want to validate multiple fields in one test run.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Regular assertion — stops immediately</h6><code>await expect(page.getByTestId('name')).toHaveText('Karan'); // fails here<br>// lines below never run</code></div>
        <div class="compare-card green"><h6>Soft assertion — collects all failures</h6><code>await expect.soft(page.getByTestId('name')).toHaveText('Karan');<br>await expect.soft(page.getByTestId('balance')).toHaveText('₹50,000');<br>await expect.soft(page.getByTestId('status')).toHaveText('Active');<br>// All 3 checked — report shows all failures</code></div>
      </div>
      <div class="info-panel tip"><div class="panel-title">Best use case</div><p>Dashboard verification tests where you want to validate 10+ UI fields in one pass. One failing field shouldn't hide problems in the other 9.</p></div>` },

    { difficulty: 'easy', q: "How do you handle dropdowns in Playwright?",
      a: `<div class="ans-hero">Use locator.selectOption() for native HTML &lt;select&gt; elements. For custom dropdowns (div-based), click to open and then click the option by text or role.</div>
      <div class="code-block"><code><span class="cm">// Native &lt;select&gt; — by value, label, or index:</span>
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Transfer Type'</span>).<span class="fn">selectOption</span>(<span class="st">'NEFT'</span>);
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Transfer Type'</span>).<span class="fn">selectOption</span>({ value: <span class="st">'rtgs'</span> });
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Transfer Type'</span>).<span class="fn">selectOption</span>({ index: 2 });

<span class="cm">// Custom dropdown (div-based):</span>
<span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'combobox'</span>, { name: <span class="st">'Bank Name'</span> }).<span class="fn">click</span>();
<span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'option'</span>, { name: <span class="st">'HDFC Bank'</span> }).<span class="fn">click</span>();

<span class="cm">// Verify selected value:</span>
<span class="kw">await</span> expect(page.<span class="fn">getByLabel</span>(<span class="st">'Transfer Type'</span>)).<span class="fn">toHaveValue</span>(<span class="st">'NEFT'</span>);</code></div>` },

    { difficulty: 'easy', q: "How do you handle checkboxes and radio buttons in Playwright?",
      a: `<div class="ans-hero">Use locator.check() and locator.uncheck() for checkboxes. Use locator.check() for radio buttons. Verify state with locator.isChecked() or expect().toBeChecked().</div>
      <div class="code-block"><code><span class="cm">// Checkbox:</span>
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Remember me'</span>).<span class="fn">check</span>();
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Remember me'</span>).<span class="fn">uncheck</span>();
<span class="kw">await</span> expect(page.<span class="fn">getByLabel</span>(<span class="st">'Remember me'</span>)).<span class="fn">toBeChecked</span>();

<span class="cm">// Radio button:</span>
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'NEFT'</span>).<span class="fn">check</span>();
<span class="kw">await</span> expect(page.<span class="fn">getByLabel</span>(<span class="st">'NEFT'</span>)).<span class="fn">toBeChecked</span>();
<span class="kw">await</span> expect(page.<span class="fn">getByLabel</span>(<span class="st">'RTGS'</span>)).<span class="fn">not</span>.<span class="fn">toBeChecked</span>();</code></div>` },

    { difficulty: 'easy', q: "How do you navigate between pages in Playwright? What does page.goto() return?",
      a: `<div class="ans-hero">page.goto(url) navigates to the URL and returns a Response object. It waits for the page load event by default. You can control what constitutes "navigation complete" with the waitUntil option.</div>
      <div class="code-block"><code><span class="cm">// Default — waits for load event:</span>
<span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'https://bankapp.com/login'</span>);

<span class="cm">// Wait for network idle (no pending requests for 500ms):</span>
<span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/dashboard'</span>, { waitUntil: <span class="st">'networkidle'</span> });

<span class="cm">// Wait only for DOM ready (faster):</span>
<span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/dashboard'</span>, { waitUntil: <span class="st">'domcontentloaded'</span> });

<span class="cm">// Verify URL after navigation:</span>
<span class="kw">await</span> expect(page).<span class="fn">toHaveURL</span>(/dashboard/);

<span class="cm">// Go back / forward:</span>
<span class="kw">await</span> page.<span class="fn">goBack</span>();
<span class="kw">await</span> page.<span class="fn">goForward</span>();</code></div>` },

    { difficulty: 'easy', q: "What is Playwright CodeGen? How do you use it?",
      a: `<div class="ans-hero">CodeGen is Playwright's built-in test recorder. It opens a browser, records your interactions, and generates Playwright test code in real time. Use it to bootstrap new tests quickly — then clean up the generated code.</div>
      <div class="code-block"><code><span class="cm">// Start the recorder:</span>
npx playwright codegen https://bankapp.com/login

<span class="cm">// With saved auth state:</span>
npx playwright codegen --load-storage=auth/user.json https://bankapp.com

<span class="cm">// Generate for a specific language:</span>
npx playwright codegen --target=java https://bankapp.com
npx playwright codegen --target=python https://bankapp.com

<span class="cm">// Save directly to file:</span>
npx playwright codegen --output=tests/login.spec.ts https://bankapp.com/login</code></div>
      <div class="info-panel tip"><div class="panel-title">Workflow</div><p>Use CodeGen to get a first draft quickly. Then replace generated CSS selectors with getByRole/getByLabel, add meaningful assertions, and wrap in Page Objects. Don't ship CodeGen output as-is.</p></div>` },

    { difficulty: 'easy', q: "What common assertions does Playwright provide? Give 8 examples.",
      a: `<div class="ans-hero">Playwright's expect() provides web-first assertions that automatically retry until the condition is met (within the timeout). These are the most important ones for a QA engineer to know.</div>
      <table class="comparison-table">
        <thead><tr><th>Assertion</th><th>Checks</th></tr></thead>
        <tbody>
          <tr><td>expect(locator).toBeVisible()</td><td>Element is visible on page</td></tr>
          <tr><td>expect(locator).toHaveText('...')</td><td>Element's text content matches</td></tr>
          <tr><td>expect(locator).toHaveValue('...')</td><td>Input field value matches</td></tr>
          <tr><td>expect(locator).toBeChecked()</td><td>Checkbox/radio is checked</td></tr>
          <tr><td>expect(locator).toBeEnabled()</td><td>Element is not disabled</td></tr>
          <tr><td>expect(locator).toHaveAttribute('href', '...')</td><td>HTML attribute value</td></tr>
          <tr><td>expect(locator).toHaveCount(3)</td><td>Number of matching elements</td></tr>
          <tr><td>expect(page).toHaveURL(/dashboard/)</td><td>Current page URL matches</td></tr>
          <tr><td>expect(page).toHaveTitle('...')</td><td>Page title matches</td></tr>
          <tr><td>expect(response).toBeOK()</td><td>API response status 200–299</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'easy', q: "How do you run Playwright tests? What are the key CLI commands?",
      a: `<div class="ans-hero">Run tests with npx playwright test. The CLI provides options for running specific files, projects, browsers, debug mode, headed mode, and CI reporting.</div>
      <div class="code-block"><code><span class="cm">// Run all tests:</span>
npx playwright test

<span class="cm">// Run specific file:</span>
npx playwright test tests/login.spec.ts

<span class="cm">// Run tests matching a name pattern:</span>
npx playwright test --grep "login"

<span class="cm">// Run on specific browser:</span>
npx playwright test --project=firefox

<span class="cm">// Headed mode (see the browser):</span>
npx playwright test --headed

<span class="cm">// Debug mode (pause on each step):</span>
npx playwright test --debug

<span class="cm">// Update snapshots:</span>
npx playwright test --update-snapshots

<span class="cm">// View last HTML report:</span>
npx playwright show-report</code></div>` },

    // ── MEDIUM ─────────────────────────────────────────────────
    { difficulty: 'medium', q: "What is Page Object Model in Playwright TypeScript? Show a complete example.",
      a: `<div class="ans-hero">Page Object Model encapsulates page locators and actions in dedicated TypeScript classes. Tests call Page Object methods — never use locators directly in test files.</div>
      <div class="code-block"><code><span class="cm">// pages/LoginPage.ts</span>
<span class="kw">import</span> { Page, Locator } <span class="kw">from</span> <span class="st">'@playwright/test'</span>;

<span class="kw">export class</span> <span class="cl">LoginPage</span> {
  <span class="kw">private readonly</span> usernameInput: <span class="cl">Locator</span>;
  <span class="kw">private readonly</span> passwordInput: <span class="cl">Locator</span>;
  <span class="kw">private readonly</span> loginButton:   <span class="cl">Locator</span>;

  <span class="kw">constructor</span>(<span class="kw">private</span> page: <span class="cl">Page</span>) {
    <span class="kw">this</span>.usernameInput = page.<span class="fn">getByLabel</span>(<span class="st">'Username'</span>);
    <span class="kw">this</span>.passwordInput = page.<span class="fn">getByLabel</span>(<span class="st">'Password'</span>);
    <span class="kw">this</span>.loginButton   = page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Login'</span> });
  }

  <span class="kw">async</span> <span class="fn">navigate</span>() { <span class="kw">await</span> <span class="kw">this</span>.page.<span class="fn">goto</span>(<span class="st">'/login'</span>); }

  <span class="kw">async</span> <span class="fn">login</span>(user: <span class="kw">string</span>, pass: <span class="kw">string</span>) {
    <span class="kw">await</span> <span class="kw">this</span>.usernameInput.<span class="fn">fill</span>(user);
    <span class="kw">await</span> <span class="kw">this</span>.passwordInput.<span class="fn">fill</span>(pass);
    <span class="kw">await</span> <span class="kw">this</span>.loginButton.<span class="fn">click</span>();
  }
}

<span class="cm">// tests/login.spec.ts — thin test</span>
<span class="kw">const</span> loginPage = <span class="kw">new</span> <span class="cl">LoginPage</span>(page);
<span class="kw">await</span> loginPage.<span class="fn">navigate</span>();
<span class="kw">await</span> loginPage.<span class="fn">login</span>(<span class="st">'karan@bankapp.com'</span>, <span class="st">'Secure@1234'</span>);
<span class="kw">await</span> expect(page).<span class="fn">toHaveURL</span>(/dashboard/);</code></div>` },

    { difficulty: 'medium', q: "What is page.route() in Playwright? Give 3 practical use cases.",
      a: `<div class="ans-hero">page.route() intercepts network requests matching a URL pattern. You can abort, modify, mock, or fulfil them — essential for isolating tests from external dependencies and testing edge cases.</div>
      <div class="code-block"><code><span class="cm">// 1. Mock API response:</span>
<span class="kw">await</span> page.<span class="fn">route</span>(<span class="st">'**/api/balance'</span>, route => route.<span class="fn">fulfill</span>({
  status: 200,
  json: { balance: 50000, currency: <span class="st">'INR'</span> }
}));

<span class="cm">// 2. Block analytics/trackers (faster tests):</span>
<span class="kw">await</span> page.<span class="fn">route</span>(<span class="st">'**/*.{analytics,tracking}*'</span>, route => route.<span class="fn">abort</span>());

<span class="cm">// 3. Simulate API error (test error handling):</span>
<span class="kw">await</span> page.<span class="fn">route</span>(<span class="st">'**/api/transfer'</span>, route => route.<span class="fn">fulfill</span>({
  status: 500,
  json: { error: <span class="st">'Internal Server Error'</span> }
}));

<span class="cm">// 4. Modify request headers (inject test token):</span>
<span class="kw">await</span> page.<span class="fn">route</span>(<span class="st">'**/api/**'</span>, route => route.<span class="fn">continue</span>({
  headers: { ...route.<span class="fn">request</span>().<span class="fn">headers</span>(), <span class="st">'X-Test-Token'</span>: <span class="st">'abc123'</span> }
}));</code></div>` },

    { difficulty: 'medium', q: "How do you handle file uploads in Playwright?",
      a: `<div class="ans-hero">Use locator.setInputFiles() for native file input elements. For drag-and-drop upload areas, use the file chooser event. Multiple files are supported.</div>
      <div class="code-block"><code><span class="cm">// Single file — direct input:</span>
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Upload Statement'</span>).<span class="fn">setInputFiles</span>(<span class="st">'files/statement.pdf'</span>);

<span class="cm">// Multiple files:</span>
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Upload Documents'</span>).<span class="fn">setInputFiles</span>([
  <span class="st">'files/aadhar.pdf'</span>, <span class="st">'files/pan.pdf'</span>
]);

<span class="cm">// File chooser dialog (button that opens OS file picker):</span>
<span class="kw">const</span> [fileChooser] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
  page.<span class="fn">waitForEvent</span>(<span class="st">'filechooser'</span>),
  page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Upload KYC'</span> }).<span class="fn">click</span>()
]);
<span class="kw">await</span> fileChooser.<span class="fn">setFiles</span>(<span class="st">'files/kyc.pdf'</span>);

<span class="cm">// Verify upload success:</span>
<span class="kw">await</span> expect(page.<span class="fn">getByText</span>(<span class="st">'statement.pdf'</span>)).<span class="fn">toBeVisible</span>();</code></div>` },

    { difficulty: 'medium', q: "How do you handle file downloads in Playwright?",
      a: `<div class="ans-hero">Use page.waitForEvent('download') paired with the click that triggers it. Playwright intercepts the download, saves to a temp path, and lets you verify the filename and content.</div>
      <div class="code-block"><code><span class="kw">const</span> [download] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
  page.<span class="fn">waitForEvent</span>(<span class="st">'download'</span>),
  page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Download Statement'</span> }).<span class="fn">click</span>()
]);

<span class="cm">// Verify filename:</span>
expect(download.<span class="fn">suggestedFilename</span>()).<span class="fn">toContain</span>(<span class="st">'statement'</span>);

<span class="cm">// Save to a known path:</span>
<span class="kw">await</span> download.<span class="fn">saveAs</span>(<span class="st">'downloads/statement.pdf'</span>);

<span class="cm">// Read content (for CSV validation):</span>
<span class="kw">const</span> path = <span class="kw">await</span> download.<span class="fn">path</span>();
<span class="kw">const</span> content = fs.<span class="fn">readFileSync</span>(path, <span class="st">'utf-8'</span>);
expect(content).<span class="fn">toContain</span>(<span class="st">'NEFT'</span>);</code></div>` },

    { difficulty: 'medium', q: "How do you handle iframes in Playwright?",
      a: `<div class="ans-hero">Use page.frameLocator() to scope locators inside an iframe. This is the modern approach — it lets you use all standard locators within the frame context without switching contexts manually.</div>
      <div class="code-block"><code><span class="cm">// Target iframe by selector:</span>
<span class="kw">const</span> frame = page.<span class="fn">frameLocator</span>(<span class="st">'#payment-iframe'</span>);

<span class="cm">// Use standard locators inside the frame:</span>
<span class="kw">await</span> frame.<span class="fn">getByLabel</span>(<span class="st">'Card Number'</span>).<span class="fn">fill</span>(<span class="st">'4111111111111111'</span>);
<span class="kw">await</span> frame.<span class="fn">getByLabel</span>(<span class="st">'CVV'</span>).<span class="fn">fill</span>(<span class="st">'123'</span>);
<span class="kw">await</span> frame.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Pay Now'</span> }).<span class="fn">click</span>();

<span class="cm">// Nested iframes:</span>
<span class="kw">const</span> inner = page
  .<span class="fn">frameLocator</span>(<span class="st">'#outer-frame'</span>)
  .<span class="fn">frameLocator</span>(<span class="st">'#inner-frame'</span>);
<span class="kw">await</span> inner.<span class="fn">getByText</span>(<span class="st">'Secure'</span>).<span class="fn">isVisible</span>();</code></div>` },

    { difficulty: 'medium', q: "How do you handle new tabs and pop-up windows in Playwright?",
      a: `<div class="ans-hero">Use context.waitForEvent('page') to capture a new page/tab when it opens. Pair it with the click that triggers it using Promise.all() to avoid race conditions.</div>
      <div class="code-block"><code><span class="cm">// New tab opened by a link click:</span>
<span class="kw">const</span> [newPage] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
  context.<span class="fn">waitForEvent</span>(<span class="st">'page'</span>),
  page.<span class="fn">getByRole</span>(<span class="st">'link'</span>, { name: <span class="st">'Terms & Conditions'</span> }).<span class="fn">click</span>()
]);
<span class="kw">await</span> newPage.<span class="fn">waitForLoadState</span>();
<span class="kw">await</span> expect(newPage).<span class="fn">toHaveTitle</span>(<span class="st">/Terms/</span>);
<span class="kw">await</span> newPage.<span class="fn">close</span>();

<span class="cm">// Pop-up window (same pattern):</span>
<span class="kw">const</span> [popup] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
  page.<span class="fn">waitForEvent</span>(<span class="st">'popup'</span>),
  page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Help'</span> }).<span class="fn">click</span>()
]);
<span class="kw">await</span> expect(popup.<span class="fn">getByText</span>(<span class="st">'Help Center'</span>)).<span class="fn">toBeVisible</span>();</code></div>` },

    { difficulty: 'medium', q: "How do you handle JavaScript dialogs (alert, confirm, prompt) in Playwright?",
      a: `<div class="ans-hero">Register a page.on('dialog') listener BEFORE the action that triggers it. Playwright does not pause for dialogs — without a handler they are auto-dismissed, making the test fail silently.</div>
      <div class="code-block"><code><span class="cm">// Handle alert:</span>
page.<span class="fn">on</span>(<span class="st">'dialog'</span>, dialog => dialog.<span class="fn">accept</span>());
<span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Delete Account'</span> }).<span class="fn">click</span>();

<span class="cm">// Handle confirm — check message then accept:</span>
page.<span class="fn">on</span>(<span class="st">'dialog'</span>, <span class="kw">async</span> dialog => {
  expect(dialog.<span class="fn">message</span>()).<span class="fn">toContain</span>(<span class="st">'Are you sure?'</span>);
  <span class="kw">await</span> dialog.<span class="fn">accept</span>();
});

<span class="cm">// Handle confirm — dismiss (click Cancel):</span>
page.<span class="fn">on</span>(<span class="st">'dialog'</span>, dialog => dialog.<span class="fn">dismiss</span>());

<span class="cm">// Handle prompt — fill value and accept:</span>
page.<span class="fn">on</span>(<span class="st">'dialog'</span>, dialog => dialog.<span class="fn">accept</span>(<span class="st">'confirm'</span>));

<span class="cm">// One-time handler (removeListener after first dialog):</span>
page.<span class="fn">once</span>(<span class="st">'dialog'</span>, dialog => dialog.<span class="fn">accept</span>());</code></div>` },

    { difficulty: 'medium', q: "What is the Playwright trace viewer? How do you use it to debug failures?",
      a: `<div class="ans-hero">The trace viewer is Playwright's built-in debugging tool. It records a complete trace of a test — every action, DOM snapshot at each step, network requests, console logs, screenshots — viewable as an interactive timeline.</div>
      <div class="code-block"><code><span class="cm">// Enable in playwright.config.ts:</span>
use: { trace: <span class="st">'on-first-retry'</span> }  <span class="cm">// only on retried (flaky) tests</span>
use: { trace: <span class="st">'on'</span> }             <span class="cm">// always (CI debugging)</span>
use: { trace: <span class="st">'retain-on-failure'</span> } <span class="cm">// only when test fails</span>

<span class="cm">// View the trace:</span>
npx playwright show-trace test-results/trace.zip</code></div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Timeline view</div><div class="step-desc">Click any action on the timeline — see exactly what the DOM looked like at that point. Instantly find "element not found at step 7."</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Network panel</div><div class="step-desc">See every API call, status code, request/response body. Identify slow API that caused a timeout.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Console panel</div><div class="step-desc">JS errors and console.log output at each step. Find the JS exception that preceded the element disappearing.</div></div></div>
      </div>` },

    { difficulty: 'medium', q: "How does parallel execution work in Playwright? Explain workers and fullyParallel.",
      a: `<div class="ans-hero">Playwright runs test files in parallel across multiple worker processes by default. fullyParallel: true also runs individual tests within a file in parallel. Workers is the number of concurrent processes.</div>
      <div class="code-block"><code><span class="cm">// playwright.config.ts:</span>
<span class="kw">export default</span> defineConfig({
  workers: process.env.CI ? 2 : 4,  <span class="cm">// parallel workers</span>
  fullyParallel: <span class="kw">true</span>,             <span class="cm">// tests WITHIN a file run in parallel too</span>
  retries: process.env.CI ? 2 : 0,  <span class="cm">// retry flaky tests in CI</span>
});</code></div>
      <table class="comparison-table">
        <thead><tr><th>Setting</th><th>Behaviour</th></tr></thead>
        <tbody>
          <tr><td>workers: 4</td><td>4 test files run simultaneously — each in its own process with its own browser</td></tr>
          <tr><td>fullyParallel: true</td><td>Individual tests within a file also run in parallel (each gets its own page/context)</td></tr>
          <tr><td>fullyParallel: false</td><td>Tests within a file run sequentially (safe for tests that share state)</td></tr>
        </tbody>
      </table>
      <div class="info-panel warning"><div class="panel-title">Parallel safety</div><p>Each test must be fully independent — no shared state, no shared login sessions (use storageState per test), no shared test data accounts.</p></div>` },

    { difficulty: 'medium', q: "What is Playwright sharding? How do you use it in CI?",
      a: `<div class="ans-hero">Sharding splits the test suite across multiple CI machines (runners). Each runner gets a subset of tests. All shards run in parallel — wall-clock time = slowest single shard, not total.</div>
      <div class="code-block"><code><span class="cm">// GitHub Actions matrix — 4 parallel runners:</span>
strategy:
  matrix:
    shard: [1, 2, 3, 4]

steps:
  - run: npx playwright test --shard=\${{ matrix.shard }}/4

<span class="cm">// Merge reports from all shards:</span>
- run: npx playwright merge-reports --reporter=html ./blob-reports</code></div>
      <div class="info-panel tip"><div class="panel-title">Impact</div><p>400 tests taking 40 min → 4 shards with workers:4 each → ~5 min wall-clock. Each shard runs 100 tests with 4 workers ≈ 25 tests per worker ≈ ~5 min. Total CI time drops by 8x.</p></div>` },

    { difficulty: 'medium', q: "How do you implement test fixtures in Playwright? Show a custom fixture example.",
      a: `<div class="ans-hero">Fixtures are reusable setup/teardown objects injected into tests. Playwright's fixture system extends test with custom objects — pages, logged-in contexts, database connections — available to all tests automatically.</div>
      <div class="code-block"><code><span class="cm">// fixtures/bankFixtures.ts</span>
<span class="kw">import</span> { test <span class="kw">as</span> base } <span class="kw">from</span> <span class="st">'@playwright/test'</span>;
<span class="kw">import</span> { LoginPage }   <span class="kw">from</span> <span class="st">'../pages/LoginPage'</span>;
<span class="kw">import</span> { DashboardPage } <span class="kw">from</span> <span class="st">'../pages/DashboardPage'</span>;

<span class="kw">type</span> BankFixtures = {
  loginPage:     LoginPage;
  dashboardPage: DashboardPage;
  loggedInPage:  Page;
};

<span class="kw">export const</span> test = base.<span class="fn">extend</span>&lt;BankFixtures&gt;({
  loginPage: <span class="kw">async</span> ({ page }, use) => {
    <span class="kw">await</span> <span class="fn">use</span>(<span class="kw">new</span> <span class="cl">LoginPage</span>(page));
  },
  loggedInPage: <span class="kw">async</span> ({ page }, use) => {
    <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/login'</span>);
    <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Username'</span>).<span class="fn">fill</span>(<span class="st">'karan@bankapp.com'</span>);
    <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Password'</span>).<span class="fn">fill</span>(<span class="st">'Secure@1234'</span>);
    <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Login'</span> }).<span class="fn">click</span>();
    <span class="kw">await</span> <span class="fn">use</span>(page);
    <span class="cm">// teardown runs after test</span>
  },
});

<span class="cm">// tests/transfer.spec.ts — use the fixture:</span>
test(<span class="st">'transfer test'</span>, <span class="kw">async</span> ({ loggedInPage }) => {
  <span class="cm">// Already logged in — no setup code needed</span>
});</code></div>` },

    { difficulty: 'medium', q: "How do you perform API testing with Playwright's APIRequestContext?",
      a: `<div class="ans-hero">Playwright has a built-in HTTP client (request fixture) that makes REST API calls with the same auth session as the browser. Use it for API tests, pre-test data setup, or hybrid UI+API validation.</div>
      <div class="code-block"><code><span class="cm">// Standalone API test:</span>
test(<span class="st">'POST /transfer returns 200'</span>, <span class="kw">async</span> ({ request }) => {
  <span class="kw">const</span> response = <span class="kw">await</span> request.<span class="fn">post</span>(<span class="st">'https://bankapp.com/api/transfer'</span>, {
    headers: { <span class="st">'Authorization'</span>: <span class="st">'Bearer test-token'</span> },
    data: { fromAccount: <span class="st">'1234'</span>, toAccount: <span class="st">'5678'</span>, amount: 5000 }
  });
  expect(response.<span class="fn">status</span>()).<span class="fn">toBe</span>(200);
  <span class="kw">const</span> body = <span class="kw">await</span> response.<span class="fn">json</span>();
  expect(body.status).<span class="fn">toBe</span>(<span class="st">'SUCCESS'</span>);
});

<span class="cm">// Hybrid: create data via API, verify UI:</span>
test(<span class="st">'beneficiary appears in UI after API creation'</span>, <span class="kw">async</span> ({ request, page }) => {
  <span class="kw">await</span> request.<span class="fn">post</span>(<span class="st">'/api/beneficiaries'</span>, {
    data: { name: <span class="st">'Rahul'</span>, account: <span class="st">'9876543210'</span> }
  });
  <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/beneficiaries'</span>);
  <span class="kw">await</span> expect(page.<span class="fn">getByText</span>(<span class="st">'Rahul'</span>)).<span class="fn">toBeVisible</span>();
});</code></div>` },

    { difficulty: 'medium', q: "How do you use page.evaluate() in Playwright? Give practical examples.",
      a: `<div class="ans-hero">page.evaluate() executes JavaScript in the browser context and returns the result. Use it to access JS variables, manipulate the DOM directly, or read values that have no corresponding locator.</div>
      <div class="code-block"><code><span class="cm">// Read a JS variable from the page:</span>
<span class="kw">const</span> balance = <span class="kw">await</span> page.<span class="fn">evaluate</span>(() => window.accountBalance);

<span class="cm">// Scroll to element (if scroll is not triggered by click):</span>
<span class="kw">await</span> page.<span class="fn">evaluate</span>(() => <span class="fn">window.scrollTo</span>(0, document.body.scrollHeight));

<span class="cm">// Set localStorage directly (faster than UI login):</span>
<span class="kw">await</span> page.<span class="fn">evaluate</span>(token => {
  localStorage.<span class="fn">setItem</span>(<span class="st">'authToken'</span>, token);
}, <span class="st">'my-test-token'</span>);

<span class="cm">// Count DOM elements not reachable via locator:</span>
<span class="kw">const</span> rowCount = <span class="kw">await</span> page.<span class="fn">evaluate</span>(
  () => document.<span class="fn">querySelectorAll</span>(<span class="st">'table tr'</span>).length
);

<span class="cm">// Dispatch a custom event:</span>
<span class="kw">await</span> page.<span class="fn">evaluate</span>(() => {
  document.<span class="fn">dispatchEvent</span>(<span class="kw">new</span> Event(<span class="st">'sessionExpired'</span>));
});</code></div>` },

    { difficulty: 'medium', q: "How does Playwright handle keyboard interactions? Show key press examples.",
      a: `<div class="ans-hero">Use locator.press() for individual key presses, page.keyboard.press() for global key events, and locator.pressSequentially() for typing with key events. Standard key names from the DOM KeyboardEvent.key spec.</div>
      <div class="code-block"><code><span class="cm">// Press a key on a focused element:</span>
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Amount'</span>).<span class="fn">press</span>(<span class="st">'Tab'</span>);
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Search'</span>).<span class="fn">press</span>(<span class="st">'Enter'</span>);

<span class="cm">// Keyboard shortcuts:</span>
<span class="kw">await</span> page.keyboard.<span class="fn">press</span>(<span class="st">'Control+A'</span>);  <span class="cm">// Select all</span>
<span class="kw">await</span> page.keyboard.<span class="fn">press</span>(<span class="st">'Control+C'</span>);  <span class="cm">// Copy</span>
<span class="kw">await</span> page.keyboard.<span class="fn">press</span>(<span class="st">'Escape'</span>);     <span class="cm">// Close modal</span>
<span class="kw">await</span> page.keyboard.<span class="fn">press</span>(<span class="st">'F5'</span>);         <span class="cm">// Refresh</span>

<span class="cm">// Hold modifier and click:</span>
<span class="kw">await</span> page.keyboard.<span class="fn">down</span>(<span class="st">'Shift'</span>);
<span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'row'</span>).<span class="fn">nth</span>(3).<span class="fn">click</span>();
<span class="kw">await</span> page.keyboard.<span class="fn">up</span>(<span class="st">'Shift'</span>);

<span class="cm">// Type special chars:</span>
<span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Amount'</span>).<span class="fn">press</span>(<span class="st">'ArrowUp'</span>); <span class="cm">// increment spinner</span></code></div>` },

    { difficulty: 'medium', q: "What is test.use() in Playwright? How do you apply settings to specific tests?",
      a: `<div class="ans-hero">test.use() overrides playwright.config.ts settings for a specific test or describe block — browser, viewport, storageState, locale, timezone, geolocation. Scoped to the block it's called in.</div>
      <div class="code-block"><code><span class="cm">// Apply to all tests in this describe block:</span>
test.<span class="fn">describe</span>(<span class="st">'Mobile banking tests'</span>, () => {
  test.<span class="fn">use</span>({ viewport: { width: 390, height: 844 } });  <span class="cm">// iPhone 14 Pro</span>

  test(<span class="st">'mobile login works'</span>, <span class="kw">async</span> ({ page }) => { ... });
  test(<span class="st">'mobile transfer works'</span>, <span class="kw">async</span> ({ page }) => { ... });
});

<span class="cm">// Override locale/timezone for one test:</span>
test.<span class="fn">use</span>({ locale: <span class="st">'hi-IN'</span>, timezoneId: <span class="st">'Asia/Kolkata'</span> });

<span class="cm">// Load a specific user's auth state:</span>
test.<span class="fn">describe</span>(<span class="st">'Admin tests'</span>, () => {
  test.<span class="fn">use</span>({ storageState: <span class="st">'auth/admin.json'</span> });
  test(<span class="st">'admin sees all accounts'</span>, <span class="kw">async</span> ({ page }) => { ... });
});</code></div>` },

    { difficulty: 'medium', q: "How do you implement global setup and teardown in Playwright?",
      a: `<div class="ans-hero">Use the globalSetup and globalTeardown options in playwright.config.ts to run code once before and after the entire test suite — for starting test servers, seeding databases, or cleaning up global resources.</div>
      <div class="code-block"><code><span class="cm">// playwright.config.ts:</span>
<span class="kw">export default</span> defineConfig({
  globalSetup:    <span class="st">'./global-setup.ts'</span>,
  globalTeardown: <span class="st">'./global-teardown.ts'</span>,
});

<span class="cm">// global-setup.ts — runs ONCE before all tests:</span>
<span class="kw">export default async function</span> <span class="fn">globalSetup</span>() {
  <span class="cm">// Start test API server</span>
  process.env.TEST_SERVER = <span class="st">'https://uat.bankapp.com'</span>;
  <span class="cm">// Seed test database</span>
  <span class="kw">await</span> db.<span class="fn">seed</span>();
  <span class="cm">// Authenticate all roles and save storageState</span>
  <span class="kw">const</span> browser = <span class="kw">await</span> chromium.<span class="fn">launch</span>();
  <span class="kw">const</span> ctx = <span class="kw">await</span> browser.<span class="fn">newContext</span>();
  <span class="cm">// ... login as admin, save storageState</span>
  <span class="kw">await</span> browser.<span class="fn">close</span>();
}

<span class="cm">// global-teardown.ts — runs ONCE after all tests:</span>
<span class="kw">export default async function</span> <span class="fn">globalTeardown</span>() {
  <span class="kw">await</span> db.<span class="fn">cleanup</span>();
}</code></div>` },

    { difficulty: 'medium', q: "What is locator.filter() in Playwright? When do you need it?",
      a: `<div class="ans-hero">locator.filter() narrows a set of matching elements further — by visible text, nested element presence, or other conditions. Use it when a locator matches multiple elements and you need to target a specific one.</div>
      <div class="code-block"><code><span class="cm">// Find the list item that contains "Rahul Sharma":</span>
<span class="kw">const</span> rahulRow = page.<span class="fn">getByRole</span>(<span class="st">'row'</span>).<span class="fn">filter</span>({ hasText: <span class="st">'Rahul Sharma'</span> });
<span class="kw">await</span> rahulRow.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Delete'</span> }).<span class="fn">click</span>();

<span class="cm">// Filter to rows that contain a specific nested element:</span>
<span class="kw">const</span> pendingRows = page.<span class="fn">getByRole</span>(<span class="st">'row'</span>)
  .<span class="fn">filter</span>({ has: page.<span class="fn">getByText</span>(<span class="st">'PENDING'</span>) });
<span class="kw">await</span> expect(pendingRows).<span class="fn">toHaveCount</span>(3);

<span class="cm">// Chain filters:</span>
<span class="kw">const</span> target = page.<span class="fn">getByRole</span>(<span class="st">'listitem'</span>)
  .<span class="fn">filter</span>({ hasText: <span class="st">'NEFT'</span> })
  .<span class="fn">filter</span>({ hasText: <span class="st">'₹5,000'</span> });
<span class="kw">await</span> expect(target).<span class="fn">toBeVisible</span>();</code></div>` },

    { difficulty: 'medium', q: "How do you perform visual comparison testing in Playwright?",
      a: `<div class="ans-hero">Playwright has built-in visual comparison via expect(page).toHaveScreenshot() and expect(element).toHaveScreenshot(). Screenshots are compared to stored baselines — pixel differences above a threshold fail the test.</div>
      <div class="code-block"><code><span class="cm">// Capture and compare full page:</span>
<span class="kw">await</span> expect(page).<span class="fn">toHaveScreenshot</span>(<span class="st">'dashboard.png'</span>);

<span class="cm">// Element-level comparison:</span>
<span class="kw">await</span> expect(page.<span class="fn">getByTestId</span>(<span class="st">'balance-card'</span>))
  .<span class="fn">toHaveScreenshot</span>(<span class="st">'balance-card.png'</span>);

<span class="cm">// Allow some pixel difference:</span>
<span class="kw">await</span> expect(page).<span class="fn">toHaveScreenshot</span>(<span class="st">'home.png'</span>, {
  maxDiffPixels: 100,
  threshold: 0.2
});

<span class="cm">// Update baseline snapshots:</span>
npx playwright test --update-snapshots</code></div>
      <div class="info-panel tip"><div class="panel-title">First run</div><p>On first run, Playwright creates the baseline .png files and passes. Subsequent runs compare against them. Commit the baseline screenshots to Git.</p></div>` },

    { difficulty: 'medium', q: "How do you set up retries in Playwright? What is the difference between retries and retry logic?",
      a: `<div class="ans-hero">retries in playwright.config.ts reruns the entire failed test N times. This handles genuine flakiness. It is different from writing retry logic inside the test (waitFor loops) which handles dynamic UI states.</div>
      <div class="code-block"><code><span class="cm">// playwright.config.ts:</span>
<span class="kw">export default</span> defineConfig({
  retries: process.env.CI ? 2 : 0,  <span class="cm">// 0 locally, 2 in CI</span>
  use: {
    trace: <span class="st">'on-first-retry'</span>,       <span class="cm">// capture trace on retry</span>
    screenshot: <span class="st">'only-on-failure'</span>,  <span class="cm">// screenshot on final failure</span>
  }
});

<span class="cm">// Per-test retry override:</span>
test(<span class="st">'flaky test'</span>, { retries: 3 }, <span class="kw">async</span> ({ page }) => { ... });

<span class="cm">// Check if running as a retry inside the test:</span>
test(<span class="st">'my test'</span>, <span class="kw">async</span> ({ page }, testInfo) => {
  <span class="kw">if</span> (testInfo.retry > 0) {
    <span class="cm">// Clear test data from previous failed attempt</span>
  }
});</code></div>` },

    { difficulty: 'medium', q: "How do you handle hover interactions and tooltips in Playwright?",
      a: `<div class="ans-hero">Use locator.hover() to trigger hover state. For tooltip validation, hover and then assert the tooltip element is visible. Playwright's auto-waiting handles the tooltip appearance delay.</div>
      <div class="code-block"><code><span class="cm">// Hover to reveal tooltip:</span>
<span class="kw">await</span> page.<span class="fn">getByTestId</span>(<span class="st">'interest-rate-info'</span>).<span class="fn">hover</span>();
<span class="kw">await</span> expect(page.<span class="fn">getByRole</span>(<span class="st">'tooltip'</span>)).<span class="fn">toBeVisible</span>();
<span class="kw">await</span> expect(page.<span class="fn">getByRole</span>(<span class="st">'tooltip'</span>)).<span class="fn">toContainText</span>(<span class="st">'Annual interest rate'</span>);

<span class="cm">// Hover to show action buttons (appear on row hover):</span>
<span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'row'</span>, { name: <span class="st">'Rahul Sharma'</span> }).<span class="fn">hover</span>();
<span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Edit'</span> }).<span class="fn">click</span>();

<span class="cm">// Move mouse to coordinates:</span>
<span class="kw">await</span> page.mouse.<span class="fn">move</span>(500, 300);</code></div>` },

    // ── HARD ───────────────────────────────────────────────────
    { difficulty: 'hard', q: "How do you intercept and mock API responses in Playwright? Show a banking example.",
      a: `<div class="ans-hero">Use page.route() to intercept requests and fulfill/abort/modify them. This lets you test UI behaviour for error states, slow responses, and edge cases without needing a backend that produces those states naturally.</div>
      <div class="code-block"><code><span class="cm">// Mock balance API for a specific test scenario:</span>
test(<span class="st">'shows insufficient balance error'</span>, <span class="kw">async</span> ({ page }) => {
  <span class="kw">await</span> page.<span class="fn">route</span>(<span class="st">'**/api/account/balance'</span>, route =>
    route.<span class="fn">fulfill</span>({ json: { balance: 100, currency: <span class="st">'INR'</span> } })
  );

  <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/transfer'</span>);
  <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Amount'</span>).<span class="fn">fill</span>(<span class="st">'5000'</span>);
  <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Proceed'</span> }).<span class="fn">click</span>();

  <span class="kw">await</span> expect(page.<span class="fn">getByText</span>(<span class="st">'Insufficient balance'</span>)).<span class="fn">toBeVisible</span>();
});

<span class="cm">// Simulate server error — test error page:</span>
<span class="kw">await</span> page.<span class="fn">route</span>(<span class="st">'**/api/transfer'</span>, route =>
  route.<span class="fn">fulfill</span>({ status: 503, body: <span class="st">'Service Unavailable'</span> })
);

<span class="cm">// Modify response on the fly:</span>
<span class="kw">await</span> page.<span class="fn">route</span>(<span class="st">'**/api/transactions'</span>, <span class="kw">async</span> route => {
  <span class="kw">const</span> response = <span class="kw">await</span> route.<span class="fn">fetch</span>();
  <span class="kw">const</span> json = <span class="kw">await</span> response.<span class="fn">json</span>();
  json.transactions[0].status = <span class="st">'FAILED'</span>; <span class="cm">// inject a failure</span>
  <span class="kw">await</span> route.<span class="fn">fulfill</span>({ json });
});</code></div>` },

    { difficulty: 'hard', q: "How do you test WebSocket connections in Playwright?",
      a: `<div class="ans-hero">Playwright can observe WebSocket traffic via page.on('websocket'). Use it to verify WebSocket messages, test real-time features (live balance updates, notifications), or mock WebSocket responses.</div>
      <div class="code-block"><code><span class="cm">// Listen to WebSocket messages:</span>
page.<span class="fn">on</span>(<span class="st">'websocket'</span>, ws => {
  console.<span class="fn">log</span>(<span class="st">'WS opened:'</span>, ws.<span class="fn">url</span>());

  ws.<span class="fn">on</span>(<span class="st">'framesent'</span>,   f => console.<span class="fn">log</span>(<span class="st">'Sent:'</span>, f.payload));
  ws.<span class="fn">on</span>(<span class="st">'framereceived'</span>, f => console.<span class="fn">log</span>(<span class="st">'Received:'</span>, f.payload));
  ws.<span class="fn">on</span>(<span class="st">'close'</span>, () => console.<span class="fn">log</span>(<span class="st">'WS closed'</span>));
});

<span class="cm">// Test live balance notification:</span>
test(<span class="st">'live balance update via WebSocket'</span>, <span class="kw">async</span> ({ page }) => {
  <span class="kw">const</span> messages: <span class="kw">string</span>[] = [];
  page.<span class="fn">on</span>(<span class="st">'websocket'</span>, ws =>
    ws.<span class="fn">on</span>(<span class="st">'framereceived'</span>, f => messages.<span class="fn">push</span>(<span class="kw">String</span>(f.payload)))
  );

  <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/dashboard'</span>);
  <span class="cm">// trigger a transfer from another session via API</span>
  <span class="kw">await</span> request.<span class="fn">post</span>(<span class="st">'/api/transfer'</span>, { data: { amount: 1000 } });

  <span class="cm">// Wait for WS message about balance change</span>
  <span class="kw">await</span> expect.<span class="fn">poll</span>(() => messages).<span class="fn">toContain</span>(
    expect.<span class="fn">stringContaining</span>(<span class="st">'BALANCE_UPDATED'</span>)
  );
});</code></div>` },

    { difficulty: 'hard', q: "How do you handle geolocation and browser permissions in Playwright?",
      a: `<div class="ans-hero">Set permissions and geolocation at the BrowserContext level using context.grantPermissions() and the geolocation option. This avoids the real browser permission dialog in tests.</div>
      <div class="code-block"><code><span class="cm">// Set geolocation in playwright.config.ts:</span>
use: {
  geolocation: { latitude: 19.0760, longitude: 72.8777 },  <span class="cm">// Mumbai</span>
  permissions: [<span class="st">'geolocation'</span>, <span class="st">'notifications'</span>],
}

<span class="cm">// Per-test geolocation override:</span>
test(<span class="st">'nearby branch locator'</span>, <span class="kw">async</span> ({ browser }) => {
  <span class="kw">const</span> ctx = <span class="kw">await</span> browser.<span class="fn">newContext</span>({
    geolocation: { latitude: 28.6139, longitude: 77.2090 },  <span class="cm">// Delhi</span>
    permissions: [<span class="st">'geolocation'</span>],
  });
  <span class="kw">const</span> page = <span class="kw">await</span> ctx.<span class="fn">newPage</span>();
  <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/find-atm'</span>);
  <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Use My Location'</span> }).<span class="fn">click</span>();
  <span class="kw">await</span> expect(page.<span class="fn">getByText</span>(<span class="st">'Delhi'</span>)).<span class="fn">toBeVisible</span>();
});

<span class="cm">// Other permissions:</span>
<span class="kw">await</span> ctx.<span class="fn">grantPermissions</span>([<span class="st">'clipboard-read'</span>, <span class="st">'clipboard-write'</span>]);
<span class="kw">await</span> ctx.<span class="fn">grantPermissions</span>([<span class="st">'camera'</span>, <span class="st">'microphone'</span>]);</code></div>` },

    { difficulty: 'hard', q: "How does Playwright's expect() polling work internally? How do you use expect.poll()?",
      a: `<div class="ans-hero">Playwright's web-first assertions (toBeVisible, toHaveText, etc.) poll the page every 100ms and retry until the assertion passes or the timeout expires. expect.poll() extends this to arbitrary async functions — not just locators.</div>
      <div class="code-block"><code><span class="cm">// Standard assertion — polls automatically:</span>
<span class="kw">await</span> expect(page.<span class="fn">getByText</span>(<span class="st">'Transfer Successful'</span>)).<span class="fn">toBeVisible</span>();
<span class="cm">// ↑ retries every 100ms for up to 30s (or configured timeout)</span>

<span class="cm">// expect.poll() — for non-locator async conditions:</span>
<span class="kw">await</span> expect.<span class="fn">poll</span>(<span class="kw">async</span> () => {
  <span class="kw">const</span> resp = <span class="kw">await</span> request.<span class="fn">get</span>(<span class="st">'/api/transaction/latest'</span>);
  <span class="kw">const</span> json = <span class="kw">await</span> resp.<span class="fn">json</span>();
  <span class="kw">return</span> json.status;
}, {
  message: <span class="st">'Transaction should be SUCCESS within 10s'</span>,
  timeout: 10_000,
  intervals: [1000, 2000, 3000]
}).<span class="fn">toBe</span>(<span class="st">'SUCCESS'</span>);
<span class="cm">// ↑ calls the function at 1s, 2s, 3s intervals until it returns 'SUCCESS'</span>

<span class="cm">// Custom interval pattern:</span>
<span class="kw">await</span> expect.<span class="fn">poll</span>(() => queue.<span class="fn">size</span>(), { intervals: [500] }).<span class="fn">toBe</span>(0);</code></div>` },

    { difficulty: 'hard', q: "How do you debug flaky tests in Playwright? List all debugging tools and techniques.",
      a: `<div class="ans-hero">Playwright provides multiple debugging layers: trace viewer for step-by-step replay, --debug flag for interactive debugging, slow motion, video recording, and console/network logging.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Trace viewer (most powerful)</div><div class="step-desc">trace: 'on-first-retry' → run → npx playwright show-trace. See DOM snapshot at every action, network calls, console errors at the exact failing step.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">--debug flag (interactive)</div><div class="step-desc">npx playwright test --debug → opens Playwright Inspector. Step through actions one by one with a live browser. Pause/resume at any point.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Video recording</div><div class="step-desc">video: 'on-first-retry' → records full video of the test. Attach to test report for visual debugging of flaky timing issues.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Slow motion</div><div class="step-desc">use: { launchOptions: { slowMo: 500 } } → every action delayed by 500ms. Makes timing issues visible to the human eye.</div></div></div>
        <div class="step-item"><div class="step-num">5</div><div class="step-content"><div class="step-title">Console/network listeners</div><div class="step-desc">page.on('console', msg => ...) and page.on('requestfailed', ...) log all JS errors and failed requests during the test run.</div></div></div>
      </div>` },

    { difficulty: 'hard', q: "How do you implement a complete Playwright framework from scratch for a banking application?",
      a: `<div class="ans-hero">Layer the framework: configuration, Page Objects, fixtures for dependency injection, auth setup for storageState, test data factories, and CI sharding for speed.</div>
      <div class="code-block"><code>BankingPlaywrightFramework/
├── playwright.config.ts
│   ├── baseURL: process.env.BASE_URL
│   ├── fullyParallel: true
│   ├── workers: CI ? 2 : 4
│   ├── retries: CI ? 2 : 0
│   ├── trace: 'on-first-retry'
│   ├── screenshot: 'only-on-failure'
│   └── projects: [chromium, firefox, webkit]
│
├── pages/
│   ├── LoginPage.ts     (getByLabel locators + login() method)
│   ├── DashboardPage.ts (balance, menu navigation)
│   └── TransferPage.ts  (fill form, OTP, verify)
│
├── fixtures/
│   ├── bankFixtures.ts  (extend test with page objects + loggedInPage)
│   └── auth.setup.ts    (save storageState per role)
│
├── data/
│   ├── testData.ts      (typed test data objects)
│   └── apiHelpers.ts    (create/delete test data via API)
│
├── tests/
│   ├── login.spec.ts
│   ├── transfer.spec.ts
│   └── beneficiary.spec.ts
│
└── .github/workflows/ci.yml
    └── matrix shard: [1,2,3,4]</code></div>
      <div class="info-panel tip"><div class="panel-title">Key principles</div><p>1. Tests use fixtures — no raw page manipulation. 2. storageState eliminates login in every test. 3. API helpers create/clean test data. 4. Sharding keeps CI under 10 min even with 400+ tests.</p></div>` },

    { difficulty: 'hard', q: "How do you handle authentication for multiple user roles in a large Playwright test suite?",
      a: `<div class="ans-hero">Create a separate auth setup for each role. Each setup logs in and saves storageState to a different file. Tests declare which role they need via test.use(). Login runs once per role per suite run.</div>
      <div class="code-block"><code><span class="cm">// auth.setup.ts — run before ALL tests:</span>
<span class="kw">import</span> { test <span class="kw">as</span> setup } <span class="kw">from</span> <span class="st">'@playwright/test'</span>;

<span class="kw">const</span> roles = [
  { name: <span class="st">'admin'</span>,    user: <span class="st">'admin@bankapp.com'</span>,   pass: <span class="st">'Admin@123'</span>,   file: <span class="st">'auth/admin.json'</span> },
  { name: <span class="st">'customer'</span>, user: <span class="st">'karan@bankapp.com'</span>,  pass: <span class="st">'User@123'</span>,    file: <span class="st">'auth/customer.json'</span> },
  { name: <span class="st">'manager'</span>,  user: <span class="st">'mgr@bankapp.com'</span>,    pass: <span class="st">'Mgr@123'</span>,     file: <span class="st">'auth/manager.json'</span> },
];

<span class="kw">for</span> (<span class="kw">const</span> role <span class="kw">of</span> roles) {
  setup(<span class="st">\`authenticate \${role.name}\`</span>, <span class="kw">async</span> ({ page }) => {
    <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="st">'/login'</span>);
    <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Username'</span>).<span class="fn">fill</span>(role.user);
    <span class="kw">await</span> page.<span class="fn">getByLabel</span>(<span class="st">'Password'</span>).<span class="fn">fill</span>(role.pass);
    <span class="kw">await</span> page.<span class="fn">getByRole</span>(<span class="st">'button'</span>, { name: <span class="st">'Login'</span> }).<span class="fn">click</span>();
    <span class="kw">await</span> page.<span class="fn">context</span>().<span class="fn">storageState</span>({ path: role.file });
  });
}

<span class="cm">// In test files:</span>
test.<span class="fn">describe</span>(<span class="st">'Admin actions'</span>, () => {
  test.<span class="fn">use</span>({ storageState: <span class="st">'auth/admin.json'</span> });
  test(<span class="st">'admin can freeze account'</span>, <span class="kw">async</span> ({ page }) => { ... });
});

test.<span class="fn">describe</span>(<span class="st">'Customer actions'</span>, () => {
  test.<span class="fn">use</span>({ storageState: <span class="st">'auth/customer.json'</span> });
  test(<span class="st">'customer can transfer funds'</span>, <span class="kw">async</span> ({ page }) => { ... });
});</code></div>` },

    { difficulty: 'hard', q: "How do you optimize a slow Playwright CI pipeline? List all strategies.",
      a: `<div class="ans-hero">Combine sharding (parallel CI runners), workers (parallel tests per runner), storageState (skip login), route interception (block slow 3rd-party requests), and smart test tagging (run only impacted tests on PRs).</div>
      <table class="comparison-table">
        <thead><tr><th>Strategy</th><th>How to apply</th><th>Impact</th></tr></thead>
        <tbody>
          <tr><td><strong>Sharding</strong></td><td>--shard=1/4 across 4 GitHub Actions runners</td><td>4x faster wall-clock</td></tr>
          <tr><td><strong>fullyParallel</strong></td><td>fullyParallel: true + workers: 4</td><td>4x more tests per runner</td></tr>
          <tr><td><strong>storageState</strong></td><td>Auth once, reuse in all tests</td><td>Save 2-5s × test count</td></tr>
          <tr><td><strong>Block trackers</strong></td><td>page.route('**analytics**', route => route.abort())</td><td>Remove slow 3rd-party calls</td></tr>
          <tr><td><strong>API setup</strong></td><td>Create test data via API, not UI</td><td>10s UI setup → 200ms API</td></tr>
          <tr><td><strong>PR tagging</strong></td><td>Run @smoke on PR, @regression nightly</td><td>10 min PR vs 40 min full</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'hard', q: "How does Playwright's CDP (Chrome DevTools Protocol) integration work? Give examples.",
      a: `<div class="ans-hero">Playwright communicates with Chromium natively via CDP, and exposes CDP sessions for advanced operations — network throttling, coverage collection, performance metrics — not possible via the standard WebDriver API.</div>
      <div class="code-block"><code><span class="cm">// Create a CDP session:</span>
<span class="kw">const</span> client = <span class="kw">await</span> page.<span class="fn">context</span>().<span class="fn">newCDPSession</span>(page);

<span class="cm">// Simulate slow network (3G throttling):</span>
<span class="kw">await</span> client.<span class="fn">send</span>(<span class="st">'Network.emulateNetworkConditions'</span>, {
  offline: <span class="kw">false</span>,
  latency: 200,
  downloadThroughput: 1.5 * 1024 * 1024 / 8,
  uploadThroughput: 750 * 1024 / 8
});

<span class="cm">// Collect JavaScript code coverage:</span>
<span class="kw">await</span> client.<span class="fn">send</span>(<span class="st">'Profiler.enable'</span>);
<span class="kw">await</span> client.<span class="fn">send</span>(<span class="st">'Profiler.startPreciseCoverage'</span>);
<span class="cm">// ... run test actions ...</span>
<span class="kw">const</span> { result } = <span class="kw">await</span> client.<span class="fn">send</span>(<span class="st">'Profiler.takePreciseCoverage'</span>);

<span class="cm">// Get performance metrics:</span>
<span class="kw">await</span> client.<span class="fn">send</span>(<span class="st">'Performance.enable'</span>);
<span class="kw">const</span> { metrics } = <span class="kw">await</span> client.<span class="fn">send</span>(<span class="st">'Performance.getMetrics'</span>);
<span class="kw">const</span> lcp = metrics.<span class="fn">find</span>(m => m.name === <span class="st">'LayoutDuration'</span>)?.value;</code></div>` },

    { difficulty: 'hard', q: "How do you write data-driven tests in Playwright TypeScript?",
      a: `<div class="ans-hero">Use parameterized tests with test.each() or a loop over a data array. Each data row creates a separate test case with its own isolated page/context. TypeScript types ensure data shape correctness.</div>
      <div class="code-block"><code><span class="cm">// Data array approach (most readable):</span>
<span class="kw">const</span> transferData = [
  { type: <span class="st">'NEFT'</span>,  amount: <span class="st">'5000'</span>,   account: <span class="st">'9876543210'</span>, expected: <span class="st">'Success'</span> },
  { type: <span class="st">'RTGS'</span>,  amount: <span class="st">'200000'</span>, account: <span class="st">'9876543210'</span>, expected: <span class="st">'Success'</span> },
  { type: <span class="st">'NEFT'</span>,  amount: <span class="st">'0'</span>,      account: <span class="st">'9876543210'</span>, expected: <span class="st">'Invalid amount'</span> },
  { type: <span class="st">'IMPS'</span>,  amount: <span class="st">'500'</span>,    account: <span class="st">''</span>,           expected: <span class="st">'Account required'</span> },
];

<span class="kw">for</span> (<span class="kw">const</span> data <span class="kw">of</span> transferData) {
  test(<span class="st">\`Transfer \${data.type} ₹\${data.amount} — \${data.expected}\`</span>,
    <span class="kw">async</span> ({ page }) => {
    <span class="kw">await</span> transferPage.<span class="fn">selectType</span>(data.type);
    <span class="kw">await</span> transferPage.<span class="fn">enterAmount</span>(data.amount);
    <span class="kw">await</span> transferPage.<span class="fn">enterAccount</span>(data.account);
    <span class="kw">await</span> transferPage.<span class="fn">clickProceed</span>();
    <span class="kw">await</span> expect(page.<span class="fn">getByText</span>(data.expected)).<span class="fn">toBeVisible</span>();
  });
}</code></div>
      <div class="info-panel tip"><div class="panel-title">From external source</div><p>Load data from a JSON/CSV file or an API: <code>const testData = JSON.parse(fs.readFileSync('data/transfers.json', 'utf-8'))</code>. Iterate over it the same way.</p></div>` }

  ],

  tosca: [
    { difficulty: 'easy', q: "What is Tosca? How is it different from Selenium?",
      a: `<div class="ans-hero">Tosca is a commercial model-based test automation platform from Tricentis — designed for enterprise apps, SAP, and codeless automation.</div>
      <table class="table-light-custom">
        <thead><tr><th>Aspect</th><th>Tosca</th><th>Selenium</th></tr></thead>
        <tbody>
          <tr><td>Approach</td><td>Model-based, no coding</td><td>Code-based (Java/Python)</td></tr>
          <tr><td>SAP/ERP support</td><td>✅ Native connectors</td><td>❌ Very difficult</td></tr>
          <tr><td>Cost</td><td>❌ Expensive license</td><td>✅ Free, open source</td></tr>
          <tr><td>Test creation</td><td>Drag-and-drop</td><td>Write code</td></tr>
        </tbody>
      </table>` },
    { difficulty: 'easy', q: "What is XScan in Tosca?",
      a: `<div class="ans-hero">XScan is Tosca's element scanning tool — scans app UI and creates Modules (page objects) automatically.</div>
      <ul class="ans-list green">
        <li><span class="icon">🔍</span>Analyses UI elements (buttons, inputs, labels)</li>
        <li><span class="icon">🏗️</span>Creates a Module with all controls and their properties</li>
        <li><span class="icon">🖱️</span>No locator writing — drag-and-drop elements into test cases</li>
        <li><span class="icon">💡</span>Supports: Web, Windows desktop, SAP GUI, APIs, mobile</li>
      </ul>` },
    { difficulty: 'medium', q: "What is a Module in Tosca?",
      a: `<div class="ans-hero">A Module is Tosca's equivalent of a Page Object — a reusable representation of a screen containing UI element controls.</div>
      <div class="compare-grid">
        <div class="compare-card blue"><h6>Module</h6>Represents one screen. Contains controls with locators. Reusable across test cases.</div>
        <div class="compare-card green"><h6>Module Attribute</h6>One UI element. ActionMode: Input/Output/Verify. Tester sets value at test case level.</div>
      </div>` },
    { difficulty: 'medium', q: "What is Tosca Commander?",
      a: `<div class="ans-hero">Tosca Commander is the main workspace — create modules, test cases, execution lists, and manage the Tosca project.</div>
      <ul class="ans-list blue">
        <li><span class="icon">📁</span><strong>Modules:</strong> All XScanned page objects</li>
        <li><span class="icon">✅</span><strong>TestCases:</strong> All test cases and folders</li>
        <li><span class="icon">▶️</span><strong>ExecutionLists:</strong> Test case groups to run together</li>
        <li><span class="icon">📊</span><strong>Reports:</strong> Execution results and logs</li>
      </ul>` },
    { difficulty: 'medium', q: "What is a Recovery Scenario in Tosca?",
      a: `<div class="ans-hero">A Recovery Scenario handles unexpected popups automatically — acts without modifying individual test cases.</div>
      <ul class="ans-list">
        <li><span class="icon">1️⃣</span>Create Module for the unexpected dialog via XScan</li>
        <li><span class="icon">2️⃣</span>Create Recovery Scenario in Tosca Commander</li>
        <li><span class="icon">3️⃣</span>Configure: "If dialog appears → click Continue"</li>
        <li><span class="icon">4️⃣</span>Assign to Execution List — applies to ALL tests automatically</li>
      </ul>` },
    { difficulty: 'hard', q: "What is DEX (Distributed Execution) in Tosca?",
      a: `<div class="ans-hero">DEX distributes test execution across multiple agents — enables parallel cross-browser testing.</div>
      <ul class="ans-list blue">
        <li><span class="icon">🖥️</span>DEX Server: Central coordinator</li>
        <li><span class="icon">💻</span>DEX Agents: Machines that execute tests</li>
        <li><span class="icon">⚡</span>500 tests: 1 hour vs 5 hours sequential</li>
        <li><span class="icon">🌐</span>Cross-browser: Chrome/Firefox/Edge simultaneously</li>
      </ul>` },
    { difficulty: 'hard', q: "How do you perform API Testing in Tosca?",
      a: `<div class="ans-hero">Use Tosca's API Engine — create API Modules, configure request/response, use in test cases.</div>
      <ul class="ans-list green">
        <li><span class="icon">1️⃣</span>Modules → New → API Module</li>
        <li><span class="icon">2️⃣</span>Configure: URL, Method, Headers</li>
        <li><span class="icon">3️⃣</span>Add Request params as Input attributes</li>
        <li><span class="icon">4️⃣</span>Add Response fields as Verify attributes</li>
        <li><span class="icon">5️⃣</span>Drag into Test Case → Set values → Run</li>
      </ul>` },
    { difficulty: 'hard', q: "What are Business Parameters in Tosca?",
      a: `<div class="ans-hero">Business Parameters are reusable project-level constants shared across all test cases.</div>
      <ul class="ans-list blue">
        <li><span class="icon">📌</span>Defined once, referenced by multiple test cases</li>
        <li><span class="icon">🔗</span>Update once → propagates everywhere</li>
        <li><span class="icon">💡</span><strong>Example:</strong> BASE_URL = "https://uat.bankapp.com" — switch env by updating one value</li>
      </ul>` },
    { difficulty: 'hard', q: "How does Tosca manage Test Data?",
      a: `<div class="ans-hero">Multiple strategies: inline values, TDM, external files, Buffers, and Business Parameters.</div>
      <table class="table-light-custom">
        <thead><tr><th>Method</th><th>Best For</th></tr></thead>
        <tbody>
          <tr><td>Inline Values</td><td>Simple one-time values</td></tr>
          <tr><td>TestDataSet (TDS)</td><td>Multiple variants for same test</td></tr>
          <tr><td>Excel/CSV Import</td><td>Large external datasets</td></tr>
          <tr><td>Buffers</td><td>Pass data between steps</td></tr>
          <tr><td>Business Parameters</td><td>Shared config across test cases</td></tr>
        </tbody>
      </table>` },
    { difficulty: 'hard', q: "How does Tosca integrate with CI/CD pipelines?",
      a: `<div class="ans-hero">Tosca uses its CI Client command-line tool to trigger DEX from Jenkins or Azure DevOps.</div>
      <ul class="ans-list">
        <li><span class="icon">🔧</span><strong>Jenkins:</strong> <code>ToscaCI.exe run --workspace "BankingTests"</code></li>
        <li><span class="icon">🔵</span><strong>Azure DevOps:</strong> Tosca Azure DevOps Extension — triggers and publishes results</li>
        <li><span class="icon">📊</span>Exports XML/JSON results parsed by CI for pass/fail reporting</li>
      </ul>` },

    // ── XScan & Module Creation ─────────────────────────────────
    { difficulty: 'easy', q: "Explain Tosca XScan and why it is used.",
      a: `<div class="ans-hero">XScan is Tosca's component for identifying and scanning application objects. It creates reusable Modules containing UI controls, identification properties, and steering parameters — with zero code.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Application</div><div class="step-desc">Open the live app (e.g. Login page: Username, Password, Login Button)</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">XScan Identifies Objects</div><div class="step-desc">Hover over elements — Tosca reads ID, Name, Class, Text, XPath properties</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Creates Module</div><div class="step-desc">Login_Module with Username, Password, Login Button attributes generated automatically</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Create TestCase → Execute</div><div class="step-desc">Drag attributes into test case, set ActionModes and values, run from Execution List</div></div></div>
      </div>` },

    { difficulty: 'easy', q: "What are Identification Properties in XScan?",
      a: `<div class="ans-hero">Identification properties are the attributes Tosca uses to uniquely locate an object on screen. Choosing stable, unique properties prevents test failures when the UI changes.</div>
      <table class="comparison-table">
        <thead><tr><th>Object Type</th><th>Recommended Properties</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>Textbox</td><td>ID, Name, Class</td><td>id=username</td></tr>
          <tr><td>Button</td><td>Caption, Text, ID</td><td>id=btnLogin, text=Login</td></tr>
          <tr><td>Dropdown</td><td>Name, Value</td><td>name=country_select</td></tr>
          <tr><td>Link</td><td>Href, Text</td><td>text=Fund Transfer</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'easy', q: "What is the difference between Technical ID and Logical ID in Tosca?",
      a: `<div class="ans-hero">Technical ID is the actual HTML/app property used to locate the element. Logical ID is a business-friendly name you give the Module Attribute in Tosca Commander.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Technical ID</h6>Actual property from the application source code.<br><br>Example: <code>id=username123</code><br><br>Set by developers. May change across releases. Used by XScan at runtime.</div>
        <div class="compare-card green"><h6>Logical ID</h6>Business-friendly display name in Tosca Commander.<br><br>Example: <code>Username_Field</code><br><br>Makes test cases readable. Test steps show "Username_Field" not "id=username123".</div>
      </div>` },

    { difficulty: 'easy', q: "What is XScan object identification priority?",
      a: `<div class="ans-hero">Tosca evaluates identification properties in a fixed priority order — always choose the highest-priority stable property available.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">ID</div><div class="step-desc">Most unique — preferred if present. Example: id=btnLogin</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Name</div><div class="step-desc">Usually unique per form. Example: name=username</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Automation ID (data-testid)</div><div class="step-desc">Explicitly added for test stability — most reliable long-term</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Class</div><div class="step-desc">Use only when unique — often shared across many elements</div></div></div>
        <div class="step-item"><div class="step-num">5</div><div class="step-content"><div class="step-title">Text / Caption</div><div class="step-desc">Good for buttons and links with stable visible text</div></div></div>
        <div class="step-item"><div class="step-num">6</div><div class="step-content"><div class="step-title">Position (index)</div><div class="step-desc">Last resort — breaks if page layout changes</div></div></div>
      </div>` },

    { difficulty: 'easy', q: "What is the difference between a Module and a TestStep in Tosca?",
      a: `<table class="comparison-table">
        <thead><tr><th>Aspect</th><th>Module</th><th>TestStep</th></tr></thead>
        <tbody>
          <tr><td>Definition</td><td>Object definition — the UI element captured by XScan</td><td>Execution action — how to interact with the module attribute</td></tr>
          <tr><td>Created using</td><td>XScan scanning tool</td><td>Drag-drop from module into test case designer</td></tr>
          <tr><td>Reusable?</td><td>Yes — one module used in hundreds of test cases</td><td>Individual test execution step</td></tr>
          <tr><td>Contains</td><td>Identification properties, ActionMode defaults, steering parameters</td><td>Module reference + value + ActionMode override</td></tr>
        </tbody>
      </table>` },

    // ── ActionModes ─────────────────────────────────────────────
    { difficulty: 'easy', q: "Explain all important ActionModes in Tosca.",
      a: `<table class="comparison-table">
        <thead><tr><th>ActionMode</th><th>Purpose</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><strong>Input</strong></td><td>Enter text/value into a field</td><td>Username: Input → "admin"</td></tr>
          <tr><td><strong>Click</strong></td><td>Click an element</td><td>Login Button: Click</td></tr>
          <tr><td><strong>Verify</strong></td><td>Assert element value matches expected</td><td>Welcome Msg: Verify → "Welcome Bob"</td></tr>
          <tr><td><strong>Buffer</strong></td><td>Capture &amp; store runtime value</td><td>Order ID: Buffer → {B[OrderID]}</td></tr>
          <tr><td><strong>Select</strong></td><td>Choose a dropdown option</td><td>Country: Select → "India"</td></tr>
          <tr><td><strong>Wait</strong></td><td>Pause until element reaches a state</td><td>Spinner: Wait → hidden</td></tr>
          <tr><td><strong>ToggleCheckbox</strong></td><td>Check / uncheck a checkbox</td><td>Terms: ToggleCheckbox → true</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'easy', q: "How do you clear a textbox before entering data in Tosca?",
      a: `<div class="ans-hero">Use the {CLEAR} prefix in the Input value to clear the field before typing new text.</div>
      <div class="code-block"><code>Module Attribute: Username_Field
  ActionMode: Input
  Value:       {CLEAR}karan@bankapp.com

// {CLEAR} erases existing content first, then types the new value</code></div>` },

    { difficulty: 'easy', q: "How do you press keyboard keys like Enter, Tab, Escape in Tosca?",
      a: `<div class="ans-hero">Tosca supports special key syntax using curly brace notation as the Input value.</div>
      <table class="comparison-table">
        <thead><tr><th>Key</th><th>Tosca Syntax</th><th>Use case</th></tr></thead>
        <tbody>
          <tr><td>Enter</td><td>{ENTER}</td><td>Submit a form without clicking button</td></tr>
          <tr><td>Tab</td><td>{TAB}</td><td>Move focus to next field</td></tr>
          <tr><td>Escape</td><td>{ESC}</td><td>Close a modal or cancel</td></tr>
          <tr><td>Clear then type</td><td>{CLEAR}admin</td><td>Erase existing value, then type "admin"</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'easy', q: "How do you verify that an object exists on the page in Tosca?",
      a: `<div class="ans-hero">Use ActionMode: Verify with Value: Exists to confirm an element is present without checking its actual text value.</div>
      <div class="code-block"><code>Module Attribute: Login_Button
  ActionMode: Verify
  Value:       Exists   // confirms button is present on the page

// To verify it is NOT present:
Module Attribute: Error_Popup
  ActionMode: Verify
  Value:       NotExists</code></div>` },

    { difficulty: 'easy', q: "How do you handle dropdowns in Tosca?",
      a: `<div class="ans-hero">Use ActionMode: Select with the visible text value of the option to choose.</div>
      <div class="code-block"><code>// Country dropdown with options: USA, India, UK
Module Attribute: Country_Dropdown
  ActionMode: Select
  Value:       India

// Transfer type dropdown
Module Attribute: Transfer_Type
  ActionMode: Select
  Value:       NEFT</code></div>` },

    { difficulty: 'easy', q: "How do you handle checkboxes in Tosca?",
      a: `<div class="ans-hero">Use ActionMode: Input with Value: True to check, False to uncheck.</div>
      <div class="code-block"><code>// Check the "Accept Terms" checkbox
Module Attribute: Accept_Terms_Checkbox
  ActionMode: Input
  Value:       True

// Uncheck the "Remember Me" checkbox
Module Attribute: Remember_Me_Checkbox
  ActionMode: Input
  Value:       False</code></div>` },

    // ── Buffer ──────────────────────────────────────────────────
    { difficulty: 'medium', q: "What is Buffer in Tosca and how do you create and use one?",
      a: `<div class="ans-hero">Buffer stores a runtime value (generated ID, OTP, reference number) so it can be reused in later test steps without hardcoding.</div>
      <div class="code-block"><code>// Step 1: Store the generated Customer ID
Customer_ID_Label
  ActionMode:  Buffer
  Buffer Name: Customer_ID

// Step 2: Use the stored value in search
Search_Field
  ActionMode: Input
  Value:      {B[Customer_ID]}

// Step 3: Verify on confirmation page
Confirmation_ID_Label
  ActionMode: Verify
  Value:      {B[Customer_ID]}

// Step 4: Clean up after test
TBox Delete Buffer
  Buffer Name: Customer_ID</code></div>` },

    { difficulty: 'medium', q: "How do you verify a buffered value in Tosca?",
      a: `<div class="ans-hero">Set ActionMode: Verify and Value: {B[BufferName]} — Tosca compares the current element text against the stored buffer value.</div>
      <div class="code-block"><code>// After ordering, reference number was buffered as {B[RefNo]}
// On the confirmation page:
Reference_Number_Label
  ActionMode: Verify
  Value:      {B[RefNo]}    // Tosca checks label text == stored ref number</code></div>
      <div class="info-panel tip"><div class="panel-title">When to use buffer verify</div><p>Use when the expected value is dynamic (generated at runtime). If the expected value is fixed (e.g. "Welcome, Admin"), just type the string directly.</p></div>` },

    // ── Dynamic objects & XScan fixes ───────────────────────────
    { difficulty: 'medium', q: "How do you scan Shadow DOM elements in Tosca?",
      a: `<div class="ans-hero">Shadow DOM elements are inside a shadow root — Tosca's HTML engine must be configured to pierce the shadow boundary.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Enable browser engine / shadow DOM support</div><div class="step-desc">In XScan settings, enable the option to scan inside Shadow DOM roots.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Identify the shadow root element</div><div class="step-desc">Scan the host element that contains the shadow root first.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Scan inner elements</div><div class="step-desc">Drill into the shadow root to scan the actual controls inside it.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Validate properties</div><div class="step-desc">Confirm the scanned element's properties uniquely identify it within the shadow tree.</div></div></div>
      </div>` },

    { difficulty: 'medium', q: "How do you automate objects inside an iframe in Tosca?",
      a: `<div class="ans-hero">Scan the iframe container first, then scan the elements inside it. The module hierarchy mirrors the DOM: Browser → iframe → element.</div>
      <div class="code-block"><code>Module Hierarchy:
Browser
  |
  +-- PaymentIframe   (scanned as iframe container)
        |
        +-- Card_Number_Field    (ActionMode: Input)
        +-- CVV_Field            (ActionMode: Input)
        +-- Pay_Button           (ActionMode: Click)</code></div>
      <div class="info-panel tip"><div class="panel-title">Key step</div><p>In XScan, select the correct engine for the iframe's content technology. A payment gateway iframe is usually a separate domain — select "HTML" engine and scan inside the frame boundary.</p></div>` },

    { difficulty: 'medium', q: "How do you automate a hidden object or object not yet visible in Tosca?",
      a: `<div class="ans-hero">Wait for the element to become visible before interacting. Use a Wait ActionMode step or Synchronisation settings to pause execution until the element appears.</div>
      <ul class="ans-list green">
        <li><span class="icon">1</span><strong>Wait step:</strong> Add a module attribute with ActionMode: Wait → the element state you expect (Visible, Enabled)</li>
        <li><span class="icon">2</span><strong>Change application state first:</strong> Trigger the action that causes the element to appear (click a button, expand a section), then interact</li>
        <li><span class="icon">3</span><strong>Synchronisation settings:</strong> Configure global or local synchronisation timeout in the test case properties to allow the app time to load</li>
      </ul>` },

    { difficulty: 'medium', q: "How do you update a module after a UI change without editing all test cases?",
      a: `<div class="ans-hero">Re-scan only the changed Module Attributes. All test cases that reference those attributes automatically use the updated identification properties.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Run a failing test to identify the broken module</div><div class="step-desc">The error log pinpoints which module and attribute failed</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Open the module in Commander</div><div class="step-desc">Navigate to Modules → find the affected module (e.g. LoginPage Module)</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Right-click broken attribute → Rescan</div><div class="step-desc">XScan highlights the element on the live page → confirm the new properties → save</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">All test cases auto-healed</div><div class="step-desc">Zero test case edits needed. This is the core MBTA advantage.</div></div></div>
      </div>` },

    // ── TestCase Design ─────────────────────────────────────────
    { difficulty: 'medium', q: "How do you create reusable TestCases (TestStepBlocks) in Tosca?",
      a: `<div class="ans-hero">Create a TestStepBlock containing common steps (Login, Logout, Navigation). Any test case calls the block as a single step — changes to the block propagate everywhere.</div>
      <div class="code-block"><code>// Login_Block (TestStepBlock — reusable)
  |-- Open Browser  → https://bankapp.com/login
  |-- Username      → Input → admin@bankapp.com
  |-- Password      → Input → Secure@1234
  |-- Login_Button  → Click
  |-- Dashboard     → Verify → Exists

// Used by:
Smoke_Test     → calls Login_Block (1 step)
Regression_TC  → calls Login_Block (1 step)
E2E_Test       → calls Login_Block (1 step)</code></div>
      <div class="info-panel tip"><div class="panel-title">Benefit</div><p>When the login URL changes, update Login_Block once. All 200 test cases that call it are automatically fixed.</p></div>` },

    { difficulty: 'medium', q: "How do you parameterize Tosca tests to run with multiple datasets?",
      a: `<div class="ans-hero">Use TestCase Design in Tosca — define multiple data rows in the test case. Each row is an independent execution iteration with different values.</div>
      <div class="code-block"><code>TestCase: Login_DataDriven

Columns:    Username              | Password       | Expected
Row 1:      user1@bank.com        | Pass1          | Welcome, User1
Row 2:      manager@bank.com      | MgrPass        | Welcome, Manager
Row 3:      invalid@bank.com      | WrongPass      | Invalid credentials
Row 4:      (empty)               | Pass1          | Username is required</code></div>
      <div class="info-panel tip"><div class="panel-title">Data sources</div><p>Test data can also be loaded from Excel files (TBox Excel Engine) or from Tosca TDM (Test Data Management) for complex relational datasets.</p></div>` },

    { difficulty: 'medium', q: "How do you handle environment changes (DEV, QA, UAT) in Tosca?",
      a: `<div class="ans-hero">Store environment-specific values in Business Parameters (EPs). The test case references {EP[Param.Name]} — change the parameter value to switch environments without touching test cases.</div>
      <div class="code-block"><code>// Business Parameters:
EP[ENV.BaseURL]     = https://uat.bankapp.com    ← change for DEV/QA/PROD
EP[ENV.AdminUser]   = admin@uat.bankapp.com
EP[ENV.AdminPass]   = UAT_Admin@1234

// In test case:
Open Browser
  Value: {EP[ENV.BaseURL]}

Username
  Value: {EP[ENV.AdminUser]}</code></div>` },

    // ── TBox ────────────────────────────────────────────────────
    { difficulty: 'medium', q: "What is TBox in Tosca and what operations does it support?",
      a: `<div class="ans-hero">TBox (Tosca-Box) is a library of pre-built standard modules for non-UI operations: file handling, Excel, database, buffers, calculations, date/time, and system operations.</div>
      <table class="comparison-table">
        <thead><tr><th>TBox Category</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td>Buffer operations</td><td>TBox Delete Buffer, TBox Set Buffer</td></tr>
          <tr><td>File operations</td><td>TBox File Read, TBox File Write, TBox File Copy</td></tr>
          <tr><td>Excel operations</td><td>TBox Excel Read, TBox Excel Write</td></tr>
          <tr><td>Database operations</td><td>TBox DB Query, TBox DB Execute</td></tr>
          <tr><td>Date/Time</td><td>TBox Get Date → {DATE}, date arithmetic</td></tr>
          <tr><td>Calculations</td><td>TBox Evaluation Tool → 10+20 = 30</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'medium', q: "How do you read data from an Excel file in Tosca?",
      a: `<div class="ans-hero">Use TBox Excel Engine to connect Tosca to an Excel file and read cell values as input for test steps.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Add TBox Excel Read step</div><div class="step-desc">Specify the Excel file path, sheet name, and cell reference (e.g. Sheet1!B2)</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Buffer the value</div><div class="step-desc">TBox Excel Read → ActionMode: Buffer → Buffer Name: TestUsername</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Use in test step</div><div class="step-desc">Username Field → Input → {B[TestUsername]}</div></div></div>
      </div>` },

    { difficulty: 'medium', q: "How do you perform date validation in Tosca?",
      a: `<div class="ans-hero">Use the {DATE} built-in expression for the current date. TBox Evaluation Tool performs date arithmetic for past/future date calculations.</div>
      <div class="code-block"><code>// Current date:
Date_Field
  ActionMode: Verify
  Value:      {DATE}

// Today's date formatted:
  Value:      {DATE:dd/MM/yyyy}

// Date 30 days from now (TBox Evaluation):
TBox Evaluation Tool
  Expression: {DATE} + 30 days
  Buffer:     FutureDate

Date_Field
  ActionMode: Input
  Value:      {B[FutureDate]}</code></pre>
      </div>` },

    // ── Database & API ──────────────────────────────────────────
    { difficulty: 'hard', q: "How do you connect to a database and validate data in Tosca?",
      a: `<div class="ans-hero">Configure a DB connection in Tosca Settings, then use DB Module steps to execute SQL queries and verify results.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Configure DB connection</div><div class="step-desc">Tosca Settings → DB Connections → Add: driver type, server, port, database, username, password (stored once, reused everywhere)</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Add DB Module step in TestCase</div><div class="step-desc">SELECT status FROM customers WHERE id = '{B[CustomerID]}'</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Verify query result</div><div class="step-desc">ActionMode: Verify → Expected Value: ACTIVE</div></div></div>
      </div>
      <div class="info-panel tip"><div class="panel-title">Full end-to-end pattern</div><p>UI action → Buffer generated ID → DB query with {B[ID]} → Verify DB result. One test case validates both the UI and the database layer.</p></div>` },

    { difficulty: 'hard', q: "How do you perform API testing in Tosca?",
      a: `<div class="ans-hero">Use Tosca's API Module to send HTTP requests and validate responses — GET, POST, PUT, DELETE with headers, body, and response assertions in the same test case as UI steps.</div>
      <div class="code-block"><code>// API TestCase: Validate Fund Transfer API
Step 1: API Request Module
  Method:   POST
  URL:      {EP[ENV.BaseURL]}/api/transfer
  Headers:  Authorization: Bearer {B[AuthToken]}
  Body:     { "fromAccount": "1234", "toAccount": "5678", "amount": 5000 }

Step 2: Verify Response
  Status Code:    Verify → 200
  Body.status:    Verify → SUCCESS
  Body.reference: Buffer → {B[TransferRef]}

Step 3: UI verification (combined test)
  Navigate to statement page
  Search with {B[TransferRef]}
  Verify entry appears</code></div>` },

    { difficulty: 'hard', q: "How do you validate a JSON API response value in Tosca?",
      a: `<div class="ans-hero">Use JSON path expressions in the API Module's response verification step to extract and verify specific fields from the response body.</div>
      <div class="code-block"><code>// API Response:
{
  "id": 101,
  "name": "John Doe",
  "status": "ACTIVE"
}

// Tosca API Module verification steps:
id      → Verify → 101
name    → Verify → John Doe
status  → Verify → ACTIVE

// Or buffer for reuse:
id      → Buffer → CustomerID
// Later: Search_Field → Input → {B[CustomerID]}</code></div>` },

    // ── Recovery Scenarios ──────────────────────────────────────
    { difficulty: 'hard', q: "What is a Recovery Scenario in Tosca and how do you create one?",
      a: `<div class="ans-hero">A Recovery Scenario handles unexpected situations during execution — unexpected popups, error dialogs, session timeouts — without failing the test case. Tosca detects the condition, handles it, and continues.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Create Recovery folder in Commander</div><div class="step-desc">Right-click Test Cases area → Add Recovery Scenario folder</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Define trigger condition</div><div class="step-desc">Example: Session Expired popup appears (Verify: popup title = "Session Expired")</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Define recovery steps</div><div class="step-desc">Click "OK" on popup → re-login → navigate back to the page where execution stopped</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Assign to TestCase / Execution List</div><div class="step-desc">Set the recovery scenario in the TestCase or Execution List properties. Tosca auto-applies it when the trigger is detected.</div></div></div>
      </div>` },

    { difficulty: 'medium', q: "What is the difference between a Recovery Scenario and a Cleanup in Tosca?",
      a: `<table class="comparison-table">
        <thead><tr><th>Aspect</th><th>Recovery Scenario</th><th>Cleanup</th></tr></thead>
        <tbody>
          <tr><td>When it runs</td><td>During execution when an unexpected condition occurs</td><td>After execution (pass or fail) to restore the environment</td></tr>
          <tr><td>Purpose</td><td>Handle and recover from failures — continue execution</td><td>Restore test data, close browsers, delete created records</td></tr>
          <tr><td>Example</td><td>Session Expired popup → click OK → re-login → continue</td><td>Delete test customer created during the test</td></tr>
          <tr><td>Trigger</td><td>Condition-based (popup appears)</td><td>Always runs after test case ends</td></tr>
        </tbody>
      </table>` },

    // ── Execution ───────────────────────────────────────────────
    { difficulty: 'medium', q: "What is an Execution List in Tosca and what does it contain?",
      a: `<div class="ans-hero">An Execution List is a container that groups TestCases for a specific execution run — defining which tests to run, in what order, and with what execution configuration (agents, browsers, parallel settings).</div>
      <div class="code-block"><code>Execution List: Banking_Regression_Suite
  |
  |-- Login Tests          (5 test cases)
  |-- Fund Transfer Tests  (10 test cases)
  |-- Beneficiary Tests    (6 test cases)
  |-- Statement Tests      (4 test cases)
  |
  Settings:
    Parallel: true
    Agents:   4
    Browser:  Chrome</code></div>` },

    { difficulty: 'hard', q: "How do you execute Tosca tests in parallel to reduce execution time?",
      a: `<div class="ans-hero">Enable Execution Distribution (DEX) in the Execution List settings. Assign multiple agents (machines/VMs). Tosca distributes test cases across agents automatically.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Sequential (1 agent)</h6>400 tests × 54s avg = 6 hours. Any failure blocks the remaining tests.</div>
        <div class="compare-card green"><h6>Parallel DEX (10 agents)</h6>400 tests ÷ 10 = 40 tests/agent × 54s = ~36 min. Agent failure only affects its own batch.</div>
      </div>
      <ul class="ans-list green">
        <li><span class="icon">1</span>Design independent test cases — no shared state between parallel-running tests</li>
        <li><span class="icon">2</span>Use separate TDM data subsets per agent — no two agents use the same bank account</li>
        <li><span class="icon">3</span>Configure DEX Server with Elastic Grid (Azure VMs) for auto-scaling</li>
      </ul>` },

    // ── Advanced Scenarios ──────────────────────────────────────
    { difficulty: 'hard', q: "Login button works manually but fails in Tosca execution. How do you debug it?",
      a: `<div class="ans-hero">Work through a systematic debug checklist: identification, synchronisation, object state, browser compatibility.</div>
      <ul class="ans-list green">
        <li><span class="icon">1</span><strong>Check identification:</strong> Re-scan the button — did the ID/class change in recent deployment?</li>
        <li><span class="icon">2</span><strong>Check synchronisation:</strong> Is Tosca clicking before the button is fully rendered? Add a Wait step before the click.</li>
        <li><span class="icon">3</span><strong>Verify object state:</strong> Is the button enabled when Tosca reaches it? Check if a loading overlay is covering it.</li>
        <li><span class="icon">4</span><strong>Check browser compatibility:</strong> Test in headed mode — see what Tosca actually sees. Verify the correct browser profile is configured.</li>
        <li><span class="icon">5</span><strong>Re-scan the module:</strong> Open the module attribute → right-click → Rescan. Confirm new properties match the live element.</li>
      </ul>` },

    { difficulty: 'hard', q: "The same object exists multiple times on a page. How do you handle it in Tosca?",
      a: `<div class="ans-hero">Use Index (positional), Anchor (nearby unique element), unique properties (add data-testid with developer help), or relative identification.</div>
      <table class="comparison-table">
        <thead><tr><th>Approach</th><th>When to use</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>Index</td><td>Elements in a predictable, stable order</td><td>3rd Submit button → Index = 3</td></tr>
          <tr><td>Anchor</td><td>Nearby unique label or heading exists</td><td>"Order Total" label → anchor for Submit button</td></tr>
          <tr><td>Unique property</td><td>Developer adds data-testid or ID</td><td>data-testid=submit-order vs submit-cart</td></tr>
          <tr><td>Relative identification</td><td>Element is a sibling/child of a known element</td><td>Row 3 of a table → button in that row</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'hard', q: "How do you integrate Tosca with Jenkins for CI/CD?",
      a: `<div class="ans-hero">Use Tosca's CI Client command-line tool (ToscaCI.exe) in a Jenkins pipeline step. Results exported as XML/JSON and parsed by Jenkins for pass/fail reporting.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Git push triggers Jenkins pipeline</div><div class="step-desc">Developer pushes to main branch → Jenkins build starts</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Jenkins runs ToscaCI.exe</div><div class="step-desc"><code>ToscaCI.exe run --workspace "BankingTests" --executionList "Regression"</code></div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Tosca DEX executes tests</div><div class="step-desc">Runs tests on configured agents, collects results</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Jenkins publishes report</div><div class="step-desc">Tosca exports XML → Jenkins JUnit plugin parses it → build marked PASS/FAIL → HTML report archived</div></div></div>
      </div>` },

    { difficulty: 'hard', q: "How do you migrate Tosca tests between projects or environments?",
      a: `<div class="ans-hero">Export the Tosca workspace objects as XML, import in the target project, then verify dependencies (modules, test data, Business Parameters) are properly mapped.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Export XML from source project</div><div class="step-desc">Commander → select folders (Modules + TestCases + Execution Lists) → right-click → Export XML</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Import in target project</div><div class="step-desc">Commander → right-click destination → Import XML → select the exported file</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Verify dependencies</div><div class="step-desc">Check that Business Parameters, DB connections, and environment settings are updated for the new environment</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Smoke test the migrated suite</div><div class="step-desc">Run a subset of key test cases to confirm the migration worked correctly</div></div></div>
      </div>` },

    { difficulty: 'hard', q: "Design a complete Enterprise Tosca Framework architecture.",
      a: `<div class="ans-hero">An enterprise Tosca framework is layered: Requirements → Modules → Reusable Blocks → TestCases → Execution Lists → Reports → CI/CD.</div>
      <div class="code-block"><code>Enterprise Tosca Framework

Requirements (JIRA / ALM)
  |
  +-- Modules (XScan — one per page/screen)
  |     Login_Module, Transfer_Module, Dashboard_Module ...
  |
  +-- Reusable TestStepBlocks
  |     Login_Block, Logout_Block, Navigate_To_Transfer_Block ...
  |
  +-- TestCases (use modules + blocks)
  |     TC_Login_Valid, TC_Transfer_NEFT, TC_Beneficiary_Add ...
  |
  +-- TestCase Designs (data-driven rows per test)
  |     Username | Password | Expected (multiple rows)
  |
  +-- Execution Lists
  |     Smoke_Suite (10 TCs), Regression_Suite (400 TCs)
  |
  +-- DEX + Elastic Grid (parallel execution, 10 agents)
  |
  +-- Reports (TDM, HTML, XML for Jenkins)
  |
  +-- CI/CD (Jenkins/Azure DevOps via ToscaCI.exe)</code></div>
      <div class="info-panel tip"><div class="panel-title">Key principle</div><p>Modularity at every layer: one UI change = one module re-scan = zero test case edits. One login flow change = one block update = zero test case edits.</p></div>` },

    { difficulty: 'hard', q: "Your Tosca regression suite has 5000 tests and takes 12 hours. What is your optimisation strategy?",
      a: `<div class="ans-hero">Combine parallel execution (DEX), risk-based prioritisation, duplicate removal, and optimised synchronisation to achieve a 4-6x speedup.</div>
      <table class="comparison-table">
        <thead><tr><th>Optimisation</th><th>Action</th><th>Estimated saving</th></tr></thead>
        <tbody>
          <tr><td>Parallel execution (DEX)</td><td>Enable 10+ agents via Elastic Grid</td><td>12h → ~75 min (10x)</td></tr>
          <tr><td>Duplicate removal</td><td>Audit for redundant test cases covering same scenario</td><td>Reduce 5000 → ~3500 TCs</td></tr>
          <tr><td>Risk-based regression</td><td>Tag critical tests → run full suite nightly, critical-only on each PR</td><td>PR pipeline: 12h → 30 min</td></tr>
          <tr><td>Optimise wait times</td><td>Replace fixed waits with synchronised Wait ActionMode steps</td><td>10-20% reduction</td></tr>
          <tr><td>Reusable blocks</td><td>Replace repeated login steps with Login_Block → fewer total steps</td><td>5-10% faster setup</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'hard', q: "How do you automate SAP screens using Tosca?",
      a: `<div class="ans-hero">Tosca has native SAP engine support. XScan detects SAP controls (transactions, input fields, table rows) using the SAP GUI scripting API — no extra setup beyond enabling GUI scripting in SAP.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Enable SAP GUI Scripting</div><div class="step-desc">In SAP GUI: Options → Accessibility → Enable scripting. This allows Tosca to communicate with SAP controls.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Select SAP engine in XScan</div><div class="step-desc">In Tosca Commander → Modules → Scan → select "SAP" as technology type</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Scan SAP controls</div><div class="step-desc">Tosca reads SAP control IDs (usr/pnlStd/scrpArea/subSELECT_HEADER/...). Create modules for each SAP screen (Material Master, Sales Order, etc.)</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Create and execute test cases</div><div class="step-desc">Map business flows (Create Material → Post Goods) using scanned modules. Execute via standard Execution List.</div></div></div>
      </div>` }
  ],

  // ── AI With Testing ───────────────────────────────────────────
  'ai-testing': [
    { difficulty: 'easy', q: "What is AI in software testing? How is it different from traditional automation?",
      a: `<div class="ans-hero">AI in testing uses machine learning and generative AI to automate test creation, predict defects, self-heal failing scripts, and analyze results — going far beyond scripted automation that just replays recorded steps.</div>
      <table class="comparison-table">
        <thead><tr><th>Aspect</th><th>Traditional Automation</th><th>AI-Powered Testing</th></tr></thead>
        <tbody>
          <tr><td>Test creation</td><td>Tester writes every script manually</td><td>AI generates scripts from requirements</td></tr>
          <tr><td>Maintenance</td><td>Tester fixes every broken locator</td><td>Self-healing AI updates locators automatically</td></tr>
          <tr><td>Test selection</td><td>Run all tests every time</td><td>AI selects impacted tests based on code changes</td></tr>
          <tr><td>Defect analysis</td><td>Tester reads logs manually</td><td>AI scans 50k logs in seconds, identifies root cause</td></tr>
          <tr><td>Visual testing</td><td>Pixel comparison — 90% false positives</td><td>AI visual testing — near-zero false positives</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'easy', q: "What is Generative AI and how can QA engineers use it daily?",
      a: `<div class="ans-hero">Generative AI (ChatGPT, Claude, Copilot) creates new content from prompts — QA engineers use it to generate test cases, write automation scripts, create test data, and draft bug reports in minutes instead of hours.</div>
      <table class="comparison-table">
        <thead><tr><th>Daily Task</th><th>Without GenAI</th><th>With GenAI</th></tr></thead>
        <tbody>
          <tr><td>50 test cases</td><td>2–3 hours</td><td>5 minutes (prompt + review)</td></tr>
          <tr><td>Selenium POM class</td><td>45 minutes</td><td>3 minutes (Copilot)</td></tr>
          <tr><td>Bug report</td><td>15 min per bug</td><td>1 min (AI drafts, tester reviews)</td></tr>
          <tr><td>1000 test records</td><td>Half a day</td><td>30 seconds</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'easy', q: "What is Prompt Engineering? Why is it important for QA engineers?",
      a: `<div class="ans-hero">Prompt Engineering is writing precise, structured instructions for AI tools to produce high-quality, testing-specific output. A well-crafted prompt returns production-ready test cases; a vague one returns generic garbage.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Bad Prompt</h6>"Create test cases for login."<br>Result: 5 generic scenarios, no test data, no structure, no banking context.</div>
        <div class="compare-card green"><h6>Good Prompt</h6>"You are a senior QA for a banking app. Generate 20 test cases for login. Include: Test ID, Steps, Test Data, Expected Result, Priority. Cover: valid login, invalid password, locked account, session timeout, SQL injection."<br>Result: 20 structured, domain-aware, edge-case-complete test cases.</div>
      </div>
      <div class="info-panel tip"><div class="panel-title">Prompt formula</div><p><strong>Role:</strong> "You are a senior QA..." | <strong>Context:</strong> "banking application" | <strong>Format:</strong> "Table with Test ID, Steps..." | <strong>Coverage:</strong> "Include negative, boundary, security scenarios"</p></div>` },

    { difficulty: 'medium', q: "What is self-healing test automation? How does Healenium work?",
      a: `<div class="ans-hero">Self-healing automation detects when a locator fails (because the developer renamed it), automatically finds the correct element using ML similarity, and continues the test — preventing CI failures from routine UI changes.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">By.id("loginBtn") fails</div><div class="step-desc">Developer renamed the element. Traditional Selenium throws NoSuchElementException and the test fails.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Healenium scans DOM</div><div class="step-desc">ML algorithm scores all elements by similarity to original: tag, text content, CSS path, surrounding context.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Best match found and used</div><div class="step-desc">id="submit-login" matches with 94% confidence. Used for this execution. Test passes.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Healing report generated</div><div class="step-desc">HTML report: old locator → new locator → confidence score. Tester reviews and approves the update.</div></div></div>
      </div>` },

    { difficulty: 'medium', q: "What is Applitools Eyes? How does AI Visual Testing differ from pixel comparison?",
      a: `<div class="ans-hero">Applitools Eyes uses Visual AI to compare screenshots semantically — it understands UI context, so it ignores expected dynamic content (timestamps, ads) while accurately detecting real defects (alignment shifts, missing elements).</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Pixel Comparison</h6>Any pixel different = FAIL. Tooltip appearing → 500 pixels changed → fails. Timestamp updated → fails. 90% of failures are false positives. Team ignores them.</div>
        <div class="compare-card green"><h6>Applitools Visual AI</h6>Understands context. "Tooltip = expected dynamic." "Balance card shifted 20px right = real layout defect." Near-zero false positives. Every alert is a real issue.</div>
      </div>` },

    { difficulty: 'medium', q: "What is Intelligent Test Prioritization? How does AI decide which tests to run?",
      a: `<div class="ans-hero">AI maps code changes to dependent test cases using historical data and service dependency graphs — running only impacted tests in CI, skipping unrelated ones, and reducing pipeline time dramatically.</div>
      <div class="code-block"><code>Code change: TransferService.java modified

AI Impact Analysis:
  TransferService → fund-transfer, balance calc, OTP flow

  MUST RUN:
    FundTransferTest, BalanceVerificationTest, OTPTest

  SKIP (no dependency):
    LoginTest, BeneficiaryTest, ProfileTest

  CI time: 4 hours → 45 minutes</code></div>` },

    { difficulty: 'medium', q: "How does AI help with defect analysis and root cause identification?",
      a: `<div class="ans-hero">AI log analysis tools (Datadog AI, Splunk AI) scan millions of log lines in seconds — correlating errors with deployments, identifying the most frequent failure pattern, and surfacing the root cause that would take a human analyst hours.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Production issue detected</div><div class="step-desc">15% of fund transfers failing. 2 million log lines in 10 minutes.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">AI scans all logs</div><div class="step-desc">Groups similar errors. "NullPointerException in TransferService.validateOTP() — 94% of failures"</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Correlates with deployment</div><div class="step-desc">Error rate started exactly when TransferService v2.3.1 deployed → that deployment caused the issue.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Full RCA in 5 minutes</div><div class="step-desc">vs 2+ hours manually. Team notified via Slack with complete RCA summary and reproduction steps.</div></div></div>
      </div>` },

    { difficulty: 'hard', q: "How would you integrate AI into an existing Selenium test framework?",
      a: `<div class="ans-hero">Layer AI capabilities onto the existing framework without rewriting it: add Healenium for self-healing, GitHub Copilot for script generation, Applitools for visual testing, and AI prompts for test case generation alongside manual tests.</div>
      <div class="step-flow">
        <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Self-healing (Healenium)</div><div class="step-desc">Add healenium-web dependency. Wrap WebDriver: SelfHealingDriver.create(chromeDriver). Zero code changes to existing tests.</div></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">AI script generation</div><div class="step-desc">New tests: use GitHub Copilot inside IDE to auto-complete Page Object methods. Use ChatGPT to generate TestNG @Test methods from requirement text.</div></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Visual regression</div><div class="step-desc">Add Applitools SDK. In each test add: eyes.checkWindow("Page Name"). Run baseline capture once, then every CI run compares against baseline.</div></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">AI failure analysis</div><div class="step-desc">After CI run, send failure logs + stack trace to ChatGPT API: "Analyze this failure and suggest root cause." Attach response to test report.</div></div></div>
      </div>` },

    { difficulty: 'hard', q: "Design an AI-powered test automation framework for a banking application.",
      a: `<div class="ans-hero">Combine AI generation, Playwright execution, self-healing, visual testing, and AI analytics into a single automated pipeline triggered by every code commit.</div>
      <div class="code-block"><code>BankingAIFramework/
├── ai-generation/
│   ├── test-case-generator.js   ← ChatGPT API → test cases from requirements
│   └── script-generator.js     ← AI → Playwright TypeScript tests
│
├── playwright-tests/
│   ├── tests/                   ← AI-generated + manually crafted specs
│   ├── pages/                   ← Page Object Model (POM)
│   └── fixtures/auth.setup.ts  ← storageState (fast login)
│
├── self-healing/
│   └── healenium.config.js     ← ML self-healing for locator failures
│
├── visual-testing/
│   └── applitools.config.ts    ← Visual AI baseline comparison
│
├── ai-analysis/
│   └── failure-rca.js          ← Send failures to LLM → get RCA summary
│
└── playwright.config.ts
    └── fullyParallel, sharding: 4 runners</code></div>
      <div class="info-panel tip"><div class="panel-title">Outcome</div><p>4h manual regression → 20 min AI-driven CI. Near-zero locator maintenance. Visual regressions caught before release. RCA report auto-generated for every failure.</p></div>` },

    { difficulty: 'hard', q: "What is an AI Agent-Based testing architecture? What are the specialized agents?",
      a: `<div class="ans-hero">An AI Agent-Based architecture uses specialized agents coordinated by an orchestrator — each agent owns one testing responsibility, they communicate, and the system continuously improves through a learning feedback loop.</div>
      <table class="comparison-table">
        <thead><tr><th>Agent</th><th>Responsibility</th></tr></thead>
        <tbody>
          <tr><td><strong>Planning Agent</strong></td><td>Reads requirements + UI → generates test strategy and workflow list</td></tr>
          <tr><td><strong>Generation Agent</strong></td><td>Workflow list → writes Playwright TypeScript test code</td></tr>
          <tr><td><strong>Execution Agent</strong></td><td>Runs tests, monitors for failures, reports results</td></tr>
          <tr><td><strong>Self-Healing Agent</strong></td><td>Detects locator failures → updates locators automatically → re-tests</td></tr>
          <tr><td><strong>Analysis Agent</strong></td><td>Interprets results, classifies failures (real defect vs flaky vs locator)</td></tr>
          <tr><td><strong>Data Agent</strong></td><td>Generates, manages, and cleans up test data</td></tr>
          <tr><td><strong>Learning Agent</strong></td><td>Feeds results back to improve all other agents over time</td></tr>
          <tr><td><strong>Security Agent</strong></td><td>Runs vulnerability scans (SQL injection, XSS, auth bypass) automatically</td></tr>
        </tbody>
      </table>` },

    { difficulty: 'hard', q: "Will AI replace QA engineers? What is the future QA role?",
      a: `<div class="ans-hero">AI replaces repetitive mechanical testing tasks — not testers. The QA role evolves from writing scripts to designing AI frameworks, validating AI output, and focusing on exploratory and strategic testing.</div>
      <div class="compare-grid">
        <div class="compare-card red"><h6>Tasks AI Automates</h6>Routine regression test case writing<br>Locator maintenance after UI changes<br>Boilerplate automation scripts<br>Test data entry<br>Standard bug report templates</div>
        <div class="compare-card green"><h6>Tasks Humans Own</h6>Exploratory testing (unknown unknowns)<br>Validating AI-generated test correctness<br>Designing AI testing strategy<br>Business logic judgment calls<br>Stakeholder communication</div>
      </div>
      <div class="info-panel tip"><div class="panel-title">Career advice</div><p>The engineer who uses AI to work 10x faster is MORE valuable, not replaced. Title evolution: QA Engineer → AI-Augmented QA Engineer → Intelligent Automation Engineer → AI SDET.</p></div>` }
  ]
};
