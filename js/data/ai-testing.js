// ================================================================
// AI WITH TESTING DATA
// ================================================================
const AI_TESTING_TOPICS = [

  // ── 1. Why AI in Testing ──────────────────────────────────────
  {
    id: 'ai-testing-introduction',
    title: 'Why AI is Needed in Testing',
    section: 'ai-testing',
    difficulty: 'easy',
    time: '15 min',
    shortDesc: 'The problem with traditional testing, how AI transforms every phase of the STLC, and why every QA engineer needs AI skills.',
    content: `
      <div class="topic-section">
        <h2>The Problem with Traditional Testing</h2>
        <div class="ans-hero">Modern applications ship faster, change more often, and have thousands of screens. Traditional manual testing and even basic automation can no longer keep pace — this is exactly why AI is transforming the QA industry.</div>

        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Traditional Testing — The Bottleneck</h6>
            <ul>
              <li>Tester manually writes every test case</li>
              <li>Automation scripts break every UI change</li>
              <li>Regression takes days — slows releases</li>
              <li>Defects found only after development</li>
              <li>Test data created manually</li>
              <li>Log analysis done by humans scanning files</li>
            </ul>
          </div>
          <div class="compare-card green">
            <h6>AI-Powered Testing — The Solution</h6>
            <ul>
              <li>AI generates test cases from requirements</li>
              <li>Self-healing tests auto-adapt to UI changes</li>
              <li>AI prioritizes which tests to run — 10x faster</li>
              <li>AI predicts defect-prone areas before testing</li>
              <li>AI generates thousands of realistic test records</li>
              <li>AI scans 50,000 log lines in seconds</li>
            </ul>
          </div>
        </div>

        <h3>Traditional vs AI-Powered STLC</h3>
        <table class="comparison-table">
          <thead><tr><th>STLC Phase</th><th>Traditional</th><th>With AI</th></tr></thead>
          <tbody>
            <tr><td>Requirement Analysis</td><td>Manual reading and interpretation</td><td>AI identifies missing/ambiguous requirements</td></tr>
            <tr><td>Test Case Design</td><td>Tester writes every scenario manually</td><td>AI generates 100 test cases from one requirement</td></tr>
            <tr><td>Test Data</td><td>Manually created spreadsheets</td><td>AI generates realistic, boundary-aware datasets</td></tr>
            <tr><td>Script Creation</td><td>Tester writes Selenium/Playwright code</td><td>AI generates automation scripts from prompts</td></tr>
            <tr><td>Execution</td><td>All tests run every time</td><td>AI runs only high-risk tests based on code changes</td></tr>
            <tr><td>Defect Analysis</td><td>Tester manually writes bug reports</td><td>AI generates detailed bug reports with root cause</td></tr>
            <tr><td>Maintenance</td><td>Fix broken locators manually</td><td>Self-healing AI updates locators automatically</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>AI in Automation Testing Workflow</h2>
        <img src="images/ai-testing/ai-automation-workflow.jpeg" alt="AI in Automation Testing Workflow — Test Case Generation, Test Upkeep, Defect Prediction, Test Execution" class="notion-img" />

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-robot"></i></div>
            <div class="bm-title">Test Generation</div>
            <div class="bm-count">AI creates cases from behavior</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-arrow-repeat"></i></div>
            <div class="bm-title">Test Upkeep</div>
            <div class="bm-count">AI maintains scripts automatically</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-bug"></i></div>
            <div class="bm-title">Defect Prediction</div>
            <div class="bm-count">AI predicts risky areas</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-lightning-charge"></i></div>
            <div class="bm-title">Smart Execution</div>
            <div class="bm-count">AI optimizes test runs for speed</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-eye"></i></div>
            <div class="bm-title">Visual Testing</div>
            <div class="bm-count">AI compares UI screenshots</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-graph-up"></i></div>
            <div class="bm-title">Smart Reports</div>
            <div class="bm-count">AI-generated dashboards</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Who Benefits from AI in Testing?</h2>
        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">QA</div>
            <div class="step-content">
              <div class="step-title">QA Engineer / SDET</div>
              <div class="step-desc">Uses AI to generate test cases, automation scripts, and analyze failures — dramatically reducing manual effort and maintenance overhead.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">BA</div>
            <div class="step-content">
              <div class="step-title">Business Analyst</div>
              <div class="step-desc">Uses AI to validate requirements completeness, identify gaps in user stories, and generate acceptance criteria automatically.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">Dev</div>
            <div class="step-content">
              <div class="step-title">Developer</div>
              <div class="step-desc">Uses GitHub Copilot and AI assistants to generate unit tests, fix failing tests, and get code review suggestions instantly.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">Mgr</div>
            <div class="step-content">
              <div class="step-title">Test Manager</div>
              <div class="step-desc">Uses AI analytics to predict release risks, measure test coverage health, and make data-driven go/no-go decisions.</div>
            </div>
          </div>
        </div>

        <div class="info-panel tip">
          <div class="panel-title">The Future Role</div>
          <p>The QA engineer of tomorrow is an <strong>AI-Augmented QA Engineer</strong> — someone who uses AI tools to work 10x faster, focuses on exploratory and high-value testing, and designs intelligent automation frameworks rather than maintaining brittle scripts.</p>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'easy',
        q: "Why is AI needed in software testing? What problems does it solve?",
        a: `<div class="ans-hero">Modern software releases faster than traditional testing can keep pace — AI solves the bottleneck of test creation, maintenance, and analysis at scale.</div>
        <table class="comparison-table">
          <thead><tr><th>Problem</th><th>AI Solution</th></tr></thead>
          <tbody>
            <tr><td>Thousands of test cases to write manually</td><td>AI generates test cases from requirements in minutes</td></tr>
            <tr><td>Automation scripts break on every UI change</td><td>Self-healing AI updates locators automatically</td></tr>
            <tr><td>Full regression takes days</td><td>AI runs only high-risk tests — hours cut to minutes</td></tr>
            <tr><td>Defects found late in the cycle</td><td>AI predicts defect-prone areas before testing starts</td></tr>
            <tr><td>Manual log analysis for root cause</td><td>AI scans 50k log lines in seconds</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'easy',
        q: "What is the difference between AI in testing and traditional test automation?",
        a: `<div class="ans-hero">Traditional automation executes predefined scripts mechanically. AI-powered testing learns from data, adapts to changes, predicts issues, and continuously improves without manual updates.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Traditional Automation</h6>Scripts break when UI changes. Tester fixes locators manually. Runs all tests every time. No learning — just replay.</div>
          <div class="compare-card green"><h6>AI-Powered Testing</h6>Self-healing locators adapt automatically. AI selects which tests to run based on code changes. Learns from past failures to predict future ones.</div>
        </div>`
      }
    ]
  },

  // ── 2. AI Fundamentals ────────────────────────────────────────
  {
    id: 'ai-testing-fundamentals',
    title: 'AI Fundamentals for Testers',
    section: 'ai-testing',
    difficulty: 'easy',
    time: '20 min',
    shortDesc: 'What testers need to know about AI, ML, Deep Learning, and Generative AI — without becoming a data scientist.',
    content: `
      <div class="topic-section">
        <h2>What Every Tester Needs to Know About AI</h2>
        <div class="ans-hero">You do NOT need to become a data scientist. You need to understand AI concepts well enough to use AI tools effectively, communicate with AI-specialist colleagues, and design AI-augmented test strategies.</div>

        <table class="comparison-table">
          <thead><tr><th>AI Concept</th><th>Simple Definition</th><th>Testing Application</th></tr></thead>
          <tbody>
            <tr><td><strong>Artificial Intelligence</strong></td><td>Machines performing tasks that need human-like intelligence</td><td>Generating test cases, predicting defects, analyzing logs</td></tr>
            <tr><td><strong>Machine Learning</strong></td><td>Systems learn from data and improve without explicit programming</td><td>Predicting which test areas are risky based on history</td></tr>
            <tr><td><strong>Deep Learning</strong></td><td>Neural networks for complex pattern recognition</td><td>Visual testing — comparing UI screenshots for differences</td></tr>
            <tr><td><strong>Generative AI</strong></td><td>AI that creates new content (text, code, data)</td><td>ChatGPT generating test cases, Copilot writing Selenium code</td></tr>
            <tr><td><strong>Natural Language Processing</strong></td><td>AI understanding and generating human language</td><td>Converting requirements to test scenarios automatically</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Machine Learning in Testing</h2>
        <div class="ans-hero">Machine Learning allows the test system to learn from historical data — past failures, code change patterns, defect locations — and make intelligent predictions about where problems will occur next.</div>

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Historical Data Collection</div>
              <div class="step-desc">Past defects, failed test cases, code change history, deployment logs — all stored and available for ML analysis.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Pattern Recognition</div>
              <div class="step-desc">ML model learns: "When the login module is changed, authentication tests fail 78% of the time." Patterns invisible to humans become predictable.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Prediction</div>
              <div class="step-desc">New code change committed → ML predicts: "Payment service has high defect probability — run payment tests first." Team focuses effort where it matters most.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Continuous Improvement</div>
              <div class="step-desc">Every execution feeds new data back into the model — predictions become more accurate over time without any manual tuning.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Deep Learning — Visual Testing</h2>
        <div class="ans-hero">Deep Learning uses neural networks to compare UI screenshots pixel-by-pixel AND semantically — understanding that a "shifted button" is a defect even if 95% of pixels are identical.</div>

        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Traditional Pixel Comparison</h6>
            "Screenshot A = Screenshot B? No. Test failed."<br><br>
            But: a tooltip appearing on hover causes 1000 pixels to differ — traditional comparison reports it as a failure even though no real defect exists.
          </div>
          <div class="compare-card green">
            <h6>AI Visual Testing (Applitools Eyes)</h6>
            AI understands CONTEXT: "The login button shifted 5px to the right — visual defect." vs "Tooltip appeared on hover — expected dynamic behavior, not a defect." Zero false positives.
          </div>
        </div>

        <div class="info-panel tip">
          <div class="panel-title">Banking App Use Case</div>
          <p>Release candidate deployed. AI visual testing compares 200 screens in 30 seconds. Finds: "Account balance card alignment broken on mobile viewport." Blocked before production. Without AI visual testing: no human would manually screenshot-compare 200 pages.</p>
        </div>
      </div>

      <div class="topic-section">
        <h2>Generative AI — The Game Changer for QA</h2>
        <div class="ans-hero">Generative AI (ChatGPT, Claude, Gemini, Copilot) creates new content on demand — test cases, automation scripts, bug reports, test data — transforming how fast testers can work.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">PROMPT — Generate Test Cases</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>You are a senior QA engineer testing a banking application.

Generate 20 functional test cases for the Fund Transfer feature.

Include:
- Test ID
- Test Scenario
- Test Data
- Steps
- Expected Result
- Priority (High/Medium/Low)

Cover:
- Valid NEFT/RTGS/IMPS transfers
- Insufficient balance
- Invalid account numbers
- Transfer limits
- OTP verification
- Session timeout during transfer</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">PROMPT — Generate Selenium Script</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Generate a Selenium Java test for banking login using Page Object Model.

Requirements:
- Open https://bankapp.com/login
- Enter username: karan@bankapp.com
- Enter password: Secure@1234
- Click Login button
- Verify dashboard URL contains "dashboard"
- Take screenshot on failure
- Use TestNG annotations
- Use explicit waits — no Thread.sleep()</code></pre>
        </div>

        <table class="comparison-table">
          <thead><tr><th>Task</th><th>Without AI</th><th>With Generative AI</th></tr></thead>
          <tbody>
            <tr><td>Write 50 test cases</td><td>2–3 hours</td><td>5 minutes (prompt + review)</td></tr>
            <tr><td>Write Selenium POM class</td><td>45 minutes</td><td>3 minutes</td></tr>
            <tr><td>Write bug report</td><td>10–15 minutes per bug</td><td>1 minute (AI drafts, tester reviews)</td></tr>
            <tr><td>Generate 1000 test records</td><td>Half a day</td><td>30 seconds</td></tr>
          </tbody>
        </table>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'easy',
        q: "What is the difference between Artificial Intelligence, Machine Learning, and Deep Learning?",
        a: `<div class="ans-hero">AI is the broad concept. ML is a subset where systems learn from data. Deep Learning is a subset of ML using neural networks for complex tasks like image recognition.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">AI</div><div class="step-content"><div class="step-title">Artificial Intelligence</div><div class="step-desc">Any technique that lets machines perform human-like tasks — reasoning, decision-making, language understanding. Umbrella term.</div></div></div>
          <div class="step-item"><div class="step-num">ML</div><div class="step-content"><div class="step-title">Machine Learning</div><div class="step-desc">A subset of AI. System learns from historical data without explicit rules. Testing: predicts defect-prone modules from past failure data.</div></div></div>
          <div class="step-item"><div class="step-num">DL</div><div class="step-content"><div class="step-title">Deep Learning</div><div class="step-desc">Subset of ML using neural networks. Used for images and complex patterns. Testing: Applitools visual comparison, UI anomaly detection.</div></div></div>
        </div>`
      },
      {
        difficulty: 'easy',
        q: "What is Generative AI and how can testers use it?",
        a: `<div class="ans-hero">Generative AI creates new content (text, code, data) from prompts. Testers use it to generate test cases, write automation scripts, create test data, and draft bug reports in minutes instead of hours.</div>
        <table class="comparison-table">
          <thead><tr><th>Generative AI Tool</th><th>Testing Use Case</th></tr></thead>
          <tbody>
            <tr><td>ChatGPT / Claude</td><td>Generate 50 test cases from a requirement description</td></tr>
            <tr><td>GitHub Copilot</td><td>Auto-complete Selenium/Playwright code inside IDE</td></tr>
            <tr><td>Gemini</td><td>Analyze screenshots and generate defect descriptions</td></tr>
            <tr><td>Any LLM</td><td>Generate 1000 realistic test users with names, emails, addresses</td></tr>
          </tbody>
        </table>`
      }
    ]
  },

  // ── 3. AI Test Case Generation & Prompt Engineering ──────────
  {
    id: 'ai-test-generation',
    title: 'AI Test Case Generation & Prompt Engineering',
    section: 'ai-testing',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'Using ChatGPT/Claude to generate test cases, write automation scripts, and generate test data — with effective prompt engineering techniques.',
    content: `
      <div class="topic-section">
        <h2>AI-Powered Test Case Generation</h2>
        <div class="ans-hero">Generative AI can produce complete, structured test cases from a single requirement sentence — covering positive, negative, boundary, and edge cases that a manual tester might miss.</div>

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Input: Requirement</div>
              <div class="step-desc">"User should be able to transfer funds to a registered beneficiary with a minimum of ₹1 and maximum of ₹10,00,000 per transaction."</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">AI Output: Test Scenarios</div>
              <div class="step-desc">TC001: Transfer ₹1 (minimum) → should succeed. TC002: Transfer ₹10,00,000 (maximum) → should succeed. TC003: Transfer ₹10,00,001 (over limit) → should fail. TC004: Transfer ₹0 → should fail. TC005: Unregistered account → should fail. TC006: Transfer during session timeout → should fail gracefully.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Tester Review & Refinement</div>
              <div class="step-desc">Tester reviews AI output, adds domain-specific edge cases (concurrent transfers, NEFT cut-off times), removes duplicates, and approves the final list.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Prompt Engineering for Testers</h2>
        <div class="ans-hero">Prompt Engineering is the skill of writing precise, structured instructions for AI tools to get high-quality, relevant output. A well-written prompt produces 10x better results than a vague one.</div>

        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Bad Prompt (vague)</h6>
            <code>Create test cases for login</code><br><br>
            AI produces generic login tests that could apply to any application — no banking context, no edge cases, no structure.
          </div>
          <div class="compare-card green">
            <h6>Good Prompt (structured)</h6>
            <code>You are a senior QA engineer for a banking application.<br>Generate 20 test cases for the login module.<br>Include: Test ID, Scenario, Test Data, Steps, Expected Result, Priority.<br>Cover: valid login, invalid password, locked account, session timeout, SQL injection attempt.</code><br><br>
            AI produces a full, structured test case table with banking-specific edge cases.
          </div>
        </div>

        <h3>Prompt Templates for Testing</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">PROMPT — Boundary Value Analysis</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>You are a QA engineer.

Generate boundary value test cases for:
Field: Transfer Amount
Minimum: 1
Maximum: 1000000
Data type: Integer

Include:
- Below minimum (0, -1)
- Exact minimum (1)
- Just above minimum (2)
- Just below maximum (999999)
- Exact maximum (1000000)
- Above maximum (1000001)
- Non-numeric (abc, null, empty)

Format: Test ID | Input | Expected Result | Type</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">PROMPT — Generate Playwright Script</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Generate a Playwright TypeScript test for banking fund transfer.

Requirements:
- Login as "karan@bankapp.com" with password "Secure@1234"
- Navigate to Fund Transfer
- Select NEFT transfer type
- Enter beneficiary account "9876543210"
- Enter amount 5000
- Enter remarks "Rent"
- Click Proceed
- Enter OTP "123456"
- Click Confirm
- Assert success message is visible
- Assert reference number starts with "TXN"

Use:
- Page Object Model
- Playwright auto-waiting (no hardcoded waits)
- expect() assertions
- TypeScript types</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">PROMPT — Bug Report Generation</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>You are a QA engineer. Write a professional bug report for:

Issue: When customer initiates a fund transfer of Rs 5000 via NEFT,
enters correct OTP, clicks Confirm — the page shows a loading spinner
for 30 seconds then returns to the transfer form with no error message.
The transaction does not appear in the statement but the amount is
deducted from the account balance.

Generate:
- Title
- Environment (UAT)
- Severity and Priority
- Steps to Reproduce
- Expected Result
- Actual Result
- Root Cause (hypothesize)
- Attachments needed</code></pre>
        </div>
      </div>

      <div class="topic-section">
        <h2>AI-Generated Test Data</h2>
        <div class="ans-hero">AI generates thousands of realistic, varied test records in seconds — names, addresses, emails, account numbers, transaction data — with full control over patterns and edge cases.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">PROMPT — Generate Test Data</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Generate 50 realistic test users for a banking application.

Each user should have:
- Full name (Indian names)
- Email address
- 10-digit mobile number
- Account number (12 digits)
- Account type (Savings/Current/Fixed Deposit)
- Initial balance (between 1000 and 500000)
- State (mix of Indian states)

Include:
- 5 users with balance = 0
- 5 users with locked accounts
- 3 users with expired passwords
- 2 international users (for SWIFT testing)

Format: CSV</code></pre>
        </div>

        <table class="comparison-table">
          <thead><tr><th>Test Data Type</th><th>Traditional Method</th><th>AI Method</th></tr></thead>
          <tbody>
            <tr><td>1000 user records</td><td>Manual entry — days</td><td>AI prompt → CSV in 30 seconds</td></tr>
            <tr><td>Edge case data</td><td>Tester has to think of every edge case</td><td>AI generates null, empty, special chars, max length automatically</td></tr>
            <tr><td>Realistic names/addresses</td><td>Fake data looks fake in screenshots</td><td>AI generates region-appropriate, realistic personal data</td></tr>
            <tr><td>Sensitive data masking</td><td>Manual masking or dummy data</td><td>AI generates PII-compliant synthetic data that mirrors real patterns</td></tr>
          </tbody>
        </table>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What is Prompt Engineering and why is it an important skill for QA engineers?",
        a: `<div class="ans-hero">Prompt Engineering is writing structured, specific instructions for AI tools to get high-quality, relevant testing output. A bad prompt gets generic results; a good prompt gets production-ready test cases in minutes.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Bad Prompt</h6>"Write test cases for login" → Gets 5 generic test cases that could apply to any website. No structure, no edge cases, no test data.</div>
          <div class="compare-card green"><h6>Good Prompt</h6>"You are a senior QA for a banking app. Generate 20 test cases for login — include Test ID, steps, test data, priority. Cover SQL injection, account lock, session timeout." → Gets structured, banking-specific, edge-case-aware output.</div>
        </div>
        <div class="info-panel tip"><div class="panel-title">Key prompt elements</div><p><strong>Role:</strong> "You are a senior QA..." | <strong>Context:</strong> "For a banking application..." | <strong>Specifics:</strong> Include/cover/format requirements | <strong>Structure:</strong> Specify output format (table, JSON, numbered list)</p></div>`
      },
      {
        difficulty: 'medium',
        q: "How do you use AI to generate test cases from a requirement document?",
        a: `<div class="ans-hero">Paste the requirement into ChatGPT/Claude with a structured prompt specifying the test case format, coverage types, and domain context. Review, refine, and add domain-specific edge cases.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Paste the requirement</div><div class="step-desc">"User must transfer funds with minimum ₹1, maximum ₹10,00,000, only to registered beneficiaries."</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Structured prompt</div><div class="step-desc">"Generate boundary value, negative, and end-to-end test cases. Format: Test ID | Scenario | Data | Expected | Priority."</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Review AI output</div><div class="step-desc">Tester validates: Is coverage complete? Are banking-specific edge cases (NEFT cut-offs, duplicate prevention) included?</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Add domain knowledge</div><div class="step-desc">Tester adds: concurrent transfer test, transfer during maintenance window, RTGS minimum limit check — things AI may not know from requirements alone.</div></div></div>
        </div>`
      }
    ]
  },

  // ── 4. AI + Selenium & Self-Healing ──────────────────────────
  {
    id: 'ai-testing-selenium',
    title: 'AI + Selenium & Self-Healing Tests',
    section: 'ai-testing',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'Self-healing locators with Healenium, AI-assisted Selenium script generation, AI test maintenance strategies, and the future of Selenium automation.',
    content: `
      <div class="topic-section">
        <h2>The Locator Maintenance Problem</h2>
        <div class="ans-hero">The #1 cost in Selenium automation is locator maintenance — every time a developer changes a button ID or restructures the DOM, 20 tests break. AI self-healing eliminates this cost entirely.</div>

        <div class="compare-grid">
          <div class="compare-card red">
            <h6>Traditional Selenium — Brittle</h6>
            Sprint 1: Developer changes <code>id="loginBtn"</code> to <code>id="submit-login"</code><br>
            Result: 15 tests fail in CI. Tester spends 2 hours finding and fixing each locator.<br>
            Sprint 2: Developer restructures the transfer form. 30 tests break.<br>
            Result: QA team spends more time on maintenance than writing new tests.
          </div>
          <div class="compare-card green">
            <h6>Self-Healing Selenium (Healenium)</h6>
            Sprint 1: Developer changes <code>id="loginBtn"</code> to <code>id="submit-login"</code><br>
            Healenium detects the failure. Uses ML to find the same element via text content, CSS path, and surrounding context. Updates the locator automatically.<br>
            Result: 0 test failures. QA team notified of locator change — review in 5 minutes, not 2 hours.
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Healenium — Self-Healing for Selenium</h2>
        <div class="ans-hero">Healenium is an open-source library that wraps Selenium WebDriver. When a locator fails, it uses ML similarity algorithms to find the best matching element in the current DOM and logs the updated locator.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">XML — pom.xml: Healenium Dependency</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-xml">&lt;dependency&gt;
  &lt;groupId&gt;com.epam.healenium&lt;/groupId&gt;
  &lt;artifactId&gt;healenium-web&lt;/artifactId&gt;
  &lt;version&gt;3.4.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Using Healenium Self-Healing Driver</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">import com.epam.healenium.SelfHealingDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverFactory {

    public static WebDriver createDriver() {
        // Wrap ChromeDriver with SelfHealingDriver
        WebDriver chromeDriver = new ChromeDriver();
        SelfHealingDriver driver = SelfHealingDriver.create(chromeDriver);
        // From here: use driver exactly like normal WebDriver
        // Self-healing happens automatically on locator failure
        return driver;
    }
}

// Normal test code — no changes needed
public class LoginTest {
    WebDriver driver = DriverFactory.createDriver();

    @Test
    public void loginTest() {
        driver.get("https://bankapp.com/login");
        // If this ID changes, Healenium auto-heals it
        driver.findElement(By.id("username")).sendKeys("karan@bankapp.com");
        driver.findElement(By.id("password")).sendKeys("Secure@1234");
        driver.findElement(By.id("loginBtn")).click();
    }
}</code></pre>
        </div>

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Locator fails</div>
              <div class="step-desc">By.id("loginBtn") not found — element ID changed by developer in a recent release.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Healenium scans DOM</div>
              <div class="step-desc">ML algorithm analyzes the current DOM. Scores all candidate elements by text content, tag, attributes, CSS path similarity to the originally stored element.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Best match found</div>
              <div class="step-desc">Element with <code>id="submit-login"</code> scored 94% similarity. Healenium uses it for this execution. Test continues without failure.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Report + Update</div>
              <div class="step-desc">Healenium generates an HTML healing report showing the old locator, new locator, and confidence score. Tester reviews and approves. Database updated.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>AI-Powered Commercial Selenium Alternatives</h2>
        <table class="comparison-table">
          <thead><tr><th>Tool</th><th>AI Capability</th><th>Self-Healing</th><th>Test Generation</th></tr></thead>
          <tbody>
            <tr><td><strong>Testim</strong></td><td>AI locators, smart waiting, auto-root-cause</td><td>Yes — ML locator stability scoring</td><td>Record + AI-assisted scripting</td></tr>
            <tr><td><strong>Mabl</strong></td><td>Auto-healing, visual diffs, API + UI testing</td><td>Yes — auto-updates on every run</td><td>Record + manual + AI assist</td></tr>
            <tr><td><strong>Functionize</strong></td><td>Natural language test creation, NLP matching</td><td>Yes — NLP-based element matching</td><td>Write tests in plain English</td></tr>
            <tr><td><strong>Healenium</strong></td><td>Open-source ML self-healing for Selenium</td><td>Yes — wraps existing WebDriver</td><td>No (wraps existing tests)</td></tr>
          </tbody>
        </table>

        <div class="info-panel tip">
          <div class="panel-title">Healenium vs Testim</div>
          <p><strong>Healenium:</strong> Free, open-source, plug into existing Selenium framework without rewriting tests. Best for teams with large existing Selenium suites.<br>
          <strong>Testim/Mabl:</strong> Commercial platforms with AI built-in from the start. Best for new projects or teams starting fresh with AI-first automation.</p>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'medium',
        q: "What is self-healing automation? How does Healenium work?",
        a: `<div class="ans-hero">Self-healing automation detects when a locator fails due to UI changes and automatically finds the correct element using ML — preventing test failures from routine DOM changes.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Locator fails</div><div class="step-desc">By.id("loginBtn") not found — developer renamed it</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Healenium scans DOM</div><div class="step-desc">ML scores all elements by similarity to original (text, tag, attributes, CSS path)</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Best match used</div><div class="step-desc">id="submit-login" found with 94% confidence. Test continues. Pass.</div></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-content"><div class="step-title">Report generated</div><div class="step-desc">Healing report shows old → new locator. Tester approves. Database updated.</div></div></div>
        </div>`
      },
      {
        difficulty: 'medium',
        q: "What AI-powered tools can improve Selenium automation maintenance?",
        a: `<div class="ans-hero">Several tools add AI capabilities to Selenium: Healenium (open-source self-healing), Testim (AI locators + root cause analysis), Mabl (auto-healing + visual diffs), Functionize (natural language tests).</div>
        <table class="comparison-table">
          <thead><tr><th>Tool</th><th>Key AI Feature</th><th>Best for</th></tr></thead>
          <tbody>
            <tr><td>Healenium</td><td>ML self-healing, free, plugs into existing Selenium</td><td>Teams with large existing Selenium suite</td></tr>
            <tr><td>Testim</td><td>AI locators, smart waits, automated root cause</td><td>Teams wanting full AI-native platform</td></tr>
            <tr><td>Mabl</td><td>Auto-healing every run, visual regression built-in</td><td>SaaS apps needing visual + functional</td></tr>
          </tbody>
        </table>`
      }
    ]
  },

  // ── 5. AI + Playwright & AI Agent Architecture ────────────────
  {
    id: 'ai-testing-playwright',
    title: 'AI + Playwright & AI Agent Architecture',
    section: 'ai-testing',
    difficulty: 'hard',
    time: '30 min',
    shortDesc: 'AI Agent Orchestration with Playwright — Planner/Generator/Healer agents, AI-generated Playwright tests, visual AI testing, and intelligent test prioritization.',
    content: `
      <div class="topic-section">
        <h2>AI Agent Orchestration with Playwright</h2>
        <div class="ans-hero">The future of test automation combines AI Agent Orchestration with Playwright as the execution engine — AI plans, generates, executes, and heals tests, while Playwright provides reliable cross-browser execution.</div>

        <img src="images/ai-testing/ai-playwright-engine.jpeg" alt="AI Agent Orchestration with Playwright — Planner + Generator + Healer agents, Playwright Engine execution layer, Visual AI Testing, Intelligent Test Prioritization, Failure Analyzer with Self-Healing" class="notion-img" />

        <table class="comparison-table">
          <thead><tr><th>AI Agent</th><th>Role</th><th>How it works</th></tr></thead>
          <tbody>
            <tr><td><strong>Planner Agent</strong></td><td>Identifies what to test</td><td>Reads user stories, requirements, UI exploration data → generates test strategy and workflow list</td></tr>
            <tr><td><strong>Generator Agent</strong></td><td>Writes the Playwright tests</td><td>Takes workflow list → generates TypeScript Playwright test code with Page Objects and assertions</td></tr>
            <tr><td><strong>Healer Agent</strong></td><td>Fixes failing tests</td><td>When a test fails due to UI changes → analyzes DOM diff → updates locators → retests automatically</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>AI-Powered Testing Workflow</h2>
        <img src="images/ai-testing/ai-powered-testing-workflow.jpeg" alt="AI-Powered Testing Workflow — Code Analysis → Test Generation → Smart Execution → Auto Healing → Results Analysis → Visual Validation → Continuous Learning → Quality Reporting" class="notion-img" />

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Code Analysis</div>
              <div class="step-desc">AI analyzes code changes in the commit. Identifies which features changed and what test areas are at risk. CI pipeline uses this to select relevant tests.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Smart Test Generation</div>
              <div class="step-desc">AI generates new test cases for newly added features and updates existing tests for modified areas. No manual script writing needed for common flows.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Smart Execution + Auto-Healing</div>
              <div class="step-desc">Playwright executes tests. Failures analyzed: is it a real defect or a locator change? Self-healing fixes locator issues. Only real defects reported.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Visual Validation</div>
              <div class="step-desc">Applitools Eyes compares every screen to the approved baseline. UI regressions (shifted elements, wrong colors, missing text) flagged automatically.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-content">
              <div class="step-title">Continuous Learning</div>
              <div class="step-desc">Every run result feeds back into the ML model. Predictions improve. The system becomes more accurate at identifying what to test and what to skip.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Intelligent Test Prioritization</h2>
        <div class="ans-hero">AI analyzes code changes and test history to decide which tests to run, in what order, and which to skip — dramatically reducing CI pipeline time without reducing coverage confidence.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">Concept — AI Test Selection Logic</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Code change: payment-service/TransferService.java modified

AI Analysis:
  Changed file: payment-service/TransferService.java
  Impact analysis: TransferService affects
    → fund-transfer endpoint
    → balance calculation
    → transaction history
    → OTP verification flow

  Test prioritization result:
    MUST RUN (high impact):
      → FundTransferTest.java (direct dependency)
      → BalanceVerificationTest.java (affected calculation)
      → OTPVerificationTest.java (flow dependency)

    SKIP (no impact):
      → BeneficiaryManagementTest.java
      → LoginTest.java
      → ProfileUpdateTest.java

  Time saved: 40 min (run 12 tests instead of 50)</code></pre>
        </div>

        <div class="info-panel tip">
          <div class="panel-title">Real-world result</div>
          <p>Banking app regression suite: 500 tests taking 4 hours. After AI test prioritization: 80 tests selected as impacted → CI pipeline completes in 45 minutes. Full suite still runs nightly. Teams deploy more confidently, more frequently.</p>
        </div>
      </div>

      <div class="topic-section">
        <h2>AI-Generated Playwright Tests</h2>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">PROMPT → AI-Generated Playwright Test</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>// Prompt given to AI:
// "Generate a Playwright TypeScript test for NEFT fund transfer
//  in a banking app. Login → Navigate to Transfer → Fill form
//  → Enter OTP → Verify success message. Use Page Object Model."

// AI Generated Output:
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TransferPage } from '../pages/TransferPage';

test.describe('Fund Transfer - NEFT', () => {

  test('should successfully complete NEFT transfer', async ({ page }) => {
    const loginPage   = new LoginPage(page);
    const transferPage = new TransferPage(page);

    // Login
    await loginPage.navigate();
    await loginPage.login('karan@bankapp.com', 'Secure@1234');

    // Navigate to Fund Transfer
    await page.getByRole('link', { name: 'Fund Transfer' }).click();

    // Fill transfer form
    await transferPage.selectTransferType('NEFT');
    await transferPage.enterBeneficiary('9876543210');
    await transferPage.enterAmount('5000');
    await transferPage.enterRemarks('Rent payment');
    await transferPage.clickProceed();

    // OTP
    await transferPage.enterOTP('123456');
    await transferPage.clickConfirm();

    // Assertions
    await expect(page.getByText('Transfer Successful')).toBeVisible();
    await expect(page.getByTestId('reference-number'))
      .toHaveText(/^TXN/);
  });

  test('should fail transfer with insufficient balance', async ({ page }) => {
    const loginPage   = new LoginPage(page);
    const transferPage = new TransferPage(page);

    await loginPage.navigate();
    await loginPage.login('karan@bankapp.com', 'Secure@1234');
    await page.getByRole('link', { name: 'Fund Transfer' }).click();

    await transferPage.selectTransferType('NEFT');
    await transferPage.enterBeneficiary('9876543210');
    await transferPage.enterAmount('9999999');
    await transferPage.clickProceed();

    await expect(page.getByText('Insufficient balance')).toBeVisible();
  });
});</code></pre>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "What is AI Agent Orchestration in test automation? Explain the Planner-Generator-Healer pattern.",
        a: `<div class="ans-hero">AI Agent Orchestration uses multiple specialized AI agents working together: Planner identifies what to test, Generator writes the Playwright scripts, and Healer fixes failing tests automatically when UI changes.</div>
        <table class="comparison-table">
          <thead><tr><th>Agent</th><th>Input</th><th>Output</th></tr></thead>
          <tbody>
            <tr><td><strong>Planner</strong></td><td>User stories, UI exploration, requirements</td><td>List of test workflows to cover (login flow, transfer flow, etc.)</td></tr>
            <tr><td><strong>Generator</strong></td><td>Workflow list + application UI context</td><td>Playwright TypeScript test files with POM and assertions</td></tr>
            <tr><td><strong>Healer</strong></td><td>Failed test + current DOM state</td><td>Updated locators, re-run test, pass/fail verdict</td></tr>
          </tbody>
        </table>
        <div class="info-panel tip"><div class="panel-title">Feedback loop</div><p>Healer's fixes and failures feed back to the Planner — if a healing fails, Planner re-identifies what changed and Generator rewrites the affected test from scratch.</p></div>`
      },
      {
        difficulty: 'hard',
        q: "What is Intelligent Test Prioritization and how does AI decide which tests to run?",
        a: `<div class="ans-hero">AI analyzes which code files changed in a commit, maps them to dependent test cases using historical data, and runs only the impacted tests — skipping unrelated ones to save CI time.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Commit analysis</div><div class="step-desc">Git diff shows: TransferService.java changed. AI knows TransferService → fund transfer, balance, OTP flows.</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Impact mapping</div><div class="step-desc">AI maps service dependencies → identifies FundTransferTest, BalanceTest, OTPTest as must-run.</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Skip unrelated</div><div class="step-desc">LoginTest, BeneficiaryTest have no dependency on TransferService → skipped safely. CI time: 4h → 45min.</div></div></div>
        </div>`
      }
    ]
  },

  // ── 6. AI Architecture & Enterprise Tools ────────────────────
  {
    id: 'ai-testing-architecture',
    title: 'AI Testing Architecture & Enterprise Tools',
    section: 'ai-testing',
    difficulty: 'hard',
    time: '30 min',
    shortDesc: 'AI Agent-Based Test Automation Architecture, microservices-based AI testing platform, enterprise tools (Applitools, Datadog AI, Splunk), and Tosca AI Vision.',
    content: `
      <div class="topic-section">
        <h2>AI Agent-Based Test Automation Architecture</h2>
        <img src="images/ai-testing/ai-agent-based-architecture.jpeg" alt="AI Agent-Based Test Automation Architecture — Agent Orchestration Layer (Agent Manager, Workflow Engine, LLM API) → Specialized AI Testing Agents (Planning, Generation, Execution, Analysis, Self-Healing, Data, Learning, Security) → Foundation Layer (Knowledge Base, Vector DB, Memory) → Integration Layer (CI/CD, App Under Test)" class="notion-img" />

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">L1</div>
            <div class="step-content">
              <div class="step-title">Agent Orchestration Layer</div>
              <div class="step-desc">Agent Manager coordinates all agents. Workflow Engine sequences tasks (plan → generate → execute → analyze). LLM API (GPT-4, Claude) powers the intelligence. Human Oversight remains in the loop for critical decisions.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">L2</div>
            <div class="step-content">
              <div class="step-title">Specialized AI Testing Agents</div>
              <div class="step-desc">Planning Agent (test strategy), Generation Agent (script creation), Execution Agent (test runner + monitor), Analysis Agent (results interpretation), Self-Healing Agent (maintenance), Data Agent (test data management), Learning Agent (continuous improvement), Security Agent (vulnerability scanning).</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">L3</div>
            <div class="step-content">
              <div class="step-title">Foundation Layer</div>
              <div class="step-desc">Knowledge Base (domain rules, test patterns), Central Repository (all test assets), Memory System (what worked before), Vector DB (semantic search over past tests and defects). This layer makes the system learn.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">L4</div>
            <div class="step-content">
              <div class="step-title">Integration Layer</div>
              <div class="step-desc">Connects to CI/CD pipelines, Application Under Test, monitoring tools (Datadog, Splunk). All execution results flow back up to improve the agents.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Implementing Test Automation with AI Agents</h2>
        <img src="images/ai-testing/ai-agents-architecture.jpeg" alt="Implementing Test Automation with AI Agents — Application Under Test sends test inputs to Test Generation (test case design + script generation), AI Agent coordinates, Test Automation Framework (test scripts, data, config) receives feedback" class="notion-img" />

        <img src="images/ai-testing/ai-microservices-architecture.jpeg" alt="AI Testing Microservices Architecture — UI and Application Layer (Test Editor, Dashboard, Test Planning) → Microservices (Impact Analysis, Test Execution, Test Case Generation, CI/CD, Protocol Engine, Test Script Generation, Test Data Generation, Orchestration, Reporting) → System Under Test (Web, Mobile, Embedded, Desktop, API)" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Enterprise AI Testing Tools</h2>

        <h3>Applitools — AI Visual Testing</h3>
        <div class="ans-hero">Applitools Eyes uses Visual AI to compare UI screenshots intelligently — understanding context so it ignores dynamic content (timestamps, ads) while catching real visual defects (alignment shifts, missing components).</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">JAVA — Applitools + Selenium Integration</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code class="language-java">import com.applitools.eyes.selenium.Eyes;
import com.applitools.eyes.selenium.Configuration;

public class VisualTest {

    Eyes eyes = new Eyes();

    @BeforeMethod
    public void setUp() {
        eyes.setApiKey(System.getenv("APPLITOOLS_API_KEY"));
    }

    @Test
    public void bankingDashboardVisualTest() {
        WebDriver driver = new ChromeDriver();
        eyes.open(driver, "BankingApp", "Dashboard Visual Test");
        driver.get("https://bankapp.com/dashboard");

        // AI compares this screenshot to the approved baseline
        // Detects: button shifted 5px, balance card color changed
        eyes.checkWindow("Dashboard - Full Page");

        driver.findElement(By.id("transferBtn")).click();
        eyes.checkWindow("Transfer Form");

        eyes.close();
    }
}</code></pre>
        </div>

        <table class="comparison-table">
          <thead><tr><th>AI Visual Tool</th><th>Strength</th><th>Best for</th></tr></thead>
          <tbody>
            <tr><td><strong>Applitools Eyes</strong></td><td>Visual AI, cross-browser visual regression, SDK for all frameworks</td><td>Enterprise apps, multi-browser visual validation</td></tr>
            <tr><td><strong>Percy (BrowserStack)</strong></td><td>Visual diffs integrated with CI, Storybook support</td><td>Frontend component testing, design system validation</td></tr>
            <tr><td><strong>Screener</strong></td><td>Component-level visual testing</td><td>React/Angular component libraries</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>AI-Powered Log Analysis & Monitoring</h2>
        <div class="ans-hero">Production issues generate millions of log lines. AI tools like Datadog, Splunk AI, and New Relic analyze logs in seconds — finding anomalies, correlating events, and identifying root causes that would take humans hours.</div>

        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Production issue detected</div>
              <div class="step-desc">Banking app: 15% of fund transfer requests failing. Alert fires. 2 million log lines generated in 10 minutes.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Datadog AI analyzes logs</div>
              <div class="step-desc">AI scans all logs in parallel. Groups similar errors. Identifies: "NullPointerException in TransferService.validateOTP() — 94% of failures correlate with this error."</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Root cause identified</div>
              <div class="step-desc">AI correlates with recent deployments: "TransferService v2.3.1 deployed 2 hours ago — error rate started at exactly that point." Root cause: null OTP field when session near expiry.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">Automated response</div>
              <div class="step-desc">Datadog alerts team via Slack with the full RCA summary. Rollback triggered automatically if severity threshold exceeded. Time to root cause: 5 minutes vs 2+ hours manually.</div>
            </div>
          </div>
        </div>

        <table class="comparison-table">
          <thead><tr><th>Tool</th><th>AI Capability</th><th>Testing Use</th></tr></thead>
          <tbody>
            <tr><td><strong>Datadog AI</strong></td><td>Anomaly detection, log correlation, alert clustering</td><td>Production monitoring + test environment log analysis</td></tr>
            <tr><td><strong>Splunk AI</strong></td><td>ML-driven event correlation, predictive analytics</td><td>Security testing, performance analysis, log-based RCA</td></tr>
            <tr><td><strong>New Relic AI</strong></td><td>AI incident correlation, deployment impact analysis</td><td>Performance regression detection, test impact analysis</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Tosca Vision AI</h2>
        <div class="ans-hero">Tricentis Tosca includes Vision AI — AI-powered scanning that identifies UI elements using computer vision instead of DOM-based locators, enabling automation of applications that cannot be inspected via standard methods (legacy apps, thick clients, Citrix desktops).</div>

        <div class="definition-card">
          <div class="definition-term">Tosca Vision AI vs Standard XScan</div>
          <div class="definition-body">
            <strong>Standard XScan:</strong> Reads DOM properties (ID, name, class) — requires inspectable application. Works perfectly for web and modern desktop apps.<br><br>
            <strong>Vision AI:</strong> Takes a screenshot, uses computer vision to identify the element by its visual appearance — text, position, color, shape. Works for ANY application including Citrix, legacy terminal emulators, and PDFs.
          </div>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "Describe the architecture of an AI Agent-based test automation system.",
        a: `<div class="ans-hero">An AI Agent-based system has four layers: Orchestration (coordinates agents), Specialized Agents (each focused on one testing task), Foundation (shared knowledge base and memory), and Integration (CI/CD and app connections).</div>
        <table class="comparison-table">
          <thead><tr><th>Layer</th><th>Components</th><th>Role</th></tr></thead>
          <tbody>
            <tr><td>Orchestration</td><td>Agent Manager, Workflow Engine, LLM API</td><td>Coordinate all agents, sequence tasks</td></tr>
            <tr><td>Specialized Agents</td><td>Planning, Generation, Execution, Self-Healing, Data, Security</td><td>Each agent owns one responsibility</td></tr>
            <tr><td>Foundation</td><td>Knowledge Base, Memory System, Vector DB</td><td>Shared intelligence and learning store</td></tr>
            <tr><td>Integration</td><td>CI/CD, App Under Test, Monitoring tools</td><td>Connect to real systems, feed results back</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'hard',
        q: "How does Applitools AI Visual Testing work? What makes it better than pixel-by-pixel comparison?",
        a: `<div class="ans-hero">Applitools Visual AI understands context — it knows a login button is the same element even if it moved 3px, and ignores dynamic content (timestamps, ads) while catching real defects (wrong color, missing element, layout shift).</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Pixel Comparison</h6>Any difference = failure. A tooltip appearing → 500 pixels differ → test fails. Timestamp updating → test fails. Result: 90% false positives. Team ignores failures.</div>
          <div class="compare-card green"><h6>Applitools Visual AI</h6>Semantic understanding. "Tooltip appearing = expected dynamic behavior." "Balance card shifted right 20px = real layout defect." Result: near-zero false positives. Team trusts failures.</div>
        </div>`
      },
      {
        difficulty: 'medium',
        q: "How would you use AI to perform root cause analysis on production test failures?",
        a: `<div class="ans-hero">Use AI log analysis tools (Datadog AI, Splunk) to correlate failures with deployments, identify error patterns, and surface the root cause — cutting RCA time from hours to minutes.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">AI scans logs</div><div class="step-desc">50,000 log lines analyzed in seconds. Groups similar stack traces. Identifies the most frequent error.</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">Correlate with deployment</div><div class="step-desc">Error rate spike started exactly when TransferService v2.3.1 deployed → deployment caused the issue.</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">AI generates RCA report</div><div class="step-desc">Title, affected service, error trace, deployment that introduced it, suggested fix — all in one AI-generated summary.</div></div></div>
        </div>`
      }
    ]
  },

  // ── 7. AI in Full STLC + Banking Framework ───────────────────
  {
    id: 'ai-testing-stlc-framework',
    title: 'AI Across STLC & Banking AI Framework',
    section: 'ai-testing',
    difficulty: 'hard',
    time: '40 min',
    shortDesc: 'How AI transforms every STLC phase, designing an end-to-end AI-powered banking test framework, and the AI Testing career roadmap.',
    content: `
      <div class="topic-section">
        <h2>AI Across Every STLC Phase</h2>
        <div class="ans-hero">AI doesn't just help with automation — it transforms every phase of the Software Testing Life Cycle from requirement analysis through defect management.</div>

        <h3>Phase 1: Requirement Analysis with AI</h3>
        <div class="definition-card">
          <div class="definition-term">AI Requirement Analysis</div>
          <div class="definition-body">
            <strong>Input:</strong> Requirement document / user story<br>
            <strong>AI identifies:</strong> Missing requirements, ambiguous statements, conflicting rules, untested scenarios, and risk areas<br>
            <strong>Example:</strong> Requirement says "User can transfer funds." AI flags: "Maximum transfer limit not specified. Daily limit not mentioned. Currency not defined. Network failure handling not described."
          </div>
        </div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">PROMPT — Requirement Gap Analysis</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>Analyze this banking requirement for completeness and ambiguities:

"Registered customers can transfer money to other accounts
using NEFT, RTGS, or IMPS. Transfer will be confirmed
via OTP sent to registered mobile."

Identify:
1. Missing specifications
2. Ambiguous terms
3. Edge cases not covered
4. Potential security gaps
5. Suggested additional requirements</code></pre>
        </div>

        <h3>Phase 2–4: AI Test Design through Execution</h3>
        <table class="comparison-table">
          <thead><tr><th>STLC Phase</th><th>AI Application</th><th>Tool / Method</th></tr></thead>
          <tbody>
            <tr><td>Test Planning</td><td>Risk-based test prioritization from code change analysis</td><td>Tricentis Impact Analysis, custom ML model</td></tr>
            <tr><td>Test Design</td><td>Auto-generate test cases from requirements + boundary values</td><td>ChatGPT, Claude with structured prompts</td></tr>
            <tr><td>Test Data</td><td>Generate realistic, GDPR-compliant synthetic banking data</td><td>Mostly AI API + custom data generation prompts</td></tr>
            <tr><td>Automation</td><td>AI writes Selenium/Playwright scripts; self-healing locators</td><td>Copilot + Healenium + Testim</td></tr>
            <tr><td>Execution</td><td>Smart test selection; parallel AI-optimised execution</td><td>Playwright sharding + AI prioritization</td></tr>
            <tr><td>Defect Reporting</td><td>AI generates full bug report with root cause hypothesis</td><td>ChatGPT + Jira AI</td></tr>
            <tr><td>Root Cause Analysis</td><td>AI correlates failures with deployments and code changes</td><td>Datadog AI, Splunk, New Relic</td></tr>
            <tr><td>Visual Regression</td><td>AI compares every UI screen intelligently</td><td>Applitools Eyes, Percy</td></tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>Banking AI Automation Framework Design</h2>
        <div class="ans-hero">A modern banking AI test framework combines AI test generation, Playwright execution, self-healing, visual testing, and AI-powered reporting into a single pipeline.</div>

        <div class="code-block">
          <div class="code-header"><span class="code-lang">Enterprise AI Banking Test Framework</span><button class="code-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Copy</button></div>
          <pre><code>BankingAITestFramework/
├── ai-generation/
│   ├── test-case-generator.js    ← calls ChatGPT API with requirements
│   ├── test-data-generator.js    ← AI-generated realistic test data
│   └── prompts/                  ← reusable prompt templates
│       ├── test-case-prompt.txt
│       └── bug-report-prompt.txt
│
├── playwright-tests/
│   ├── tests/
│   │   ├── login.spec.ts
│   │   ├── fund-transfer.spec.ts
│   │   └── beneficiary.spec.ts
│   ├── pages/                    ← Page Object Model
│   │   ├── LoginPage.ts
│   │   └── TransferPage.ts
│   └── fixtures/
│       └── auth.setup.ts         ← storageState for fast auth
│
├── visual-testing/
│   └── applitools.setup.ts       ← Applitools Eyes integration
│
├── ai-analysis/
│   ├── failure-analyzer.js       ← sends failures to AI for RCA
│   └── test-selector.js          ← impact-based test selection
│
├── playwright.config.ts
│   └── fullyParallel: true, sharding: 4 runners
│
└── ci-cd/
    └── github-actions.yml        ← run on every commit</code></pre>
        </div>

        <div class="banking-module-grid">
          <div class="bm-card bm-login">
            <div class="bm-icon"><i class="bi bi-robot"></i></div>
            <div class="bm-title">AI Generation</div>
            <div class="bm-count">ChatGPT → test cases + scripts</div>
          </div>
          <div class="bm-card bm-transfer">
            <div class="bm-icon"><i class="bi bi-lightning-charge"></i></div>
            <div class="bm-title">Playwright Engine</div>
            <div class="bm-count">Cross-browser + parallel</div>
          </div>
          <div class="bm-card bm-account">
            <div class="bm-icon"><i class="bi bi-arrow-repeat"></i></div>
            <div class="bm-title">Self-Healing</div>
            <div class="bm-count">Healenium / Testim</div>
          </div>
          <div class="bm-card bm-history">
            <div class="bm-icon"><i class="bi bi-eye"></i></div>
            <div class="bm-title">Visual AI</div>
            <div class="bm-count">Applitools Eyes</div>
          </div>
          <div class="bm-card bm-beneficiary">
            <div class="bm-icon"><i class="bi bi-graph-up"></i></div>
            <div class="bm-title">AI Analytics</div>
            <div class="bm-count">Datadog + RCA</div>
          </div>
          <div class="bm-card bm-profile">
            <div class="bm-icon"><i class="bi bi-infinity"></i></div>
            <div class="bm-title">CI/CD Pipeline</div>
            <div class="bm-count">GitHub Actions</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>AI Testing Career Roadmap</h2>
        <div class="step-flow">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-content">
              <div class="step-title">Foundation (Now)</div>
              <div class="step-desc">Master prompt engineering with ChatGPT/Claude. Use AI to generate test cases, write scripts, and draft bug reports. Start using GitHub Copilot in IDE.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-content">
              <div class="step-title">Automation Level</div>
              <div class="step-desc">Integrate Healenium into existing Selenium suite. Use Applitools for visual regression. Implement AI test prioritization in CI pipeline.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-content">
              <div class="step-title">Enterprise Level</div>
              <div class="step-desc">Learn Datadog AI / Splunk for log analysis. Design AI Agent-based frameworks using Playwright + LLM APIs. Implement intelligent test selection.</div>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-content">
              <div class="step-title">AI-Augmented QA Engineer</div>
              <div class="step-desc">Design full AI testing pipelines. Act as the bridge between AI engineering and QA. Title: AI SDET / AI-Augmented QA Engineer / Intelligent Automation Engineer.</div>
            </div>
          </div>
        </div>

        <div class="info-panel tip">
          <div class="panel-title">After completing this guide, you should be able to:</div>
          <p>✅ Generate test cases using AI in minutes<br>
          ✅ Generate Selenium/Playwright scripts using AI prompts<br>
          ✅ Integrate self-healing automation (Healenium, Testim)<br>
          ✅ Reduce script maintenance using AI<br>
          ✅ Analyze defects automatically with AI<br>
          ✅ Perform AI-powered visual regression testing<br>
          ✅ Design modern AI-driven testing frameworks<br>
          ✅ Answer AI Testing interview questions confidently</p>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        difficulty: 'hard',
        q: "How would you design an end-to-end AI-powered test automation framework for a banking application?",
        a: `<div class="ans-hero">Layer AI across the entire testing pipeline: AI generation for test cases, Playwright for execution, self-healing for maintenance, Applitools for visual regression, Datadog AI for log analysis, and GitHub Actions for CI/CD.</div>
        <div class="code-block"><code>Layer 1 — AI Generation: ChatGPT API generates test cases + Playwright scripts from requirements
Layer 2 — Execution: Playwright with fullyParallel + sharding (4 CI runners)
Layer 3 — Self-Healing: Healenium/Testim — auto-fix locator failures
Layer 4 — Visual AI: Applitools Eyes — screenshot comparison on every run
Layer 5 — Analysis: AI failure analyzer sends errors to LLM for RCA summary
Layer 6 — CI/CD: GitHub Actions — smoke on commit, regression on merge to main</code></div>
        <div class="info-panel tip"><div class="panel-title">Result</div><p>Deployment cycle: 4 hours of manual regression → 20 minutes of AI-driven execution. Script maintenance: 30% of team time → near zero with self-healing. Defect escapes: reduced by early AI defect prediction.</p></div>`
      },
      {
        difficulty: 'hard',
        q: "How will AI change the QA engineer role? Will AI replace testers?",
        a: `<div class="ans-hero">AI replaces repetitive, mechanical testing tasks — not testers. The QA role evolves from writing scripts to designing AI-powered frameworks, validating AI output, and focusing on exploratory and business-critical testing.</div>
        <div class="compare-grid">
          <div class="compare-card red"><h6>Tasks AI Will Automate</h6>Writing routine regression test cases<br>Maintaining locators after UI changes<br>Writing boilerplate automation scripts<br>Generating test data manually<br>Basic bug report writing</div>
          <div class="compare-card green"><h6>Tasks That Need Human QA</h6>Exploratory testing (finding unknown unknowns)<br>Validating AI-generated test cases are correct<br>Designing the AI testing framework strategy<br>Business logic verification<br>Risk-based testing judgment calls</div>
        </div>
        <div class="info-panel tip"><div class="panel-title">Career advice</div><p>The engineer who uses AI to work 10x faster is not replaced by AI — they make themselves 10x more valuable. The title is evolving: QA Engineer → AI-Augmented QA Engineer → Intelligent Automation Engineer.</p></div>`
      },
      {
        difficulty: 'medium',
        q: "What are the AI tools every QA engineer should learn in 2025?",
        a: `<div class="ans-hero">Start with generative AI tools (ChatGPT, GitHub Copilot), then self-healing automation, then AI visual testing — covering beginner → automation → enterprise levels.</div>
        <table class="comparison-table">
          <thead><tr><th>Level</th><th>Tools</th><th>Use in testing</th></tr></thead>
          <tbody>
            <tr><td><strong>Beginner</strong></td><td>ChatGPT, Claude, Gemini, GitHub Copilot</td><td>Generate test cases, scripts, bug reports</td></tr>
            <tr><td><strong>Automation</strong></td><td>Healenium, Testim, Mabl, Applitools</td><td>Self-healing tests, visual regression</td></tr>
            <tr><td><strong>Enterprise</strong></td><td>Datadog AI, Splunk AI, New Relic, Azure AI</td><td>Log analysis, defect prediction, RCA</td></tr>
            <tr><td><strong>Platform</strong></td><td>Tricentis Tosca (Vision AI), Functionize</td><td>Enterprise AI-native test platforms</td></tr>
          </tbody>
        </table>`
      },
      {
        difficulty: 'easy',
        q: "What is AI defect prediction and how does it help testing teams?",
        a: `<div class="ans-hero">AI defect prediction uses ML trained on historical defect data, code change patterns, and test results to predict which modules are most likely to have bugs in the next release — letting teams focus testing effort where it matters most.</div>
        <div class="step-flow">
          <div class="step-item"><div class="step-num">1</div><div class="step-content"><div class="step-title">Historical data</div><div class="step-desc">AI learns: "Payment module had 60% of all defects in last 12 sprints. Transfer flow fails after login module changes."</div></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-content"><div class="step-title">New release analysis</div><div class="step-desc">Code change affects TransferService.java → AI predicts: "Payment module: HIGH risk. Login module: LOW risk."</div></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-content"><div class="step-title">Focused testing</div><div class="step-desc">Team runs full suite on high-risk modules, smoke-only on low-risk. Same time → better coverage where it counts.</div></div></div>
        </div>`
      }
    ]
  }

];
