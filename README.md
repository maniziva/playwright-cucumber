# 🧪 Playwright + Cucumber Automation Framework

This is an end-to-end UI test automation framework built with **Playwright** and **Cucumber**, integrated with **CircleCI** for CI/CD execution and HTML reporting.

---

## 🚀 Features

- ✅ BDD with Cucumber (`.feature` files)
- ✅ Playwright automation with Chromium
- ✅ HTML reports via `multiple-cucumber-html-reporter`
- ✅ Dynamic metadata: OS, browser version, duration, host
- ✅ Customizable test data via external JSON
- ✅ CI/CD ready with CircleCI support

---

## 🛠 Project Structure

- **`features/`**: Contains Gherkin feature files and their corresponding step definitions.
  - `ContactApp.feature`, `login.feature`: Feature files defining test scenarios.
  - `step-definitions/`: Step definition files implementing the steps in the feature files.
  - `support/world.ts`: Custom support classes or utilities for the test environment.
  
- **`playwright.config.ts`**: Configuration file for Playwright, defining browser settings, test timeouts, and other options.

- **`reports/`**: Stores test execution reports, including:
  - `cucumber_report.json`: JSON report generated after test execution.
  - `html/`: HTML reports with detailed test results.
  - `screenshots/`: Screenshots captured during test execution.

- **`test-data/`**: Contains test data files, such as `contacts.json`, used in test scenarios.

- **`test-results/`**: Stores metadata about the last test run, such as `.last-run.json`.

- **`.circleci/config.yml`**: Configuration file for CircleCI, enabling continuous integration and automated test execution.

- **`generate-report.ts`**: Script to generate custom reports from test results.

## 📦 Setup Instructions
   ```bash
# 1. Clone the repository
git clone https://github.com/maniziva/playwright-cucumber.git
cd playwright-cucumber

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install --with-deps

# 4. Run tests locally (with report generation)
npm run test:report

# 5. Open the HTML report
open reports/html/index.html     # macOS
# OR
xdg-open reports/html/index.html # Linux
# OR
start reports/html/index.html    # Windows
```

## Running Tests in CI
This project is configured to run tests in CircleCI. Push your changes to the repository, and CircleCI will automatically execute the tests based on the .circleci/config.yml configuration.
