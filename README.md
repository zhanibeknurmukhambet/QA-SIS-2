
# QA Automation Project — SIS 2 / SIS 3

![Playwright Tests](https://github.com/zhanibeknurmukhambet/QA-SIS-2/actions/workflows/playwright.yml/badge.svg?branch=main)

## Project Overview

This project contains automated end-to-end tests for [Practice Software Testing](https://practicesoftwaretesting.com/) using Playwright and JavaScript.

The project was initially developed as part of SIS 2 and extended with Continuous Integration (CI) capabilities for SIS 3 using GitHub Actions.

The CI pipeline runs the application in Docker containers and executes automated tests in parallel using Playwright sharding.

## Technology Stack

- JavaScript (Node.js)
- Playwright Test
- GitHub Actions
- Docker and Docker Compose
- QEMU (ARM64 emulation)
- Git and GitHub
- Chromium

## Automated Test Cases

The project includes five automated test cases:

| ID | Test Case | Description |
|---|---|---|
| TC1 | Register a new customer | Verifies customer registration |
| TC2 | Log in | Tests successful and unsuccessful login |
| TC3 | Buy a product | Tests adding a product to the cart and proceeding to checkout |
| TC4 | Compare two products | Verifies product information and prices |
| TC5 | Reset a password | Tests the password reset request |

## Local Installation and Execution

Clone the repository:

    git clone https://github.com/zhanibeknurmukhambet/QA-SIS-2.git
    cd QA-SIS-2

Install dependencies:

    npm ci

Install Chromium:

    npx playwright install chromium

Run all tests:

    npm test

Run tests using sharding:

    npx playwright test --shard=1/4

## Continuous Integration

The project uses GitHub Actions to automatically execute Playwright tests.

The workflow is located at:

`.github/workflows/playwright.yml`

### Pipeline Triggers

The pipeline runs automatically on:

- Pushes to the `main` branch.
- Pull requests targeting the `main` branch.

### CI Pipeline Stages

1. Check out the repository.
2. Set up Node.js 22.
3. Install dependencies using `npm ci` with npm caching.
4. Install Chromium and required system dependencies.
5. Configure QEMU for ARM64 container compatibility.
6. Download the Docker Compose configuration and start the application.
7. Wait for the database and initialize it with test data.
8. Execute Playwright tests using four parallel shards.
9. Upload test results, traces, and Blob Reports.
10. Merge Blob Reports into a single HTML report.
11. Upload the final HTML report.
12. Stop Docker containers and remove temporary volumes.

### Application Environment

The CI pipeline runs the Practice Software Testing application in Docker containers instead of relying on the publicly hosted website.

The application consists of:

- Angular frontend.
- Laravel API.
- MariaDB database.
- Supporting web and cron services.

The frontend is available to Playwright at `http://127.0.0.1:4200`.

QEMU provides ARM64 emulation for Docker images that are not compatible with the default GitHub Actions runner architecture.

This approach makes the test environment independent of external website availability and bot protection mechanisms.

### Parallel Execution

Tests are distributed across four GitHub Actions jobs using Playwright sharding.

Each shard runs independently, allowing tests to execute in parallel.

The Playwright configuration uses two workers per shard.

### Test Configuration in CI

The CI-specific configuration includes:

- `forbidOnly: true` — prevents accidental execution of tests marked with `test.only`.
- `retries: 2` — retries failed tests twice.
- JUnit reporter — generates machine-readable test results.
- Blob reporter — generates reports that can be merged.
- Trace, screenshot, and video collection on test failures.

### Artifacts

The workflow uploads the following artifacts:

| Artifact | Purpose |
|---|---|
| Test results | JUnit reports and diagnostic files |
| Blob Reports | Intermediate reports from individual shards |
| HTML Report | Combined report containing test results |

Artifacts are retained for 14 days.

### Runtime and CI Results

The first successful GitHub Actions execution produced the following results:

| Metric | Result |
|---|---:|
| Initial local test execution without sharding | 17.37 seconds |
| Complete GitHub Actions pipeline | 1 minute 53 seconds |
| Parallel shards | 4 |
| Successful shards | 4/4 |
| Report merging | Successful |
| Uploaded artifacts | 9 |
| Artifact retention | 14 days |

The local execution time represents the test suite runtime, while the CI runtime includes application startup, database initialization, test execution, and report generation. Therefore, these values are not directly comparable.

**Successful CI run:** [GitHub Actions](https://github.com/zhanibeknurmukhambet/QA-SIS-2/actions/runs/44944275860)

### Merge and Quality Gates

The Playwright test jobs act as CI quality checks.

- Failed automated tests cause the corresponding GitHub Actions checks to fail.
- Passing tests allow the test jobs to succeed.
- HTML reports, traces, screenshots, and videos provide diagnostic information and do not independently determine whether a pull request can be merged.
- The report-merging job runs independently of test success so diagnostic reports can still be published after test failures.
- To enforce merge protection, the relevant GitHub Actions test checks must be configured as required branch protection checks.

## AI Assistance

AI tools were used as supporting tools during the development and documentation of the project.

Details of prompts and AI-assisted work are documented in:

- `Prompt.md`
- `Review.md`

All generated code and recommendations were reviewed and tested before being included in the project.
