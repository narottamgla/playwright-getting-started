# Playwright Getting Started

Welcome to the Playwright Getting Started repository! This project is designed to help you quickly set up and run automated tests using Playwright, a powerful browser automation library.

## Features

- **Cross-Browser Testing**: Supports multiple browsers including Chromium, Firefox, and WebKit.
- **Powerful API**: Simplifies complex browser interactions with an intuitive API.
- **Headless and Headed Mode**: Run tests in both headless and headed modes for flexibility.
- **Auto-Waiting**: Automatically waits for elements to be ready before performing actions.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (version 12 or higher)
- npm (comes with Node.js)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/narottamgla/playwright-getting-started.git
cd playwright-getting-started
```

## Install Dependencies
### Navigate to the project directory and install the required dependencies:


```bash
npm install
```

## Running Tests
### To run the tests, use the following command:

```bash
npx playwright test
```
### View Test Results
After running the tests, you can view the results in the console output. For detailed reports, you can explore the generated artifacts in the test-results directory.

## Project Structure
```bash
playwright-getting-started/
├── locators/
│   ├── homepage.locator.ts
├── actions/
│   ├── homepage.action.ts
├── tests/
│   ├── homepage.test.ts
├── utils/
│   ├── environmentBaseUrl.ts
├── .env
├── package-lock.json
├── package.json
├── playwright.config.js
└── README.md

~~~
