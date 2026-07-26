// ================================================================
// MANUAL TESTING DATA — From Notion Export
// ================================================================
const MANUAL_TOPICS = [
  // ── 1. What is Software Testing ──────────────────────────────
  {
    id: 'what-is-testing',
    title: 'What is Software Testing?',
    section: 'manual',
    difficulty: 'easy',
    time: '15 min',
    shortDesc: 'Introduction to software testing, software quality, project vs product, and why testing is needed.',
    content: `
      <div class="topic-section">
        <h2>What is Software Testing?</h2>
        <div class="ans-hero">Testing is a part of the Software Development Process.</div>
        <ul class="ans-list">
          <li><span class="icon">🔍</span>It is an activity to identify defects in the software.</li>
          <li><span class="icon">🎯</span>The goal is to release a quality product to the client.</li>
        </ul>
        <div class="info-panel tip">
          <div class="panel-title">Real-world Example</div>
          <p>Think of a mobile application — if after purchase lots of bugs appear, that creates a bad user experience. So testing is performed before launching to fix bugs in the testing phase.</p>
        </div>
      </div>

      <div class="topic-section">
        <h2>What is Software Quality?</h2>
        <p>Software Quality is the degree to which a software product meets the specified requirements, satisfies user needs, and performs reliably, efficiently, and securely without defects.</p>
        <h3 class="sub-heading">Parameters on which Software Quality is Judged</h3>
        <ul class="ans-list blue">
          <li><span class="icon">1️⃣</span>Bug-free</li>
          <li><span class="icon">2️⃣</span>Delivered on time</li>
          <li><span class="icon">3️⃣</span>Within budget</li>
          <li><span class="icon">4️⃣</span>Meets requirements and/or expectations</li>
          <li><span class="icon">5️⃣</span>Maintainable</li>
        </ul>
      </div>

      <div class="topic-section">
        <h2>Project vs Product</h2>
        <div class="card-grid">
          <div class="type-card">
            <h5>Project</h5>
            <div class="type-meta">A temporary endeavor undertaken to create a unique product, service, or result. Has a defined scope, timeline, and budget.</div>
          </div>
          <div class="type-card">
            <h5>Product</h5>
            <div class="type-meta">An item or system manufactured to be sold or used. A product can exist beyond any single project lifecycle.</div>
          </div>
        </div>
        <img src="images/manual/image.png" alt="Project vs Product" class="notion-img" />
        <img src="images/manual/image-1.png" alt="Project vs Product diagram" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Why Do We Need Software Testing?</h2>
        <img src="images/manual/image-2.png" alt="Why testing is needed" class="notion-img" />
        <img src="images/manual/image-3.png" alt="Testing importance" class="notion-img" />
        <img src="images/manual/image-4.png" alt="Cost of fixing bugs" class="notion-img" />
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is Software Testing?",
        a: `<div class="ans-hero">Testing is the process of evaluating software to detect defects and ensure it meets requirements.</div>
        <ul class="ans-list">
          <li><span class="icon">✅</span>It is a part of the software development process</li>
          <li><span class="icon">✅</span>Goal: release a quality product to the client</li>
          <li><span class="icon">✅</span>Reduces bugs before production release</li>
        </ul>`
      },
      {
        q: "What is Software Quality and how is it measured?",
        a: `<div class="ans-hero">Software Quality = degree to which software meets requirements, satisfies users, and performs reliably.</div>
        <ul class="ans-list green">
          <li><span class="icon">🎯</span><strong>Bug-free</strong> — minimal defects</li>
          <li><span class="icon">⏰</span><strong>On time</strong> — delivered within schedule</li>
          <li><span class="icon">💰</span><strong>Within budget</strong></li>
          <li><span class="icon">📋</span><strong>Meets requirements</strong></li>
          <li><span class="icon">🔧</span><strong>Maintainable</strong></li>
        </ul>`
      }
    ]
  },

  // ── 2. Error, Bug & Failure ───────────────────────────────────
  {
    id: 'error-bug-failure',
    title: 'Error, Bug & Failure',
    section: 'manual',
    difficulty: 'easy',
    time: '15 min',
    shortDesc: 'Understanding the difference between Error, Defect/Bug, and Failure with real-world examples.',
    content: `
      <div class="topic-section">
        <h2>Error, Bug & Failure</h2>
        <img src="images/manual/image-5.png" alt="Error Bug Failure" class="notion-img" />
        <img src="images/manual/image-6.png" alt="Error definition" class="notion-img" />
        <img src="images/manual/image-7.png" alt="Bug definition" class="notion-img" />
        <img src="images/manual/image-8.png" alt="Failure definition" class="notion-img" />

        <h3 class="sub-heading">Relationship Between Error, Bug &amp; Failure</h3>
        <div class="card-light">
          <div class="icon-row">
            <div class="icon-chip red">👤 Human Mistake</div>
            <div class="icon-chip amber">→ Error</div>
            <div class="icon-chip purple">→ Creates Bug (Defect)</div>
            <div class="icon-chip red">→ When Executed → Failure</div>
          </div>
        </div>
        <img src="images/manual/image-9.png" alt="Error Bug Failure relationship" class="notion-img" />

        <h3 class="sub-heading">Why Does Software Have Bugs?</h3>
        <div class="card-grid">
          <div class="type-card"><h5>1. Unclear Requirements</h5><p>Incomplete or ambiguous requirements lead to developers building the wrong functionality.</p></div>
          <div class="type-card"><h5>2. Human Errors</h5><p>Mistakes happen while coding or designing. Even experienced developers make errors.</p></div>
          <div class="type-card"><h5>3. Software Complexity</h5><p>Large applications have millions of lines of code — higher complexity = more chance of defects.</p></div>
          <div class="type-card"><h5>4. Requirement Changes</h5><p>Business requirements change frequently and changes can introduce new bugs.</p></div>
          <div class="type-card"><h5>5. Tight Deadlines</h5><p>Less time for development and testing means some defects remain unnoticed.</p></div>
          <div class="type-card"><h5>6. Lack of Skilled Staff</h5><p>New developers / freshers may not handle complex functionality correctly.</p></div>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is the difference between Error, Bug, and Failure?",
        a: `<div class="compare-grid">
          <div class="compare-card blue"><h6>Error</h6>A human mistake made by a developer or tester while writing code, designing, or understanding requirements.</div>
          <div class="compare-card amber"><h6>Bug / Defect</h6>A flaw or fault in the code that causes the program to behave unexpectedly. An error creates a bug.</div>
          <div class="compare-card red"><h6>Failure</h6>When the software deviates from expected behavior during execution. A bug, when executed, causes failure.</div>
          <div class="compare-card green"><h6>Chain</h6>Human Mistake → Error → Bug (Defect) → When Executed → Failure</div>
        </div>`
      }
    ]
  },

  // ── 3. SDLC & STLC ───────────────────────────────────────────
  {
    id: 'sdlc-stlc',
    title: 'SDLC & STLC',
    section: 'manual',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'Software Development Life Cycle vs Software Testing Life Cycle — phases, activities, and models.',
    content: `
      <div class="topic-section">
        <h2>SDLC vs STLC</h2>
        <img src="images/manual/image-10.png" alt="SDLC overview" class="notion-img" />
        <img src="images/manual/image-11.png" alt="STLC overview" class="notion-img" />
        <img src="images/manual/image-12.png" alt="SDLC phases" class="notion-img" />
        <img src="images/manual/image-13.png" alt="STLC phases" class="notion-img" />
        <img src="images/manual/image-14.png" alt="SDLC vs STLC comparison" class="notion-img" />
        <img src="images/manual/image-15.png" alt="STLC activities" class="notion-img" />
        <img src="images/manual/image-16.png" alt="STLC entry exit criteria" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Waterfall Model</h2>
        <img src="images/manual/image-17.png" alt="Waterfall Model" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>QA vs QC vs QE</h2>
        <div class="card-grid">
          <div class="type-card"><h5>QA — Quality Assurance</h5><p>Focuses on <strong>preventing defects</strong> by improving processes. Proactive approach.</p></div>
          <div class="type-card"><h5>QC — Quality Control</h5><p>Focuses on <strong>identifying and fixing defects</strong> in the product. Reactive approach.</p></div>
          <div class="type-card"><h5>QE — Quality Engineering</h5><p>Focuses on <strong>building quality throughout</strong> the SDLC using automation and modern practices.</p></div>
        </div>
        <table class="table-light-custom">
          <thead><tr><th>Feature</th><th>QA</th><th>QC</th><th>QE</th></tr></thead>
          <tbody>
            <tr><td>Full Form</td><td>Quality Assurance</td><td>Quality Control</td><td>Quality Engineering</td></tr>
            <tr><td>Focus</td><td>Process</td><td>Product</td><td>Entire SDLC</td></tr>
            <tr><td>Goal</td><td>Prevent defects</td><td>Detect defects</td><td>Deliver quality continuously</td></tr>
            <tr><td>Approach</td><td>Proactive</td><td>Reactive</td><td>Continuous</td></tr>
            <tr><td>Automation</td><td>Limited</td><td>Moderate</td><td>Extensive</td></tr>
          </tbody>
        </table>
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is the difference between SDLC and STLC?",
        a: `<div class="compare-grid">
          <div class="compare-card blue"><h6>SDLC</h6>Software Development Life Cycle — covers the entire process: Requirements → Design → Development → Testing → Deployment → Maintenance</div>
          <div class="compare-card purple"><h6>STLC</h6>Software Testing Life Cycle — subset of SDLC focused on testing: Requirements Analysis → Test Planning → Test Design → Test Execution → Defect Reporting → Test Closure</div>
        </div>`
      },
      {
        q: "What is the difference between QA, QC, and QE?",
        a: `<ul class="ans-list">
          <li><span class="icon">🛡️</span><strong>QA (Quality Assurance)</strong> — Prevent defects. Focuses on processes.</li>
          <li><span class="icon">🔬</span><strong>QC (Quality Control)</strong> — Find defects. Focuses on the product.</li>
          <li><span class="icon">⚙️</span><strong>QE (Quality Engineering)</strong> — Build quality into the product. Focuses on entire SDLC.</li>
        </ul>`
      }
    ]
  },

  // ── 4. Testing Types & Methods ───────────────────────────────
  {
    id: 'testing-types',
    title: 'Testing Types & Methods',
    section: 'manual',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'Black box, White box, Static vs Dynamic testing, Verification vs Validation, and levels of testing.',
    content: `
      <div class="topic-section">
        <h2>Static Testing vs Dynamic Testing</h2>
        <div class="compare-grid">
          <div class="compare-card blue">
            <h6>Static Testing</h6>
            <p>Testing software artifacts <strong>without executing</strong> the program. Identifies defects early.</p>
            <ul style="font-size:.88rem;margin-top:.5rem">
              <li>Requirement Reviews</li>
              <li>Code Reviews</li>
              <li>Walkthroughs</li>
              <li>Inspections</li>
            </ul>
          </div>
          <div class="compare-card green">
            <h6>Dynamic Testing</h6>
            <p>Testing software by <strong>executing the program</strong>. Verifies runtime behavior.</p>
            <ul style="font-size:.88rem;margin-top:.5rem">
              <li>Unit / Integration Testing</li>
              <li>System Testing</li>
              <li>Performance Testing</li>
              <li>Acceptance Testing</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Verification vs Validation</h2>
        <img src="images/manual/image-18.png" alt="Verification vs Validation" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>White Box vs Black Box Testing</h2>
        <img src="images/manual/image-19.png" alt="White Box vs Black Box" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Different Levels of Software Testing</h2>
        <img src="images/manual/image-20.png" alt="Testing levels" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Types of System Testing</h2>
        <img src="images/manual/image-21.png" alt="System testing types" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>GUI Testing</h2>
        <img src="images/manual/image-22.png" alt="GUI Testing" class="notion-img" />
        <img src="images/manual/image-23.png" alt="GUI Testing details" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Functional vs Non-Functional Testing</h2>
        <img src="images/manual/image-24.png" alt="Functional vs Non-Functional" class="notion-img" />
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is the difference between Static and Dynamic testing?",
        a: `<div class="compare-grid">
          <div class="compare-card blue"><h6>Static Testing</h6>Reviewing code/documents WITHOUT running the program. Examples: code reviews, walkthroughs, inspections. Catches defects early.</div>
          <div class="compare-card green"><h6>Dynamic Testing</h6>Testing by EXECUTING the program. Examples: unit testing, system testing, performance testing. Verifies behavior at runtime.</div>
        </div>`
      },
      {
        q: "What is the difference between Verification and Validation?",
        a: `<div class="compare-grid">
          <div class="compare-card purple"><h6>Verification</h6>"Are we building the product right?" — checks that documents, designs, and code meet specifications. Done without running the software.</div>
          <div class="compare-card amber"><h6>Validation</h6>"Are we building the right product?" — checks that the final product meets user's actual needs. Done by running the software (testing).</div>
        </div>`
      },
      {
        q: "What is the difference between Black Box and White Box testing?",
        a: `<div class="compare-grid">
          <div class="compare-card blue"><h6>Black Box Testing</h6>Tester has no knowledge of internal code. Tests input/output behavior only. Example: Functional testing, System testing.</div>
          <div class="compare-card purple"><h6>White Box Testing</h6>Tester has full knowledge of internal code structure. Tests logic paths. Example: Unit testing, Code coverage testing.</div>
        </div>`
      }
    ]
  },

  // ── 5. Smoke, Sanity & Exploratory Testing ───────────────────
  {
    id: 'smoke-sanity-testing',
    title: 'Smoke, Sanity & Exploratory Testing',
    section: 'manual',
    difficulty: 'easy',
    time: '20 min',
    shortDesc: 'Smoke testing, Sanity testing, Exploratory testing, Ad-hoc testing and how they differ.',
    content: `
      <div class="topic-section">
        <h2>Test Design Techniques</h2>
        <img src="images/manual/image-25.png" alt="Test Design Techniques" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Smoke Testing</h2>
        <img src="images/manual/image-29.png" alt="Smoke Testing" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Sanity Testing</h2>
        <img src="images/manual/image-30.png" alt="Sanity Testing" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Sanity vs Smoke Testing</h2>
        <img src="images/manual/image-31.png" alt="Sanity vs Smoke" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>End-to-End Testing</h2>
        <img src="images/manual/image-32.png" alt="End to End Testing" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Exploratory Testing</h2>
        <img src="images/manual/image-27.png" alt="Exploratory Testing" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Ad-hoc Testing</h2>
        <img src="images/manual/image-28.png" alt="Adhoc Testing" class="notion-img" />

        <h3 class="sub-heading">Ad-hoc vs Exploratory Testing</h3>
        <table class="table-light-custom">
          <thead><tr><th>Feature</th><th>Ad-hoc Testing</th><th>Exploratory Testing</th></tr></thead>
          <tbody>
            <tr><td>Definition</td><td>Informal, no predefined test cases</td><td>Learning, design &amp; execution simultaneously</td></tr>
            <tr><td>Planning</td><td>No planning at all</td><td>Light planning involved</td></tr>
            <tr><td>Documentation</td><td>Not required</td><td>Minimal / test charter</td></tr>
            <tr><td>Approach</td><td>Random, experience-based</td><td>Structured exploration</td></tr>
            <tr><td>Focus</td><td>Finding bugs quickly</td><td>Understanding the application</td></tr>
            <tr><td>Coverage</td><td>Low and unpredictable</td><td>Better and organized</td></tr>
            <tr><td>Best Used When</td><td>Time limited / quick bug hunting</td><td>New or complex features</td></tr>
          </tbody>
        </table>
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is the difference between Smoke and Sanity testing?",
        a: `<div class="compare-grid">
          <div class="compare-card amber"><h6>Smoke Testing</h6>Tests the <strong>critical functionality</strong> of a new build to check if it's stable enough for further testing. Done first after each build. Also called "Build Verification Test".</div>
          <div class="compare-card blue"><h6>Sanity Testing</h6>Narrow and deep testing of a specific <strong>bug fix or feature</strong> to verify it works correctly. Done after receiving a bug fix build.</div>
        </div>`
      },
      {
        q: "What is Exploratory Testing and how is it different from Ad-hoc testing?",
        a: `<ul class="ans-list">
          <li><span class="icon">🔍</span><strong>Exploratory</strong> = simultaneous learning + design + execution. Structured exploration with a testing mission.</li>
          <li><span class="icon">🎲</span><strong>Ad-hoc</strong> = purely random testing with no documentation or predefined plan.</li>
          <li><span class="icon">📌</span>Exploratory has a test charter; Ad-hoc does not.</li>
          <li><span class="icon">📊</span>Exploratory provides better coverage; Ad-hoc is quicker.</li>
        </ul>`
      }
    ]
  },

  // ── 6. Regression & Retesting ────────────────────────────────
  {
    id: 'regression-retesting',
    title: 'Regression & Retesting',
    section: 'manual',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'Regression testing types, retesting vs regression, when to perform regression, and real-world examples.',
    content: `
      <div class="topic-section">
        <h2>What is Regression Testing?</h2>
        <p><strong>Regression Testing</strong> is a type of software testing performed to ensure that <strong>new code changes, bug fixes, enhancements, or modifications have not impacted the existing functionality</strong> of the application.</p>
        <div class="ans-hero">Regression Testing verifies that the old features of an application are still working correctly after any changes are introduced.</div>
      </div>

      <div class="topic-section">
        <h2>Real-World Example</h2>
        <p>Imagine an <strong>Amazon Shopping Application</strong>.</p>
        <h4 class="mini-heading">Existing Functionality</h4>
        <ul class="ans-list green">
          <li><span class="icon">✅</span>User Login</li>
          <li><span class="icon">✅</span>Search Product</li>
          <li><span class="icon">✅</span>Add to Cart</li>
          <li><span class="icon">✅</span>Payment</li>
          <li><span class="icon">✅</span>Order Placement</li>
        </ul>
        <div class="info-panel warning">
          <div class="panel-title">New Change Introduced</div>
          <p>"Add OTP verification during login." — Developer modifies the login module.</p>
        </div>
        <h4 class="mini-heading">Regression Testing Verifies</h4>
        <ul class="ans-list blue">
          <li><span class="icon">🔍</span>Can users still login?</li>
          <li><span class="icon">🔍</span>Can users search products?</li>
          <li><span class="icon">🔍</span>Can users add items to cart?</li>
          <li><span class="icon">🔍</span>Can users complete payment?</li>
        </ul>
        <div class="info-panel tip">
          <div class="panel-title">Why?</div>
          <p>A change in the login code may accidentally break other existing features.</p>
        </div>
      </div>

      <div class="topic-section">
        <h2>Why Do We Perform Regression Testing?</h2>
        <p>Whenever developers modify code, there is a possibility that existing functionality may break. Regression testing helps to:</p>

        <h3 class="sub-heading">1. Verify Existing Features</h3>
        <p>Ensures previously working functionality continues to work.</p>
        <div class="compare-grid">
          <div class="compare-card green">
            <h6>Before Code Change</h6>
            <p>Login → <strong>Successful</strong></p>
          </div>
          <div class="compare-card blue">
            <h6>After Adding OTP</h6>
            <p>Login → <strong>Still Successful</strong></p>
          </div>
        </div>

        <h3 class="sub-heading">2. Detect Side Effects</h3>
        <p>A small code change can impact another module.</p>
        <div class="compare-grid">
          <div class="compare-card amber">
            <h6>Developer Changes</h6>
            <p>Payment Module</p>
          </div>
          <div class="compare-card red">
            <h6>Possible Impact</h6>
            <p>Order Confirmation<br/>Invoice Generation<br/>Email Notification</p>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>When Do We Perform Regression Testing?</h2>

        <h3 class="sub-heading">1. New Feature is Added</h3>
        <div class="compare-grid">
          <div class="compare-card purple">
            <h6>Adding</h6>
            <ul style="font-size:.88rem;margin:.3rem 0 0;padding-left:1.1rem;">
              <li>New payment option</li>
              <li>New search filter</li>
              <li>New dashboard</li>
            </ul>
          </div>
          <div class="compare-card blue">
            <h6>Testing</h6>
            <p>Existing features + new feature</p>
          </div>
        </div>

        <h3 class="sub-heading">2. Bug Fix</h3>
        <div class="card-light">
          <p><strong>Bug:</strong> "User cannot upload profile picture." → Developer fixes it.</p>
          <p><strong>Regression checks:</strong> Login, Profile page, Account settings, User dashboard</p>
        </div>

        <h3 class="sub-heading">3. Code Changes</h3>
        <div class="card-light">
          <p><strong>Example:</strong> Developer optimizes database queries.</p>
          <p><strong>Regression ensures:</strong> Data retrieval works, Reports generate correctly, Existing APIs work</p>
        </div>

        <h3 class="sub-heading">4. Configuration Changes</h3>
        <ul class="ans-list">
          <li><span class="icon">🖥️</span>Server change</li>
          <li><span class="icon">🗄️</span>Database change</li>
          <li><span class="icon">🌐</span>Browser version update</li>
          <li><span class="icon">💻</span>Operating system change</li>
        </ul>
      </div>

      <div class="topic-section">
        <h2>Regression Testing Types</h2>
        <div class="card-grid">
          <div class="type-card">
            <h5>1. Complete Regression</h5>
            <p>Testing the <strong>entire application</strong> after major changes.</p>
            <div class="type-meta"><strong>Example:</strong> Major version upgrade — test all modules, all features, all integrations.<br/><strong>Used When:</strong> Large code changes, major releases.</div>
          </div>
          <div class="type-card">
            <h5>2. Partial Regression</h5>
            <p>Testing only <strong>impacted areas</strong> after small changes.</p>
            <div class="type-meta"><strong>Example:</strong> Developer changes Login Module → Test: Login, User Profile, Authentication.</div>
          </div>
          <div class="type-card">
            <h5>3. Selective Regression</h5>
            <p>Selecting a <strong>specific group</strong> of test cases based on the changes.</p>
            <div class="type-meta"><strong>Example:</strong> Payment gateway update → Test: Card payment, UPI payment, Refund process.</div>
          </div>
          <div class="type-card">
            <h5>4. Progressive Regression</h5>
            <p>Performed when <strong>new features are added</strong> and existing test cases are updated.</p>
            <div class="type-meta"><strong>Example:</strong> Adding "Buy Now Pay Later" → New suite: existing checkout tests + new payment tests.</div>
          </div>
          <div class="type-card">
            <h5>5. Retest-All</h5>
            <p>Executing <strong>all available test cases</strong>.</p>
            <div class="type-meta"><strong>Example:</strong> 1000 test cases exist → Execute 1000/1000.<br/><strong>Used For:</strong> Major releases, critical applications.</div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Regression vs Retesting</h2>
        <img src="images/manual/image-26.png" alt="Retesting vs Regression" class="notion-img" />
        <img src="images/manual/image-42.png" alt="Regression vs Retesting visual" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Regression Testing in Agile</h2>
        <p>In Agile projects, regression testing happens:</p>
        <ul class="ans-list green">
          <li><span class="icon">🔄</span>Every sprint</li>
          <li><span class="icon">🚀</span>Before release</li>
          <li><span class="icon">🐛</span>After bug fixes</li>
          <li><span class="icon">⚙️</span>During continuous integration</li>
        </ul>
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is Regression Testing?",
        a: `<div class="ans-hero">Regression Testing ensures new code changes have NOT broken existing functionality.</div>
        <ul class="ans-list green">
          <li><span class="icon">✅</span>Performed after: new feature, bug fix, code change, configuration change</li>
          <li><span class="icon">✅</span>Verifies old features still work correctly</li>
          <li><span class="icon">✅</span>In Agile: happens every sprint and before release</li>
        </ul>`
      },
      {
        q: "What is the difference between Retesting and Regression Testing?",
        a: `<div class="compare-grid">
          <div class="compare-card amber"><h6>Retesting</h6>Testing a <strong>specific bug</strong> that was fixed to verify it is resolved. Narrow and targeted. Only tests the failed test case.</div>
          <div class="compare-card purple"><h6>Regression Testing</h6>Testing the <strong>entire application</strong> (or affected areas) after any change to ensure existing features still work. Broad scope.</div>
        </div>`
      },
      {
        q: "What are the different types of Regression Testing?",
        a: `<ul class="ans-list">
          <li><span class="icon">1️⃣</span><strong>Complete Regression</strong> — entire app tested. Used for major releases.</li>
          <li><span class="icon">2️⃣</span><strong>Partial Regression</strong> — only impacted areas. Used for small changes.</li>
          <li><span class="icon">3️⃣</span><strong>Selective Regression</strong> — specific test cases based on change. Used for targeted updates.</li>
          <li><span class="icon">4️⃣</span><strong>Progressive Regression</strong> — when new features added + test cases updated.</li>
          <li><span class="icon">5️⃣</span><strong>Retest-All</strong> — all test cases executed. Used for critical apps / major releases.</li>
        </ul>`
      },
      {
        q: "When do you perform regression testing in a project?",
        a: `<ul class="ans-list green">
          <li><span class="icon">✨</span>After adding a new feature</li>
          <li><span class="icon">🐛</span>After fixing a bug</li>
          <li><span class="icon">💻</span>After code modifications / refactoring</li>
          <li><span class="icon">⚙️</span>After configuration changes (server, DB, OS)</li>
          <li><span class="icon">🔄</span>Every sprint in Agile projects</li>
        </ul>`
      }
    ]
  },

  // ── 7. STLC — Test Cases & Defect Reporting ──────────────────
  {
    id: 'stlc-test-cases',
    title: 'STLC — Test Cases & Defect Reporting',
    section: 'manual',
    difficulty: 'medium',
    time: '30 min',
    shortDesc: 'STLC phases, use cases vs test scenarios vs test cases, test environment, and defect reporting.',
    content: `
      <div class="topic-section">
        <h2>STLC (Software Testing Life Cycle)</h2>
        <img src="images/manual/image-33.png" alt="STLC phases" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Use Case, Test Scenario &amp; Test Case</h2>
        <img src="images/manual/image-34.png" alt="Use case vs Test Scenario vs Test Case" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Test Environment and Execution</h2>
        <img src="images/manual/image-35.png" alt="Test Environment" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Defect Reporting</h2>
        <img src="images/manual/image-36.png" alt="Defect Reporting" class="notion-img" />
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is the difference between Use Case, Test Scenario, and Test Case?",
        a: `<ul class="ans-list">
          <li><span class="icon">📌</span><strong>Use Case</strong> — Describes how a user interacts with the system to achieve a goal. Written from a user perspective.</li>
          <li><span class="icon">📋</span><strong>Test Scenario</strong> — What to test at a high level. Example: "Verify login functionality".</li>
          <li><span class="icon">📝</span><strong>Test Case</strong> — Step-by-step instructions with input data, expected results. Example: "Enter valid email + password → Click Login → Verify redirect to dashboard".</li>
        </ul>`
      }
    ]
  },

  // ── 8. Test Closure, Metrics & Bug Life Cycle ─────────────────
  {
    id: 'test-closure-metrics',
    title: 'Test Closure, Metrics & Bug Life Cycle',
    section: 'manual',
    difficulty: 'medium',
    time: '25 min',
    shortDesc: 'Test Closure phase, Test Metrics, Bug/Defect Life Cycle, and Integration Testing.',
    content: `
      <div class="topic-section">
        <h2>What is Test Closure?</h2>
        <p>Test Closure is the <strong>final phase of STLC</strong> where the testing team evaluates the entire testing process, documents results, identifies lessons learned, and formally closes all testing activities.</p>

        <div class="ans-hero">Test Closure = verifying all planned testing is complete + documenting what was achieved.</div>

        <h3 class="sub-heading">Why Do We Perform Test Closure?</h3>
        <ul class="ans-list green">
          <li><span class="icon">✅</span>Ensure all testing activities are completed</li>
          <li><span class="icon">✅</span>Verify all test cases have been executed</li>
          <li><span class="icon">✅</span>Confirm critical defects are fixed or accepted</li>
          <li><span class="icon">✅</span>Measure the quality of the application</li>
          <li><span class="icon">✅</span>Document lessons learned for future projects</li>
          <li><span class="icon">✅</span>Share test metrics with stakeholders</li>
          <li><span class="icon">✅</span>Officially sign off the testing phase</li>
        </ul>

        <h3 class="sub-heading">Activities in Test Closure</h3>
        <ul class="ans-list blue">
          <li><span class="icon">1️⃣</span>Review Test Completion Criteria</li>
          <li><span class="icon">2️⃣</span>Verify Test Case Execution Status</li>
          <li><span class="icon">3️⃣</span>Defect Analysis</li>
          <li><span class="icon">4️⃣</span>Prepare Test Metrics</li>
          <li><span class="icon">5️⃣</span>Prepare Test Closure Report</li>
          <li><span class="icon">6️⃣</span>Identify Lessons Learned</li>
          <li><span class="icon">7️⃣</span>Archive Test Artifacts</li>
          <li><span class="icon">8️⃣</span>Obtain Test Sign-off</li>
        </ul>

        <img src="images/manual/image-37.png" alt="Test Closure example" class="notion-img" />
        <img src="images/manual/image-38.png" alt="Test Closure report" class="notion-img" />
        <img src="images/manual/image-39.png" alt="Test Closure artifacts" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Test Metrics</h2>
        <img src="images/manual/image-40.png" alt="Test Metrics" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Bug Life Cycle (Defect Life Cycle)</h2>
        <p>Bug Life Cycle is the process through which a defect goes — from when it is identified by a tester until it is resolved, verified, and closed.</p>
        <div class="ans-hero">Bug Journey: New → Assigned → Open → Fixed → Retesting → Closed (or Reopened)</div>
        <img src="images/manual/image-41.png" alt="Bug Life Cycle" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>Regression vs Retesting (Visual)</h2>
        <img src="images/manual/image-42.png" alt="Regression vs Retesting" class="notion-img" />
      </div>

      <div class="topic-section">
        <h2>What is Integration Testing?</h2>
        <p><strong>Integration Testing</strong> is a software testing level where <strong>multiple modules, components, or systems are combined and tested together</strong> to verify that they work correctly as a group.</p>
        <div class="ans-hero">Integration Testing is a testing process where individually tested components are combined and tested as a group to verify the interaction and communication between them.</div>

        <h4 class="mini-heading">Main Focus Areas</h4>
        <ul class="ans-list blue">
          <li><span class="icon">🔗</span>Communication between modules</li>
          <li><span class="icon">📊</span>Data flow between systems</li>
          <li><span class="icon">🔌</span>Interface problems</li>
          <li><span class="icon">🌐</span>API interactions</li>
          <li><span class="icon">🗄️</span>Database interactions</li>
          <li><span class="icon">⛓️</span>Dependency failures</li>
        </ul>
      </div>

      <div class="topic-section">
        <h2>Why is Integration Testing Required?</h2>
        <p>Individual modules may work correctly but fail when connected.</p>

        <div class="card-light">
          <h5>E-commerce Application Example</h5>
          <p>Each module passes unit testing:</p>
          <ul class="ans-list green" style="margin-bottom:.8rem;">
            <li><span class="icon">✅</span>Login works</li>
            <li><span class="icon">✅</span>Cart works</li>
            <li><span class="icon">✅</span>Payment works</li>
          </ul>
          <p>But during integration:</p>
          <ul class="ans-list red">
            <li><span class="icon">❌</span>User login information is not passed to cart</li>
            <li><span class="icon">❌</span>Cart total is not sent correctly to payment gateway</li>
            <li><span class="icon">❌</span>Payment success response is not updated in order system</li>
          </ul>
          <div class="info-panel tip" style="margin-top:.6rem;">
            <div class="panel-title">Result</div>
            <p>Integration testing catches these issues that unit testing missed!</p>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>Integration Testing Objectives</h2>

        <h3 class="sub-heading">1. Verify Data Flow</h3>
        <ul class="ans-list">
          <li><span class="icon">🔍</span>Is user ID transferred correctly?</li>
          <li><span class="icon">🔍</span>Is data format correct?</li>
        </ul>

        <h3 class="sub-heading">2. Verify Interface Communication</h3>
        <div class="code-block"><code>UI Application
      |
      |
REST API
      |
      |
Database</code></div>
        <ul class="ans-list blue">
          <li><span class="icon">✔️</span>API request format</li>
          <li><span class="icon">✔️</span>API response format</li>
          <li><span class="icon">✔️</span>Error handling</li>
        </ul>

        <h3 class="sub-heading">3. Detect Dependency Issues</h3>
        <div class="code-block"><code>Payment API
     |
Bank Server
     |
Transaction Database</code></div>
        <p style="margin-top:.5rem;">Integration testing validates this entire chain.</p>

        <img src="images/manual/image-43.png" alt="Integration Testing types" class="notion-img" />
      </div>
    `,
    interviewQuestions: [
      {
        q: "What is the Bug Life Cycle and what are its states?",
        a: `<ul class="ans-list">
          <li><span class="icon">🆕</span><strong>New</strong> — Tester raises a new bug</li>
          <li><span class="icon">📋</span><strong>Assigned</strong> — Bug assigned to developer</li>
          <li><span class="icon">🔓</span><strong>Open</strong> — Developer starts working on it</li>
          <li><span class="icon">🔧</span><strong>Fixed</strong> — Developer fixes and marks as Fixed</li>
          <li><span class="icon">🔍</span><strong>Retesting</strong> — Tester verifies the fix</li>
          <li><span class="icon">✅</span><strong>Closed</strong> — Fix verified successfully</li>
          <li><span class="icon">🔄</span><strong>Reopened</strong> — Fix not working, tester reopens</li>
          <li><span class="icon">❌</span><strong>Rejected/Deferred</strong> — Not a bug or postponed</li>
        </ul>`
      },
      {
        q: "Can we close testing if all test cases pass but one critical defect is open?",
        a: `<div class="ans-hero" style="border-left-color:var(--danger);background:linear-gradient(135deg,#dc262614,#ef444414)">No — a critical defect may block production release.</div>
        <p>Test Closure should occur only after the critical defect is fixed <strong>or formally accepted by stakeholders</strong> with documented risk acknowledgment.</p>`
      },
      {
        q: "What is Integration Testing and why is it needed?",
        a: `<div class="ans-hero">Integration Testing verifies that individually tested modules work correctly when combined together.</div>
        <ul class="ans-list">
          <li><span class="icon">🔗</span>Verifies data flow between modules</li>
          <li><span class="icon">🌐</span>Verifies interface/API communication</li>
          <li><span class="icon">⛓️</span>Detects dependency failures between services</li>
        </ul>
        <p>Individual units can pass unit testing but still fail when combined — integration testing catches these interface-level bugs.</p>`
      },
      {
        q: "Give a real-world example where unit tests pass but integration testing fails.",
        a: `<p><strong>E-commerce Application:</strong></p>
        <ul class="ans-list green" style="margin-bottom:.6rem;">
          <li><span class="icon">✅</span>Login module passes unit tests</li>
          <li><span class="icon">✅</span>Cart module passes unit tests</li>
          <li><span class="icon">✅</span>Payment module passes unit tests</li>
        </ul>
        <p>But during integration testing:</p>
        <ul class="ans-list red">
          <li><span class="icon">❌</span>Login session data not passed to Cart — cart shows as empty after login</li>
          <li><span class="icon">❌</span>Cart total not sent correctly to Payment gateway — wrong amount charged</li>
          <li><span class="icon">❌</span>Payment success not updating Order system — order status stays "Pending"</li>
        </ul>`
      }
    ]
  },

  // ── 9. Banking Application — Testing Types Explained ─────────
  {
    id: 'banking-app-testing',
    title: 'Banking App — All Testing Types Explained',
    section: 'manual',
    difficulty: 'medium',
    time: '40 min',
    shortDesc: 'Unit, Smoke, Sanity, Regression, and Integration testing explained with a real Banking Application as the example — step by step, layman-friendly.',
    content: `
      <div class="topic-section">
        <h2>The Banking Application</h2>
        <p>Let's say we are testing a <strong>Banking Application</strong> — a mobile/web app that lets customers:</p>
        <div class="icon-row">
          <div class="icon-chip blue">🏦 Login</div>
          <div class="icon-chip green">💰 Check Balance</div>
          <div class="icon-chip purple">💸 Transfer Money</div>
          <div class="icon-chip amber">📑 View Statements</div>
          <div class="icon-chip blue">💳 Pay Bills</div>
          <div class="icon-chip green">🔒 Change Password</div>
        </div>
        <div class="info-panel">
          <div class="panel-title">Think of it like this</div>
          <p>Imagine a bank hired you as a tester. Before they launch the app to millions of customers, <strong>you need to make sure everything works perfectly</strong>. Now let's understand each type of testing you would do — step by step.</p>
        </div>
      </div>

      <div class="topic-section">
        <h2>Which Testing is Done at Which Level?</h2>
        <table class="table-light-custom">
          <thead>
            <tr><th>Testing Type</th><th>Who Does It?</th><th>When?</th><th>What is Tested?</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Unit Testing</strong></td>
              <td>Developer</td>
              <td>During development</td>
              <td>Individual function / method</td>
            </tr>
            <tr>
              <td><strong>Smoke Testing</strong></td>
              <td>Tester</td>
              <td>After a new build is received</td>
              <td>Critical features — is the app usable?</td>
            </tr>
            <tr>
              <td><strong>Sanity Testing</strong></td>
              <td>Tester</td>
              <td>After a bug fix build</td>
              <td>The specific fixed area only</td>
            </tr>
            <tr>
              <td><strong>Integration Testing</strong></td>
              <td>Tester / Dev</td>
              <td>After modules are combined</td>
              <td>Communication between modules</td>
            </tr>
            <tr>
              <td><strong>Regression Testing</strong></td>
              <td>Tester</td>
              <td>After any change in the app</td>
              <td>All existing features still work</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="topic-section">
        <h2>1. Unit Testing — Testing the Smallest Piece</h2>

        <div class="ans-hero">Unit Testing = Testing one single function in complete isolation, before connecting it to anything else.</div>

        <h3 class="sub-heading">What exactly is a "Unit"?</h3>
        <p>A <strong>unit</strong> is the smallest piece of code — one function, one method, one calculation. Think of it as one single lego block before you build the whole house.</p>

        <div class="info-panel tip">
          <div class="panel-title">Simple Analogy</div>
          <p>Before a car leaves the factory, each part is tested separately — the engine is tested alone, the brakes are tested alone, the lights are tested alone. That is unit testing. You test each part <strong>before</strong> assembling the car.</p>
        </div>

        <h3 class="sub-heading">🏦 Banking App — Unit Testing Examples</h3>
        <p>The developer writes the banking app. Each function they write is tested individually:</p>

        <div class="card-grid">
          <div class="type-card">
            <h5>Function: calculateInterest()</h5>
            <p>Unit test checks:</p>
            <div class="type-meta">
              Input: ₹10,000 at 5% for 1 year<br/>
              Expected Output: ₹500 interest<br/>
              <strong>Pass ✅</strong> if result = ₹500<br/>
              <strong>Fail ❌</strong> if result = ₹50 or ₹5000
            </div>
          </div>
          <div class="type-card">
            <h5>Function: validatePassword()</h5>
            <p>Unit test checks:</p>
            <div class="type-meta">
              Input: "Pass@123" → should return <strong>Valid</strong><br/>
              Input: "abc" → should return <strong>Invalid</strong><br/>
              Input: "12345678" → should return <strong>Invalid</strong> (no special char)
            </div>
          </div>
          <div class="type-card">
            <h5>Function: checkSufficientBalance()</h5>
            <p>Unit test checks:</p>
            <div class="type-meta">
              Balance: ₹5,000 | Transfer: ₹3,000 → <strong>Allow</strong><br/>
              Balance: ₹5,000 | Transfer: ₹7,000 → <strong>Block</strong><br/>
              Balance: ₹5,000 | Transfer: ₹5,000 → <strong>Allow</strong> (exact amount)
            </div>
          </div>
          <div class="type-card">
            <h5>Function: formatAccountNumber()</h5>
            <p>Unit test checks:</p>
            <div class="type-meta">
              Input: "1234567890123456"<br/>
              Expected: "1234 5678 9012 3456"<br/>
              Tests that display format is correct
            </div>
          </div>
        </div>

        <h3 class="sub-heading">Step-by-Step: How Unit Testing Works</h3>
        <ul class="ans-list blue">
          <li><span class="icon">1️⃣</span><strong>Developer writes</strong> the <code>calculateInterest()</code> function</li>
          <li><span class="icon">2️⃣</span><strong>Developer writes a test</strong> — "if I pass ₹10,000 at 5%, the output should be ₹500"</li>
          <li><span class="icon">3️⃣</span><strong>Test runs automatically</strong> — no need to open the browser or app</li>
          <li><span class="icon">4️⃣</span><strong>If output = ₹500</strong> → Test PASSES ✅</li>
          <li><span class="icon">5️⃣</span><strong>If output ≠ ₹500</strong> → Test FAILS ❌ → Developer fixes the function immediately</li>
        </ul>

        <div class="info-panel">
          <div class="panel-title">Key Point for Layman</div>
          <p>Unit testing is done by the <strong>developer themselves</strong>, not by the testing team. It happens in isolation — no database, no browser, no other module. Just the one function being tested.</p>
        </div>

        <div class="compare-grid">
          <div class="compare-card green">
            <h6>✅ What Unit Testing Catches</h6>
            <ul style="font-size:.88rem;margin:.3rem 0 0;padding-left:1.1rem;">
              <li>Wrong calculation logic</li>
              <li>Invalid input not handled</li>
              <li>Wrong output format</li>
              <li>Edge cases (zero, negative, empty)</li>
            </ul>
          </div>
          <div class="compare-card red">
            <h6>❌ What Unit Testing Does NOT Catch</h6>
            <ul style="font-size:.88rem;margin:.3rem 0 0;padding-left:1.1rem;">
              <li>Whether Login connects to Transfer</li>
              <li>Whether the UI looks correct</li>
              <li>Whether the database saves correctly</li>
              <li>End-to-end user flows</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>2. Smoke Testing — "Is the App Even Working?"</h2>

        <div class="ans-hero">Smoke Testing = A quick check to verify the most critical features work before you start detailed testing. If smoke testing fails — send the build back to developers.</div>

        <h3 class="sub-heading">Why "Smoke"?</h3>
        <div class="info-panel tip">
          <div class="panel-title">Origin of the Name</div>
          <p>In electronics, when you power on a new circuit for the first time, you check — "does it smoke or catch fire?" If it smokes = something is critically broken. Same idea in software — you power on the build and check the basics before wasting time on detailed testing.</p>
        </div>

        <h3 class="sub-heading">🏦 Banking App — Smoke Testing Scenario</h3>
        <p>Your team receives <strong>Build v1.0</strong> of the banking application. Before testing all 500 features, you first do a smoke test:</p>

        <div class="card-light">
          <h5 style="color:var(--primary-dark);margin-bottom:.8rem;">Smoke Test Checklist for Banking App</h5>
          <ul class="ans-list green">
            <li><span class="icon">✔️</span><strong>Step 1:</strong> Open the app → Does the login page load? ✅</li>
            <li><span class="icon">✔️</span><strong>Step 2:</strong> Enter valid username + password → Does it log in successfully? ✅</li>
            <li><span class="icon">✔️</span><strong>Step 3:</strong> After login → Does the home/dashboard screen appear? ✅</li>
            <li><span class="icon">✔️</span><strong>Step 4:</strong> Click on "Check Balance" → Does the balance page open? ✅</li>
            <li><span class="icon">✔️</span><strong>Step 5:</strong> Click on "Transfer Money" → Does the transfer screen open? ✅</li>
            <li><span class="icon">✔️</span><strong>Step 6:</strong> Click on "Logout" → Does it log out? ✅</li>
          </ul>
        </div>

        <div class="compare-grid">
          <div class="compare-card green">
            <h6>All 6 Steps Pass ✅</h6>
            <p>Build is STABLE. Proceed with full detailed testing of all 500 features.</p>
          </div>
          <div class="compare-card red">
            <h6>Any Step Fails ❌</h6>
            <p>Build is REJECTED. Sent back to developer immediately. No point testing further — the basics don't work.</p>
          </div>
        </div>

        <h3 class="sub-heading">Step-by-Step: Smoke Testing Process</h3>
        <ul class="ans-list">
          <li><span class="icon">1️⃣</span><strong>Developer delivers a new build</strong> (new version of the app)</li>
          <li><span class="icon">2️⃣</span><strong>Tester receives the build</strong> and runs ~10–15 critical test cases</li>
          <li><span class="icon">3️⃣</span><strong>Only the most important features</strong> are checked — login, navigation, core actions</li>
          <li><span class="icon">4️⃣</span><strong>If all pass</strong> → move to detailed testing (functional, regression, etc.)</li>
          <li><span class="icon">5️⃣</span><strong>If any fail</strong> → reject build, raise defect, send back to developer</li>
          <li><span class="icon">6️⃣</span><strong>Time taken:</strong> typically 30 minutes to 1 hour maximum</li>
        </ul>

        <div class="info-panel warning">
          <div class="panel-title">Important Rule</div>
          <p>Smoke testing is NOT thorough. You are only checking "does the app start and can I reach the main pages". You are NOT checking if the transfer amount is correct or if the OTP works — that comes later.</p>
        </div>
      </div>

      <div class="topic-section">
        <h2>3. Sanity Testing — "Did This Specific Fix Work?"</h2>

        <div class="ans-hero">Sanity Testing = After a bug is fixed, quickly check ONLY that specific area to confirm the fix works — without testing everything else.</div>

        <h3 class="sub-heading">Sanity vs Smoke — The Key Difference</h3>
        <div class="compare-grid">
          <div class="compare-card blue">
            <h6>Smoke Testing</h6>
            <p><strong>Wide but shallow.</strong><br/>Checks many features briefly.<br/>Done on a NEW build.<br/>"Is the whole app working at a basic level?"</p>
          </div>
          <div class="compare-card purple">
            <h6>Sanity Testing</h6>
            <p><strong>Narrow but deep.</strong><br/>Checks ONE specific area thoroughly.<br/>Done after a BUG FIX.<br/>"Did this specific fix work correctly?"</p>
          </div>
        </div>

        <h3 class="sub-heading">🏦 Banking App — Sanity Testing Scenario</h3>

        <div class="card-light">
          <h5 style="margin-bottom:.6rem;">The Bug Report</h5>
          <p><strong>Bug #1045:</strong> "When user enters ₹0 in the Transfer Amount field and clicks Confirm, the transfer goes through instead of showing an error."</p>
          <p><strong>Status:</strong> Developer fixed the bug → New build v1.1 sent to testing team.</p>
        </div>

        <p>Now you do <strong>Sanity Testing</strong> — you ONLY test the Transfer Money feature:</p>

        <div class="card-light">
          <h5 style="color:var(--primary-dark);margin-bottom:.8rem;">Sanity Test — Transfer Amount Validation</h5>
          <ul class="ans-list">
            <li><span class="icon">🔍</span><strong>Test 1:</strong> Enter ₹0 → Click Confirm → Should show "Amount cannot be zero" ✅</li>
            <li><span class="icon">🔍</span><strong>Test 2:</strong> Enter -₹500 (negative) → Click Confirm → Should show "Invalid amount" ✅</li>
            <li><span class="icon">🔍</span><strong>Test 3:</strong> Enter letters "abc" → Should not accept (numeric field only) ✅</li>
            <li><span class="icon">🔍</span><strong>Test 4:</strong> Enter ₹500 (valid) → Should proceed to OTP screen ✅</li>
          </ul>
        </div>

        <div class="info-panel tip">
          <div class="panel-title">Key Point</div>
          <p>You do NOT re-test Login, Balance Check, Bill Payment during sanity testing. Only the specific fixed area — Transfer Amount Validation. This saves time.</p>
        </div>

        <h3 class="sub-heading">Step-by-Step: Sanity Testing Process</h3>
        <ul class="ans-list">
          <li><span class="icon">1️⃣</span><strong>A bug is reported</strong> — e.g., "₹0 transfer goes through"</li>
          <li><span class="icon">2️⃣</span><strong>Developer fixes the bug</strong> and releases a new build</li>
          <li><span class="icon">3️⃣</span><strong>Tester picks up the build</strong> and ONLY tests the fixed area</li>
          <li><span class="icon">4️⃣</span><strong>Test the exact bug scenario</strong> + a few related scenarios around it</li>
          <li><span class="icon">5️⃣</span><strong>If fix works</strong> → Mark bug as Closed ✅</li>
          <li><span class="icon">6️⃣</span><strong>If fix doesn't work</strong> → Reopen the bug ❌ → Send back to developer</li>
        </ul>
      </div>

      <div class="topic-section">
        <h2>4. Integration Testing — "Do the Modules Talk to Each Other Correctly?"</h2>

        <div class="ans-hero">Integration Testing = Testing that happens when you connect two or more modules together to check if they share data correctly and work as one system.</div>

        <h3 class="sub-heading">Why is this needed?</h3>
        <div class="info-panel tip">
          <div class="panel-title">Simple Analogy</div>
          <p>Think of a relay race. Each runner (module) is fast individually. But if Runner 1 drops the baton while passing to Runner 2 — the team loses. Integration testing is checking that the <strong>baton handoff between runners works correctly</strong>.</p>
        </div>

        <h3 class="sub-heading">🏦 Banking App — Modules</h3>
        <p>Our banking app has these separate modules built by different developers:</p>
        <div class="icon-row">
          <div class="icon-chip purple">Module 1: Login</div>
          <div class="icon-chip blue">Module 2: Account Balance</div>
          <div class="icon-chip green">Module 3: Transfer Money</div>
          <div class="icon-chip amber">Module 4: OTP Service</div>
          <div class="icon-chip red">Module 5: Transaction DB</div>
          <div class="icon-chip purple">Module 6: Notifications</div>
        </div>

        <h3 class="sub-heading">🏦 Banking App — Integration Test Scenarios</h3>

        <div class="card-light" style="margin-bottom:1rem;">
          <h5 style="color:var(--primary-dark);margin-bottom:.7rem;">Integration Point 1: Login → Account Balance</h5>
          <p><strong>What we're testing:</strong> After successful login, does the correct account balance appear for THAT user?</p>
          <ul class="ans-list">
            <li><span class="icon">👤</span>User "Karan" logs in with Account No. 1234</li>
            <li><span class="icon">📊</span>Login module passes user ID "1234" to Balance module</li>
            <li><span class="icon">🗄️</span>Balance module fetches balance from database for user 1234</li>
            <li><span class="icon">✅</span><strong>Pass:</strong> Screen shows ₹85,000 (Karan's correct balance)</li>
            <li><span class="icon">❌</span><strong>Fail:</strong> Screen shows ₹0 or another user's balance (data not passed correctly)</li>
          </ul>
        </div>

        <div class="card-light" style="margin-bottom:1rem;">
          <h5 style="color:var(--primary-dark);margin-bottom:.7rem;">Integration Point 2: Transfer Money → OTP Service</h5>
          <p><strong>What we're testing:</strong> When user initiates a transfer, does the OTP get sent to their registered mobile number?</p>
          <ul class="ans-list">
            <li><span class="icon">💸</span>User enters: Send ₹10,000 to Account 5678</li>
            <li><span class="icon">🔗</span>Transfer module calls OTP Service with user's mobile number</li>
            <li><span class="icon">📱</span>OTP Service sends SMS to +91-9876543210</li>
            <li><span class="icon">✅</span><strong>Pass:</strong> User receives OTP on their phone within 30 seconds</li>
            <li><span class="icon">❌</span><strong>Fail:</strong> OTP not received, or sent to wrong number (modules not communicating)</li>
          </ul>
        </div>

        <div class="card-light" style="margin-bottom:1rem;">
          <h5 style="color:var(--primary-dark);margin-bottom:.7rem;">Integration Point 3: Transfer Confirmed → Database + Notification</h5>
          <p><strong>What we're testing:</strong> After successful transfer, is the database updated AND does the user get a notification?</p>
          <ul class="ans-list">
            <li><span class="icon">✔️</span>User enters OTP correctly → Transfer confirmed</li>
            <li><span class="icon">🗄️</span>Transaction DB module should deduct ₹10,000 from Karan's account</li>
            <li><span class="icon">🗄️</span>Transaction DB module should add ₹10,000 to Account 5678</li>
            <li><span class="icon">🔔</span>Notification module should send SMS/email to both sender and receiver</li>
            <li><span class="icon">✅</span><strong>Pass:</strong> Both balances updated correctly + both people notified</li>
            <li><span class="icon">❌</span><strong>Fail:</strong> Money deducted but not added to receiver (DB integration issue)</li>
          </ul>
        </div>

        <h3 class="sub-heading">Step-by-Step: Integration Testing Process</h3>
        <ul class="ans-list blue">
          <li><span class="icon">1️⃣</span><strong>All individual modules</strong> have passed Unit Testing</li>
          <li><span class="icon">2️⃣</span><strong>Modules are connected together</strong> by the development team</li>
          <li><span class="icon">3️⃣</span><strong>Tester identifies integration points</strong> — which modules share data?</li>
          <li><span class="icon">4️⃣</span><strong>Write test cases</strong> for each integration point (as shown above)</li>
          <li><span class="icon">5️⃣</span><strong>Execute tests</strong> — verify data flows correctly between modules</li>
          <li><span class="icon">6️⃣</span><strong>Raise bugs</strong> for any integration failures found</li>
          <li><span class="icon">7️⃣</span><strong>Re-test</strong> after developer fixes integration issues</li>
        </ul>
      </div>

      <div class="topic-section">
        <h2>5. Regression Testing — "Did the New Change Break Anything Old?"</h2>

        <div class="ans-hero">Regression Testing = After any change in the app, re-run all the old tests to make sure existing features still work. "Don't fix one thing and break five others."</div>

        <h3 class="sub-heading">Why is it called "Regression"?</h3>
        <div class="info-panel tip">
          <div class="panel-title">Simple Analogy</div>
          <p>"Regression" means going back to a worse state. Regression testing <strong>prevents the app from going back to a broken state</strong> after a new change is made.</p>
          <p>Think of it like this: You fix a leak in your kitchen pipe. Regression testing is checking that fixing the kitchen pipe didn't accidentally break the bathroom pipe or the water heater.</p>
        </div>

        <h3 class="sub-heading">🏦 Banking App — Regression Testing Scenario</h3>

        <div class="card-light">
          <h5 style="margin-bottom:.6rem;">The New Change</h5>
          <p>The bank decides to add a new feature: <strong>"UPI Payment"</strong>. Developer adds a new UPI module to the app and modifies the Transfer Money module to support UPI.</p>
        </div>

        <p>Now, even though only UPI was added, regression testing checks that <strong>everything that existed before still works</strong>:</p>

        <div class="card-light" style="margin-bottom:1rem;">
          <h5 style="color:var(--primary-dark);margin-bottom:.8rem;">Regression Test Suite — Banking App</h5>
          <table class="table-light-custom">
            <thead><tr><th>Feature</th><th>Test</th><th>Expected Result</th></tr></thead>
            <tbody>
              <tr><td><strong>Login</strong></td><td>Login with valid credentials</td><td>Success → Dashboard appears</td></tr>
              <tr><td><strong>Login</strong></td><td>Login with wrong password</td><td>Error message shown</td></tr>
              <tr><td><strong>Balance</strong></td><td>Check account balance</td><td>Correct balance displayed</td></tr>
              <tr><td><strong>Transfer (NEFT)</strong></td><td>Transfer ₹500 via NEFT</td><td>Money transferred, balance updated</td></tr>
              <tr><td><strong>Transfer (IMPS)</strong></td><td>Transfer ₹1000 via IMPS</td><td>Instant transfer success</td></tr>
              <tr><td><strong>OTP</strong></td><td>Request OTP for transfer</td><td>OTP received on mobile</td></tr>
              <tr><td><strong>Statement</strong></td><td>Download last 3 months statement</td><td>PDF downloaded correctly</td></tr>
              <tr><td><strong>Bill Pay</strong></td><td>Pay electricity bill</td><td>Bill paid, receipt generated</td></tr>
              <tr><td><strong>Password</strong></td><td>Change login password</td><td>Password updated, re-login works</td></tr>
              <tr><td><strong>Logout</strong></td><td>Click logout</td><td>Session ended, redirected to login</td></tr>
            </tbody>
          </table>
        </div>

        <div class="info-panel warning">
          <div class="panel-title">Why We Test Old Features After Adding UPI?</div>
          <p>The developer modified the Transfer Money module to add UPI. That same module also handles NEFT, IMPS, and RTGS. A small mistake in adding UPI code could accidentally break NEFT transfers. Regression testing catches this <strong>before</strong> it reaches real customers.</p>
        </div>

        <h3 class="sub-heading">Step-by-Step: Regression Testing Process</h3>
        <ul class="ans-list green">
          <li><span class="icon">1️⃣</span><strong>A change is made</strong> — new feature, bug fix, code update, anything</li>
          <li><span class="icon">2️⃣</span><strong>New build</strong> is delivered to testing team</li>
          <li><span class="icon">3️⃣</span><strong>Tester runs Smoke Test first</strong> — is the build stable?</li>
          <li><span class="icon">4️⃣</span><strong>Identify impacted areas</strong> — what modules could be affected by the change?</li>
          <li><span class="icon">5️⃣</span><strong>Execute regression test suite</strong> — run all existing test cases for old features</li>
          <li><span class="icon">6️⃣</span><strong>Also test the NEW feature</strong> (UPI) — to make sure the new thing works too</li>
          <li><span class="icon">7️⃣</span><strong>Report any bugs found</strong> — especially if an OLD feature broke due to the new change</li>
          <li><span class="icon">8️⃣</span><strong>After fixes</strong> — re-run regression suite to confirm nothing is broken</li>
        </ul>

        <div class="compare-grid">
          <div class="compare-card green">
            <h6>✅ All Regression Tests Pass</h6>
            <p>The UPI feature was added successfully without breaking any existing features. App is ready for UAT / release.</p>
          </div>
          <div class="compare-card red">
            <h6>❌ Regression Test Fails</h6>
            <p>Example: NEFT Transfer is now showing wrong balance after UPI was added. New bug raised. Developer must fix before release.</p>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <h2>The Full Testing Flow — Banking App</h2>
        <p>Here's the complete order in which all testing types happen for the Banking Application:</p>

        <div class="card-light">
          <div class="icon-row" style="flex-direction:column;align-items:flex-start;gap:.8rem;">
            <div style="display:flex;align-items:flex-start;gap:.7rem;">
              <div class="icon-chip purple" style="min-width:32px;justify-content:center;font-size:1rem;padding:.4rem .5rem;">1</div>
              <div>
                <strong>Developer writes Login function</strong> → runs <span class="hl purple">Unit Test</span> on it alone → passes → moves to next function
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:.7rem;">
              <div class="icon-chip purple" style="min-width:32px;justify-content:center;font-size:1rem;padding:.4rem .5rem;">2</div>
              <div>
                <strong>All modules built + Unit tested</strong> → Connect Login + Balance + Transfer → run <span class="hl blue">Integration Tests</span> → verify data flows correctly between modules
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:.7rem;">
              <div class="icon-chip purple" style="min-width:32px;justify-content:center;font-size:1rem;padding:.4rem .5rem;">3</div>
              <div>
                <strong>Full build v1.0 delivered</strong> → run <span class="hl amber">Smoke Test</span> → Login works? Balance shows? Transfer opens? → Yes → proceed to detailed testing
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:.7rem;">
              <div class="icon-chip purple" style="min-width:32px;justify-content:center;font-size:1rem;padding:.4rem .5rem;">4</div>
              <div>
                <strong>Detailed testing done</strong> → Bug found: "₹0 transfer goes through" → Developer fixes it → New build v1.1 → run <span class="hl green">Sanity Test</span> on Transfer validation only → bug confirmed fixed
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:.7rem;">
              <div class="icon-chip purple" style="min-width:32px;justify-content:center;font-size:1rem;padding:.4rem .5rem;">5</div>
              <div>
                <strong>New UPI feature added</strong> → Build v2.0 delivered → run <span class="hl red">Regression Tests</span> on all existing features (Login, NEFT, IMPS, Balance, Bills) → verify nothing is broken → all pass → ready for release
              </div>
            </div>
          </div>
        </div>

        <div class="info-panel tip">
          <div class="panel-title">The Golden Rule</div>
          <p>In real projects, these testing types don't happen just once. In Agile, <strong>every single sprint</strong> you do Smoke → Integration → Regression → Sanity (for any fixes). The cycle repeats every 2 weeks.</p>
        </div>
      </div>
    `,
    interviewQuestions: [
      {
        q: "Explain Unit, Smoke, Sanity, Integration, and Regression testing using a Banking Application example.",
        a: `<ul class="ans-list">
          <li><span class="icon">🔬</span><strong>Unit Testing:</strong> Developer tests <code>calculateInterest()</code> in isolation — input ₹10,000 at 5% → expected ₹500.</li>
          <li><span class="icon">💨</span><strong>Smoke Testing:</strong> New build received → quickly check: can you login? does dashboard load? does Transfer screen open? If any fail — build rejected.</li>
          <li><span class="icon">🧪</span><strong>Sanity Testing:</strong> Bug fixed — "₹0 transfer was going through". Now only test Transfer validation to confirm the fix works. Don't re-test Login or Balance.</li>
          <li><span class="icon">🔗</span><strong>Integration Testing:</strong> Login module + Balance module connected → verify that after Karan logs in, his balance (₹85,000) appears — not ₹0 or another user's balance.</li>
          <li><span class="icon">🔄</span><strong>Regression Testing:</strong> New UPI feature added → re-run all old test cases (NEFT, IMPS, Login, Bills) to ensure adding UPI didn't accidentally break existing transfers.</li>
        </ul>`
      },
      {
        q: "What is the difference between Smoke and Sanity testing?",
        a: `<div class="compare-grid">
          <div class="compare-card amber">
            <h6>Smoke Testing</h6>
            <p><strong>Wide and shallow.</strong> Tests many features briefly. Done on every NEW build. Checks basic stability — "is the app usable?"</p>
            <p><em>Banking example:</em> Does Login work? Does Transfer screen open? Does Balance show?</p>
          </div>
          <div class="compare-card blue">
            <h6>Sanity Testing</h6>
            <p><strong>Narrow and deep.</strong> Tests ONE specific area thoroughly. Done after a BUG FIX. Checks "did this specific fix work?"</p>
            <p><em>Banking example:</em> After fixing ₹0 transfer bug — only test Transfer Amount validation in depth.</p>
          </div>
        </div>`
      },
      {
        q: "What is Integration Testing and give a banking example where unit tests pass but integration fails?",
        a: `<p>Integration Testing verifies that combined modules share data correctly.</p>
        <div class="card-light" style="margin-top:.5rem;">
          <p><strong>Scenario:</strong> Login module and Account Balance module are tested separately and both pass unit tests. But when connected:</p>
          <ul class="ans-list red" style="margin-top:.4rem;">
            <li><span class="icon">❌</span>Login module doesn't pass the User ID to the Balance module</li>
            <li><span class="icon">❌</span>Balance module shows ₹0 for every user because it never receives the account number</li>
          </ul>
          <p style="margin-top:.5rem;">This is an <strong>integration bug</strong> — both modules work alone, but they fail to communicate.</p>
        </div>`
      },
      {
        q: "Why do we run Regression Testing after adding a new UPI feature in a banking app?",
        a: `<div class="ans-hero">Because the developer modified the Transfer module to add UPI — and that same module handles NEFT, IMPS, RTGS too.</div>
        <p>A bug in the new UPI code could accidentally break existing transfer methods. Regression testing verifies:</p>
        <ul class="ans-list green">
          <li><span class="icon">✅</span>NEFT transfer still works correctly</li>
          <li><span class="icon">✅</span>IMPS instant transfer still works</li>
          <li><span class="icon">✅</span>Balance updates correctly after all transfer types</li>
          <li><span class="icon">✅</span>OTP service still triggers correctly</li>
          <li><span class="icon">✅</span>Transaction history still shows all transfer types</li>
        </ul>`
      },
      {
        q: "At which level should each type of testing be performed?",
        a: `<table class="table-light-custom">
          <thead><tr><th>Testing Type</th><th>Level</th><th>Who</th><th>When</th></tr></thead>
          <tbody>
            <tr><td><strong>Unit Testing</strong></td><td>Component level</td><td>Developer</td><td>During coding of each function</td></tr>
            <tr><td><strong>Integration Testing</strong></td><td>Module level</td><td>Developer / Tester</td><td>After modules are connected</td></tr>
            <tr><td><strong>Smoke Testing</strong></td><td>Build level</td><td>Tester</td><td>On every new build received</td></tr>
            <tr><td><strong>Sanity Testing</strong></td><td>Feature level</td><td>Tester</td><td>After a specific bug fix</td></tr>
            <tr><td><strong>Regression Testing</strong></td><td>System level</td><td>Tester</td><td>After any change in the app</td></tr>
          </tbody>
        </table>`
      }
    ]
  }
];
